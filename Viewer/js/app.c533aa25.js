(function(t) {
    function e(e) {
        for (var s, a, n = e[0], p = e[1], l = e[2], h = 0, d = []; h < n.length; h++) a = n[h], Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), o[a] = 0;
        for (s in p) Object.prototype.hasOwnProperty.call(p, s) && (t[s] = p[s]);
        c && c(e);
        while (d.length) d.shift()();
        return r.push.apply(r, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], s = !0, n = 1; n < i.length; n++) {
                var p = i[n];
                0 !== o[p] && (s = !1)
            }
            s && (r.splice(e--, 1), t = a(a.s = i[0]))
        }
        return t
    }
    var s = {},
        o = {
            app: 0
        },
        r = [];
		
	function ta(t) {
        return "js/" + ({} [t] || t) + "." + {
            "chunk-2d0e6102": "09695d49"
        } [t] + ".js"
    }

    function a(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports
    }
	a.e = function(t) {
        var e = [],
            i = o[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var s = new Promise((function(e, s) {
                    i = o[t] = [e, s]
                }));
                e.push(i[2] = s);
                var r, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = ta(t);
                var c = new Error;
                r = function(e) {
                    l.onerror = l.onload = null, clearTimeout(d);
                    var i = o[t];
                    if (0 !== i) {
                        if (i) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + s + ": " + r + ")", c.name = "ChunkLoadError", c.type = s, c.request = r, i[1](c)
                        }
                        o[t] = void 0
                    }
                };
                var d = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = r, document.head.appendChild(l)
            } return Promise.all(e)
    }, a.m = t, a.c = s, a.d = function(t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) a.d(i, s, function(e) {
                return t[e]
            }.bind(null, s));
        return i
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/", a.oe = function(t) {
		throw console.error(t), t
	};
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        p = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var l = 0; l < n.length; l++) e(n[l]);
    var c = p;
    r.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "034f": function(t, e, i) {
        "use strict";
        var s = i("8a23"),
            o = i.n(s);
        o.a
    },
    "2e98": function(t, e, i) {
        "use strict";
        var s = i("475d"),
            o = i.n(s);
        o.a
    },
    "38f6": function(t, e, i) {},
    "3b78": function(t, e, i) {
        "use strict";
        var s = i("a27d"),
            o = i.n(s);
        o.a
    },
    "3e44": function(t, e, i) {
        "use strict";
        var s = i("5aea"),
            o = i.n(s);
        o.a
    },
    "475d": function(t, e, i) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var s = i("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-app", [i(t.currentComponent, {
                    tag: "component",
                    on: {
                        cleanCurrentComponent: function(e) {
                            t.currentComponent = e
                        }
                    }
                })], 1)
            },
            r = [],
            a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "pb-12",
                    staticStyle: {
                        "text-align": "center",
						"font-size": t.app.useVW ? "0.835vw" : "16px"
                    },
                    style: t.background
                }, [i("v-navigation-drawer", {
                    attrs: {
                        "data-html2canvas-ignore": "",
                        app: "",
						"temporary": ""
                    },
                    model: {
                        value: t.drawer,
                        callback: function(e) {
                            t.drawer = e
                        },
                        expression: "drawer"
                    }
                }, [i("v-layout", {
                    attrs: {
                        column: "",
                        "fill-height": ""
                    }
                }, [i("v-list", {
                    attrs: {
                        dense: ""
                    }
                }, [i("v-list-item", t._g({
                    on: {
                        click: t.closeDrawer
                    }
                }, t.on), [i("v-list-item-icon", [i("v-icon", [t._v("mdi-chevron-left")])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v("Close Menu ")])], 1)], 1), i("v-divider"), i("v-list-item", t._g({
                    on: {
                        click: t.toggleTheme
                    }
                }, t.on), [i("v-list-item-icon", [i("v-icon", [t._v("mdi-theme-light-dark")])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v("Dark/Light Theme ")])], 1)], 1), i("v-list-item", t._g({
                    on: {
                        click: function(o) {
							t.$set(t, "isTop", !t.isTop)
						}
                    }
                }, t.on), [i("v-list-item-icon", [i("v-icon", [t._v("mdi-swap-vertical")])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v("Top/Bottom Point Bar ")])], 1)], 1), i("v-list-item", t._g({
                    on: {
                        click: t.cleanActivated
                    }
                }, t.on), [i("v-list-item-icon", [i("v-icon", [t._v("mdi-select-off")])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v("Clean Selected Choices ")])], 1)], 1), t.app.importedChoicesIsOpen ? i("v-list-item", t._g({
                    on: {
                        click: t.openBuildForm
                    }
                }, t.on), [i("v-list-item-icon", [i("v-icon", [t._v("mdi-format-list-checks")])], 1), i("v-list-item-content", [i("v-list-item-title", [t._v("Open Build Form ")])], 1)], 1) : t._e(), t.app.importedChoicesIsOpen ? i("v-list-item", [i("v-list-item-content", [i("v-list-item-title", [i("v-row", [i("v-col", {
					staticClass: "pt-0 pb-0 pr-0",
					attrs: {
						cols: "9"
					}
				}, [i("v-text-field", {
					staticClass: "pt-0 mt-0",
                    attrs: {
						"hide-details": "",
                        label: "Build Title",
						"prepend-icon": "mdi-content-save-all"
                    },
                    model: {
                        value: t.buildTitle,
                        callback: function(e) {
                            t.$set(t, "buildTitle", e)
                        },
                        expression: "buildTitle"
                    },
					on: {
						keyup: function(e) {
							if (e.key === "Enter" || e.key === "Done") {
								return t.saveBuild()
							}
						}
					}
                })], 1), i("v-col", {
					staticClass: "pa-0"
				}, [i("v-btn", {
                    staticStyle: {
                        color: t.$vuetify.theme.isDark ? "white" : "gray"
                    },
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: t.saveBuild
                    }
                }, [i("v-icon", [t._v("mdi-plus-circle-outline")])], 1)], 1)], 1)])], 1)], 1) : t._e(), t.app.importedChoicesIsOpen ? t._l(t.builds, (function(e) {
                    return i("v-list-item", {
                        key: e.index,
                        on: {
                            click: function(s) {
								return t.loadBuild(e)
							}
                        }
                    }, [i("v-list-item-icon", {
						staticClass: "mr-2"
					}, [i("v-icon", [t._v("mdi-import")])], 1), i("v-list-item-content", [i("v-list-item-title", {
						staticClass: "text-left"
					}, [t._v(t._s(e.title))])], 1), i("v-btn", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(s) {
							s.stopPropagation();
                            return t.deleteBuild(e)
                        }
                    }
                }, [i("v-icon", [t._v("mdi-minus-circle-outline")])], 1)], 1)
                })) : t._e()], 2)], 1)], 1), t.app.pointTypes.length > 0 || t.app.backpack.length > 0 || t.app.importedChoicesIsOpen ? i("v-bottom-navigation", {
					staticClass: t.isTop ? "v-bottom-navigation--top" : "",
                    style: t.pointBar,
                    attrs: {
                        "data-html2canvas-ignore": "",
                        fixed: ""
                    }
                }, [i("v-col", [i("v-btn", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !0
                    }],
                    attrs: {
                        text: "",
                        icon: "",
                        "x-large": ""
                    },
					style: t.pointBarIcon,
                    on: {
                        click: function(e) {
                            t.drawer = e
                        }
                    }
                }, [i("v-icon", [t._v("mdi-format-list-checks")])], 1)], 1), t._l(t.app.pointTypes, (function(e) {
                    return i("v-col", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" != e.activatedId ? (t.app.activated.includes(e.activatedId) || !e.isNotShownPointBar) : !e.isNotShownPointBar,
                            expression: "\n        score.activatedId == '' || app.activated.includes(score.activatedId)\n      "
                        }],
                        key: e.index,
                        style: t.pointBarText
                    }, [i("span", {
						style: e.pointPrivateColorIsOn && "undefined" !== typeof e.privateColor ? ("color: " + e.privateColor.hexa + ";") : ""
					}, [e.iconIsOn && !e.imageOnSide && !e.imageSidePlacement ? i("img", {
						style: "width:" + e.iconWidth + "px;height:" + e.iconHeight + "px;",
						attrs: {
							src: e.image
						}
					}) : t._e(), t._v(" " + t._s(e.beforeText) + " "), e.iconIsOn && e.imageOnSide && !e.imageSidePlacement ? i("img", {
						style: "width:" + e.iconWidth + "px;height:" + e.iconHeight + "px;",
						attrs: {
							src: e.image
						}
					}) : t._e(), i("span", {
                        style: e.startingSum >= 0 ? "undefined" !== typeof t.app.styling.barPointPos ? "color: " + t.app.styling.barPointPos.hex : "" : "undefined" !== typeof t.app.styling.barPointNeg ? "color: " + t.app.styling.barPointNeg.hex : ""
                    }, [t._v(t._s(" " + Math.round(e.startingSum) + " "))]), e.iconIsOn && !e.imageOnSide && e.imageSidePlacement ? i("img", {
						style: "width:" + e.iconWidth + "px;height:" + e.iconHeight + "px;",
						attrs: {
							src: e.image
						}
					}) : t._e(), t._v(" " + t._s(e.afterText) + " "), e.iconIsOn && e.imageOnSide && e.imageSidePlacement ? i("img", {
						style: "width:" + e.iconWidth + "px;height:" + e.iconHeight + "px;",
						attrs: {
							src: e.image
						}
					}) : t._e()])])
                })), i("v-col", [i("v-btn", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
						value: t.app.backpack.length > 0 && (("undefined" === typeof t.app.hideBackpackBtn || t.app.hideBackpackBtn == 0) || (t.app.hideBackpackBtn > 0 && t.app.hideBackpackBtn == t.app.btnBackpackIsOn)),
                        expression: "app.backpack.length > 0"
                    }],
                    attrs: {
                        text: "",
                        icon: "",
                        "x-large": ""
                    },
					style: t.pointBarIcon,
                    on: {
                        click: function(e) {
							if (t.app.preloadImages) t.$set(t.app, "printThis", !0);
                            t.currentComponent = "appBackpackPreview"
                        }
                    }
                }, [i("v-icon", [t._v("mdi-checkbox-marked-circle-outline")])], 1)], 1)], 2) : t._e(), i(t.currentComponent, {
                    tag: "component",
                    attrs: {
                        "data-html2canvas-ignore": ""
                    },
                    on: {
                        cleanCurrentComponent: function(e) {
                            t.currentComponent = e
                        }
                    }
                }), i("v-row", t._l(t.app.rows, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        ref: "printMe",
                        refInFor: !0,
                        class: t.window.width > 1200 && e.width ? "col-6 pt-0 pb-0" : "col-12 pt-0 pb-0"
                    }, [i("app-Row", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.checkRequireds(e),
                            expression: "checkRequireds(row)"
                        }],
                        attrs: {
                            row: e
                        },
                        on: {
                            rowWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), 1), t.snackbar ? i("span", [i("v-snackbar", {
                    attrs: {
                        top: "",
                        timeout: 3e3
                    },
                    model: {
                        value: t.snackbar,
                        callback: function(e) {
                            t.snackbar = e
                        },
                        expression: "snackbar"
                    }
                }, [i("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(t._s(t.text))])])], 1) : t._e()], 1)
            },
            n = [],
            p = (i("96cf"), i("1da1")),
            l = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticStyle: {
                        "text-align": "center"
                    },
                    style: t.rowBody
                }, [t.checkIfDeselect(t.row) ? i("span", [i("div", {
                    style: "" != t.row.title && "" != t.row.text ? t.rowBackground : ""
                }, [1 == t.row.template || t.window.width < 1e3 ? i("div", {
                    staticClass: "col pa-0" + " row-" + t.row.id
                }, [t.row.isButtonRow || "" === t.row.imageSourceTooltip || "undefined" === typeof t.row.imageSourceTooltip ? t.row.isButtonRow ? i("v-btn", {
                    style: t.rowButton,
                    attrs: {
                        disabled: !t.row.buttonType && this.activated.includes(this.row.buttonId) || t.isButtonPressable
                    },
                    on: {
                        click: t.buttonActivate
                    }
                }, [t._v(t._s(t.row.buttonText))]) : t.row.image.length > 0 ? i("img", {
                    style: t.rowImage,
                    attrs: {
                        src: t.row.image
                    }
                }) : t._e() : i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.row.image.length > 0 ? i("img", t._g({
                                style: t.rowImage,
                                attrs: {
                                    src: t.row.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 3206076815)
                }, [i("span", [t._v(t._s(t.row.imageSourceTooltip))])]), "" !== t.row.title ? i("h2", {
                    staticClass: "mb-0",
                    style: t.rowTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowTitle, t.sanitizeArg))
                    }
                }) : t._e(), "" !== t.row.titleText ? i("p", {
                    staticClass: "mb-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.rowText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowText, t.sanitizeArg))
                    }
                }) : t._e()], 1) : t._e(), 2 == t.row.template && t.window.width > 1e3 ? i("div", {
                    staticClass: "row nopadding" + " row-" + t.row.id
                }, [i("div", {
                    staticClass: "col nopadding",
					staticStyle: {
						"max-width": (100 - t.rowImageStyling.rowImageBoxWidth) + "%"
					}
                }, ["" !== t.row.title ? i("h2", {
                    staticClass: "mb-0",
                    style: t.rowTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowTitle, t.sanitizeArg))
                    }
                }) : t._e(), "" !== t.row.titleText ? i("p", {
                    staticClass: "mb-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.rowText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowText, t.sanitizeArg))
                    }
                }) : t._e()]), i("div", {
                    staticClass: "col nopadding",
					staticStyle: {
						"max-width": t.rowImageStyling.rowImageBoxWidth + "%"
					}
                }, [t.row.isButtonRow || "" === t.row.imageSourceTooltip || "undefined" === typeof t.row.imageSourceTooltip ? t.row.isButtonRow ? i("v-btn", {
                    style: t.rowButton,
                    attrs: {
                        disabled: !t.row.buttonType && this.activated.includes(this.row.buttonId) || t.isButtonPressable
                    },
                    on: {
                        click: t.buttonActivate
                    }
                }, [t._v(t._s(t.row.buttonText))]) : t.row.image.length > 0 ? i("img", {
                    style: t.rowImage,
                    attrs: {
                        src: t.row.image
                    }
                }) : t._e() : i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.row.image.length > 0 ? i("img", t._g({
                                style: t.rowImage,
                                attrs: {
                                    src: t.row.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 3206076815)
                }, [i("span", [t._v(t._s(t.row.imageSourceTooltip))])])], 1)]) : t._e(), 3 == t.row.template && t.window.width > 1e3 ? i("div", {
                    staticClass: "row nopadding" + " row-" + t.row.id
                }, [i("div", {
                    staticClass: "col nopadding",
					staticStyle: {
						"max-width": t.rowImageStyling.rowImageBoxWidth + "%"
					}
                }, [t.row.isButtonRow || "" === t.row.imageSourceTooltip || "undefined" === typeof t.row.imageSourceTooltip ? t.row.isButtonRow ? i("v-btn", {
                    ref: "rowBtn",
                    style: t.rowButton,
                    attrs: {
                        disabled: !t.row.buttonType && this.activated.includes(this.row.buttonId) || t.isButtonPressable
                    },
                    on: {
                        click: t.buttonActivate
                    }
                }, [t._v(t._s(t.row.buttonText))]) : t.row.image.length > 0 ? i("img", {
                    style: t.rowImage,
                    attrs: {
                        src: t.row.image
                    }
                }) : t._e() : i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.row.image.length > 0 ? i("img", t._g({
                                style: t.rowImage,
                                attrs: {
                                    src: t.row.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 3206076815)
                }, [i("span", [t._v(t._s(t.row.imageSourceTooltip))])])], 1), i("div", {
                    staticClass: "col nopadding",
					staticStyle: {
						"max-width": (100 - t.rowImageStyling.rowImageBoxWidth) + "%"
					}
                }, ["" !== t.row.title ? i("h2", {
                    staticClass: "mb-0",
                    style: t.rowTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowTitle, t.sanitizeArg))
                    }
                }) : t._e(), "" !== t.row.titleText ? i("p", {
                    staticClass: "mb-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.rowText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowText, t.sanitizeArg))
                    }
                }) : t._e()])]) : t._e(), 4 == t.row.template ? i("div", {
                    staticClass: "col nopadding" + " row-" + t.row.id
                }, ["" !== t.row.title ? i("h2", {
                    staticClass: "mb-0",
                    style: t.rowTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowTitle, t.sanitizeArg))
                    }
                }) : t._e(), "" !== t.row.titleText ? i("p", {
                    staticClass: "mb-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.rowText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowText, t.sanitizeArg))
                    }
                }) : t._e(), t.row.isButtonRow || "" === t.row.imageSourceTooltip || "undefined" === typeof t.row.imageSourceTooltip ? t.row.isButtonRow ? i("v-btn", {
                    ref: "rowBtn",
                    style: t.rowButton,
                    attrs: {
                        disabled: !t.row.buttonType && this.activated.includes(this.row.buttonId) || t.isButtonPressable
                    },
                    on: {
                        click: t.buttonActivate
                    }
                }, [t._v(t._s(t.row.buttonText))]) : t.row.image.length > 0 ? i("img", {
                    style: t.rowImage,
                    attrs: {
                        src: t.row.image
                    }
                }) : t._e() : i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.row.image.length > 0 ? i("img", t._g({
                                style: t.rowImage,
                                attrs: {
                                    src: t.row.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 3206076815)
                }, [i("span", [t._v(t._s(t.row.imageSourceTooltip))])])], 1) : t._e()]), t.row.isResultRow ? i("v-row", {
                    staticClass: "display-flex row objectRow",
                    attrs: {
                        justify: t.row.rowJustify
                    }
                }, t._l(t.resultArray, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "nopadding",
                        class: "" == e.objectWidth || t.row.choicesShareTemplate ? t.row.objectWidth : e.objectWidth
                    }, [i("AppObject", {
                        class: t.objectHeight,
                        attrs: {
                            isEditModeOn: t.row.isEditModeOn,
                            activated: t.activated,
                            object: e,
                            row: t.row,
                            objects: t.row.objects
                        },
                        on: {
                            objectWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), 1) : i("v-row", {
                    staticClass: "display-flex row objectRow pa-0 ma-0",
                    attrs: {
                        justify: t.row.rowJustify
                    }
                }, t._l(t.row.objects, (function(e) {
                    return i("v-col", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.checkRequireds(e) || !t.filterStyling(t.row, e),
                            expression: "checkRequireds(object) || (object.isPrivateStyling ?\n           !object.styling.reqFilterVisibleIsOn : !styling.reqFilterVisibleIsOn)"
                        }],
                        key: e.index,
                        staticClass: "nopadding",
                        class: t.window.width > 500 ? (t.window.width > 1000 ? (e.objectWidth || t.row.objectWidth) : (e.objectWidth || (t.row.objectWidth === "col-12" ? t.row.objectWidth : "col-6"))) : "col-12"
                    }, [i("AppObject", {
                        class: t.objectHeight,
                        attrs: {
                            isEditModeOn: t.row.isEditModeOn,
                            activated: t.activated,
                            object: e,
                            row: t.row,
                            objects: t.row.objects
                        },
                        on: {
                            objectWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), 1)], 1) : t._e(), i(t.currentComponent, {
                    tag: "component",
                    attrs: {
                        row: t.row
                    },
                    on: {
                        rowWasChanged: function(e) {
                            t.row = e
                        },
                        cleanCurrentComponent: function(e) {
                            t.currentComponent = e
                        }
                    }
                }), i("ConfirmDlg", {
                    ref: "confirm"
                })], 1)
            },
            c = [],
            h = (i("4160"), i("caad"), i("c975"), i("a434"), i("4d63"), i("ac1f"), i("25f0"), i("2532"), i("5319"), i("1276"), i("159b"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", [t.checkRequireds(t.row) ? i("span", {
					staticClass: "row" + " row-" + t.row.id + " choice-" + t.object.id + (t.object.isActive ? " choice-selected" + (t.filterStyling.selOverlayOnImage ? " bg-overlay" : "") : " choice-unselected") + (!t.checkRequireds(t.object) ? " choice-disabled" + (t.filterStyling.reqOverlayOnImage ? " bg-overlay" : "") : " choice-enabled"),
                    style: t.objectBackground,
                    on: {
                        click: function(e) {
                            t.row.isInfoRow || t.object.isNotSelectable || t.object.isSelectableMultiple || t.object.forcedActivated || t.object.isButtonObject ? !1 : t.activateObject(t.object, t.row)
                        }
                    }
                }, [1 == t.object.template || t.window.width < 1e3 || t.row.choicesShareTemplate ? i("span", {
                    staticClass: "ma-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, [t.row.resultShowRowTitle ? i("div", {
                    style: t.rowBody
                }, [i("v-col", {
                    staticClass: "pa-0",
                    style: t.scoreText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.findRowTitle, t.sanitizeArg))
                    }
                })], 1) : t._e(), "" !== t.object.imageSourceTooltip && "undefined" !== typeof t.object.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return ["undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", t._g({
                                attrs: {
									src: t.object.image
								},
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s))] : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : "undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", {
                    attrs: {
						src: t.object.image
					},
                    style: "" != t.object.image ? t.objectImage : ""
                }) : i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                })] : t._e(), i("span", [!t.row.objectTitleRemoved ? i("h3", {
                    staticClass: "mb-0",
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 0 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.scores, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "py-0"
                    }, [e.showScore && t.checkRequireds(e) && !t.row.objectScoreRemoved ? i("ObjectScore", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            score: e
                        },
                        on: {
                            scoreWasChanged: function(t) {
                                e = t
                            }
                        }
                    }) : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 1 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired && !t.row.objectRequirementRemoved ? [e.type == "gid" && "undefined" !== typeof t.app.compGR[e.reqId] ? t._l(t.app.globalRequirements[t.app.compGR[e.reqId].globalRequirements].requireds, (function(k) {
							return i("v-col", {
								key: k.index,
								staticClass: "pa-0"
							}, [k.showRequired && !t.row.objectRequirementRemoved ? i("v-col", {
							staticClass: "pa-0",
							style: t.scoreText,
							domProps: {
								innerHTML: t._s(t.$sanitize(t.getChoiceTitle(k), t.sanitizeArg))
							}
						}) : t._e()], 1)
					})) : i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    })] : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 2 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), "" !== t.object.text && !t.row.objectTextRemoved ? i("p", {
                    staticClass: "my-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 3 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [i("ObjectAddon", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            addon: e,
                            row: t.row
                        },
                        on: {
                            addonWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 4 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e()], 2)], 1) : 2 == t.object.template && t.window.width > 1e3 ? i("v-row", {
                    staticClass: "ma-0 pa-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, [i("v-col", {
                    staticClass: "pa-0 mb-0",
					staticStyle: {
						"max-width": t.objectImageStyling.objectImageBoxWidth + "%"
					}
                }, ["" !== t.object.imageSourceTooltip && "undefined" !== typeof t.object.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return ["undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", t._g({
                                attrs: {
									src: t.object.image
								},
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s))] : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : "undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", {
                    attrs: {
						src: t.object.image
					},
                    style: "" != t.object.image ? t.objectImage : ""
                }) : i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                })] : t._e()], 1), i("v-col", {
                    staticClass: "pa-1",
					staticStyle: {
						"max-width": (100 - t.objectImageStyling.objectImageBoxWidth) + "%"
					}
                }, [!t.row.objectTitleRemoved ? i("h3", {
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 0 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.scores, (function(e) {
                    return i("div", {
                        key: e.index
                    }, [e.showScore && t.checkRequireds(e) && !t.row.objectScoreRemoved ? i("ObjectScore", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            score: e
                        },
                        on: {
                            scoreWasChanged: function(t) {
                                e = t
                            }
                        }
                    }) : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 1 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired && !t.row.objectRequirementRemoved ? [e.type == "gid" && "undefined" !== typeof t.app.compGR[e.reqId] ? t._l(t.app.globalRequirements[t.app.compGR[e.reqId].globalRequirements].requireds, (function(k) {
							return i("v-col", {
								key: k.index,
								staticClass: "pa-0"
							}, [k.showRequired && !t.row.objectRequirementRemoved ? i("v-col", {
							staticClass: "pa-0",
							style: t.scoreText,
							domProps: {
								innerHTML: t._s(t.$sanitize(t.getChoiceTitle(k), t.sanitizeArg))
							}
						}) : t._e()], 1)
					})) : i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    })] : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 2 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), "" !== t.object.text && !t.row.objectTextRemoved ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 3 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e()], 2), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0",
                        attrs: {
                            cols: "12"
                        }
                    }, [i("ObjectAddon", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            addon: e,
                            row: t.row
                        },
                        on: {
                            addonWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 4 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e()], 2) : 3 == t.object.template && t.window.width > 1e3 ? i("v-row", {
                    staticClass: "ma-0 pa-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, [i("v-col", {
                    staticClass: "pa-1",
					staticStyle: {
						"max-width": (100 - t.objectImageStyling.objectImageBoxWidth) + "%"
					}
                }, [!t.row.objectTitleRemoved ? i("h3", {
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 0 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.scores, (function(e) {
                    return i("div", {
                        key: e.index
                    }, [e.showScore && t.checkRequireds(e) && !t.row.objectScoreRemoved ? i("ObjectScore", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            score: e
                        },
                        on: {
                            scoreWasChanged: function(t) {
                                e = t
                            }
                        }
                    }) : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 1 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired && !t.row.objectRequirementRemoved ? [e.type == "gid" && "undefined" !== typeof t.app.compGR[e.reqId] ? t._l(t.app.globalRequirements[t.app.compGR[e.reqId].globalRequirements].requireds, (function(k) {
							return i("v-col", {
								key: k.index,
								staticClass: "pa-0"
							}, [k.showRequired && !t.row.objectRequirementRemoved ? i("v-col", {
							staticClass: "pa-0",
							style: t.scoreText,
							domProps: {
								innerHTML: t._s(t.$sanitize(t.getChoiceTitle(k), t.sanitizeArg))
							}
						}) : t._e()], 1)
					})) : i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    })] : t._e()], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 2 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), "" !== t.object.text && !t.row.objectTextRemoved ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e(), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 3 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e()], 2), i("v-col", {
                    staticClass: "pa-0 mb-0",
					staticStyle: {
						"max-width": t.objectImageStyling.objectImageBoxWidth + "%"
					}
                }, ["" !== t.object.imageSourceTooltip && "undefined" !== typeof t.object.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return ["undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", t._g({
								attrs: {
									src: t.object.image
								},
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s))] : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : "undefined" !== typeof t.object.image && t.object.image.length > 0 && !t.row.objectImageRemoved ? [t.app.printThis ? i("img", {
                    attrs: {
						src: t.object.image
					},
                    style: "" != t.object.image ? t.objectImage : ""
                }) : i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                })] : t._e()], 1), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0",
                        attrs: {
                            cols: "12"
                        }
                    }, [i("ObjectAddon", {
                        attrs: {
                            isEditModeOn: t.isEditModeOn,
                            addon: e,
                            row: t.row
                        },
                        on: {
                            addonWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), t.object.isSelectableMultiple && t.multiChoiceCounter && t.app.styling.multiChoiceCounterPosition === 4 ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneLess(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-minus")])], 1), i("v-spacer"), i("v-col", {
                    staticClass: "pa-0",
                    style: t.multiChoiceText,
                    domProps: {
                        innerHTML: t._s(t.object.selectedThisManyTimesProp)
                    }
                }), i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: t.app.styling.multiChoiceCounterSize + "%"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e()], 2) : t._e()], 1) : t._e(), i(t.currentComponent, {
                    tag: "component",
                    attrs: {
                        row: t.object
                    },
                    on: {
                        rowWasChanged: function(e) {
                            t.object = e
                        },
                        cleanCurrentComponent: function(e) {
                            t.currentComponent = e
                        }
                    }
                }), t.snackbar ? i("span", [i("v-snackbar", {
                    attrs: {
                        top: "",
                        timeout: 2e3
                    },
                    model: {
                        value: t.snackbar,
                        callback: function(e) {
                            t.snackbar = e
                        },
                        expression: "snackbar"
                    }
                }, [i("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(t._s(t.text))])])], 1) : t._e(), i("ConfirmDlg", {
                    ref: "confirm"
                })], 1)
            }),
            d = [],
            u = (i("b0c0"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", [t.checkRequireds(t.addon) ? i("div", [1 == t.addon.template || window.innerWidth < 1e3 || t.row.choicesShareTemplate ? i("span", {
                    staticClass: "ma-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, ["" !== t.addon.imageSourceTooltip && "undefined" !== typeof t.addon.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", t._g({
                                style: t.objectImage,
                                attrs: {
                                    src: t.addon.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 4164976176)
                }, [i("span", [t._v(t._s(t.addon.imageSourceTooltip))])]) : t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", {
                    style: t.objectImage,
                    attrs: {
                        src: t.addon.image
                    }
                }) : t._e(), i("span", ["" !== t.addon.title && !t.row.addonTitleRemoved ? i("h4", {
                    style: t.addonTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonTitle, t.sanitizeArg))
                    }
                }) : t._e(), !t.row.addonTextRemoved ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.addonText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonText, t.sanitizeArg))
                    }
                }) : t._e()])], 1) : 2 == t.addon.template && window.innerWidth > 1e3 ? i("v-row", {
					staticClass: "ma-0 pa-0",
					staticStyle: {
						width: "100%"
					}
				}, [i("v-col", {
					staticClass: "pa-0 mb-0",
					staticStyle: {
						"maxWidth": t.objectImageStyling.objectImageBoxWidth + "%"
					}
				}, ["" !== t.addon.imageSourceTooltip && "undefined" !== typeof t.addon.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", t._g({
                                style: t.objectImage,
                                attrs: {
                                    src: t.addon.image
                                }
                            }, i)) : t._e()]
                        }
                    }], null, !1, 4164976176)
                }, [i("span", [t._v(t._s(t.addon.imageSourceTooltip))])]) : t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", {
                    style: t.objectImage,
                    attrs: {
                        src: t.addon.image
                    }
                }) : t._e()], 1), i("v-col", {
					staticClass: "pa-1",
					staticStyle: {
						"max-width": (100 - t.objectImageStyling.objectImageBoxWidth) + "%"
					}
				}, ["" !== t.addon.title && !t.row.addonTitleRemoved ? i("h4", {
                    style: t.addonTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonTitle, t.sanitizeArg))
                    }
                }) : t._e(), !t.row.addonTextRemoved ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.addonText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonText, t.sanitizeArg))
                    }
                }) : t._e()], 1)], 2) : 3 == t.addon.template && window.innerWidth > 1e3 ? i("v-row", {
					staticClass: "ma-0 pa-0",
					staticStyle: {
						width: "100%"
					}
				}, [i("v-col", {
					staticClass: "pa-1",
					staticStyle: {
						"max-width": (100 - t.objectImageStyling.objectImageBoxWidth) + "%"
					}
				}, ["" !== t.addon.title && !t.row.addonTitleRemoved ? i("h4", {
                    style: t.addonTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonTitle, t.sanitizeArg))
                    }
                }) : t._e(), !t.row.addonTextRemoved ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.addonText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonText, t.sanitizeArg))
                    }
                }) : t._e()], 1), i("v-col", {
					staticClass: "pa-0 mb-0",
					staticStyle: {
						"maxWidth": t.objectImageStyling.objectImageBoxWidth + "%"
					}
				}, ["" !== t.addon.imageSourceTooltip && "undefined" !== typeof t.addon.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", t._g({
                                style: t.objectImage,
                                attrs: {
                                    src: t.addon.image
                                }
                            }, i)) : t._e()]
                        }
                    }], null, !1, 4164976176)
                }, [i("span", [t._v(t._s(t.addon.imageSourceTooltip))])]) : t.addon.image.length > 0 && !t.row.addonImageRemoved ? i("img", {
                    style: t.objectImage,
                    attrs: {
                        src: t.addon.image
                    }
                }) : t._e()], 1)], 2) : t._e()]) : t._e()])
            }),
            g = [],
            w = {
                props: {
                    addon: Object,
                    isEditModeOn: Boolean,
                    row: Object
                },
                data: function() {
                    return {
                        sanitizeArg: {
                            allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "font", "iframe", "img"],
                            allowedAttributes: false,
                            allowedStyles: false
                        }
                    }
                },
                computed: {
                    objectImage: function() {
                        var e = "width:" + this.objectImageStyling.objectImageWidth + "%;margin-top:" + this.objectImageStyling.objectImageMarginTop + "%;margin-bottom:" + this.objectImageStyling.objectImageMarginBottom + "%;";
						this.objectImageStyling.objectImgObjectFillIsOn && (e += "px;object-fit:" + this.objectImageStyling.objectImgObjectFillStyle + ";height:" + this.row.styling.objectImgObjectFillHeight + "px;");
                        return e += "border-radius: " + this.objectImageStyling.objectImgBorderRadiusTopLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusTopRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomLeft + 0 + t + ";", this.objectImageStyling.objectImgOverflowIsOn && (e += "overflow:hidden;"), this.objectImageStyling.objectImgBorderIsOn && (e += "border: " + this.objectImageStyling.objectImgBorderWidth + "px " + this.objectImageStyling.objectImgBorderStyle + " " + this.objectImageStyling.objectImgBorderColor + ";"), e
                    },
                    activated: function() {
                        return this.$store.state.app.activated
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    object: function() {
						return this.$parent.object
					},
					objectStyling: function() {
						if (this.object.privateObjectIsOn) return this.object.styling;
						if (this.row.privateObjectIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id];
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateObjectIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateObjectIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling
					},
					objectImageStyling: function() {
						if (this.object.privateObjectImageIsOn) return this.object.styling;
						if (this.row.privateObjectImageIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateObjectImageIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateObjectImageIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
                    textStyling: function() {
						if (this.object.privateTextIsOn) return this.object.styling;
						if (this.row.privateTextIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateTextIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateTextIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					filterStyling: function() {
						if (this.object.privateFilterIsOn) return this.object.styling;
						if (this.row.privateFilterIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
                    addonTitle: function() {
						var e = this.checkRequireds(this.object);
                        return 'font-family: "' + this.textStyling.addonTitle + '";font-size: ' + this.textStyling.addonTitleTextSize + "%;text-align: " + this.textStyling.addonTitleAlign + ";color: " + (!e && this.filterStyling.reqATitleColorIsOn ? this.filterStyling.reqFilterATitleColor : (this.object.isActive && this.filterStyling.selATitleColorIsOn ? this.filterStyling.selFilterATitleColor : this.textStyling.addonTitleColor)) + ";"
                    },
                    addonText: function() {
						var e = this.checkRequireds(this.object);
                        return 'font-family: "' + this.textStyling.addonText + '";font-size: ' + this.textStyling.addonTextTextSize + "%;text-align: " + this.textStyling.addonTextAlign + ";color: " + (!e && this.filterStyling.reqATextColorIsOn ? this.filterStyling.reqFilterATextColor : (this.object.isActive && this.filterStyling.selATextColorIsOn ? this.filterStyling.selFilterATextColor : this.textStyling.addonTextColor)) + ";padding: " + this.objectStyling.objectTextPadding + "px;" + (this.objectStyling.removeSpaceAddonIsOn ? "margin-bottom: 0px;padding-top: 0px;padding-bottom: 0px;" : "")
                    },
                    styling: function() {
                        return this.row.isPrivateStyling ? this.row.styling : this.$store.state.app.styling
                    },
                    replaceAddonTitle: function() {
                        var e = this.addon.title;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    },
                    replaceAddonText: function() {
                        var e = this.addon.text;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    }
                },
                methods: {
                    checkRequireds: function(t) {
                        return this.$store.getters.checkRequireds(t)
                    },
                    deleteEvent: function(t, e) {
                        e.splice(t, 1)
                    }
                }
            },
            f = w,
            b = (i("5e0a"), i("2877")),
            m = i("6544"),
            v = i.n(m),
            y = i("3a2f"),
			S = i("62ad"),
			k = i("0fd9"),
            j = Object(b["a"])(f, u, g, !1, null, "79c0930d", null),
            T = j.exports;
        v()(j, {
			VCol: S["a"],
            VTooltip: y["a"],
            VRow: k["a"]
        });
        var C = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-col", {
                    staticClass: "pa-0"
                }, [t.pointType.iconIsOn && !t.pointType.imageSidePlacement && t.score.showScore && t.isPointtypeActivated ? i("v-row", [i("v-col", {
                    staticClass: "pa-0 ma-0",
                    style: t.scoreText
                }, [i("div", {
                    style: t.pointType.imageOnSide ? "padding-left:3px;padding-right:3px" : "padding-left:1px;padding-right:2px"
                }, [t.pointType.iconIsOn && !t.pointType.imageOnSide ? i("img", {
                    style: "float: left; width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e()]), i("div", [i("p", {
                    staticClass: "pa-0 ma-0",
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.score.beforeText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountBeforeText : "") + " ", t.sanitizeArg))
                    }
                })]), i("div", {
                    style: t.pointType.imageOnSide ? "padding-left:3px;padding-right:3px" : "padding-left:1px;padding-right:2px"
                }, [t.pointType.iconIsOn && t.pointType.imageOnSide ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e()]), i("div", [i("p", {
                    staticClass: "pa-0 ma-0",
                    domProps: {
                        innerHTML: t._s(t.$sanitize((t.score.hideValue ? "" : (t.score.isRandom && !t.score.setValue ? (t.score.maxValue < 0 ? (t.scoreMaxValue + " ~ " + t.scoreMinValue) : (t.scoreMinValue + " ~ " + t.scoreMaxValue)) : (t.score.discountIsOn && t.score.discountShow ? t.score.discountScore : t.scoreValue))) + " " + t.score.afterText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountAfterText : ""), t.sanitizeArg))
                    }
                })])])], 1) : t.pointType.iconIsOn && t.pointType.imageSidePlacement && t.score.showScore && t.isPointtypeActivated ? i("v-row", [i("v-col", {
                    staticClass: "pa-0 ma-0",
                    style: t.scoreText
                }, [i("div", [i("p", {
                    staticClass: "pa-0 ma-0",
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.score.beforeText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountBeforeText : "") + " " + (t.score.hideValue ? "" : (t.score.isRandom && !t.score.setValue ? (t.score.maxValue < 0 ? (t.scoreMaxValue + " ~ " + t.scoreMinValue) : (t.scoreMinValue + " ~ " + t.scoreMaxValue)) : (t.score.discountIsOn && t.score.discountShow ? t.score.discountScore : t.scoreValue))) + " ", t.sanitizeArg))
                    }
                })]), i("div", {
                    style: t.pointType.imageOnSide ? "padding-left:1px;padding-right:2px" : "padding-left:3px;padding-right:3px"
                }, [t.pointType.iconIsOn && !t.pointType.imageOnSide ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e()]), i("div", [i("p", {
                    staticClass: "pa-0 ma-0",
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.score.afterText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountAfterText : "") + " ", t.sanitizeArg))
                    }
                })]), i("div", {
                    style: t.pointType.imageOnSide ? "padding-left:3px;padding-right:3px" : "padding-left:1px;padding-right:2px"
                }, [t.pointType.iconIsOn && t.pointType.imageOnSide ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e()])])], 1) : t.score.showScore && !t.pointType.iconIsOn && t.isPointtypeActivated ? i("v-row", [i("v-col", {
                    staticClass: "pa-0 ma-0",
                    style: t.scoreText
                }, [i("div", [i("p", {
                    staticClass: "pa-0 ma-0",
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.score.beforeText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountBeforeText : "") + " " + (t.score.hideValue ? "" : (t.score.isRandom && !t.score.setValue ? (t.score.maxValue < 0 ? (t.scoreMaxValue + " ~ " + t.scoreMinValue) : (t.scoreMinValue + " ~ " + t.scoreMaxValue)) : (t.score.discountIsOn && t.score.discountShow ? t.score.discountScore : t.scoreValue))) + " " + t.score.afterText + (t.score.discountIsOn && t.score.discountShow ? t.score.discountAfterText : "") + " ", t.sanitizeArg))
                    }
                })])])], 1) : t._e()], 1)
            },
            x = [],
            I = {
                props: {
                    score: Object,
                    isEditModeOn: Boolean
                },
                data: function() {
                    return {
                        currentComponent: "",
                        pointReqOperators: [{
                            text: "+ More than",
                            value: "1"
                        }, {
                            text: "+= More or equal",
                            value: "2"
                        }, {
                            text: "= Equal to",
                            value: "3"
                        }, {
                            text: "-= Less or equal",
                            value: "4"
                        }, {
                            text: "- Less than",
                            value: "5"
                        }],
                        pointType: {
                            id: "text",
                            name: "Points",
                            startingSum: 0,
                            initValue: 0,
                            activatedId: "",
                            afterText: ""
                        },
                        posOrNeg: null,
                        sanitizeArg: {
                            allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "font", "iframe", "img"],
                            allowedAttributes: false,
                            allowedStyles: false
                        }
                    }
                },
                created: function() {
                    for (var t = 0; t < this.pointTypes.length; t++) this.pointTypes[t].id == this.score.id && (this.pointType = this.pointTypes[t]);
                    this.posOrNeg = this.score.value < 0
                },
                computed: {
                    pointTypes: function() {
                        return this.$store.state.app.pointTypes
                    },
                    styling: function() {
                        return this.$store.state.app.styling
                    },
                    scoreText: function() {
                        var t = 'font-family: "' + this.styling.scoreText + '";font-size: ' + this.styling.scoreTextSize + "%;text-align: " + this.styling.scoreTextAlign + ";display: flex; align-items: center; justify-content:center;";
                        return "undefined" !== typeof this.pointType && (this.pointType.pointColorsIsOn ? this.posOrNeg ? t += "color: " + this.pointType.positiveColor.hex + ";" : t += "color: " + this.pointType.negativeColor.hex + ";" : t += "color: " + this.styling.scoreTextColor + ";"), t
                    },
                    scoreValue: function() {
                        var t = this.posOrNeg ? -1 * this.score.value : this.score.value;
                        return this.pointType.plussOrMinusAdded && (t = this.posOrNeg && !this.pointType.plussOrMinusInverted || this.pointType.plussOrMinusInverted && !this.posOrNeg ? "+" + t : "-" + t), t
                    },
					scoreMinValue: function() {
						var minPosOrNeg = this.score.minValue < 0,
							e = minPosOrNeg ? -1 * this.score.minValue : this.score.minValue;
						return this.pointType.plussOrMinusAdded && (e = minPosOrNeg && !this.pointType.plussOrMinusInverted || this.pointType.plussOrMinusInverted && !minPosOrNeg ? "+" + e : "-" + e), e
					},
					scoreMaxValue: function() {
						var maxPosOrNeg = this.score.maxValue < 0,
							e = maxPosOrNeg ? -1 * this.score.maxValue : this.score.maxValue;
						return this.pointType.plussOrMinusAdded && (e = maxPosOrNeg && !this.pointType.plussOrMinusInverted || this.pointType.plussOrMinusInverted && !maxPosOrNeg ? "+" + e : "-" + e), e
					},
                    activated: function() {
                        return this.$store.state.app.activated
                    },
                    isPointtypeActivated: function() {
                        for (var e = 0; e < this.pointTypes.length; e++)
                            if (this.pointTypes[e].id == this.score.id) {
								if ("" != this.pointTypes[e].activatedId) return !!(this.activated.includes(this.pointTypes[e].activatedId) || !this.pointTypes[e].isNotShownObjects);
								else return !this.pointTypes[e].isNotShownObjects;
							}
                        return !0
                    },
                },
                methods: {
                    deleteEvent: function(t, e) {
                        e.splice(t, 1)
                    },
                    updateObject: function() {
                        this.$emit("scoreWasChanged", this.score)
                    },
                    changedOption: function(t) {
                        this.score.name = t.target.options[t.target.options.selectedIndex].text
                    }
                }
            },
            O = I,
            A = Object(b["a"])(O, C, x, !1, null, null, null),
            R = A.exports;
        v()(A, {
            VCol: S["a"],
            VRow: k["a"]
        });
        var q = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-dialog", {
                    attrs: {
                        "max-width": "1200px"
                    },
                    on: {
                        "click:outside": t.cleanCurrentComponent
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [i("v-card", [i("v-card-title", {
                    staticClass: "headline"
                }, [t._v("Image")]), i("v-card-text", [i("v-container", [i("v-switch", {
                    attrs: {
                        label: "Uploaded Image or External URL"
                    },
                    model: {
                        value: t.row.imageIsUrl,
                        callback: function(e) {
                            t.$set(t.row, "imageIsUrl", e)
                        },
                        expression: "row.imageIsUrl"
                    }
                }), i("v-row", [t.row.imageIsUrl ? i("v-col", {
                    staticClass: "col-lg-4"
                }, [i("v-text-field", {
                    attrs: {
                        "hide-details": "",
                        filled: "",
                        placeholder: "",
                        label: "External Image URL"
                    },
                    model: {
                        value: t.row.imageLink,
                        callback: function(e) {
                            t.$set(t.row, "imageLink", e)
                        },
                        expression: "row.imageLink"
                    }
                }), i("v-btn", {
                    staticClass: "mb-2",
                    on: {
                        click: function(e) {
                            t.row.image = t.row.imageLink
                        }
                    }
                }, [t._v("Make This The Image")])], 1) : i("v-col", {
                    staticClass: "col-lg-4"
                }, [i("picture-input", {
                    ref: "pictureInput",
                    attrs: {
                        hideChangeButton: !0,
                        removeButtonClass: "v-btn v-btn--contained theme--light v-size--default",
                        removable: !0,
                        zIndex: 0,
                        crop: !1,
                        prefill: t.row.image.length > 1e3 ? t.row.image : "",
                        "custom-strings": {
                            upload: "<h1>Error!</h1>",
                            drag: "Upload Image"
                        }
                    },
                    on: {
                        change: t.onImageChange,
                        remove: t.onImageRemoval
                    }
                }), t.img ? i("v-col", {
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        cols: "12"
                    }
                }, [i("b", [t._v("Before:")]), i("span", [t._v(t._s(t.original.size))]), i("span", [t._v("|")]), i("b", [t._v("After:")]), i("span", [t._v(t._s(t.compressed.size))])]) : t._e(), i("v-text-field", {
                    attrs: {
                        filled: "",
                        label: "Tooltip That Shows When Hovering over it"
                    },
                    model: {
                        value: t.row.imageSourceTooltip,
                        callback: function(e) {
                            t.$set(t.row, "imageSourceTooltip", e)
                        },
                        expression: "row.imageSourceTooltip"
                    }
                }), 1 == t.currentItem ? i("span", [t._v("Compressing will remove transparency from images.")]) : t._e()], 1), t.row.imageIsUrl ? i("v-col", {
                    staticClass: "col-lg-8"
                }, [t.row.image.length > 0 ? i("clazy-load", {
                    attrs: {
                        src: t.row.image
                    }
                }, [i("img", t._g({
                    attrs: {
                        src: t.row.image
                    }
                }, t.on))]) : t._e()], 1) : i("v-col", {
                    staticClass: "col-lg-8"
                }, [i("v-tabs", {
                    attrs: {
                        grow: ""
                    },
                    model: {
                        value: t.currentItem,
                        callback: function(e) {
                            t.currentItem = e
                        },
                        expression: "currentItem"
                    }
                }, [i("v-tab", [t._v("Cropper")]), i("v-tab", [t._v("Compress")]), i("v-tab-item", [i("v-card", {
                    attrs: {
                        flat: ""
                    }
                }, [i("v-card-text", [i("v-row", {
                    attrs: {
                        justify: "center"
                    }
                }, [i("v-col", [i("v-text-field", {
                    attrs: {
                        type: "number",
                        "hide-details": "",
                        filled: "",
                        label: "Width Aspect"
                    },
                    model: {
                        value: t.aspectHeight,
                        callback: function(e) {
                            t.aspectHeight = e
                        },
                        expression: "aspectHeight"
                    }
                })], 1), i("v-col", [i("v-text-field", {
                    attrs: {
                        type: "number",
                        "hide-details": "",
                        filled: "",
                        label: "Height Aspect"
                    },
                    model: {
                        value: t.aspectWidth,
                        callback: function(e) {
                            t.aspectWidth = e
                        },
                        expression: "aspectWidth"
                    }
                })], 1), i("v-col", [i("v-btn", {
                    staticClass: "mb-2",
                    attrs: {
                        height: "100%"
                    },
                    on: {
                        click: t.ChangeAspect
                    }
                }, [t._v("Change Aspect")])], 1), i("v-btn", {
                    staticClass: "mt-2",
                    on: {
                        click: t.cropImage
                    }
                }, [t._v("Crop Image")]), 0 == t.currentItem ? i("cropper", {
                    ref: "cropper",
                    staticClass: "cropper",
                    attrs: {
                        src: t.row.image,
                        "stencil-props": {
                            aspectRatio: t.aH / t.aW
                        }
                    }
                }) : t._e()], 1)], 1)], 1)], 1), i("v-tab-item", [i("v-card", {
                    staticClass: "pa-0",
                    attrs: {
                        flat: ""
                    }
                }, [i("v-card-text", [i("v-row", {
                    attrs: {
                        justify: "center"
                    }
                }, [i("v-col", [i("v-text-field", {
                    attrs: {
                        type: "number",
                        "hide-details": "",
                        filled: "",
                        label: "Image Scale"
                    },
                    model: {
                        value: t.scale,
                        callback: function(e) {
                            t.scale = e
                        },
                        expression: "scale"
                    }
                })], 1), i("v-col", [i("v-text-field", {
                    attrs: {
                        type: "number",
                        "hide-details": "",
                        filled: "",
                        label: "Image Quality"
                    },
                    model: {
                        value: t.quality,
                        callback: function(e) {
                            t.quality = e
                        },
                        expression: "quality"
                    }
                })], 1), i("v-col", [i("v-btn", {
                    staticClass: "mb-2",
                    attrs: {
                        height: "100%"
                    },
                    on: {
                        click: t.compressImage
                    }
                }, [t._v("Compress Image")])], 1), t.img ? i("v-col", {
                    staticClass: "pt-0",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        cols: "12"
                    }
                }, [t.img ? i("img", {
                    attrs: {
                        alt: "",
                        src: t.img
                    }
                }) : t._e()]) : t._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), i("v-card-actions", [i("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        text: ""
                    },
                    on: {
                        click: t.cleanCurrentComponent
                    }
                }, [t._v("Close")])], 1)], 1)], 1)
            },
            B = [],
            M = (i("d3b7"), i("3ca3"), i("ddb0"), i("2b3d"), i("e597")),
            _ = i("a2c1"),
            P = i("90a4"),
            F = i.n(P),
            V = {
                props: {
                    row: Object
                },
                data: function() {
                    return {
                        dialog: !0,
                        aH: this.aspectHeight,
                        aW: this.aspectWidth,
                        currentItem: 0,
                        img: "",
                        scale: 100,
                        quality: 90,
                        originalSize: !0,
                        original: {},
                        compressed: {},
                        file: {},
                        result: {},
                        reader: {},
                        imgSrc: "",
						autoCompressFlag: false
                    }
                },
                mounted: function() {
                    this.img = this.row.image, this.onChange()
                },
                watch: {
                    scale: function() {
                        return this.redraw()
                    },
                    quality: function() {
                        return this.redraw()
                    }
                },
                components: {
                    PictureInput: M["a"],
                    Cropper: _["a"]
                },
                computed: {
                    styling: function() {
                        return this.$store.state.app.styling
                    },
                    rows: function() {
                        return this.$store.state.app.rows
                    },
                    aspectHeight: {
                        get: function() {
                            for (var t = 0; t < this.rows.length; t++) {
                                if (this.rows[t] == this.row) return this.rows[t].defaultAspectHeight;
                                for (var e = 0; e < this.rows[t].objects.length; e++) {
                                    if (this.rows[t].objects[e] == this.row) return this.rows[t].defaultAspectHeight;
                                    for (var i = 0; i < this.rows[t].objects[e].addons.length; i++)
                                        if (this.rows[t].objects[e].addons[i] == this.row) return this.rows[t].defaultAspectHeight
                                }
                            }
                            return 1
                        },
                        set: function(t) {
                            for (var e = 0; e < this.rows.length; e++) {
                                this.rows[e] == this.row && (this.rows[e].defaultAspectHeight = t);
                                for (var i = 0; i < this.rows[e].objects.length; i++) {
                                    this.rows[e].objects[i] == this.row && (this.rows[e].defaultAspectHeight = t);
                                    for (var s = 0; s < this.rows[e].objects[i].addons.length; s++) this.rows[e].objects[i].addons[s] == this.row && (this.rows[e].defaultAspectHeight = t)
                                }
                            }
                        }
                    },
                    aspectWidth: {
                        get: function() {
                            for (var t = 0; t < this.rows.length; t++) {
                                if (this.rows[t] == this.row) return this.rows[t].defaultAspectWidth;
                                for (var e = 0; e < this.rows[t].objects.length; e++) {
                                    if (this.rows[t].objects[e] == this.row) return this.rows[t].defaultAspectWidth;
                                    for (var i = 0; i < this.rows[t].objects[e].addons.length; i++)
                                        if (this.rows[t].objects[e].addons[i] == this.row) return this.rows[t].defaultAspectWidth
                                }
                            }
                            return 1
                        },
                        set: function(t) {
                            for (var e = 0; e < this.rows.length; e++) {
                                this.rows[e] == this.row && (this.rows[e].defaultAspectWidth = t);
                                for (var i = 0; i < this.rows[e].objects.length; i++) {
                                    this.rows[e].objects[i] == this.row && (this.rows[e].defaultAspectWidth = t);
                                    for (var s = 0; s < this.rows[e].objects[i].addons.length; s++) this.rows[e].objects[i].addons[s] == this.row && (this.rows[e].defaultAspectWidth = t)
                                }
                            }
                        }
                    }
                },
                methods: {
                    onChange: function() {
                        this.file = this.row.image, this.reader = new FileReader, this.reader.readAsDataURL(F()(this.file.split(",")[1], "image/" + this.row.image.name.split(".").pop())), this.reader.onload = this.fileOnLoad
                    },
                    drawImage: function(t) {
                        var e = document.createElement("canvas");
						var sf = this;
                        this.canvas = e;
                        var i = this.canvas.getContext("2d"),
                            s = new Image;
						
						i.onload = function() {
							var o = sf.scale / 100,
								r = s.width * o,
								a = s.height * o;
							sf.canvas.setAttribute("width", r), sf.canvas.setAttribute("height", a), i.drawImage(s, 0, 0, r, a);
							var n = sf.quality ? sf.quality / 100 : 1,
								p = sf.canvas.toDataURL("image/webp", n),
								l = sf.result.file.name;
							l = ".webp";
							var c = p.length - "data:image/webp;base64,".length,
								h = 4 * Math.ceil(c / 3) * .5624896334383812,
								d = {
									canvas: sf.canvas,
									original: sf.result,
									compressed: {
										blob: p,
										base64: p,
										name: l,
										file: sf.buildFile(sf.toBlob(p), l)
									}
								};
							d.compressed.size = Math.round(h / 1e3) + " kB", d.compressed.type = "image/webp", sf.getFiles(d);
							if(sf.autoCompressFlag) {
								if(Math.round(parseInt(sf.origianl.size)) > 5e2 && (sf.file.split(",")[0].includes("image/jpeg") || sf.file.split(",")[0].includes("image/png"))) sf.compressImage();
								sf.autoCompressFlag = false;
							}
						}
						s.src = t;
                    },
                    redraw: function() {
                        this.result.base64 && this.drawImage(this.result.base64)
                    },
                    fileOnLoad: function() {
                        var t = this.file,
                            e = this.reader.result.length - "data:image/png;base64,".length,
                            i = 4 * Math.ceil(e / 3) * .5624896334383812,
                            s = {
                                name: t.name,
                                type: t.type,
                                size: Math.round(i / 1e3) + " kB",
                                base64: this.reader.result,
                                file: t
                            };
                        this.result = s, this.drawImage(this.result.base64)
                    },
                    toBlob: function(t) {
                        var e = F()(t.split(",")[1], "image/jpeg"),
                            i = window.URL.createObjectURL(e);
                        return i
                    },
                    buildFile: function(t, e) {
                        return new File([t], e)
                    },
                    compressImage: function() {
                        this.row.image = this.compressed.blob, this.rowWasChanged()
                    },
                    getFiles: function(t) {
                        this.img = t.compressed.blob, this.original = t.original, this.compressed = t.compressed
                    },
                    onImageChange: function(t) {
                        this.row.image = t, this.autoCompressFlag = true, this.onChange(), this.rowWasChanged(), this.$refs.pictureInput.image ? console.log("Picture loaded.") : console.log("FileReader API not supported: use the <form>, Luke!")
                    },
                    onImageRemoval: function() {
                        this.row.image = "", this.rowWasChanged()
                    },
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    },
                    rowWasChanged: function() {
                        this.$emit("rowWasChanged", this.row)
                    },
                    cropImage: function() {
                        var t = this.$refs.cropper.getResult(),
                            e = t.coordinates,
                            i = t.canvas;
                        this.coordinates = e, this.row.image = i.toDataURL("image/webp", .93), this.onChange()
                    },
                    ChangeAspect: function() {
                        this.aH = this.aspectHeight, this.aW = this.aspectWidth, this.row.defaultAspectWidth = this.aspectWidth, this.row.defaultAspectHeight = this.aspectHeight
                    }
                }
            },
            z = V,
            $ = (i("3e44"), i("8336")),
            L = i("b0af"),
            W = i("99d9"),
            E = i("a523"),
            N = i("169a"),
            U = i("b73d"),
            H = i("71a3"),
            D = i("c671"),
            G = i("fe57"),
            J = i("8654"),
            Y = Object(b["a"])(z, q, B, !1, null, "47ce5319", null),
            X = Y.exports;
        v()(Y, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VCardTitle: W["c"],
            VCol: S["a"],
            VContainer: E["a"],
            VDialog: N["a"],
            VRow: k["a"],
            VSwitch: U["a"],
            VTab: H["a"],
            VTabItem: D["a"],
            VTabs: G["a"],
            VTextField: J["a"]
        });
        var Z = {
                props: {
                    object: Object,
                    objects: Array,
                    isEditModeOn: Boolean,
                    activated: Array,
                    row: Object
                },
                data: function() {
                    return {
                        window: {
                            width: 0,
                            height: 0
                        },
                        on: !0,
                        selectedThisManyTimesProp: 0,
                        multipleUseVariable: 0,
                        snackbar: !1,
                        text: "",
                        templates: [{
                            text: "Image top",
                            value: "1"
                        }, {
                            text: "Image left",
                            value: "2"
                        }, {
                            text: "Image right",
                            value: "3"
                        }],
                        pointReqOperators: [{
                            text: "+ More than",
                            value: "1"
                        }, {
                            text: "+= More or equal",
                            value: "2"
                        }, {
                            text: "= Equal to",
                            value: "3"
                        }, {
                            text: "-= Less or equal",
                            value: "4"
                        }, {
                            text: "- Less than",
                            value: "5"
                        }],
                        sanitizeArg: {
                            allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "font", "iframe", "img"],
                            allowedAttributes: false,
                            allowedStyles: false
                        },
                        currentComponent: "",
						scoreUpdate: "",
						exceptedObjects: [],
						exceptedScores: [],
						linkedObjects: []
                    }
                },
                components: {
                    ObjectAddon: T,
                    ObjectScore: R,
                    AppImageUpload: X,
                    PictureInput: M["a"],
					ConfirmDlg: function() {
                        return i.e("chunk-2d0e6102").then(i.bind(null, "96c2"))
                    }
                },
                computed: {
                    styling: function() {
                        return this.$store.state.app.styling
                    },
					activated: function() {
						return this.$store.state.app.activated
					},
					objectStyling: function() {
						if (this.object.privateObjectIsOn) return this.object.styling;
						if (this.row.privateObjectIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateObjectIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateObjectIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling
					},
					objectImageStyling: function() {
						if (this.object.privateObjectImageIsOn) return this.object.styling;
						if (this.row.privateObjectImageIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateObjectImageIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateObjectImageIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					filterStyling: function() {
						if (this.object.privateFilterIsOn) return this.object.styling;
						if (this.row.privateFilterIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					backgroundStyling: function() {
						if (this.object.privateBackgroundIsOn) return this.object.styling;
						if (this.row.privateBackgroundIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					textStyling: function() {
						if (this.object.privateTextIsOn) return this.object.styling;
						if (this.row.privateTextIsOn) return this.row.styling;
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var a = 0; a < this.object.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[a].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateTextIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateTextIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					rowStyling: function() {
						if (this.row.privateRowIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateRowIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					rowBodyBgColor: function() {
						if (this.row.privateBackgroundIsOn && this.row.styling.bgColorIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && coD.styling.bgColorIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return !1;
					},
					rowBodyBgImage: function() {
						if (this.row.privateBackgroundIsOn && this.row.styling.backgroundImage) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && coD.styling.backgroundImage && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return !1;
					},
                    objectWidths: function() {
                        return this.$store.state.objectWidths
                    },
                    objectTitle: function() {
						var e = this.checkRequireds(this.object);
                        return 'font-family: "' + this.textStyling.objectTitle + '";font-size: ' + this.textStyling.objectTitleTextSize + "%;text-align: " + this.textStyling.objectTitleAlign + ";color: " + (!e && this.filterStyling.reqCTitleColorIsOn ? this.filterStyling.reqFilterCTitleColor : (this.object.isActive && this.filterStyling.selCTitleColorIsOn ? this.filterStyling.selFilterCTitleColor : this.textStyling.objectTitleColor)) + ";"
                    },
                    multiChoiceText: function() {
                        return 'font-family: "' + this.styling.multiChoiceTextFont + '";color: ' + this.textStyling.scoreTextColor + ";font-size: " + this.styling.multiChoiceTextSize + "%;"
                    },
                    multiChoiceButton: function() {
                        return "color: " + this.textStyling.scoreTextColor + ";"
                    },
					multiChoiceCounter: function() {
						if (this.object.hideMultipleCounter) {
							return this.checkRequireds(this.object)
						}
						return !0
					},
                    objectText: function() {
						var e = this.checkRequireds(this.object);
                        return 'font-family: "' + this.textStyling.objectText + '";text-align: ' + this.textStyling.objectTextAlign + ";font-size: " + this.textStyling.objectTextTextSize + "%;color: " + (!e && this.filterStyling.reqCTextColorIsOn ? this.filterStyling.reqFilterCTextColor : (this.object.isActive && this.filterStyling.selCTextColorIsOn ? this.filterStyling.selFilterCTextColor : this.textStyling.objectTextColor)) + ";padding: " + this.objectStyling.objectTextPadding + "px;"
                    },
                    rowBody: function() {
                        var e = "margin-top: 0px;margin-bottom: 0px;";
						if (this.rowBodyBgImage !== !1) e += 'background-image: url("' + this.rowBodyBgImage.backgroundImage + '")' + (this.rowBodyBgImage.isBackgroundRepeat ? ";background-repeat: repeat;" : (this.rowBodyBgImage.isBackgroundStretch ? ";background-size: 100% 100%;" : ";background-size: cover;"));
						if (this.rowBodyBgColor !== !1) e += "background-color: " + this.rowBodyBgColor.backgroundColor + ";";
                        return this.row.isEditModeOn ? e += "margin-left: 1%;margin-right: 1%;" : e += "margin-left: " + this.rowStyling.rowBodyMarginSides + "%;margin-right: " + this.rowStyling.rowBodyMarginSides + "%;", e
                    },
                    findRowTitle: function() {
                        for (var t = "", e = 0; e < this.app.rows.length; e++)
                            if (this.app.rows[e].objects.includes(this.object)) return this.app.rows[e].title;
                        return t
                    },
                    objectBackground: function() {
                        var e = (this.objectStyling.objectBorderImage ? 'border-image: url("' + this.objectStyling.objectBorderImage + '") ' + this.objectStyling.objectBorderImageSliceTop + ' ' + this.objectStyling.objectBorderImageSliceRight + ' ' + this.objectStyling.objectBorderImageSliceBottom + ' ' + this.objectStyling.objectBorderImageSliceLeft + ' / ' + this.objectStyling.objectBorderImageWidth + 'px ' + this.objectStyling.objectBorderImageRepeat + '; border-style: solid; padding: ' + this.objectStyling.objectBorderImageWidth + 'px; ' : "padding: 0px; ") + ((this.backgroundStyling.objectBackgroundImage && !(this.object.isActive && this.filterStyling.selBgColorIsOn && !this.filterStyling.selOverlayOnImage)) ? 'background-image: url("' + this.backgroundStyling.objectBackgroundImage + '");' + (this.backgroundStyling.isObjectBackgroundRepeat ? "background-repeat: repeat;" : (this.backgroundStyling.isObjectBackgroundRepeat ? "background-size: 100% 100%;" : "background-size: cover;")) : "") + (this.object.isActive ? (this.filterStyling.selBgColorIsOn ? "background-color: " + this.filterStyling.selFilterBgColor + "; " : "") : (this.backgroundStyling.objectBgColorIsOn ? "background-color: " + this.backgroundStyling.objectBgColor + "; " : "")) + "margin:" + this.objectStyling.objectMargin + "px;",
							t = this.objectStyling.objectBorderRadiusIsPixels ? "px" : "%",
							o = this.checkRequireds(this.object);
						1 == this.object.template || this.row.choicesShareTemplate ? e += "border-radius: " + this.objectStyling.objectBorderRadiusTopLeft + 0 + t + " " + this.objectStyling.objectBorderRadiusTopRight + 0 + t + " " + this.objectStyling.objectBorderRadiusBottomRight + 0 + t + " " + this.objectStyling.objectBorderRadiusBottomLeft + 0 + t + "; " : 2 == this.object.template ? e += "border-radius: " + this.objectStyling.objectBorderRadiusTopLeft + 0 + t + " " + this.objectStyling.objectBorderRadiusBottomLeft + 0 + t + " " + this.objectStyling.objectBorderRadiusBottomRight + 0 + t + " " + this.objectStyling.objectBorderRadiusTopRight + 0 + t + "; " : e += "border-radius: " + this.objectStyling.objectBorderRadiusBottomLeft + 0 + t + " " + this.objectStyling.objectBorderRadiusTopLeft + 0 + t + " " + this.objectStyling.objectBorderRadiusTopRight + 0 + t + " " + this.objectStyling.objectBorderRadiusBottomRight + 0 + t + "; ", this.objectStyling.objectOverflowIsOn && (e += "overflow:hidden;"), (this.objectStyling.objectBorderIsOn || (this.object.isActive && this.filterStyling.selBorderColorIsOn) || (!o && this.filterStyling.reqBorderColorIsOn)) && (e += "border: " + this.objectStyling.objectBorderWidth + "px " + this.objectStyling.objectBorderStyle + " " + (!o && this.filterStyling.reqBorderColorIsOn ? this.filterStyling.reqFilterBorderColor : (this.object.isActive && this.filterStyling.selBorderColorIsOn ? this.filterStyling.selFilterBorderColor : this.objectStyling.objectBorderColor)) + ";"), e += "filter: ", this.objectStyling.objectDropShadowIsOn && (e += "drop-shadow(" + this.objectStyling.objectDropShadowH + "px " + this.objectStyling.objectDropShadowV + "px " + this.objectStyling.objectDropShadowBlur + "px " + this.objectStyling.objectDropShadowColor + ")");
						if (!this.object.isActive && o) e += this.filterStyling.unselFilterBlurIsOn ? "blur(" + this.filterStyling.unselFilterBlur + "px)" : "", e += this.filterStyling.unselFilterBrightIsOn ? "brightness(" + this.filterStyling.unselFilterBright + "%)" : "", e += this.filterStyling.unselFilterContIsOn ? "contrast(" + this.filterStyling.unselFilterCont + "%)" : "", e += this.filterStyling.unselFilterGrayIsOn ? "grayscale(" + this.filterStyling.unselFilterGray + "%)" : "", e += this.filterStyling.unselFilterHueIsOn ? "hue-rotate(" + this.filterStyling.unselFilterHue + "deg)" : "", e += this.filterStyling.unselFilterInvertIsOn ? "invert(" + this.filterStyling.unselFilterInvert + "%)" : "", e += this.filterStyling.unselFilterOpacIsOn ? "opacity(" + this.filterStyling.unselFilterOpac + "%)" : "", e += this.filterStyling.unselFilterSaturIsOn ? "saturate(" + this.filterStyling.unselFilterSatur + ")" : "", e += this.filterStyling.unselFilterSepiaIsOn ? "sepia(" + this.filterStyling.unselFilterSepia + "%)" : "", this.objectStyling.objectGradientIsOn && (e += ";background-image: linear-gradient(" + this.objectStyling.objectGradient + ")");
						else if (this.object.isActive && o) e += this.filterStyling.selFilterBlurIsOn ? "blur(" + this.filterStyling.selFilterBlur + "px)" : "", e += this.filterStyling.selFilterBrightIsOn ? "brightness(" + this.filterStyling.selFilterBright + "%)" : "", e += this.filterStyling.selFilterContIsOn ? "contrast(" + this.filterStyling.selFilterCont + "%)" : "", e += this.filterStyling.selFilterGrayIsOn ? "grayscale(" + this.filterStyling.selFilterGray + "%)" : "", e += this.filterStyling.selFilterHueIsOn ? "hue-rotate(" + this.filterStyling.selFilterHue + "deg)" : "", e += this.filterStyling.selFilterInvertIsOn ? "invert(" + this.filterStyling.selFilterInvert + "%)" : "", e += this.filterStyling.selFilterOpacIsOn ? "opacity(" + this.filterStyling.selFilterOpac + "%)" : "", e += this.filterStyling.selFilterSaturIsOn ? "saturate(" + this.filterStyling.selFilterSatur + ")" : "", e += this.filterStyling.selFilterSepiaIsOn ? "sepia(" + this.filterStyling.selFilterSepia + "%)" : "", this.objectStyling.objectGradientIsOn && (e += ";background-image: linear-gradient(" + this.objectStyling.objectGradientOnSelect + ")");
						else if (!o) {
							var rm = 'background-image: url("' + this.backgroundStyling.objectBackgroundImage + '");' + (this.backgroundStyling.isObjectBackgroundRepeat ? "background-repeat: repeat;" : (this.backgroundStyling.isObjectBackgroundStretch ? "background-size: 100% 100%;" : "background-size: cover;")) + (this.object.isActive ? (this.filterStyling.selBgColorIsOn ? "background-color: " + this.filterStyling.selFilterBgColor + "; " : "") : (this.backgroundStyling.objectBgColorIsOn ? "background-color: " + this.backgroundStyling.objectBgColor + "; " : ""));
							if (this.backgroundStyling.objectBackgroundImage && this.filterStyling.reqBgColorIsOn && !this.filterStyling.reqOverlayOnImage) e = e.replace(rm, "");
							e += this.filterStyling.reqFilterBlurIsOn ? "blur(" + this.filterStyling.reqFilterBlur + "px)" : "", e += this.filterStyling.reqFilterBrightIsOn ? "brightness(" + this.filterStyling.reqFilterBright + "%)" : "", e += this.filterStyling.reqFilterContIsOn ? "contrast(" + this.filterStyling.reqFilterCont + "%)" : "", e += this.filterStyling.reqFilterGrayIsOn ? "grayscale(" + this.filterStyling.reqFilterGray + "%)" : "", e += this.filterStyling.reqFilterHueIsOn ? "hue-rotate(" + this.filterStyling.reqFilterHue + "deg)" : "", e += this.filterStyling.reqFilterInvertIsOn ? "invert(" + this.filterStyling.reqFilterInvert + "%)" : "", e += this.filterStyling.reqFilterOpacIsOn ? "opacity(" + this.filterStyling.reqFilterOpac + "%)" : "", e += this.filterStyling.reqFilterSaturIsOn ? "saturate(" + this.filterStyling.reqFilterSatur + ")" : "", e += this.filterStyling.reqFilterSepiaIsOn ? "sepia(" + this.filterStyling.reqFilterSepia + "%)" : "", e += (this.filterStyling.reqBgColorIsOn ? ";background-color: " + this.filterStyling.reqFilterBgColor : ""), this.objectStyling.objectGradientIsOn && (e += ";background-image: linear-gradient(" + this.objectStyling.objectGradientOnReq + ")");
						}
						return e += ";", e
                    },
                    objectImage: function() {
                        var e = "width:" + this.objectImageStyling.objectImageWidth + "%;margin-top:" + this.objectImageStyling.objectImageMarginTop + "%;margin-bottom:" + this.objectImageStyling.objectImageMarginBottom + "%;";
                        this.objectImageStyling.objectImgObjectFillIsOn && (e += "px;object-fit:" + this.objectImageStyling.objectImgObjectFillStyle + ";height:" + this.row.styling.objectImgObjectFillHeight + "px;");
                        var t = this.objectImageStyling.objectImgBorderRadiusIsPixels ? "px" : "%";
                        return 1 == this.object.template || this.row.choicesShareTemplate ? e += "border-radius: " + this.objectImageStyling.objectImgBorderRadiusTopLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusTopRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomLeft + 0 + t + ";" : 2 == this.object.template ? e += "border-radius: " + this.objectImageStyling.objectImgBorderRadiusTopLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusTopRight + 0 + t + "; " : e += "border-radius: " + this.objectImageStyling.objectImgBorderRadiusBottomLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusTopLeft + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusTopRight + 0 + t + " " + this.objectImageStyling.objectImgBorderRadiusBottomRight + 0 + t + "; ", this.objectImageStyling.objectImgOverflowIsOn && (e += "overflow:hidden;"), this.objectImageStyling.objectImgBorderIsOn && (e += "border: " + this.objectImageStyling.objectImgBorderWidth + "px " + this.objectImageStyling.objectImgBorderStyle + " " + this.objectImageStyling.objectImgBorderColor + ";"), e
                    },
                    scoreText: function() {
                        return 'font-family: "' + this.textStyling.scoreText + '";font-size: ' + this.textStyling.scoreTextSize + "%;text-align: " + this.textStyling.scoreTextAlign + ";color: " + this.textStyling.scoreTextColor + ";"
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    replaceObjectText: function() {
                        var e = this.object.text;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    },
                    replaceObjectTitleText: function() {
                        var e = this.object.title;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize), this.handleResize(), "undefined" !== typeof this.object.multipleUseVariable && (this.$set(this.object, "selectedThisManyTimesProp", this.object.multipleUseVariable), this.multipleUseVariable = this.object.multipleUseVariable)
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                },
                methods: {
                    handleResize: function() {
                        this.window.width = window.innerWidth, this.window.height = window.innerHeight
                    },
                    multiplyOrDivide: function(t) {
                        var e;
                        if (t.multiplyPointtypeIsOnCheck)
                            for (t.multiplyPointtypeIsOnCheck = !1, e = 0; e < this.app.pointTypes.length; e++) this.app.pointTypes[e].id == t.pointTypeToMultiply && (this.app.pointTypes[e].startingSum -= t.startingSumAtMultiply, console.log("Multiply:" + t.startingSumAtMultiply));
                        if (t.dividePointtypeIsOnCheck)
                            for (t.dividePointtypeIsOnCheck = !1, e = 0; e < this.app.pointTypes.length; e++) this.app.pointTypes[e].id == t.pointTypeToDivide && (this.app.pointTypes[e].startingSum *= t.divideWithThis, console.log("Multiply:"))
                    },
                    setFalse: function(t) {
                        t.isNotSelectable = !1
                    },
                    getChoiceTitle: function(e) {
                        var t, o, g = !0;
						if (e.hideRequired) {
							g = !this.checkRequireds(this.object);
						}
                        if (e.showRequired && g)
                            if ("id" == e.type) {
								var rId = e.reqId.split("/ON#");
								if ("undefined" !== typeof this.app.comp[rId[0]]) {
									var	co = this.app.comp[rId[0]],
										coR = this.app.rows[co.rows],
										coO = coR.objects[co.objects];
									return e.beforeText + " " + (rId.length > 1 ? rId[1] + " " : "") + coO.title + " " + e.afterText
								}
                            } else if ("points" == e.type) {
								for (t = 0; t < this.app.pointTypes.length; t++)
									if (e.reqId == this.app.pointTypes[t].id) return e.beforeText + " " + e.reqPoints + " " + this.app.pointTypes[t].name + " " + e.afterText
							} else if ("or" == e.type) {
								var i = [];
								for (var s = 0; s < e.orRequired.length; s++) {
									var rId = e.orRequired[s].req.split("/ON#");
									if ("undefined" !== typeof this.app.comp[rId[0]]) {
										var	co = this.app.comp[rId[0]],
											coR = this.app.rows[co.rows],
											coO = coR.objects[co.objects];
										o = rId.length > 1 ? rId[1] + " " : "";
										i.push((o + coO.title));
									}
								}
								if (this.app.orderOrReqText == "1") {
									return e.beforeText + " " + i.join(", ") + " " + ("undefined" !== typeof e.orNum ? this.app.defaultOrReq + " " + e.orNum : this.app.defaultOrReq + " 1") + " " + e.afterText
								} else {
									return e.beforeText + " " + ("undefined" !== typeof e.orNum ? e.orNum + " " + this.app.defaultOrReq : "1 " + this.app.defaultOrReq) + " "  + i.join(", ") + " "+ e.afterText
								}
							} else if ("selFromGroups" == e.type) {
								var i = [];
								for (var s = 0; s < e.selGroups.length; s++) {
									if ("undefined" !== typeof this.app.compG[e.selGroups[s]]) {
										var co = this.app.compG[e.selGroups[s]],
											coG = this.app.groups[co.groups];
										i.push(coG.name);
									}
								}
								if (this.app.orderSelReqText == "1") {
									return e.beforeText + " " + i.join(", ") + " " + this.app.defaultSelReq + " " + e.selNum + " " + e.afterText
								} else {
									return e.beforeText + " " + e.selNum + " " + this.app.defaultSelReq + " " + i.join(", ") + " " + e.afterText
								}
								return e.beforeText + " " + e.selNum + (e.selNum > 1 ? " choices " : " choice ") + " from " + i.join(", ") + " " + e.afterText
							} else if ("selFromRows" == e.type) {
								var i = [];
								for (var s = 0; s < e.selRows.length; s++) {
									if ("undefined" !== typeof this.app.compR[e.selRows[s]]) {
										var co = this.app.compR[e.selRows[s]],
											coR = this.app.rows[co.rows];
										i.push(coR.title);
									}
								}
								if (this.app.orderSelReqText == "1") {
									return e.beforeText + " " + i.join(", ") + " " + this.app.defaultSelReq + " " + e.selNum + " " + e.afterText
								} else {
									return e.beforeText + " " + e.selNum + " " + this.app.defaultSelReq + " " + i.join(", ") + " " + e.afterText
								}
								return e.beforeText + " " + e.selNum + (e.selNum > 1 ? " choices " : " choice ") + " from " + i.join(", ") + " " + e.afterText
							} else if ("selFromWhole" == e.type) {
								if (this.app.orderSelReqText == "1") {
									return e.beforeText + " " + this.app.defaultSelReq + " " + e.selNum + " " + e.afterText
								} else {
									return e.beforeText + " " + e.selNum + " " + this.app.defaultSelReq + " " + e.afterText
								}
							}
                        return ""
                    },
                    createNewAddon: function() {
                        this.object.addons.push({
                            id: "",
                            title: this.app.defaultAddonTitle,
                            text: this.app.defaultAddonText,
                            template: "",
                            image: "",
                            requireds: []
                        }), console.log(this.object.addons)
                    },
                    createNewScore: function() {
                        this.object.scores.push({
                            id: "",
                            value: 0,
                            type: "",
                            requireds: [],
                            beforeText: this.app.defaultBeforePoint,
                            afterText: this.app.defaultAfterPoint,
                            showScore: !0
                        })
                    },
                    deleteEvent: function(t, e) {
                        e.splice(t, 1)
                    },
                    moveObjectUp: function() {
                        var t = this.objects.indexOf(this.object);
                        if (t > 0) {
                            var e = this.objects[t];
                            this.$set(this.objects, t, this.objects[t - 1]), this.$set(this.objects, t - 1, e)
                        }
                    },
                    moveObjectDown: function() {
                        var t = this.objects.indexOf(this.object);
                        if (-1 !== t && t < this.objects.length - 1) {
                            var e = this.objects[t];
                            this.$set(this.objects, t, this.objects[t + 1]), this.$set(this.objects, t + 1, e)
                        }
                    },
                    deleteObject: function() {
                        this.objects.splice(this.objects.indexOf(this.object), 1)
                    },
					getObjectName: function(e) {
                        return this.$store.getters.getObjectName(e)
                    },
					getRowName: function(e) {
                        return this.$store.getters.getRowName(e)
                    },
                    checkRequireds: function(t) {
                        return this.$store.getters.checkRequireds(t)
                    },
                    checkPoints: function(t) {
                        for (var e = !0, i = 0; i < t.scores.length; i++)
                            if (this.checkRequireds(t.scores[i]) && !t.scores[i].isActive)
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == t.scores[i].id && this.app.pointTypes[s].belowZeroNotAllowed && this.app.pointTypes[s].startingSum - parseInt(t.scores[i].value) < 0 && (e = !1);
                        return e
                    },
                    checkPointsR: function(t) {
                        for (var e = !0, i = 0; i < t.scores.length; i++)
                            if (this.checkRequireds(t.scores[i]) && !t.scores[i].isActive)
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == t.scores[i].id && this.app.pointTypes[s].belowZeroNotAllowed && this.app.pointTypes[s].startingSum + parseInt(t.scores[i].value) < 0 && (e = !1);
                        return e
                    },
					playBgm: function(e, t, i) {
						if ("undefined" !== typeof bgmPlayer.playerInfo.videoData) {
							var p = this.app.bgmIsPlaying,
								s = bgmPlayer.playerInfo.videoData.video_id,
								o = bgmPlayer.playerInfo.playerState;
							if ("undefined" === typeof this.app.bgmObjectId) this.$set(this.app, "bgmObjectId", e.id);
							if (s == t) {
								if (this.app.bgmObjectId == e.id) {
									if (p) {
										if (o == 2) bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
										else bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o != 2) bgmPlayer.pauseVideo();
									}
								} else {
									if (p) {
										bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o == 1) bgmPlayer.pauseVideo();
									}
								}
							} else {
								if (p) {
									e.bgmNoLoop ? (bgmPlayer.loadVideoById(t), bgmPlayer.setLoop(!1)) : (bgmPlayer.loadVideoById(t), bgmPlayer.loadPlaylist(t), bgmPlayer.setLoop(!0));
									bgmPlayer.playVideo();
									this.$set(this.app, "bgmObjectId", e.id);
								}
							}
						} else {
							if (i < 10) {
								i++;
								setTimeout(() => {
									this.playBgm(e, t, i);
								}, 200);
							}
						}
					},
					updateScoresC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						var nH = 0, nh = 0, nR = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.activated.length; f++) {
							var af = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[af[0]]) {
								var co = this.app.comp[af[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																	if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSDiscount < 0) {
																		coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(co.objects, co.rows), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																	}
																	else {
																		this.app.pointTypes[m].startingSum -= coSDiscount;
																	}
																}
																if (coO.forcedActivated && nh > 0) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																}
															} else {
																(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSDiscount < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSDiscount);
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.activated.splice(nH, 1);
											t.currentChoices -= 1;
											bE = this.checkRequireds(coS);
											this.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nh > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(co.objects, co.rows), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nh > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						} 
					},
					updateScoresS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															var nC = 0;
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																	if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSDiscount < 0) {
																		coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																	}
																	else {
																		this.app.pointTypes[m].startingSum += coSDiscount;
																	}
																}
																if (coO.forcedActivated && nC > 0) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																}
															} else {
																(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSDiscount < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSDiscount);
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.activated.splice(nH, 1);
											t.currentChoices -= 1;
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											this.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											var bE = this.checkRequireds(coS);
											if (bC !== bE) {
												var nC = 0;
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																	
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					updateScoresMulC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + parseInt(e.multipleUseVariable + 1) : e.id;
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											var bE = !1;
											if (e.id == this.exceptedScores[0]) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bE = this.checkRequireds(coS);
													this.activated.splice(this.activated.length - 1, 1), t.currentChoices -= 1;
												} else {
													var aFI = this.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													bE = this.checkRequireds(coS);
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, eid), t.currentChoices += 1);
												}
											} else {
												var nH = this.activated.indexOf(eid);
												this.activated.splice(nH, 1);
												t.currentChoices -= 1;
												var bE = this.checkRequireds(coS);
												this.activated.splice(nH, 0, eid);
												t.currentChoices += 1;
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					updateScoresMulS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											if (e.id == this.exceptedScores[0]) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													this.activated.splice(this.activated.length - 1, 1), t.currentChoices -= 1;
													bE = this.checkRequireds(coS);
												} else {
													var aFI = this.activated[fI].split("/ON#");
													aFI[1] > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													aFI[1] > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, eid), t.currentChoices += 1);
													bE = this.checkRequireds(coS);
												}
											} else {
												this.activated.splice(nR, 1);
												t.currentChoices -= 1;
												bC = this.checkRequireds(coS);
												for (var a = 0; a < o.length; a++) {
													for (var n = 0; n < this.app.pointTypes.length; n++) {
														this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
													}
												}
												this.activated.splice(nR, 0, eid);
												t.currentChoices += 1;
												bE = this.checkRequireds(coS);
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					checkPointsMD: function(e) {
						var ei = 0,
							pT = 0;
						if (e.multiplyPointtypeIsOnCheck || e.dividePointtypeIsOnCheck) {
							if (e.multiplyPointtypeIsOnCheck) {
								for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++) {
										if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
											if (!this.app.pointTypes[m].belowZeroNotAllowed) break
											pT = this.app.pointTypes[m].startingSum;
											for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
												var mdO = this.app.mdObjects[n];
												if (mdO.id != e.id) {
													if (mdO.multiplyPointtypeIsOnCheck) {
														pT -= mdO.startingSumAtMultiply[l];
														pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													} else if (mdO.dividePointtypeIsOnCheck) {
														pT -= mdO.startingSumAtDivide[l];
														pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													}
												} else {
													pT -= mdO.startingSumAtMultiply[l];
													pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													ei = n;
													break
												}
											}
											for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
												var mdO = this.app.mdObjects[n];
												if (mdO.multiplyPointtypeIsOnCheck) {
													if (mdO.multiplyPointtypeIsId) {
														for (var x = 0; x < this.app.pointTypes.length; x++) {
															if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																pT *= this.app.pointTypes[x].startingSum;
															}
														}
													} else {
														pT *= mdO.multiplyWithThis;
													}
												} else if (mdO.dividePointtypeIsOnCheck) {
													pT /= mdO.divideWithThis;
												}
											}
										}
									}
								}
							} else if (e.dividePointtypeIsOnCheck) {
								for (var l = 0; l < e.pointTypeToDivide.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++) {
										if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
											if (!this.app.pointTypes[m].belowZeroNotAllowed) break
											pT = this.app.pointTypes[m].startingSum;
											for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
												var mdO = this.app.mdObjects[n];
												if (mdO.id != e.id) {
													if (mdO.multiplyPointtypeIsOnCheck) {
														pT -= mdO.startingSumAtMultiply[l];
														pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													} else if (mdO.dividePointtypeIsOnCheck) {
														pT -= mdO.startingSumAtDivide[l];
														pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													}
												} else {
													pT -= mdO.startingSumAtDivide[l];
													pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													ei = n;
													break
												}
											}
											for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
												var mdO = this.app.mdObjects[n];
												if (mdO.multiplyPointtypeIsOnCheck) {
													if (mdO.multiplyPointtypeIsId) {
														for (var x = 0; x < this.app.pointTypes.length; x++) {
															if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																pT *= this.app.pointTypes[x].startingSum;
															}
														}
													} else {
														pT *= mdO.multiplyWithThis;
													}
												} else if (mdO.dividePointtypeIsOnCheck) {
													pT /= mdO.divideWithThis;
												}
											}
										}
									}
								}
							}
							if (pT < 0) return !1
						}
						return !0
					},
                    activateObject: function(e, t) {
						var rowType = this.app.compR[t.id].type;
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						var i = this,
							s = this.checkRequireds(e),
							o = this.checkPoints(e),
							k = !0;
						if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
							var cnt = 0;
							for (var r = 0; r < t.objects.length; r++) {
								if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
									if (t.objects[r].isSelectableMultiple)
										for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
									else
										this.activateObject(t.objects[r], t);
									break
								}
								else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
							}
							if (cnt >= t.allowedChoices) k = !1;
						}
						if (s && o && k && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices) && !this.activated.includes(eid) && e.textfieldIsOn && e.customTextfieldIsOn && !this.app.wordChangeComplete) {
							this.$refs.confirm.open("", e.wordPromptText, {noconfirm: !0, word: !0}, e.wordChangeSelect)
							.then(({result, wordText}) => {
								if (result) {
									e.wordChangeSelect = wordText;
								} else {
									e.wordChangeSelect = e.wordChangeDeselect;
								}
								i.$set(i.app, "wordChangeComplete", !0);
								i.activateObject(e, t);
								i.$set(i.app, "wordChangeComplete", !1);
							});
						} else {
							if (!(e.selectOnce && e.isActive) && !this.linkedObjects.includes(e.id)) {
								for (var g = 0; g < e.scores.length; g++)
									if ("undefined" !== typeof e.scores[g].isRandom && e.scores[g].isRandom && !e.scores[g].setValue) {
										e.scores[g].value = Math.floor(Math.random() * (parseInt(e.scores[g].maxValue) - parseInt(e.scores[g].minValue) + 1)) + parseInt(e.scores[g].minValue);
										e.scores[g].setValue = !0;
										for (var a = 0; a < this.app.pointTypes.length; a++) this.app.pointTypes[a].id == e.scores[g].id && this.app.pointTypes[a].belowZeroNotAllowed && this.app.pointTypes[a].startingSum - parseInt(e.scores[g].value) < 0 && (e.scores[g].setValue = !1);
									}
								var tmpScores = [];
								if (!this.exceptedObjects.length == 0 && !this.exceptedObjects.includes(eid)) this.exceptedObjects.push(eid);
								if (s && o && k && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices)) {
									if (this.activated.includes(eid)) {
										if (this.checkPointsMD(e)) {
											for (var a = 0; a < e.scores.length; a++) {
												if (this.checkRequireds(e.scores[a]) && e.scores[a].isActive || e.scores[a].isActive)
													for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += (e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)), e.scores[a].isActive = !1, e.scores[a].setValue = !1, tmpScores.push({id: e.scores[a].id, value: e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[n].id, this.app.pointTypes[n].startingSum));
											}
											var ee = 0, EE = 0;
											if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
												if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
													for (var v = e.activatedRandom.length - 1; v >= 0; v--) {
														var rndV = e.activatedRandom[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[rndV[0]]) {
															var co = this.app.comp[rndV[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.isActive) {
																if (!e.isAllowDeselect) coO.forcedActivated = !1;
																if (coO.isSelectableMultiple) {
																	if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == rndV[0])) {
																		for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																			var cFA = e.cancelForcedActivated[AC].split("/ON#");
																			if (cFA[0] == rndV[0]) {
																				EE = parseInt(rndV[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																				break
																			}
																		}
																		if (EE > 0) {
																			for (var n = 0; n < EE; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (EE < 0) {
																			for (var pp = 0; pp < -1 * EE; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	} else {
																		if (ee = rndV[1], ee > 0) {
																			for (var n = 0; n < ee; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (ee < 0) {
																			for (var pp = 0; pp < -1 * ee; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	}
																} else {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												} else {
													for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
														var pv = p[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[pv[0]]) {
															var co = this.app.comp[pv[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.isActive) {
																if (!e.isAllowDeselect) coO.forcedActivated = !1;
																if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
																	if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
																}
																if (coO.isSelectableMultiple) {
																	if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == pv[0])) {
																		for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																			var cFA = e.cancelForcedActivated[AC].split("/ON#");
																			if (cFA[0] == pv[0]) {
																				EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																				break
																			}
																		}
																		if (EE > 0) {
																			for (var n = 0; n < EE; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (EE < 0) {
																			for (var pp = 0; pp < -1 * EE; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	} else {
																		if (ee = pv[1], ee > 0) {
																			for (var n = 0; n < ee; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (ee < 0) {
																			for (var pp = 0; pp < -1 * ee; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	}
																} else {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												}
											}
											for (var f = 0; f < this.activated.length; f++) {
												var af = this.activated[f].split("/ON#");
												if ("undefined" !== typeof this.app.comp[af[0]]) {
													var co = this.app.comp[af[0]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
														coO = coR.objects[co.objects];
													if (coO.id !== eid && !this.exceptedObjects.includes(coO.id)) {
														var nH = this.activated.indexOf(eid);
														this.activated.splice(nH, 1);
														t.currentChoices -= 1;
														var bR = this.checkRequireds(coO);
														this.activated.splice(nH, 0, eid);
														t.currentChoices += 1;
														if (!bR) {
															this.exceptedObjects.push(coO.id);
															if (coO.isMultipleUseVariable) {
																for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																	coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
																}
																if (coO.forcedActivated) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																}
															} else {
																if (coO.forcedActivated) coO.forcedActivated = !1;
																this.activateObject(coO, coR);
															}
															f--;
														}
													}
												}
											}
											if (e.multiplyPointtypeIsOnCheck) {
												e.multiplyPointtypeIsOnCheck = !1;
												var ei = 0;
												for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
													for (var m = 0; m < this.app.pointTypes.length; m++) {
														if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
															for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
																var mdO = this.app.mdObjects[n];
																if (mdO.id != e.id) {
																	if (mdO.multiplyPointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	} else if (mdO.dividePointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	ei = n;
																	break
																}
															}
															for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
																var mdO = this.app.mdObjects[n];
																if (mdO.multiplyPointtypeIsOnCheck) {
																	if (mdO.multiplyPointtypeIsId) {
																		for (var x = 0; x < this.app.pointTypes.length; x++) {
																			if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																				mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																				this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																			}
																		}
																	} else {
																		mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																		this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																	}
																} else if (mdO.dividePointtypeIsOnCheck) {
																	mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																	this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
																}
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													}
												}
												this.app.mdObjects.splice(ei, 1);
											}
											if (e.dividePointtypeIsOnCheck) {
												e.dividePointtypeIsOnCheck = !1;
												var ei = 0;
												for (var l = 0; l < e.pointTypeToDivide.length; l++) {
													for (var m = 0; m < this.app.pointTypes.length; m++) {
														if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
															for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
																var mdO = this.app.mdObjects[n];
																if (mdO.id != e.id) {
																	if (mdO.multiplyPointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	} else if (mdO.dividePointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	ei = n;
																	break
																}
															}
															for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
																var mdO = this.app.mdObjects[n];
																if (mdO.multiplyPointtypeIsOnCheck) {
																	if (mdO.multiplyPointtypeIsId) {
																		for (var x = 0; x < this.app.pointTypes.length; x++) {
																			if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																				mdO.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																				this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																			}
																		}
																	} else {
																		mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																		this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																	}
																} else if (mdO.dividePointtypeIsOnCheck) {
																	mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																	this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
																}
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum)
														}
													}
												}
												this.app.mdObjects.splice(ei, 1);
											}
											if (e.isChangeVariables) {
												for (var m = 0; m < e.changedVariables.length; m++) {
													for (var n = 0; n < this.app.variables.length; n++) {
														if (e.changedVariables[m] == this.app.variables[n].id) {
															if (e.changeType == "1" && this.app.variables[n].isTrue) this.app.variables[n].isTrue = !1;
															else if (e.changeType == "2" && !this.app.variables[n].isTrue) this.app.variables[n].isTrue = !0;
															else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
														}
													}
												}
											}
											if (e.textfieldIsOn) {
												for (var m = 0; m < this.app.words.length; m++) {
													if (this.app.words[m].id == e.idOfTheTextfieldWord) {
														this.app.words[m].replaceText = "undefined" === typeof e.wordChangeDeselect ? "" : e.wordChangeDeselect;
														this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
													}
												}
											}
											if (e.addToAllowChoice)
												if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
													var co = this.app.compR[e.idOfAllowChoice],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
													var d = coR.currentChoices;
													if (d > coR.allowedChoices) {
														var u = d - coR.allowedChoices;
														for (var v = 0; v < coR.objects.length; v++) {
															if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
																if (coR.objects[v].isSelectableMultiple)
																	for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
																else
																	this.activateObject(coR.objects[v], coR);
																u--;
															}
														}
													}
												}
											this.updateScoresC(e, t, tmpScores, 0);
											if (e.isImageUpload) {
												this.$set(e, "image", e.defaultImage);
											}
											if (e.backpackBtnRequirement)
												this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.changePointBar) {
												if (e.changeBarBgColorIsOn) {
													var a = this.app.styling.barBackgroundColor;
													this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
													this.$set(e, "changedBarBgColor", a);
												}
												if (e.changeBarTextColorIsOn) {
													var a = this.app.styling.barTextColor;
													this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
													this.$set(e, "changedBarTextColor", a);
												}
												if (e.changeBarBgColorIsOn) {
													var a = this.app.styling.barIconColor;
													this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
													this.$set(e, "changedBarIconColor", a);
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													this.app.bgmIsPlaying = !1;
													this.playBgm(e, e.bgmId, 0);
												}
											}
											if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
												if ("undefined" !== typeof bgmPlayer.unMute) {
													bgmPlayer.unMute();
												}
											}
											if (e.discountOther)
												if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
													for (var a = 0; a < this.app.groups.length; a++) {
														if (e.discountGroups.includes(this.app.groups[a].id)) {
															for (var b = 0; b < this.app.groups[a].elements.length; b++)
																if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																	var co = this.app.comp[this.app.groups[a].elements[b].id],
																		coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																		coO = coR.objects[co.objects];
																	for (var c = 0; c < coO.scores.length; c++) {
																		var coS = coO.scores[c];
																		if (coS.discountedFrom == e.id) this.$set(coS, "discountIsOn", false);
																	}
																}
														}
													}
											if (e.isContentHidden) {
												for (var a = 0; a < e.hiddenContentsRow.length; a++) {
													if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
														var co = this.app.compR[e.hiddenContentsRow[a]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
														for (var b = 0; b < e.hiddenContentsType.length; b++) {
															if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", false);
															else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", false);
															else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", false);
															else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", false);
															else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", false);
															else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", false);
															else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", false);
															else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", false);
														}
													}
												}
											}
											this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1;
											e.isActive = !e.isActive, this.updateActivated();
										}
									} else {
										if (e.discountOther)
											if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
												for (var a = 0; a < this.app.groups.length; a++) {
													if (e.discountGroups.includes(this.app.groups[a].id)) {
														for (var b = 0; b < this.app.groups[a].elements.length; b++)
															if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																var co = this.app.comp[this.app.groups[a].elements[b].id],
																	coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																	coO = coR.objects[co.objects];
																for (var c = 0; c < coO.scores.length; c++) {
																	var coS = coO.scores[c];
																	if (e.discountPointTypes.length === 0 || e.discountPointTypes.includes(coS.id)) {
																		if (!coS.isNotDiscountable && !coS.discountIsOn) {
																			if (1 == e.discountOperator) coS.discountScore = parseInt(coS.value) - parseInt(e.discountValue);
																			else if (2 == e.discountOperator) coS.discountScore = parseInt(coS.value) + parseInt(e.discountValue);
																			else if (3 == e.discountOperator) coS.discountScore = parseInt(coS.value) * e.discountValue;
																			else if (4 == e.discountOperator) coS.discountScore = parseInt(coS.value) / e.discountValue;
																			if (e.discountLowLimitIsOn && "undefined" !== typeof e.discountLowLimit) coS.discountScore = coS.discountScore < e.discountLowLimit ? parseInt(e.discountLowLimit) : coS.discountScore;
																			if (e.discountShow) this.$set(coS, "discountShow", e.discountShow), this.$set(coS, "discountBeforeText", e.discountBeforeText), this.$set(coS, "discountAfterText", e.discountAfterText);
																			this.$set(coS, "discountIsOn", true);
																			this.$set(coS, "discountedFrom", e.id);
																		}
																	}
																}
															}
													}
												}
										for (var g = 0; g < e.scores.length; g++)
											if (this.checkRequireds(e.scores[g]) && !e.scores[g].isActive)
												for (var w = 0; w < this.app.pointTypes.length; w++) this.app.pointTypes[w].id == e.scores[g].id && (this.app.pointTypes[w].startingSum -= (e.scores[g].discountIsOn ? e.scores[g].discountScore : parseInt(e.scores[g].value)), e.scores[g].isActive = !0, tmpScores.push({id: e.scores[g].id, value: e.scores[g].discountIsOn ? e.scores[g].discountScore : parseInt(e.scores[g].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[w].id, this.app.pointTypes[w].startingSum));
										this.activated.push(eid), t.currentChoices += 1;
										var a, f, b, m, v, ee = 0;
										if (e.duplicateRow) {
											if ("undefined" !== typeof e.duplicateRowId && "undefined" !== typeof e.duplicateRowPlace) this.duplicateRow(e, t);
										}
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom) {
												var y = e.activateThisChoice.split(","); 
												var RD = y.slice(),
													rd = RD.filter(item => !this.activated.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
													nAR = parseInt(e.numActivateRandom) > rd.length ? rd.length : parseInt(e.numActivateRandom);
												this.$set(e, 'activatedRandom', []);
												for (var v = rd.length - 1; v > 0; v--) {
													var rnd = Math.floor(Math.random() * (v + 1));
													[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
												}
												e.activatedRandom = rd.slice(0, nAR);
												for (var a = 0, b = 0, v = 0; v < parseInt(nAR) + b; v++) {
													var rndV = e.activatedRandom[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[rndV[0]]) {
														var co = this.app.comp[rndV[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if ("undefined" === typeof coO.forcedActivated) this.$set(coO, "forcedActivated", !1);
														if (this.checkRequireds(coO) && this.checkPoints(coO)) {
															if (coO.isSelectableMultiple) {
																var ee = rndV[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																		this.selectedOneLess(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (!coO.isActive) this.activateObject(coO, coR);
																if (!e.isAllowDeselect) coO.forcedActivated = !0;
															}
														} else {
															if (nAR + a < rd.length) {
																e.activatedRandom.splice(v, 1, rd[nAR + a]);
																a++, v--;
															} else {
																e.activatedRandom.splice(v, 1);
																b--, v--;
															}
														}
													}
												}
											} else {
												for (var y = e.activateThisChoice.split(","), v = 0; v < y.length; v++) {
													var yv = y[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[yv[0]]) {
														var co = this.app.comp[yv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if ("undefined" === typeof coO.forcedActivated) this.$set(coO, "forcedActivated", !1);
														if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
															if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
														}
														if (this.checkRequireds(coO) && this.checkPoints(coO)) {
															if (coO.isSelectableMultiple) {
																var ee = yv[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(coO, coR);
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																		this.selectedOneLess(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (!coO.isActive) this.activateObject(coO, coR);
																if (!e.isAllowDeselect) coO.forcedActivated = !0;
															}
															if(!coO.isActive) {
																if(coO.isSelectableMultiple) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1]);
																}
																coO.forcedActivated = !1;
															}
														} else {
															if(coO.isSelectableMultiple) e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1]);
															coO.forcedActivated = !1;
														}
													}
												}
											}
										}
										if (e.deactivateOtherChoice)
											for (var y = e.deactivateThisChoice.split(","), f = 0; f < y.length; f++) {
												var yf = y[f].split("/ON#");
												if ("undefined" !== typeof this.app.comp[yf[0]]) {
													var co = this.app.comp[yf[0]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
														coO = coR.objects[co.objects];
														if (!coO.forcedActivated) {
															if (coO.isSelectableMultiple) {
																var ee = yf[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneLess(coO, coR);
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(coO, coR);
																	}
																}
															} else {
																if (coO.isActive) this.activateObject(coO, coR);
															}
														}
												}
												if ("undefined" !== typeof this.app.compG[yf[0]]) {
													var co = this.app.compG[yf[0]],
														coG = this.app.groups[co.groups];
													for (var T = 0; T < coG.elements.length; T++) {
														if ("undefined" !== typeof this.app.comp[coG.elements[T].id]) {
															var coT = this.app.comp[coG.elements[T].id],
																coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows],
																coTO = coTR.objects[coT.objects];
															if (!coTO.forcedActivated) {
																if (coTO.isSelectableMultiple) {
																	var ee = yf[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneLess(coTO, coTR);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(coTO, coTR);
																		}
																	}
																} else {
																	if (coTO.isActive) this.activateObject(coTO, coTR);
																}
															}
														}
													}
												}
											}
										for (var f = 0; f < this.activated.length; f++) {
											var aF = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aF[0]]) {
												var co = this.app.comp[aF[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects];
												if (!this.exceptedObjects.includes(coO.id)) {
													if (!this.checkRequireds(coO)) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.multiplyPointtypeIsOn) {
											e.multiplyPointtypeIsOnCheck = !0;
											if ("object" !== typeof e.startingSumAtMultiply) this.$set(e, "startingSumAtMultiply", []);
											for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++)
													if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
														if (e.multiplyPointtypeIsId)
															for (var x = 0; x < this.app.pointTypes.length; x++) {
																if (this.app.pointTypes[x].id == e.multiplyWithThis) {
																	e.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																	this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																}
															}
														else e.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * e.multiplyWithThis, this.app.pointTypes[m].startingSum *= e.multiplyWithThis; this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
											}
											this.app.mdObjects.push(e);
										}
										if (e.dividePointtypeIsOn) {
											e.dividePointtypeIsOnCheck = !0;
											if ("object" !== typeof e.startingSumAtDivide) this.$set(e, "startingSumAtDivide", []);
											for (var l = 0; l < e.pointTypeToDivide.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
														e.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / e.divideWithThis;
														this.app.pointTypes[m].startingSum /= e.divideWithThis;
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
												}
											}
											this.app.mdObjects.push(e);
										}
										if (e.isChangeVariables) {
											for (var m = 0; m < e.changedVariables.length; m++) {
												for (var n = 0; n < this.app.variables.length; n++) {
													if (e.changedVariables[m] == this.app.variables[n].id) {
														if (e.changeType == "1") this.app.variables[n].isTrue = !0;
														else if (e.changeType == "2") this.app.variables[n].isTrue = !1;
														else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
													}
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices += e.numbAddToAllowChoice, isNaN(coR.allowedChoicesChange) && (coR.allowedChoicesChange = 0), coR.allowedChoicesChange += e.numbAddToAllowChoice;
												var I = coR.currentChoices;
												if (I > coR.allowedChoices) {
													var O = I - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) O > 0 && coR.objects[v].isActive && (this.activateObject(coR.objects[v], coR), O--)
												}
											}
										this.updateScoresS(e, t, tmpScores, 0);
										if (e.textfieldIsOn) {
											for (var m = 0; m < this.app.words.length; m++) {
												if (this.app.words[m].id == e.idOfTheTextfieldWord) {
													this.app.words[m].replaceText = e.wordChangeSelect;
													this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
												}
											}
										}
										if (e.isImageUpload) {
											this.$set(e, "defaultImage", e.image);
											this.currentComponent = "appImageUpload"
										}
										if (e.backpackBtnRequirement) {
											if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
											this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
										}
										if (e.changeBackground) {
											if (e.changeBgImage) {
												var a = this.app.styling.backgroundImage;
												this.$set(this.app.styling, "backgroundImage", e.bgImage);
												this.$set(e, "bgImage", a);
											} else {
												var a = this.app.styling.backgroundColor;
												this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
												this.$set(e, "changedBgColorCode", a);
											}
										}
										if (e.changePointBar) {
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barBackgroundColor;
												this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
												this.$set(e, "changedBarBgColor", a);
											}
											if (e.changeBarTextColorIsOn) {
												var a = this.app.styling.barTextColor;
												this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
												this.$set(e, "changedBarTextColor", a);
											}
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barIconColor;
												this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
												this.$set(e, "changedBarIconColor", a);
											}
										}
										if (e.scrollToRow) {
											if ("undefined" !== typeof e.scrollRowId && e.scrollRowId.length > 0) {
												if ("undefined" !== typeof this.app.compR[t.id]) {
													var tCo = this.app.compR[t.id];
													if ("undefined" !== typeof this.app.compR[e.scrollRowId]) {
														var p = this.$el.offsetParent.offsetParent.parentElement.children,
															co = this.app.compR[e.scrollRowId];
														for (var a = 0; a < p.length; a++) {
															if (this.$el.offsetParent.offsetParent == p[a]) {
																coR = p[co.rows + a - tCo.rows];
																function waitScroll() {
																	setTimeout(function() {
																		if (coR) {
																			coR.scrollIntoView({behavior: 'smooth'});
																		} else {
																			waitScroll();
																		}
																	}, 100);
																}
																waitScroll();
																break
															}
														}
													}
												}
											}
										}
										if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
											if (e.bgmId) {
												if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
												this.app.bgmIsPlaying = !0;
												this.playBgm(e, e.bgmId, 0);
											}
										}
										if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
											if ("undefined" !== typeof bgmPlayer.mute) {
												bgmPlayer.mute();
											}
										}
										if (e.isContentHidden) {
											for (var a = 0; a < e.hiddenContentsRow.length; a++) {
												if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
													var co = this.app.compR[e.hiddenContentsRow[a]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													if (!coR.textIsRemoved) this.$set(coR, "textIsRemoved", true);
													for (var b = 0; b < e.hiddenContentsType.length; b++) {
														if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", true);
														else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", true);
														else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", true);
														else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", true);
														else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", true);
														else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", true);
														else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", true);
														else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", true);
													}
												}
											}
										}
										e.isActive = !e.isActive, this.updateActivated();
										if (e.cleanACtivatedOnSelect) this.cleanActivated();
									}
								} else if (this.activated.includes(eid)) {
									if (this.checkPointsMD(e)) {
										for (var a = 0; a < e.scores.length; a++)
											if (this.checkRequireds(e.scores[a]) && e.scores[a].isActive || e.scores[a].isActive)
												for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += (e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)), e.scores[a].isActive = !1, e.scores[a].setValue = !1, tmpScores.push({id: e.scores[a].id, value: e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[n].id, this.app.pointTypes[n].startingSum));
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
												for (var v = e.activatedRandom.length - 1; v >= 0; v--) {
													var rndV = e.activatedRandom[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[rndV[0]]) {
														var co = this.app.comp[rndV[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == rndV[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == rndV[0]) {
																			EE = parseInt(rndV[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = rndV[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
											} else {
												for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
													var pv = p[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[pv[0]]) {
														var co = this.app.comp[pv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
																if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
															}
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == pv[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == pv[0]) {
																			EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = pv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
											}
										}
										for (var f = 0; f < this.activated.length; f++) {
											var af = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[af[0]]) {
												var co = this.app.comp[af[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects];
												if (coO.id !== eid && !this.exceptedObjects.includes(coO.id)) {
													var nH = this.activated.indexOf(eid);
													this.activated.splice(nH, 1);
													t.currentChoices -= 1;
													var bR = this.checkRequireds(coO);
													this.activated.splice(nH, 0, eid);
													t.currentChoices += 1;
													if (!bR) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.multiplyPointtypeIsOnCheck) {
											e.multiplyPointtypeIsOnCheck = !1;
											var ei = 0;
											for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
														for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
															var mdO = this.app.mdObjects[n];
															if (mdO.id != e.id) {
																if (mdO.multiplyPointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																} else if (mdO.dividePointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																}
															} else {
																this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																ei = n;
																break
															}
														}
														for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
															var mdO = this.app.mdObjects[n];
															if (mdO.multiplyPointtypeIsOnCheck) {
																if (mdO.multiplyPointtypeIsId) {
																	for (var x = 0; x < this.app.pointTypes.length; x++) {
																		if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																			mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																			this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																		}
																	}
																} else {
																	mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																	this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																}
															} else if (mdO.dividePointtypeIsOnCheck) {
																mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
															}
														}
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
												}
											}
											this.app.mdObjects.splice(ei, 1);
										}
										if (e.dividePointtypeIsOnCheck) {
											e.dividePointtypeIsOnCheck = !1;
											var ei = 0;
											for (var l = 0; l < e.pointTypeToDivide.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
														for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
															var mdO = this.app.mdObjects[n];
															if (mdO.id != e.id) {
																if (mdO.multiplyPointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																} else if (mdO.dividePointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																}
															} else {
																this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																ei = n;
																break
															}
														}
														for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
															var mdO = this.app.mdObjects[n];
															if (mdO.multiplyPointtypeIsOnCheck) {
																if (mdO.multiplyPointtypeIsId) {
																	for (var x = 0; x < this.app.pointTypes.length; x++) {
																		if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																			mdO.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																			this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																		}
																	}
																} else {
																	mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																	this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																}
															} else if (mdO.dividePointtypeIsOnCheck) {
																mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
															}
														}
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum)
													}
												}
											}
											this.app.mdObjects.splice(ei, 1);
										}
										if (e.isChangeVariables) {
											for (var m = 0; m < e.changedVariables.length; m++) {
												for (var n = 0; n < this.app.variables.length; n++) {
													if (e.changedVariables[m] == this.app.variables[n].id) {
														if (e.changeType == "1" && this.app.variables[n].isTrue) this.app.variables[n].isTrue = !1;
														else if (e.changeType == "2" && !this.app.variables[n].isTrue) this.app.variables[n].isTrue = !0;
														else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
													}
												}
											}
										}
										if (e.textfieldIsOn) {
											for (var m = 0; m < this.app.words.length; m++) {
												if (this.app.words[m].id == e.idOfTheTextfieldWord) {
													this.app.words[m].replaceText = "undefined" === typeof e.wordChangeDeselect ? "" : e.wordChangeDeselect;
													this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
												var d = coR.currentChoices;
												if (d > coR.allowedChoices) {
													var u = d - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) {
														if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
															if (coR.objects[v].isSelectableMultiple)
																for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
															else
																this.activateObject(coR.objects[v], coR);
															u--;
														}
													}
												}
											}
										this.updateScoresC(e, t, tmpScores, 0);
										if (e.isImageUpload) {
											this.$set(e, "image", e.defaultImage);
										}
										if (e.backpackBtnRequirement)
											this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
										if (e.changeBackground) {
											if (e.changeBgImage) {
												var a = this.app.styling.backgroundImage;
												this.$set(this.app.styling, "backgroundImage", e.bgImage);
												this.$set(e, "bgImage", a);
											} else {
												var a = this.app.styling.backgroundColor;
												this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
												this.$set(e, "changedBgColorCode", a);
											}
										}
										if (e.changePointBar) {
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barBackgroundColor;
												this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
												this.$set(e, "changedBarBgColor", a);
											}
											if (e.changeBarTextColorIsOn) {
												var a = this.app.styling.barTextColor;
												this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
												this.$set(e, "changedBarTextColor", a);
											}
											if (e.changeBarIconColorIsOn) {
												var a = this.app.styling.barIconColor;
												this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
												this.$set(e, "changedBarIconColor", a);
											}
										}
										if (e.discountOther)
											if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
												for (var a = 0; a < this.app.groups.length; a++) {
													if (e.discountGroups.includes(this.app.groups[a].id)) {
														for (var b = 0; b < this.app.groups[a].elements.length; b++)
															if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																var co = this.app.comp[this.app.groups[a].elements[b].id],
																	coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																	coO = coR.objects[co.objects];
																for (var c = 0; c < coO.scores.length; c++) {
																	var coS = coO.scores[c];
																	if (coS.discountedFrom == e.id) this.$set(coS, "discountIsOn", false);
																}
															}
													}
												}
										if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
											if (e.bgmId) {
												this.app.bgmIsPlaying = !1;
												this.playBgm(e, e.bgmId, 0)
											}
										}
										if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
											if ("undefined" !== typeof bgmPlayer.unMute) {
												bgmPlayer.unMute();
											}
										}
										if (e.isContentHidden) {
											for (var a = 0; a < e.hiddenContentsRow.length; a++) {
												if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
													var co = this.app.compR[e.hiddenContentsRow[a]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													for (var b = 0; b < e.hiddenContentsType.length; b++) {
														if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", false);
														else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", false);
														else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", false);
														else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", false);
														else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", false);
														else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", false);
														else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", false);
														else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", false);
													}
												}
											}
										}
										this.activated.splice(this.activated.indexOf(eid), 1), e.isActive = !e.isActive, this.updateActivated(), t.currentChoices -= 1;
									}
								}
								if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
							}
							if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
						}
                    },
                    updateObject: function() {
                        this.$emit("objectWasChanged", this.object)
                    },
                    selectedOneMore: function(e, t) {
						var rowType = this.app.compR[t.id].type;
                        var s = !0, tmpPoint = {id: "", value: 0};
						if (!this.linkedObjects.includes(e.id)) {
							if (e.isMultipleUseVariable) {
								if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
									var cnt = 0;
									for (var r = 0; r < t.objects.length; r++) {
										if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
											if (t.objects[r].isSelectableMultiple)
												for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
											else
												this.activateObject(t.objects[r], t);
											break
										}
										else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
									}
									if (cnt >= t.allowedChoices) 
										s = !1;
									else 
										e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable && this.checkPoints(e) ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
								} else {
									e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable && this.checkPoints(e) ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
								}
							} else {
								for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesPluss > this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum++, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum), tmpPoint.id = e.multipleScoreId, tmpPoint.value = this.app.pointTypes[o].startingSum, this.$set(this.app.pointTypeMap, this.app.pointTypes[o].id, this.app.pointTypes[o].startingSum)) : s = !1);
							}
							if (s) {
								var eid, eidNum
								if (e.isMultipleUseVariable) {
									eid = e.id + "/ON#" + (parseInt(e.multipleUseVariable));
									eidNum = parseInt(e.multipleUseVariable) + 1;
								} else {
									eid = e.id;
								}
								var tmpScores = [];
								var tmpVariable = e.isMultipleUseVariable ? Math.abs(parseInt(e.multipleUseVariable)) : tmpPoint.value;
								if ("undefined" === typeof this.exceptedObjects) this.$set(this, "exceptedObjects", []);
								if (!this.exceptedObjects.length == 0) this.exceptedObjects.push(e.id);
								if ("undefined" !== typeof e.scores) {
									for (var i = 0; i < e.scores.length; i++)
										for (var s = 0; s < this.app.pointTypes.length; s++) {
											if (this.app.pointTypes[s].id == e.scores[i].id) {
												if (e.selectedThisManyTimesProp > 0) {
													if ("undefined" === typeof e.scores[i].isActiveMul) this.$set(e.scores[i], "isActiveMul", []);
													if (this.checkRequireds(e.scores[i]) && !e.scores[i].isActiveMul[tmpVariable - 1]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore * tmpVariable : parseInt(e.scores[i].value) * tmpVariable);
															e.scores[i].isActiveMul[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * tmpVariable : parseInt(e.scores[i].value) * tmpVariable});
														} else {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMul[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});
														}
													}
												} else {
													if (this.checkRequireds(e.scores[i]) && e.scores[i].isActiveMulMinus[tmpVariable] || e.scores[i].isActiveMulMinus[tmpVariable]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMulMinus[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});	

														} else {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMulMinus[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												}
												this.$set(this.app.pointTypeMap, this.app.pointTypes[s].id, this.app.pointTypes[s].startingSum);
											}
										}
								}
								if (e.isMultipleUseVariable) {
									if (e.multipleUseVariable > e.numMultipleTimesMinus) {
										if (e.isActive == !1) {
											e.isActive = !0, t.currentChoices += 1, this.activated.push(e.id + "/ON#" + e.multipleUseVariable);
											if (e.backpackBtnRequirement) {
												if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
												this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
											}
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.scrollToRow) {
												if ("undefined" !== typeof e.scrollRowId && e.scrollRowId.length > 0) {
													if ("undefined" !== typeof this.app.compR[t.id]) {
														var tCo = this.app.compR[t.id];
														if ("undefined" !== typeof this.app.compR[e.scrollRowId]) {
															var p = this.$el.offsetParent.offsetParent.parentElement.children,
																co = this.app.compR[e.scrollRowId];
															for (var a = 0; a < p.length; a++) {
																if (this.$el.offsetParent.offsetParent == p[a]) {
																	coR = p[co.rows + a - tCo.rows];
																	function waitScroll() {
																		setTimeout(function() {
																			if (coR) {
																				coR.scrollIntoView({behavior: 'smooth'});
																			} else {
																				waitScroll();
																			}
																		}, 100);
																	}
																	waitScroll();
																	break
																}
															}
														}
													}
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
													this.app.bgmIsPlaying = !0;
													this.playBgm(e, e.bgmId, 0);
												}
											}
										} else {
											if (e.multipleUseVariable == 0) {
												e.isActive = !1, this.activated.splice(this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), 1), t.currentChoices -= 1;
											} else {
												this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable - 1)), (e.id + "/ON#" + e.multipleUseVariable));
											}
										}
										if (e.multipleUseVariable > 0) {
											if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
												if (e.isActivateRandom && "undefined" !== typeof e.isActivateRandom) {
													var y = e.activateThisChoice.split(",");
													var RD = y.slice(),
														rd = RD.filter(item => !this.activated.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
														nAR = parseInt(e.numActivateRandom) > rd.length ? rd.length : parseInt(e.numActivateRandom);
													if ("undefined" === typeof e.activatedRandomMul) this.$set(e, 'activatedRandomMul', []);
													for (var v = rd.length - 1; v > 0; v--) {
														var rnd = Math.floor(Math.random() * (v + 1));
														[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
													}
													e.activatedRandomMul.push(rd.slice(0, nAR));
													for (var a = 0, b = 0, v = 0; v < nAR + b; v++) {
														var aRM = e.activatedRandomMul[e.selectedThisManyTimesProp - 1][v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[aRM[0]]) {
															var co = this.app.comp[aRM[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (this.checkRequireds(coO) && this.checkPoints(coO)) {
																if (coO.isSelectableMultiple) {
																	var ee = aRM[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneMore(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			this.selectedOneLess(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		}
																	}
																} else {
																	if (!coO.isActive) this.activateObject(coO, coR);
																	if (!e.isAllowDeselect) coO.forcedActivated = !0;
																}
															} else {
																if (nAR + a < rd.length) {
																	e.activatedRandomMul[e.selectedThisManyTimesProp - 1].splice(v, 1, rd[nAR + a]);
																	a++, v--;
																} else {
																	e.activatedRandomMul[e.selectedThisManyTimesProp - 1].splice(v, 1);
																	b--, v--;
																}
															}
														}
													}
												} else {
													for (var y = e.activateThisChoice.split(","), v = 0; v < y.length; v++) {
														var yv = y[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[yv[0]]) {
															var co = this.app.comp[yv[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").some(item => item.split("/ON#")[0] == e.id)) {
																if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
															}
															if (this.checkRequireds(coO) && this.checkPoints(coO)) {
																if (coO.isSelectableMultiple) {
																	var ee = yv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneMore(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			this.selectedOneLess(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		}
																	}
																} else {
																	if (e.selectedThisManyTimesProp == 1) {
																		if (!coO.isActive) this.activateObject(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (coO.isSelectableMultiple) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1])
																}
															}
														}
													}
												}
											}
										}
										for (var f = 0; f < this.activated.length; f++) {
											var aF = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aF[0]]) {
												var co = this.app.comp[aF[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects],
													nR = this.activated.indexOf(eid);
												if (!this.exceptedObjects.includes(coO.id)) {
													var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
													if (fI !== -1) var aFI = this.activated[fI].split("/ON#");
													fI !== -1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) + 1) : (this.activated.push(eid), t.currentChoices += 1);
													var bR = this.checkRequireds(coO);
													fI !== -1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1);
													if (!bR) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																coO.forcedActivated = !1;
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices += e.numbAddToAllowChoice, isNaN(coR.allowedChoicesChange) && (coR.allowedChoicesChange = 0), coR.allowedChoicesChange += e.numbAddToAllowChoice;
												var I = coR.currentChoices;
												if (I > coR.allowedChoices) {
													var O = I - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) O > 0 && coR.objects[v].isActive && (this.activateObject(coR.objects[v], coR), O--)
												}
											}
										this.updateScoresMulS(e, t, tmpScores, 0);
									}
									if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
								}
							}
						}
						if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
                    },
                    selectedOneLess: function(e, t) {
						var rowType = this.app.compR[t.id].type;
                        var s = !0, tmpPoint = {id: "", value: 0};
						if (!this.linkedObjects.includes(e.id)) {
							if (e.isMultipleUseVariable) {
								if (e.numMultipleTimesMinus < e.multipleUseVariable) {
									if (e.multipleUseVariable == 0 && t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
										var cnt = 0;
										for (var r = 0; r < t.objects.length; r++) {
											if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
												if (t.objects[r].isSelectableMultiple)
													for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
												else
													this.activateObject(t.objects[r], t);
												break
											}
											else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
										}
										if (cnt >= t.allowedChoices) 
											s = !1;
										else 
											e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable && this.checkPointsR(e) ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
									} else {
										e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable && this.checkPointsR(e) ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
									}
								}
							} else {
								for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesMinus < this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum--, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum), tmpPoint.id = e.multipleScoreId, tmpPoint.value = this.app.pointTypes[o].startingSum, this.$set(this.app.pointTypeMap, this.app.pointTypes[o].id, this.app.pointTypes[o].startingSum)) : s = !1);
							}
							if (s) {
								var eid, eidNum;
								if (e.isMultipleUseVariable) {
									eid = e.id + "/ON#" + (parseInt(e.multipleUseVariable) + 1);
									eidNum = parseInt(e.multipleUseVariable) + 1;
								} else {
									eid = e.id;
								}
								var tmpScores = [];
								var tmpVariable = e.isMultipleUseVariable ? Math.abs(parseInt(e.multipleUseVariable)) : tmpPoint.value;
								if ("undefined" !== typeof e.scores) {
									for (var i = 0; i < e.scores.length; i++)
										for (var s = 0; s < this.app.pointTypes.length; s++) {
											if (this.app.pointTypes[s].id == e.scores[i].id) {
												if (e.selectedThisManyTimesProp < 0) {
													if ("undefined" === typeof e.scores[i].isActiveMulMinus) this.$set(e.scores[i], "isActiveMulMinus", []);
													if (this.checkRequireds(e.scores[i]) && !e.scores[i].isActiveMulMinus[tmpVariable - 1]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMulMinus[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});
														} else {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMulMinus[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												} else {
													if (this.checkRequireds(e.scores[i]) && e.scores[i].isActiveMul[tmpVariable] || e.scores[i].isActiveMul[tmpVariable]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMul[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});
														} else {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMul[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												}
												this.$set(this.app.pointTypeMap, this.app.pointTypes[s].id, this.app.pointTypes[s].startingSum);
											}
										}
								}
								if (e.isMultipleUseVariable) {
									if (e.multipleUseVariable >= 0) {
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom && "undefined" !== typeof e.activatedRandomMul && e.activatedRandomMul.length > 0) {
												for (var v = e.activatedRandomMul[e.selectedThisManyTimesProp].length - 1; v >= 0; v--) {
													var aRM = e.activatedRandomMul[e.selectedThisManyTimesProp][v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[aRM[0]]) {
														var co = this.app.comp[aRM[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == aRM[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == aRM[0]) {
																			EE = parseInt(aRM[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = aRM[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
												e.activatedRandomMul.splice(e.selectedThisManyTimesProp, 1);
											} else {
												for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
													var pv = p[v].split("/ON#");
													if ("undefined" !== this.app.comp[pv[0]]) {
														var co = this.app.comp[pv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").some(item => item.split("/ON#")[0] == e.id)) {
															if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
														}
														if (coO.isActive) {
															if (e.selectedThisManyTimesProp == 0 && !e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == p[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == pv[0]) {
																			EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coR.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = pv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (e.selectedThisManyTimesProp == 0) {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												}
											}
										}
									}
									for (var f = 0; f < this.activated.length; f++) {
										var aF = this.activated[f].split("/ON#");
										if ("undefined" !== typeof this.app.comp[aF[0]]) {
											var co = this.app.comp[aF[0]],
												coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
												coO = coR.objects[co.objects];
											if (coO.id !== e.id && !this.exceptedObjects.includes(coO.id)) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI !== -1) {
													var	aFI = this.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													var bR = this.checkRequireds(coO);
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, aFI[0] + "/ON#" + aFI[1]), t.currentChoices += 1);
													if (!bR) {
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																coO.forcedActivated = !1;
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
									}
									if (e.addToAllowChoice)
										if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
											var co = this.app.compR[e.idOfAllowChoice],
												coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
											coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
											var d = coR.currentChoices;
											if (d > coR.allowedChoices) {
												var u = d - coR.allowedChoices;
												for (var v = 0; v < coR.objects.length; v++) {
													if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
														if (coR.objects[v].isSelectableMultiple)
															for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
														else
															this.activateObject(coR.objects[v], coR);
														u--;
													}
												}
											}
										}
									this.updateScoresMulC(e, t, tmpScores, 0);
									if (e.isActive == !0) {
										if (e.multipleUseVariable == 0 && ("undefined" === typeof e.forcedActivated || e.forcedActivated == !1)) {
											e.isActive = !1, this.activated.splice(this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), 1), t.currentChoices -= 1;
											if (e.backpackBtnRequirement) this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													this.app.bgmIsPlaying = !1;
													this.playBgm(e, e.bgmId, 0);
												}
											}
										}
										else this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), (e.id + "/ON#" + e.multipleUseVariable));
									} else {
										if (e.multipleUseVariable == -1) {
											e.isActive = !0, t.currentChoices += 1;
											this.activated.push(e.id + "/ON#" + e.multipleUseVariable);
										}
									}
									if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
								}
							}
						}
						if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
                    },
                    cloneObject: function() {
                        this.row.objects.splice(this.row.objects.indexOf(this.object) + 1, 0, JSON.parse(JSON.stringify(this.object)));
                        for (var e = "", t = "abcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < this.app.objectIdLength; o++) e += t.charAt(Math.floor(Math.random() * t.length));
                        this.row.objects[this.row.objects.indexOf(this.object) + 1].id = e;
						this.app.comp[e] = {rows: this.app.rows.indexOf(this.row), objects: this.row.objects.indexOf(this.object) + 1, type: "app"};
						for (var b = this.row.objects.indexOf(this.object) + 2; b < this.row.objects.length; b++) {
							this.app.comp[this.row.objects[b].id].objects = b;
						}
						for (var c = 0; c < this.object.groups.length; c++) {
							if ("undefined" !== typeof this.app.compG[this.object.groups[c].id]) {
								var co = this.app.compG[this.object.groups[c].id],
									coG = this.app.groups[co.groups];
								coG.elements.push({id: e});
							}
						}
						if ("undefined" !== typeof this.object.objectDesignGroups) {
							for (var d = 0; d < this.object.objectDesignGroups.length; d++) {
								if ("undefined" !== typeof this.app.compODG[this.object.objectDesignGroups[d].id]) {
									var co = this.app.compODG[this.object.objectDesignGroups[d].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									coD.elements.push({id: e});
								}
							}
						}
                    },
                    updateActivated: function() {
                        this.$emit("activatedWasChanged", this.activated)
                    },
                    addObjectToGroup: function() {
                        this.object.groups.push({
                            id: ""
                        })
                    },
                    cleanActivated: function() {
                        this.$store.commit({
                            type: "cleanActivated"
                        })
                    },
					duplicateRow: function(e, t) {
						var rowType = this.app.compR[t.id].type;
						var thisRow = rowType == "app" ? this.app.rows : this.backpack;
						var c, i, j, s, fr, fo, y, z, zx, zy, zz, nR = 0, nF = 0;
						for (var b = 0; b < thisRow.length; b++) {
							if (thisRow[b].id.split("/D#")[0] == e.duplicateRowId.split("/D#")[0]) {
								nR++;
							}
							if (thisRow[b].id == e.duplicateRowPlace) {
								nF = b + 1;
							}
						}
						for (var f = 0; f < thisRow.length; f++) {
							if (thisRow[f].id == e.duplicateRowId) {
								thisRow.splice(nF, 0, JSON.parse(JSON.stringify(thisRow[f])));
								fr = thisRow[nF], fr.currentChoices = 0;
								y = fr.id.split("/D#"), fr.id = y[0] + "/D#" + nR;
								for (fr.allowedChoicesChange > 0 && (fr.allowedChoices -= fr.allowedChoicesChange), s = 0; s < fr.objects.length; s++) {
									fo = fr.objects[s], z = fo.id.split("/D#"), fo.id = z[0] + "/D#" + nR;
									if (fo.multipleUseVariable) fo.multipleUseVariable = 0, fo.selectedThisManyTimesProp = 0;
									if (fo.isActive) fo.isActive = !1;
									fo.forcedActivated = !1;
									if (!e.dRowAddSufReq) {
										if ("undefined" !== typeof fo.requireds) {
											for (i = 0; i < fo.requireds.length; i++) {
												if ("id" == fo.requireds[i].type) {
													y = fo.requireds[i].reqId.split("/ON#");
													if (y.length > 1)
														zx = y[0].split("/D#"), fo.requireds[i].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
													else
														zx = y[0].split("/D#"), fo.requireds[i].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
												}
												else if ("or" == fo.requireds[i].type)
													for (c = 0; c < fo.requireds[i].orRequired.length; c++) {
														y = fo.requireds[i].orRequired[c].req.split("/ON#");
														if (y.length > 1)
															zx = y[0].split("/D#"), fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
														else
															zx = y[0].split("/D#"), fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
													}
												if ("undefined" !== typeof fo.requireds[i].requireds)
													for (j = 0; j < fo.requireds[i].requireds.length; j++) {
														if ("id" == fo.requireds[i].requireds[j].type) {
															y = fo.requireds[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = y[0].split("/D#"), fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = y[0].split("/D#"), fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.requireds[i].requireds[j].type)
															for (c = 0; c < fo.requireds[i].requireds[j].orRequired.length; c++) {
																y = fo.requireds[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = y[0].split("/D#"), fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = y[0].split("/D#"), fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
													}
											}
										}
										if ("undefined" !== typeof fo.scores)
											for (i = 0; i < fo.scores.length; i++)
												if ("undefined" !== fo.scores[i].requireds)
													for (j = 0; j < fo.scores[i].requireds.length; j++) {
														if ("id" == fo.scores[i].requireds[j].type) {
															y = fo.scores[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = y[0].split("/D#"), fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = y[0].split("/D#"), fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.scores[i].requireds[j].type)
															for (c = 0; c < fo.scores[i].requireds[j].orRequired.length; c++) {
																y = fo.scores[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = y[0].split("/D#"), fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = y[0].split("/D#"), fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
																
													}
										if ("undefined" !== typeof fo.addons)
											for (i = 0; i < fo.addons.length; i++)
												if ("undefined" !== fo.addons[i].requireds)
													for (j = 0; j < fo.addons[i].requireds.length; j++) {
														if ("id" == fo.addons[i].requireds[j].type) {
															y = fo.addons[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = fo.addons[i].requireds[j].reqId.split("/D#"), fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = fo.addons[i].requireds[j].reqId.split("/D#"), fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.addons[i].requireds[j].type)
															for (c = 0; c < fo.addons[i].requireds[j].orRequired.length; c++) {
																y = fo.addons[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
													}
									}
									if (!e.dRowAddSufFunc) {
										if (fo.activateOtherChoice) {
											zz = "";
											for (y = fo.activateThisChoice.split(","), i = 0; i < y.length; i++) {
												zx = y[i].split("/ON#");
												if (zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + ",";
											}
											fo.activateThisChoice = zz.slice(0, -1);
										}
										if (fo.deactivateOtherChoice) {
											zz = "";
											for (y = fo.deactivateThisChoice.split(","), i = 0; i < y.length; i++) {
												zx = y[i].split("/ON#");
												if (zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + ",";
											}
											fo.deactivateThisChoice = zz.slice(0, -1);
										}
										if (fo.duplicateRow) {
											y = fo.duplicateRowId.split("/D#"), fo.duplicateRowId = y[0] + "/D#" + nR;
											y = fo.duplicateRowPlace.split("/D#"), fo.duplicateRowPlace = y[0] + "/D#" + nR;
										}
									}
								}
								break
							}
						}
						for (var m = nF; m < thisRow.length; m++) {
							this.app.compR[thisRow[m].id] = {rows: m, type: rowType};
							for (var n = 0; n < thisRow[m].objects.length; n++) {
								var d = thisRow[m].objects[n].id;
								this.app.comp[thisRow[m].objects[n].id] = {rows: m, objects: n, type: rowType};
							}
						}
					}
                }
            },
            K = Z,
            Q = (i("996b"), i("132d")),
            tt = i("2db4"),
            et = i("2fa4"),
            it = Object(b["a"])(K, h, d, !1, null, "9eb6a880", null),
            st = it.exports;
        v()(it, {
            VBtn: $["a"],
            VCol: S["a"],
            VIcon: Q["a"],
            VRow: k["a"],
            VSnackbar: tt["a"],
            VSpacer: et["a"],
            VTooltip: y["a"]
        });
        var ot = {
                props: {
                    row: Object,
                    type: String
                },
                data: function() {
                    return {
                        window: {
                            width: 0,
                            height: 0
                        },
                        templates: [{
                            text: "Image Top",
                            value: "1"
                        }, {
                            text: "Image Right",
                            value: "2"
                        }, {
                            text: "Image Left",
                            value: "3"
                        }, {
                            text: "Image Bottom",
                            value: "4"
                        }],
                        pointReqOperators: [{
                            text: "+ More than",
                            value: "1"
                        }, {
                            text: "+= More or equal",
                            value: "2"
                        }, {
                            text: "= Equal to",
                            value: "3"
                        }, {
                            text: "-= Less or equal",
                            value: "4"
                        }, {
                            text: "- Less than",
                            value: "5"
                        }],
                        rowIconButtons: [{
                            component: "AppObjectList",
                            icon: "mdi-format-list-bulleted",
                            text: "List of objects"
                        }, {
                            component: "appRequirement",
                            icon: "mdi-key-plus",
                            text: "Create Requirement"
                        }, {
                            component: "appRowSettings",
                            icon: "mdi-decagram",
                            text: "Open Row Settings"
                        }],
                        isEditModeOn: !0,
                        currentComponent: "",
                        activeObjectList: [],
                        sanitizeArg: {
                            allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "font", "iframe", "img"],
                            allowedAttributes: false,
                            allowedStyles: false
                        },
						scoreUpdate: "",
						exceptedObjects: [],
						exceptedScores: [],
						linkedObjects: []
                    }
                },
                components: {
                    AppObject: st,
					ConfirmDlg: function() {
                        return i.e("chunk-2d0e6102").then(i.bind(null, "96c2"))
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.handleResize), this.handleResize()
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                },
                computed: {
                    objectWidths: function() {
                        return this.$store.state.objectWidths
                    },
                    rowTitle: function() {
                        return 'font-family: "' + this.textStyling.rowTitle + '";font-size: ' + this.textStyling.rowTitleTextSize + "%;text-align: " + this.textStyling.rowTitleAlign + ";color: " + this.textStyling.rowTitleColor + ";"
                    },
                    styling: function() {
                        return this.$store.state.app.styling
                    },
					rowStyling: function() {
						if (this.row.privateRowIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateRowIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					textStyling: function() {
						if (this.row.privateTextIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateTextIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					rowImageStyling: function() {
						if (this.row.privateRowImageIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateRowImageIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					backgroundStyling: function() {
						if (this.row.privateBackgroundIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return this.$store.state.app.styling;
					},
					rowBodyBgColor: function() {
						if (this.row.privateBackgroundIsOn && this.row.styling.bgColorIsOn) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && coD.styling.bgColorIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return !1;
					},
					rowBodyBgImage: function() {
						if (this.row.privateBackgroundIsOn && this.row.styling.backgroundImage) return this.row.styling;
						if ("undefined" !== typeof this.row.rowDesignGroups) {
							for (var a = 0; a < this.row.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[this.row.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[this.row.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateBackgroundIsOn && coD.styling.backgroundImage && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling;
								}
							}
						}
						return !1;
					},
                    resultArray: function() {
                        var e, t, o = [];
                        if ("standard" == this.type) {
                            for (var i = 0; i < this.allChapters.length; i++)
                                for (var s = 0; s < this.allChapters[i].pages.length; s++) this.findAllActiveObjects(this.allChapters[i].pages[s], this.allChapters[i]);
                            o = this.activeObjectList
                        } else if ("" == this.row.resultGroupId || null == this.row.resultGroupId)
                            for (t = 0; t < this.rows.length; t++)
                                for (e = 0; e < this.rows[t].objects.length; e++) {
									if (!this.rows[t].objects[e].isNotResult) this.rows[t].objects[e].isActive ? o.push(this.rows[t].objects[e]) : this.rows[t].objects[e].isSelectableMultiple && "undefined" !== typeof this.rows[t].objects[e].multipleUseVariable && this.rows[t].objects[e].multipleUseVariable > 0 && o.push(this.rows[t].objects[e]);
								}
                        else
                            for (t = 0; t < this.rows.length; t++)
                                for (e = 0; e < this.rows[t].objects.length; e++) {
									if (!this.rows[t].objects[e].isNotResult) {
										if (this.rows[t].objects[e].isActive)
											for (var r = 0; r < this.groups.length; r++)
												if (this.row.resultGroupId == this.rows[t].resultGroupId && this.rows[t] != this.row && this.groups[r].id == this.rows[t].resultGroupId) o.push(this.rows[t].objects[e]);
												else
													for (var a = 0; a < this.rows[t].objects[e].groups.length; a++) this.rows[t].objects[e].groups[a].id == this.row.resultGroupId && this.groups[r].id == this.row.resultGroupId && o.push(this.rows[t].objects[e]);
										else if (this.rows[t].objects[e].isSelectableMultiple && ("undefined" !== typeof this.rows[t].objects[e].multipleUseVariable && this.rows[t].objects[e].multipleUseVariable > 0))
											for (var c = 0; c < this.groups.length; c++)
												if (this.row.resultGroupId == this.rows[t].resultGroupId && this.rows[t] != this.row && this.groups[c].id == this.rows[t].resultGroupId) o.push(this.rows[t].objects[e]);
												else
													for (var d = 0; d < this.rows[t].objects[e].groups.length; d++) this.rows[t].objects[e].groups[d].id == this.row.resultGroupId && this.groups[c].id == this.row.resultGroupId && o.push(this.rows[t].objects[e]);
									}
								}
                        return o
                    },
                    rowBody: function() {
                        var e = "margin-top: " + this.rowStyling.rowBodyMarginTop + "px;margin-bottom:" + this.rowStyling.rowBodyMarginBottom + "px;";
						if (this.rowBodyBgImage !== !1) e += 'background-image: url("' + this.rowBodyBgImage.backgroundImage + '")' + (this.rowBodyBgImage.isBackgroundRepeat ? ";background-repeat: repeat;" : (this.rowBodyBgImage.isBackgroundStretch ? ";background-size: 100% 100%;" : ";background-size: cover;"));
						if (this.rowBodyBgColor !== !1) e += "background-color: " + this.rowBodyBgColor.backgroundColor + ";";
                        return this.row.isEditModeOn ? e += "margin-left: 1%;margin-right: 1%;" : e += "margin-left: " + this.rowStyling.rowBodyMarginSides + "%;margin-right: " + this.rowStyling.rowBodyMarginSides + "%;", e
                    },
                    rowText: function() {
                        var e = 'font-family: "' + this.textStyling.rowText + '";text-align: ' + this.textStyling.rowTextAlign + ";font-size: " + this.textStyling.rowTextTextSize + "%;color: " + this.textStyling.rowTextColor + ";padding-top: " + this.rowStyling.rowTextPaddingX + "px;padding-bottom: " + this.rowStyling.rowTextPaddingX + "px;";
                        return this.row.isEditModeOn || (e += "padding-left: " + this.rowStyling.rowTextPaddingY + "%;padding-right: " + this.rowStyling.rowTextPaddingY + "%;"), e
                    },
                    rowButton: function() {
                        return "padding-left: " + this.rowStyling.rowButtonYPadding + "px;padding-right: " + this.rowStyling.rowButtonYPadding + "px;padding-top: " + this.rowStyling.rowButtonXPadding + "px;padding-bottom: " + this.rowStyling.rowButtonXPadding + "px;color:" + this.$vuetify.theme.isDark ? "white;" : "black;"
                    },
                    rowBackground: function() {
                        var e = (this.rowStyling.rowBorderImage ? 'border-image: url("' + this.rowStyling.rowBorderImage + '") ' + this.rowStyling.rowBorderImageSliceTop + ' ' + this.rowStyling.rowBorderImageSliceRight + ' ' + this.rowStyling.rowBorderImageSliceBottom + ' ' + this.rowStyling.rowBorderImageSliceLeft + ' / ' + this.rowStyling.rowBorderImageWidth + 'px '+ this.rowStyling.rowBorderImageRepeat + '; border-style: solid; padding: ' + this.rowStyling.rowBorderImageWidth + 'px; ' : "") + (this.backgroundStyling.rowBackgroundImage ? 'background-image: url("' + this.backgroundStyling.rowBackgroundImage + '");' + (this.backgroundStyling.isRowBackgroundRepeat ? "background-repeat: repeat;" : (this.backgroundStyling.isRowBackgroundStretch ? "background-size: 100% 100%;" : "background-size: cover;")) : "") + (this.backgroundStyling.rowBgColorIsOn ? "background-color: " + this.backgroundStyling.rowBgColor + ";" : "") + "margin-left:" + this.rowStyling.rowMargin + "%;margin-right: " + this.rowStyling.rowMargin + "%;",
                            t = this.rowStyling.rowBorderRadiusIsPixels ? "px" : "%";
                        return this.rowStyling.rowGradientIsOn && (e += this.rowStyling.rowGradientIsOn ? ";background-image: linear-gradient(" + this.rowStyling.rowGradient + ");" : ""), e += "border-radius: " + this.rowStyling.rowBorderRadiusTopLeft + 0 + t + " " + this.rowStyling.rowBorderRadiusTopRight + 0 + t + " " + this.rowStyling.rowBorderRadiusBottomRight + 0 + t + " " + this.rowStyling.rowBorderRadiusBottomLeft + 0 + t + ";", this.rowStyling.rowOverflowIsOn && (e += "overflow:hidden;"), this.rowStyling.rowBorderIsOn && (e += "border: " + this.rowStyling.rowBorderWidth + "px " + this.rowStyling.rowBorderStyle + " " + this.rowStyling.rowBorderColor + ";"), this.rowStyling.rowDropShadowIsOn && (e += "filter: drop-shadow(" + this.rowStyling.rowDropShadowH + "px " + this.rowStyling.rowDropShadowV + "px " + this.rowStyling.rowDropShadowBlur + "px " + this.rowStyling.rowDropShadowColor + ");"), e
                    },
                    rowImage: function() {
                        var e = "width:" + this.rowImageStyling.rowImageWidth + "%;margin-top:" + this.rowImageStyling.rowImageMarginTop + "%;margin-bottom:" + this.rowImageStyling.rowImageMarginBottom + "%;",
                            t = this.rowImageStyling.rowImgBorderRadiusIsPixels ? "px" : "%";
                        return e += "border-radius: " + this.rowImageStyling.rowImgBorderRadiusTopLeft + 0 + t + " " + this.rowImageStyling.rowImgBorderRadiusTopRight + 0 + t + " " + this.rowImageStyling.rowImgBorderRadiusBottomRight + 0 + t + " " + this.rowImageStyling.rowImgBorderRadiusBottomLeft + 0 + t + ";", this.rowImageStyling.rowImgOverflowIsOn && (e += "overflow:hidden;"), this.rowImageStyling.rowImgBorderIsOn && (e += "border: " + this.rowImageStyling.rowImgBorderWidth + "px " + this.rowImageStyling.rowImgBorderStyle + " " + this.rowImageStyling.rowImgBorderColor + ";"), e
                    },
                    rows: function() {
                        return this.$store.state.app.rows
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    pointTypes: function() {
                        return this.$store.state.app.pointTypes
                    },
                    groups: function() {
                        return this.$store.state.app.groups
                    },
                    variables: function() {
                        return this.$store.state.app.variables
                    },
                    activated: function() {
                        return this.$store.state.app.activated
                    },
                    allChapters: function() {
                        return this.$store.state.app.chapters
                    },
                    objectHeight: function() {
                        return this.$store.state.app.styling.objectHeight && !this.row.isEditModeOn ? "d-flex fullHeight" : ""
                    },
                    replaceRowTitle: function() {
                        var e = this.row.title;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    },
                    replaceRowText: function() {
                        var e = this.row.titleText;
                        if ("undefined" !== typeof this.app.words) {
							const combinedRegex = new RegExp([...Object.keys(this.app.wordMap)].join("|"), "g");
							e = e.replace(combinedRegex, (match) => {
								if (this.app.pointTypeMap.hasOwnProperty(match)) {
									return this.app.pointTypeMap[match]
								} else if (this.app.objectMap.hasOwnProperty(match)) {
									return this.app.objectMap[match]
								} else if (this.app.wordMap.hasOwnProperty(match)) {
									return this.app.wordMap[match]
								}
								return match
							});
						}
						return e
                    },
                    isButtonPressable: function() {
                        return !(!this.row.onlyIfNoChoices || 0 === this.row.currentChoices)
                    }
                },
                methods: {
					filterStyling: function(e, t) {
						if (t.privateFilterIsOn) return t.styling.reqFilterVisibleIsOn;
						if (e.privateFilterIsOn) return e.styling.reqFilterVisibleIsOn;
						if ("undefined" !== typeof t.objectDesignGroups) {
							for (var a = 0; a < t.objectDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compODG[t.objectDesignGroups[a].id]) {
									var co = this.app.compODG[t.objectDesignGroups[a].id],
										coD = this.app.objectDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling.reqFilterVisibleIsOn;
								}
							}
						}
						if ("undefined" !== typeof e.rowDesignGroups) {
							for (var a = 0; a < e.rowDesignGroups.length; a++) {
								if ("undefined" !== typeof this.app.compRDG[e.rowDesignGroups[a].id]) {
									var co = this.app.compRDG[e.rowDesignGroups[a].id],
										coD = this.app.rowDesignGroups[co.designGroups];
									if (coD.privateFilterIsOn && ("" == coD.activatedId || this.activated.includes(coD.activatedId))) return coD.styling.reqFilterVisibleIsOn;
								}
							}
						}
						return this.$store.state.app.styling.reqFilterVisibleIsOn;
					},
                    handleResize: function() {
                        this.window.width = window.innerWidth, this.window.height = window.innerHeight
                    },
                    findAllActiveObjects: function(t, e) {
                        for (var i = 0; i < t.app.rows.length; i++)
                            for (var s = 0; s < t.app.rows[i].objects.length; s++) t.app.rows[i].objects[s].isActive && this.activeObjectList.push(t.app.rows[i].objects[s]);
                        if (t && t.children && t.children.length > 0)
                            for (var o = 0; o < t.children.length; o++) this.findAllActiveObjects(t.children[o], e)
                    },
                    createNewObject: function() {
                        for (var t = "", e = "abcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 4; i++) t += e.charAt(Math.floor(Math.random() * e.length));
                        this.row.objects.push({
                            id: t,
                            title: this.app.defaultChoiceTitle,
                            text: this.app.defaultChoiceText,
                            image: "",
                            template: 1,
                            objectWidth: "",
                            isActive: !1,
                            isVisible: !0,
							selectedThisManyTimesProp: 0,
                            defaultAspectWidth: this.row.defaultAspectWidth,
                            defaultAspectHeight: this.row.defaultAspectHeight,
                            requireds: [],
                            addons: [],
                            scores: [],
                            groups: []
                        })
                    },
                    buttonActivate: function() {
                        if (this.row.btnPointAddon && "sumaddon" == this.row.buttonTypeRadio)
                            for (var e = Math.floor(Math.random() * (this.row.randomMax - this.row.randomMin) + this.row.randomMin), t = 0; t < this.app.pointTypes.length; t++) this.app.pointTypes[t].id == this.row.pointTypeRandom && (this.app.pointTypes[t].startingSum += e);
                        else if (this.row.buttonRandom) {
                            var o, i = [];
                            if (this.row.isWeightedRandom && "undefined" != typeof this.row.isWeightedRandom) {
                                var s = 0,
                                    r = 0;
                                for (o = 0; o < this.row.objects.length; o++) "undefined" == typeof this.row.objects[o].randomWeight || "" == this.row.objects[o].randomWeight ? s += 100 : s += parseInt(this.row.objects[o].randomWeight);
                                for (var a = 0; a < this.row.buttonRandomNumber; a++) {
                                    var n = Math.floor(Math.random() * s);
                                    for (o = 0; o < this.row.objects.length; o++)
                                        if ("undefined" == typeof this.row.objects[o].randomWeight || "" == this.row.objects[o].randomWeight ? r += 100 : r += parseInt(this.row.objects[o].randomWeight), n < r) {
                                            this.activateObject(this.row.objects[o], this.row);
                                            break
                                        }
                                }
                            } else
                                for (o = 0; o < this.row.buttonRandomNumber; o++) {
                                    var l = Math.floor(Math.random() * this.row.objects.length),
                                        c = this.row.objects[l],
                                        d = 100,
                                        p = 0,
                                        u = !0;
                                    if (this.row.onlyUnselectedChoices) {
                                        while (i.includes(l) || this.activated.includes(c.id) || !this.checkRequireds(c) || c.isNotSelectable)
                                            if (p++, l = Math.floor(Math.random() * this.row.objects.length), c = this.row.objects[l], this.row.objects.length <= o || d <= p) {
                                                u = !1;
                                                break
                                            }
                                    } else
                                        while (i.includes(l) || !this.checkRequireds(c) || c.isNotSelectable)
                                            if (p++, l = Math.floor(Math.random() * this.row.objects.length), c = this.row.objects[l], this.row.objects.length <= o || d <= p) break;
                                    u && (i.push(l), this.activateObject(c, this.row))
                                }
                        } else this.row.buttonRandom || (this.row.buttonType && this.activated.includes(this.row.buttonId) ? this.activated.splice(this.activated.indexOf(this.row.buttonId), 1) : this.activated.push(this.row.buttonId))
                    },
                    checkIfDeselect: function(t) {
                        var e = this.$store.getters.checkRequireds(t);
                        if (t.deselectChoices && !e)
                            for (var i = 0; i < t.objects.length; i++) t.objects[i].isActive && t.currentChoices + 1 > t.allowedChoices && this.activateObject(t.objects[i], t);
                        return e
                    },
                    checkRequireds: function(t) {
                        return this.$store.getters.checkRequireds(t)
                    },
                    deleteEvent: function(t, e) {
                        e.splice(t, 1)
                    },
                    checkPoints: function(t) {
                        for (var e = !0, i = 0; i < t.scores.length; i++)
                            if (this.checkRequireds(t.scores[i]) && !t.scores[i].isActive)
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == t.scores[i].id && this.app.pointTypes[s].belowZeroNotAllowed && this.app.pointTypes[s].startingSum - parseInt(t.scores[i].value) < 0 && (e = !1);
                        return e
                    },
                    checkPointsR: function(t) {
                        for (var e = !0, i = 0; i < t.scores.length; i++)
                            if (this.checkRequireds(t.scores[i]) && !t.scores[i].isActive)
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == t.scores[i].id && this.app.pointTypes[s].belowZeroNotAllowed && this.app.pointTypes[s].startingSum + parseInt(t.scores[i].value) < 0 && (e = !1);
                        return e
                    },
					playBgm: function(e, t, i) {
						if ("undefined" !== typeof bgmPlayer.playerInfo.videoData) {
							var p = this.app.bgmIsPlaying,
								s = bgmPlayer.playerInfo.videoData.video_id,
								o = bgmPlayer.playerInfo.playerState;
							if ("undefined" === typeof this.app.bgmObjectId) this.$set(this.app, "bgmObjectId", e.id);
							if (s == t) {
								if (this.app.bgmObjectId == e.id) {
									if (p) {
										if (o == 2) bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
										else bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o != 2) bgmPlayer.pauseVideo();
									}
								} else {
									if (p) {
										bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o == 1) bgmPlayer.pauseVideo();
									}
								}
							} else {
								if (p) {
									e.bgmNoLoop ? (bgmPlayer.loadVideoById(t), bgmPlayer.setLoop(!1)) : (bgmPlayer.loadVideoById(t), bgmPlayer.loadPlaylist(t), bgmPlayer.setLoop(!0));
									bgmPlayer.playVideo();
									this.$set(this.app, "bgmObjectId", e.id);
								}
							}
						} else {
							if (i < 10) {
								i++;
								setTimeout(() => {
									this.playBgm(e, t, i);
								}, 200);
							}
						}
					},
					updateScoresC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						var nH = 0, nh = 0, nR = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.activated.length; f++) {
							var af = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[af[0]]) {
								var co = this.app.comp[af[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																	if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSDiscount < 0) {
																		coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(co.objects, co.rows), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																	}
																	else {
																		this.app.pointTypes[m].startingSum -= coSDiscount;
																	}
																}
																if (coO.forcedActivated && nh > 0) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																}
															} else {
																(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSDiscount < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSDiscount);
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.activated.splice(nH, 1);
											t.currentChoices -= 1;
											bE = this.checkRequireds(coS);
											this.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nh > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(co.objects, co.rows), coO.forcedActivated = !coO.forcedActivated, nh++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nh > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nh);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						} 
					},
					updateScoresS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															var nC = 0;
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																	if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSDiscount < 0) {
																		coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																	}
																	else {
																		this.app.pointTypes[m].startingSum += coSDiscount;
																	}
																}
																if (coO.forcedActivated && nC > 0) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																}
															} else {
																(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSDiscount < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSDiscount);
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.activated.splice(nH, 1);
											t.currentChoices -= 1;
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											this.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											var bE = this.checkRequireds(coS);
											if (bC !== bE) {
												var nC = 0;
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																	
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					updateScoresMulC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + parseInt(e.multipleUseVariable + 1) : e.id;
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											var bE = !1;
											if (e.id == this.exceptedScores[0]) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bE = this.checkRequireds(coS);
													this.activated.splice(this.activated.length - 1, 1), t.currentChoices -= 1;
												} else {
													var aFI = this.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													bE = this.checkRequireds(coS);
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, eid), t.currentChoices += 1);
												}
											} else {
												var nH = this.activated.indexOf(eid);
												this.activated.splice(nH, 1);
												t.currentChoices -= 1;
												var bE = this.checkRequireds(coS);
												this.activated.splice(nH, 0, eid);
												t.currentChoices += 1;
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					updateScoresMulS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (this.scoreUpdate == "") this.scoreUpdate = "Scores Updated On: ";
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						for (var f = 0; f < this.activated.length; f++) {
							var aF = this.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											if (e.id == this.exceptedScores[0]) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													this.activated.splice(this.activated.length - 1, 1), t.currentChoices -= 1;
													bE = this.checkRequireds(coS);
												} else {
													var aFI = this.activated[fI].split("/ON#");
													aFI[1] > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													aFI[1] > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, eid), t.currentChoices += 1);
													bE = this.checkRequireds(coS);
												}
											} else {
												this.activated.splice(nR, 1);
												t.currentChoices -= 1;
												bC = this.checkRequireds(coS);
												for (var a = 0; a < o.length; a++) {
													for (var n = 0; n < this.app.pointTypes.length; n++) {
														this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
													}
												}
												this.activated.splice(nR, 0, eid);
												t.currentChoices += 1;
												bE = this.checkRequireds(coS);
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum += coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !1;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum + coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														19 == this.scoreUpdate.length ? this.scoreUpdate += coO.title : this.scoreUpdate += ", " + coO.title;
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		if (this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) {
																			coO.forcedActivated ? (coO.forcedActivated = !coO.forcedActivated, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !coO.forcedActivated, nC++) : this.selectedOneLess(coO, coR);
																		}
																		else {
																			this.app.pointTypes[m].startingSum -= coSValue;
																			tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																			for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																				coS.isActiveMul[ee] = !0;
																			}
																		}
																	}
																	if (coO.forcedActivated && nC > 0) {
																		if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																		e.cancelForcedActivated.push(coO.id + "/ON#" + nC);
																	}
																} else {
																	(this.app.pointTypes[m].belowZeroNotAllowed && this.app.pointTypes[m].startingSum - coSValue < 0) ? ((coO.forcedActivated = coO.forcedActivated ? !coO.forcedActivated : coO.forcedActivated), this.activateObject(coO, coR)) : (this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue}));
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
							if ("Scores Updated On: " !== this.scoreUpdate && !this.app.hideScoresUpdated) this.text = this.scoreUpdate + ".", this.snackbar = !0;
							this.$set(this, "scoreUpdate", "");
						}
					},
					checkPointsMD: function(e) {
						var ei = 0,
							pT = 0;
						if (e.multiplyPointtypeIsOnCheck || e.dividePointtypeIsOnCheck) {
							if (e.multiplyPointtypeIsOnCheck) {
								for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++) {
										if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
											if (!this.app.pointTypes[m].belowZeroNotAllowed) break
											pT = this.app.pointTypes[m].startingSum;
											for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
												var mdO = this.app.mdObjects[n];
												if (mdO.id != e.id) {
													if (mdO.multiplyPointtypeIsOnCheck) {
														pT -= mdO.startingSumAtMultiply[l];
														pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													} else if (mdO.dividePointtypeIsOnCheck) {
														pT -= mdO.startingSumAtDivide[l];
														pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													}
												} else {
													pT -= mdO.startingSumAtMultiply[l];
													pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													ei = n;
													break
												}
											}
											for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
												var mdO = this.app.mdObjects[n];
												if (mdO.multiplyPointtypeIsOnCheck) {
													if (mdO.multiplyPointtypeIsId) {
														for (var x = 0; x < this.app.pointTypes.length; x++) {
															if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																pT *= this.app.pointTypes[x].startingSum;
															}
														}
													} else {
														pT *= mdO.multiplyWithThis;
													}
												} else if (mdO.dividePointtypeIsOnCheck) {
													pT /= mdO.divideWithThis;
												}
											}
										}
									}
								}
							} else if (e.dividePointtypeIsOnCheck) {
								for (var l = 0; l < e.pointTypeToDivide.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++) {
										if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
											if (!this.app.pointTypes[m].belowZeroNotAllowed) break
											pT = this.app.pointTypes[m].startingSum;
											for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
												var mdO = this.app.mdObjects[n];
												if (mdO.id != e.id) {
													if (mdO.multiplyPointtypeIsOnCheck) {
														pT -= mdO.startingSumAtMultiply[l];
														pT += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
													} else if (mdO.dividePointtypeIsOnCheck) {
														pT -= mdO.startingSumAtDivide[l];
														pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													}
												} else {
													pT -= mdO.startingSumAtDivide[l];
													pT += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
													ei = n;
													break
												}
											}
											for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
												var mdO = this.app.mdObjects[n];
												if (mdO.multiplyPointtypeIsOnCheck) {
													if (mdO.multiplyPointtypeIsId) {
														for (var x = 0; x < this.app.pointTypes.length; x++) {
															if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																pT *= this.app.pointTypes[x].startingSum;
															}
														}
													} else {
														pT *= mdO.multiplyWithThis;
													}
												} else if (mdO.dividePointtypeIsOnCheck) {
													pT /= mdO.divideWithThis;
												}
											}
										}
									}
								}
							}
							if (pT < 0) return !1
						}
						return !0
					},
                    activateObject: function(e, t) {
						var rowType = this.app.compR[t.id].type;
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						var i = this,
							s = this.checkRequireds(e),
							o = this.checkPoints(e),
							k = !0;
						if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
							var cnt = 0;
							for (var r = 0; r < t.objects.length; r++) {
								if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
									if (t.objects[r].isSelectableMultiple)
										for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
									else
										this.activateObject(t.objects[r], t);
									break
								}
								else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
							}
							if (cnt >= t.allowedChoices) k = !1;
						}
						if (s && o && k && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices) && !this.activated.includes(eid) && e.textfieldIsOn && e.customTextfieldIsOn && !this.app.wordChangeComplete) {
							this.$refs.confirm.open("", e.wordPromptText, {noconfirm: !0, word: !0}, e.wordChangeSelect)
							.then(({result, wordText}) => {
								if (result) {
									e.wordChangeSelect = wordText;
								} else {
									e.wordChangeSelect = e.wordChangeDeselect;
								}
								i.$set(i.app, "wordChangeComplete", !0);
								i.activateObject(e, t);
								i.$set(i.app, "wordChangeComplete", !1);
							});
						} else {
							if (!(e.selectOnce && e.isActive) && !this.linkedObjects.includes(e.id)) {
								for (var g = 0; g < e.scores.length; g++)
									if ("undefined" !== typeof e.scores[g].isRandom && e.scores[g].isRandom && !e.scores[g].setValue) {
										e.scores[g].value = Math.floor(Math.random() * (parseInt(e.scores[g].maxValue) - parseInt(e.scores[g].minValue) + 1)) + parseInt(e.scores[g].minValue);
										e.scores[g].setValue = !0;
										for (var a = 0; a < this.app.pointTypes.length; a++) this.app.pointTypes[a].id == e.scores[g].id && this.app.pointTypes[a].belowZeroNotAllowed && this.app.pointTypes[a].startingSum - parseInt(e.scores[g].value) < 0 && (e.scores[g].setValue = !1);
									}
								var tmpScores = [];
								if (!this.exceptedObjects.length == 0 && !this.exceptedObjects.includes(eid)) this.exceptedObjects.push(eid);
								if (s && o && k && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices)) {
									if (this.activated.includes(eid)) {
										if (this.checkPointsMD(e)) {
											for (var a = 0; a < e.scores.length; a++) {
												if (this.checkRequireds(e.scores[a]) && e.scores[a].isActive || e.scores[a].isActive)
													for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += (e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)), e.scores[a].isActive = !1, e.scores[a].setValue = !1, tmpScores.push({id: e.scores[a].id, value: e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[n].id, this.app.pointTypes[n].startingSum));
											}
											var ee = 0, EE = 0;
											if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
												if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
													for (var v = e.activatedRandom.length - 1; v >= 0; v--) {
														var rndV = e.activatedRandom[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[rndV[0]]) {
															var co = this.app.comp[rndV[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.isActive) {
																if (!e.isAllowDeselect) coO.forcedActivated = !1;
																if (coO.isSelectableMultiple) {
																	if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == rndV[0])) {
																		for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																			var cFA = e.cancelForcedActivated[AC].split("/ON#");
																			if (cFA[0] == rndV[0]) {
																				EE = parseInt(rndV[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																				break
																			}
																		}
																		if (EE > 0) {
																			for (var n = 0; n < EE; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (EE < 0) {
																			for (var pp = 0; pp < -1 * EE; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	} else {
																		if (ee = rndV[1], ee > 0) {
																			for (var n = 0; n < ee; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (ee < 0) {
																			for (var pp = 0; pp < -1 * ee; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	}
																} else {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												} else {
													for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
														var pv = p[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[pv[0]]) {
															var co = this.app.comp[pv[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.isActive) {
																if (!e.isAllowDeselect) coO.forcedActivated = !1;
																if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
																	if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
																}
																if (coO.isSelectableMultiple) {
																	if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == pv[0])) {
																		for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																			var cFA = e.cancelForcedActivated[AC].split("/ON#");
																			if (cFA[0] == pv[0]) {
																				EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																				break
																			}
																		}
																		if (EE > 0) {
																			for (var n = 0; n < EE; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (EE < 0) {
																			for (var pp = 0; pp < -1 * EE; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	} else {
																		if (ee = pv[1], ee > 0) {
																			for (var n = 0; n < ee; n++) {
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneLess(coO, coR);
																				}
																			}
																		} else if (ee < 0) {
																			for (var pp = 0; pp < -1 * ee; pp++) {
																				if (!e.isNotDeactivate) {
																					if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																					this.selectedOneMore(coO, coR);
																				}
																				if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																			}
																		}
																	}
																} else {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												}
											}
											for (var f = 0; f < this.activated.length; f++) {
												var af = this.activated[f].split("/ON#");
												if ("undefined" !== typeof this.app.comp[af[0]]) {
													var co = this.app.comp[af[0]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
														coO = coR.objects[co.objects];
													if (coO.id !== eid && !this.exceptedObjects.includes(coO.id)) {
														var nH = this.activated.indexOf(eid);
														this.activated.splice(nH, 1);
														t.currentChoices -= 1;
														var bR = this.checkRequireds(coO);
														this.activated.splice(nH, 0, eid);
														t.currentChoices += 1;
														if (!bR) {
															this.exceptedObjects.push(coO.id);
															if (coO.isMultipleUseVariable) {
																for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																	coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
																}
																if (coO.forcedActivated) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																}
															} else {
																if (coO.forcedActivated) coO.forcedActivated = !1;
																this.activateObject(coO, coR);
															}
															f--;
														}
													}
												}
											}
											if (e.multiplyPointtypeIsOnCheck) {
												e.multiplyPointtypeIsOnCheck = !1;
												var ei = 0;
												for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
													for (var m = 0; m < this.app.pointTypes.length; m++) {
														if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
															for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
																var mdO = this.app.mdObjects[n];
																if (mdO.id != e.id) {
																	if (mdO.multiplyPointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	} else if (mdO.dividePointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	ei = n;
																	break
																}
															}
															for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
																var mdO = this.app.mdObjects[n];
																if (mdO.multiplyPointtypeIsOnCheck) {
																	if (mdO.multiplyPointtypeIsId) {
																		for (var x = 0; x < this.app.pointTypes.length; x++) {
																			if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																				mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																				this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																			}
																		}
																	} else {
																		mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																		this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																	}
																} else if (mdO.dividePointtypeIsOnCheck) {
																	mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																	this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
																}
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
													}
												}
												this.app.mdObjects.splice(ei, 1);
											}
											if (e.dividePointtypeIsOnCheck) {
												e.dividePointtypeIsOnCheck = !1;
												var ei = 0;
												for (var l = 0; l < e.pointTypeToDivide.length; l++) {
													for (var m = 0; m < this.app.pointTypes.length; m++) {
														if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
															for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
																var mdO = this.app.mdObjects[n];
																if (mdO.id != e.id) {
																	if (mdO.multiplyPointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																	} else if (mdO.dividePointtypeIsOnCheck) {
																		this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																		this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																	ei = n;
																	break
																}
															}
															for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
																var mdO = this.app.mdObjects[n];
																if (mdO.multiplyPointtypeIsOnCheck) {
																	if (mdO.multiplyPointtypeIsId) {
																		for (var x = 0; x < this.app.pointTypes.length; x++) {
																			if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																				mdO.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																				this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																			}
																		}
																	} else {
																		mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																		this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																	}
																} else if (mdO.dividePointtypeIsOnCheck) {
																	mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																	this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
																}
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum)
														}
													}
												}
												this.app.mdObjects.splice(ei, 1);
											}
											if (e.isChangeVariables) {
												for (var m = 0; m < e.changedVariables.length; m++) {
													for (var n = 0; n < this.app.variables.length; n++) {
														if (e.changedVariables[m] == this.app.variables[n].id) {
															if (e.changeType == "1" && this.app.variables[n].isTrue) this.app.variables[n].isTrue = !1;
															else if (e.changeType == "2" && !this.app.variables[n].isTrue) this.app.variables[n].isTrue = !0;
															else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
														}
													}
												}
											}
											if (e.textfieldIsOn) {
												for (var m = 0; m < this.app.words.length; m++) {
													if (this.app.words[m].id == e.idOfTheTextfieldWord) {
														this.app.words[m].replaceText = "undefined" === typeof e.wordChangeDeselect ? "" : e.wordChangeDeselect;
														this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
													}
												}
											}
											if (e.addToAllowChoice)
												if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
													var co = this.app.compR[e.idOfAllowChoice],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
													var d = coR.currentChoices;
													if (d > coR.allowedChoices) {
														var u = d - coR.allowedChoices;
														for (var v = 0; v < coR.objects.length; v++) {
															if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
																if (coR.objects[v].isSelectableMultiple)
																	for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
																else
																	this.activateObject(coR.objects[v], coR);
																u--;
															}
														}
													}
												}
											this.updateScoresC(e, t, tmpScores, 0);
											if (e.isImageUpload) {
												this.$set(e, "image", e.defaultImage);
											}
											if (e.backpackBtnRequirement)
												this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.changePointBar) {
												if (e.changeBarBgColorIsOn) {
													var a = this.app.styling.barBackgroundColor;
													this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
													this.$set(e, "changedBarBgColor", a);
												}
												if (e.changeBarTextColorIsOn) {
													var a = this.app.styling.barTextColor;
													this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
													this.$set(e, "changedBarTextColor", a);
												}
												if (e.changeBarBgColorIsOn) {
													var a = this.app.styling.barIconColor;
													this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
													this.$set(e, "changedBarIconColor", a);
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													this.app.bgmIsPlaying = !1;
													this.playBgm(e, e.bgmId, 0);
												}
											}
											if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
												if ("undefined" !== typeof bgmPlayer.unMute) {
													bgmPlayer.unMute();
												}
											}
											if (e.discountOther)
												if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
													for (var a = 0; a < this.app.groups.length; a++) {
														if (e.discountGroups.includes(this.app.groups[a].id)) {
															for (var b = 0; b < this.app.groups[a].elements.length; b++)
																if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																	var co = this.app.comp[this.app.groups[a].elements[b].id],
																		coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																		coO = coR.objects[co.objects];
																	for (var c = 0; c < coO.scores.length; c++) {
																		var coS = coO.scores[c];
																		if (coS.discountedFrom == e.id) this.$set(coS, "discountIsOn", false);
																	}
																}
														}
													}
											if (e.isContentHidden) {
												for (var a = 0; a < e.hiddenContentsRow.length; a++) {
													if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
														var co = this.app.compR[e.hiddenContentsRow[a]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
														for (var b = 0; b < e.hiddenContentsType.length; b++) {
															if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", false);
															else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", false);
															else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", false);
															else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", false);
															else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", false);
															else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", false);
															else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", false);
															else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", false);
														}
													}
												}
											}
											this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1;
											e.isActive = !e.isActive, this.updateActivated();
										}
									} else {
										if (e.discountOther)
											if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
												for (var a = 0; a < this.app.groups.length; a++) {
													if (e.discountGroups.includes(this.app.groups[a].id)) {
														for (var b = 0; b < this.app.groups[a].elements.length; b++)
															if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																var co = this.app.comp[this.app.groups[a].elements[b].id],
																	coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																	coO = coR.objects[co.objects];
																for (var c = 0; c < coO.scores.length; c++) {
																	var coS = coO.scores[c];
																	if (e.discountPointTypes.length === 0 || e.discountPointTypes.includes(coS.id)) {
																		if (!coS.isNotDiscountable && !coS.discountIsOn) {
																			if (1 == e.discountOperator) coS.discountScore = parseInt(coS.value) - parseInt(e.discountValue);
																			else if (2 == e.discountOperator) coS.discountScore = parseInt(coS.value) + parseInt(e.discountValue);
																			else if (3 == e.discountOperator) coS.discountScore = parseInt(coS.value) * e.discountValue;
																			else if (4 == e.discountOperator) coS.discountScore = parseInt(coS.value) / e.discountValue;
																			if (e.discountLowLimitIsOn && "undefined" !== typeof e.discountLowLimit) coS.discountScore = coS.discountScore < e.discountLowLimit ? parseInt(e.discountLowLimit) : coS.discountScore;
																			if (e.discountShow) this.$set(coS, "discountShow", e.discountShow), this.$set(coS, "discountBeforeText", e.discountBeforeText), this.$set(coS, "discountAfterText", e.discountAfterText);
																			this.$set(coS, "discountIsOn", true);
																			this.$set(coS, "discountedFrom", e.id);
																		}
																	}
																}
															}
													}
												}
										for (var g = 0; g < e.scores.length; g++)
											if (this.checkRequireds(e.scores[g]) && !e.scores[g].isActive)
												for (var w = 0; w < this.app.pointTypes.length; w++) this.app.pointTypes[w].id == e.scores[g].id && (this.app.pointTypes[w].startingSum -= (e.scores[g].discountIsOn ? e.scores[g].discountScore : parseInt(e.scores[g].value)), e.scores[g].isActive = !0, tmpScores.push({id: e.scores[g].id, value: e.scores[g].discountIsOn ? e.scores[g].discountScore : parseInt(e.scores[g].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[w].id, this.app.pointTypes[w].startingSum));
										this.activated.push(eid), t.currentChoices += 1;
										var a, f, b, m, v, ee = 0;
										if (e.duplicateRow) {
											if ("undefined" !== typeof e.duplicateRowId && "undefined" !== typeof e.duplicateRowPlace) this.duplicateRow(e, t);
										}
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom) {
												var y = e.activateThisChoice.split(","); 
												var RD = y.slice(),
													rd = RD.filter(item => !this.activated.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
													nAR = parseInt(e.numActivateRandom) > rd.length ? rd.length : parseInt(e.numActivateRandom);
												this.$set(e, 'activatedRandom', []);
												for (var v = rd.length - 1; v > 0; v--) {
													var rnd = Math.floor(Math.random() * (v + 1));
													[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
												}
												e.activatedRandom = rd.slice(0, nAR);
												for (var a = 0, b = 0, v = 0; v < parseInt(nAR) + b; v++) {
													var rndV = e.activatedRandom[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[rndV[0]]) {
														var co = this.app.comp[rndV[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if ("undefined" === typeof coO.forcedActivated) this.$set(coO, "forcedActivated", !1);
														if (this.checkRequireds(coO) && this.checkPoints(coO)) {
															if (coO.isSelectableMultiple) {
																var ee = rndV[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																		this.selectedOneLess(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (!coO.isActive) this.activateObject(coO, coR);
																if (!e.isAllowDeselect) coO.forcedActivated = !0;
															}
														} else {
															if (nAR + a < rd.length) {
																e.activatedRandom.splice(v, 1, rd[nAR + a]);
																a++, v--;
															} else {
																e.activatedRandom.splice(v, 1);
																b--, v--;
															}
														}
													}
												}
											} else {
												for (var y = e.activateThisChoice.split(","), v = 0; v < y.length; v++) {
													var yv = y[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[yv[0]]) {
														var co = this.app.comp[yv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if ("undefined" === typeof coO.forcedActivated) this.$set(coO, "forcedActivated", !1);
														if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
															if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
														}
														if (this.checkRequireds(coO) && this.checkPoints(coO)) {
															if (coO.isSelectableMultiple) {
																var ee = yv[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(coO, coR);
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																		this.selectedOneLess(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (!coO.isActive) this.activateObject(coO, coR);
																if (!e.isAllowDeselect) coO.forcedActivated = !0;
															}
															if(!coO.isActive) {
																if(coO.isSelectableMultiple) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1]);
																}
																coO.forcedActivated = !1;
															}
														} else {
															if(coO.isSelectableMultiple) e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1]);
															coO.forcedActivated = !1;
														}
													}
												}
											}
										}
										if (e.deactivateOtherChoice)
											for (var y = e.deactivateThisChoice.split(","), f = 0; f < y.length; f++) {
												var yf = y[f].split("/ON#");
												if ("undefined" !== typeof this.app.comp[yf[0]]) {
													var co = this.app.comp[yf[0]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
														coO = coR.objects[co.objects];
														if (!coO.forcedActivated) {
															if (coO.isSelectableMultiple) {
																var ee = yf[1];
																if (ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneLess(coO, coR);
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(coO, coR);
																	}
																}
															} else {
																if (coO.isActive) this.activateObject(coO, coR);
															}
														}
												}
												if ("undefined" !== typeof this.app.compG[yf[0]]) {
													var co = this.app.compG[yf[0]],
														coG = this.app.groups[co.groups];
													for (var T = 0; T < coG.elements.length; T++) {
														if ("undefined" !== typeof this.app.comp[coG.elements[T].id]) {
															var coT = this.app.comp[coG.elements[T].id],
																coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows],
																coTO = coTR.objects[coT.objects];
															if (!coTO.forcedActivated) {
																if (coTO.isSelectableMultiple) {
																	var ee = yf[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneLess(coTO, coTR);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(coTO, coTR);
																		}
																	}
																} else {
																	if (coTO.isActive) this.activateObject(coTO, coTR);
																}
															}
														}
													}
												}
											}
										for (var f = 0; f < this.activated.length; f++) {
											var aF = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aF[0]]) {
												var co = this.app.comp[aF[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects];
												if (!this.exceptedObjects.includes(coO.id)) {
													if (!this.checkRequireds(coO)) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.multiplyPointtypeIsOn) {
											e.multiplyPointtypeIsOnCheck = !0;
											if ("object" !== typeof e.startingSumAtMultiply) this.$set(e, "startingSumAtMultiply", []);
											for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++)
													if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
														if (e.multiplyPointtypeIsId)
															for (var x = 0; x < this.app.pointTypes.length; x++) {
																if (this.app.pointTypes[x].id == e.multiplyWithThis) {
																	e.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																	this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																}
															}
														else e.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * e.multiplyWithThis, this.app.pointTypes[m].startingSum *= e.multiplyWithThis; this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
											}
											this.app.mdObjects.push(e);
										}
										if (e.dividePointtypeIsOn) {
											e.dividePointtypeIsOnCheck = !0;
											if ("object" !== typeof e.startingSumAtDivide) this.$set(e, "startingSumAtDivide", []);
											for (var l = 0; l < e.pointTypeToDivide.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
														e.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / e.divideWithThis;
														this.app.pointTypes[m].startingSum /= e.divideWithThis;
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
												}
											}
											this.app.mdObjects.push(e);
										}
										if (e.isChangeVariables) {
											for (var m = 0; m < e.changedVariables.length; m++) {
												for (var n = 0; n < this.app.variables.length; n++) {
													if (e.changedVariables[m] == this.app.variables[n].id) {
														if (e.changeType == "1") this.app.variables[n].isTrue = !0;
														else if (e.changeType == "2") this.app.variables[n].isTrue = !1;
														else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
													}
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices += e.numbAddToAllowChoice, isNaN(coR.allowedChoicesChange) && (coR.allowedChoicesChange = 0), coR.allowedChoicesChange += e.numbAddToAllowChoice;
												var I = coR.currentChoices;
												if (I > coR.allowedChoices) {
													var O = I - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) O > 0 && coR.objects[v].isActive && (this.activateObject(coR.objects[v], coR), O--)
												}
											}
										this.updateScoresS(e, t, tmpScores, 0);
										if (e.textfieldIsOn) {
											for (var m = 0; m < this.app.words.length; m++) {
												if (this.app.words[m].id == e.idOfTheTextfieldWord) {
													this.app.words[m].replaceText = e.wordChangeSelect;
													this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
												}
											}
										}
										if (e.isImageUpload) {
											this.$set(e, "defaultImage", e.image);
											this.currentComponent = "appImageUpload"
										}
										if (e.backpackBtnRequirement) {
											if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
											this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
										}
										if (e.changeBackground) {
											if (e.changeBgImage) {
												var a = this.app.styling.backgroundImage;
												this.$set(this.app.styling, "backgroundImage", e.bgImage);
												this.$set(e, "bgImage", a);
											} else {
												var a = this.app.styling.backgroundColor;
												this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
												this.$set(e, "changedBgColorCode", a);
											}
										}
										if (e.changePointBar) {
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barBackgroundColor;
												this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
												this.$set(e, "changedBarBgColor", a);
											}
											if (e.changeBarTextColorIsOn) {
												var a = this.app.styling.barTextColor;
												this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
												this.$set(e, "changedBarTextColor", a);
											}
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barIconColor;
												this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
												this.$set(e, "changedBarIconColor", a);
											}
										}
										if (e.scrollToRow) {
											if ("undefined" !== typeof e.scrollRowId && e.scrollRowId.length > 0) {
												if ("undefined" !== typeof this.app.compR[t.id]) {
													var tCo = this.app.compR[t.id];
													if ("undefined" !== typeof this.app.compR[e.scrollRowId]) {
														var p = this.$el.offsetParent.offsetParent.parentElement.children,
															co = this.app.compR[e.scrollRowId];
														for (var a = 0; a < p.length; a++) {
															if (this.$el.offsetParent.offsetParent == p[a]) {
																coR = p[co.rows + a - tCo.rows];
																function waitScroll() {
																	setTimeout(function() {
																		if (coR) {
																			coR.scrollIntoView({behavior: 'smooth'});
																		} else {
																			waitScroll();
																		}
																	}, 100);
																}
																waitScroll();
																break
															}
														}
													}
												}
											}
										}
										if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
											if (e.bgmId) {
												if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
												this.app.bgmIsPlaying = !0;
												this.playBgm(e, e.bgmId, 0);
											}
										}
										if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
											if ("undefined" !== typeof bgmPlayer.mute) {
												bgmPlayer.mute();
											}
										}
										if (e.isContentHidden) {
											for (var a = 0; a < e.hiddenContentsRow.length; a++) {
												if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
													var co = this.app.compR[e.hiddenContentsRow[a]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													if (!coR.textIsRemoved) this.$set(coR, "textIsRemoved", true);
													for (var b = 0; b < e.hiddenContentsType.length; b++) {
														if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", true);
														else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", true);
														else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", true);
														else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", true);
														else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", true);
														else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", true);
														else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", true);
														else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", true);
													}
												}
											}
										}
										e.isActive = !e.isActive, this.updateActivated();
										if (e.cleanACtivatedOnSelect) this.cleanActivated();
									}
								} else if (this.activated.includes(eid)) {
									if (this.checkPointsMD(e)) {
										for (var a = 0; a < e.scores.length; a++)
											if (this.checkRequireds(e.scores[a]) && e.scores[a].isActive || e.scores[a].isActive)
												for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += (e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)), e.scores[a].isActive = !1, e.scores[a].setValue = !1, tmpScores.push({id: e.scores[a].id, value: e.scores[a].discountIsOn ? e.scores[a].discountScore : parseInt(e.scores[a].value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[n].id, this.app.pointTypes[n].startingSum));
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
												for (var v = e.activatedRandom.length - 1; v >= 0; v--) {
													var rndV = e.activatedRandom[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[rndV[0]]) {
														var co = this.app.comp[rndV[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == rndV[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == rndV[0]) {
																			EE = parseInt(rndV[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = rndV[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
											} else {
												for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
													var pv = p[v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[pv[0]]) {
														var co = this.app.comp[pv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").includes(e.id)) {
																if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
															}
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == pv[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == pv[0]) {
																			EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = pv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
											}
										}
										for (var f = 0; f < this.activated.length; f++) {
											var af = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[af[0]]) {
												var co = this.app.comp[af[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects];
												if (coO.id !== eid && !this.exceptedObjects.includes(coO.id)) {
													var nH = this.activated.indexOf(eid);
													this.activated.splice(nH, 1);
													t.currentChoices -= 1;
													var bR = this.checkRequireds(coO);
													this.activated.splice(nH, 0, eid);
													t.currentChoices += 1;
													if (!bR) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.multiplyPointtypeIsOnCheck) {
											e.multiplyPointtypeIsOnCheck = !1;
											var ei = 0;
											for (var l = 0; l < e.pointTypeToMultiply.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToMultiply[l]) {
														for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
															var mdO = this.app.mdObjects[n];
															if (mdO.id != e.id) {
																if (mdO.multiplyPointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																} else if (mdO.dividePointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																}
															} else {
																this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																ei = n;
																break
															}
														}
														for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
															var mdO = this.app.mdObjects[n];
															if (mdO.multiplyPointtypeIsOnCheck) {
																if (mdO.multiplyPointtypeIsId) {
																	for (var x = 0; x < this.app.pointTypes.length; x++) {
																		if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																			mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																			this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																		}
																	}
																} else {
																	mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																	this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																}
															} else if (mdO.dividePointtypeIsOnCheck) {
																mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
															}
														}
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
													}
												}
											}
											this.app.mdObjects.splice(ei, 1);
										}
										if (e.dividePointtypeIsOnCheck) {
											e.dividePointtypeIsOnCheck = !1;
											var ei = 0;
											for (var l = 0; l < e.pointTypeToDivide.length; l++) {
												for (var m = 0; m < this.app.pointTypes.length; m++) {
													if (this.app.pointTypes[m].id == e.pointTypeToDivide[l]) {
														for (var n = this.app.mdObjects.length - 1; n >= 0; n--) {
															var mdO = this.app.mdObjects[n];
															if (mdO.id != e.id) {
																if (mdO.multiplyPointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtMultiply[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtMultiply[l] / mdO.multiplyWithThis);
																} else if (mdO.dividePointtypeIsOnCheck) {
																	this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																	this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																}
															} else {
																this.app.pointTypes[m].startingSum -= mdO.startingSumAtDivide[l];
																this.app.pointTypes[m].startingSum += parseInt(mdO.startingSumAtDivide[l] * mdO.divideWithThis);
																ei = n;
																break
															}
														}
														for (var n = ei + 1; n < this.app.mdObjects.length; n++) {
															var mdO = this.app.mdObjects[n];
															if (mdO.multiplyPointtypeIsOnCheck) {
																if (mdO.multiplyPointtypeIsId) {
																	for (var x = 0; x < this.app.pointTypes.length; x++) {
																		if (this.app.pointTypes[x].id == mdO.multiplyWithThis) {
																			mdO.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
																			this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
																		}
																	}
																} else {
																	mdO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * mdO.multiplyWithThis;
																	this.app.pointTypes[m].startingSum *= mdO.multiplyWithThis;
																}
															} else if (mdO.dividePointtypeIsOnCheck) {
																mdO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / mdO.divideWithThis;
																this.app.pointTypes[m].startingSum /= mdO.divideWithThis;
															}
														}
														this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum)
													}
												}
											}
											this.app.mdObjects.splice(ei, 1);
										}
										if (e.isChangeVariables) {
											for (var m = 0; m < e.changedVariables.length; m++) {
												for (var n = 0; n < this.app.variables.length; n++) {
													if (e.changedVariables[m] == this.app.variables[n].id) {
														if (e.changeType == "1" && this.app.variables[n].isTrue) this.app.variables[n].isTrue = !1;
														else if (e.changeType == "2" && !this.app.variables[n].isTrue) this.app.variables[n].isTrue = !0;
														else if (e.changeType == "3") this.app.variables[n].isTrue = !this.app.variables[n].isTrue;
													}
												}
											}
										}
										if (e.textfieldIsOn) {
											for (var m = 0; m < this.app.words.length; m++) {
												if (this.app.words[m].id == e.idOfTheTextfieldWord) {
													this.app.words[m].replaceText = "undefined" === typeof e.wordChangeDeselect ? "" : e.wordChangeDeselect;
													this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
												var d = coR.currentChoices;
												if (d > coR.allowedChoices) {
													var u = d - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) {
														if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
															if (coR.objects[v].isSelectableMultiple)
																for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
															else
																this.activateObject(coR.objects[v], coR);
															u--;
														}
													}
												}
											}
										this.updateScoresC(e, t, tmpScores, 0);
										if (e.isImageUpload) {
											this.$set(e, "image", e.defaultImage);
										}
										if (e.backpackBtnRequirement)
											this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
										if (e.changeBackground) {
											if (e.changeBgImage) {
												var a = this.app.styling.backgroundImage;
												this.$set(this.app.styling, "backgroundImage", e.bgImage);
												this.$set(e, "bgImage", a);
											} else {
												var a = this.app.styling.backgroundColor;
												this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
												this.$set(e, "changedBgColorCode", a);
											}
										}
										if (e.changePointBar) {
											if (e.changeBarBgColorIsOn) {
												var a = this.app.styling.barBackgroundColor;
												this.$set(this.app.styling, "barBackgroundColor", e.changedBarBgColor);
												this.$set(e, "changedBarBgColor", a);
											}
											if (e.changeBarTextColorIsOn) {
												var a = this.app.styling.barTextColor;
												this.$set(this.app.styling, "barTextColor", e.changedBarTextColor);
												this.$set(e, "changedBarTextColor", a);
											}
											if (e.changeBarIconColorIsOn) {
												var a = this.app.styling.barIconColor;
												this.$set(this.app.styling, "barIconColor", e.changedBarIconColor);
												this.$set(e, "changedBarIconColor", a);
											}
										}
										if (e.discountOther)
											if ("undefined" !== typeof e.discountOperator && "undefined" !== typeof e.discountValue && "undefined" !== typeof e.discountGroups)
												for (var a = 0; a < this.app.groups.length; a++) {
													if (e.discountGroups.includes(this.app.groups[a].id)) {
														for (var b = 0; b < this.app.groups[a].elements.length; b++)
															if ("undefined" !== typeof this.app.comp[this.app.groups[a].elements[b].id]) {
																var co = this.app.comp[this.app.groups[a].elements[b].id],
																	coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																	coO = coR.objects[co.objects];
																for (var c = 0; c < coO.scores.length; c++) {
																	var coS = coO.scores[c];
																	if (coS.discountedFrom == e.id) this.$set(coS, "discountIsOn", false);
																}
															}
													}
												}
										if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
											if (e.bgmId) {
												this.app.bgmIsPlaying = !1;
												this.playBgm(e, e.bgmId, 0)
											}
										}
										if (e.muteBgm && "undefined" !== typeof bgmPlayer) {
											if ("undefined" !== typeof bgmPlayer.unMute) {
												bgmPlayer.unMute();
											}
										}
										if (e.isContentHidden) {
											for (var a = 0; a < e.hiddenContentsRow.length; a++) {
												if ("undefined" !== typeof this.app.compR[e.hiddenContentsRow[a]]) {
													var co = this.app.compR[e.hiddenContentsRow[a]],
														coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
													for (var b = 0; b < e.hiddenContentsType.length; b++) {
														if (e.hiddenContentsType[b] == "1") this.$set(coR, "objectTitleRemoved", false);
														else if (e.hiddenContentsType[b] == "2") this.$set(coR, "objectImageRemoved", false);
														else if (e.hiddenContentsType[b] == "3") this.$set(coR, "objectTextRemoved", false);
														else if (e.hiddenContentsType[b] == "4") this.$set(coR, "objectScoreRemoved", false);
														else if (e.hiddenContentsType[b] == "5") this.$set(coR, "objectRequirementRemoved", false);
														else if (e.hiddenContentsType[b] == "6") this.$set(coR, "addonTitleRemoved", false);
														else if (e.hiddenContentsType[b] == "7") this.$set(coR, "addonImageRemoved", false);
														else if (e.hiddenContentsType[b] == "8") this.$set(coR, "addonTextRemoved", false);
													}
												}
											}
										}
										this.activated.splice(this.activated.indexOf(eid), 1), e.isActive = !e.isActive, this.updateActivated(), t.currentChoices -= 1;
									}
								}
								if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
							}
							if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
						}
                    },
                    updateObject: function() {
                        this.$emit("objectWasChanged", this.object)
                    },
                    selectedOneMore: function(e, t) {
						var rowType = this.app.compR[t.id].type;
                        var s = !0, tmpPoint = {id: "", value: 0};
						if (!this.linkedObjects.includes(e.id)) {
							if (e.isMultipleUseVariable) {
								if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
									var cnt = 0;
									for (var r = 0; r < t.objects.length; r++) {
										if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
											if (t.objects[r].isSelectableMultiple)
												for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
											else
												this.activateObject(t.objects[r], t);
											break
										}
										else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
									}
									if (cnt >= t.allowedChoices) 
										s = !1;
									else 
										e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable && this.checkPoints(e) ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
								} else {
									e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable && this.checkPoints(e) ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
								}
							} else {
								for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesPluss > this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum++, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum), tmpPoint.id = e.multipleScoreId, tmpPoint.value = this.app.pointTypes[o].startingSum, this.$set(this.app.pointTypeMap, this.app.pointTypes[o].id, this.app.pointTypes[o].startingSum)) : s = !1);
							}
							if (s) {
								var eid, eidNum
								if (e.isMultipleUseVariable) {
									eid = e.id + "/ON#" + (parseInt(e.multipleUseVariable));
									eidNum = parseInt(e.multipleUseVariable) + 1;
								} else {
									eid = e.id;
								}
								var tmpScores = [];
								var tmpVariable = e.isMultipleUseVariable ? Math.abs(parseInt(e.multipleUseVariable)) : tmpPoint.value;
								if ("undefined" === typeof this.exceptedObjects) this.$set(this, "exceptedObjects", []);
								if (!this.exceptedObjects.length == 0) this.exceptedObjects.push(e.id);
								if ("undefined" !== typeof e.scores) {
									for (var i = 0; i < e.scores.length; i++)
										for (var s = 0; s < this.app.pointTypes.length; s++) {
											if (this.app.pointTypes[s].id == e.scores[i].id) {
												if (e.selectedThisManyTimesProp > 0) {
													if ("undefined" === typeof e.scores[i].isActiveMul) this.$set(e.scores[i], "isActiveMul", []);
													if (this.checkRequireds(e.scores[i]) && !e.scores[i].isActiveMul[tmpVariable - 1]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore * tmpVariable : parseInt(e.scores[i].value) * tmpVariable);
															e.scores[i].isActiveMul[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * tmpVariable : parseInt(e.scores[i].value) * tmpVariable});
														} else {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMul[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});
														}
													}
												} else {
													if (this.checkRequireds(e.scores[i]) && e.scores[i].isActiveMulMinus[tmpVariable] || e.scores[i].isActiveMulMinus[tmpVariable]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMulMinus[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});	

														} else {
															this.app.pointTypes[s].startingSum -= (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMulMinus[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												}
												this.$set(this.app.pointTypeMap, this.app.pointTypes[s].id, this.app.pointTypes[s].startingSum);
											}
										}
								}
								if (e.isMultipleUseVariable) {
									if (e.multipleUseVariable > e.numMultipleTimesMinus) {
										if (e.isActive == !1) {
											e.isActive = !0, t.currentChoices += 1, this.activated.push(e.id + "/ON#" + e.multipleUseVariable);
											if (e.backpackBtnRequirement) {
												if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
												this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
											}
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.scrollToRow) {
												if ("undefined" !== typeof e.scrollRowId && e.scrollRowId.length > 0) {
													if ("undefined" !== typeof this.app.compR[t.id]) {
														var tCo = this.app.compR[t.id];
														if ("undefined" !== typeof this.app.compR[e.scrollRowId]) {
															var p = this.$el.offsetParent.offsetParent.parentElement.children,
																co = this.app.compR[e.scrollRowId];
															for (var a = 0; a < p.length; a++) {
																if (this.$el.offsetParent.offsetParent == p[a]) {
																	coR = p[co.rows + a - tCo.rows];
																	function waitScroll() {
																		setTimeout(function() {
																			if (coR) {
																				coR.scrollIntoView({behavior: 'smooth'});
																			} else {
																				waitScroll();
																			}
																		}, 100);
																	}
																	waitScroll();
																	break
																}
															}
														}
													}
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
													this.app.bgmIsPlaying = !0;
													this.playBgm(e, e.bgmId, 0);
												}
											}
										} else {
											if (e.multipleUseVariable == 0) {
												e.isActive = !1, this.activated.splice(this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), 1), t.currentChoices -= 1;
											} else {
												this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable - 1)), (e.id + "/ON#" + e.multipleUseVariable));
											}
										}
										if (e.multipleUseVariable > 0) {
											if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
												if (e.isActivateRandom && "undefined" !== typeof e.isActivateRandom) {
													var y = e.activateThisChoice.split(",");
													var RD = y.slice(),
														rd = RD.filter(item => !this.activated.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
														nAR = parseInt(e.numActivateRandom) > rd.length ? rd.length : parseInt(e.numActivateRandom);
													if ("undefined" === typeof e.activatedRandomMul) this.$set(e, 'activatedRandomMul', []);
													for (var v = rd.length - 1; v > 0; v--) {
														var rnd = Math.floor(Math.random() * (v + 1));
														[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
													}
													e.activatedRandomMul.push(rd.slice(0, nAR));
													for (var a = 0, b = 0, v = 0; v < nAR + b; v++) {
														var aRM = e.activatedRandomMul[e.selectedThisManyTimesProp - 1][v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[aRM[0]]) {
															var co = this.app.comp[aRM[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (this.checkRequireds(coO) && this.checkPoints(coO)) {
																if (coO.isSelectableMultiple) {
																	var ee = aRM[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneMore(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			this.selectedOneLess(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		}
																	}
																} else {
																	if (!coO.isActive) this.activateObject(coO, coR);
																	if (!e.isAllowDeselect) coO.forcedActivated = !0;
																}
															} else {
																if (nAR + a < rd.length) {
																	e.activatedRandomMul[e.selectedThisManyTimesProp - 1].splice(v, 1, rd[nAR + a]);
																	a++, v--;
																} else {
																	e.activatedRandomMul[e.selectedThisManyTimesProp - 1].splice(v, 1);
																	b--, v--;
																}
															}
														}
													}
												} else {
													for (var y = e.activateThisChoice.split(","), v = 0; v < y.length; v++) {
														var yv = y[v].split("/ON#");
														if ("undefined" !== typeof this.app.comp[yv[0]]) {
															var co = this.app.comp[yv[0]],
																coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
																coO = coR.objects[co.objects];
															if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").some(item => item.split("/ON#")[0] == e.id)) {
																if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
															}
															if (this.checkRequireds(coO) && this.checkPoints(coO)) {
																if (coO.isSelectableMultiple) {
																	var ee = yv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.selectedOneMore(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			this.selectedOneLess(coO, coR);
																			if (!e.isAllowDeselect) coO.forcedActivated = !0;
																		}
																	}
																} else {
																	if (e.selectedThisManyTimesProp == 1) {
																		if (!coO.isActive) this.activateObject(coO, coR);
																		if (!e.isAllowDeselect) coO.forcedActivated = !0;
																	}
																}
															} else {
																if (coO.isSelectableMultiple) {
																	if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																	e.cancelForcedActivated.push(coO.id + "/ON#" + yv[1])
																}
															}
														}
													}
												}
											}
										}
										for (var f = 0; f < this.activated.length; f++) {
											var aF = this.activated[f].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aF[0]]) {
												var co = this.app.comp[aF[0]],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
													coO = coR.objects[co.objects],
													nR = this.activated.indexOf(eid);
												if (!this.exceptedObjects.includes(coO.id)) {
													var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
													if (fI !== -1) var aFI = this.activated[fI].split("/ON#");
													fI !== -1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) + 1) : (this.activated.push(eid), t.currentChoices += 1);
													var bR = this.checkRequireds(coO);
													fI !== -1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1);
													if (!bR) {
														this.exceptedObjects.push(coO.id);
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																coO.forcedActivated = !1;
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
										if (e.addToAllowChoice)
											if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
												var co = this.app.compR[e.idOfAllowChoice],
													coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
												coR.allowedChoices += e.numbAddToAllowChoice, isNaN(coR.allowedChoicesChange) && (coR.allowedChoicesChange = 0), coR.allowedChoicesChange += e.numbAddToAllowChoice;
												var I = coR.currentChoices;
												if (I > coR.allowedChoices) {
													var O = I - coR.allowedChoices;
													for (var v = 0; v < coR.objects.length; v++) O > 0 && coR.objects[v].isActive && (this.activateObject(coR.objects[v], coR), O--)
												}
											}
										this.updateScoresMulS(e, t, tmpScores, 0);
									}
									if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
								}
							}
						}
						if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
                    },
                    selectedOneLess: function(e, t) {
						var rowType = this.app.compR[t.id].type;
                        var s = !0, tmpPoint = {id: "", value: 0};
						if (!this.linkedObjects.includes(e.id)) {
							if (e.isMultipleUseVariable) {
								if (e.numMultipleTimesMinus < e.multipleUseVariable) {
									if (e.multipleUseVariable == 0 && t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices) {
										var cnt = 0;
										for (var r = 0; r < t.objects.length; r++) {
											if (t.objects[r].isActive && !t.objects[r].forcedActivated) {
												if (t.objects[r].isSelectableMultiple)
													for (var a = t.objects[r].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(t.objects[r], t);
												else
													this.activateObject(t.objects[r], t);
												break
											}
											else if (t.objects[r].isActive && t.objects[r].forcedActivated) cnt++;
										}
										if (cnt >= t.allowedChoices) 
											s = !1;
										else 
											e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable && this.checkPointsR(e) ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
									} else {
										e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable && this.checkPointsR(e) ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable), this.$set(this.app.objectMap, e.id, e.multipleUseVariable)) : s = !1;
									}
								}
							} else {
								for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesMinus < this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum--, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum), tmpPoint.id = e.multipleScoreId, tmpPoint.value = this.app.pointTypes[o].startingSum, this.$set(this.app.pointTypeMap, this.app.pointTypes[o].id, this.app.pointTypes[o].startingSum)) : s = !1);
							}
							if (s) {
								var eid, eidNum;
								if (e.isMultipleUseVariable) {
									eid = e.id + "/ON#" + (parseInt(e.multipleUseVariable) + 1);
									eidNum = parseInt(e.multipleUseVariable) + 1;
								} else {
									eid = e.id;
								}
								var tmpScores = [];
								var tmpVariable = e.isMultipleUseVariable ? Math.abs(parseInt(e.multipleUseVariable)) : tmpPoint.value;
								if ("undefined" !== typeof e.scores) {
									for (var i = 0; i < e.scores.length; i++)
										for (var s = 0; s < this.app.pointTypes.length; s++) {
											if (this.app.pointTypes[s].id == e.scores[i].id) {
												if (e.selectedThisManyTimesProp < 0) {
													if ("undefined" === typeof e.scores[i].isActiveMulMinus) this.$set(e.scores[i], "isActiveMulMinus", []);
													if (this.checkRequireds(e.scores[i]) && !e.scores[i].isActiveMulMinus[tmpVariable - 1]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMulMinus[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});
														} else {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMulMinus[tmpVariable - 1] = !0;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												} else {
													if (this.checkRequireds(e.scores[i]) && e.scores[i].isActiveMul[tmpVariable] || e.scores[i].isActiveMul[tmpVariable]) {
														if (e.scores[i].multiplyByTimes) {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1));
															e.scores[i].isActiveMul[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore * (tmpVariable + 1) : parseInt(e.scores[i].value) * (tmpVariable + 1)});
														} else {
															this.app.pointTypes[s].startingSum += (e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value));
															e.scores[i].isActiveMul[tmpVariable] = !1;
															tmpScores.push({id: e.scores[i].id, value: e.scores[i].discountIsOn ? e.scores[i].discountScore : parseInt(e.scores[i].value)});	
														}
													}
												}
												this.$set(this.app.pointTypeMap, this.app.pointTypes[s].id, this.app.pointTypes[s].startingSum);
											}
										}
								}
								if (e.isMultipleUseVariable) {
									if (e.multipleUseVariable >= 0) {
										if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
											if (e.isActivateRandom && "undefined" !== typeof e.activatedRandomMul && e.activatedRandomMul.length > 0) {
												for (var v = e.activatedRandomMul[e.selectedThisManyTimesProp].length - 1; v >= 0; v--) {
													var aRM = e.activatedRandomMul[e.selectedThisManyTimesProp][v].split("/ON#");
													if ("undefined" !== typeof this.app.comp[aRM[0]]) {
														var co = this.app.comp[aRM[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.isActive) {
															if (!e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == aRM[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == aRM[0]) {
																			EE = parseInt(aRM[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = aRM[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (coO.isActive && !e.isNotDeactivate) {
																	if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																	this.activateObject(coO, coR);
																}
															}
														}
													}
												}
												e.activatedRandomMul.splice(e.selectedThisManyTimesProp, 1);
											} else {
												for (var p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--) {
													var pv = p[v].split("/ON#");
													if ("undefined" !== this.app.comp[pv[0]]) {
														var co = this.app.comp[pv[0]],
															coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice && coO.activateThisChoice.split(",").some(item => item.split("/ON#")[0] == e.id)) {
															if (!this.linkedObjects.includes(e.id)) this.linkedObjects.push(e.id);
														}
														if (coO.isActive) {
															if (e.selectedThisManyTimesProp == 0 && !e.isAllowDeselect) coO.forcedActivated = !1;
															if (coO.isSelectableMultiple) {
																if ("undefined" !== typeof e.cancelForcedActivated && e.cancelForcedActivated.some(item => item.split("/ON#")[0] == p[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < e.cancelForcedActivated.length; AC++) {
																		var cFA = e.cancelForcedActivated[AC].split("/ON#");
																		if (cFA[0] == pv[0]) {
																			EE = parseInt(pv[1]) - parseInt(cFA[1]), e.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coR.numMultipleTimesMinus++;
																		}
																	}
																} else {
																	var ee = pv[1];
																	if (ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus--;
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneLess(coO, coR);
																			}
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			if (!e.isNotDeactivate) {
																				if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																				this.selectedOneMore(coO, coR);
																			}
																			if (!e.isAllowDeselect) coO.numMultipleTimesMinus++;
																		}
																	}
																}
															} else {
																if (e.selectedThisManyTimesProp == 0) {
																	if (coO.isActive && !e.isNotDeactivate) {
																		if (!this.exceptedObjects.includes(coO.id)) this.exceptedObjects.push(coO.id);
																		this.activateObject(coO, coR);
																	}
																}
															}
														}
													}
												}
											}
										}
									}
									for (var f = 0; f < this.activated.length; f++) {
										var aF = this.activated[f].split("/ON#");
										if ("undefined" !== typeof this.app.comp[aF[0]]) {
											var co = this.app.comp[aF[0]],
												coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
												coO = coR.objects[co.objects];
											if (coO.id !== e.id && !this.exceptedObjects.includes(coO.id)) {
												var fI = this.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI !== -1) {
													var	aFI = this.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.activated.splice(fI, 1), t.currentChoices -= 1);
													var bR = this.checkRequireds(coO);
													parseInt(aFI[1]) > 1 ? this.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.activated.splice(fI, 0, aFI[0] + "/ON#" + aFI[1]), t.currentChoices += 1);
													if (!bR) {
														if (coO.isMultipleUseVariable) {
															for (var N = coO.multipleUseVariable, n = 0; n < N; n++) {
																coO.forcedActivated ? (coO.forcedActivated = !1, coO.numMultipleTimesMinus--, this.selectedOneLess(coO, coR), coO.forcedActivated = !0) : this.selectedOneLess(coO, coR);
															}
															if (coO.forcedActivated) {
																if ("undefined" === typeof e.cancelForcedActivated) this.$set(e, "cancelForcedActivated", []);
																e.cancelForcedActivated.push(coO.id + "/ON#" + N);
																coO.forcedActivated = !1;
															}
														} else {
															if (coO.forcedActivated) coO.forcedActivated = !1;
															this.activateObject(coO, coR);
														}
														f--;
													}
												}
											}
										}
									}
									if (e.addToAllowChoice)
										if ("undefined" !== typeof this.app.compR[e.idOfAllowChoice]) {
											var co = this.app.compR[e.idOfAllowChoice],
												coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows];
											coR.allowedChoices -= e.numbAddToAllowChoice, coR.allowedChoicesChange -= coR.numbAddToAllowChoice;
											var d = coR.currentChoices;
											if (d > coR.allowedChoices) {
												var u = d - coR.allowedChoices;
												for (var v = 0; v < coR.objects.length; v++) {
													if (u > 0 && coR.objects[v].isActive && !coR.objects[v].forcedActivated && coR.objects[v].id != e.id) {
														if (coR.objects[v].isSelectableMultiple)
															for (var a = t.objects[v].multipleUseVariable, b = 0; b < a; b++) this.selectedOneLess(coR.objects[v], t);
														else
															this.activateObject(coR.objects[v], coR);
														u--;
													}
												}
											}
										}
									this.updateScoresMulC(e, t, tmpScores, 0);
									if (e.isActive == !0) {
										if (e.multipleUseVariable == 0 && ("undefined" === typeof e.forcedActivated || e.forcedActivated == !1)) {
											e.isActive = !1, this.activated.splice(this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), 1), t.currentChoices -= 1;
											if (e.backpackBtnRequirement) this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn - 1);
											if (e.changeBackground) {
												if (e.changeBgImage) {
													var a = this.app.styling.backgroundImage;
													this.$set(this.app.styling, "backgroundImage", e.bgImage);
													this.$set(e, "bgImage", a);
												} else {
													var a = this.app.styling.backgroundColor;
													this.$set(this.app.styling, "backgroundColor", e.changedBgColorCode);
													this.$set(e, "changedBgColorCode", a);
												}
											}
											if (e.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
												if (e.bgmId) {
													this.app.bgmIsPlaying = !1;
													this.playBgm(e, e.bgmId, 0);
												}
											}
										}
										else this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), (e.id + "/ON#" + e.multipleUseVariable));
									} else {
										if (e.multipleUseVariable == -1) {
											e.isActive = !0, t.currentChoices += 1;
											this.activated.push(e.id + "/ON#" + e.multipleUseVariable);
										}
									}
									if (this.exceptedObjects.indexOf(e.id) == 0) this.$set(this, "exceptedObjects", []);
								}
							}
						}
						if (this.linkedObjects.indexOf(e.id) == 0) this.$set(this, "linkedObjects", []);
                    },
                    updateActivated: function() {
                        this.$emit("activatedWasChanged", this.activated)
                    },
                    duplicateRow: function(e, t) {
						var rowType = this.app.compR[t.id].type;
						var thisRow = rowType == "app" ? this.app.rows : this.backpack;
						var c, i, j, s, fr, fo, y, z, zx, zy, zz, nR = 0, nF = 0;
						for (var b = 0; b < thisRow.length; b++) {
							if (thisRow[b].id.split("/D#")[0] == e.duplicateRowId.split("/D#")[0]) {
								nR++;
							}
							if (thisRow[b].id == e.duplicateRowPlace) {
								nF = b + 1;
							}
						}
						for (var f = 0; f < thisRow.length; f++) {
							if (thisRow[f].id == e.duplicateRowId) {
								thisRow.splice(nF, 0, JSON.parse(JSON.stringify(thisRow[f])));
								fr = thisRow[nF], fr.currentChoices = 0;
								y = fr.id.split("/D#"), fr.id = y[0] + "/D#" + nR;
								for (fr.allowedChoicesChange > 0 && (fr.allowedChoices -= fr.allowedChoicesChange), s = 0; s < fr.objects.length; s++) {
									fo = fr.objects[s], z = fo.id.split("/D#"), fo.id = z[0] + "/D#" + nR;
									if (fo.multipleUseVariable) fo.multipleUseVariable = 0, fo.selectedThisManyTimesProp = 0;
									if (fo.isActive) fo.isActive = !1;
									fo.forcedActivated = !1;
									if (!e.dRowAddSufReq) {
										if ("undefined" !== typeof fo.requireds) {
											for (i = 0; i < fo.requireds.length; i++) {
												if ("id" == fo.requireds[i].type) {
													y = fo.requireds[i].reqId.split("/ON#");
													if (y.length > 1)
														zx = y[0].split("/D#"), fo.requireds[i].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
													else
														zx = y[0].split("/D#"), fo.requireds[i].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
												}
												else if ("or" == fo.requireds[i].type)
													for (c = 0; c < fo.requireds[i].orRequired.length; c++) {
														y = fo.requireds[i].orRequired[c].req.split("/ON#");
														if (y.length > 1)
															zx = y[0].split("/D#"), fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
														else
															zx = y[0].split("/D#"), fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
													}
												if ("undefined" !== typeof fo.requireds[i].requireds)
													for (j = 0; j < fo.requireds[i].requireds.length; j++) {
														if ("id" == fo.requireds[i].requireds[j].type) {
															y = fo.requireds[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = y[0].split("/D#"), fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = y[0].split("/D#"), fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.requireds[i].requireds[j].type)
															for (c = 0; c < fo.requireds[i].requireds[j].orRequired.length; c++) {
																y = fo.requireds[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = y[0].split("/D#"), fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = y[0].split("/D#"), fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
													}
											}
										}
										if ("undefined" !== typeof fo.scores)
											for (i = 0; i < fo.scores.length; i++)
												if ("undefined" !== fo.scores[i].requireds)
													for (j = 0; j < fo.scores[i].requireds.length; j++) {
														if ("id" == fo.scores[i].requireds[j].type) {
															y = fo.scores[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = y[0].split("/D#"), fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = y[0].split("/D#"), fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.scores[i].requireds[j].type)
															for (c = 0; c < fo.scores[i].requireds[j].orRequired.length; c++) {
																y = fo.scores[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = y[0].split("/D#"), fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = y[0].split("/D#"), fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
																
													}
										if ("undefined" !== typeof fo.addons)
											for (i = 0; i < fo.addons.length; i++)
												if ("undefined" !== fo.addons[i].requireds)
													for (j = 0; j < fo.addons[i].requireds.length; j++) {
														if ("id" == fo.addons[i].requireds[j].type) {
															y = fo.addons[i].requireds[j].reqId.split("/ON#");
															if (y.length > 1)
																zx = fo.addons[i].requireds[j].reqId.split("/D#"), fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
															else
																zx = fo.addons[i].requireds[j].reqId.split("/D#"), fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
														}
														else if ("or" == fo.addons[i].requireds[j].type)
															for (c = 0; c < fo.addons[i].requireds[j].orRequired.length; c++) {
																y = fo.addons[i].requireds[j].orRequired[c].req.split("/ON#");
																if (y.length > 1)
																	zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR) + "/ON#" + y[1];
																else
																	zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (zx.length > 1 ? (parseInt(zx[1]) + 1) : nR);
															}
													}
									}
									if (!e.dRowAddSufFunc) {
										if (fo.activateOtherChoice) {
											zz = "";
											for (y = fo.activateThisChoice.split(","), i = 0; i < y.length; i++) {
												zx = y[i].split("/ON#");
												if (zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + ",";
											}
											fo.activateThisChoice = zz.slice(0, -1);
										}
										if (fo.deactivateOtherChoice) {
											zz = "";
											for (y = fo.deactivateThisChoice.split(","), i = 0; i < y.length; i++) {
												zx = y[i].split("/ON#");
												if (zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : nR) + ",";
											}
											fo.deactivateThisChoice = zz.slice(0, -1);
										}
										if (fo.duplicateRow) {
											y = fo.duplicateRowId.split("/D#"), fo.duplicateRowId = y[0] + "/D#" + nR;
											y = fo.duplicateRowPlace.split("/D#"), fo.duplicateRowPlace = y[0] + "/D#" + nR;
										}
									}
								}
								break
							}
						}
						for (var m = nF; m < thisRow.length; m++) {
							this.app.compR[thisRow[m].id] = {rows: m, type: rowType};
							for (var n = 0; n < thisRow[m].objects.length; n++) {
								var d = thisRow[m].objects[n].id;
								this.app.comp[thisRow[m].objects[n].id] = {rows: m, objects: n, type: rowType};
							}
						}
					}
                }
            },
            rt = ot,
            at = (i("3b78"), Object(b["a"])(rt, l, c, !1, null, "4d803ed5", null)),
            nt = at.exports;
        v()(at, {
            VBtn: $["a"],
            VCol: S["a"],
            VRow: k["a"],
            VTooltip: y["a"]
        });
        var pt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-row", {
                    attrs: {
                        justify: "center"
                    }
                }, [i("v-dialog", {
                    attrs: {
                        "max-width": "700px"
                    },
                    on: {
                        "click:outside": t.cleanCurrentComponent
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [i("v-card", [i("v-card-title", {
                    staticClass: "headline"
                }, [t._v("Load/Save Project")]), i("v-card-text", [i("v-container", [i("v-row", [i("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [i("v-file-input", {
                    attrs: {
                        "hide-details": "",
                        label: "Load Project",
                        multiple: "",
                        placeholder: "Select your project",
                        "prepend-icon": "mdi-paperclip",
                        outlined: "",
                        "show-size": 1e3
                    },
                    on: {
                        change: t.uploadFile
                    },
                    scopedSlots: t._u([{
                        key: "selection",
                        fn: function(e) {
                            var s = e.index,
                                o = e.text;
                            return [s < 2 ? i("v-chip", {
                                attrs: {
                                    dark: "",
                                    label: "",
                                    small: ""
                                }
                            }, [t._v(t._s(o))]) : t._e()]
                        }
                    }]),
                    model: {
                        value: t.files,
                        callback: function(e) {
                            t.files = e
                        },
                        expression: "files"
                    }
                })], 1), i("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [i("v-btn", {
                    staticStyle: {
                        color: t.$vuetify.theme.isDark ? "white" : "black"
                    },
                    on: {
                        click: function(e) {
                            return t.saveFile("project")
                        }
                    }
                }, [t._v("Save Project")])], 1), i("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [t._v(" You can use the button below to save when you have finished your project, it will keep the images separated from the JSON. Do not overwrite your project, as the new JSON-file inside the zip this downloads will have no pictures if loaded into the Creator. Place the JSON into the app-file like normal, and the images-folder besides the other folders. If the project has a lot of images then they might end up not showing when someone loads on the page, if so then just use the normal way, and use Image Compression in features to reduce the size of the project file. "), i("v-btn", {
                    staticStyle: {
                        color: t.$vuetify.theme.isDark ? "white" : "black"
                    },
                    on: {
                        click: function(e) {
                            return t.saveFileFinished("project")
                        }
                    }
                }, [t._v("Download Finished Project with separate images")])], 1), i("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [i("v-btn", {
                    staticStyle: {
                        color: t.$vuetify.theme.isDark ? "white" : "black"
                    },
                    on: {
                        click: function(e) {
                            t.currentComponent = "appStats"
                        }
                    }
                }, [t._v("Project Stats")])], 1), i("br"), t._v("If you find the Interactive CYOA creator useful and want to support the developer, then please consider buying the desktop version of the web application here. "), i("iframe", {
                    attrs: {
                        frameborder: "0",
                        src: "https://itch.io/embed/610808?border_width=2&bg_color=f3f1f1&fg_color=222222&link_color=c36200&border_color=bcb6b6",
                        width: "700",
                        height: "169"
                    }
                }, [i("a", {
                    attrs: {
                        href: "https://meandelay.itch.io/interactive-cyoa-creator",
                        target: "_blank"
                    }
                }, [t._v("Interactive CYOA Creator by MeanDelay")])])], 1)], 1)], 1), i(t.currentComponent, {
                    tag: "component",
                    on: {
                        cleanCurrentComponent: function(e) {
                            t.currentComponent = e
                        }
                    }
                }), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        text: ""
                    },
                    on: {
                        click: t.cleanCurrentComponent
                    }
                }, [t._v("Close")])], 1)], 1)], 1)], 1)
            },
            lt = [],
            ct = (i("a15b"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-row", {
                    attrs: {
                        justify: "center"
                    }
                }, [i("v-dialog", {
                    attrs: {
                        "max-width": "800px"
                    },
                    on: {
                        "click:outside": t.cleanCurrentComponent
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [i("v-card", [i("v-card-title", {
                    staticClass: "headline"
                }, [t._v("Downloadable Version and Project Stats")]), i("v-card-text", [i("v-container", [i("v-row", {
                    staticStyle: {
                        "text-align": "center"
                    },
                    attrs: {
                        justify: "center"
                    }
                }, [i("v-col", {
                    staticClass: "pa-0"
                }, [i("v-col", [t._v(" Character Count: "), i("br"), t._v(" " + t._s(t.characterCount) + " Characters ")]), i("v-col", [t._v(" Choices Count: "), i("br"), t._v(" " + t._s(t.choicesCount) + " Choices ")]), i("v-col", [t._v(" Images Count: "), i("br"), t._v(" " + t._s(t.imagesCount) + " Images ")]), i("v-col", [t._v(" Rows Count: "), i("br"), t._v(" " + t._s(t.app.rows.length) + " Rows ")])], 1), i("v-col", {
                    staticClass: "pa-0"
                }, [i("v-col", [t._v(" Biggest Picture: "), i("br"), t._v(" " + t._s(t.biggestImage) + " ")]), i("v-col", [t._v(" Smallest Picture: "), i("br"), t._v(" " + t._s(t.smallestImage) + " ")]), i("v-col", [t._v(" Time Guesstimate: "), i("br"), t._v(" " + t._s(Math.floor(5 * t.imagesCount + t.characterCount / 175)) + " Minutes/ " + t._s(Math.floor((5 * t.imagesCount + t.characterCount / 175) / 60)) + " Hours "), i("br"), t._v("(175 Characters Per Minute, "), i("br"), t._v("5 Minutes Per Picture) ")])], 1)], 1)], 1)], 1), i("v-card-actions", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        text: ""
                    },
                    on: {
                        click: t.cleanCurrentComponent
                    }
                }, [t._v("Close")])], 1)], 1)], 1)], 1)
            }),
            ht = [],
            dt = {
                data: function() {
                    return {
                        files: [],
                        dialog: !0,
                        currentComponent: ""
                    }
                },
                components: {},
                computed: {
                    app: function() {
                        return this.$store.state.app
                    },
                    characterCount: function() {
                        for (var t = 0, e = 0; e < this.app.rows.length; e++) {
                            "undefined" !== typeof this.app.rows[e].titleText && (t += this.app.rows[e].titleText.length, t += this.app.rows[e].title.length);
                            for (var i = 0; i < this.app.rows[e].objects.length; i++)
                                if ("undefined" !== typeof this.app.rows[e].objects[i].text) {
                                    t += this.app.rows[e].objects[i].title.length, t += this.app.rows[e].objects[i].text.length;
                                    for (var s = 0; s < this.app.rows[e].objects[i].addons.length; s++) t += this.app.rows[e].objects[i].addons[s].title.length, t += this.app.rows[e].objects[i].addons[s].text.length
                                }
                        }
                        return t
                    },
                    imagesCount: function() {
                        for (var t = 0, e = 0; e < this.app.rows.length; e++) {
                            0 != this.app.rows[e].image.length && (t += 1);
                            for (var i = 0; i < this.app.rows[e].objects.length; i++) 0 != this.app.rows[e].objects[i].image.length && (t += 1)
                        }
                        return t
                    },
                    choicesCount: function() {
                        for (var t = 0, e = 0; e < this.app.rows.length; e++)
                            for (var i = 0; i < this.app.rows[e].objects.length; i++) t += 1;
                        return t
                    },
                    biggestImage: function() {
                        for (var t, e, i, s = 0, o = 0; o < this.app.rows.length; o++)
                            for (var r = 0; r < this.app.rows[o].objects.length; r++) 0 != this.app.rows[o].objects[r].image.length && (i = this.app.rows[o].objects[r].image.length - "data:image/png;base64,".length, e = 4 * Math.ceil(i / 3) * .5624896334383812, Math.floor(e / 1e3) > 400 && console.log(Math.floor(e / 1e3) + " KB, " + this.app.rows[o].objects[r].title), s < e && (s = e, t = this.app.rows[o].objects[r].title));
                        return Math.floor(s / 1e3) + " KB, " + t
                    },
                    smallestImage: function() {
                        for (var t, e, i, s = 0, o = 0; o < this.app.rows.length; o++)
                            for (var r = 0; r < this.app.rows[o].objects.length; r++) 0 != this.app.rows[o].objects[r].image.length && (i = this.app.rows[o].objects[r].image.length - "data:image/png;base64,".length, e = 4 * Math.ceil(i / 3) * .5624896334383812, (s > e || 0 == s) && (s = e, t = this.app.rows[o].objects[r].title));
                        return Math.floor(s / 1e3) + " KB, " + t
                    }
                },
                methods: {
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    }
                }
            },
            ut = dt,
            gt = Object(b["a"])(ut, ct, ht, !1, null, null, null),
            wt = gt.exports;
        v()(gt, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VCardTitle: W["c"],
            VCol: S["a"],
            VContainer: E["a"],
            VDialog: N["a"],
            VRow: k["a"],
            VSpacer: et["a"]
        });
        var ft = i("c4e3"),
            bt = i.n(ft),
            mt = i("21a6"),
            vt = i.n(mt),
            yt = {
                data: function() {
                    return {
                        files: [],
                        dialog: !0,
                        currentComponent: ""
                    }
                },
                components: {
                    appStats: wt
                },
                computed: {
                    app: function() {
                        return this.$store.state.app
                    }
                },
                methods: {
                    uploadFile: function() {
                        var t = this;
                        var e = new FileReader;
                        e.onload = function() {
                            t.$store.commit("loadApp", JSON.parse(e.result))
                        }, e.readAsText(this.files[0])
                    },
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    },
                    saveFile: function(t) {
                        var e = JSON.stringify(this.app),
                            i = new Blob([e], {
                                type: "text/plain"
                            }),
                            s = document.createEvent("MouseEvents"),
                            o = document.createElement("a");
                        o.download = t + ".json", o.href = window.URL.createObjectURL(i), o.dataset.downloadurl = ["text/json", o.download, o.href].join(":"), s.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.dispatchEvent(s)
                    },
                    saveFileFinished: function(t) {
						var e = new bt.a, i = JSON.parse(JSON.stringify(this.app)), s = "", m = "", ext = "";
						this.app.styling.backgroundImage && this.app.styling.backgroundImage.length > 30 && (m = this.getMime(this.app.styling.backgroundImage), ext = this.getExt(m), s = F()(this.app.styling.backgroundImage.split(",")[1], m), e.file("images/Bg." + ext, s, {
							binary: !0
						}), i.styling.backgroundImage = "images/Bg." + ext);
						this.app.styling.rowBackgroundImage && this.app.styling.rowBackgroundImage.length > 30 && (m = this.getMime(this.app.styling.rowBackgroundImage), ext = this.getExt(m), s = F()(this.app.styling.rowBackgroundImage.split(",")[1], m), e.file("images/RBg." + ext, s, {
							binary: !0
						}), i.styling.rowBackgroundImage = "images/RBg." + ext);
						this.app.styling.objectBackgroundImage && this.app.styling.objectBackgroundImage.length > 30 && (m = this.getMime(this.app.styling.objectBackgroundImage), ext = this.getExt(m), s = F()(this.app.styling.objectBackgroundImage.split(",")[1], m), e.file("images/OBg." + ext, s, {
							binary: !0
						}), i.styling.objectBackgroundImage = "images/OBg." + ext);
						this.app.styling.rowBorderImage && this.app.styling.rowBorderImage.length > 30 && (m = this.getMime(this.app.styling.rowBorderImage), ext = this.getExt(m), s = F()(this.app.styling.rowBorderImage.split(",")[1], m), e.file("images/RB." + ext, s, {
							binary: !0
						}), i.styling.rowBorderImage = "images/RB." + ext);
						this.app.styling.objectBorderImage && this.app.styling.objectBorderImage.length > 30 && (m = this.getMime(this.app.styling.objectBorderImage), ext = this.getExt(m), s = F()(this.app.styling.objectBorderImage.split(",")[1], m), e.file("images/OB." + ext, s, {
							binary: !0
						}), i.styling.objectBorderImage = "images/OB." + ext);
                        for (o = 0; o < this.app.rows.length; o++) {
							this.app.rows[o].styling && this.app.rows[o].styling.rowBackgroundImage && this.app.rows[o].styling.rowBackgroundImage.length > 30 && (m = this.getMime(this.app.rows[o].styling.rowBackgroundImage), ext = this.getExt(m), i = F()(this.app.rows[o].styling.rowBackgroundImage.split(",")[1], m), e.file("images/R" + (s + 1) + "_RBg." + ext, s, {
                                binary: !0
                            }), i.rows[o].styling.rowBackgroundImage = "images/R" + (s + 1) + "_RBg." + ext);
							this.app.rows[o].styling && this.app.rows[o].styling.objectBackgroundImage && this.app.rows[o].styling.objectBackgroundImage.length > 30 && (m = this.getMime(this.app.rows[o].styling.objectBackgroundImage), ext = this.getExt(m), i = F()(this.app.rows[o].styling.objectBackgroundImage.split(",")[1], m), e.file("images/R" + (s + 1) + "_OBg." + ext, s, {
                                binary: !0
                            }), i.rows[o].styling.objectBackgroundImage = "images/R" + (s + 1) + "_OBg." + ext);
							this.app.rows[o].styling && this.app.rows[o].styling.rowBorderImage && this.app.rows[o].styling.rowBorderImage.length > 30 && (m = this.getMime(this.app.rows[o].styling.rowBorderImage), ext = this.getExt(m), i = F()(this.app.rows[o].styling.rowBorderImage.split(",")[1], m), e.file("images/R" + (s + 1) + "_RB." + ext, s, {
                                binary: !0
                            }), i.rows[o].styling.rowBorderImage = "images/R" + (s + 1) + "_RB." + ext);
							this.app.rows[o].styling && this.app.rows[o].styling.objectBorderImage && this.app.rows[o].styling.objectBorderImage.length > 30 && (m = this.getMime(this.app.rows[o].styling.objectBorderImage), ext = this.getExt(m), i = F()(this.app.rows[o].styling.objectBorderImage.split(",")[1], m), e.file("images/R" + (s + 1) + "_OB." + ext, s, {
                                binary: !0
                            }), i.rows[o].styling.objectBorderImage = "images/R" + (s + 1) + "_OB." + ext);
                            this.app.rows[o].image.length > 30 && (m = this.getMime(this.app.rows[o].image), ext = this.getExt(m), i = F()(this.app.rows[o].image.split(",")[1], m), e.file("images/R" + (s + 1) + "." + ext, s, {
                                binary: !0
                            }), i.rows[o].image = "images/R" + (s + 1) + "." + ext);
                            for (var r = 0; r < this.app.rows[o].objects.length; r++) {
								this.app.rows[o].objects[r].styling && this.app.rows[o].objects[r].styling.objectBackgroundImage && this.app.rows[o].objects[r].styling.objectBackgroundImage.length > 30 && (m = this.getMime(this.app.rows[o].objects[r].styling.objectBackgroundImage), ext = this.getExt(m), i = F()(this.app.rows[o].objects[r].styling.objectBackgroundImage.split(",")[1], m), e.file("images/R" + (s + 1) + "C" + (r + 1) + "_OBg." + ext, s, {
                                    binary: !0
                                }), i.rows[o].objects[r].styling.objectBackgroundImage = "images/R" + (s + 1) + "C" + (r + 1) + "_OBg." + ext);
								this.app.rows[o].objects[r].styling && this.app.rows[o].objects[r].styling.objectBorderImage && this.app.rows[o].objects[r].styling.objectBorderImage.length > 30 && (m = this.getMime(this.app.rows[o].objects[r].styling.objectBorderImage), ext = this.getExt(m), i = F()(this.app.rows[o].objects[r].styling.objectBorderImage.split(",")[1], m), e.file("images/R" + (s + 1) + "C" + (r + 1) + "_OB." + ext, s, {
                                    binary: !0
                                }), i.rows[o].objects[r].styling.objectBorderImage = "images/R" + (s + 1) + "C" + (r + 1) + "_OB." + ext);
                                this.app.rows[o].objects[r].image.length > 30 && (m = this.getMime(this.app.rows[o].objects[r].image), ext = this.getExt(m), i = F()(this.app.rows[o].objects[r].image.split(",")[1], m), e.file("images/R" + (s + 1) + "C" + (r + 1) + "." + ext, s, {
                                    binary: !0
                                }), i.rows[o].objects[r].image = "images/R" + (s + 1) + "C" + (r + 1) + "." + ext);
                                for (var a = 0; a < this.app.rows[o].objects[r].addons.length; a++) this.app.rows[o].objects[r].addons[a].image.length > 30 && (m = this.getMime(this.app.rows[o].objects[r].addons[a].image), ext = this.getExt(m), i = F()(this.app.rows[o].objects[r].addons[a].image.split(",")[1], m), e.file("images/R" + (s + 1) + "C" + (r + 1) + "A" + (a + 1) + "." + ext, s, {
                                    binary: !0
                                }), i.rows[o].objects[r].addons[a].image = "images/R" + (s + 1) + "C" + (r + 1) + "A" + (a + 1) + "." + ext)
                            }
                        }				
						for (o = 0; o < this.app.backpack.length; o++) {
							this.app.backpack[o].image.length > 30 && (m = this.getMime(this.app.backpack[o].image), ext = this.getExt(m), i = F()(this.app.backpack[o].image.split(",")[1], m), e.file("images/BR" + (s + 1) + "." + ext, s, {
                                binary: !0
                            }), i.backpack[o].image = "images/BR" + (s + 1) + "." + ext);
							this.app.backpack[o].styling && this.app.backpack[o].styling.rowBackgroundImage && this.app.backpack[o].styling.rowBackgroundImage.length > 30 && (m = this.getMime(this.app.backpack[o].styling.rowBackgroundImage), ext = this.getExt(m), i = F()(this.app.backpack[o].styling.rowBackgroundImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "_RBg." + ext, s, {
                                binary: !0
                            }), i.backpack[o].styling.rowBackgroundImage = "images/BR" + (s + 1) + "_RBg." + ext);
							this.app.backpack[o].styling && this.app.backpack[o].styling.objectBackgroundImage && this.app.backpack[o].styling.objectBackgroundImage.length > 30 && (m = this.getMime(this.app.backpack[o].styling.objectBackgroundImage), ext = this.getExt(m), i = F()(this.app.backpack[o].styling.objectBackgroundImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "_OBg." + ext, s, {
                                binary: !0
                            }), i.backpack[o].styling.objectBackgroundImage = "images/BR" + (s + 1) + "_OBg." + ext);
							this.app.backpack[o].styling && this.app.backpack[o].styling.rowBorderImage && this.app.backpack[o].styling.rowBorderImage.length > 30 && (m = this.getMime(this.app.backpack[o].styling.rowBorderImage), ext = this.getExt(m), i = F()(this.app.backpack[o].styling.rowBorderImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "_RB." + ext, s, {
                                binary: !0
                            }), i.backpack[o].styling.rowBorderImage = "images/BR" + (s + 1) + "_RB." + ext);
							this.app.backpack[o].styling && this.app.backpack[o].styling.objectBorderImage && this.app.backpack[o].styling.objectBorderImage.length > 30 && (m = this.getMime(this.app.backpack[o].styling.objectBorderImage), ext = this.getExt(m), i = F()(this.app.backpack[o].styling.objectBorderImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "_OB." + ext, s, {
                                binary: !0
                            }), i.backpack[o].styling.objectBorderImage = "images/BR" + (s + 1) + "_OB." + ext);
							for (var r = 0; r < this.app.backpack[o].objects.length; r++) {
								this.app.backpack[o].objects[r].styling && this.app.backpack[o].objects[r].styling.objectBackgroundImage && this.app.backpack[o].objects[r].styling.objectBackgroundImage.length > 30 && (m = this.getMime(this.app.backpack[o].objects[r].styling.objectBackgroundImage), ext = this.getExt(m), i = F()(this.app.backpack[o].objects[r].styling.objectBackgroundImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "C" + (r + 1) + "_OBg." + ext, s, {
                                    binary: !0
                                }), i.backpack[o].objects[r].styling.objectBackgroundImage = "images/BR" + (s + 1) + "C" + (r + 1) + "_OBg." + ext);
								this.app.backpack[o].objects[r].styling && this.app.backpack[o].objects[r].styling.objectBorderImage && this.app.backpack[o].objects[r].styling.objectBorderImage.length > 30 && (m = this.getMime(this.app.backpack[o].objects[r].styling.objectBorderImage), ext = this.getExt(m), i = F()(this.app.backpack[o].objects[r].styling.objectBorderImage.split(",")[1], m), e.file("images/BR" + (s + 1) + "C" + (r + 1) + "_OB." + ext, s, {
                                    binary: !0
                                }), i.backpack[o].objects[r].styling.objectBorderImage = "images/BR" + (s + 1) + "C" + (r + 1) + "_OB." + ext);
                                this.app.backpack[o].objects[r].image.length > 30 && (m = this.getMime(this.app.backpack[o].objects[r].image), ext = this.getExt(m), i = F()(this.app.backpack[o].objects[r].image.split(",")[1], m), e.file("images/BR" + (s + 1) + "C" + (r + 1) + "." + ext, s, {
                                    binary: !0
                                }), i.backpack[o].objects[r].image = "images/BR" + (s + 1) + "C" + (r + 1) + "." + ext);
                                for (var a = 0; a < this.app.backpack[o].objects[r].addons.length; a++) this.app.backpack[o].objects[r].addons[a].image.length > 30 && (m = this.getMime(this.app.backpack[o].objects[r].addons[a].image), ext = this.getExt(m), i = F()(this.app.backpack[o].objects[r].addons[a].image.split(",")[1], "image/" + ext), e.file("images/R" + (s + 1) + "C" + (r + 1) + "A" + (a + 1) + "." + ext, s, {
                                    binary: !0
                                }), i.backpack[o].objects[r].addons[a].image = "images/BR" + (s + 1) + "C" + (r + 1) + "A" + (a + 1) + "." + ext)
							}
						}
                        var n = JSON.stringify(i),
                            p = new Blob([n], {
                                type: "text/plain"
                            });
                        e.file(t + ".json", p), e.generateAsync({
                            type: "blob"
                        }).then((function(t) {
                            vt.a.saveAs(t, "CYOA.zip")
                        }))
                    }
                }
            },
            jt = yt,
            Tt = i("cc20"),
            Ct = i("23a7"),
            xt = Object(b["a"])(jt, pt, lt, !1, null, null, null),
            It = xt.exports;
        v()(xt, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VCardTitle: W["c"],
            VChip: Tt["a"],
            VCol: S["a"],
            VContainer: E["a"],
            VDialog: N["a"],
            VFileInput: Ct["a"],
            VRow: k["a"],
            VSpacer: et["a"]
        });
        var Ot = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-dialog", {
                    attrs: {
                        "max-width": "1920px"
                    },
                    on: {
                        "click:outside": t.cleanCurrentComponent
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [i("v-card", {
                    style: t.background
                }, [i("v-card-text", [i("v-container", [i("v-row", [i("v-textarea", {
                    staticClass: "pa-1",
                    attrs: {
                        "hide-details": "",
                        "background-color": t.$vuetify.theme.dark ? "grey" : "white",
                        filled: "",
                        label: "Current Activated Choices Titles"
                    },
                    model: {
                        value: t.getSelectedObjectName,
                        callback: function(e) {
                            t.getSelectedObjectName = e
                        },
                        expression: "getSelectedObjectName"
                    }
                }), i("v-textarea", {
                    staticClass: "pa-1",
                    attrs: {
                        "hide-details": "",
                        "background-color": t.$vuetify.theme.dark ? "grey" : "white",
                        filled: "",
                        label: "Current Activated Choices ID's"
                    },
                    model: {
                        value: t.activated,
                        callback: function(e) {
                            t.activated = e
                        },
                        expression: "activated"
                    }
                })], 1), i("v-textarea", {
                    attrs: {
                        "hide-details": "",
                        "background-color": t.$vuetify.theme.dark ? "grey" : "white",
                        filled: "",
                        label: "Area To Import Activated Choices With Lists Of Id's"
                    },
                    model: {
                        value: t.newActivated,
                        callback: function(e) {
                            t.newActivated = e
                        },
                        expression: "newActivated"
                    }
                }), i("v-btn", {
                    on: {
                        click: t.cleanActivated
                    }
                }, [t._v("Import Choices/Clean if empty")])], 1)], 1), i("v-card-actions", [i("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        text: ""
                    },
                    on: {
                        click: t.cleanCurrentComponent
                    }
                }, [t._v("Close")])], 1)], 1)], 1)
            },
            St = [],
            kt = {
                props: {
                    chapter: Object,
                    page: Object,
                    type: String
                },
                data: function() {
                    return {
                        dialog: !0,
                        newActivated: "",
						scoreUpdate: "",
						exceptedScores: []
                    }
                },
                computed: {
                    background: function() {
                        return this.app.styling.backgroundImage ? 'background-image: url("' + this.app.styling.backgroundImage + '");background-color: ' + this.app.styling.backgroundColor + (this.app.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : (this.app.styling.isBackgroundStretch ? ";background-size: 100% 100%;" : ";background-size: cover;")) : 'background-color: ' + this.app.styling.backgroundColor + ';'
                    },
                    activated: function() {
						for (var e = [], t = 0; t < this.app.activated.length; t++) {
							if ("undefined" !== typeof this.app.comp[this.app.activated[t].split("/ON#")[0]]) {
								var co = this.app.comp[this.app.activated[t].split("/ON#")[0]],
									coR = this.app.rows[co.rows],
									coO = coR.objects[co.objects],
									a = coO.id;
								if (!coO.isSelectableMultiple) {
									if (coO.isActivateRandom && coO.activatedRandom.length > 0) {
										a += "/RND#" + coO.activatedRandom.join("/AND#").replaceAll("/ON#", "/RON#");
									}
									if (coO.textfieldIsOn && coO.customTextfieldIsOn) {
										a += "/WORD#" + coO.wordChangeSelect.replaceAll(",", "/CHAR#");
									}
									if (coO.isImageUpload && coO.image !== coO.defaultImage) {
										a += "/IMG#" + coO.image.replaceAll(",", "/CHAR#");
									}
									e.push(a);
								} else if (coO.isMultipleUseVariable && coO.multipleUseVariable !== 0) {
									a += "/ON#" + coO.multipleUseVariable;
									if (coO.isActivateRandom && coO.activatedRandomMul.length > 0) {
										a += "/RND#" + coO.activatedRandomMul.flat(2).join("/AND#").replaceAll("/ON#", "/RON#");
									}
									e.push(a);
								}
							}
						}
                        return e
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    sactivated: function() {
                        return this.$store.state.app.activated
                    },
                    rows: function() {
                        return this.$store.state.app.rows
                    },
                    getSelectedObjectName: function() {
						for (var e = [], t = 0; t < this.app.activated.length; t++) {
							if ("undefined" !== typeof this.app.comp[this.app.activated[t].split("/ON#")[0]]) {
								var co = this.app.comp[this.app.activated[t].split("/ON#")[0]],
									coR = this.app.rows[co.rows],
									coO = coR.objects[co.objects];
								e.push((e.length > 0 ? " " : "") + coO.title + (coO.isSelectableMultiple && coO.isMultipleUseVariable ? "(Taken " + coO.multipleUseVariable + " Times)": "" ));
							}
						}
                        return e
                    }
                },
                methods: {
					playBgm: function(e, t, i) {
						if ("undefined" !== typeof bgmPlayer.playerInfo.videoData) {
							var p = this.app.bgmIsPlaying,
								s = bgmPlayer.playerInfo.videoData.video_id,
								o = bgmPlayer.playerInfo.playerState;
							if ("undefined" === typeof this.app.bgmObjectId) this.$set(this.app, "bgmObjectId", e.id);
							if (s == t) {
								if (this.app.bgmObjectId == e.id) {
									if (p) {
										if (o == 2) bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
										else bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o != 2) bgmPlayer.pauseVideo();
									}
								} else {
									if (p) {
										bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o == 1) bgmPlayer.pauseVideo();
									}
								}
							} else {
								if (p) {
									e.bgmNoLoop ? (bgmPlayer.loadVideoById(t), bgmPlayer.setLoop(!1)) : (bgmPlayer.loadPlaylist(t), bgmPlayer.setLoop(!0));
									bgmPlayer.playVideo();
									this.$set(this.app, "bgmObjectId", e.id);
								}
							}
						} else {
							if (i < 10) {
								i++;
								setTimeout(() => {
									this.playBgm(e, t, i);
								}, 200);
							}
						}
					},
                    updateScores: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															var nC = 0;
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) this.app.pointTypes[m].startingSum += coSDiscount;
															} else {
																this.app.pointTypes[m].startingSum += coSDiscount;
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.app.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.app.activated.splice(nH, 1);
											t.currentChoices -= 1;
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											this.app.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											var bE = this.checkRequireds(coS);
											if (bC !== bE) {
												var nC = 0;
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}																	
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScores(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					updateScoresMulC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + parseInt(e.multipleUseVariable + 1) : e.id;
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.app.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											var bE = !1;
											if (e.id == this.exceptedScores[0]) {
												var fI = this.app.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.app.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bE = this.checkRequireds(coS);
													this.app.activated.splice(this.app.activated.length - 1, 1), t.currentChoices -= 1;
												} else {
													var aFI = this.app.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.app.activated.splice(fI, 1), t.currentChoices -= 1);
													bE = this.checkRequireds(coS);
													parseInt(aFI[1]) > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.app.activated.splice(fI, 0, eid), t.currentChoices += 1);
												}
											} else {
												var nH = this.app.activated.indexOf(eid);
												this.app.activated.splice(nH, 1);
												t.currentChoices -= 1;
												var bE = this.checkRequireds(coS);
												this.app.activated.splice(nH, 0, eid);
												t.currentChoices += 1;
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					updateScoresMulS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.app.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											if (e.id == this.exceptedScores[0]) {
												var fI = this.app.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.app.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													this.app.activated.splice(this.app.activated.length - 1, 1), t.currentChoices -= 1;
													bE = this.checkRequireds(coS);
												} else {
													var aFI = this.app.activated[fI].split("/ON#");
													aFI[1] > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.app.activated.splice(fI, 1), t.currentChoices -= 1);
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													aFI[1] > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.app.activated.splice(fI, 0, eid), t.currentChoices += 1);
													bE = this.checkRequireds(coS);
												}
											} else {
												this.app.activated.splice(nR, 1);
												t.currentChoices -= 1;
												bC = this.checkRequireds(coS);
												for (var a = 0; a < o.length; a++) {
													for (var n = 0; n < this.app.pointTypes.length; n++) {
														this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
													}
												}
												this.app.activated.splice(nR, 0, eid);
												t.currentChoices += 1;
												bE = this.checkRequireds(coS);
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					activateObjectI: function(e) {
						var eID = e.split("/IMG#"),
							eImage = eID.length > 1 ? eID[1] : "";
						eID = eID[0].split("/WORD#");
						var eWord = eID.length > 1 ? eID[1].replaceAll("/CHAR#", ",") : "";
						eID = eID[0].split("/RND#");
						var eRand = eID.length > 1 ? eID[1].split("/AND#") : "";
						eID = eID[0];
						if ("undefined" !== typeof this.app.comp[eID]) {
							var co = this.app.comp[eID],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							var tmpScores = [];
							if (coO.discountOther) {
								if ("undefined" !== typeof coO.discountOperator && "undefined" !== typeof coO.discountValue && "undefined" !== typeof coO.discountGroups)
									for (var c = 0; c < this.app.groups.length; c++)
										for (var d = 0; d < this.app.groups[c].elements.length; d++)
											if ("undefined" !== typeof this.app.comp[this.app.groups[c].elements[d].id]) {
												var coT = this.app.comp[this.app.groups[c].elements[d].id],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												for (var f = 0; f < coTO.scores.length; f++) {
													var coTS = coTO.scores[f];															
													if (coO.discountPointTypes.length === 0 || coO.discountPointTypes.includes(coTS.id)) {
														if (!coTS.isNotDiscountable && !coTS.discountIsOn) {
															if (1 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) - parseInt(coO.discountValue);
															else if (2 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) + parseInt(coO.discountValue);
															else if (3 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) * coO.discountValue;
															else if (4 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) / coO.discountValue;
															if (coO.discountLowLimitIsOn && "undefined" !== typeof coO.discountLowLimit) coTS.discountScore = coTS.discountScore < coO.discountLowLimit ? parseInt(coO.discountLowLimit) : coTS.discountScore;
															if (coO.discountShow) this.$set(coTS, "discountShow", coO.discountShow), this.$set(coTS, "discountBeforeText", coO.discountBeforeText), this.$set(coTS, "discountAfterText", coO.discountAfterText);
															this.$set(coTS, "discountIsOn", true);
															this.$set(coTS, "discountedFrom", coO.id);
														}
													}
												}
											}
							}
							for (var h = 0; h < coO.scores.length; h++) {
								var coS = coO.scores[h];
								for (var j = 0; j < this.app.pointTypes.length; j++) {
									if (this.app.pointTypes[j].id == coS.id) {
										this.checkRequireds(coS) && !coS.isActive && (this.app.pointTypes[j].startingSum -= (coS.discountIsOn ? coS.discountScore : parseInt(coS.value)), coS.isActive = !0, tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore : parseInt(coS.value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum));
									}
								}
							}
							this.app.activated.push(eID), coO.isActive = !0, coR.currentChoices += 1;
							if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice) {
								if (coO.isActivateRandom && "undefined" !== typeof coO.isActivateRandom) {
									if (eRand == "") {
										var y = coO.activateThisChoice.split(","),
											RD = y.slice(),
											rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
											nAR = parseInt(coO.numActivateRandom) > rd.length ? rd.length : parseInt(coO.numActivateRandom);
										this.$set(coO, 'activatedRandom', []);
										var rdS = new Set();
										for (var v = 0; v < rd.length; v++) {
											if ("undefined" !== typeof this.app.comp[rd[v]]) {
												var coT = this.app.comp[rd[v]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!this.checkRequireds(coTO)) {
													var rdV = rd[v];
													rd.splice(v, 1), rd.push(rdV);
												}
											}
										}
										for (var v = rd.length - 1; v >= 0; v--) rdS.add(rd[v]);
										rd = [...rdS].reverse();
										coO.activatedRandom = rd.slice(0, nAR);
										for (var v = 0; v < nAR; v++) {
											var aRM = coO.activatedRandom[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aRM[0]]) {
												var coT = this.app.comp[aRM[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
									} else {
										var rd = eRand.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/RON#")[0]));
										this.$set(coO, "activatedRandom", rd);
										for (var v = 0; v < rd.length; v++) {
											var aRM = coO.activatedRandom[v].split("/RON#");
											if ("undefined" !== typeof this.app.comp[aRM[0]]) {
												var coT = this.app.comp[aRM[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
									}
								} else {
									var y = coO.activateThisChoice.split(",");
									var RD = y.slice(),
										rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
										nrd = RD.filter(item => !this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
									for (var v = 0; v < rd.length; v++) {
										var rdV = rd[v].split("/ON#");
										if ("undefined" !== typeof this.app.comp[rdV[0]]) {
											var coT = this.app.comp[rdV[0]],
												coTR = this.app.rows[coT.rows],
												coTO = coTR.objects[coT.objects];
											if (!coTO.isAllowDeselect) {
												if (coTO.isMultipleUseVariable) {
													if (coO.isMultipleUseVariable) {
														for (var E = 0; E < Math.abs(coO.multipleUseVariable); E++) {
															for (var ee = rd[v].split("/ON#")[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
													} else {
														for (var ee = rdV[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
												}
												coTO.forcedActivated = !0;
											}
										}
									}
									for (var v = 0; v < nrd.length; v++) {
										var nrdV = nrd[v].split("/ON#");
										if ("undefined" !== typeof this.app.comp[nrdV[0]]) {
											var coT = this.app.comp[nrdV[0]],
												coTR = this.app.rows[coT.rows],
												coTO = coTR.objects[coT.objects];
											if (coTO.isSelectableMultiple) {
												if ("undefined" === typeof coO.cancelForcedActivated) this.$set(coO, "cancelForcedActivated", []);
												coO.cancelForcedActivated.push(coTO.id + "/ON#" + nrdV[1]);
											}
										}
									}
								}
							}
							if (coO.multiplyPointtypeIsOn) {
								coO.multiplyPointtypeIsOnCheck = !0;
								if ("object" !== typeof coO.startingSumAtMultiply) this.$set(coO, "startingSumAtMultiply", []);
								for (var l = 0; l < coO.pointTypeToMultiply.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++)
										if (this.app.pointTypes[m].id == coO.pointTypeToMultiply[l]) {
											if (coO.multiplyPointtypeIsId)
												for (var x = 0; x < this.app.pointTypes.length; x++) {
													if (this.app.pointTypes[x].id == coO.multiplyWithThis) {
														coO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum;
														this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum;
													}
												}
											else coO.startingSumAtMultiply[l] = this.app.pointTypes[m].startingSum * coO.multiplyWithThis, this.app.pointTypes[m].startingSum *= coO.multiplyWithThis; this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
										}
								}
								this.app.mdObjects.push(coO);
							}
							if (coO.dividePointtypeIsOn) {
								coO.dividePointtypeIsOnCheck = !0;
								if ("object" !== typeof coO.startingSumAtDivide) this.$set(coO, "startingSumAtDivide", []);
								for (var l = 0; l < coO.pointTypeToDivide.length; l++) {
									for (var m = 0; m < this.app.pointTypes.length; m++) {
										if (this.app.pointTypes[m].id == coO.pointTypeToDivide[l]) {
											coO.startingSumAtDivide[l] = this.app.pointTypes[m].startingSum / coO.divideWithThis;
											this.app.pointTypes[m].startingSum /= coO.divideWithThis;
											this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
										}
									}
								}
								this.app.mdObjects.push(coO);
							}
							if (coO.addToAllowChoice)
								for (var m = 0; m < this.app.rows.length; m++)
									if (coO.idOfAllowChoice == this.app.rows[m].id) {
										this.app.rows[m].allowedChoices += coO.numbAddToAllowChoice, isNaN(this.app.rows[m].allowedChoicesChange) && (this.app.rows[m].allowedChoicesChange = 0), this.app.rows[m].allowedChoicesChange += coO.numbAddToAllowChoice;
									}
							this.updateScores(coO, coR, tmpScores, 0);
							if (coO.changeBackground) {
								if (coO.changeBgImage) {
									var a = this.app.styling.backgroundImage;
									this.$set(this.app.styling, "backgroundImage", coO.bgImage);
									this.$set(coO, "bgImage", a);
								} else {
									var a = this.app.styling.backgroundColor;
									this.$set(this.app.styling, "backgroundColor", coO.changedBgColorCode);
									this.$set(coO, "changedBgColorCode", a);
								}
							}
							if (coO.changePointBar) {
								if (coO.changeBarBgColorIsOn) {
									var a = this.app.styling.barBackgroundColor;
									this.$set(this.app.styling, "barBackgroundColor", coO.changedBarBgColor);
									this.$set(coO, "changedBarBgColor", a);
								}
								if (coO.changeBarTextColorIsOn) {
									var a = this.app.styling.barTextColor;
									this.$set(this.app.styling, "barTextColor", coO.changedBarTextColor);
									this.$set(coO, "changedBarTextColor", a);
								}
								if (coO.changeBarBgColorIsOn) {
									var a = this.app.styling.barIconColor;
									this.$set(this.app.styling, "barIconColor", coO.changedBarIconColor);
									this.$set(coO, "changedBarIconColor", a);
								}
							}
							if (coO.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
								if (coO.bgmId) {
									if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
									this.app.bgmIsPlaying = !0;
									this.playBgm(coO, coO.bgmId, 0);
								}
							}
							if (coO.muteBgm && "undefined" !== typeof bgmPlayer) {
								if ("undefined" !== typeof bgmPlayer.mute) {
									bgmPlayer.mute();
								}
							}
							if (coO.isImageUpload) {
								coO.defaultImage = "undefined" === typeof coO.image ? "" : coO.image;
								coO.image = eImage.replaceAll("/CHAR#", ",");
							}
							if (coO.textfieldIsOn)
								for (var m = 0; m < this.app.words.length; m++) this.app.words[m].id == coO.idOfTheTextfieldWord && (coO.customTextfieldIsOn ? (this.app.words[m].replaceText = eWord, coO.wordChangeSelect = eWord) : this.app.words[m].replaceText = coO.wordChangeSelect), this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
						}
					},
					selectedOneMoreI: function(e) {
						var eID = e.split("/RND#"),
							eRand = eID.length > 1 ? eID[1].split("/AND#") : "";
						eID = eID[0];
						if ("undefined" !== typeof this.app.comp[eID]) {
							var s = !0;
							var co = this.app.comp[eID],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							coO.multipleUseVariable = "undefined" === typeof coO.multipleUseVariable ? 0 : coO.multipleUseVariable;
							coO.numMultipleTimesPluss > coO.multipleUseVariable ? (coO.multipleUseVariable++, this.$set(coO, "selectedThisManyTimesProp", coO.multipleUseVariable), this.$set(this.app.objectMap, coO.id, coO.multipleUseVariable)) : s = !1;
							if (s) {
								var tmpScores = [];
								for (var h = 0; h < coO.scores.length; h++) {
									var coS = coO.scores[h],
										k = coO.multipleUseVariable;
									for (var j = 0; j < this.app.pointTypes.length; j++) {
										if (this.app.pointTypes[j].id == coS.id) {
											var tmpValue = coS.multiplyByTimes ? k : 1;
											if ("undefined" === typeof coS.isActiveMul) this.$set(coS, "isActiveMul", []);
											if (this.checkRequireds(coS) && !coS.isActiveMul[k - 1]) {
												this.app.pointTypes[j].startingSum -= (coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue);
												coS.isActiveMul[k - 1] = !0;
												tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue});
												this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum);
											}
										}
									}
								}
								if (coO.isActive == !1) {
									coO.isActive = !0, coR.currentChoices += 1, this.app.activated.push(coO.id + "/ON#" + coO.multipleUseVariable);
									if (coO.backpackBtnRequirement) {
										if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
										this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
									}
									if (coO.changeBackground) {
										if (coO.changeBgImage) {
											var a = this.app.styling.backgroundImage;
											this.$set(this.app.styling, "backgroundImage", coO.bgImage);
											this.$set(coO, "bgImage", a);
										} else {
											var a = this.app.styling.backgroundColor;
											this.$set(this.app.styling, "backgroundColor", coO.changedBgColorCode);
											this.$set(coO, "changedBgColorCode", a);
										}
									}
									if (coO.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
										if (coO.bgmId) {
											if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
											this.app.bgmIsPlaying = !0;
											this.playBgm(coO, coO.bgmId, 0);
										}
									}
								} else {
									this.$set(this.app.activated, this.app.activated.indexOf(coO.id + "/ON#" + (coO.multipleUseVariable - 1)), (coO.id + "/ON#" + coO.multipleUseVariable));
								}
								if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice) {
									if (coO.isActivateRandom && "undefined" !== typeof coO.isActivateRandom) {
										if (eRand == "") {
											if (coO.multipleUseVariable == 1) {
												var y = coO.activateThisChoice.split(",");
												var RD = y.slice(),
													rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
												var rdS = new Set();
												for (var v = 0; v < rd.length; v++) {
													if ("undefined" !== typeof this.app.comp[rd[v]]) {
														var coT = this.app.comp[rd[v]],
															coTR = this.app.rows[coT.rows],
															coTO = coTR.objects[coT.objects];
														if (!this.checkRequireds(coTO)) {
															var rdV = rd[v];
															rd.splice(v, 1), rd.push(rdV);
														}
													}
												}
												for (var v = rd.length - 1; v >= 0; v--) rdS.add(rd[v]);
												rd = [...rdS].reverse();
												if ("undefined" === typeof coO.activatedRandomMul) this.$set(coO, "activatedRandomMul", []);
												var preNAR = 0,
													nAR = [];
												for (var v = 0; v < parseInt(coO.numActivateRandom); v++) {
													nAR[v] = rd.length / (parseInt(coO.numActivateRandom) * (v + 1)) < 1 ? rd.length % (parseInt(coO.numActivateRandom) * (v + 1)) : parseInt(coO.numActivateRandom);
													coO.activatedRandomMul.push(rd.slice(preNAR, nAR[v] + preNAR));
													for (var f = 0; f < nAR[v] - preNAR; f++) {
														var aRM = coO.activatedRandomMul[v][f].split("/ON#");
														if ("undefined" !== typeof this.app.comp[aRM[0]]) {
															var coT = this.app.comp[aRM[0]],
																coTR = this.app.rows[coT.rows],
																coTO = coTR.objects[coT.objects];
															if (!coTO.isAllowDeselect) {
																if (coTO.isMultipleUseVariable) {
																	for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
																		if (ee > 0) {
																			coTO.numMultipleTimesMinus++;
																		} else if (ee < 0) {
																			coTO.numMultipleTimesMinus--;
																		}
																	}
																}
																coTO.forcedActivated = !0;
															}
														}
													}
													preNAR += nAR[v];
												}
											}
										} else {
											if ("undefined" === typeof coO.activatedRandomMul) this.$set(coO, "activatedRandomMul", []);
											var nR = (coO.multipleUseVariable - 1) * coO.numActivateRandom,
												rd = eRand.splice(nR, nR + coO.numActivateRandom);
											coO.activatedRandomMul.push(rd);
											for (var v = 0; v < coO.activatedRandomMul[coO.multipleUseVariable - 1].length; v++) {
												var aRM = coO.activatedRandomMul[coO.multipleUseVariable - 1][v].split("/RON#");
												if ("undefined" !== typeof this.app.comp[aRM[0]]) {
													var coT = this.app.comp[aRM[0]],
														coTR = this.app.rows[coT.rows],
														coTO = coTR.objects[coT.objects];
													if (!coTO.isAllowDeselect && this.newActivatedList.some(item => item.split("/ON#")[0] == coTO.id)) {
														if (coTO.isMultipleUseVariable) {
															for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
														coTO.forcedActivated = !0;
													}
												}
											}
										}
									} else {
										var y = coO.activateThisChoice.split(",");
										var RD = y.slice(),
											rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
											nrd = RD.filter(item => !this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
										for (var v = 0; v < rd.length; v++) {
											var rdV = rd[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[rdV[0]]) {
												var coT = this.app.comp[rdV[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														if (coO.isMultipleUseVariable) {
															for (var E = 0; E < Math.abs(coO.multipleUseVariable); E++) {
																for (var ee = rd[v].split("/ON#")[1], x = 0; x < Math.abs(ee); x++) {
																	if (ee > 0) {
																		coTO.numMultipleTimesMinus++;
																	} else if (ee < 0) {
																		coTO.numMultipleTimesMinus--;
																	}
																}
															}
														} else {
															for (var ee = rdV[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
										for (var v = 0; v < nrd.length; v++) {
											var nrdV = nrd[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[nrdV[0]]) {
												var coT = this.app.comp[nrdV[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (coTO.isSelectableMultiple) {
													if ("undefined" === typeof coO.cancelForcedActivated) this.$set(coO, "cancelForcedActivated", []);
													coO.cancelForcedActivated.push(coTO.id + "/ON#" + nrdV[1]);
												}
											}
										}
									}
								}
								this.updateScoresMulS(coO, coR, tmpScores, 0);
								if (coO.addToAllowChoice) {
									if ("undefined" !== typeof this.app.compR[coO.idOfAllowChoice]) {
										var coT = this.app.compR[coO.idOfAllowChoice],
											coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows];
										coTR.allowedChoices += coO.numbAddToAllowChoice, isNaN(coTR.allowedChoicesChange) && (coTR.allowedChoicesChange = 0), coTR.allowedChoicesChange += coO.numbAddToAllowChoice;
									}
								}
							}
						}
					},
					selectedOneLessI: function(e) {
						if ("undefined" !== typeof this.app.comp[e]) {
							var co = this.app.comp[e],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							coO.multipleUseVariable = "undefined" === typeof coO.multipleUseVariable ? 0 : coO.multipleUseVariable;
							coO.numMultipleTimesMinus < coO.multipleUseVariable ? (coO.multipleUseVariable--, this.$set(coO, "selectedThisManyTimesProp", coO.multipleUseVariable), this.$set(this.app.objectMap, coO.id, coO.multipleUseVariable)) : s = !1;
							if (s) {
								var tmpScores = [];
								for (var h = 0; h < coO.scores.length; h++) {
									var coS = coO.scores[h],
										k = Math.abs(coO.multipleUseVariable);
									for (var j = 0; j < this.app.pointTypes.length; j++) {
										if (this.app.pointTypes[j].id == coS.id) {
											var tmpValue = coS.multiplyByTimes ? k : 1;
											if ("undefined" === typeof coS.isActiveMulMinus) this.$set(coS, "isActiveMulMinus", []);
											if (this.checkRequireds(coS) && !coS.isActiveMulMinus[k]) {
												this.app.pointTypes[j].startingSum += (coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue);
												coS.isActiveMulMinus[k] = !0;
												tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue});
												this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum);
											}
										}
									}
								}
								if (coO.isActive == !1) {
									coO.isActive = !0, coR.currentChoices += 1, this.app.activated.push(coO.id + "/ON#" + coO.multipleUseVariable);
								} else {
									this.$set(this.app.activated, this.app.activated.indexOf(coO.id + "/ON#" + (coO.multipleUseVariable + 1)), (coO.id + "/ON#" + coO.multipleUseVariable));
								}
								this.updateScoresMulC(coO, coR, tmpScores, 0);
								if (coO.addToAllowChoice) {
									if ("undefined" !== typeof this.app.compR[coO.idOfAllowChoice]) {
										var coT = this.app.compR[coO.idOfAllowChoice],
											coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows];
										coTR.allowedChoices -= coO.numbAddToAllowChoice, isNaN(coTR.allowedChoicesChange) && (coTR.allowedChoicesChange = 0), coTR.allowedChoicesChange += coO.numbAddToAllowChoice;
									}
								}
							}
						}
					},
                    cleanActivated: function() {
                        this.$store.commit({
                            type: "cleanActivated"
                        });
						if (this.newActivated.length > 0) {
							var e = this.newActivated.split(",");
							this.newActivatedList = e.map(item => item.split("/IMG#")[0]);
							this.newActivatedList = this.newActivatedList.map(item => item.split("/WORD#")[0]);
							this.newActivatedList = this.newActivatedList.map(item => item.split("/RND#")[0]);
							for (var a = 0; a < e.length; a++) {
								var ea = e[a].split("/ON#");
								if (!this.app.activated.some(item => item.split("/ON#")[0] == ea[0])) {
									if (ea.length > 1) {
										var eaR = ea[1].split("/RND#");
										ea[0] = eaR.length > 1 ? ea[0] + "/RND#" + eaR[1] : ea[0];
										for (var b = 0; b < Math.abs(parseInt(eaR[0])); b++) {
											eaR[0] > 0 ? this.selectedOneMoreI(ea[0]) : this.selectedOneLessI(ea[0]);
										}
									} else {
										this.activateObjectI(ea[0]);
									}
								}								
							}
							this.newActivatedList.splice(0);
						}
                    },
                    checkRequireds: function(e) {
                        return this.$store.getters.checkRequireds(e)
                    },
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    }
                }
            },
            At = kt,
            Rt = (i("742b"), i("a844")),
            qt = Object(b["a"])(At, Ot, St, !1, null, "47b03d1f", null),
            Bt = qt.exports;
        v()(qt, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VContainer: E["a"],
            VDialog: N["a"],
            VRow: k["a"],
            VTextarea: Rt["a"]
        });
        var Mt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-row", [i("v-dialog", {
                    attrs: {
                        "max-width": t.styling.backPackWidth + "px"
                    },
                    on: {
                        "click:outside": t.cleanCurrentComponent
                    },
                    model: {
                        value: t.dialog,
                        callback: function(e) {
                            t.dialog = e
                        },
                        expression: "dialog"
                    }
                }, [i("v-card", {
                    style: t.background
                }, [i("v-toolbar", {
					staticClass: t.$vuetify.theme.isDark ? "grey darken-2" : "grey lighten-4",
					attrs: {
						height: t.window.width > 500 ? "48" : "72"
					}
				}, [i("v-row", {
					staticClass: "pa-0"
				}, [i("v-col", {
					staticClass: t.window.width > 500 ? "pa-0 align-content-center" : "py-0",
					attrs: {
						cols: t.window.width > 1200 ? "3" : t.window.width > 750 ? "4" : t.window.width > 600 ? "5" : t.window.width > 500 ? "6" : "12"
					}
				}, [i("v-radio-group", {
                    attrs: {
                        row: "",
						"hide-details": ""
                    },
                    model: {
                        value: t.extension,
                        callback: function(e) {
                            t.$set(t, "extension", e)
                        },
                        expression: "extension"
                    }
                }, [i("v-radio", {
                    attrs: {
                        label: "png",
                        color: "blue",
                        value: "png"
                    }
                }), i("v-radio", {
                    attrs: {
                        label: "jpeg",
                        color: "blue",
                        value: "jpeg"
                    }
                }), i("v-radio", {
                    attrs: {
                        label: "webp",
                        color: "blue",
                        value: "webp"
                    }
                })], 1)], 1), i("v-col", {
					staticClass: "pa-0" + (t.window.width > 500 ? "" : " col-12")
				}, [i("v-tooltip", {
					attrs: {
						bottom: "",
						"open-delay": "300"
					},
					scopedSlots: t._u([{
						key: "activator",
						fn: function(e) {
							var s = e.on;
							return [i("v-btn", t._g({
								staticClass: "pa-0",
								attrs: {
									text: "",
									large: ""
								},
								on: {
									click: function(o) {
										return t.print()
									}
								}
							}, s), [i("v-icon", {
								staticClass: "pr-2"
							}, [t._v("mdi-file-image")]), t._v("Download Image")], 1)]
						}
					}], null, !0)
				}, [i("span", [t._v("Go all the way to the bottom to load in the pictures first")])])], 1)], 1)], 1), i("v-card-text", [i("v-container", [i("v-row", {
                    ref: "printThis"
                }, t._l(t.backpack, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0",
						staticStyle: {
							color: t.$vuetify.theme.isDark ? "rgba(0,0,0,.6)" : ""
						},
                        attrs: {
                            cols: e.width ? "6" : "12"
                        }
                    }, [i("app-Row", {
						directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.checkRequireds(e),
                            expression: "checkRequireds(row)"
                        }],
                        attrs: {
                            row: e,
                            type: t.type
                        },
                        on: {
                            rowWasChanged: function(t) {
                                e = t
                            }
                        }
                    })], 1)
                })), 1)], 1)], 1), i("v-card-actions", [i("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        text: ""
                    },
                    on: {
                        click: t.cleanCurrentComponent
                    }
                }, [t._v("Close")])], 1)], 1)], 1), t.snackbar ? i("span", [i("v-snackbar", {
                    attrs: {
                        top: "",
                        timeout: 2e3
                    },
                    model: {
                        value: t.snackbar,
                        callback: function(o) {
                            t.snackbar = o
                        },
                        expression: "snackbar"
                    }
                }, [i("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v(t._s(t.text))])])], 1) : t._e()], 1)
            },
            _t = [],
            Pt = i("c0e9"),
            Ft = i.n(Pt),
            Vt = {
                props: {
                    chapter: Object,
                    page: Object,
                    type: String
                },
                data: function() {
                    return {
                        dialog: !0,
						imgMap: {},
						bUrls: [],
						snackbar: !1,
						text: "",
						extension: "png",
						window: {
                            width: 0,
                            height: 0
                        }
                    }
                },
                components: {
                    appRow: nt
                },
                computed: {
                    backpack: function() {
                        return this.$store.state.app.backpack
                    },
                    styling: function() {
                        return this.$store.state.app.styling
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    background: function() {
						var bgColor = this.app.styling.useBackpackDesign ? this.app.styling.backpackBgColor : this.app.styling.backgroundColor,
							bgImage = this.app.styling.useBackpackDesign ? this.app.styling.backpackBgImage : this.app.styling.backgroundImage,
							bgRepeat = this.app.styling.useBackpackDesign ? this.app.styling.isBackpackBgRepeat : this.app.styling.isBackgroundRepeat,
							bgStretch = this.app.styling.useBackpackDesign ? this.app.styling.isBackpackBgStretch : this.app.styling.isBackgroundStretch;
                        return bgImage ? 'background-image: url("' + bgImage + '");background-color: ' + bgColor + (bgRepeat ? ";background-repeat: repeat;" : (bgStretch ? ";background-size: 100% 100%;" : ";background-size: cover;")) : 'background-color: ' + bgColor + ';'
                    }
                },
				mounted: function() {
					this.resizeObserver = new ResizeObserver((e) => {
						for (var t of e) {
							this.window.width = t.contentRect.width;
							this.window.hegiht = t.contentRect.height;
						}
					});
					if ("undefined" !== typeof this.$refs.printThis) this.resizeObserver.observe(this.$refs.printThis.offsetParent);
                },
                destroyed: function() {
                    if (this.resizeObserver) {
						this.resizeObserver.disconnect();
					}
                },
                methods: {
                    cleanCurrentComponent: function() {
						if (this.app.preloadImages) this.$set(this.app, "printThis", !1);
                        this.$emit("cleanCurrentComponent", "")
                    },
					checkRequireds: function(e) {
                        return this.$store.getters.checkRequireds(e)
                    },
					resultArray: function(e, t) {
                        var o = [];
                        if ("standard" == this.type) {
                            for (var i = 0; i < this.allChapters.length; i++)
                                for (var s = 0; s < this.allChapters[i].pages.length; s++) this.findAllActiveObjects(this.allChapters[i].pages[s], this.allChapters[i]);
                            o = this.activeObjectList
                        } else if ("" == t.resultGroupId || null == t.resultGroupId)
                            for (var a = 0; a < e.length; a++)
                                for (var b = 0; b < e[a].objects.length; b++) {
									if (!e[a].objects[b].isNotResult) e[a].objects[b].isActive ? o.push(e[a].objects[b]) : e[a].objects[b].isImageUpload ? e[a].objects[b].image.length > 5 && o.push(e[a].objects[b]) : e[a].objects[b].isSelectableMultiple && "undefined" !== typeof e[a].objects[b].multipleUseVariable && e[a].objects[b].multipleUseVariable > 0 && o.push(e[a].objects[b]);
								}
                        return o
                    },
					replaceImages: function() {
						var m = "", i = "", k = "", o = [];
						var bgImage = this.app.styling.useBackpackDesign ? this.app.styling.backpackBgImage : this.app.styling.backgroundImage;
						this.imgMap = new Map();
						if (bgImage && this.isDataURL(bgImage)) {
							if (!this.imgMap.has(bgImage)) {
								m = this.getMime(bgImage);
								i = F()(bgImage.split(",")[1], m);
								k = URL.createObjectURL(i);
								this.imgMap.set(bgImage, 'url("' + k + '")');
								this.imgMap.set('url("' + k + '")', bgImage);
								this.bUrls.push('url("' + k + '")');
							} else {
								k = this.imgMap.get(bgImage);
							}
							this.$refs.printThis.style.backgroundImage = 'url("' + k + '")';
						}
						for (var s = 0; s < this.backpack.length; s++) {
							if (this.backpack[s].isResultRow) {
								o = this.resultArray(this.app.rows, this.backpack[s]);
								for (var a = 0; a < o.length; a++) {
									if (o[a].image && this.isDataURL(o[a].image)) {
										if (!this.imgMap.has(o[a].image)) {
											m = this.getMime(o[a].image);
											i = F()(o[a].image.split(",")[1], m);
											k = URL.createObjectURL(i);
											this.imgMap.set(o[a].image, k);
											this.imgMap.set(k, o[a].image);
											this.bUrls.push(k);
										} else {
											k = this.imgMap.get(o[a].image);
										}
										o[a].image = k;
									}
									for (var b = 0; b < o[a].addons.length; b++) {
										if (o[a].addons[b].image && this.isDataURL(o[a].addons[b].image)) {
											if (!this.imgMap.has(o[a].addons[b].image)) {
												m = this.getMime(o[a].addons[b].image);
												i = F()(o[a].addons[b].image.split(",")[1], m);
												k = URL.createObjectURL(i);
												this.imgMap.set(o[a].addons[b].image, k);
												this.imgMap.set(k, o[a].addons[b].image);
												this.bUrls.push(k);
											} else {
												k = this.imgMap.get(o[a].addons[b].image);
											}
											o[a].addons[b].image = k;
										}
									}
								}
							} else {
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.backgroundImage && this.isDataURL(this.backpack[s].styling.backgroundImage)) {
									if (!this.imgMap.has(this.backpack[s].styling.backgroundImage)) {
										m = this.getMime(this.backpack[s].styling.backgroundImage);
										i = F()(this.backpack[s].styling.backgroundImage.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].styling.backgroundImage, k);
										this.imgMap.set(k, this.backpack[s].styling.backgroundImage);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].styling.backgroundImage);
									}
									this.backpack[s].styling.backgroundImage = k;
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.rowBackgroundImage && this.isDataURL(this.backpack[s].styling.rowBackgroundImage)) {
									if (!this.imgMap.has(this.backpack[s].styling.rowBackgroundImage)) {
										m = this.getMime(this.backpack[s].styling.rowBackgroundImage);
										i = F()(this.backpack[s].styling.rowBackgroundImage.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].styling.rowBackgroundImage, k);
										this.imgMap.set(k, this.backpack[s].styling.rowBackgroundImage);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].styling.rowBackgroundImage);
									}
									this.backpack[s].styling.rowBackgroundImage = k;
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.objectBackgroundImage && this.isDataURL(this.backpack[s].styling.objectBackgroundImage)) {
									if (!this.imgMap.has(this.backpack[s].styling.objectBackgroundImage)) {
										m = this.getMime(this.backpack[s].styling.objectBackgroundImage);
										i = F()(this.backpack[s].styling.objectBackgroundImage.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].styling.objectBackgroundImage, k);
										this.imgMap.set(k, this.backpack[s].styling.objectBackgroundImage);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].styling.objectBackgroundImage);
									}
									this.backpack[s].styling.objectBackgroundImage = k;
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.rowBorderImage && this.isDataURL(this.backpack[s].styling.rowBorderImage)) {
									if (!this.imgMap.has(this.backpack[s].styling.rowBorderImage)) {
										m = this.getMime(this.backpack[s].styling.rowBorderImage);
										i = F()(this.backpack[s].styling.rowBorderImage.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].styling.rowBorderImage, k);
										this.imgMap.set(k, this.backpack[s].styling.rowBorderImage);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].styling.rowBorderImage);
									}
									this.backpack[s].styling.rowBorderImage = k;
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.objectBorderImage && this.isDataURL(this.backpack[s].styling.objectBorderImage)) {
									if (!this.imgMap.has(this.backpack[s].styling.objectBorderImage)) {
										m = this.getMime(this.backpack[s].styling.objectBorderImage);
										i = F()(this.backpack[s].styling.objectBorderImage.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].styling.objectBorderImage, k);
										this.imgMap.set(k, this.backpack[s].styling.objectBorderImage);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].styling.objectBorderImage);
									}
									this.backpack[s].styling.objectBorderImage = k;
								}
								if (this.backpack[s].image && this.isDataURL(this.backpack[s].image)) {
									if (!this.imgMap.has(this.backpack[s].image)) {
										m = this.getMime(tthis.backpack[s].image);
										i = F()(this.backpack[s].image.split(",")[1], m);
										k = URL.createObjectURL(i);
										this.imgMap.set(this.backpack[s].image, k);
										this.imgMap.set(k, this.backpack[s].image);
										this.bUrls.push(k);
									} else {
										k = this.imgMap.get(this.backpack[s].image);
									}
									this.backpack[s].styling.objectBackgroundImage = k;
								}
								for (var r = 0; r < this.backpack[s].objects.length; r++) {
									if ("undefined" !== typeof this.backpack[s].objects[r].styling && "undefined" !== typeof this.backpack[s].objects[r].styling.objectBackgroundImage && this.isDataURL(this.backpack[s].styling.objectBackgroundImage)) {
										if (!this.imgMap.has(this.backpack[s].objects[r].styling.objectBackgroundImage)) {
											m = this.getMime(this.backpack[s].objects[r].styling.objectBackgroundImage);
											i = F()(this.backpack[s].objects[r].styling.objectBackgroundImage.split(",")[1], m);
											k = URL.createObjectURL(i);
											this.imgMap.set(this.backpack[s].objects[r].styling.objectBackgroundImage, k);
											this.imgMap.set(k, this.backpack[s].objects[r].styling.objectBackgroundImage);
											this.bUrls.push(k);
										} else {
											k = this.imgMap.get(this.backpack[s].objects[r].styling.objectBackgroundImage);
										}
										this.backpack[s].objects[r].styling.objectBackgroundImage = k;
									}
									if ("undefined" !== typeof this.backpack[s].objects[r].styling && "undefined" !== typeof this.backpack[s].objects[r].styling.objectBorderImage && this.isDataURL(this.backpack[s].styling.objectBorderImage)) {
										if (!this.imgMap.has(this.backpack[s].objects[r].styling.objectBorderImage)) {
											m = this.getMime(this.backpack[s].objects[r].styling.objectBorderImage);
											i = F()(this.backpack[s].objects[r].styling.objectBorderImage.split(",")[1], m);
											k = URL.createObjectURL(i);
											this.imgMap.set(this.backpack[s].objects[r].styling.objectBorderImage, k);
											this.imgMap.set(k, this.backpack[s].objects[r].styling.objectBorderImage);
											this.bUrls.push(k);
										} else {
											k = this.imgMap.get(this.backpack[s].objects[r].styling.objectBorderImage);
										}
										this.backpack[s].objects[r].styling.objectBorderImage = k;
									}
									if (this.backpack[s].objects[r].image && this.isDataURL(this.backpack[s].objects[r].image)) {
										if (!this.imgMap.has(this.backpack[s].objects[r].image)) {
											m = this.getMime(this.backpack[s].objects[r].image);
											i = F()(this.backpack[s].objects[r].image.split(",")[1], m);
											k = URL.createObjectURL(i);
											this.imgMap.set(this.backpack[s].objects[r].image, k);
											this.imgMap.set(k, this.backpack[s].objects[r].image);
											this.bUrls.push(k);
										} else {
											k = this.imgMap.get(this.backpack[s].objects[r].image);
										}
										this.backpack[s].objects[r].image = k;
									}
									for (var a = 0; a < this.backpack[s].objects[r].addons.length; a++) {
										if (this.backpack[s].objects[r].addons[a].image && this.isDataURL(this.backpack[s].objects[r].addons[a].image)) {
											if (!this.imgMap.has(this.backpack[s].objects[r].addons[a].image)) {
												m = this.getMime(this.backpack[s].objects[r].addons[a].image);
												i = F()(this.backpack[s].objects[r].addons[a].image.split(",")[1], m);
												k = URL.createObjectURL(i);
												this.imgMap.set(this.backpack[s].objects[r].addons[a].image, k);
												this.imgMap.set(k, this.backpack[s].objects[r].addons[a].image);
												this.bUrls.push(k);
											} else {
												k = this.imgMap.get(this.backpack[s].objects[r].addons[a].image);
											}
											this.backpack[s].objects[r].addons[a].image = k;
										}
									}
								}
							}
						}
					},
					restoreImages: function() {
						var e = new Set();
						var bgImage = this.$refs.printThis.style.backgroundImage;
						if (bgImage) {
							if (this.imgMap.has(bgImage) && !e.has(bgImage)) {
								this.$refs.printThis.style.backgroundImage = 'url("' + this.imgMap.get(bgImage) + '")';
								e.add(bgImage);
							}
						}
						for (var s = 0; s < this.backpack.length; s++) {
							if (this.backpack[s].isResultRow) {
								o = this.resultArray(this.app.rows, this.backpack[s]);
								for (var a = 0; a < o.length; a++) {
									if (this.imgMap.has(o[a].image) && !e.has(o[a])) {
										o[a].image = this.imgMap.get(o[a].image);
										e.add(o[a]);
									}
									for (var b = 0; b < o[a].addons.length; b++) {
										if (this.imgMap.has(o[a].addons[b].image) && !e.has(o[a].addons[b])) {
											o[a].addons[b].image = this.imgMap.get(o[a].addons[b].image);
											e.add(o[a].addons[b]);
										}
									}
								}
							} else {
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.backgroundImage) {
									if (this.imgMap.has(this.backpack[s].styling.backgroundImage) && !e.has(this.backpack[s].styling.backgroundImage)) {
										this.backpack[s].styling.backgroundImage = this.imgMap.get(this.backpack[s].styling.backgroundImage);
										e.add(this.backpack[s].styling.backgroundImage);
									}
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.rowBackgroundImage) {
									if (this.imgMap.has(this.backpack[s].styling.rowBackgroundImage) && !e.has(this.backpack[s].styling.rowBackgroundImage)) {
										this.backpack[s].styling.rowBackgroundImage = this.imgMap.get(this.backpack[s].styling.rowBackgroundImage);
										e.add(this.backpack[s].styling.rowBackgroundImage);
									}
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.objectBackgroundImage) {
									if (this.imgMap.has(this.backpack[s].styling.objectBackgroundImage) && !e.has(this.backpack[s].styling.objectBackgroundImage)) {
										this.backpack[s].styling.objectBackgroundImage = this.imgMap.get(this.backpack[s].styling.objectBackgroundImage);
										e.add(this.backpack[s].styling.objectBackgroundImage);
									}
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.rowBorderImage) {
									if (this.imgMap.has(this.backpack[s].styling.rowBorderImage) && !e.has(this.backpack[s].styling.rowBorderImage)) {
										this.backpack[s].styling.rowBorderImage = this.imgMap.get(this.backpack[s].styling.rowBorderImage);
										e.add(this.backpack[s].styling.rowBorderImage);
									}
								}
								if ("undefined" !== typeof this.backpack[s].styling && "undefined" !== typeof this.backpack[s].styling.objectBorderImage) {
									if (this.imgMap.has(this.backpack[s].styling.objectBorderImage) && !e.has(this.backpack[s].styling.objectBorderImage)) {
										this.backpack[s].styling.objectBorderImage = this.imgMap.get(this.backpack[s].styling.objectBorderImage);
										e.add(this.backpack[s].styling.objectBorderImage);
									}
								}
								if (this.backpack[s].image) {
									if (this.imgMap.has(this.backpack[s].image) && !e.has(this.backpack[s].image)) {
										this.backpack[s].image = this.imgMap.get(this.backpack[s].image);
										e.add(this.backpack[s].image);
									}
								}
								for (var r = 0; r < this.backpack[s].objects.length; r++) {
									if ("undefined" !== typeof this.backpack[s].objects[r].styling && "undefined" !== typeof this.backpack[s].objects[r].styling.objectBackgroundImage) {
										if (this.imgMap.has(this.backpack[s].objects[r].styling.objectBackgroundImage) && !e.has(this.backpack[s].objects[r].styling.objectBackgroundImage)) {
											this.backpack[s].objects[r].styling.objectBackgroundImage = this.imgMap.get(this.backpack[s].objects[r].styling.objectBackgroundImage);
											e.add(this.backpack[s].objects[r].styling.objectBackgroundImage);
										}
									}
									if ("undefined" !== typeof this.backpack[s].objects[r].styling && "undefined" !== typeof this.backpack[s].objects[r].styling.objectBorderImage) {
										if (this.imgMap.has(this.backpack[s].objects[r].styling.objectBorderImage) && !e.has(this.backpack[s].objects[r].styling.objectBorderImage)) {
											this.backpack[s].objects[r].styling.objectBorderImage = this.imgMap.get(this.backpack[s].objects[r].styling.objectBorderImage);
											e.add(this.backpack[s].objects[r].styling.objectBorderImage);
										}
									}
									if (this.backpack[s].objects[r].image) {
										if (this.imgMap.has(this.backpack[s].objects[r].image) && !e.has(this.backpack[s].objects[r].image)) {
											this.backpack[s].objects[r].image = this.imgMap.get(this.backpack[s].objects[r].image);
											e.add(this.backpack[s].objects[r].image);
										}
									}
									for (var a = 0; a < this.backpack[s].objects[r].addons.length; a++) {
										if (this.backpack[s].objects[r].addons[a].image) {
											if (this.imgMap.has(this.backpack[s].objects[r].addons[a].image) && !e.has(this.backpack[s].objects[r].addons[a].image)) {
												this.backpack[s].objects[r].addons[a].image = this.imgMap.get(this.backpack[s].objects[r].addons[a].image);
												e.add(this.backpack[s].objects[r].addons[a].image);
											}
										}
									}
								}
							}
						}
						for (var a = 0; a < this.bUrls.length; a++) {
							URL.revokeObjectURL(this.bUrls[a]);
						}
						this.imgMap.clear();
						this.bUrls.length = 0;
					},
					isDataURL: function(e) {
						return /^data:(image\/[a-zA-Z]*);base64,/.test(e);
					},
					getMime: function(e) {
						return e.match(/^data:(image\/[^;]+);/)[1];
					},
                    print: function() {
						var e = this,
							bgColor = e.app.styling.useBackpackDesign ? e.app.styling.backpackBgColor : e.app.styling.backgroundColor,
							bgImage = e.app.styling.useBackpackDesign ? e.app.styling.backpackBgImage : e.app.styling.backgroundImage,
							bgRepeat = e.app.styling.useBackpackDesign ? e.app.styling.isBackpackBgRepeat : e.app.styling.isBackgroundRepeat,
							bSuccess = !1;
						if (bgImage) {
							e.$refs.printThis.style.backgroundImage = 'url("' + bgImage + '")';
							bgRepeat ? e.$refs.printThis.style.backgroundRepeat = 'repeat' : e.$refs.printThis.style.backgroundSize = 'cover';
							e.$refs.printThis.style.backgroundPosition = 'center';
							e.$refs.printThis.style.backgroundAttachment = 'fixed';
						}
						e.$refs.printThis.style.backgroundColor = bgColor;
						htmlToImage.toBlob(e.$refs.printThis, {
							type: "image/" + e.extension,
							quality: 0.9,
							style: {
								margin: 0
							}
						}).then(function(t) {
							var i = document.createEvent("MouseEvents"),
								s = document.createElement("a");
							s.download = "Finalized Build." + e.extension;
							s.href = window.URL.createObjectURL(t);
							s.dataset.downloadurl = ["image/" + e.extension, s.download, s.href].join(":");
							i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
							s.dispatchEvent(i);
							e.$refs.printThis.removeAttribute('style');
							bSuccess = !0;
						}).catch(function(error) {
							if (!bSuccess) {
								e.text = "Failed to generate image, Segmenting and regenerating the image...", e.snackbar = !0;
								setTimeout(() => {
									var maxLength = 6e6;
									var container = e.$refs.printThis.cloneNode(true);

									function splitNodes(node, maxLength) {
										var parts = [];
										var currentPart = document.createElement("div");
										currentPart.style.cssText = node.style.cssText;
										var currentLength = 0;
										
										function getBlobSize(node) {
											const s = new XMLSerializer();
											const str = s.serializeToString(node);
											const blob = new Blob([str], {type: "image/" + e.extension});
											return blob.size;
										}
										
										function addNodeToCurrentPart(node) {
											var clone = node.cloneNode(true);
											currentPart.appendChild(clone);
											currentLength += getBlobSize(node);
										}
										
										function addNodeToCurrentPartChild(node) {
											var clone = node.cloneNode(true);
											currentPart.childNodes[0].childNodes[0].childNodes[0].childNodes[1].appendChild(clone);
											currentLength += getBlobSize(node);
										}
										
										function initNode(node) {
											var c1 = node.cloneNode(false),
												c2 = node.childNodes[0].cloneNode(false),
												c3 = node.childNodes[0].childNodes[0].cloneNode(false),
												c4 = node.childNodes[0].childNodes[0].childNodes[0].cloneNode(true),
												c5 = node.childNodes[0].childNodes[0].childNodes[1].cloneNode(false);
											currentPart.appendChild(c1);
											currentPart.childNodes[0].appendChild(c2);
											currentPart.childNodes[0].childNodes[0].appendChild(c3);
											currentPart.childNodes[0].childNodes[0].childNodes[0].appendChild(c4);
											currentPart.childNodes[0].childNodes[0].childNodes[0].appendChild(c5);
											currentLength += getBlobSize(c1);
											currentLength += getBlobSize(c2);
											currentLength += getBlobSize(c3);
											currentLength += getBlobSize(c4);
											currentLength += getBlobSize(c5);
										}

										Array.from(node.childNodes).forEach(function(child) {
											var childLength = (new XMLSerializer().serializeToString(child)).length;
											if (childLength > maxLength) {
												var cParent = child.childNodes[0].childNodes[0],
													cRow = cParent.childNodes[0];
												if (currentLength > 0) parts.push(currentPart.innerHTML);
												currentPart = document.createElement("div");
												currentPart.style.cssText = node.style.cssText;
												currentLength = 0;
												initNode(child);
												Array.from(cParent.childNodes[1].childNodes).forEach(function(c) {
													var cLength = (new XMLSerializer().serializeToString(c)).length;
													if (currentLength + cLength > maxLength) {
														parts.push(currentPart.innerHTML);
														currentPart = document.createElement("div");
														currentPart.style.cssText = node.style.cssText;
														currentLength = 0;
														initNode(child);
													}
													addNodeToCurrentPartChild(c);
												});
											} else {
												if (currentLength + childLength > maxLength) {
														parts.push(currentPart.innerHTML);
														currentPart = document.createElement("div");
														currentPart.style.cssText = node.style.cssText;
														currentLength = 0;
												}
												addNodeToCurrentPart(child);
											}
										});

										if (currentPart.innerHTML) {
											parts.push(currentPart.innerHTML);
										}

										return parts;
									}

									var parts = splitNodes(container, maxLength),
										bS = !0;
									var promises = parts.map(function(part, index) {
										return new Promise(function(resolve) {
											var tempDiv = document.createElement("div");
											tempDiv.innerHTML = part;
											if (bgImage) {
												tempDiv.style.backgroundImage = 'url("' + bgImage + '")';
												bgRepeat ? tempDiv.style.backgroundRepeat = 'repeat' : tempDiv.style.backgroundSize = 'cover';
												tempDiv.style.backgroundPosition = 'center';
												tempDiv.style.backgroundAttachment = 'fixed';
											}
											tempDiv.style.backgroundColor = bgColor;
											e.$refs.printThis.appendChild(tempDiv);
											htmlToImage.toBlob(tempDiv, {
												type: "image/" + e.extension,
												quality: 0.9,
												style: {
													margin: 0
												}
											}).then(function(t) {
												var i = document.createEvent("MouseEvents"),
													s = document.createElement("a");
												s.download = "Finalized_Build_Part_" + (index + 1) + "." +  + e.extension;
												s.href = window.URL.createObjectURL(t);
												s.dataset.downloadurl = ["image/" + e.extension, s.download, s.href].join(":");
												i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
												s.dispatchEvent(i);
											}).catch(function(err) {
												e.text = "Failed to download the image. Please try again with a different extension.", e.snackbar = !0;
											}).finally(function() {
												e.$refs.printThis.removeChild(tempDiv);
												resolve();
											});
										});
									});
									Promise.all(promises).then(function() {
										e.$refs.printThis.removeAttribute('style');
									});
								}, 1000);
							}
						});
					}
                }
            },
            zt = Vt,
            $t = (i("2e98"), Object(b["a"])(zt, Mt, _t, !1, null, "26bce602", null)),
			Vs = i("b974"),
			Tb = i("71d9"),
			Ma = i("67b6"),
            Va = i("43a6"),
            Lt = $t.exports;
        v()($t, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VCol: S["a"],
            VContainer: E["a"],
            VDialog: N["a"],
			VIcon: Q["a"],
            VRow: k["a"],
			VRadio: Ma["a"],
            VRadioGroup: Va["a"],
			VSnackbar: tt["a"],
			VSelect: Vs["a"],
			VToolbar: Tb["a"],
			VTooltip: y["a"]
        });
        var Wt = i("63d6"),
            Et = i.n(Wt),
            Nt = {
                data: function() {
                    return {
                        currentComponent: "",
                        showMenu: !0,
                        window: {
                            width: 0,
                            height: 0
                        },
						buildTitle: "",
						builds: [],
						db: "",
						drawer: !1,
						exceptedScores: [],
						isTop: !1,
						newActivated: "",
						newActivatedList: [],
						snackbar: !1,
						text: ""
                    }
                },
                components: {
                    appRow: nt,
                    appLoad: It,
                    appActivatedViewer: Bt,
                    appBackpackPreview: Lt
                },
                computed: {
                   background: function() {
                        return this.app.styling.backgroundImage ? 'background-image: url("' + this.app.styling.backgroundImage + '");background-color: ' + this.app.styling.backgroundColor + (this.app.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : (this.app.styling.isBackgroundStretch ? ";background-size: 100% 100%;" : ";background-size: cover;")) : 'background-color: ' + this.app.styling.backgroundColor + ';'
                    },
                    pointBar: function() {
                        return "background-color: " + this.app.styling.barBackgroundColor + "; margin: " + this.app.styling.barMargin + "px; padding: " + this.app.styling.barPadding + "px;"
                    },
                    pointBarText: function() {
                        return "color: " + this.app.styling.barTextColor + "; margin: " + this.app.styling.barTextMargin + "px; padding: " + this.app.styling.barTextPadding + 'px;font-family: "' + this.app.styling.barTextFont + '";font-size: ' + this.app.styling.barTextSize + "px;"
                    },
					pointBarIcon: function() {
						return "undefined" !== typeof this.app.styling.barIconColor ? "color: " + this.app.styling.barIconColor + ";" : ""
					},
                    app: function() {
                        return this.$store.state.app
                    },
                    activated: function() {
                        return this.$store.state.app.activated
                    },
					generateBuild: function() {
						for (var e = [], t = 0; t < this.app.activated.length; t++) {
							if ("undefined" !== typeof this.app.comp[this.app.activated[t].split("/ON#")[0]]) {
								var co = this.app.comp[this.app.activated[t].split("/ON#")[0]],
									coR = this.app.rows[co.rows],
									coO = coR.objects[co.objects],
									a = coO.id;
								if (!coO.isSelectableMultiple) {
									if (coO.isActivateRandom && coO.activatedRandom.length > 0) {
										a += "/RND#" + coO.activatedRandom.join("/AND#").replaceAll("/ON#", "/RON#");
									}
									if (coO.textfieldIsOn && coO.customTextfieldIsOn) {
										a += "/WORD#" + coO.wordChangeSelect.replaceAll(",", "/CHAR#");
									}
									if (coO.isImageUpload && coO.image !== coO.defaultImage) {
										a += "/IMG#" + coO.image.replaceAll(",", "/CHAR#");
									}
									e.push(a);
								} else if (coO.isMultipleUseVariable && coO.multipleUseVariable !== 0) {
									a += "/ON#" + coO.multipleUseVariable;
									if (coO.isActivateRandom && coO.activatedRandomMul.length > 0) {
										a += "/RND#" + coO.activatedRandomMul.flat(2).join("/AND#").replaceAll("/ON#", "/RON#");
									}
									e.push(a);
								}
							}
						}
                        return e
                    }
                },
                beforeCreate: function() {
					var t = this,
						e = new XMLHttpRequest(),
						lm = document.getElementById('lm'),
						sizeTotal = parseInt(projectSize.innerHTML),
						ps = indicator.className,
						indDiv = document.getElementById('indicator'),
						oriText = indDiv.innerHTML;
					if (window.fetch) {
						fetch("project.json")
						.then(response => {
							const reader = response.body.getReader();
							const contentLength = parseInt(sizeTotal);
							const decoder = new TextDecoder();
							var receivedLength = 0;
							var data = "";
							function processText({ done, value }) {
								if (done) {
									var i = JSON.parse(data);
									t.$store.commit("loadApp", i);
									t.initializeApp(t);
									setTimeout(function() {
										lm.style.opacity = 1;
										indicator.remove();
										projectSize.remove();
										document.styleSheets[0].insertRule("body::before{opacity:0;transition:opacity 0.5s}", 0);
									}, 1000);
									const errorMsg = "Your browser does not support the .avif format.\n Avif images may not be displayed.";
									new Promise(() => {
										const image = new Image();
										image.onerror = () => {t.text = errorMsg, t.snackbar = !0;}
										image.onload = () => {}
										image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
									}).catch(() => false);
									return;
								}
								receivedLength += value.length;
								data += decoder.decode(value, { stream:true });
								if (ps == "ind2" && sizeTotal > 0) {
									indDiv.innerHTML = oriText + `${(receivedLength / sizeTotal * 100).toFixed(1)} %`;
								} else if (ps == "ind3" && sizeTotal > 0) {
									indDiv.innerHTML = oriText + `${(receivedLength / 1e6).toFixed(1)}/${sizeTotal.toFixed(1)} MB`;
								} else {
									indDiv.innerHTML = oriText + `${(receivedLength / 1e6).toFixed(1)} MB`;
								}
								return reader.read().then(processText);
							};
							return reader.read().then(processText);
						})
						.catch(error => {
							console.log(error);
							t.initializeApp(t);
							setTimeout(function() {
								lm.style.opacity = 1;
								indicator.remove();
								projectSize.remove();
								document.styleSheets[0].insertRule("body::before{opacity:0;transition:opacity 0.5s}", 0);
							}, 1000);
							const errorMsg = "Your browser does not support the .avif format.\n Avif images may not be displayed.";
							new Promise(() => {
								const image = new Image();
								image.onerror = () => {t.text = errorMsg, t.snackbar = !0;}
								image.onload = () => {}
								image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
							}).catch(() => false);
						});
					} else {
						e.onreadystatechange = function() {
							if (4 == this.readyState && 200 == this.status) {
								var r = this.responseText,
								i = JSON.parse(r);
								t.$store.commit("loadApp", i);
								t.initializeApp(t);
							} else if ((4 == this.readyState && 404 == this.status) || (4 == this.readyState && 0 == this.status)) {
								t.initializeApp(t);
							}
						};
						e.addEventListener("progress", function(e) {
							if (ps == "ind2" && parseInt(sizeTotal) > 0) {
								indicator.innerHTML = "Loading<br>" + `${(e.loaded / sizeTotal * 100).toFixed(1)} %`;
							} else if (ps == "ind3" && parseInt(sizeTotal) > 0) {
								indicator.innerHTML = "Loading<br>" + `${(e.loaded / 1e6).toFixed(1)}/${sizeTotal.toFixed(1)} MB`;
							} else {
								indicator.innerHTML = "Loading<br>" + `${(e.loaded / 1e6).toFixed(1)} MB`;
							}
						});
						e.addEventListener("loadend", function() {
							setTimeout(function() {
								lm.style.opacity = 1;
								indicator.remove();
								projectSize.remove();
								document.styleSheets[0].insertRule("body::before{opacity:0;transition:opacity 0.5s}", 0);
							}, 1000);
							const errorMsg = "Your browser does not support the .avif format.\n Avif images may not be displayed.";
							new Promise(() => {
								const image = new Image();
								image.onerror = () => {t.text = errorMsg, t.snackbar = !0;}
								image.onload = () => {}
								image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
							}).catch(() => false);
						});
						e.open("GET", "project.json", true), e.send();
					}
				},
                created: function() {
                    window.addEventListener("resize", this.handleResize), this.handleResize(), this.initializeBuildDB()
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.handleResize)
                },
                methods: {
                    handleResize: function() {
                        this.window.width = window.innerWidth, this.window.height = window.innerHeight
                    },
                    checkRequireds: function(t) {
                        return this.$store.getters.checkRequireds(t)
                    },
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    },
                    cleanActivated: function() {
                        this.$store.commit({
                            type: "cleanActivated"
                        })
                    },
					initializeApp: function(e) {
						if (e.app.darkMode) e.$set(e.$vuetify.theme, "isDark", e.app.darkMode);
						for (var a = 0; a < e.app.pointTypes.length; a++) {
							if ("undefined" === typeof e.app.pointTypes[a].initValue) e.app.pointTypes[a].initValue = e.app.pointTypes[a].startingSum;
							if ("" != e.app.pointTypes[a].activatedId && "undefined" === typeof e.app.pointTypes[a].isNotShownPointBar) e.app.pointTypes[a].isNotShownPointBar = !0;
							if ("" != e.app.pointTypes[a].activatedId && "undefined" === typeof e.app.pointTypes[a].isNotShownObjects) e.app.pointTypes[a].isNotShownObjects = !0;
						}
						if ("undefined" === typeof e.app.pointTypeMap) e.$set(e.app, "pointTypeMap", {});
						if ("undefined" === typeof e.app.wordMap) e.$set(e.app, "wordMap", {});
						if ("undefined" === typeof e.app.objectMap) e.$set(e.app, "objectMap", {});
						e.$set(e.app, "comp", {});
						e.$set(e.app, "compR", {});
						e.$set(e.app, "compG", {});
						e.$set(e.app, "compODG", {});
						e.$set(e.app, "compRDG", {});
						e.$set(e.app, "compGR", {});
						if ("undefined" !== typeof e.app.pointTypes) e.app.pointTypes.forEach(pt => {e.$set(e.app.pointTypeMap, pt.id, pt.startingSum)});
						if ("undefined" !== typeof e.app.words) e.app.words.forEach(w => {e.$set(e.app.wordMap, w.id, w.replaceText)});
						if ("undefined" !== typeof e.app.rows) e.app.rows.forEach(row => {row.objects.filter(object => object.isMultipleUseVariable).forEach(o => {e.$set(e.app.objectMap, o.id, o.multipleUseVariable)})});
						if ("undefined" === typeof e.app.styling.multiChoiceCounterPosition) e.$set(e.app.styling, "multiChoiceCounterPosition", 0);
						if ("undefined" === typeof e.app.styling.multiChoiceCounterSize) e.$set(e.app.styling, "multiChoiceCounterSize", 170);
						if ("undefined" === typeof e.app.cancelForcedActivated) e.$set(e.app, "cancelForcedActivated", []);
						if ("undefined" === typeof e.app.globalRequirements) e.$set(e.app, "globalRequirements", []);
						if ("undefined" === typeof e.app.orderOrReqText) e.$set(e.app, "orderOrReqText", "0");
						if ("undefined" === typeof e.app.defaultOrReq) e.$set(e.app, "defaultOrReq", "of");
						if ("undefined" === typeof e.app.orderSelReqText) e.$set(e.app, "orderSelReqText", "0");
						if ("undefined" === typeof e.app.defaultSelReq) e.$set(e.app, "defaultSelReq", "choice from");
						for (var b = 0; b < e.app.rows.length; b++) {
							var g = e.app.rows[b].id;
							e.app.compR[g] = {rows: b, type: "app"};
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateFilterIsOn) e.$set(e.app.rows[b], "privateFilterIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateTextIsOn) e.$set(e.app.rows[b], "privateTextIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateObjectImageIsOn) e.$set(e.app.rows[b], "privateObjectImageIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateObjectIsOn) e.$set(e.app.rows[b], "privateObjectIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateRowImageIsOn) e.$set(e.app.rows[b], "privateRowImageIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateRowIsOn) e.$set(e.app.rows[b], "privateRowIsOn", !0);
							if (e.app.rows[b].isPrivateStyling && "undefined" === typeof e.app.rows[b].privateBackgroundIsOn) e.$set(e.app.rows[b], "privateBackgroundIsOn", !0);
							if ("undefined" === typeof e.app.rowDesignGroups) e.$set(e.app, "rowDesignGroups", []);
							if ("undefined" === typeof e.app.objectDesignGroups) e.$set(e.app, "objectDesignGroups", []);
							if (e.app.rows[b].textIsRemoved) {
								if ("undefined" === typeof e.app.rows[b].objectTextRemoved) e.$set(e.app.rows[b], "objectTextRemoved", !0);
								if ("undefined" === typeof e.app.rows[b].addonTextRemoved) e.$set(e.app.rows[b], "addonTextRemoved", !0);
							}
							for (var c = 0; c < e.app.rows[b].objects.length; c++) {
								var d = e.app.rows[b].objects[c].id;
								e.app.comp[d] = {rows: b, objects: c, type: "app"};
								if (!e.app.rows[b].objects[c].isSelectableMultiple && e.app.rows[b].objects[c].isMultipleUseVariable) e.$set(e.app.rows[b].objects[c], "isMultipleUseVariable", !1);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].privateFilterIsOn) e.$set(e.app.rows[b].objects[c], "privateFilterIsOn", !0);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].privateTextIsOn) e.$set(e.app.rows[b].objects[c], "privateTextIsOn", !0);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].privateObjectImageIsOn) e.$set(e.app.rows[b].objects[c], "privateObjectImageIsOn", !0);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].privateObjectIsOn) e.$set(e.app.rows[b].objects[c], "privateObjectIsOn", !0);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].privateBackgroundIsOn) e.$set(e.app.rows[b].objects[c], "privateBackgroundIsOn", !0);
								if (e.app.rows[b].objects[c].isPrivateStyling && "undefined" === typeof e.app.rows[b].objects[c].styling) {
									e.$set(e.app.rows[b].objects[c], "styling", {});
									e.$set(e.app.rows[b].objects[c], "privateFilterIsOn", !1);
									e.$set(e.app.rows[b].objects[c], "privateTextIsOn", !1);
									e.$set(e.app.rows[b].objects[c], "privateObjectImageIsOn", !1);
									e.$set(e.app.rows[b].objects[c], "privateObjectIsOn", !1);
									e.$set(e.app.rows[b].objects[c], "privateBackgroundIsOn", !1);
								}
								if (e.app.rows[b].objects[c].isMultipleUseVariable && "number" !== typeof e.app.rows[b].objects[c].initMultipleTimesMinus) {
									e.$set(e.app.rows[b].objects[c], "initMultipleTimesMinus", 0);
									e.$set(e.app.rows[b].objects[c], "initMultipleTimesMinus", parseInt(e.app.rows[b].objects[c].numMultipleTimesMinus));
								}
								if (e.app.rows[b].objects[c].discountOther && "undefined" === typeof e.app.rows[b].objects[c].discountPointTypes) e.$set(e.app.rows[b].objects[c], "discountPointTypes", []);
								if (e.app.rows[b].objects[c].multiplyPointtypeIsOn && "string" === typeof e.app.rows[b].objects[c].pointTypeToMultiply) e.$set(e.app.rows[b].objects[c], "pointTypeToMultiply", [e.app.rows[b].objects[c].pointTypeToMultiply]);
								if (e.app.rows[b].objects[c].dividePointtypeIsOn && "string" === typeof e.app.rows[b].objects[c].pointTypeToDivide) e.$set(e.app.rows[b].objects[c], "pointTypeToDivide", [e.app.rows[b].objects[c].pointTypeToDivide]);
								if (e.app.rows[b].objects[c].multiplyPointtypeIsOn && "number" === typeof e.app.rows[b].objects[c].startingSumAtMultiply) e.$set(e.app.rows[b].objects[c], "startingSumAtMultiply", [e.app.rows[b].objects[c].startingSumAtMultiply]);
								if (e.app.rows[b].objects[c].dividePointtypeIsOn && "number" === typeof e.app.rows[b].objects[c].startingSumAtDivide) e.$set(e.app.rows[b].objects[c], "startingSumAtDivide", [e.app.rows[b].objects[c].startingSumAtDivide]);
								for (var f = 0; f < e.app.rows[b].objects[c].addons.length; f++) {
									if ("undefined" === typeof e.app.rows[b].objects[c].addons[f].template || 0 == e.app.rows[b].objects[c].addons[f].template) e.$set(e.app.rows[b].objects[c].addons[f], "template", 1);
								}
							}
						}
						for (var b = 0; b < e.app.backpack.length; b++) {
							var g = e.app.backpack[b].id;
							e.app.compR[g] = {rows: b, type: "backpack"};
							if (e.app.backpack[b].textIsRemoved) {
								if ("undefined" === typeof e.app.backpack[b].objectTextRemoved) e.$set(e.app.backpack[b], "objectTextRemoved", !0);
								if ("undefined" === typeof e.app.backpack[b].addonTextRemoved) e.$set(e.app.backpack[b], "addonTextRemoved", !0);
							}
							for (var c = 0; c < e.app.backpack[b].objects.length; c++) {
								var d = e.app.backpack[b].objects[c].id;
								e.app.comp[d] = {rows: b, objects: c, type: "backpack"};
								if (e.app.backpack[b].objects[c].multiplyPointtypeIsOn && "string" === typeof e.app.backpack[b].objects[c].pointTypeToMultiply) e.$set(e.app.backpack[b].objects[c], "pointTypeToMultiply", [e.app.backpack[b].objects[c].pointTypeToMultiply]);
								if (e.app.backpack[b].objects[c].dividePointtypeIsOn && "string" === typeof e.app.backpack[b].objects[c].pointTypeToDivide) e.$set(e.app.backpack[b].objects[c], "pointTypeToDivide", [e.app.backpack[b].objects[c].pointTypeToDivide]);
								if (e.app.backpack[b].objects[c].multiplyPointtypeIsOn && "number" === typeof e.app.backpack[b].objects[c].startingSumAtMultiply) e.$set(e.app.backpack[b].objects[c], "startingSumAtMultiply", [e.app.backpack[b].objects[c].startingSumAtMultiply]);
								if (e.app.backpack[b].objects[c].dividePointtypeIsOn && "number" === typeof e.app.backpack[b].objects[c].startingSumAtDivide) e.$set(e.app.backpack[b].objects[c], "startingSumAtDivide", [e.app.backpack[b].objects[c].startingSumAtDivide]);
							}
						}
						for (var f = 0; f < e.app.groups.length; f++) {
							var r = e.app.groups[f].id;
							e.app.compG[r] = {groups: f};
						}
						for (var h = 0; h < e.app.objectDesignGroups.length; h++) {
								var i = e.app.objectDesignGroups[h].id;
								e.app.compODG[i] = {designGroups: h};
								if ("undefined" === typeof e.app.objectDesignGroups[h].activatedId) e.$set(e.app.objectDesignGroups[h], "activatedId", "");
							}
						for (var h = 0; h < e.app.rowDesignGroups.length; h++) {
							var i = e.app.rowDesignGroups[h].id;
							e.app.compRDG[i] = {designGroups: h};
							if ("undefined" === typeof e.app.rowDesignGroups[h].activatedId) e.$set(e.app.rowDesignGroups[h], "activatedId", "");
						}
						for (var h = 0; h < e.app.globalRequirements.length; h++) {
							var i = e.app.globalRequirements[h].id;
							e.app.compGR[i] = {globalRequirements: h};
						}
					},
					closeDrawer: function() {
						this.drawer = !1
					},
					deleteBuild: function(e) {
						const transaction = this.db.transaction(["buildStore"], "readwrite");
						const store = transaction.objectStore("buildStore");
						store.delete(e.title);
						this.builds.splice(this.builds.indexOf(e), 1);
						this.text = "Build: " + e.title + " is deleted.", this.snackbar = !0;
					},
					loadBuild: function(e) {
						this.newActivated = e.value.join(",");
						this.loadActivated();
						this.text = "Build: " + e.title + " is loaded.", this.snackbar = !0;
					},
					openBuildForm: function() {
						this.currentComponent = "appActivatedViewer";
						this.drawer = !1
					},
					toggleTheme: function() {
						this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
						this.app.darkMode = !this.app.darkMode;
					},
					initializeBuildDB: function() {
						var e = this;
						const request = indexedDB.open("cyoaDB", 1);
						request.onupgradeneeded = function(t) {
							e.db = t.target.result;
							if (!e.db.objectStoreNames.contains("buildStore")) {
								e.db.createObjectStore("buildStore", {keyPath: "title"});
							}
						};
						request.onsuccess = function(t) {
							e.db = t.target.result;
							const transaction = e.db.transaction(["buildStore"], "readonly");
							const store = transaction.objectStore("buildStore");
							const getRequest = store.openCursor();
							getRequest.onsuccess = function(o) {
								const i = o.target.result;
								if (i) {
									e.builds.push({title: i.value.title, value: i.value.value});
									i.continue();
								}
							};
							getRequest.onerror = function(o) {
								console.error("Database error:", o.target.errorCode);
							};
						};
						request.onerror = function(t) {
							console.error("Database error:", t.target.errorCode);
						};
					},
					saveBuild: function() {
						var e = this.buildTitle.trim(),
							t = this.generateBuild;
						if (this.builds.some(item => item.title === e)) {
							this.text = "Build: " + e + " is already in use.", this.snackbar = !0;
						} else {
							const transaction = this.db.transaction(["buildStore"], "readwrite");
							const store = transaction.objectStore("buildStore");
							store.put({title: e, value: t});
							this.builds.push({title: e, value: t});
							this.text = "Build: " + e + " is saved.", this.snackbar = !0;
						}
						this.buildTitle = "";
					},
                    print: function() {
						var e = this,
							bgColor = e.app.styling.useBackpackDesign ? e.app.styling.backpackBgColor : e.app.styling.backgroundColor,
							bgImage = e.app.styling.useBackpackDesign ? e.app.styling.backpackBgImage : e.app.styling.backgroundImage,
							bgRepeat = e.app.styling.useBackpackDesign ? e.app.styling.isBackpackBgRepeat : e.app.styling.isBackgroundRepeat,
							bSuccess = !1;
						if (bgImage) {
							e.$refs.printThis.style.backgroundImage = 'url("' + bgImage + '")';
							bgRepeat ? e.$refs.printThis.style.backgroundRepeat = 'repeat' : e.$refs.printThis.style.backgroundSize = 'cover';
							e.$refs.printThis.style.backgroundPosition = 'center';
							e.$refs.printThis.style.backgroundAttachment = 'fixed';
						}
						e.$refs.printThis.style.backgroundColor = bgColor;
						htmlToImage.toBlob(e.$refs.printThis, {
							type: "image/webp",
							quality: 0.9
						}).then(function(t) {
							var i = document.createEvent("MouseEvents"),
								s = document.createElement("a");
							s.download = "Finalized Build.webp";
							s.href = window.URL.createObjectURL(t);
							s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
							i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
							s.dispatchEvent(i);
							e.$refs.printThis.removeAttribute('style');
							bSuccess = !0;
						}).catch(function(error) {
							if (!bSuccess) {
								e.text = "Failed to generate image, Segmenting and regenerating the image...", e.snackbar = !0;
								setTimeout(() => {
									var maxLength = 6e6;
									var container = e.$refs.printThis.cloneNode(true);

									function splitNodes(node, maxLength) {
										var parts = [];
										var currentPart = document.createElement("div");
										currentPart.style.cssText = node.style.cssText;
										var currentLength = 0;
										
										function getBlobSize(node) {
											const s = new XMLSerializer();
											const str = s.serializeToString(node);
											const blob = new Blob([str], {type: "image/webp"});
											return blob.size;
										}
										
										function addNodeToCurrentPart(node) {
											var clone = node.cloneNode(true);
											currentPart.appendChild(clone);
											currentLength += getBlobSize(node);
										}
										
										function addNodeToCurrentPartChild(node) {
											var clone = node.cloneNode(true);
											currentPart.childNodes[0].childNodes[0].childNodes[0].childNodes[1].appendChild(clone);
											currentLength += getBlobSize(node);
										}
										
										function initNode(node) {
											var c1 = node.cloneNode(false),
												c2 = node.childNodes[0].cloneNode(false),
												c3 = node.childNodes[0].childNodes[0].cloneNode(false),
												c4 = node.childNodes[0].childNodes[0].childNodes[0].cloneNode(true),
												c5 = node.childNodes[0].childNodes[0].childNodes[1].cloneNode(false);
											currentPart.appendChild(c1);
											currentPart.childNodes[0].appendChild(c2);
											currentPart.childNodes[0].childNodes[0].appendChild(c3);
											currentPart.childNodes[0].childNodes[0].childNodes[0].appendChild(c4);
											currentPart.childNodes[0].childNodes[0].childNodes[0].appendChild(c5);
											currentLength += getBlobSize(c1);
											currentLength += getBlobSize(c2);
											currentLength += getBlobSize(c3);
											currentLength += getBlobSize(c4);
											currentLength += getBlobSize(c5);
										}

										Array.from(node.childNodes).forEach(function(child) {
											var childLength = (new XMLSerializer().serializeToString(child)).length;
											if (childLength > maxLength) {
												var cParent = child.childNodes[0].childNodes[0],
													cRow = cParent.childNodes[0];
												if (currentLength > 0) parts.push(currentPart.innerHTML);
												currentPart = document.createElement("div");
												currentPart.style.cssText = node.style.cssText;
												currentLength = 0;
												initNode(child);
												Array.from(cParent.childNodes[1].childNodes).forEach(function(c) {
													var cLength = (new XMLSerializer().serializeToString(c)).length;
													if (currentLength + cLength > maxLength) {
														parts.push(currentPart.innerHTML);
														currentPart = document.createElement("div");
														currentPart.style.cssText = node.style.cssText;
														currentLength = 0;
														initNode(child);
													}
													addNodeToCurrentPartChild(c);
												});
											} else {
												if (currentLength + childLength > maxLength) {
														parts.push(currentPart.innerHTML);
														currentPart = document.createElement("div");
														currentPart.style.cssText = node.style.cssText;
														currentLength = 0;
												}
												addNodeToCurrentPart(child);
											}
										});

										if (currentPart.innerHTML) {
											parts.push(currentPart.innerHTML);
										}

										return parts;
									}

									var parts = splitNodes(container, maxLength),
										bS = !0;
									var promises = parts.map(function(part, index) {
										return new Promise(function(resolve) {
											var tempDiv = document.createElement("div");
											tempDiv.innerHTML = part;
											if (bgImage) {
												tempDiv.style.backgroundImage = 'url("' + bgImage + '")';
												bgRepeat ? tempDiv.style.backgroundRepeat = 'repeat' : tempDiv.style.backgroundSize = 'cover';
												tempDiv.style.backgroundPosition = 'center';
												tempDiv.style.backgroundAttachment = 'fixed';
											}
											tempDiv.style.backgroundColor = bgColor;
											e.$refs.printThis.appendChild(tempDiv);
											htmlToImage.toBlob(tempDiv, {
												type: "image/webp",
												quality: 0.9
											}).then(function(t) {
												var i = document.createEvent("MouseEvents"),
													s = document.createElement("a");
												s.download = "Finalized_Build_Part_" + (index + 1) + ".webp";
												s.href = window.URL.createObjectURL(t);
												s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
												i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
												s.dispatchEvent(i);
											}).catch(function(err) {
												e.text = "Failed to download the image. Please try again with a different browser.", e.snackbar = !0;
											}).finally(function() {
												e.$refs.printThis.removeChild(tempDiv);
												resolve();
											});
										});
									});
									Promise.all(promises).then(function() {
										e.$refs.printThis.removeAttribute('style');
									});
								}, 1000);
							}
						});
					},
					playBgm: function(e, t, i) {
						if ("undefined" !== typeof bgmPlayer.playerInfo.videoData) {
							var p = this.app.bgmIsPlaying,
								s = bgmPlayer.playerInfo.videoData.video_id,
								o = bgmPlayer.playerInfo.playerState;
							if ("undefined" === typeof this.app.bgmObjectId) this.$set(this.app, "bgmObjectId", e.id);
							if (s == t) {
								if (this.app.bgmObjectId == e.id) {
									if (p) {
										if (o == 2) bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
										else bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o != 2) bgmPlayer.pauseVideo();
									}
								} else {
									if (p) {
										bgmPlayer.stopVideo(), bgmPlayer.playVideo(), this.$set(this.app, "bgmObjectId", e.id);
									} else {
										if (o == 1) bgmPlayer.pauseVideo();
									}
								}
							} else {
								if (p) {
									e.bgmNoLoop ? (bgmPlayer.loadVideoById(t), bgmPlayer.setLoop(!1)) : (bgmPlayer.loadVideoById(t), bgmPlayer.loadPlaylist(t), bgmPlayer.setLoop(!0));
									bgmPlayer.playVideo();
									this.$set(this.app, "bgmObjectId", e.id);
								}
							}
						} else {
							if (i < 10) {
								i++;
								setTimeout(() => {
									this.playBgm(e, t, i);
								}, 200);
							}
						}
					},
					updateScores: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (!this.exceptedScores.includes(coO.id)) {
									if (e.discountOther) {
										for (var b = 0; b < coO.scores.length; b++) {
											var coS = coO.scores[b];
											if (!coS.isNotRecalculatable) {
												if (coS.discountIsOn && coS.discountedFrom == e.id) {
													var coSDiscount = parseInt(coS.value) - coS.discountScore;
													for (var m = 0; m < this.app.pointTypes.length; m++)
														if (this.app.pointTypes[m].id == coS.id) {
															var nC = 0;
															if (coO.isMultipleUseVariable) {
																for (var X = coO.multipleUseVariable, x = 0; x < X; x++) this.app.pointTypes[m].startingSum += coSDiscount;
															} else {
																this.app.pointTypes[m].startingSum += coSDiscount;
															}
															this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
														}
												}
											}
										}
									}
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											var nH = this.app.activated.indexOf(eid);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											this.app.activated.splice(nH, 1);
											t.currentChoices -= 1;
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											this.app.activated.splice(nH, 0, eid);
											t.currentChoices += 1;
											var bE = this.checkRequireds(coS);
											if (bC !== bE) {
												var nC = 0;
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}																	
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScores(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					updateScoresMulC: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + parseInt(e.multipleUseVariable + 1) : e.id;
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.app.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value);
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
												}
											}
											var bC = this.checkRequireds(coS);
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											var bE = !1;
											if (e.id == this.exceptedScores[0]) {
												var fI = this.app.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.app.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bE = this.checkRequireds(coS);
													this.app.activated.splice(this.app.activated.length - 1, 1), t.currentChoices -= 1;
												} else {
													var aFI = this.app.activated[fI].split("/ON#");
													parseInt(aFI[1]) > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.app.activated.splice(fI, 1), t.currentChoices -= 1);
													bE = this.checkRequireds(coS);
													parseInt(aFI[1]) > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.app.activated.splice(fI, 0, eid), t.currentChoices += 1);
												}
											} else {
												var nH = this.app.activated.indexOf(eid);
												this.app.activated.splice(nH, 1);
												t.currentChoices -= 1;
												var bE = this.checkRequireds(coS);
												this.app.activated.splice(nH, 0, eid);
												t.currentChoices += 1;
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulC(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					updateScoresMulS: function(e, t, o, i) {
						var tmpScores = [],
							count = i;
						if (!this.exceptedScores.includes(e.id)) this.exceptedScores.push(e.id);
						var nC = 0,
							eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id;
						for (var f = 0; f < this.app.activated.length; f++) {
							var aF = this.app.activated[f].split("/ON#");
							if ("undefined" !== typeof this.app.comp[aF[0]]) {
								var co = this.app.comp[aF[0]],
									coR = co.type == "app" ? this.app.rows[co.rows] : this.app.backpack[co.rows],
									coO = coR.objects[co.objects],
									nR = this.app.activated.indexOf(eid);
								if (!this.exceptedScores.includes(coO.id)) {
									for (var b = 0; b < coO.scores.length; b++) {
										var coS = coO.scores[b],
											coSValue = coS.discountIsOn ? coS.discountScore : parseInt(coS.value),
											bC = !1, bE = !1;
										if (!coS.isNotRecalculatable) {
											var isActive = coO.isSelectableMultiple ? coS.isActiveMul[coO.multipleUseVariable - 1] : coS.isActive;
											for (var a = 0; a < o.length; a++) {
												for (var n = 0; n < this.app.pointTypes.length; n++) {
													this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum += o[a].value);
												}
											}
											if (e.id == this.exceptedScores[0]) {
												var fI = this.app.activated.findIndex(item => item.split("/ON#")[0] == e.id);
												if (fI == -1) {
													this.app.activated.push(e.id + "/ON#" + -1), t.currentChoices += 1;
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													this.app.activated.splice(this.app.activated.length - 1, 1), t.currentChoices -= 1;
													bE = this.checkRequireds(coS);
												} else {
													var aFI = this.app.activated[fI].split("/ON#");
													aFI[1] > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1]) - 1) : (this.app.activated.splice(fI, 1), t.currentChoices -= 1);
													bC = this.checkRequireds(coS);
													for (var a = 0; a < o.length; a++) {
														for (var n = 0; n < this.app.pointTypes.length; n++) {
															this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
														}
													}
													aFI[1] > 1 ? this.app.activated[fI] = aFI[0] + "/ON#" + (parseInt(aFI[1])) : (this.app.activated.splice(fI, 0, eid), t.currentChoices += 1);
													bE = this.checkRequireds(coS);
												}
											} else {
												this.app.activated.splice(nR, 1);
												t.currentChoices -= 1;
												bC = this.checkRequireds(coS);
												for (var a = 0; a < o.length; a++) {
													for (var n = 0; n < this.app.pointTypes.length; n++) {
														this.app.pointTypes[n].id == o[a].id && (this.app.pointTypes[n].startingSum -= o[a].value);
													}
												}
												this.app.activated.splice(nR, 0, eid);
												t.currentChoices += 1;
												bE = this.checkRequireds(coS);
											}
											if (bC !== bE) {
												if (bC) {
													if (isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum += coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !1;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum += coSValue, coS.isActive = !1, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												} else {
													if (!isActive) {
														this.exceptedScores.push(coO.id);
														tmpScores = [];
														for (var m = 0; m < this.app.pointTypes.length; m++)
															if (this.app.pointTypes[m].id == coS.id) {
																if (coO.isMultipleUseVariable) {
																	for (var X = coO.multipleUseVariable, x = 0; x < X; x++) {
																		this.app.pointTypes[m].startingSum -= coSValue;
																		tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																		for (var ee = 0; ee < coO.multipleUseVariable; ee++) {
																			coS.isActiveMul[ee] = !0;
																		}
																	}
																} else {
																	this.app.pointTypes[m].startingSum -= coSValue, coS.isActive = !0, tmpScores.push({id: this.app.pointTypes[m].id, value: coSValue});
																}
																this.$set(this.app.pointTypeMap, this.app.pointTypes[m].id, this.app.pointTypes[m].startingSum);
															}
													}
												}
												count++;
												this.updateScoresMulS(coO, coR, tmpScores, count);
											}
										}
									}
								}
							}
						}
						if (i == 0) {
							this.$set(this, "exceptedScores", []);
						}
					},
					activateObjectI: function(e) {
						var eID = e.split("/IMG#"),
							eImage = eID.length > 1 ? eID[1] : "";
						eID = eID[0].split("/WORD#");
						var eWord = eID.length > 1 ? eID[1].replaceAll("/CHAR#", ",") : "";
						eID = eID[0].split("/RND#");
						var eRand = eID.length > 1 ? eID[1].split("/AND#") : "";
						eID = eID[0];
						if ("undefined" !== typeof this.app.comp[eID]) {
							var co = this.app.comp[eID],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							var tmpScores = [];
							if (coO.discountOther) {
								if ("undefined" !== typeof coO.discountOperator && "undefined" !== typeof coO.discountValue && "undefined" !== typeof coO.discountGroups)
									for (var c = 0; c < this.app.groups.length; c++)
										for (var d = 0; d < this.app.groups[c].elements.length; d++)
											if ("undefined" !== typeof this.app.comp[this.app.groups[c].elements[d].id]) {
												var coT = this.app.comp[this.app.groups[c].elements[d].id],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												for (var f = 0; f < coTO.scores.length; f++) {
													var coTS = coTO.scores[f];															
													if (coO.discountPointTypes.length === 0 || coO.discountPointTypes.includes(coTS.id)) {
														if (!coTS.isNotDiscountable && !coTS.discountIsOn) {
															if (1 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) - parseInt(coO.discountValue);
															else if (2 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) + parseInt(coO.discountValue);
															else if (3 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) * coO.discountValue;
															else if (4 == coO.discountOperator) coTS.discountScore = parseInt(coTS.value) / coO.discountValue;
															if (coO.discountLowLimitIsOn && "undefined" !== typeof coO.discountLowLimit) coTS.discountScore = coTS.discountScore < coO.discountLowLimit ? parseInt(coO.discountLowLimit) : coTS.discountScore;
															if (coO.discountShow) this.$set(coTS, "discountShow", coO.discountShow), this.$set(coTS, "discountBeforeText", coO.discountBeforeText), this.$set(coTS, "discountAfterText", coO.discountAfterText);
															this.$set(coTS, "discountIsOn", true);
															this.$set(coTS, "discountedFrom", coO.id);
														}
													}
												}
											}
							}
							for (var h = 0; h < coO.scores.length; h++) {
								var coS = coO.scores[h];
								for (var j = 0; j < this.app.pointTypes.length; j++) {
									if (this.app.pointTypes[j].id == coS.id) {
										this.checkRequireds(coS) && !coS.isActive && (this.app.pointTypes[j].startingSum -= (coS.discountIsOn ? coS.discountScore : parseInt(coS.value)), coS.isActive = !0, tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore : parseInt(coS.value)}), this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum));
									}
								}
							}
							this.app.activated.push(eID), coO.isActive = !0, coR.currentChoices += 1;
							if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice) {
								if (coO.isActivateRandom && "undefined" !== typeof coO.isActivateRandom) {
									if (eRand == "") {
										var y = coO.activateThisChoice.split(","),
											RD = y.slice(),
											rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
											nAR = parseInt(coO.numActivateRandom) > rd.length ? rd.length : parseInt(coO.numActivateRandom);
										this.$set(coO, 'activatedRandom', []);
										var rdS = new Set();
										for (var v = 0; v < rd.length; v++) {
											if ("undefined" !== typeof this.app.comp[rd[v]]) {
												var coT = this.app.comp[rd[v]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!this.checkRequireds(coTO)) {
													var rdV = rd[v];
													rd.splice(v, 1), rd.push(rdV);
												}
											}
										}
										for (var v = rd.length - 1; v >= 0; v--) rdS.add(rd[v]);
										rd = [...rdS].reverse();
										coO.activatedRandom = rd.slice(0, nAR);
										for (var v = 0; v < nAR; v++) {
											var aRM = coO.activatedRandom[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[aRM[0]]) {
												var coT = this.app.comp[aRM[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
									} else {
										var rd = eRand.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/RON#")[0]));
										this.$set(coO, "activatedRandom", rd);
										for (var v = 0; v < rd.length; v++) {
											var aRM = coO.activatedRandom[v].split("/RON#");
											if ("undefined" !== typeof this.app.comp[aRM[0]]) {
												var coT = this.app.comp[aRM[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
									}
								} else {
									var y = coO.activateThisChoice.split(",");
									var RD = y.slice(),
										rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
										nrd = RD.filter(item => !this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
									for (var v = 0; v < rd.length; v++) {
										var rdV = rd[v].split("/ON#");
										if ("undefined" !== typeof this.app.comp[rdV[0]]) {
											var coT = this.app.comp[rdV[0]],
												coTR = this.app.rows[coT.rows],
												coTO = coTR.objects[coT.objects];
											if (!coTO.isAllowDeselect) {
												if (coTO.isMultipleUseVariable) {
													if (coO.isMultipleUseVariable) {
														for (var E = 0; E < Math.abs(coO.multipleUseVariable); E++) {
															for (var ee = rd[v].split("/ON#")[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
													} else {
														for (var ee = rdV[1], x = 0; x < Math.abs(ee); x++) {
															if (ee > 0) {
																coTO.numMultipleTimesMinus++;
															} else if (ee < 0) {
																coTO.numMultipleTimesMinus--;
															}
														}
													}
												}
												coTO.forcedActivated = !0;
											}
										}
									}
									for (var v = 0; v < nrd.length; v++) {
										var nrdV = nrd[v].split("/ON#");
										if ("undefined" !== typeof this.app.comp[nrdV[0]]) {
											var coT = this.app.comp[nrdV[0]],
												coTR = this.app.rows[coT.rows],
												coTO = coTR.objects[coT.objects];
											if (coTO.isSelectableMultiple) {
												if ("undefined" === typeof coO.cancelForcedActivated) this.$set(coO, "cancelForcedActivated", []);
												coO.cancelForcedActivated.push(coTO.id + "/ON#" + nrdV[1]);
											}
										}
									}
								}
							}
							this.updateScores(coO, coR, tmpScores, 0);
							if (coO.addToAllowChoice)
								for (var m = 0; m < this.app.rows.length; m++)
									if (coO.idOfAllowChoice == this.app.rows[m].id) {
										this.app.rows[m].allowedChoices += coO.numbAddToAllowChoice, isNaN(this.app.rows[m].allowedChoicesChange) && (this.app.rows[m].allowedChoicesChange = 0), this.app.rows[m].allowedChoicesChange += coO.numbAddToAllowChoice;
									}
							if (coO.changeBackground) {
								if (coO.changeBgImage) {
									var a = this.app.styling.backgroundImage;
									this.$set(this.app.styling, "backgroundImage", coO.bgImage);
									this.$set(coO, "bgImage", a);
								} else {
									var a = this.app.styling.backgroundColor;
									this.$set(this.app.styling, "backgroundColor", coO.changedBgColorCode);
									this.$set(coO, "changedBgColorCode", a);
								}
							}
							if (coO.changePointBar) {
								if (coO.changeBarBgColorIsOn) {
									var a = this.app.styling.barBackgroundColor;
									this.$set(this.app.styling, "barBackgroundColor", coO.changedBarBgColor);
									this.$set(coO, "changedBarBgColor", a);
								}
								if (coO.changeBarTextColorIsOn) {
									var a = this.app.styling.barTextColor;
									this.$set(this.app.styling, "barTextColor", coO.changedBarTextColor);
									this.$set(coO, "changedBarTextColor", a);
								}
								if (coO.changeBarBgColorIsOn) {
									var a = this.app.styling.barIconColor;
									this.$set(this.app.styling, "barIconColor", coO.changedBarIconColor);
									this.$set(coO, "changedBarIconColor", a);
								}
							}
							if (coO.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
								if (coO.bgmId) {
									if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
									this.app.bgmIsPlaying = !0;
									this.playBgm(coO, coO.bgmId, 0);
								}
							}
							if (coO.muteBgm && "undefined" !== typeof bgmPlayer) {
								if ("undefined" !== typeof bgmPlayer.mute) {
									bgmPlayer.mute();
								}
							}
							if (coO.isImageUpload) {
								coO.defaultImage = "undefined" === typeof coO.image ? "" : coO.image;
								coO.image = eImage.replaceAll("/CHAR#", ",");
							}
							if (coO.textfieldIsOn)
								for (var m = 0; m < this.app.words.length; m++) this.app.words[m].id == coO.idOfTheTextfieldWord && (coO.customTextfieldIsOn ? (this.app.words[m].replaceText = eWord, coO.wordChangeSelect = eWord) : this.app.words[m].replaceText = coO.wordChangeSelect), this.$set(this.app.wordMap, this.app.words[m].id, this.app.words[m].replaceText);
						}
					},
					selectedOneMoreI: function(e) {
						var eID = e.split("/RND#"),
							eRand = eID.length > 1 ? eID[1].split("/AND#") : "";
						eID = eID[0];
						if ("undefined" !== typeof this.app.comp[eID]) {
							var s = !0;
							var co = this.app.comp[eID],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							coO.multipleUseVariable = "undefined" === typeof coO.multipleUseVariable ? 0 : coO.multipleUseVariable;
							coO.numMultipleTimesPluss > coO.multipleUseVariable ? (coO.multipleUseVariable++, this.$set(coO, "selectedThisManyTimesProp", coO.multipleUseVariable), this.$set(this.app.objectMap, coO.id, coO.multipleUseVariable)) : s = !1;
							if (s) {
								var tmpScores = [];
								for (var h = 0; h < coO.scores.length; h++) {
									var coS = coO.scores[h],
										k = coO.multipleUseVariable;
									for (var j = 0; j < this.app.pointTypes.length; j++) {
										if (this.app.pointTypes[j].id == coS.id) {
											var tmpValue = coS.multiplyByTimes ? k : 1;
											if ("undefined" === typeof coS.isActiveMul) this.$set(coS, "isActiveMul", []);
											if (this.checkRequireds(coS) && !coS.isActiveMul[k - 1]) {
												this.app.pointTypes[j].startingSum -= (coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue);
												coS.isActiveMul[k - 1] = !0;
												tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue});
												this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum);
											}
										}
									}
								}
								if (coO.isActive == !1) {
									coO.isActive = !0, coR.currentChoices += 1, this.app.activated.push(coO.id + "/ON#" + coO.multipleUseVariable);
									if (coO.backpackBtnRequirement) {
										if ("undefined" === typeof this.app.btnBackpackIsOn) this.$set(this.app, "btnBackpackIsOn", 0);
										this.$set(this.app, "btnBackpackIsOn", this.app.btnBackpackIsOn + 1);
									}
									if (coO.changeBackground) {
										if (coO.changeBgImage) {
											var a = this.app.styling.backgroundImage;
											this.$set(this.app.styling, "backgroundImage", coO.bgImage);
											this.$set(coO, "bgImage", a);
										} else {
											var a = this.app.styling.backgroundColor;
											this.$set(this.app.styling, "backgroundColor", coO.changedBgColorCode);
											this.$set(coO, "changedBgColorCode", a);
										}
									}
									if (coO.setBgmIsOn && "undefined" !== typeof bgmPlayer) {
										if (coO.bgmId) {
											if ("undefined" === typeof this.app.bgmIsPlaying) this.$set(this.app, "bgmIsPlaying", !1);
											this.app.bgmIsPlaying = !0;
											this.playBgm(coO, coO.bgmId, 0);
										}
									}
								} else {
									this.$set(this.app.activated, this.app.activated.indexOf(coO.id + "/ON#" + (coO.multipleUseVariable - 1)), (coO.id + "/ON#" + coO.multipleUseVariable));
								}
								if (coO.activateOtherChoice && "undefined" !== typeof coO.activateThisChoice) {
									if (coO.isActivateRandom && "undefined" !== typeof coO.isActivateRandom) {
										if (eRand == "") {
											if (coO.multipleUseVariable == 1) {
												var y = coO.activateThisChoice.split(",");
												var RD = y.slice(),
													rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
												var rdS = new Set();
												for (var v = 0; v < rd.length; v++) {
													if ("undefined" !== typeof this.app.comp[rd[v]]) {
														var coT = this.app.comp[rd[v]],
															coTR = this.app.rows[coT.rows],
															coTO = coTR.objects[coT.objects];
														if (!this.checkRequireds(coTO)) {
															var rdV = rd[v];
															rd.splice(v, 1), rd.push(rdV);
														}
													}
												}
												for (var v = rd.length - 1; v >= 0; v--) rdS.add(rd[v]);
												rd = [...rdS].reverse();
												if ("undefined" === typeof coO.activatedRandomMul) this.$set(coO, "activatedRandomMul", []);
												var preNAR = 0,
													nAR = [];
												for (var v = 0; v < parseInt(coO.numActivateRandom); v++) {
													nAR[v] = rd.length / (parseInt(coO.numActivateRandom) * (v + 1)) < 1 ? rd.length % (parseInt(coO.numActivateRandom) * (v + 1)) : parseInt(coO.numActivateRandom);
													coO.activatedRandomMul.push(rd.slice(preNAR, nAR[v] + preNAR));
													for (var f = 0; f < nAR[v] - preNAR; f++) {
														var aRM = coO.activatedRandomMul[v][f].split("/ON#");
														if ("undefined" !== typeof this.app.comp[aRM[0]]) {
															var coT = this.app.comp[aRM[0]],
																coTR = this.app.rows[coT.rows],
																coTO = coTR.objects[coT.objects];
															if (!coTO.isAllowDeselect) {
																if (coTO.isMultipleUseVariable) {
																	for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
																		if (ee > 0) {
																			coTO.numMultipleTimesMinus++;
																		} else if (ee < 0) {
																			coTO.numMultipleTimesMinus--;
																		}
																	}
																}
																coTO.forcedActivated = !0;
															}
														}
													}
													preNAR += nAR[v];
												}
											}
										} else {
											if ("undefined" === typeof coO.activatedRandomMul) this.$set(coO, "activatedRandomMul", []);
											var nR = (coO.multipleUseVariable - 1) * coO.numActivateRandom,
												rd = eRand.splice(nR, nR + coO.numActivateRandom);
											coO.activatedRandomMul.push(rd);
											for (var v = 0; v < coO.activatedRandomMul[coO.multipleUseVariable - 1].length; v++) {
												var aRM = coO.activatedRandomMul[coO.multipleUseVariable - 1][v].split("/RON#");
												if ("undefined" !== typeof this.app.comp[aRM[0]]) {
													var coT = this.app.comp[aRM[0]],
														coTR = this.app.rows[coT.rows],
														coTO = coTR.objects[coT.objects];
													if (!coTO.isAllowDeselect && this.newActivatedList.some(item => item.split("/ON#")[0] == coTO.id)) {
														if (coTO.isMultipleUseVariable) {
															for (var ee = aRM[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
														coTO.forcedActivated = !0;
													}
												}
											}
										}
									} else {
										var y = coO.activateThisChoice.split(",");
										var RD = y.slice(),
											rd = RD.filter(item => this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0])),
											nrd = RD.filter(item => !this.newActivatedList.some(activatedItem => activatedItem.split("/ON#")[0] == item.split("/ON#")[0]));
										for (var v = 0; v < rd.length; v++) {
											var rdV = rd[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[rdV[0]]) {
												var coT = this.app.comp[rdV[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (!coTO.isAllowDeselect) {
													if (coTO.isMultipleUseVariable) {
														if (coO.isMultipleUseVariable) {
															for (var E = 0; E < Math.abs(coO.multipleUseVariable); E++) {
																for (var ee = rd[v].split("/ON#")[1], x = 0; x < Math.abs(ee); x++) {
																	if (ee > 0) {
																		coTO.numMultipleTimesMinus++;
																	} else if (ee < 0) {
																		coTO.numMultipleTimesMinus--;
																	}
																}
															}
														} else {
															for (var ee = rdV[1], x = 0; x < Math.abs(ee); x++) {
																if (ee > 0) {
																	coTO.numMultipleTimesMinus++;
																} else if (ee < 0) {
																	coTO.numMultipleTimesMinus--;
																}
															}
														}
													}
													coTO.forcedActivated = !0;
												}
											}
										}
										for (var v = 0; v < nrd.length; v++) {
											var nrdV = nrd[v].split("/ON#");
											if ("undefined" !== typeof this.app.comp[nrdV[0]]) {
												var coT = this.app.comp[nrdV[0]],
													coTR = this.app.rows[coT.rows],
													coTO = coTR.objects[coT.objects];
												if (coTO.isSelectableMultiple) {
													if ("undefined" === typeof coO.cancelForcedActivated) this.$set(coO, "cancelForcedActivated", []);
													coO.cancelForcedActivated.push(coTO.id + "/ON#" + nrdV[1]);
												}
											}
										}
									}
								}
								this.updateScoresMulS(coO, coR, tmpScores, 0);
								if (coO.addToAllowChoice) {
									if ("undefined" !== typeof this.app.compR[coO.idOfAllowChoice]) {
										var coT = this.app.compR[coO.idOfAllowChoice],
											coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows];
										coTR.allowedChoices += coO.numbAddToAllowChoice, isNaN(coTR.allowedChoicesChange) && (coTR.allowedChoicesChange = 0), coTR.allowedChoicesChange += coO.numbAddToAllowChoice;
									}
								}
							}
						}
					},
					selectedOneLessI: function(e) {
						if ("undefined" !== typeof this.app.comp[e]) {
							var co = this.app.comp[e],
								coR = this.app.rows[co.rows],
								coO = coR.objects[co.objects];
							coO.multipleUseVariable = "undefined" === typeof coO.multipleUseVariable ? 0 : coO.multipleUseVariable;
							coO.numMultipleTimesMinus < coO.multipleUseVariable ? (coO.multipleUseVariable--, this.$set(coO, "selectedThisManyTimesProp", coO.multipleUseVariable), this.$set(this.app.objectMap, coO.id, coO.multipleUseVariable)) : s = !1;
							if (s) {
								var tmpScores = [];
								for (var h = 0; h < coO.scores.length; h++) {
									var coS = coO.scores[h],
										k = Math.abs(coO.multipleUseVariable);
									for (var j = 0; j < this.app.pointTypes.length; j++) {
										if (this.app.pointTypes[j].id == coS.id) {
											var tmpValue = coS.multiplyByTimes ? k : 1;
											if ("undefined" === typeof coS.isActiveMulMinus) this.$set(coS, "isActiveMulMinus", []);
											if (this.checkRequireds(coS) && !coS.isActiveMulMinus[k]) {
												this.app.pointTypes[j].startingSum += (coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue);
												coS.isActiveMulMinus[k] = !0;
												tmpScores.push({id: coS.id, value: coS.discountIsOn ? coS.discountScore * tmpValue : parseInt(coS.value) * tmpValue});
												this.$set(this.app.pointTypeMap, this.app.pointTypes[j].id, this.app.pointTypes[j].startingSum);
											}
										}
									}
								}
								if (coO.isActive == !1) {
									coO.isActive = !0, coR.currentChoices += 1, this.app.activated.push(coO.id + "/ON#" + coO.multipleUseVariable);
								} else {
									this.$set(this.app.activated, this.app.activated.indexOf(coO.id + "/ON#" + (coO.multipleUseVariable + 1)), (coO.id + "/ON#" + coO.multipleUseVariable));
								}
								this.updateScoresMulC(coO, coR, tmpScores, 0);
								if (coO.addToAllowChoice) {
									if ("undefined" !== typeof this.app.compR[coO.idOfAllowChoice]) {
										var coT = this.app.compR[coO.idOfAllowChoice],
											coTR = coT.type == "app" ? this.app.rows[coT.rows] : this.app.backpack[coT.rows];
										coTR.allowedChoices -= coO.numbAddToAllowChoice, isNaN(coTR.allowedChoicesChange) && (coTR.allowedChoicesChange = 0), coTR.allowedChoicesChange += coO.numbAddToAllowChoice;
									}
								}
							}
						}
					},
                    loadActivated: function() {
                        this.$store.commit({
                            type: "cleanActivated"
                        });
						if (this.newActivated.length > 0) {
							var e = this.newActivated.split(",");
							this.newActivatedList = e.map(item => item.split("/IMG#")[0]);
							this.newActivatedList = this.newActivatedList.map(item => item.split("/WORD#")[0]);
							this.newActivatedList = this.newActivatedList.map(item => item.split("/RND#")[0]);
							for (var a = 0; a < e.length; a++) {
								var ea = e[a].split("/ON#");
								if (!this.app.activated.some(item => item.split("/ON#")[0] == ea[0])) {
									if (ea.length > 1) {
										var eaR = ea[1].split("/RND#");
										ea[0] = eaR.length > 1 ? ea[0] + "/RND#" + eaR[1] : ea[0];
										for (var b = 0; b < Math.abs(parseInt(eaR[0])); b++) {
											eaR[0] > 0 ? this.selectedOneMoreI(ea[0]) : this.selectedOneLessI(ea[0]);
										}
									} else {
										this.activateObjectI(ea[0]);
									}
								}
							}
							this.newActivatedList.splice(0);
							this.newActivated = "";
						}
                    },
                    checkRequireds: function(e) {
                        return this.$store.getters.checkRequireds(e)
                    }
                }
            },
            Ut = Nt,
            Ht = (i("c64f"), i("b81c")),
			li = i("ce7e"),
			Yr = i("a722"),
			Jr = i("8860"),
			Xi = i("da13"),
			Ui = i("5d23"),
			Xr = i("34c3"),
			Zr = i("f774"),
            Dt = Object(b["a"])(Ut, a, n, !1, null, null, null),
            Gt = Dt.exports;
        v()(Dt, {
            VBottomNavigation: Ht["a"],
            VBtn: $["a"],
            VCol: S["a"],
			VDivider: li["a"],
            VIcon: Q["a"],
			VLayout: Yr["a"],
            VList: Jr["a"],
            VListItem: Xi["a"],
            VListItemContent: Ui["a"],
            VListItemIcon: Xr["a"],
            VListItemTitle: Ui["c"],
            VNavigationDrawer: Zr["a"],
            VRow: k["a"],
			VSnackbar: tt["a"],
			VTextField: J["a"]
        });
        var Jt = {
                data: function() {
                    return {
                        currentComponent: "appImageCyoaViewer",
                        dialog: !0
                    }
                },
                components: {
                    appImageCyoaViewer: Gt
                },
                computed: {},
                methods: {}
            },
            Yt = Jt,
            Xt = (i("034f"), i("7496")),
            Zt = Object(b["a"])(Yt, o, r, !1, null, null, null),
            Kt = Zt.exports;
        v()(Zt, {
            VApp: Xt["a"]
        });
        var Qt = i("2f62");
        s["a"].use(Qt["a"]);
        var te = new Qt["a"].Store({
                state: {
                    app:

                    // Delete and replace this part with your project if you're pasting it in, leave it here if you have placed your project.json file under index.html.
                    {
                        isEditModeOnAll: !0,
                        isStyleOpen: !1,
                        isPointsOpen: !1,
                        isChoicesOpen: !1,
                        isDesignOpen: !1,
                        isViewerVersion: !1,
                        backpack: [],
						comp: {},
						compR: {},
						compG: {},
						compODG: {},
						compRDG: {},
						tmpRequired: {},
						pointTypeMap: {},
						wordMap: {},
						objectMap: {},
						rowIdLength: 4,
						objectIdLength: 4,
                        words: [],
						wordChangeComplete: !1,
                        groups: [],
						rowDesignGroups: [],
						objectDesignGroups: [],
                        chapters: [],
                        activated: [],
                        rows: [],
                        pointTypes: [],
                        variables: [],
						mdObjects: [],
						printThis: !1,
						autoSaveIsOn: !1,
						autoSaveInterval: null,
						checkDeleteRow: !0,
						checkDeleteObject: !1,
                        defaultRowTitle: "Row",
                        defaultRowText: "This is a row, and inside of it, you can place choices. On both rows and choices Requirements can be placed, which will block a row from being viewed, or make the player unable to select a choice, depending on either Point-types or the Ids of other choices. Point-types can be made in Features then Manage Points. Hovering over buttons will explain what they do. The Design of the project can be changed in 'Modify Design' at the side navigation bar, and private styling for each row can be turned on in the rows Settings. Default text like this can be turned off in Features -> Manage Defaults.",
                        defaultChoiceTitle: "Choice",
                        defaultChoiceText: "This is a Choice, and inside of it, you can place images and text. Scores can be added to it, and have Point-types attached. Addons can be added underneath the image and text. In the Functions at the bottom of the choice, there is an array of different things that can be done. Default text like this can be turned off in Features then Manage Defaults.",
                        defaultBeforePoint: "Cost:",
                        defaultAfterPoint: "points",
                        defaultBeforeReq: "Required:",
                        defaultAfterReq: "choice",
                        defaultAddonTitle: "Addon",
                        defaultAddonText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        styling: {
                            rowTitle: "Times New Roman",
                            rowText: "Times New Roman",
                            objectTitle: "Times New Roman",
                            objectText: "Times New Roman",
                            addonTitle: "Times New Roman",
                            addonText: "Times New Roman",
                            scoreText: "Times New Roman",
                            rowTitleTextSize: 200,
                            rowTextTextSize: 100,
                            objectTitleTextSize: 200,
                            objectTextTextSize: 100,
                            addonTitleTextSize: 200,
                            addonTextTextSize: 100,
                            scoreTextSize: 75,
                            barTextColor: "#000000",
							barIconColor: "#0000008A",
                            barBackgroundColor: "#FFFFFFFF",
                            barTextPadding: 17,
                            barTextMargin: 0,
                            barTextFont: "Times New Roman",
                            barTextSize: 15,
                            barPadding: 0,
                            barMargin: 0,
                            rowTitleColor: "#000000",
                            rowTextColor: "#000000",
                            objectTitleColor: "#000000",
                            objectTextColor: "#000000",
                            addonTitleColor: "#000000",
                            addonTextColor: "#000000",
                            scoreTextColor: "#000000",
                            objectHeight: !0,
                            rowTitleAlign: "center",
                            rowTextAlign: "center",
                            objectTitleAlign: "center",
                            objectTextAlign: "center",
                            addonTitleAlign: "center",
                            addonTextAlign: "center",
                            scoreTextAlign: "center",
                            rowButtonXPadding: 0,
                            rowButtonYPadding: 0,
                            backgroundImage: "",
                            rowBackgroundImage: "",
                            objectBackgroundImage: "",
                            rowBorderImage: "",
                            rowBorderImageRepeat: "stretch",
                            rowBorderImageWidth: 5,
							rowBorderImageSliceTop: 5,
							rowBorderImageSliceBottom: 5,
							rowBorderImageSliceLeft: 5,
							rowBorderImageSliceRight: 5,
                            objectBorderImage: "",
                            objectBorderImageRepeat: "stretch",
                            objectBorderImageWidth: 5,
							objectBorderImageSliceTop: 5,
							objectBorderImageSliceBottom: 5,
							objectBorderImageSliceLeft: 5,
							objectBorderImageSliceRight: 5,
                            backgroundColor: "#FFFFFFFF",
                            objectBgColor: "#FFFFFFFF",
                            rowBgColor: "#FFFFFFFF",
                            rowBgColorIsOn: !1,
                            objectBgColorIsOn: !1,
                            objectImageWidth: 100,
                            rowImageWidth: 100,
                            objectImageMarginTop: 0,
                            objectImageMarginBottom: 0,
                            rowImageMarginTop: 0,
                            objectMargin: 10,
                            rowMargin: 10,
                            rowTextPaddingY: 5,
                            rowTextPaddingX: 10,
                            objectTextPadding: 10,
                            rowBodyMarginTop: 25,
                            rowBodyMarginBottom: 25,
                            rowBodyMarginSides: 1,
                            objectDropShadowH: 0,
                            objectDropShadowV: 0,
                            objectDropShadowSpread: 0,
                            objectDropShadowBlur: 0,
                            objectDropShadowColor: "grey",
                            objectDropShadowIsOn: !1,
                            rowDropShadowH: 0,
                            rowDropShadowV: 0,
                            rowDropShadowSpread: 0,
                            rowDropShadowBlur: 0,
                            rowDropShadowColor: "grey",
                            rowDropShadowIsOn: !1,
                            selFilterBlurIsOn: !1,
                            selFilterBlur: 0,
                            selFilterBrightIsOn: !1,
                            selFilterBright: 100,
                            selFilterContIsOn: !1,
                            selFilterCont: 100,
                            selFilterGrayIsOn: !1,
                            selFilterGray: 0,
                            selFilterHueIsOn: !1,
                            selFilterHue: 0,
                            selFilterInvertIsOn: !1,
                            selFilterInvert: 0,
                            selFilterOpacIsOn: !1,
                            selFilterOpac: 100,
                            selFilterSaturIsOn: !1,
                            selFilterSatur: 1,
                            selFilterSepiaIsOn: !1,
                            selFilterSepia: 0,
                            selBgColorIsOn: !0,
							selOverlayOnImage: !1,
                            selFilterBgColor: "#70FF7EFF",
							selBorderColorIsOn: !1,
							selFilterBorderColor: "#000000FF",
							selCTitleColorIsOn: !1,
							selFilterCTitleColor: "#000000FF",
							selCTextColorIsOn: !1,
							selFilterCTextColor: "#000000FF",
							selATitleColorIsOn: !1,
							selFilterATitleColor: "#000000FF",
							selATextColorIsOn: !1,
							selFilterATextColor: "#000000FF",
                            reqFilterBlurIsOn: !1,
                            reqFilterBlur: 0,
                            reqFilterBrightIsOn: !1,
                            reqFilterBright: 100,
                            reqFilterContIsOn: !1,
                            reqFilterCont: 100,
                            reqFilterGrayIsOn: !1,
                            reqFilterGray: 0,
                            reqFilterHueIsOn: !1,
                            reqFilterHue: 0,
                            reqFilterInvertIsOn: !1,
                            reqFilterInvert: 0,
                            reqFilterOpacIsOn: !0,
                            reqFilterOpac: 50,
                            reqFilterSaturIsOn: !1,
                            reqFilterSatur: 1,
                            reqFilterSepiaIsOn: !1,
                            reqFilterSepia: 0,
                            reqBgColorIsOn: !1,
							reqOverlayOnImage: !1,
                            reqFilterBgColor: "#FFFFFFFF",
							reqBorderColorIsOn: !1,
							reqFilterBorderColor: "#000000FF",
							reqCTitleColorIsOn: !1,
							reqFilterCTitleColor: "#000000FF",
							reqCTextColorIsOn: !1,
							reqFilterCTextColor: "#000000FF",
							reqATitleColorIsOn: !1,
							reqFilterATitleColor: "#000000FF",
							reqATextColorIsOn: !1,
							reqFilterATextColor: "#000000FF",
							reqFilterVisibleIsOn: !1,
                            rowBorderRadiusTopLeft: 0,
                            rowBorderRadiusTopRight: 0,
                            rowBorderRadiusBottomRight: 0,
                            rowBorderRadiusBottomLeft: 0,
                            rowBorderRadiusIsPixels: !0,
                            rowOverflowIsOn: !0,
                            rowBorderIsOn: !1,
                            rowBorderColor: "red",
                            rowBorderStyle: "solid",
                            rowBorderWidth: 2,
                            objectBorderRadiusTopLeft: 0,
                            objectBorderRadiusTopRight: 0,
                            objectBorderRadiusBottomRight: 0,
                            objectBorderRadiusBottomLeft: 0,
                            objectBorderRadiusIsPixels: !0,
                            objectOverflowIsOn: !0,
                            objectBorderIsOn: !1,
                            objectBorderColor: "red",
                            objectBorderStyle: "solid",
                            objectBorderWidth: 2,
                            objectImgBorderRadiusTopLeft: 0,
                            objectImgBorderRadiusTopRight: 0,
                            objectImgBorderRadiusBottomRight: 0,
                            objectImgBorderRadiusBottomLeft: 0,
                            objectImgBorderRadiusIsPixels: !0,
                            objectImgBorderIsOn: !1,
                            objectImgBorderColor: "red",
                            objectImgBorderStyle: "solid",
                            objectImgBorderWidth: 2,
                            rowImgBorderRadiusTopLeft: 0,
                            rowImgBorderRadiusTopRight: 0,
                            rowImgBorderRadiusBottomRight: 0,
                            rowImgBorderRadiusBottomLeft: 0,
                            rowImgBorderRadiusIsPixels: !0,
                            rowImgBorderIsOn: !1,
                            rowImgBorderColor: "red",
                            rowImgBorderStyle: "solid",
                            rowImgBorderWidth: 2,
                            backPackWidth: 1200,
							multiChoiceCounterPosition: 0,
							multiChoiceCounterSize: 170
                        }
                    },
                    objectWidths: [{
                        text: "Row",
                        value: ""
                    }, {
                        text: "1 per row",
                        value: "col-12"
                    }, {
                        text: "11/12",
                        value: "col-sm-11"
                    }, {
                        text: "10/12",
                        value: "col-sm-10"
                    }, {
                        text: "9/12",
                        value: "col-sm-9"
                    }, {
                        text: "8/12",
                        value: "col-sm-8"
                    }, {
                        text: "7/12",
                        value: "col-sm-7"
                    }, {
                        text: "2 per row",
                        value: "col-sm-6"
                    }, {
                        text: "5/12",
                        value: "col-sm-5"
                    }, {
                        text: "3 per Row",
                        value: "col-md-4"
                    }, {
                        text: "4 per Row",
                        value: "col-md-3"
                    }, {
                        text: "5 per Row",
                        value: "w-20"
                    }, {
                        text: "6 per Row",
                        value: "col-lg-2"
                    }, {
                        text: "7 per Row ",
                        value: "w-14"
                    }, {
                        text: "8 per Row ",
                        value: "w-12"
                    }, {
                        text: "9 per Row ",
                        value: "w-11"
                    }, {
                        text: "10 per Row",
                        value: "w-10"
                    }, {
                        text: "11 per Row ",
                        value: "w-9"
                    }, {
                        text: "12 per Row",
                        value: "col-xl-1"
                    }]


                },
                getters: {
                    checkRequireds: function(e, t) {
                        return function(o) {
                            if ("undefined" !== typeof o.requireds)
                                for (var i = 0; i < o.requireds.length; i++) {
                                    var s = !1;
                                    if ("undefined" !== typeof o.requireds[i].requireds ? t.checkRequireds(o.requireds[i]) && (s = !0) : s = !0, s) {
                                        if (o.requireds[i].required) {
											if ("id" == o.requireds[i].type) {
												var ri = o.requireds[i].reqId.split("/ON#");
												if (ri.length > 1) {
													if (!e.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (!e.app.activated.includes(o.requireds[i].reqId)) return !1;
												}
											}
                                            if ("points" == o.requireds[i].type) {
                                                if ("undefined" == typeof o.requireds[i].operator) {
                                                    for (var r = 0; r < e.app.pointTypes.length; r++)
                                                        if (o.requireds[i].reqId == e.app.pointTypes[r].id && o.requireds[i].reqPoints > e.app.pointTypes[r].startingSum) return !1;
                                                } else
                                                    for (var a = 0; a < e.app.pointTypes.length; a++)
                                                        if (o.requireds[i].reqId == e.app.pointTypes[a].id)
                                                            if (isNaN(parseInt(o.requireds[i].reqPoints))) {
                                                                for (var n = 0; n < e.app.pointTypes.length; n++)
                                                                    if (o.requireds[i].startingSum == e.app.pointTypes[n].id) {
                                                                        if (1 == o.requireds[i].operator && e.app.pointTypes[a].startingSum >= e.app.pointTypes[n].startingSum) return !1;
                                                                        if (2 == o.requireds[i].operator && e.app.pointTypes[a].startingSum > e.app.pointTypes[n].startingSum) return !1;
                                                                        if (3 == o.requireds[i].operator && parseInt(e.app.pointTypes[a].startingSum) !== parseInt(e.app.pointTypes[n].startingSum)) return !1;
                                                                        if (4 == o.requireds[i].operator && e.app.pointTypes[a].startingSum < e.app.pointTypes[n].startingSum) return !1;
                                                                        if (5 == o.requireds[i].operator && e.app.pointTypes[a].startingSum <= e.app.pointTypes[n].startingSum) return !1;
                                                                    }
                                                            } else {
                                                                if (1 == o.requireds[i].operator && o.requireds[i].reqPoints >= e.app.pointTypes[a].startingSum) return !1;
                                                                if (2 == o.requireds[i].operator && o.requireds[i].reqPoints > e.app.pointTypes[a].startingSum) return !1;
                                                                if (3 == o.requireds[i].operator && parseInt(o.requireds[i].reqPoints) !== parseInt(e.app.pointTypes[a].startingSum)) return !1;
                                                                if (4 == o.requireds[i].operator && o.requireds[i].reqPoints < e.app.pointTypes[a].startingSum) return !1;
                                                                if (5 == o.requireds[i].operator && o.requireds[i].reqPoints <= e.app.pointTypes[a].startingSum) return !1;
                                                            }
                                            } else if ("or" == o.requireds[i].type) {
												o.requireds[i].orNum = "undefined" === typeof o.requireds[i].orNum ? 1 : o.requireds[i].orNum;
                                                for (var l = 0, c = 0; c < o.requireds[i].orRequired.length; c++) e.app.activated.includes(o.requireds[i].orRequired[c].req) && "" != o.requireds[i].orRequired[c].req && l++;
                                                if (l < o.requireds[i].orNum) return !1;
												else if (o.requireds[i].orNum == 0 && l > 0) return !1;
                                            } else if ("pointCompare" == o.requireds[i].type) {
                                                for (var d = void 0, p = void 0, u = 0; u < e.app.pointTypes.length; u++) o.requireds[i].reqId == e.app.pointTypes[u].id && (d = e.app.pointTypes[u].startingSum);
                                                for (var h = 0; h < e.app.pointTypes.length; h++) o.requireds[i].reqId1 == e.app.pointTypes[h].id && (p = e.app.pointTypes[h].startingSum);
												if ("undefined" !== typeof o.requireds[i].more) {
													for (var cp = 0, a = 0; a < o.requireds[i].more.length; a++) {
														if ("undefined" !== typeof o.requireds[i].more[a].id) {
															for (var s = 0; s < e.app.pointTypes.length; s++) o.requireds[i].more[a].id == e.app.pointTypes[s].id && (cp = e.app.pointTypes[s].startingSum);
														} else {
															cp = o.requireds[i].more[a].points;
														}
														if (1 == o.requireds[i].more[a].operator) p += parseInt(cp);
														else if (2 == o.requireds[i].more[a].operator) p -= parseInt(cp);
														else if (3 == o.requireds[i].more[a].operator) p *= parseInt(cp);
														else if (4 == o.requireds[i].more[a].operator) p /= parseInt(cp);
														else if (5 == o.requireds[i].more[a].operator) p %= parseInt(cp);
													}
												}
                                                if (d <= p && 1 == o.requireds[i].operator) return !1;
                                                if (d != p && 2 == o.requireds[i].operator) return !1;
                                                if (d < p && 3 == o.requireds[i].operator) return !1;
                                                if (d > p && 4 == o.requireds[i].operator) return !1;
                                                if (d >= p && 5 == o.requireds[i].operator) return !1;
                                            } else if ("selFromGroups" == o.requireds[i].type) {
												if ("undefined" !== typeof o.requireds[i].selGroups) {
													o.requireds[i].selFromOperators = "undefined" === typeof o.requireds[i].selFromOperators ? "1" : o.requireds[i].selFromOperators;
													for (var x = 0, f = 0; f < o.requireds[i].selGroups.length; f++)
														if ("undefined" !== e.app.compG[o.requireds[i].selGroups[f]]) {
															var co = e.app.compG[o.requireds[i].selGroups[f]],
																coG = e.app.groups[co.groups],
																z = coG.elements;
																x += e.app.activated.filter(item => z.some(zitem => {if (zitem.id == item.split("/ON#")[0]) {return !0} else return !1})).length;
														}
													if (o.requireds[i].selFromOperators == "1") {
														if (x < o.requireds[i].selNum) return !1;
														else if (o.requireds[i].selNum == 0 && x > 0) return !1;
													} else if (o.requireds[i].selFromOperators == "2") {
														if (x != o.requireds[i].selNum) return !1;
													} else if (o.requireds[i].selFromOperators == "3") {
														if (x > o.requireds[i].selNum) return !1;
														else if (o.requireds[i].selNum == 0 && x > 0) return !1;
													}
												}
											} else if ("selFromRows" == o.requireds[i].type) {
												if ("undefined" !== typeof o.requireds[i].selRows) {
													o.requireds[i].selFromOperators = "undefined" === typeof o.requireds[i].selFromOperators ? "1" : o.requireds[i].selFromOperators;
													for (var x = 0, f = 0; f < o.requireds[i].selRows.length; f++) {
														if ("undefined" !== typeof e.app.compR[o.requireds[i].selRows[f]]) {
															var co = e.app.compR[o.requireds[i].selRows[f]],
																coR = e.app.rows[co.rows];
															x += coR.currentChoices;
														}
													}
													if (o.requireds[i].selFromOperators == "1") {
														if (x < o.requireds[i].selNum) return !1;
														else if (o.requireds[i].selNum == 0 && x > 0) return !1;
													} else if (o.requireds[i].selFromOperators == "2") {
														if (x != o.requireds[i].selNum) return !1;
													} else if (o.requireds[i].selFromOperators == "3") {
														if (x > o.requireds[i].selNum) return !1;
														else if (o.requireds[i].selNum == 0 && x > 0) return !1;
													}
												}
											} else if ("selFromWhole" == o.requireds[i].type) {
												o.requireds[i].selFromOperators = "undefined" === typeof o.requireds[i].selFromOperators ? "1" : o.requireds[i].selFromOperators;
												for (var x = 0, m = 0; m < e.app.rows.length; m++) x += e.app.rows[m].currentChoices;
												if (o.requireds[i].selFromOperators == "1") {
													if (x < o.requireds[i].selNum) return !1;
													else if (o.requireds[i].selNum == 0 && x > 0) return !1;
												} else if (o.requireds[i].selFromOperators == "2") {
													if (x != o.requireds[i].selNum) return !1;
												} else if (o.requireds[i].selFromOperators == "3") {
													if (x > o.requireds[i].selNum) return !1;
													else if (o.requireds[i].selNum == 0 && x > 0) return !1;
												}
											} else if ("gid" == o.requireds[i].type) {
												if ("undefined" !== typeof e.app.compGR[o.requireds[i].reqId]) {
													var co = e.app.compGR[o.requireds[i].reqId],
														cGR = e.app.globalRequirements[co.globalRequirements];
													if (!t.checkRequireds(cGR)) return !1;
												}
											}
                                        }
                                        if (!o.requireds[i].required) {
											if ("id" == o.requireds[i].type) {
												var ri = o.requireds[i].reqId.split("/ON#");
												if (ri.length > 1) {
													if (e.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (e.app.activated.includes(o.requireds[i].reqId)) return !1;
												}
											} else if ("or" == o.requireds[i].type) {
												o.requireds[i].orNum = "undefined" === typeof o.requireds[i].orNum ? 1 : o.requireds[i].orNum;
                                                for (var l = 0, c = 0; c < o.requireds[i].orRequired.length; c++) e.app.activated.includes(o.requireds[i].orRequired[c].req) || "" == o.requireds[i].orRequired[c].req || l++;
                                                if (l < o.requireds[i].orNum) return !1;
                                            }
                                        }
                                    }
                                }
                            return !0;
                        }
                    }
                },
                mutations: {
                    loadApp: function(t, e) {
                        t.app = e;
                    },
                    cleanActivated: function(e) {
						function checkRequireds(t) {
							if ("undefined" !== typeof t.requireds)
								for (var i = 0; i < t.requireds.length; i++) {
									var s = !1;
									if ("undefined" !== typeof t.requireds[i].requireds ? checkRequireds(t.requireds[i]) && (s = !0) : s = !0, s) {
										if (t.requireds[i].required) {
											if ("id" == t.requireds[i].type) {
												var ri = t.requireds[i].reqId.split("/ON#");
												if (ri.length > 1) {
													if (!e.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (!e.app.activated.includes(t.requireds[i].reqId)) return !1;
												}
											}
											if ("points" == t.requireds[i].type) {
												if ("undefined" == typeof t.requireds[i].operator) {
													for (var r = 0; r < e.app.pointTypes.length; r++)
														if (t.requireds[i].reqId == e.app.pointTypes[r].id && t.requireds[i].reqPoints > e.app.pointTypes[r].startingSum) return !1;
												} else
													for (var a = 0; a < e.app.pointTypes.length; a++)
														if (t.requireds[i].reqId == e.app.pointTypes[a].id)
															if (isNaN(parseInt(t.requireds[i].reqPoints))) {
																for (var n = 0; n < e.app.pointTypes.length; n++)
																	if (t.requireds[i].startingSum == e.app.pointTypes[n].id) {
																		if (1 == t.requireds[i].operator && e.app.pointTypes[a].startingSum >= e.app.pointTypes[n].startingSum) return !1;
																		if (2 == t.requireds[i].operator && e.app.pointTypes[a].startingSum > e.app.pointTypes[n].startingSum) return !1;
																		if (3 == t.requireds[i].operator && parseInt(e.app.pointTypes[a].startingSum) !== parseInt(e.app.pointTypes[n].startingSum)) return !1;
																		if (4 == t.requireds[i].operator && e.app.pointTypes[a].startingSum < e.app.pointTypes[n].startingSum) return !1;
																		if (5 == t.requireds[i].operator && e.app.pointTypes[a].startingSum <= e.app.pointTypes[n].startingSum) return !1;
																	}
															} else {
																if (1 == t.requireds[i].operator && t.requireds[i].reqPoints >= e.app.pointTypes[a].startingSum) return !1;
																if (2 == t.requireds[i].operator && t.requireds[i].reqPoints > e.app.pointTypes[a].startingSum) return !1;
																if (3 == t.requireds[i].operator && parseInt(t.requireds[i].reqPoints) !== parseInt(e.app.pointTypes[a].startingSum)) return !1;
																if (4 == t.requireds[i].operator && t.requireds[i].reqPoints < e.app.pointTypes[a].startingSum) return !1;
																if (5 == t.requireds[i].operator && t.requireds[i].reqPoints <= e.app.pointTypes[a].startingSum) return !1;
															}
											} else if ("or" == t.requireds[i].type) {
												t.requireds[i].orNum = "undefined" === typeof t.requireds[i].orNum ? 1 : t.requireds[i].orNum;
												for (var l = 0, c = 0; c < t.requireds[i].orRequired.length; c++) e.app.activated.includes(t.requireds[i].orRequired[c].req) && "" != t.requireds[i].orRequired[c].req && l++;
												if (l < t.requireds[i].orNum) return !1;
												else if (t.requireds[i].orNum == 0 && l > 0) return !1;
											} else if ("pointCompare" == t.requireds[i].type) {
												for (var d = void 0, p = void 0, u = 0; u < e.app.pointTypes.length; u++) t.requireds[i].reqId == e.app.pointTypes[u].id && (d = e.app.pointTypes[u].startingSum);
												for (var h = 0; h < e.app.pointTypes.length; h++) t.requireds[i].reqId1 == e.app.pointTypes[h].id && (p = e.app.pointTypes[h].startingSum);
												if ("undefined" !== typeof t.requireds[i].more) {
													for (var cp = 0, a = 0; a < t.requireds[i].more.length; a++) {
														if ("undefined" !== typeof t.requireds[i].more[a].id) {
															for (var s = 0; s < e.app.pointTypes.length; s++) t.requireds[i].more[a].id == e.app.pointTypes[s].id && (cp = e.app.pointTypes[s].startingSum);
														} else {
															cp = t.requireds[i].more[a].points;
														}
														if (1 == t.requireds[i].more[a].operator) p += parseInt(cp);
														else if (2 == t.requireds[i].more[a].operator) p -= parseInt(cp);
														else if (3 == t.requireds[i].more[a].operator) p *= parseInt(cp);
														else if (4 == t.requireds[i].more[a].operator) p /= parseInt(cp);
														else if (5 == t.requireds[i].more[a].operator) p %= parseInt(cp);
													}
												}
												if (d <= p && 1 == t.requireds[i].operator) return !1;
												if (d != p && 2 == t.requireds[i].operator) return !1;
												if (d < p && 3 == t.requireds[i].operator) return !1;
												if (d > p && 4 == t.requireds[i].operator) return !1;
												if (d >= p && 5 == t.requireds[i].operator) return !1;
											} else if ("selFromGroups" == t.requireds[i].type) {
												if ("undefined" !== typeof t.requireds[i].selGroups) {
													t.requireds[i].selFromOperators = "undefined" === typeof t.requireds[i].selFromOperators ? "1" : t.requireds[i].selFromOperators;
													for (var x = 0, f = 0; f < t.requireds[i].selGroups.length; f++)
														if ("undefined" !== e.app.compG[t.requireds[i].selGroups[f]]) {
															var co = e.app.compG[t.requireds[i].selGroups[f]],
																coG = e.app.groups[ct.groups],
																z = coG.elements;
																x += e.app.activated.filter(item => z.some(zitem => {if (zitem.id == item.split("/ON#")[0]) {return !0} else return !1})).length;
														}
													if (t.requireds[i].selFromOperators == "1") {
														if (x < t.requireds[i].selNum) return !1;
														else if (t.requireds[i].selNum == 0 && x > 0) return !1;
													} else if (t.requireds[i].selFromOperators == "2") {
														if (x != t.requireds[i].selNum) return !1;
													} else if (t.requireds[i].selFromOperators == "3") {
														if (x > t.requireds[i].selNum) return !1;
														else if (t.requireds[i].selNum == 0 && x > 0) return !1;
													}
												}
											} else if ("selFromRows" == t.requireds[i].type) {
												if ("undefined" !== typeof t.requireds[i].selRows) {
													t.requireds[i].selFromOperators = "undefined" === typeof t.requireds[i].selFromOperators ? "1" : t.requireds[i].selFromOperators;
													for (var x = 0, f = 0; f < t.requireds[i].selRows.length; f++) {
														if ("undefined" !== typeof e.app.compR[t.requireds[i].selRows[f]]) {
															var co = e.app.compR[t.requireds[i].selRows[f]],
																coR = e.app.rows[ct.rows];
															x += coR.currentChoices;
														}
													}
													if (t.requireds[i].selFromOperators == "1") {
														if (x < t.requireds[i].selNum) return !1;
														else if (t.requireds[i].selNum == 0 && x > 0) return !1;
													} else if (t.requireds[i].selFromOperators == "2") {
														if (x != t.requireds[i].selNum) return !1;
													} else if (t.requireds[i].selFromOperators == "3") {
														if (x > t.requireds[i].selNum) return !1;
														else if (t.requireds[i].selNum == 0 && x > 0) return !1;
													}
												}
											} else if ("selFromWhole" == t.requireds[i].type) {
												t.requireds[i].selFromOperators = "undefined" === typeof t.requireds[i].selFromOperators ? "1" : t.requireds[i].selFromOperators;
												for (var x = 0, m = 0; m < e.app.rows.length; m++) x += e.app.rows[m].currentChoices;
												if (t.requireds[i].selFromOperators == "1") {
													if (x < t.requireds[i].selNum) return !1;
													else if (t.requireds[i].selNum == 0 && x > 0) return !1;
												} else if (t.requireds[i].selFromOperators == "2") {
													if (x != t.requireds[i].selNum) return !1;
												} else if (t.requireds[i].selFromOperators == "3") {
													if (x > t.requireds[i].selNum) return !1;
													else if (t.requireds[i].selNum == 0 && x > 0) return !1;
												}
											} else if ("gid" == t.requireds[i].type) {
												if ("undefined" !== typeof e.app.compGR[t.requireds[i].reqId]) {
													var co = e.app.compGR[t.requireds[i].reqId],
														cGR = e.app.globalRequirements[co.globalRequirements];
													if (!checkRequireds(cGR)) return !1;
												}
											}
										}
										if (!t.requireds[i].required) {
											if ("id" == t.requireds[i].type) {
												var ri = t.requireds[i].reqId.split("/ON#");
												if (ri.length > 1) {
													if (e.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (e.app.activated.includes(t.requireds[i].reqId)) return !1;
												}
											} else if ("or" == t.requireds[i].type) {
												t.requireds[i].orNum = "undefined" === typeof t.requireds[i].orNum ? 1 : t.requireds[i].orNum;
												for (var l = 0, c = 0; c < t.requireds[i].orRequired.length; c++) e.app.activated.includes(t.requireds[i].orRequired[c].req) || "" == t.requireds[i].orRequired[c].req || l++;
												if (l < t.requireds[i].orNum) return !1;
											}
										}
									}
								}
							return !0;
						}
						function checkActivateOther(t) {
							if (t.activateOtherChoice && "undefined" !== typeof t.activateThisChoice) {
								if (t.isActivateRandom) {
									if (t.isSelectableMultiple) {
										for (var b = 0; b < t.multipleUseVariable; b++) {
											for (var c = 0; c < t.activatedRandomMul[b].length; c++) {
												var y = t.activatedRandomMul[b][c].split("/ON#"),
													yCo = e.app.comp[y[0]],
													yCoR = yCo.type == "app" ? e.app.rows[yCo.rows] : e.app.backpack[yCo.rows],
													yCoO = yCoR.objects[yCo.objects];
												if (tmpList.has(y[0])) {
													preserveList.add(y[0]);
													if (!t.isAllowDeselect) forcedList.add(y[0]);
													if (y.length > 1) {
														if (forcedMulList.has(y[0])) forcedMulList.set(y[0], forcedMulList.get(y[0]) + parseInt(y[1]));
														else forcedMulList.set(y[0], parseInt(y[1]));
														if (multiList.has(y[0])) {
															if (!yCoO.notDeselectedByClean) multiList.set(y[0], multiList.get(y[0]) + parseInt(y[1]));
														} else multiList.set(y[0], parseInt(y[1]));
													}
													checkActivateOther(yCoO);
												} else {
													if (y.length > 1) {
														if ("undefined" === typeof t.cancelForcedActivated) t.cancelForcedActivated = [];
														t.cancelForcedActivated.push(y[0] + "/ON#" + y[1]);
													}
												}
											}
										}
									} else {
										if ("undefined" !== typeof t.activatedRandom) {
											for (var b = 0; b < t.activatedRandom.length; b++) {
												var y = t.activatedRandom[b].split("/ON#"),
													yCo = e.app.comp[y[0]],
													yCoR = yCo.type == "app" ? e.app.rows[yCo.rows] : e.app.backpack[yCo.rows],
													yCoO = yCoR.objects[yCo.objects];
												if (tmpList.has(y[0])) {
													preserveList.add(y[0]);
													if (!t.isAllowDeselect) forcedList.add(y[0]);
													if (y.length > 1) {
														if (forcedMulList.has(y[0])) forcedMulList.set(y[0], forcedMulList.get(y[0]) + parseInt(y[1]));
														else forcedMulList.set(y[0], parseInt(y[1]));
														if (multiList.has(y[0])) {
															if (!yCoO.notDeselectedByClean) multiList.set(y[0], multiList.get(y[0]) + parseInt(y[1]));
														} else multiList.set(y[0], parseInt(y[1]));
													}
													checkActivateOther(yCoO);
												} else {
													if (y.length > 1) {
														if ("undefined" === typeof t.cancelForcedActivated) t.cancelForcedActivated = [];
														t.cancelForcedActivated.push(y[0] + "/ON#" + y[1]);
													}
												}
											}
										}
									}
								} else {	
									var y = t.activateThisChoice.split(",");
									for (var b = 0; b < y.length; b++) {
										var yb = y[b].split("/ON#"),
											yCo = e.app.comp[yb[0]],
											yCoR = yCo.type == "app" ? e.app.rows[yCo.rows] : e.app.backpack[yCo.rows],
											yCoO = yCoR.objects[yCo.objects];
										if (tmpList.has(yb[0])) {
											preserveList.add(yb[0]);
											if (!t.isAllowDeselect) forcedList.add(yb[0]);
											if (yb.length > 1) {
												if (forcedMulList.has(yb[0])) forcedMulList.set(yb[0], forcedMulList.get(yb[0]) + parseInt(yb[1]));
												else forcedMulList.set(yb[0], parseInt(yb[1]));
												if (multiList.has(yb[0])) {
													if (!yCoO.notDeselectedByClean) multiList.set(yb[0], multiList.get(yb[0]) + parseInt(yb[1]));
												} else multiList.set(yb[0], parseInt(yb[1]));
											}
											checkActivateOther(yCoO);
										} else {
											if (yb.length > 1) {
												if ("undefined" === typeof t.cancelForcedActivated) t.cancelForcedActivated = [];
												t.cancelForcedActivated.push(yb[0] + "/ON#" + yb[1]);
											}
										}
									}
								}
							}
						}
						function clearChoices(t) {
							if (t.textfieldIsOn)
								for (var m = 0; m < e.app.words.length; m++) e.app.words[m].id == t.idOfTheTextfieldWord && (e.app.words[m].replaceText = "undefined" === typeof t.wordChangeDeselect ? "" : t.wordChangeDeselect), e.app.wordMap[e.app.words[m].id] = e.app.words[m].replaceText;
							if (t.isImageUpload) t.image = t.defaultImage;
							if ("undefined" !== typeof t.activatedRandom) t.activatedRandom.splice(0);
							if ("undefined" !== typeof t.activatedRandomMul) t.activatedRandomMul.splice(0);
							if (t.multiplyPointtypeIsOnCheck) t.multiplyPointtypeIsOnCheck = !1;
							if (t.dividePointtypeIsOnCheck) t.dividePointtypeIsOnCheck = !1;
							if (t.isActive) {
								if (t.changeBackground) {
									if (t.changeBgImage) {
										var c = e.app.styling.backgroundImage;
										e.app.styling.backgroundImage = t.bgImage;
										t.bgImage = c;
									} else {
										var c = e.app.styling.backgroundColor;
										e.app.styling.backgroundColor = t.changedBgColorCode;
										t.changedBgColorCode = c;
									}
								}
								if (t.changePointBar) {
									if (t.changeBarBgColorIsOn) {
										var c = e.app.styling.barBackgroundColor;
										e.app.styling.barBackgroundColor = t.changedBarBgColor;
										t.changedBarBgColor = c;
									}
									if (t.changeBarTextColorIsOn) {
										var c = e.app.styling.barTextColor;
										e.app.styling.barTextColor = t.changedBarTextColor;
										t.changedBarTextColor = c;
									}
									if (t.changeBarIconColorIsOn) {
										var c = e.app.styling.barIconColor;
										e.app.styling.barIconColor = t.changedBarIconColor;
										t.changedBarIconColor = c;
									}
								}
								if (t.setBgmIsOn){
									if (e.app.bgmIsPlaying && "undefined" !== typeof bgmPlayer && e.app.bgmObjectId == t.id) {
										 bgmPlayer.stopVideo(), e.app.bgmObjectId = "", e.app.bgmIsPlaying = !1;
									}
								}
								if (t.isContentHidden) {
									for (var a = 0; a < t.hiddenContentsRow.length; a++) {
										if ("undefined" !== typeof e.app.compR[t.hiddenContentsRow[a]]) {
											var co = e.app.compR[t.hiddenContentsRow[a]],
												coR = co.type == "app" ? e.app.rows[co.rows] : e.app.backpack[co.rows];
											for (var b = 0; b < t.hiddenContentsType.length; b++) {
												if (t.hiddenContentsType[b] == "1") coR.objectTitleRemoved = !1;
												else if (t.hiddenContentsType[b] == "2") coR.objectImageRemoved = !1;
												else if (t.hiddenContentsType[b] == "3") coR.objectTextRemoved = !1;
												else if (t.hiddenContentsType[b] == "4") coR.objectScoreRemoved = !1;
												else if (t.hiddenContentsType[b] == "5") coR.objectRequirementRemoved = !1;
												else if (t.hiddenContentsType[b] == "6") coR.addonTitleRemoved = !1;
												else if (t.hiddenContentsType[b] == "7") coR.addonImageRemoved = !1;
												else if (t.hiddenContentsType[b] == "8") coR.addonTextRemoved = !1;
											}
										}
									}
								}
								if ("undefined" !== typeof t.cancelForcedActivated) t.cancelForcedActivated.splice(0);
							}
							t.isActive = !1;
						}
						var tmpList = new Set(e.app.activated.map(item => item.split("/ON#")[0])),
							preserveList = new Set(),
							forcedList = new Set(),
							multiList = new Map(),
							forcedMulList = new Map();
						e.app.activated.splice(0), e.app.mdObjects.splice(0);
						for (const item of tmpList) {
							if ("undefined" !== typeof e.app.comp[item]) {
								var co = e.app.comp[item],
									coR = co.type == "app" ? e.app.rows[co.rows] : e.app.backpack[co.rows],
									coO = coR.objects[co.objects];
								if (coO.notDeselectedByClean) {
									if (coO.isSelectableMultiple && coO.isMultipleUseVariable) multiList.set(coO.id, coO.multipleUseVariable);
									preserveList.add(coO.id);
									checkActivateOther(coO);
								}
							}
						}
                        for (var o = 0; o < e.app.rows.length; o++) {
							e.app.rows[o].isEditModeOn = !1;
							e.app.rows[o].allowedChoicesChange > 0 && (e.app.rows[o].allowedChoices -= e.app.rows[o].allowedChoicesChange, e.app.rows[o].allowedChoicesChange = 0);
							for (var t = 0; t < e.app.rows[o].objects.length; t++) {
								for (var r = 0; r < e.app.rows[o].objects[t].scores.length; r++) {
									if (e.app.rows[o].objects[t].isSelectableMultiple) {
										if (e.app.rows[o].objects[t].isMultipleUseVariable) {
											if (e.app.rows[o].objects[t].multipleUseVariable < 0) {
												for (var k = 0; k <= Math.abs(e.app.rows[o].objects[t].multipleUseVariable) - 1; k++) {
													e.app.rows[o].objects[t].scores[r].isActiveMulMinus[k] = !1;
												}
											} else {												
												for (var k = 0; k <= e.app.rows[o].objects[t].multipleUseVariable - 1; k++) {
													e.app.rows[o].objects[t].scores[r].isActiveMul[k] = !1;
												}
											}
										}
									} else {
										e.app.rows[o].objects[t].scores[r].isActive = !1;
									}
									e.app.rows[o].objects[t].scores[r].discountIsOn = !1;
									if (e.app.rows[o].objects[t].scores[r].setValue) e.app.rows[o].objects[t].scores[r].setValue = !1;
								}
								e.app.rows[o].objects[t].forcedActivated = !1;
								if (e.app.rows[o].objects[t].isSelectableMultiple) {
									if (e.app.rows[o].objects[t].isMultipleUseVariable)
										e.app.rows[o].objects[t].multipleUseVariable = 0, e.app.rows[o].objects[t].selectedThisManyTimesProp = 0, e.app.rows[o].objects[t].numMultipleTimesMinus = e.app.rows[o].objects[t].initMultipleTimesMinus, e.app.objectMap[e.app.rows[o].objects[t].id] = 0;
									else
										for (var a = 0; a < e.app.pointTypes.length; a++) e.app.pointTypes[a].id == e.app.rows[o].objects[t].multipleScoreId && (e.app.rows[o].objects[t].selectedThisManyTimesProp = e.app.pointTypes[a].initValue);
								}
								if (!preserveList.has(e.app.rows[o].objects[t].id)) {
									clearChoices(e.app.rows[o].objects[t]);
								}
							}
							e.app.rows[o].currentChoices = 0;
						}
						for (var a = 0; a < e.app.pointTypes.length; a++) e.app.pointTypes[a].startingSum = e.app.pointTypes[a].initValue, e.app.pointTypeMap[e.app.pointTypes[a].id] = e.app.pointTypes[a].startingSum;
						e.app.wordChangeComplete = !1;
						for (const item of preserveList) {
							if ("undefined" !== typeof e.app.comp[item]) {
								var p = e.app.comp[item],
									pR = p.type == "app" ? e.app.rows[p.rows] : e.app.backpack[p.rows],
									pO = pR.objects[p.objects];
								if(checkRequireds(pO)) {
									if (pO.discountOther)
										if ("undefined" !== typeof pO.discountOperator && "undefined" !== typeof pO.discountValue && "undefined" !== typeof pO.discountGroups)
											for (var a = 0; a < e.app.groups.length; a++)
												for (var b = 0; b < e.app.groups[a].elements.length; b++)
													if ("undefined" !== typeof e.app.comp[e.app.groups[a].elements[b].id]) {
														var co = e.app.comp[e.app.groups[a].elements[b].id],
															coR = co.type == "app" ? e.app.rows[co.rows] : e.app.backpack[co.rows],
															coO = coR.objects[co.objects];
														for (var c = 0; c < coO.scores.length; c++) {
															var coS = coO.scores[c];
															if (pO.discountPointTypes.length === 0 || pO.discountPointTypes.includes(coS.id)) {
																if (!coS.isNotDiscountable && !coS.discountIsOn) {
																	if (1 == pO.discountOperator) coS.discountScore = parseInt(coS.value) - parseInt(pO.discountValue);
																	else if (2 == pO.discountOperator) coS.discountScore = parseInt(coS.value) + parseInt(pO.discountValue);
																	else if (3 == pO.discountOperator) coS.discountScore = parseInt(coS.value) * pO.discountValue;
																	else if (4 == pO.discountOperator) coS.discountScore = parseInt(coS.value) / pO.discountValue;
																	if (pO.discountLowLimitIsOn && "undefined" !== typeof pO.discountLowLimit) coS.discountScore = coS.discountScore < pO.discountLowLimit ? parseInt(pO.discountLowLimit) : coS.discountScore;
																	if (pO.discountShow) e.$set(coS, "discountShow", pO.discountShow), e.$set(coS, "discountBeforeText", pO.discountBeforeText), e.$set(coS, "discountAfterText", pO.discountAfterText);
																	coS.discountIsOn = true;
																	coS.discountedFrom = pO.id;
																}
															}
														}
													}
									if (pO.addToAllowChoice)
										if ("undefined" !== typeof e.app.compR[pO.idOfAllowChoice]) {
											var co = e.app.compR[pO.idOfAllowChoice],
												coR = co.type == "app" ? e.app.rows[co.rows] : e.app.backpack[co.rows];
											coR.allowedChoices += pO.numbAddToAllowChoice, isNaN(coR.allowedChoicesChange) && (coR.allowedChoicesChange = 0), coR.allowedChoicesChange += pO.numbAddToAllowChoice;
										}
									if (pO.isSelectableMultiple) {
										if (pO.isMultipleUseVariable) {
											pO.multipleUseVariable = multiList.get(pO.id);
											pO.selectedThisManyTimesProp = pO.multipleUseVariable;
											e.app.activated.push(pO.id + "/ON#" + pO.multipleUseVariable);
											if (forcedMulList.has(pO.id)) {
												pO.numMultipleTimesMinus = forcedMulList.get(pO.id);
												pO.forcedActivated = !0;
											}
										}
									} else {
										e.app.activated.push(pO.id);
										if (forcedList.has(pO.id)) pO.forcedActivated = !0;
									}
									pR.currentChoices += 1;
								} else {
									preserveList.delete(pO.id);
								}
							}
						}
						for (const item of preserveList) {
							if ("undefined" !== typeof e.app.comp[item]) {
								var p = e.app.comp[item],
									pR = p.type == "app" ? e.app.rows[p.rows] : e.app.backpack[p.rows],
									pO = pR.objects[p.objects];
								if (pO.isSelectableMultiple) {
									if (pO.isMultipleUseVariable) {
										if ("undefined" !== typeof pO.scores) {
											for (var i = 0; i < pO.scores.length; i++) {
												for (var s = 0; s < e.app.pointTypes.length; s++) {
													if (e.app.pointTypes[s].id == pO.scores[i].id) {
														for (var a = 0; a < pO.multipleUseVariable; a++) {
															if (checkRequireds(pO.scores[i]) && !pO.scores[i].isActiveMul[a]) {
																if (pO.scores[i].multiplyByTimes) {
																	e.app.pointTypes[s].startingSum -= (pO.scores[i].discountIsOn ? pO.scores[i].discountScore * (a + 1) : parseInt(pO.scores[i].value) * (a + 1));
																	pO.scores[i].isActiveMul[a] = !0;
																} else {
																	e.app.pointTypes[s].startingSum -= (pO.scores[i].discountIsOn ? pO.scores[i].discountScore : parseInt(pO.scores[i].value));
																	pO.scores[i].isActiveMul[a] = !0;
																}
															}
														}
														e.app.pointTypeMap[e.app.pointTypes[s].id] = e.app.pointTypes[s].startingSum;
													}
												}
											}
										}
									}
								}
								for (var g = 0; g < pO.scores.length; g++) {
									if (checkRequireds(pO.scores[g]) && !pO.scores[g].isActive)
										for (var w = 0; w < e.app.pointTypes.length; w++) e.app.pointTypes[w].id == pO.scores[g].id && (e.app.pointTypes[w].startingSum -= (pO.scores[g].discountIsOn ? pO.scores[g].discountScore : parseInt(pO.scores[g].value)), pO.scores[g].isActive = !0, e.app.pointTypeMap[e.app.pointTypes[w].id] = e.app.pointTypes[w].startingSum);
								}
								if (pO.multiplyPointtypeIsOn) {
									pO.multiplyPointtypeIsOnCheck = !0;
									for (var m = 0; m < e.app.pointTypes.length; m++)
										if (e.app.pointTypes[m].id == pO.pointTypeToMultiply) {
											if (pO.multiplyPointtypeIsId)
												for (var x = 0; x < e.app.pointTypes.length; x++) e.app.pointTypes[x].id == pO.multiplyWithThis && (pO.startingSumAtMultiply = e.app.pointTypes[m].startingSum * e.app.pointTypes[x].startingSum, e.app.pointTypes[m].startingSum *= e.app.pointTypes[x].startingSum);
											else pO.startingSumAtMultiply = e.app.pointTypes[m].startingSum * pO.multiplyWithThis, e.app.pointTypes[m].startingSum *= pO.multiplyWithThis;
											e.app.mdObjects.push(pO);
											e.app.pointTypeMap[e.app.pointTypes[m].id] = e.app.pointTypes[m].startingSum;
										}
								}
								if (pO.dividePointtypeIsOn) {
									pO.dividePointtypeIsOnCheck = !0;
									for (var m = 0; m < e.app.pointTypes.length; m++) e.app.pointTypes[m].id == pO.pointTypeToDivide && (pO.startingSumAtDivide = e.app.pointTypes[m].startingSum / pO.divideWithThis, e.app.pointTypes[m].startingSum /= pO.divideWithThis);
									e.app.mdObjects.push(pO);
									e.app.pointTypeMap[e.app.pointTypes[m].id] = e.app.pointTypes[m].startingSum;
								}
							}
						}
                    },
                    addNewPointType: function(t, e) {
                        t.app.pointTypes.push({
                            id: e.id,
                            name: e.name,
                            startingSum: e.startingSum,
                            initValue: e.initValue,
                            activatedId: e.activatedId,
                            afterText: e.afterText,
                            beforeText: e.name + ":"
                        })
                    },
                    addNewGroup: function(t, e) {
                        t.app.groups.push({
                            id: e.id,
                            rowType: e.rowType,
                            name: e.name,
                            elements: []
                        })
                    },
                    addNewVariable: function(t, e) {
                        t.app.variables.push({
                            id: e.id,
                            isTrue: e.isTrue
                        })
                    },
                    addNewWord: function(t, e) {
                        t.app.words.push({
                            id: e.id,
                            replaceText: e.replaceText
                        })
                    },
                    deleteRow: function(t, e) {
                        t.app.rows.splice(t.app.rows.indexOf(e), 1)
                    },
                    deletePointType: function(t, e) {
                        t.app.pointTypes.splice(t.app.pointTypes.indexOf(e), 1)
                    },
                    deleteGroup: function(t, e) {
                        t.app.groups.splice(t.app.groups.indexOf(e), 1)
                    },
                    deleteVariable: function(t, e) {
                        t.app.variables.splice(t.app.variables.indexOf(e), 1)
                    },
                    deleteWord: function(t, e) {
                        t.app.words.splice(t.app.variables.indexOf(e), 1)
                    }
                },
                actions: {},
                modules: {}
            }),
            ee = i("f309");
        s["a"].use(ee["a"]);
        var ie = new ee["a"]({}),
            se = i("caf9"),
            oe = i("04ef"),
            re = i.n(oe);
        s["a"].use(se["a"]), s["a"].use(ie, {
            iconfont: "mdi"
        }), s["a"].config.productionTip = !1, s["a"].prototype.$sanitize = re.a, new s["a"]({
            store: te,
            vuetify: ie,
            render: function(t) {
                return t(Kt)
            }
        }).$mount("#app")
    },
    "5aea": function(t, e, i) {},
    "5e0a": function(t, e, i) {
        "use strict";
        var s = i("38f6"),
            o = i.n(s);
        o.a
    },
    7137: function(t, e, i) {},
    "742b": function(t, e, i) {
        "use strict";
        var s = i("7137"),
            o = i.n(s);
        o.a
    },
    "7e8b": function(t, e, i) {},
    "8a23": function(t, e, i) {},
    "996b": function(t, e, i) {
        "use strict";
        var s = i("7e8b"),
            o = i.n(s);
        o.a
    },
    a27d: function(t, e, i) {},
    c64f: function(t, e, i) {
        "use strict";
        var s = i("f9a1"),
            o = i.n(s);
        o.a
    },
    f9a1: function(t, e, i) {}
});
//# sourceMappingURL=app.c533aa25.js.map