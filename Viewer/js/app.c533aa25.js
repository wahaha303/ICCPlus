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

    function a(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports
    }
    a.m = t, a.c = s, a.d = function(t, e, i) {
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
    }, a.p = "/";
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
                        "text-align": "center"
                    },
                    style: t.background
                }, [t.app.pointTypes.length > 0 || t.app.backpack.length > 0 || t.app.importedChoicesIsOpen ? i("v-bottom-navigation", {
                    style: t.pointBar,
                    attrs: {
                        "data-html2canvas-ignore": "",
                        fixed: ""
                    }
                }, [i("v-col", [i("v-btn", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.app.importedChoicesIsOpen,
                        expression: "app.importedChoicesIsOpen"
                    }],
                    attrs: {
                        text: "",
                        icon: "",
                        "x-large": "",
                        color: "black"
                    },
					style: t.pointBarIcon,
                    on: {
                        click: function(e) {
                            t.currentComponent = "appActivatedViewer"
                        }
                    }
                }, [i("v-icon", [t._v("mdi-format-list-checks")])], 1)], 1), t._l(t.app.pointTypes, (function(e) {
                    return i("v-col", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" == e.activatedId || t.app.activated.includes(e.activatedId),
                            expression: "\n        score.activatedId == '' || app.activated.includes(score.activatedId)\n      "
                        }],
                        key: e.index,
                        style: t.pointBarText
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
					}) : t._e()])
                })), i("v-col", [i("v-btn", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.app.backpack.length > 0,
                        expression: "app.backpack.length > 0"
                    }],
                    attrs: {
                        text: "",
                        icon: "",
                        "x-large": "",
                        color: "black"
                    },
					style: t.pointBarIcon,
                    on: {
                        click: function(e) {
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
                })), 1)], 1)
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
                    staticClass: "col pa-0"
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
                    staticClass: "row nopadding"
                }, [i("div", {
                    staticClass: "col-6 nopadding"
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
                    staticClass: "col-6 nopadding"
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
                            }, s)) : t_.e()]
                        }
                    }], null, !1, 3206076815)
                }, [i("span", [t._v(t._s(t.row.imageSourceTooltip))])])], 1)]) : t._e(), 3 == t.row.template && t.window.width > 1e3 ? i("div", {
                    staticClass: "row nopadding"
                }, [i("div", {
                    staticClass: "col-6 nopadding"
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
                    staticClass: "col-6 nopadding"
                }, ["" !== t.row.title ? i("h2", {
                    staticClass: "mb-0",
                    style: t.rowTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceRowTitle))
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
                    staticClass: "col nopadding"
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
                            value: t.checkRequireds(e) || (e.isPrivateStyling ? !e.styling.reqFilterVisibleIsOn : !t.styling.reqFilterVisibleIsOn),
                            expression: "checkRequireds(object) || (object.isPrivateStyling ?\n           !object.styling.reqFilterVisibleIsOn : !styling.reqFilterVisibleIsOn)"
                        }],
                        key: e.index,
                        staticClass: "nopadding",
                        class: t.window.width > 500 ? t.window.width > 1e3 ? "" == e.objectWidth ? t.row.objectWidth : e.objectWidth : "col-6" : "col-12"
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
                })], 1)
            },
            c = [],
            h = (i("4160"), i("caad"), i("c975"), i("a434"), i("4d63"), i("ac1f"), i("25f0"), i("2532"), i("5319"), i("1276"), i("159b"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", [t.checkRequireds(t.row) ? i("span", {
                    staticClass: "row pa-0",
                    style: t.objectBackground,
                    on: {
                        click: function(e) {
                            t.row.isInfoRow || t.object.isNotSelectable || t.object.isSelectableMultiple || t.object.forcedActivated || t.object.isButtonObject || t.object.isImageUpload ? t.object.isImageUpload && (t.currentComponent = "appImageUpload") : t.activateObject(t.object, t.row)
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
                            return [t.object.image.length > 0 ? i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : t.object.image.length > 0 ? i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                }) : t._e(), i("span", [i("h3", {
                    staticClass: "mb-0",
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }), t.object.isSelectableMultiple ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: "x-large"
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
                        size: "x-large"
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
                    }, [e.showScore && t.checkRequireds(e) ? i("ObjectScore", {
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
                })), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired ? i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    }) : t._e()], 1)
                })), "" !== t.object.text ? i("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.row.textIsRemoved,
                        expression: "!row.textIsRemoved"
                    }],
                    staticClass: "my-0",
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e(), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "py-0"
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
                }))], 2)], 1) : 2 == t.object.template && t.window.width > 1e3 ? i("v-row", {
                    staticClass: "ma-0 pa-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, [i("v-col", {
                    staticClass: "pa-0 mb-0"
                }, ["" !== t.object.imageSourceTooltip && "undefined" !== typeof t.object.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.object.image.length > 0 ? i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : t.object.image.length > 0 ? i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                }) : t._e()], 1), i("v-col", {
                    staticClass: "pa-1"
                }, [i("h3", {
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }), t.object.isSelectableMultiple ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: "x-large"
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
                        size: "x-large"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.scores, (function(e) {
                    return i("div", {
                        key: e.index
                    }, [e.showScore && t.checkRequireds(e) ? i("ObjectScore", {
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
                })), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired ? i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    }) : t._e()], 1)
                })), "" !== t.object.text ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e()], 2), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pt-0",
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
                }))], 2) : 3 == t.object.template && t.window.width > 1e3 ? i("v-row", {
                    staticClass: "ma-0 pa-0",
                    staticStyle: {
                        width: "100%"
                    }
                }, [i("v-col", {
                    staticClass: "pa-1"
                }, [i("h3", {
                    style: t.objectTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectTitleText, t.sanitizeArg))
                    }
                }), t.object.isSelectableMultiple ? i("v-row", [i("v-spacer"), i("v-btn", {
                    attrs: {
                        disabled: !t.checkRequireds(this.object),
                        icon: ""
                    }
                }, [i("v-icon", {
                    style: t.multiChoiceButton,
                    attrs: {
                        size: "x-large"
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
                        size: "x-large"
                    },
                    on: {
                        click: function(e) {
                            return t.row.isInfoRow ? 0 : t.selectedOneMore(t.object, t.row)
                        }
                    }
                }, [t._v("mdi-plus")])], 1), i("v-spacer")], 1) : t._e(), t._l(t.object.scores, (function(e) {
                    return i("div", {
                        key: e.index
                    }, [e.showScore && t.checkRequireds(e) ? i("ObjectScore", {
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
                })), t._l(t.object.requireds, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0"
                    }, [e.showRequired ? i("v-col", {
                        staticClass: "pa-0",
                        style: t.scoreText,
                        domProps: {
                            innerHTML: t._s(t.$sanitize(t.getChoiceTitle(e), t.sanitizeArg))
                        }
                    }) : t._e()], 1)
                })), "" !== t.object.text ? i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.objectText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceObjectText, t.sanitizeArg))
                    }
                }) : t._e()], 2), i("v-col", {
                    staticClass: "pa-0 mb-0"
                }, ["" !== t.object.imageSourceTooltip && "undefined" !== typeof t.object.imageSourceTooltip ? i("v-tooltip", {
                    attrs: {
                        top: "",
                        "open-delay": "1500"
                    },
                    scopedSlots: t._u([{
                        key: "activator",
                        fn: function(e) {
                            var s = e.on;
                            return [t.object.image.length > 0 ? i("img", t._g({
                                directives: [{
                                    name: "lazy",
                                    rawName: "v-lazy",
                                    value: t.object.image,
                                    expression: "object.image"
                                }],
                                style: "" != t.object.image ? t.objectImage : ""
                            }, s)) : t._e()]
                        }
                    }], null, !1, 69075810)
                }, [i("span", [t._v(t._s(t.object.imageSourceTooltip))])]) : t.object.image.length > 0 ? i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.object.image,
                        expression: "object.image"
                    }],
                    style: "" != t.object.image ? t.objectImage : ""
                }) : t._e()], 1), t._l(t.object.addons, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pt-0",
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
                }))], 2) : t._e()], 1) : t._e(), i(t.currentComponent, {
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
                }, [t._v(t._s(t.text))])])], 1) : t._e()], 1)
            }),
            d = [],
            u = (i("b0c0"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("span", [t.checkRequireds(t.addon) && !t.row.textIsRemoved ? i("div", [i("span", {
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
                            return [t.addon.image.length > 0 ? i("img", t._g({
                                style: t.objectImage,
                                attrs: {
                                    src: t.addon.image
                                }
                            }, s)) : t._e()]
                        }
                    }], null, !1, 4164976176)
                }, [i("span", [t._v(t._s(t.addon.imageSourceTooltip))])]) : t.addon.image.length > 0 ? i("img", {
                    style: t.objectImage,
                    attrs: {
                        src: t.addon.image
                    }
                }) : t._e(), i("span", [i("h4", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "" != t.addon.title,
                        expression: "addon.title != ''"
                    }],
                    style: t.addonTitle,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonTitle, t.sanitizeArg))
                    }
                }), i("p", {
                    staticStyle: {
                        "white-space": "pre-line"
                    },
                    style: t.addonText,
                    domProps: {
                        innerHTML: t._s(t.$sanitize(t.replaceAddonText, t.sanitizeArg))
                    }
                })])], 1)]) : t._e()])
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
                        var t = "width:" + this.styling.objectImageWidth + "%;margin-top:" + this.styling.objectImageMarginTop + "%;margin-bottom:" + this.styling.objectImageMarginBottom + "%;",
                            e = this.styling.objectImgBorderRadiusIsPixels ? "px" : "%";
                        return t += "border-radius: " + this.styling.objectImgBorderRadiusTopLeft + 0 + e + " " + this.styling.objectImgBorderRadiusTopRight + 0 + e + " " + this.styling.objectImgBorderRadiusBottomRight + 0 + e + " " + this.styling.objectImgBorderRadiusBottomLeft + 0 + e + ";", this.styling.objectImgOverflowIsOn && (t += "overflow:hidden;"), this.styling.objectImgBorderIsOn && (t += "border: " + this.styling.objectImgBorderWidth + "px " + this.styling.objectImgBorderStyle + " " + this.styling.objectImgBorderColor + ";"), t
                    },
                    activated: function() {
                        return this.$store.state.app.activated
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    addonTitle: function() {
                        return 'font-family: "' + this.styling.addonTitle + '";font-size: ' + this.styling.addonTitleTextSize + "%;text-align: " + this.styling.addonTitleAlign + ";color: " + this.styling.addonTitleColor + ";"
                    },
                    addonText: function() {
                        return 'font-family: "' + this.styling.addonText + '";font-size: ' + this.styling.addonTextTextSize + "%;text-align: " + this.styling.addonTextAlign + ";color: " + this.styling.addonTextColor + ";"
                    },
                    styling: function() {
                        return this.row.isPrivateStyling ? this.row.styling : this.$store.state.app.styling
                    },
                    replaceAddonTitle: function() {
                        var t = this.addon.title,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
                    },
                    replaceAddonText: function() {
                        var t = this.addon.text,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
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
            j = Object(b["a"])(f, u, g, !1, null, "79c0930d", null),
            T = j.exports;
        v()(j, {
            VTooltip: y["a"]
        });
        var C = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("v-col", {
                    staticClass: "pa-0"
                }, [t.score.showScore && t.isPointtypeActivated ? i("v-row", [i("v-col", {
                    staticClass: "pa-0 ma-0",
                    style: t.scoreText
                }, [i("div", {
                    style: t.pointType.imageOnSide ? "padding-left:3px;padding-right:3px" : "padding-left:1px;padding-right:2px"
                }, [i("p", {
					staticClass: "pa-0 ma-0",
				}, [t.pointType.iconIsOn && !t.pointType.imageOnSide && !t.pointType.imageSidePlacement ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e(), t._v(" " + t._s(t.$sanitize(t.score.beforeText, t.sanitizeArg)) + " "), t.pointType.iconIsOn && t.pointType.imageOnSide && !t.pointType.imageSidePlacement ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e(), t._v(" " + t._s(t.$sanitize((t.score.isRandom ? (t.score.minValue + " ~ " + t.score.maxValue) : t.scoreValue), t.sanitizeArg)) + " "), t.pointType.iconIsOn && !t.pointType.imageOnSide && t.pointType.imageSidePlacement ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e(), t._v(" " + t._s(t.$sanitize(t.score.afterText, t.sanitizeArg)) + " "), t.pointType.iconIsOn && t.pointType.imageOnSide && t.pointType.imageSidePlacement ? i("img", {
                    style: "width:" + t.pointType.iconWidth + "px;height:" + t.pointType.iconHeight + "px;",
                    attrs: {
                        src: t.pointType.image
                    }
                }) : t._e()])])])], 1) : t._e()], 1)
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
                    activated: function() {
                        return this.$store.state.app.activated
                    },
                    isPointtypeActivated: function() {
                        for (var t = 0; t < this.pointTypes.length; t++)
                            if (this.pointTypes[t].id == this.score.id && "" != this.pointTypes[t].activatedId) return !!this.activated.includes(this.pointTypes[t].activatedId);
                        return !0
                    }
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
            S = i("62ad"),
            k = i("0fd9"),
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
                        console.log(t), this.row.image = t, this.autoCompressFlag = true, this.onChange(), this.rowWasChanged(), this.$refs.pictureInput.image ? console.log("Picture loaded.") : console.log("FileReader API not supported: use the <form>, Luke!")
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
                        currentComponent: ""
                    }
                },
                components: {
                    ObjectAddon: T,
                    ObjectScore: R,
                    AppImageUpload: X,
                    PictureInput: M["a"]
                },
                computed: {
                    styling: function() {
                        return this.object.isPrivateStyling ? this.object.styling : this.row.isPrivateStyling ? this.row.styling : this.$store.state.app.styling
                    },
                    objectWidths: function() {
                        return this.$store.state.objectWidths
                    },
                    objectTitle: function() {
                        return 'font-family: "' + this.styling.objectTitle + '";font-size: ' + this.styling.objectTitleTextSize + "%;text-align: " + this.styling.objectTitleAlign + ";color: " + this.styling.objectTitleColor + ";"
                    },
                    multiChoiceText: function() {
                        return 'font-family: "' + this.styling.multiChoiceTextFont + '";color: ' + this.styling.scoreTextColor + ";font-size: " + this.styling.multiChoiceTextSize + "%;"
                    },
                    multiChoiceButton: function() {
                        return "color: " + this.styling.scoreTextColor + ";"
                    },
                    objectText: function() {
                        return 'font-family: "' + this.styling.objectText + '";text-align: ' + this.styling.objectTextAlign + ";font-size: " + this.styling.objectTextTextSize + "%;color: " + this.styling.objectTextColor + ";padding: " + this.styling.objectTextPadding + "px;"
                    },
                    rowBody: function() {
                        var t = "margin-top: 0px;margin-bottom: 0px;" + (this.row.isPrivateStyling ? (this.styling.backgroundImage ? 'background-image: url("' + this.styling.backgroundImage + '");background-color: ' + this.styling.backgroundColor + (this.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : ";background-size: cover;") : "background-color: " + this.styling.backgroundColor + ";" ) : "" );
                        return this.row.isEditModeOn ? t += "margin-left: 1%;margin-right: 1%;" : t += "margin-left: " + this.styling.rowBodyMarginSides + "%;margin-right: " + this.styling.rowBodyMarginSides + "%;", t
                    },
                    findRowTitle: function() {
                        for (var t = "", e = 0; e < this.app.rows.length; e++)
                            if (this.app.rows[e].objects.includes(this.object)) return this.app.rows[e].title;
                        return t
                    },
                    objectBackground: function() {
                        var t = (this.styling.objectBorderImage ? 'border-image: url("' + this.styling.objectBorderImage + '") ' + this.styling.objectBorderImageSliceTop + ' ' + this.styling.objectBorderImageSliceRight + ' ' + this.styling.objectBorderImageSliceBottom + ' ' + this.styling.objectBorderImageSliceLeft + ' / ' + this.styling.objectBorderImageWidth + 'px '+ this.styling.objectBorderImageRepeat + '; border-style: solid; padding: ' + this.styling.objectBorderImageWidth + 'px !important; ' : "") + (this.object.isActive ? "" : (this.styling.objectBackgroundImage ? 'background-image: url("' + this.styling.objectBackgroundImage + '");' + (this.styling.isObjectBackgroundRepeat ? "background-repeat: repeat;" : "background-size: cover;") : "")) + (this.styling.objectBgColorIsOn ? "background-color: " + this.styling.objectBgColor + " ;" : "") + "margin:" + this.styling.objectMargin + "px; " + (this.object.isActive || this.object.isImageUpload && this.object.image.length > 0 ? "background-color: " + this.styling.selFilterBgColor + " !important;" : ""),
                            e = this.styling.objectBorderRadiusIsPixels ? "px" : "%";
                        this.styling.objectGradientIsOn && (t += this.styling.objectGradientIsOn ? ";background-image: linear-gradient(" + this.styling.objectGradient + ");" : ""), 1 == this.object.template || this.row.choicesShareTemplate ? t += "border-radius: " + this.styling.objectBorderRadiusTopLeft + 0 + e + " " + this.styling.objectBorderRadiusTopRight + 0 + e + " " + this.styling.objectBorderRadiusBottomRight + 0 + e + " " + this.styling.objectBorderRadiusBottomLeft + 0 + e + "; " : 2 == this.object.template ? t += "border-radius: " + this.styling.objectBorderRadiusTopLeft + 0 + e + " " + this.styling.objectBorderRadiusBottomLeft + 0 + e + " " + this.styling.objectBorderRadiusBottomRight + 0 + e + " " + this.styling.objectBorderRadiusTopRight + 0 + e + "; " : t += "border-radius: " + this.styling.objectBorderRadiusBottomLeft + 0 + e + " " + this.styling.objectBorderRadiusTopLeft + 0 + e + " " + this.styling.objectBorderRadiusTopRight + 0 + e + " " + this.styling.objectBorderRadiusBottomRight + 0 + e + "; ", this.styling.objectOverflowIsOn && (t += "overflow:hidden;"), this.styling.objectBorderIsOn && (t += "border: " + this.styling.objectBorderWidth + "px " + this.styling.objectBorderStyle + " " + this.styling.objectBorderColor + ";"), t += "filter: ", this.styling.objectDropShadowIsOn && (t += "drop-shadow(" + this.styling.objectDropShadowH + "px " + this.styling.objectDropShadowV + "px " + this.styling.objectDropShadowBlur + "px " + this.styling.objectDropShadowColor + ")");
                        var i = this.checkRequireds(this.object);
                        if ((this.object.isActive || this.object.isSelectableMultiple && this.object.multipleUseVariable > 0) && i) t += this.styling.selFilterBlurIsOn ? "blur(" + this.styling.selFilterBlur + "px)" : "", t += this.styling.selFilterBrightIsOn ? "brightness(" + this.styling.selFilterBright + "%)" : "", t += this.styling.selFilterContIsOn ? "contrast(" + this.styling.selFilterCont + "%)" : "", t += this.styling.selFilterGrayIsOn ? "grayscale(" + this.styling.selFilterGray + "%)" : "", t += this.styling.selFilterHueIsOn ? "hue-rotate(" + this.styling.selFilterHue + "deg)" : "", t += this.styling.selFilterInvertIsOn ? "invert(" + this.styling.selFilterInvert + "%)" : "", t += this.styling.selFilterOpacIsOn ? "opacity(" + this.styling.selFilterOpac + "%)" : "", t += this.styling.selFilterSaturIsOn ? "saturate(" + this.styling.selFilterSatur + ")" : "", t += this.styling.selFilterSepiaIsOn ? "sepia(" + this.styling.selFilterSepia + "%)" : "", this.styling.objectGradientIsOn && (t += ";background-image: linear-gradient(" + this.styling.objectGradientOnSelect + ")");
                        else if (!i) {
                            if (t += this.styling.reqFilterBlurIsOn ? "blur(" + this.styling.reqFilterBlur + "px)" : "", t += this.styling.reqFilterBrightIsOn ? "brightness(" + this.styling.reqFilterBright + "%)" : "", t += this.styling.reqFilterContIsOn ? "contrast(" + this.styling.reqFilterCont + "%)" : "", t += this.styling.reqFilterGrayIsOn ? "grayscale(" + this.styling.reqFilterGray + "%)" : "", t += this.styling.reqFilterHueIsOn ? "hue-rotate(" + this.styling.reqFilterHue + "deg)" : "", t += this.styling.reqFilterInvertIsOn ? "invert(" + this.styling.reqFilterInvert + "%)" : "", t += this.styling.reqFilterOpacIsOn ? "opacity(" + this.styling.reqFilterOpac + "%)" : "", t += this.styling.reqFilterSaturIsOn ? "saturate(" + this.styling.reqFilterSatur + ")" : "", t += this.styling.reqFilterSepiaIsOn ? "sepia(" + this.styling.reqFilterSepia + "%)" : "", t += this.styling.reqBgColorIsOn ? ";background-color: " + this.styling.reqFilterBgColor + " !important" : ";background-color: " + this.styling.objectBgColor + " !important", this.styling.objectGradientIsOn && (t += ";background-image: linear-gradient(" + this.styling.objectGradientOnReq + ")"), this.object.isActive) this.activateObject(this.object, this.row);
                            else if (this.object.isSelectableMultiple)
                                for (var s = 0; s < this.object.numMultipleTimesPluss - this.object.numMultipleTimesMinus; s++) this.selectedOneLess(this.object, this.row);
                            if ((this.object.multiplyPointtypeIsOnCheck || this.object.dividePointtypeIsOnCheck) && this.multiplyOrDivide(this.object), this.object.activateOtherChoice)
                                for (var o = 0; o < this.app.rows.length; o++)
                                    for (var r = 0; r < this.app.rows[o].objects.length; r++) this.app.rows[o].objects[r].id == this.object.activateThisChoice && this.app.rows[o].objects[r].isActive && this.setFalse(this.app.rows[o].objects[r])
                        }
                        return t += ";", t
                    },
                    objectImage: function() {
                        var t = "width:" + this.styling.objectImageWidth + "%;margin-top:" + this.styling.objectImageMarginTop + "%;margin-bottom:" + this.styling.objectImageMarginBottom + "%;";
                        this.styling.objectImgObjectFillIsOn && (t += "px;object-fit:" + this.styling.objectImgObjectFillStyle + ";height:" + this.row.styling.objectImgObjectFillHeight + "px;");
                        var e = this.styling.objectImgBorderRadiusIsPixels ? "px" : "%";
                        return 1 == this.object.template || this.row.choicesShareTemplate ? t += "border-radius: " + this.styling.objectImgBorderRadiusTopLeft + 0 + e + " " + this.styling.objectImgBorderRadiusTopRight + 0 + e + " " + this.styling.objectImgBorderRadiusBottomRight + 0 + e + " " + this.styling.objectImgBorderRadiusBottomLeft + 0 + e + ";" : 2 == this.object.template ? t += "border-radius: " + this.styling.objectImgBorderRadiusTopLeft + 0 + e + " " + this.styling.objectImgBorderRadiusBottomLeft + 0 + e + " " + this.styling.objectImgBorderRadiusBottomRight + 0 + e + " " + this.styling.objectImgBorderRadiusTopRight + 0 + e + "; " : t += "border-radius: " + this.styling.objectImgBorderRadiusBottomLeft + 0 + e + " " + this.styling.objectImgBorderRadiusTopLeft + 0 + e + " " + this.styling.objectImgBorderRadiusTopRight + 0 + e + " " + this.styling.objectImgBorderRadiusBottomRight + 0 + e + "; ", this.styling.objectImgOverflowIsOn && (t += "overflow:hidden;"), this.styling.objectImgBorderIsOn && (t += "border: " + this.styling.objectImgBorderWidth + "px " + this.styling.objectImgBorderStyle + " " + this.styling.objectImgBorderColor + ";"), t
                    },
                    scoreText: function() {
                        return 'font-family: "' + this.styling.scoreText + '";font-size: ' + this.styling.scoreTextSize + "%;text-align: " + this.styling.scoreTextAlign + ";color: " + this.styling.scoreTextColor + ";"
                    },
                    app: function() {
                        return this.$store.state.app
                    },
                    replaceObjectText: function() {
                        var t = this.object.text,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
                    },
                    replaceObjectTitleText: function() {
                        var t = this.object.title,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
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
                    getChoiceTitle: function(t) {
                        var e, i;
                        if (t.showRequired)
                            if ("id" == t.type) {
                                for (e = 0; e < this.app.rows.length; e++)
                                    for (i = 0; i < this.app.rows[e].objects.length; i++)
                                        if (t.reqId == this.app.rows[e].objects[i].id) return t.beforeText + " " + this.app.rows[e].objects[i].title + " " + t.afterText
                            } else if ("points" == t.type) {
                            for (e = 0; e < this.app.pointTypes.length; e++)
                                if (t.reqId == this.app.pointTypes[e].id) return t.beforeText + " " + t.reqPoints + " " + this.app.pointTypes[e].name + " " + t.afterText
                        } else if ("or" == t.type) {
                            for (var s = "", o = 0; o < t.orRequired.length; o++)
                                for (e = 0; e < this.app.rows.length; e++)
                                    for (i = 0; i < this.app.rows[e].objects.length; i++) t.orRequired[o].req == this.app.rows[e].objects[i].id && (s += this.app.rows[e].objects[i].title + ", ");
                            return t.beforeText + " " + s + " " + t.afterText
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
                    activateObject: function(e, t) {
						if (!(e.selectOnce && e.isActive)) {
							for (var g = 0; g < e.scores.length; g++)
								if ("undefined" !== typeof e.scores[g].isRandom && e.scores[g].isRandom && !e.scores[g].setValue) {
									e.scores[g].value = Math.floor(Math.random() * (parseInt(e.scores[g].maxValue) - parseInt(e.scores[g].minValue) + 1)) + parseInt(e.scores[g].minValue);
									e.scores[g].setValue = !0;
									for (var a = 0; a < this.app.pointTypes.length; a++) this.app.pointTypes[a].id == e.scores[g].id && this.app.pointTypes[a].belowZeroNotAllowed && this.app.pointTypes[a].startingSum - parseInt(e.scores[g].value) < 0 && (e.scores[g].setValue = !1);
								}
							var i = this,
								s = this.checkRequireds(e),
								o = this.checkPoints(e);
							var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id
							if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices)
								for (var r = 0; r < t.objects.length; r++) t.objects[r].isActive && t.currentChoices + 1 > t.allowedChoices && this.activateObject(t.objects[r], t);
							if (s && o && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices)) {
								if (this.activated.includes(eid)) {
									for (var a = 0; a < e.scores.length; a++)
										if (this.checkRequireds(e.scores[a]) || e.scores[a].isActive)
											for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += parseInt(e.scores[a].value), e.scores[a].isActive = !1, e.scores[a].setValue = !1);
									var p, ee = 0, EE = 0;
									if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
										if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
											for (v = e.activatedRandom.length - 1; v >= 0; v--)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++)
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
																if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(e.activatedRandom[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																		if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == e.activatedRandom[v].split("/ON#")[0]) {
																			EE = parseInt(e.activatedRandom[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																} else {
																	if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																}
															}
														} else {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
														}
										} else {
											for (p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++)
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == p[v].split("/ON#")[0]) {
																if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(p[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																		if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == p[v].split("/ON#")[0]) {
																			EE = parseInt(p[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																} else {
																	if (ee = p[v].split("/ON#")[1], ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																}
															}
														} else {
															if (this.app.rows[f].objects[b].id == p[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
														}
										}
									}
									if (e.deactivateOtherChoice)
										for (p = e.deactivateThisChoice.split(","), f = 0; f < p.length; f++) {
											for (m = 0; m < this.app.rows.length; m++)
												for (v = 0; v < this.app.rows[m].objects.length; v++) {
													if (this.app.rows[m].objects[v].isSelectableMultiple) {
														if (this.app.rows[m].objects[v].id == p[f].split("/ON#")[0]) {
															if (ee = p[f].split("/ON#")[1], ee > 0) {
																for (var n = 0; n < ee; n++) this.selectedOneMore(this.app.rows[m].objects[v], this.app.rows[m])
															} else if (ee < 0) {
																for (var pp = 0; pp < -1 * ee; pp++) this.selectedOneLess(this.app.rows[m].objects[v], this.app.rows[m])
															}
														}
													} else {
														this.app.rows[m].objects[v].id != p[f] && this.app.rows[m].resultGroupId != p[f] || !this.app.rows[m].objects[v].isActive || this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]);
													}
												}
											for (var l = 0; l < this.app.groups.length; l++)
												if (this.app.groups[l].id == p[f])
													for (m = 0; m < this.app.rows.length; m++)
														for (v = 0; v < this.app.rows[m].objects.length; v++)
															for (var c = 0; c < this.app.rows[m].objects[v].groups.length; c++) this.app.rows[m].objects[v].groups[c].id == p[f] && this.app.rows[m].objects[v].isActive && this.activateObject(this.app.rows[m].objects[v], this.app.rows[m])
										}
									var h = "Scores Updated On: ",
										nH = 0, nh = 0;
									if (this.app.rows.forEach((function(t) {
											t.objects.forEach((function(s) {
												s.scores.forEach((function(o) {
													if (s.isActive && JSON.stringify(o).includes('"' + eid + '"')) {
														nH = i.activated.indexOf(eid)
														var bC = i.checkRequireds(o);
														i.activated.splice(i.activated.indexOf(eid), 1);
														var bE = i.checkRequireds(o);
														i.activated.splice(nH, 0, eid);
														if (bC !== bE) {
															19 == h.length ? h += s.title : h += ", " + s.title;
															if (bC) {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	if (i.app.pointTypes[m].id == o.id) {
																		if (s.isMultipleUseVariable)
																		{
																			for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																				if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) {
																					s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nh++) : i.selectedOneLess(s, t);
																				}
																				else {
																					i.app.pointTypes[m].startingSum += parseInt(o.value);
																				}
																			}
																			if (s.forcedActivated && nh > 0) {
																				if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																				i.app.cancelForcedActivated.push(s.id + "/ON#" + nh);
																			}
																		} else {
																			(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum += parseInt(o.value), o.isActive = !1);
																		}
																	}
															} else {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	for (m = 0; m < i.app.pointTypes.length; m++)
																		if (i.app.pointTypes[m].id == o.id) {
																			if (s.isMultipleUseVariable)
																			{
																				for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																					console.log(i.app);
																					if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) {
																						s.forcedActivated ? (console.log(s), s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated) : i.selectedOneLess(s, t);
																					}
																					else {
																						i.app.pointTypes[m].startingSum -= parseInt(o.value);
																					}
																				}
																				if (s.forcedActivated && nh > 0) {
																					if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																					i.app.cancelForcedActivated.push(s.id + "/ON#" + nh);
																				}
																			} else {
																				(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum -= parseInt(o.value), o.isActive = !0);
																			}
																		}
															}
														}
													}
												}))
											}))
										})), "Scores Updated On: " !== h && (this.text = h + ".", this.snackbar = !0), e.multiplyPointtypeIsOnCheck)
										for (e.multiplyPointtypeIsOnCheck = !1, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToMultiply && (this.app.pointTypes[m].startingSum -= e.startingSumAtMultiply, console.log("Multiply:" + e.startingSumAtMultiply));
									if (e.dividePointtypeIsOnCheck)
										for (e.dividePointtypeIsOnCheck = !1, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToDivide && (this.app.pointTypes[m].startingSum *= e.divideWithThis, console.log("Multiply:"));
									if (e.textfieldIsOn)
										for (m = 0; m < this.app.words.length; m++) this.app.words[m].id == e.idOfTheTextfieldWord && (this.app.words[m].replaceText = e.wordChangeDeselect);
									if (e.addToAllowChoice)
										for (m = 0; m < this.app.rows.length; m++)
											if (e.idOfAllowChoice == this.app.rows[m].id) {
												this.app.rows[m].allowedChoices -= e.numbAddToAllowChoice;
												var d = 0;
												for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && d++;
												if (d > this.app.rows[m].allowedChoices) {
													var u = d - this.app.rows[m].allowedChoices;
													for (v = 0; v < this.app.rows[m].objects.length; v++) u > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), u--)
												}
											} this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1
								} else {
									for (var g = 0; g < e.scores.length; g++)
										if (this.checkRequireds(e.scores[g]) && !e.scores[g].isActive)
											for (var w = 0; w < this.app.pointTypes.length; w++) this.app.pointTypes[w].id == e.scores[g].id && (this.app.pointTypes[w].startingSum -= parseInt(e.scores[g].value), e.scores[g].isActive = !0);
									var f, b, m, v, y, ee = 0;
									if (e.cleanACtivatedOnSelect && !this.cleanActivated()) this.app.activated.splice(0);
									if (e.duplicateRow) {
										this.duplicateRow(e);
									}
									if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice)
									{
										if (e.isActivateRandom && "undefined" !== typeof e.isActivateRandom) {
											y = e.activateThisChoice.split(","); 
											var RD = y.slice(),
												rd = RD.filter(item => !this.activated.includes(item)),
												nAR = e.numActivateRandom > rd.length ? rd.length : e.numActivateRandom;
											this.$set(e, 'activatedRandom', []);
											for (v = rd.length - 1; v > 0; v--) {
												var rnd = Math.floor(Math.random() * (v + 1));
												[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
											}
											e.activatedRandom = rd.slice(0, nAR);
											for (v = 0; v < nAR; v++)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++) {
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
																if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																}
															}
														} else {
															this.app.rows[f].objects[b].id != e.activatedRandom[v] || this.app.rows[f].objects[b].isActive ? this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive && (this.app.rows[f].objects[b].forcedActivated = !0) : (this.app.rows[f].objects[b].forcedActivated = !0, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]));
														}
													}
										} else {
											for (y = e.activateThisChoice.split(","), v = 0; v < y.length; v++)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++) {
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == y[v].split("/ON#")[0]) {
																if (ee = y[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																}
															}
														} else {
															this.app.rows[f].objects[b].id != y[v] || this.app.rows[f].objects[b].isActive ? this.app.rows[f].objects[b].id == y[v] && this.app.rows[f].objects[b].isActive && (this.app.rows[f].objects[b].forcedActivated = !0) : (this.app.rows[f].objects[b].forcedActivated = !0, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]));
														}
													}
										}
									}
									if (e.deactivateOtherChoice)
										for (y = e.deactivateThisChoice.split(","), f = 0; f < y.length; f++) {
											for (m = 0; m < this.app.rows.length; m++)
												for (v = 0; v < this.app.rows[m].objects.length; v++) {
													if (this.app.rows[m].objects[v].isSelectableMultiple) {
														if (this.app.rows[m].objects[v].id == y[f].split("/ON#")[0]) {
															if (ee = y[f].split("/ON#")[1], ee > 0) {
																for (var n = 0; n < ee; n++) {
																	this.app.rows[m].objects[v].numMultipleTimesMinus--;
																	this.selectedOneLess(this.app.rows[m].objects[v], this.app.rows[m]);
																}
															} else if (ee < 0) {
																for (var pp = 0; pp < -1 * ee; pp++) {
																	this.selectedOneMore(this.app.rows[m].objects[v], this.app.rows[m]);
																	this.app.rows[m].objects[v].numMultipleTimesMinus++;
																}
															}
														}
													} else {
														this.app.rows[m].objects[v].id != y[f] && this.app.rows[m].resultGroupId != y[f] || !this.app.rows[m].objects[v].isActive || this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]);
													}
												}
											for (var j = 0; j < this.app.groups.length; j++)
												if (this.app.groups[j].id == y[f])
													for (m = 0; m < this.app.rows.length; m++)
														for (v = 0; v < this.app.rows[m].objects.length; v++)
															for (var T = 0; T < this.app.rows[m].objects[v].groups.length; T++) this.app.rows[m].objects[v].groups[T].id == y[f] && this.app.rows[m].objects[v].isActive && this.activateObject(this.app.rows[m].objects[v], this.app.rows[m])
										}
									var C = "Scores Updated On: ",
										nC = 0;
									if (this.app.rows.forEach((function(t) {
											t.objects.forEach((function(s) {
												s.scores.forEach((function(o) {
													if (s.isActive && JSON.stringify(o).includes('"' + eid + '"')) {
														var bC = i.checkRequireds(o);
														i.activated.push(eid);
														var bE = i.checkRequireds(o);
														i.activated.splice(i.activated.indexOf(eid), 1);
														if (bC !== bE) {
															19 == C.length ? C += s.title : C += ", " + s.title;
															if (bC) {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	if (i.app.pointTypes[m].id == o.id) {
																		if (s.isMultipleUseVariable)
																		{
																			for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																				if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) {
																					s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nC++) : i.selectedOneLess(s, t);
																				}
																				else {
																					i.app.pointTypes[m].startingSum += parseInt(o.value);
																				}
																			}
																			if (s.forcedActivated && nC > 0) {
																				if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																				i.app.cancelForcedActivated.push(s.id + "/ON#" + nC);
																			}
																		} else {
																			(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum += parseInt(o.value));
																		}
																	}
															} else {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	for (m = 0; m < i.app.pointTypes.length; m++)
																		if (i.app.pointTypes[m].id == o.id) {
																			if (s.isMultipleUseVariable)
																			{
																				for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																					if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) {
																						s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nC++) : i.selectedOneLess(s, t);
																					}
																					else {
																						i.app.pointTypes[m].startingSum -= parseInt(o.value);
																					}
																				}
																				if (s.forcedActivated && nC > 0) {
																					if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																					i.app.cancelForcedActivated.push(s.id + "/ON#" + nC);
																				}
																			} else {
																				(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum -= parseInt(o.value));
																			}
																		}
															}
														}
													}
												}))
											}))
										})), "Scores Updated On: " !== C && (this.text = C + ".", this.snackbar = !0), e.multiplyPointtypeIsOn)
										for (e.multiplyPointtypeIsOnCheck = !0, m = 0; m < this.app.pointTypes.length; m++)
											if (this.app.pointTypes[m].id == e.pointTypeToMultiply)
												if (e.multiplyPointtypeIsId)
													for (var x = 0; x < this.app.pointTypes.length; x++) this.app.pointTypes[x].id == e.multiplyWithThis && (e.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum - this.app.pointTypes[m].startingSum, this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum);
												else e.startingSumAtMultiply = this.app.pointTypes[m].startingSum * e.multiplyWithThis - this.app.pointTypes[m].startingSum, this.app.pointTypes[m].startingSum *= e.multiplyWithThis;
									if (e.dividePointtypeIsOn)
										for (e.dividePointtypeIsOnCheck = !0, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToDivide && (this.app.pointTypes[m].startingSum /= e.divideWithThis, console.log("Multiply:"));
									if (e.addToAllowChoice)
										for (m = 0; m < this.app.rows.length; m++)
											if (e.idOfAllowChoice == this.app.rows[m].id) {
												this.app.rows[m].allowedChoices += e.numbAddToAllowChoice, isNaN(this.app.rows[m].allowedChoicesChange) && (this.app.rows[m].allowedChoicesChange = 0), this.app.rows[m].allowedChoicesChange += e.numbAddToAllowChoice;
												var I = 0;
												for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && I++;
												if (I > this.app.rows[m].allowedChoices) {
													var O = I - this.app.rows[m].allowedChoices;
													for (v = 0; v < this.app.rows[m].objects.length; v++) O > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), O--)
												}
											}
									if (e.textfieldIsOn)
										for (m = 0; m < this.app.words.length; m++) this.app.words[m].id == e.idOfTheTextfieldWord && (this.app.words[m].replaceText = e.wordChangeSelect);
									this.activated.push(eid), t.currentChoices += 1
								}
								e.isActive = !e.isActive, this.updateActivated()
							} else if (this.activated.includes(eid)) {
								this.activated.splice(this.activated.indexOf(eid), 1);
								for (var S = e.scores.length - 1; S >= 0; S--)
									if (this.checkRequireds(e.scores[S]) || e.scores[S].isActive)
										for (var k = 0; k < this.app.pointTypes.length; k++)
											if (this.app.pointTypes[k].id == e.scores[S].id) {
												if (e.isSelectableMultiple) {
													for (var K = 0; K < e.multipleUseVariable; K++)
														this.app.pointTypes[k].startingSum += parseInt(e.scores[S].value);
													e.scores[S].isActive = !1, e.scores[S].setValue = !1;
												} else
													this.app.pointTypes[k].startingSum += parseInt(e.scores[S].value), e.scores[S].isActive = !1, e.scores[S].setValue = !1;
											}
								if (e.isSelectableMultiple) e.multipleUseVariable = 0, e.selectedThisManyTimesProp = 0;
								if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
									if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
										for (v = e.activatedRandom.length - 1; v >= 0; v--)
											for (f = 0; f < this.app.rows.length; f++)
												for (b = 0; b < this.app.rows[f].objects.length; b++)
													if (this.app.rows[f].objects[b].isSelectableMultiple) {
														if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
															if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(e.activatedRandom[v].split("/ON#")[0])) {
																for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																	if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == e.activatedRandom[v].split("/ON#")[0]) {
																		EE = parseInt(e.activatedRandom[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																		break
																	}
																}
																if (EE > 0) {
																	for (var n = 0; n < EE; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (EE < 0) {
																	for (var pp = 0; pp < -1 * EE; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															} else {
																if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															}
														}
													} else {
														if (this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
													}
									} else {
										var A = e.activateThisChoice.split(","),
										ee = 0;
										for (v = A.length - 1; v >= 0; v--)
											for (f = 0; f < this.app.rows.length; f++)
												for (b = 0; b < this.app.rows[f].objects.length; b++) {
													if (this.app.rows[f].objects[b].isSelectableMultiple) {
														if (this.app.rows[f].objects[b].id == A[v].split("/ON#")[0]) {
															if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(p[v].split("/ON#")[0])) {
																for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																	if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == p[v].split("/ON#")[0]) {
																		EE = parseInt(p[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																		break
																	}
																}
																if (EE > 0) {
																	for (var n = 0; n < EE; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (EE < 0) {
																	for (var pp = 0; pp < -1 * EE; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															} else {
																if (ee = A[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (ee < 0) {
																	this.app.rows[f].object[b].multipleUseVariable = 0;
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															}
														}
													} else {
														if (this.app.rows[f].objects[b].id == A[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
													}
												}
									}   
								}
								if (e.addToAllowChoice)
									for (m = 0; m < this.app.rows.length; m++)
										if (e.idOfAllowChoice == this.app.rows[m].id) {
											this.app.rows[m].allowedChoices -= e.numbAddToAllowChoice;
											var q = 0;
											for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && q++;
											if (q > this.app.rows[m].allowedChoices) {
												var B = q - this.app.rows[m].allowedChoices;
												for (v = 0; v < this.app.rows[m].objects.length; v++) B > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), B--)
											}
										}
								e.isActive = !e.isActive, this.updateActivated(), t.currentChoices -= 1
							}
						}
                    },
                    updateObject: function() {
                        this.$emit("objectWasChanged", this.object)
                    },
                    selectedOneMore: function(e, t) {
                        var s = !0;
                        if (e.isMultipleUseVariable) e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable && this.checkPoints(e) ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable)) : s = !1;
                        else
                            for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesPluss > this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum++, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum)) : s = !1);
                        if (s)
						{
							for (var i = 0; i < e.scores.length; i++)
                                for (var s = 0; s < this.app.pointTypes.length; s++) {
									this.app.pointTypes[s].id == e.scores[i].id && this.checkRequireds(e.scores[i]) && (this.app.pointTypes[s].startingSum -= parseInt(e.scores[i].value));
								}
							if (e.selectedThisManyTimesProp > e.numMultipleTimesMinus) {
								if (e.isActive == !1) e.isActive = !0, t.currentChoices += 1, this.activated.push(e.id + "/ON#" + e.multipleUseVariable);
								else this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable - 1)), (e.id + "/ON#" + e.multipleUseVariable));
								this.updateActivated();
							}
						}
                    },
                    selectedOneLess: function(e, t) {
                        var s = !0;
                        if (e.isMultipleUseVariable) e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable && this.checkPointsR(e) ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable)) : s = !1;
                        else
                            for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesMinus < this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum--, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum)) : s = !1);
                        if (s)
						{
							for (var i = 0; i < e.scores.length; i++)
                                for (var s = 0; s < this.app.pointTypes.length; s++) {
									this.app.pointTypes[s].id == e.scores[i].id && this.checkRequireds(e.scores[i]) && (this.app.pointTypes[s].startingSum += parseInt(e.scores[i].value));
								}
							if (e.isActive == !0) {
								if (e.selectedThisManyTimesProp == e.numMultipleTimesMinus && ("undefined" === typeof e.forcedActivated || e.forcedActivated == !1)) e.isActive = !1, this.activated.splice(this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), 1), t.currentChoices -= 1;
								else this.$set(this.activated, this.activated.indexOf(e.id + "/ON#" + (e.multipleUseVariable + 1)), (e.id + "/ON#" + e.multipleUseVariable));
								this.updateActivated();
							}
						}
                    },
                    cloneObject: function() {
                        this.row.objects.push(JSON.parse(JSON.stringify(this.object)));
                        for (var t = "", e = "abcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 4; i++) t += e.charAt(Math.floor(Math.random() * e.length));
                        this.row.objects[this.row.objects.length - 1].id = t
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
					duplicateRow: function(e) {
						var c, i, j, s, fr, fo, y, z, zx, zy, zz;
						for (var f = 0; f < this.app.rows.length; f++) {
							if (this.app.rows[f].id == e.duplicateRowId) {
								this.app.rows.splice(f + 1, 0, JSON.parse(JSON.stringify(this.app.rows[f])));
								fr = this.app.rows[f + 1], fr.currentChoices = 0;
								y = fr.id.split("/D#"), y.length > 1 ? fr.id = y[0] + "/D#" + (parseInt(y[1]) + 1) : fr.id = y[0] + "/D#1";
								for (fr.allowedChoicesChange > 0 && (fr.allowedChoices -= fr.allowedChoicesChange), s = 0; s < fr.objects.length; s++) {
									fo = fr.objects[s], z = fo.id.split("/D#"), z.length > 1 ? fo.id = z[0] + "/D#" + (parseInt(z[1]) + 1) : fo.id = z[0] + "/D#1";
									if (fo.multipleUseVariable) fo.multipleUseVariable = 0, fo.selectedThisManyTimesProp = 0;
									if (fo.isActive) fo.isActive = !1;
									fo.forcedActivated = !1;
									if (!e.dRowAddSufReq) {
										if ("undefined" !== typeof fo.requireds) {
											for (i = 0; i < fo.requireds.length; i++) {
												if ("id" == fo.requireds[i].type)
													zx = fo.requireds[i].reqId.split("/D#"), zx.length > 1 ? fo.requireds[i].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].reqId = zx[0] + "/D#1";
												else if ("or" == fo.requireds[i].type)
													for (c = 0; c < fo.requireds[i].orRequired.length; c++)
														zx = fo.requireds[i].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].orRequired[c].req = zx[0] + "/D#1";
												if ("undefined" !== typeof fo.requireds[i].requireds)
													for (j = 0; j < fo.requireds[i].requireds.length; j++) {
														if ("id" == fo.requireds[i].requireds[j].type)
															zx = fo.requireds[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.requireds[i].requireds[j].type)
															for (c = 0; c < fo.requireds[i].requireds[j].orRequired.length; c++)
																zx = fo.requireds[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
											}
										}
										if ("undefined" !== typeof fo.scores)
											for (i = 0; i < fo.scores.length; i++)
												if ("undefined" !== fo.scores[i].requireds)
													for (j = 0; j < fo.scores[i].requireds.length; j++) {
														if ("id" == fo.scores[i].requireds[j].type)
															zx = fo.scores[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.scores[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.scores[i].requireds[j].type)
															for (c = 0; c < fo.scores[i].requireds[j].orRequired.length; c++)
																zx = fo.scores[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
										if ("undefined" !== typeof fo.addons)
											for (i = 0; i < fo.addons.length; i++)
												if ("undefined" !== fo.addons[i].requireds)
													for (j = 0; j < fo.addons[i].requireds.length; j++) {
														if ("id" == fo.addons[i].requireds[j].type)
															zx = fo.addons[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.addons[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.addons[i].requireds[j].type)
															for (c = 0; c < fo.addons[i].requireds[j].orRequired.length; c++)
																zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
									}
									if (!e.dRowAddSufFunc) {
										if (fo.activateOtherChoice) {
											zz = "";
											for (y = fo.activateThisChoice.split(","), i = 0; i < y.length; i++) {
												if (zx = y[i].split("/ON#"), zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + ",";
											}
											fo.activateThisChoice = zz.slice(0, -1);
										}
										if (fo.deactivateOtherChoice) {
											zz = "";
											for (y = fo.deactivateThisChoice.split(","), i = 0; i < y.length; i++) {
												if (zx = y[i].split("/ON#"), zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + ",";
											}
											fo.deactivateThisChoice = zz.slice(0, -1);
										}
										if (fo.duplicateRow)
											y = fo.duplicateRowId.split("/D#"), fo.duplicateRowId = y[0] + "/D#" + (y.length > 1 ? (parseInt(y[1]) + 1) : "1");
									}
								}
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
                        }
                    }
                },
                components: {
                    AppObject: st
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
                        return 'font-family: "' + this.styling.rowTitle + '";font-size: ' + this.styling.rowTitleTextSize + "%;text-align: " + this.styling.rowTitleAlign + ";color: " + this.styling.rowTitleColor + ";"
                    },
                    styling: function() {
                        return this.row.isPrivateStyling ? this.row.styling : this.$store.state.app.styling
                    },
                    resultArray: function() {
                        var t, e, i = [];
                        if ("standard" == this.type) {
                            for (var s = 0; s < this.allChapters.length; s++)
                                for (var o = 0; o < this.allChapters[s].pages.length; o++) this.findAllActiveObjects(this.allChapters[s].pages[o], this.allChapters[s]);
                            i = this.activeObjectList
                        } else if ("" == this.row.resultGroupId || null == this.row.resultGroupId)
                            for (e = 0; e < this.rows.length; e++)
                                for (t = 0; t < this.rows[e].objects.length; t++) this.rows[e].objects[t].isActive ? i.push(this.rows[e].objects[t]) : this.rows[e].objects[t].isImageUpload ? this.rows[e].objects[t].image.length > 5 && i.push(this.rows[e].objects[t]) : this.rows[e].objects[t].isSelectableMultiple && "undefined" !== typeof this.rows[e].objects[t].multipleUseVariable && this.rows[e].objects[t].multipleUseVariable > 0 && i.push(this.rows[e].objects[t]);
                        else
                            for (e = 0; e < this.rows.length; e++)
                                for (t = 0; t < this.rows[e].objects.length; t++)
                                    if (this.rows[e].objects[t].isActive)
                                        for (var r = 0; r < this.groups.length; r++)
                                            if (this.row.resultGroupId == this.rows[e].resultGroupId && this.rows[e] != this.row && this.groups[r].id == this.rows[e].resultGroupId) i.push(this.rows[e].objects[t]);
                                            else
                                                for (var a = 0; a < this.rows[e].objects[t].groups.length; a++) this.rows[e].objects[t].groups[a].id == this.row.resultGroupId && this.groups[r].id == this.row.resultGroupId && i.push(this.rows[e].objects[t]);
                        else if (this.rows[e].objects[t].isImageUpload && this.rows[e].objects[t].image.length > 5)
                            for (var n = 0; n < this.groups.length; n++)
                                if (this.row.resultGroupId == this.rows[e].resultGroupId && this.rows[e] != this.row && this.groups[n].id == this.rows[e].resultGroupId) i.push(this.rows[e].objects[t]);
                                else
                                    for (var p = 0; p < this.rows[e].objects[t].groups.length; p++) this.rows[e].objects[t].groups[p].id == this.row.resultGroupId && this.groups[n].id == this.row.resultGroupId && i.push(this.rows[e].objects[t]);
                        else if (this.rows[e].objects[t].isSelectableMultiple && ("undefined" !== typeof this.rows[e].objects[t].multipleUseVariable && this.rows[e].objects[t].multipleUseVariable > 0))
                            for (var l = 0; l < this.groups.length; l++)
                                if (this.row.resultGroupId == this.rows[e].resultGroupId && this.rows[e] != this.row && this.groups[l].id == this.rows[e].resultGroupId) i.push(this.rows[e].objects[t]);
                                else
                                    for (var c = 0; c < this.rows[e].objects[t].groups.length; c++) this.rows[e].objects[t].groups[c].id == this.row.resultGroupId && this.groups[l].id == this.row.resultGroupId && i.push(this.rows[e].objects[t]);
                        return i
                    },
                    rowBody: function() {
                        var t = "margin-top: " + this.styling.rowBodyMarginTop + "px;margin-bottom:" + this.styling.rowBodyMarginBottom + "px;" + (this.row.isPrivateStyling ? (this.styling.backgroundImage ? 'background-image: url("' + this.styling.backgroundImage + '");background-color: ' + this.styling.backgroundColor + (this.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : ";background-size: cover;") : "background-color: " + this.styling.backgroundColor + ";" ) : "" );
                        return this.row.isEditModeOn ? t += "margin-left: 1%;margin-right: 1%;" : t += "margin-left: " + this.styling.rowBodyMarginSides + "%;margin-right: " + this.styling.rowBodyMarginSides + "%;", t
                    },
                    rowText: function() {
                        var t = 'font-family: "' + this.styling.rowText + '";text-align: ' + this.styling.rowTextAlign + ";font-size: " + this.styling.rowTextTextSize + "%;color: " + this.styling.rowTextColor + ";padding-top: " + this.styling.rowTextPaddingX + "px;padding-bottom: " + this.styling.rowTextPaddingX + "px;";
                        return this.row.isEditModeOn || (t += "padding-left: " + this.styling.rowTextPaddingY + "%;padding-right: " + this.styling.rowTextPaddingY + "%;"), t
                    },
                    rowButton: function() {
                        return "padding-left: " + this.styling.rowButtonYPadding + "px;padding-right: " + this.styling.rowButtonYPadding + "px;padding-top: " + this.styling.rowButtonXPadding + "px;padding-bottom: " + this.styling.rowButtonXPadding + "px;color:black;;"
                    },
                    rowBackground: function() {
                        var t = (this.styling.rowBorderImage ? 'border-image: url("' + this.styling.rowBorderImage + '") ' + this.styling.rowBorderImageSliceTop + ' ' + this.styling.rowBorderImageSliceRight + ' ' + this.styling.rowBorderImageSliceBottom + ' ' + this.styling.rowBorderImageSliceLeft + ' / ' + this.styling.rowBorderImageWidth + 'px '+ this.styling.rowBorderImageRepeat + '; border-style: solid; padding: ' + this.styling.rowBorderImageWidth + 'px !important; ' : "") + (this.styling.rowBackgroundImage ? 'background-image: url("' + this.styling.rowBackgroundImage + '");' + (this.styling.isRowBackgroundRepeat ? "background-repeat: repeat;" : "background-size: cover;") : "") + (this.styling.rowBgColorIsOn ? "background-color: " + this.styling.rowBgColor + ";" : "") + "margin-left:" + this.styling.rowMargin + "%;margin-right: " + this.styling.rowMargin + "%;",
                            e = this.styling.rowBorderRadiusIsPixels ? "px" : "%";
                        return this.styling.rowGradientIsOn && (t += this.styling.rowGradientIsOn ? ";background-image: linear-gradient(" + this.styling.rowGradient + ");" : ""), t += "border-radius: " + this.styling.rowBorderRadiusTopLeft + 0 + e + " " + this.styling.rowBorderRadiusTopRight + 0 + e + " " + this.styling.rowBorderRadiusBottomRight + 0 + e + " " + this.styling.rowBorderRadiusBottomLeft + 0 + e + ";", this.styling.rowOverflowIsOn && (t += "overflow:hidden;"), this.styling.rowBorderIsOn && (t += "border: " + this.styling.rowBorderWidth + "px " + this.styling.rowBorderStyle + " " + this.styling.rowBorderColor + ";"), this.styling.rowDropShadowIsOn && (t += "filter: drop-shadow(" + this.styling.rowDropShadowH + "px " + this.styling.rowDropShadowV + "px " + this.styling.rowDropShadowBlur + "px " + this.styling.rowDropShadowColor + ");"), t
                    },
                    rowImage: function() {
                        var t = "width:" + this.styling.rowImageWidth + "%;margin-top:" + this.styling.rowImageMarginTop + "%;margin-bottom:" + this.styling.rowImageMarginBottom + "%;",
                            e = this.styling.rowImgBorderRadiusIsPixels ? "px" : "%";
                        return t += "border-radius: " + this.styling.rowImgBorderRadiusTopLeft + 0 + e + " " + this.styling.rowImgBorderRadiusTopRight + 0 + e + " " + this.styling.rowImgBorderRadiusBottomRight + 0 + e + " " + this.styling.rowImgBorderRadiusBottomLeft + 0 + e + ";", this.styling.rowImgOverflowIsOn && (t += "overflow:hidden;"), this.styling.rowImgBorderIsOn && (t += "border: " + this.styling.rowImgBorderWidth + "px " + this.styling.rowImgBorderStyle + " " + this.styling.rowImgBorderColor + ";"), t
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
                        var t = this.row.title,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
                    },
                    replaceRowText: function() {
                        var t = this.row.titleText,
                            e = !1;
                        if ("undefined" != typeof this.$store.state.app.words)
                            for (var i = 0; i < this.app.words.length; i++) {
                                e = !1;
                                for (var s = 0; s < this.app.pointTypes.length; s++) this.app.pointTypes[s].id == this.app.words[i].id && (t = t.replace(new RegExp(this.app.words[i].id, "g"), this.app.pointTypes[s].startingSum), e = !0);
                                if (!e)
                                    for (var o = 0; o < this.app.words.length; o++) t = t.replace(new RegExp(this.app.words[o].id, "g"), this.app.words[o].replaceText)
                            }
                        return t
                    },
                    isButtonPressable: function() {
                        return !(!this.row.onlyIfNoChoices || 0 === this.row.currentChoices)
                    }
                },
                methods: {
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
                        if (this.row.buttonRandom) {
                            var t, e = [];
                            if (this.row.isWeightedRandom && "undefined" != typeof this.row.isWeightedRandom) {
                                var i = 0,
                                    s = 0;
                                for (t = 0; t < this.row.objects.length; t++) "undefined" == typeof this.row.objects[t].randomWeight || "" == this.row.objects[t].randomWeight ? i += 100 : i += parseInt(this.row.objects[t].randomWeight);
                                for (var o = 0; o < this.row.buttonRandomNumber; o++) {
                                    var r = Math.floor(Math.random() * i);
                                    for (console.log(r), t = 0; t < this.row.objects.length; t++)
                                        if ("undefined" == typeof this.row.objects[t].randomWeight || "" == this.row.objects[t].randomWeight ? s += 100 : s += parseInt(this.row.objects[t].randomWeight), r < s) {
                                            this.activateObject(this.row.objects[t], this.row);
                                            break
                                        }
                                }
                            } else
                                for (t = 0; t < this.row.buttonRandomNumber; t++) {
                                    var a = Math.floor(Math.random() * this.row.objects.length),
                                        n = this.row.objects[a],
                                        p = 100,
                                        l = 0,
                                        c = !0;
                                    if (this.row.onlyUnselectedChoices) {
                                        while (e.includes(a) || this.activated.includes(n.id) || !this.checkRequireds(n) || n.isNotSelectable)
                                            if (l++, a = Math.floor(Math.random() * this.row.objects.length), n = this.row.objects[a], this.row.objects.length <= t || p <= l) {
                                                c = !1;
                                                break
                                            }
                                    } else
                                        while (e.includes(a) || !this.checkRequireds(n) || n.isNotSelectable)
                                            if (l++, a = Math.floor(Math.random() * this.row.objects.length), n = this.row.objects[a], this.row.objects.length <= t || p <= l) break;
                                    c && (e.push(a), this.activateObject(n, this.row))
                                }
                        } else this.row.buttonType && this.activated.includes(this.row.buttonId) ? this.activated.splice(this.activated.indexOf(this.row.buttonId), 1) : this.activated.push(this.row.buttonId)
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
                    activateObject: function(e, t) {
						if (!(e.selectOnce && e.isActive)) {
							for (var g = 0; g < e.scores.length; g++)
								if ("undefined" !== typeof e.scores[g].isRandom && e.scores[g].isRandom && !e.scores[g].setValue) {
									e.scores[g].value = Math.floor(Math.random() * (parseInt(e.scores[g].maxValue) - parseInt(e.scores[g].minValue) + 1)) + parseInt(e.scores[g].minValue);
									e.scores[g].setValue = !0;
									for (var a = 0; a < this.app.pointTypes.length; a++) this.app.pointTypes[a].id == e.scores[g].id && this.app.pointTypes[a].belowZeroNotAllowed && this.app.pointTypes[a].startingSum - parseInt(e.scores[g].value) < 0 && (e.scores[g].setValue = !1);
								}
							var i = this,
								s = this.checkRequireds(e),
								o = this.checkPoints(e);
							var eid = e.isMultipleUseVariable ? e.id + "/ON#" + e.multipleUseVariable : e.id
							if (t.currentChoices + 1 > t.allowedChoices && !e.isActive && 0 != t.allowedChoices)
								for (var r = 0; r < t.objects.length; r++) t.objects[r].isActive && t.currentChoices + 1 > t.allowedChoices && this.activateObject(t.objects[r], t);
							if (s && o && (t.currentChoices < t.allowedChoices || 0 == t.allowedChoices)) {
								if (this.activated.includes(eid)) {
									for (var a = 0; a < e.scores.length; a++)
										if (this.checkRequireds(e.scores[a]) || e.scores[a].isActive)
											for (var n = 0; n < this.app.pointTypes.length; n++) this.app.pointTypes[n].id == e.scores[a].id && (this.app.pointTypes[n].startingSum += parseInt(e.scores[a].value), e.scores[a].isActive = !1, e.scores[a].setValue = !1);
									var p, ee = 0, EE = 0;
									if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
										if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
											for (v = e.activatedRandom.length - 1; v >= 0; v--)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++)
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
																if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(e.activatedRandom[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																		if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == e.activatedRandom[v].split("/ON#")[0]) {
																			EE = parseInt(e.activatedRandom[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																} else {
																	if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																}
															}
														} else {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
														}
										} else {
											for (p = e.activateThisChoice.split(","), v = p.length - 1; v >= 0; v--)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++)
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == p[v].split("/ON#")[0]) {
																if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(p[v].split("/ON#")[0])) {
																	for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																		if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == p[v].split("/ON#")[0]) {
																			EE = parseInt(p[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																			break
																		}
																	}
																	if (EE > 0) {
																		for (var n = 0; n < EE; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (EE < 0) {
																		for (var pp = 0; pp < -1 * EE; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																} else {
																	if (ee = p[v].split("/ON#")[1], ee > 0) {
																		for (var n = 0; n < ee; n++) {
																			this.app.rows[f].objects[b].numMultipleTimesMinus--;
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		}
																	} else if (ee < 0) {
																		for (var pp = 0; pp < -1 * ee; pp++) {
																			this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																			this.app.rows[f].objects[b].forcedActivated = !1
																			this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		}
																	}
																}
															}
														} else {
															if (this.app.rows[f].objects[b].id == p[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
														}
										}
									}
									if (e.deactivateOtherChoice)
										for (p = e.deactivateThisChoice.split(","), f = 0; f < p.length; f++) {
											for (m = 0; m < this.app.rows.length; m++)
												for (v = 0; v < this.app.rows[m].objects.length; v++) {
													if (this.app.rows[m].objects[v].isSelectableMultiple) {
														if (this.app.rows[m].objects[v].id == p[f].split("/ON#")[0]) {
															if (ee = p[f].split("/ON#")[1], ee > 0) {
																for (var n = 0; n < ee; n++) this.selectedOneMore(this.app.rows[m].objects[v], this.app.rows[m])
															} else if (ee < 0) {
																for (var pp = 0; pp < -1 * ee; pp++) this.selectedOneLess(this.app.rows[m].objects[v], this.app.rows[m])
															}
														}
													} else {
														this.app.rows[m].objects[v].id != p[f] && this.app.rows[m].resultGroupId != p[f] || !this.app.rows[m].objects[v].isActive || this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]);
													}
												}
											for (var l = 0; l < this.app.groups.length; l++)
												if (this.app.groups[l].id == p[f])
													for (m = 0; m < this.app.rows.length; m++)
														for (v = 0; v < this.app.rows[m].objects.length; v++)
															for (var c = 0; c < this.app.rows[m].objects[v].groups.length; c++) this.app.rows[m].objects[v].groups[c].id == p[f] && this.app.rows[m].objects[v].isActive && this.activateObject(this.app.rows[m].objects[v], this.app.rows[m])
										}
									var h = "Scores Updated On: ",
										nH = 0, nh = 0;
									if (this.app.rows.forEach((function(t) {
											t.objects.forEach((function(s) {
												s.scores.forEach((function(o) {
													if (s.isActive && JSON.stringify(o).includes('"' + eid + '"')) {
														nH = i.activated.indexOf(eid)
														var bC = i.checkRequireds(o);
														i.activated.splice(i.activated.indexOf(eid), 1);
														var bE = i.checkRequireds(o);
														i.activated.splice(nH, 0, eid);
														if (bC !== bE) {
															19 == h.length ? h += s.title : h += ", " + s.title;
															if (bC) {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	if (i.app.pointTypes[m].id == o.id) {
																		if (s.isMultipleUseVariable)
																		{
																			for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																				if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) {
																					s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nh++) : i.selectedOneLess(s, t);
																				}
																				else {
																					i.app.pointTypes[m].startingSum += parseInt(o.value);
																				}
																			}
																			if (s.forcedActivated && nh > 0) {
																				if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																				i.app.cancelForcedActivated.push(s.id + "/ON#" + nh);
																			}
																		} else {
																			(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum += parseInt(o.value), o.isActive = !1);
																		}
																	}
															} else {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	for (m = 0; m < i.app.pointTypes.length; m++)
																		if (i.app.pointTypes[m].id == o.id) {
																			if (s.isMultipleUseVariable)
																			{
																				for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																					console.log(i.app);
																					if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) {
																						s.forcedActivated ? (console.log(s), s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated) : i.selectedOneLess(s, t);
																					}
																					else {
																						i.app.pointTypes[m].startingSum -= parseInt(o.value);
																					}
																				}
																				if (s.forcedActivated && nh > 0) {
																					if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																					i.app.cancelForcedActivated.push(s.id + "/ON#" + nh);
																				}
																			} else {
																				(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum -= parseInt(o.value), o.isActive = !0);
																			}
																		}
															}
														}
													}
												}))
											}))
										})), "Scores Updated On: " !== h && (this.text = h + ".", this.snackbar = !0), e.multiplyPointtypeIsOnCheck)
										for (e.multiplyPointtypeIsOnCheck = !1, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToMultiply && (this.app.pointTypes[m].startingSum -= e.startingSumAtMultiply, console.log("Multiply:" + e.startingSumAtMultiply));
									if (e.dividePointtypeIsOnCheck)
										for (e.dividePointtypeIsOnCheck = !1, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToDivide && (this.app.pointTypes[m].startingSum *= e.divideWithThis, console.log("Multiply:"));
									if (e.textfieldIsOn)
										for (m = 0; m < this.app.words.length; m++) this.app.words[m].id == e.idOfTheTextfieldWord && (this.app.words[m].replaceText = e.wordChangeDeselect);
									if (e.addToAllowChoice)
										for (m = 0; m < this.app.rows.length; m++)
											if (e.idOfAllowChoice == this.app.rows[m].id) {
												this.app.rows[m].allowedChoices -= e.numbAddToAllowChoice;
												var d = 0;
												for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && d++;
												if (d > this.app.rows[m].allowedChoices) {
													var u = d - this.app.rows[m].allowedChoices;
													for (v = 0; v < this.app.rows[m].objects.length; v++) u > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), u--)
												}
											} this.activated.splice(this.activated.indexOf(eid), 1), t.currentChoices -= 1
								} else {
									for (var g = 0; g < e.scores.length; g++)
										if (this.checkRequireds(e.scores[g]) && !e.scores[g].isActive)
											for (var w = 0; w < this.app.pointTypes.length; w++) this.app.pointTypes[w].id == e.scores[g].id && (this.app.pointTypes[w].startingSum -= parseInt(e.scores[g].value), e.scores[g].isActive = !0);
									var f, b, m, v, y, ee = 0;
									if (e.cleanACtivatedOnSelect && !this.cleanActivated()) this.app.activated.splice(0);
									if (e.duplicateRow) {
										this.duplicateRow(e);
									}
									if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice)
									{
										if (e.isActivateRandom && "undefined" !== typeof e.isActivateRandom) {
											y = e.activateThisChoice.split(","); 
											var RD = y.slice(),
												rd = RD.filter(item => !this.activated.includes(item)),
												nAR = e.numActivateRandom > rd.length ? rd.length : e.numActivateRandom;
											this.$set(e, 'activatedRandom', []);
											for (v = rd.length - 1; v > 0; v--) {
												var rnd = Math.floor(Math.random() * (v + 1));
												[rd[v], rd[rnd]] = [rd[rnd], rd[v]];
											}
											e.activatedRandom = rd.slice(0, nAR);
											for (v = 0; v < nAR; v++)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++) {
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
																if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																}
															}
														} else {
															this.app.rows[f].objects[b].id != e.activatedRandom[v] || this.app.rows[f].objects[b].isActive ? this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive && (this.app.rows[f].objects[b].forcedActivated = !0) : (this.app.rows[f].objects[b].forcedActivated = !0, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]));
														}
													}
										} else {
											for (y = e.activateThisChoice.split(","), v = 0; v < y.length; v++)
												for (f = 0; f < this.app.rows.length; f++)
													for (b = 0; b < this.app.rows[f].objects.length; b++) {
														if (this.app.rows[f].objects[b].isSelectableMultiple) {
															if (this.app.rows[f].objects[b].id == y[v].split("/ON#")[0]) {
																if (ee = y[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !0
																	}
																}
															}
														} else {
															this.app.rows[f].objects[b].id != y[v] || this.app.rows[f].objects[b].isActive ? this.app.rows[f].objects[b].id == y[v] && this.app.rows[f].objects[b].isActive && (this.app.rows[f].objects[b].forcedActivated = !0) : (this.app.rows[f].objects[b].forcedActivated = !0, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]));
														}
													}
										}
									}
									if (e.deactivateOtherChoice)
										for (y = e.deactivateThisChoice.split(","), f = 0; f < y.length; f++) {
											for (m = 0; m < this.app.rows.length; m++)
												for (v = 0; v < this.app.rows[m].objects.length; v++) {
													if (this.app.rows[m].objects[v].isSelectableMultiple) {
														if (this.app.rows[m].objects[v].id == y[f].split("/ON#")[0]) {
															if (ee = y[f].split("/ON#")[1], ee > 0) {
																for (var n = 0; n < ee; n++) {
																	this.app.rows[m].objects[v].numMultipleTimesMinus--;
																	this.selectedOneLess(this.app.rows[m].objects[v], this.app.rows[m]);
																}
															} else if (ee < 0) {
																for (var pp = 0; pp < -1 * ee; pp++) {
																	this.selectedOneMore(this.app.rows[m].objects[v], this.app.rows[m]);
																	this.app.rows[m].objects[v].numMultipleTimesMinus++;
																}
															}
														}
													} else {
														this.app.rows[m].objects[v].id != y[f] && this.app.rows[m].resultGroupId != y[f] || !this.app.rows[m].objects[v].isActive || this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]);
													}
												}
											for (var j = 0; j < this.app.groups.length; j++)
												if (this.app.groups[j].id == y[f])
													for (m = 0; m < this.app.rows.length; m++)
														for (v = 0; v < this.app.rows[m].objects.length; v++)
															for (var T = 0; T < this.app.rows[m].objects[v].groups.length; T++) this.app.rows[m].objects[v].groups[T].id == y[f] && this.app.rows[m].objects[v].isActive && this.activateObject(this.app.rows[m].objects[v], this.app.rows[m])
										}
									var C = "Scores Updated On: ",
										nC = 0;
									if (this.app.rows.forEach((function(t) {
											t.objects.forEach((function(s) {
												s.scores.forEach((function(o) {
													if (s.isActive && JSON.stringify(o).includes('"' + eid + '"')) {
														var bC = i.checkRequireds(o);
														i.activated.push(eid);
														var bE = i.checkRequireds(o);
														i.activated.splice(i.activated.indexOf(eid), 1);
														if (bC !== bE) {
															19 == C.length ? C += s.title : C += ", " + s.title;
															if (bC) {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	if (i.app.pointTypes[m].id == o.id) {
																		if (s.isMultipleUseVariable)
																		{
																			for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																				if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) {
																					s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nC++) : i.selectedOneLess(s, t);
																				}
																				else {
																					i.app.pointTypes[m].startingSum += parseInt(o.value);
																				}
																			}
																			if (s.forcedActivated && nC > 0) {
																				if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																				i.app.cancelForcedActivated.push(s.id + "/ON#" + nC);
																			}
																		} else {
																			(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum + parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum += parseInt(o.value));
																		}
																	}
															} else {
																for (m = 0; m < i.app.pointTypes.length; m++)
																	for (m = 0; m < i.app.pointTypes.length; m++)
																		if (i.app.pointTypes[m].id == o.id) {
																			if (s.isMultipleUseVariable)
																			{
																				for (var X = s.multipleUseVariable, x = 0; x < X; x++) {
																					if (i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) {
																						s.forcedActivated ? (s.forcedActivated = !s.forcedActivated, s.numMultipleTimesMinus--, i.selectedOneLess(s, t), s.forcedActivated = !s.forcedActivated, nC++) : i.selectedOneLess(s, t);
																					}
																					else {
																						i.app.pointTypes[m].startingSum -= parseInt(o.value);
																					}
																				}
																				if (s.forcedActivated && nC > 0) {
																					if ("undefined" === typeof i.app.cancelForcedActivated) i.$set(i.app, "cancelForcedActivated", []);
																					i.app.cancelForcedActivated.push(s.id + "/ON#" + nC);
																				}
																			} else {
																				(i.app.pointTypes[m].belowZeroNotAllowed && i.app.pointTypes[m].startingSum - parseInt(o.value) < 0) ? ((s.forcedActivated = s.forcedActivated ? !s.forcedActivated : s.forcedActivated), i.activateObject(s, t)) : (i.app.pointTypes[m].startingSum -= parseInt(o.value));
																			}
																		}
															}
														}
													}
												}))
											}))
										})), "Scores Updated On: " !== C && (this.text = C + ".", this.snackbar = !0), e.multiplyPointtypeIsOn)
										for (e.multiplyPointtypeIsOnCheck = !0, m = 0; m < this.app.pointTypes.length; m++)
											if (this.app.pointTypes[m].id == e.pointTypeToMultiply)
												if (e.multiplyPointtypeIsId)
													for (var x = 0; x < this.app.pointTypes.length; x++) this.app.pointTypes[x].id == e.multiplyWithThis && (e.startingSumAtMultiply = this.app.pointTypes[m].startingSum * this.app.pointTypes[x].startingSum - this.app.pointTypes[m].startingSum, this.app.pointTypes[m].startingSum *= this.app.pointTypes[x].startingSum);
												else e.startingSumAtMultiply = this.app.pointTypes[m].startingSum * e.multiplyWithThis - this.app.pointTypes[m].startingSum, this.app.pointTypes[m].startingSum *= e.multiplyWithThis;
									if (e.dividePointtypeIsOn)
										for (e.dividePointtypeIsOnCheck = !0, m = 0; m < this.app.pointTypes.length; m++) this.app.pointTypes[m].id == e.pointTypeToDivide && (this.app.pointTypes[m].startingSum /= e.divideWithThis, console.log("Multiply:"));
									if (e.addToAllowChoice)
										for (m = 0; m < this.app.rows.length; m++)
											if (e.idOfAllowChoice == this.app.rows[m].id) {
												this.app.rows[m].allowedChoices += e.numbAddToAllowChoice, isNaN(this.app.rows[m].allowedChoicesChange) && (this.app.rows[m].allowedChoicesChange = 0), this.app.rows[m].allowedChoicesChange += e.numbAddToAllowChoice;
												var I = 0;
												for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && I++;
												if (I > this.app.rows[m].allowedChoices) {
													var O = I - this.app.rows[m].allowedChoices;
													for (v = 0; v < this.app.rows[m].objects.length; v++) O > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), O--)
												}
											}
									if (e.textfieldIsOn)
										for (m = 0; m < this.app.words.length; m++) this.app.words[m].id == e.idOfTheTextfieldWord && (this.app.words[m].replaceText = e.wordChangeSelect);
									this.activated.push(eid), t.currentChoices += 1
								}
								e.isActive = !e.isActive, this.updateActivated()
							} else if (this.activated.includes(eid)) {
								this.activated.splice(this.activated.indexOf(eid), 1);
								for (var S = e.scores.length - 1; S >= 0; S--)
									if (this.checkRequireds(e.scores[S]) || e.scores[S].isActive)
										for (var k = 0; k < this.app.pointTypes.length; k++)
											if (this.app.pointTypes[k].id == e.scores[S].id) {
												if (e.isSelectableMultiple) {
													for (var K = 0; K < e.multipleUseVariable; K++)
														this.app.pointTypes[k].startingSum += parseInt(e.scores[S].value);
													e.scores[S].isActive = !1, e.scores[S].setValue = !1;
												} else
													this.app.pointTypes[k].startingSum += parseInt(e.scores[S].value), e.scores[S].isActive = !1, e.scores[S].setValue = !1;
											}
								if (e.isSelectableMultiple) e.multipleUseVariable = 0, e.selectedThisManyTimesProp = 0;
								if (e.activateOtherChoice && "undefined" !== typeof e.activateThisChoice) {
									if (e.isActivateRandom && "undefined" !== typeof e.activatedRandom) {
										for (v = e.activatedRandom.length - 1; v >= 0; v--)
											for (f = 0; f < this.app.rows.length; f++)
												for (b = 0; b < this.app.rows[f].objects.length; b++)
													if (this.app.rows[f].objects[b].isSelectableMultiple) {
														if (this.app.rows[f].objects[b].id == e.activatedRandom[v].split("/ON#")[0]) {
															if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(e.activatedRandom[v].split("/ON#")[0])) {
																for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																	if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == e.activatedRandom[v].split("/ON#")[0]) {
																		EE = parseInt(e.activatedRandom[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																		break
																	}
																}
																if (EE > 0) {
																	for (var n = 0; n < EE; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (EE < 0) {
																	for (var pp = 0; pp < -1 * EE; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															} else {
																if (ee = e.activatedRandom[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															}
														}
													} else {
														if (this.app.rows[f].objects[b].id == e.activatedRandom[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
													}
									} else {
										var A = e.activateThisChoice.split(","),
										ee = 0;
										for (v = A.length - 1; v >= 0; v--)
											for (f = 0; f < this.app.rows.length; f++)
												for (b = 0; b < this.app.rows[f].objects.length; b++) {
													if (this.app.rows[f].objects[b].isSelectableMultiple) {
														if (this.app.rows[f].objects[b].id == A[v].split("/ON#")[0]) {
															if ("undefined" !== typeof this.app.cancelForcedActivated && JSON.stringify(this.app.cancelForcedActivated).includes(p[v].split("/ON#")[0])) {
																for (var AC = 0, EE = 0; AC < this.app.cancelForcedActivated.length; AC++) {
																	if (this.app.cancelForcedActivated[AC].split("/ON#")[0] == p[v].split("/ON#")[0]) {
																		EE = parseInt(p[v].split("/ON#")[1]) - parseInt(this.app.cancelForcedActivated[AC].split("/ON#")[1]), this.app.cancelForcedActivated.splice(AC, 1);
																		break
																	}
																}
																if (EE > 0) {
																	for (var n = 0; n < EE; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (EE < 0) {
																	for (var pp = 0; pp < -1 * EE; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															} else {
																if (ee = A[v].split("/ON#")[1], ee > 0) {
																	for (var n = 0; n < ee; n++) {
																		this.app.rows[f].objects[b].numMultipleTimesMinus--;
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.selectedOneLess(this.app.rows[f].objects[b], this.app.rows[f]);
																	}
																} else if (ee < 0) {
																	this.app.rows[f].object[b].multipleUseVariable = 0;
																	for (var pp = 0; pp < -1 * ee; pp++) {
																		this.selectedOneMore(this.app.rows[f].objects[b], this.app.rows[f]);
																		this.app.rows[f].objects[b].forcedActivated = !1
																		this.app.rows[f].objects[b].numMultipleTimesMinus++;
																	}
																}
															}
														}
													} else {
														if (this.app.rows[f].objects[b].id == A[v] && this.app.rows[f].objects[b].isActive) this.app.rows[f].objects[b].forcedActivated = !1, this.activateObject(this.app.rows[f].objects[b], this.app.rows[f]);
													}
												}
									}   
								}
								if (e.addToAllowChoice)
									for (m = 0; m < this.app.rows.length; m++)
										if (e.idOfAllowChoice == this.app.rows[m].id) {
											this.app.rows[m].allowedChoices -= e.numbAddToAllowChoice;
											var q = 0;
											for (v = 0; v < this.app.rows[m].objects.length; v++) this.app.rows[m].objects[v].isActive && q++;
											if (q > this.app.rows[m].allowedChoices) {
												var B = q - this.app.rows[m].allowedChoices;
												for (v = 0; v < this.app.rows[m].objects.length; v++) B > 0 && this.app.rows[m].objects[v].isActive && (this.activateObject(this.app.rows[m].objects[v], this.app.rows[m]), B--)
											}
										}
								e.isActive = !e.isActive, this.updateActivated(), t.currentChoices -= 1
							}
						}
                    },
                    updateActivated: function() {
                        this.$emit("activatedWasChanged", this.activated)
                    },
					duplicateRow: function(e) {
						var c, i, j, s, fr, fo, y, z, zx, zy, zz;
						for (var f = 0; f < this.app.rows.length; f++) {
							if (this.app.rows[f].id == e.duplicateRowId) {
								this.app.rows.splice(f + 1, 0, JSON.parse(JSON.stringify(this.app.rows[f])));
								fr = this.app.rows[f + 1], fr.currentChoices = 0;
								y = fr.id.split("/D#"), y.length > 1 ? fr.id = y[0] + "/D#" + (parseInt(y[1]) + 1) : fr.id = y[0] + "/D#1";
								for (fr.allowedChoicesChange > 0 && (fr.allowedChoices -= fr.allowedChoicesChange), s = 0; s < fr.objects.length; s++) {
									fo = fr.objects[s], z = fo.id.split("/D#"), z.length > 1 ? fo.id = z[0] + "/D#" + (parseInt(z[1]) + 1) : fo.id = z[0] + "/D#1";
									if (fo.multipleUseVariable) fo.multipleUseVariable = 0, fo.selectedThisManyTimesProp = 0;
									if (fo.isActive) fo.isActive = !1;
									fo.forcedActivated = !1;
									if (!e.dRowAddSufReq) {
										if ("undefined" !== typeof fo.requireds) {
											for (i = 0; i < fo.requireds.length; i++) {
												if ("id" == fo.requireds[i].type)
													zx = fo.requireds[i].reqId.split("/D#"), zx.length > 1 ? fo.requireds[i].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].reqId = zx[0] + "/D#1";
												else if ("or" == fo.requireds[i].type)
													for (c = 0; c < fo.requireds[i].orRequired.length; c++)
														zx = fo.requireds[i].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.requireds[i].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].orRequired[c].req = zx[0] + "/D#1";
												if ("undefined" !== typeof fo.requireds[i].requireds)
													for (j = 0; j < fo.requireds[i].requireds.length; j++) {
														if ("id" == fo.requireds[i].requireds[j].type)
															zx = fo.requireds[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.requireds[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.requireds[i].requireds[j].type)
															for (c = 0; c < fo.requireds[i].requireds[j].orRequired.length; c++)
																zx = fo.requireds[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.requireds[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
											}
										}
										if ("undefined" !== typeof fo.scores)
											for (i = 0; i < fo.scores.length; i++)
												if ("undefined" !== fo.scores[i].requireds)
													for (j = 0; j < fo.scores[i].requireds.length; j++) {
														if ("id" == fo.scores[i].requireds[j].type)
															zx = fo.scores[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.scores[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.scores[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.scores[i].requireds[j].type)
															for (c = 0; c < fo.scores[i].requireds[j].orRequired.length; c++)
																zx = fo.scores[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.scores[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
										if ("undefined" !== typeof fo.addons)
											for (i = 0; i < fo.addons.length; i++)
												if ("undefined" !== fo.addons[i].requireds)
													for (j = 0; j < fo.addons[i].requireds.length; j++) {
														if ("id" == fo.addons[i].requireds[j].type)
															zx = fo.addons[i].requireds[j].reqId.split("/D#"), zx.length > 1 ? fo.addons[i].requireds[j].reqId = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.addons[i].requireds[j].reqId = zx[0] + "/D#1";
														else if ("or" == fo.addons[i].requireds[j].type)
															for (c = 0; c < fo.addons[i].requireds[j].orRequired.length; c++)
																zx = fo.addons[i].requireds[j].orRequired[c].req.split("/D#"), zx.length > 1 ? fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#" + (parseInt(zx[1]) + 1) : fo.addons[i].requireds[j].orRequired[c].req = zx[0] + "/D#1";
													}
									}
									if (!e.dRowAddSufFunc) {
										if (fo.activateOtherChoice) {
											zz = "";
											for (y = fo.activateThisChoice.split(","), i = 0; i < y.length; i++) {
												if (zx = y[i].split("/ON#"), zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + ",";
											}
											fo.activateThisChoice = zz.slice(0, -1);
										}
										if (fo.deactivateOtherChoice) {
											zz = "";
											for (y = fo.deactivateThisChoice.split(","), i = 0; i < y.length; i++) {
												if (zx = y[i].split("/ON#"), zx.length > 1)
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + "/ON#" + zx[1] + ",";
												else
													zy = zx[0].split("/D#"), zz += zy[0] + "/D#" + (zy.length > 1 ? (parseInt(zy[1]) + 1) : "1") + ",";
											}
											fo.deactivateThisChoice = zz.slice(0, -1);
										}
										if (fo.duplicateRow)
											y = fo.duplicateRowId.split("/D#"), fo.duplicateRowId = y[0] + "/D#" + (y.length > 1 ? (parseInt(y[1]) + 1) : "1");
									}
								}
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
                        color: "black"
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
                        color: "black"
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
                        color: "black"
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
                        console.log(this.files[0]);
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
                        "background-color": "white",
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
                        "background-color": "white",
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
                        "background-color": "white",
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
                        newActivated: ""
                    }
                },
                computed: {
                    background: function() {
                        return this.app.styling.backgroundImage ? 'background-image: url("' + this.app.styling.backgroundImage + '");background-color: ' + this.app.styling.backgroundColor + (this.app.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : ";background-size: cover;") : 'background-color: ' + this.app.styling.backgroundColor + ';'
                    },
                    activated: function() {
                        for (var t = [], e = 0; e < this.rows.length; e++)
                            for (var i = 0; i < this.rows[e].objects.length; i++) (!this.rows[e].objects[i].isSelectableMultiple && this.rows[e].objects[i].isActive) ? t.push(this.rows[e].objects[i].id) : this.rows[e].objects[i].isSelectableMultiple && 0 !== this.rows[e].objects[i].multipleUseVariable ? t.push(this.rows[e].objects[i].id + "/ON#" + this.rows[e].objects[i].multipleUseVariable) : this.rows[e].objects[i].isImageUpload && this.rows[e].objects[i].image.length > 0 && t.push(this.rows[e].objects[i].id + "/IMG#" + this.rows[e].objects[i].image.replaceAll(",", "/CHAR#"));
                        return t
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
                        for (var t = [], e = 0; e < this.rows.length; e++)
                            for (var i = 0; i < this.rows[e].objects.length; i++) (!this.rows[e].objects[i].isSelectableMultiple && this.rows[e].objects[i].isActive) ? t.push((t.length > 0 ? " " : "") + this.rows[e].objects[i].title) : this.rows[e].objects[i].isSelectableMultiple && 0 !== this.rows[e].objects[i].multipleUseVariable && t.push((t.length > 0 ? " " : "") + this.rows[e].objects[i].title + "(Taken " + this.rows[e].objects[i].multipleUseVariable + " Times)");
                        return t
                    }
                },
                methods: {
                    cleanActivated: function() {
                        this.$store.commit({
                            type: "cleanActivated"
                        });
						var e = this.newActivated.split(","),
                            t = 0;
                        for (this.app.activated = e, s = 0; s < this.app.rows.length; s++)
                            for (this.app.rows[s].isEditModeOn = !1, r = 0; r < this.app.rows[s].objects.length; r++)
                                if (this.app.activated.includes(this.app.rows[s].objects[r].id)) {
                                    this.app.rows[s].objects[r].isActive = !0, this.app.rows[s].currentChoices += 1;
                                    for (var o = 0; o < this.app.rows[s].objects[r].scores.length; o++)
                                        for (var i = 0; i < this.app.pointTypes.length; i++) this.app.pointTypes[i].id == this.app.rows[s].objects[r].scores[o].id && this.app.rows[s].objects[r].scores[o].requireds.length <= 0 && (this.app.rows[s].objects[r].scores[o].isActive = !0, this.app.pointTypes[i].startingSum -= parseInt(this.app.rows[s].objects[r].scores[o].value))
                                } for (s = 0; s < this.app.rows.length; s++)
                            for (this.app.rows[s].isEditModeOn = !1, r = 0; r < this.app.rows[s].objects.length; r++)
                                if (this.app.activated.includes(this.app.rows[s].objects[r].id))
                                    for (o = 0; o < this.app.rows[s].objects[r].scores.length; o++)
                                        for (i = 0; i < this.app.pointTypes.length; i++) this.app.pointTypes[i].id == this.app.rows[s].objects[r].scores[o].id && this.app.rows[s].objects[r].scores[o].requireds.length > 0 && this.checkRequireds(this.app.rows[s].objects[r].scores[o]) && (this.app.rows[s].objects[r].scores[o].isActive = !0, this.app.pointTypes[i].startingSum -= parseInt(this.app.rows[s].objects[r].scores[o].value));
                        for (var s = 0; s < this.rows.length; s++)
                            for (var r = 0; r < this.rows[s].objects.length; r++)
                                if (this.rows[s].objects[r].isSelectableMultiple) {
                                    for (var a = 0; a < e.length; a++)
                                        if (this.rows[s].objects[r].id == e[a].split("/ON#")[0]) {
                                            if (t = e[a].split("/ON#")[1], t > 0) {
                                                this.multipleUseVariable = 0;
                                                for (var n = 0; n < t; n++) this.selectedOneMore(this.rows[s].objects[r], this.rows[s])
                                            } else if (t < 0) {
                                                this.multipleUseVariable = 0;
                                                for (var l = 0; l < -1 * t; l++) this.selectedOneLess(this.rows[s].objects[r], this.rows[s])
                                            }
                                        }
                                } else if (this.rows[s].objects[r].isImageUpload)
                            for (var c = 0; c < e.length; c++) this.rows[s].objects[r].id == e[c].split("/IMG#")[0] && (this.rows[s].objects[r].image = e[c].split("/IMG#")[1].replaceAll("/CHAR#", ","), e.splice(c, 1));
                        console.log(e)
                    },
					selectedOneMore: function(e, t) {
                        var s = !0;
                        if (e.isMultipleUseVariable) e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesPluss > e.multipleUseVariable ? (e.multipleUseVariable++, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable)) : s = !1;
                        else
                            for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesPluss > this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum++, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum)) : s = !1);
                        if (s)
						{
							for (var i = 0; i < e.scores.length; i++)
                                for (var s = 0; s < this.app.pointTypes.length; s++) {
									this.app.pointTypes[s].id == e.scores[i].id && this.checkRequireds(e.scores[i]) && (this.app.pointTypes[s].startingSum -= parseInt(e.scores[i].value));
								}
							if (e.selectedThisManyTimesProp > e.numMultipleTimesMinus) {
								if (e.isActive == !1) e.isActive = !0, t.currentChoices += 1;
							}
						}
                    },
                    selectedOneLess: function(e, t) {
                        var s = !0;
                        if (e.isMultipleUseVariable) e.multipleUseVariable = "undefined" === typeof e.multipleUseVariable ? 0 : e.multipleUseVariable, e.numMultipleTimesMinus < e.multipleUseVariable ? (e.multipleUseVariable--, this.$set(e, "selectedThisManyTimesProp", e.multipleUseVariable)) : s = !1;
                        else
                            for (var o = 0; o < this.app.pointTypes.length; o++) this.app.pointTypes[o].id == e.multipleScoreId && (e.numMultipleTimesMinus < this.app.pointTypes[o].startingSum ? (this.app.pointTypes[o].startingSum--, this.$set(e, "selectedThisManyTimesProp", this.app.pointTypes[o].startingSum)) : s = !1);
                        if (s)
						{
							for (var i = 0; i < e.scores.length; i++)
                                for (var s = 0; s < this.app.pointTypes.length; s++) {
									this.app.pointTypes[s].id == e.scores[i].id && this.checkRequireds(e.scores[i]) && (this.app.pointTypes[s].startingSum += parseInt(e.scores[i].value));
								}
							if (e.isActive == !0) {
								if (e.selectedThisManyTimesProp == e.numMultipleTimesMinus && ("undefined" === typeof e.forcedActivated || e.forcedActivated == !1)) e.isActive = !1, t.currentChoices -= 1;
							}
						}
                    },
                    checkRequireds: function(t) {
                        return this.$store.getters.checkRequireds(t)
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
                return i("v-dialog", {
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
                }, [i("v-btn", {
                    staticStyle: {
                        color: "black"
                    },
                    attrs: {
                        small: ""
                    },
                    on: {
                        click: function(e) {
                            return t.print()
                        }
                    }
                }, [t._v("Download Image (Go all the way to the bottom to load in the pictures first)")]), i("v-card-text", [i("v-container", [i("v-row", {
                    ref: "printThis"
                }, t._l(t.backpack, (function(e) {
                    return i("v-col", {
                        key: e.index,
                        staticClass: "pa-0",
                        attrs: {
                            cols: "12"
                        }
                    }, [i("app-Row", {
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
                }, [t._v("Close")])], 1)], 1)], 1)
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
                        dialog: !0
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
                        return this.app.styling.backgroundImage ? 'background-image: url("' + this.app.styling.backgroundImage + '");background-color: ' + this.app.styling.backgroundColor + (this.app.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : ";background-size: cover;") : 'background-color: ' + this.app.styling.backgroundColor + ';'
                    }
                },
                methods: {
                    cleanCurrentComponent: function() {
                        this.$emit("cleanCurrentComponent", "")
                    },
                    print: function() {
						var e = this;
						console.log(e.$refs.printThis);
						if (e.app.styling.backgroundImage) {
							e.$refs.printThis.style.backgroundImage = 'url("' + e.app.styling.backgroundImage + '")';
							e.styling.isBackgroundRepeat ? e.$refs.printThis.style.backgroundRepeat = 'repeat' : e.$refs.printThis.style.backgroundSize = 'cover';
							e.$refs.printThis.style.backgroundPosition = 'center';
							e.$refs.printThis.style.backgroundAttachment = 'fixed';
						}
						htmlToImage.toBlob(e.$refs.printThis, {
							backgroundColor: e.app.styling.backgroundImage ? undefined : e.app.styling.backgroundColor,
							type: "image/webp",
							quality: 0.9
						}).then(function(t) {
							console.log(t);
							var i = document.createEvent("MouseEvents"),
								s = document.createElement("a");
							s.download = "Finalized Build.webp";
							s.href = window.URL.createObjectURL(t);
							s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
							i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
							s.dispatchEvent(i);
							if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
						}).catch(function(error) {
							console.log('Fail to generate image, Segmenting and recreating the image...', error);
							var maxLength = 6e6;
							var container = e.$refs.printThis.cloneNode(true);

							console.log(container.innerHTML.length);

							function splitNodes(node, maxLength) {
								var parts = [];
								var currentPart = document.createElement("div");
								currentPart.style.cssText = node.style.cssText;
								var currentLength = 0;

								function addNodeToCurrentPart(node) {
									var clone = node.cloneNode(true);
									currentPart.appendChild(clone);
									currentLength += (new XMLSerializer().serializeToString(node)).length;
								}

								Array.from(node.childNodes).forEach(function(child) {
									var childLength = (new XMLSerializer().serializeToString(child)).length;
									if (currentLength + childLength > maxLength) {
										parts.push(currentPart.innerHTML);
										currentPart = document.createElement("div");
										currentPart.style.cssText = node.style.cssText;
										currentLength = 0;
									}
									addNodeToCurrentPart(child);
								});

								if (currentPart.innerHTML) {
									parts.push(currentPart.innerHTML);
								}

								return parts;
							}

							var parts = splitNodes(container, maxLength);

							if (parts.length > 1) {
								parts.forEach(function(part, index) {
									var tempDiv = document.createElement("div");
									tempDiv.innerHTML = part;
									e.$refs.printThis.appendChild(tempDiv);
									htmlToImage.toBlob(tempDiv, {
										backgroundImage: e.app.styling.backgroundImage,
										backgroundColor: e.app.styling.backgroundColor,
										type: "image/webp",
										quality: 0.9
									}).then(function(t) {
										console.log(t);
										var i = document.createEvent("MouseEvents"),
											s = document.createElement("a");
										s.download = "Finalized_Build_Part_" + (index + 1) + ".webp";
										s.href = window.URL.createObjectURL(t);
										s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
										i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
										s.dispatchEvent(i);
										e.$refs.printThis.removeChild(tempDiv);
										if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
									}).catch(function(error) {
										console.log('Fail to generate image', error);
										e.$refs.printThis.removeChild(tempDiv);
										if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
									});
								});
							}
						});
					}
                }
            },
            zt = Vt,
            $t = (i("2e98"), Object(b["a"])(zt, Mt, _t, !1, null, "26bce602", null)),
            Lt = $t.exports;
        v()($t, {
            VBtn: $["a"],
            VCard: L["a"],
            VCardActions: W["a"],
            VCardText: W["b"],
            VCol: S["a"],
            VContainer: E["a"],
            VDialog: N["a"],
            VRow: k["a"]
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
                        }
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
                        return this.app.styling.backgroundImage ? 'background-image: url("' + this.app.styling.backgroundImage + '");background-color: ' + this.app.styling.backgroundColor + (this.app.styling.isBackgroundRepeat ? ";background-repeat: repeat;" : ";background-size: cover;") : 'background-color: ' + this.app.styling.backgroundColor + ';'
                    },
                    pointBar: function() {
                        return "background-color: " + this.app.styling.barBackgroundColor + "; margin: " + this.app.styling.barMargin + "px; padding: " + this.app.styling.barPadding + "px;"
                    },
                    pointBarText: function() {
                        return "color: " + this.app.styling.barTextColor + "; margin: " + this.app.styling.barTextMargin + "px; padding: " + this.app.styling.barTextPadding + 'px;font-family: "' + this.app.styling.barTextFont + '";font-size: ' + this.app.styling.barTextSize + "px;"
                    },
					pointBarIcon: function() {
						return "undefined" !== typeof this.app.styling.barIconColor ? "color: " + this.app.styling.barIconColor + " !important;" : ""
					},
                    app: function() {
                        return this.$store.state.app
                    },
                    activated: function() {
                        return this.$store.state.app.activated
                    }
                },
                beforeCreate: function() {
					var t = this,
						e = new XMLHttpRequest(),
						lm = document.getElementById('lm'),
						indicator = document.getElementById('indicator');
					e.onreadystatechange = function() {
						if (4 == this.readyState && 200 == this.status) {
							var e = this.responseText,
							i = JSON.parse(e);
							t.$store.commit("loadApp", i)
						}
					};
					e.addEventListener('progress', function(e) {
						indicator.innerHTML = " Loading " + `${(e.loaded / 1e6).toFixed(1)} MB`;
					});
					e.addEventListener('loadend', function() {
						setTimeout(function() {
							lm.style.opacity = 1;
							indicator.remove();
						}, 1000);
						const Error_msg = 'Your browser does not support the .avif format.\n Some images may not be displayed.';
						new Promise(() => {
							const image = new Image();
							image.onerror = () => {alert(Error_msg);}
							image.onload = () => {}
							image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
						}).catch(() => false);
					});
					e.open("GET", "project.json", true), e.send();
				},
                created: function() {
                    window.addEventListener("resize", this.handleResize), this.handleResize()
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
                    print: function() {
						var e = this;
						console.log(e.$refs.printThis);
						if (e.app.styling.backgroundImage) {
							e.$refs.printThis.style.backgroundImage = 'url("' + e.app.styling.backgroundImage + '")';
							e.styling.isBackgroundRepeat ? e.$refs.printThis.style.backgroundRepeat = 'repeat' : e.$refs.printThis.style.backgroundSize = 'cover';
							e.$refs.printThis.style.backgroundPosition = 'center';
							e.$refs.printThis.style.backgroundAttachment = 'fixed';
						}
						htmlToImage.toBlob(e.$refs.printThis, {
							backgroundColor: e.app.styling.backgroundImage ? undefined : e.app.styling.backgroundColor,
							type: "image/webp",
							quality: 0.9
						}).then(function(t) {
							console.log(t);
							var i = document.createEvent("MouseEvents"),
								s = document.createElement("a");
							s.download = "Finalized Build.webp";
							s.href = window.URL.createObjectURL(t);
							s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
							i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
							s.dispatchEvent(i);
							if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
						}).catch(function(error) {
							console.log('Fail to generate image, Segmenting and recreating the image...', error);
							var maxLength = 6e6;
							var container = e.$refs.printThis.cloneNode(true);

							console.log(container.innerHTML.length);

							function splitNodes(node, maxLength) {
								var parts = [];
								var currentPart = document.createElement("div");
								currentPart.style.cssText = node.style.cssText;
								var currentLength = 0;

								function addNodeToCurrentPart(node) {
									var clone = node.cloneNode(true);
									currentPart.appendChild(clone);
									currentLength += (new XMLSerializer().serializeToString(node)).length;
								}

								Array.from(node.childNodes).forEach(function(child) {
									var childLength = (new XMLSerializer().serializeToString(child)).length;
									if (currentLength + childLength > maxLength) {
										parts.push(currentPart.innerHTML);
										currentPart = document.createElement("div");
										currentPart.style.cssText = node.style.cssText;
										currentLength = 0;
									}
									addNodeToCurrentPart(child);
								});

								if (currentPart.innerHTML) {
									parts.push(currentPart.innerHTML);
								}

								return parts;
							}

							var parts = splitNodes(container, maxLength);

							if (parts.length > 1) {
								parts.forEach(function(part, index) {
									var tempDiv = document.createElement("div");
									tempDiv.innerHTML = part;
									e.$refs.printThis.appendChild(tempDiv);
									htmlToImage.toBlob(tempDiv, {
										backgroundImage: e.app.styling.backgroundImage,
										backgroundColor: e.app.styling.backgroundColor,
										type: "image/webp",
										quality: 0.9
									}).then(function(t) {
										console.log(t);
										var i = document.createEvent("MouseEvents"),
											s = document.createElement("a");
										s.download = "Finalized_Build_Part_" + (index + 1) + ".webp";
										s.href = window.URL.createObjectURL(t);
										s.dataset.downloadurl = ["image/webp", s.download, s.href].join(":");
										i.initEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
										s.dispatchEvent(i);
										e.$refs.printThis.removeChild(tempDiv);
										if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
									}).catch(function(error) {
										console.log('Failed to generate image', error);
										e.$refs.printThis.removeChild(tempDiv);
										if (e.app.styling.backgroundImage) e.$refs.printThis.removeAttribute('style');
										alert('Failed to download the image.\nPlease try again with a different browser.');
									});
								});
							}
						});
					}
                }
            },
            Ut = Nt,
            Ht = (i("c64f"), i("b81c")),
            Dt = Object(b["a"])(Ut, a, n, !1, null, null, null),
            Gt = Dt.exports;
        v()(Dt, {
            VBottomNavigation: Ht["a"],
            VBtn: $["a"],
            VCol: S["a"],
            VIcon: Q["a"],
            VRow: k["a"]
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
                        words: [],
                        groups: [],
                        chapters: [],
                        activated: [],
                        rows: [],
                        pointTypes: [],
                        variables: [],
						cancelForcedActivated: [],
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
                            rowTitleColor: "000000",
                            rowTextColor: "000000",
                            objectTitleColor: "000000",
                            objectTextColor: "000000",
                            addonTitleColor: "000000",
                            addonTextColor: "000000",
                            scoreTextColor: "000000",
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
                            selFilterBgColor: "#70FF7EFF",
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
                            reqFilterBgColor: "#FFFFFFFF",
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
                            backPackWidth: 1200
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
                    checkRequireds: function(t, e) {
                        return function(i) {
                            if ("undefined" !== typeof i.requireds)
                                for (var s = 0; s < i.requireds.length; s++) {
                                    var o = !1;
                                    if ("undefined" !== typeof i.requireds[s].requireds ? e.checkRequireds(i.requireds[s]) && (o = !0) : o = !0, o) {
                                        if (i.requireds[s].required) {
											if ("id" == i.requireds[s].type) {
												var ri = i.requireds[s].reqId.split("/ON#");
												if (ri.length > 1) {
													if (!t.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (!t.app.activated.includes(i.requireds[s].reqId)) return !1;
												}
											}
                                            if ("points" == i.requireds[s].type) {
                                                if ("undefined" == typeof i.requireds[s].operator) {
                                                    for (var r = 0; r < t.app.pointTypes.length; r++)
                                                        if (i.requireds[s].reqId == t.app.pointTypes[r].id && i.requireds[s].reqPoints > t.app.pointTypes[r].startingSum) return !1
                                                } else
                                                    for (var a = 0; a < t.app.pointTypes.length; a++)
                                                        if (i.requireds[s].reqId == t.app.pointTypes[a].id)
                                                            if (isNaN(parseInt(i.requireds[s].reqPoints))) {
                                                                for (var n = 0; n < t.app.pointTypes.length; n++)
                                                                    if (i.requireds[s].startingSum == t.app.pointTypes[n].id) {
                                                                        if (1 == i.requireds[s].operator && t.app.pointTypes[a].startingSum >= t.app.pointTypes[n].startingSum) return !1;
                                                                        if (2 == i.requireds[s].operator && t.app.pointTypes[a].startingSum > t.app.pointTypes[n].startingSum) return !1;
                                                                        if (3 == i.requireds[s].operator && parseInt(t.app.pointTypes[a].startingSum) !== parseInt(t.app.pointTypes[n].startingSum)) return !1;
                                                                        if (4 == i.requireds[s].operator && t.app.pointTypes[a].startingSum < t.app.pointTypes[n].startingSum) return !1;
                                                                        if (5 == i.requireds[s].operator && t.app.pointTypes[a].startingSum <= t.app.pointTypes[n].startingSum) return !1
                                                                    }
                                                            } else {
                                                                if (1 == i.requireds[s].operator && i.requireds[s].reqPoints >= t.app.pointTypes[a].startingSum) return !1;
                                                                if (2 == i.requireds[s].operator && i.requireds[s].reqPoints > t.app.pointTypes[a].startingSum) return !1;
                                                                if (3 == i.requireds[s].operator && parseInt(i.requireds[s].reqPoints) !== parseInt(t.app.pointTypes[a].startingSum)) return !1;
                                                                if (4 == i.requireds[s].operator && i.requireds[s].reqPoints < t.app.pointTypes[a].startingSum) return !1;
                                                                if (5 == i.requireds[s].operator && i.requireds[s].reqPoints <= t.app.pointTypes[a].startingSum) return !1
                                                            }
                                            } else if ("or" == i.requireds[s].type) {
												i.requireds[s].orNum = "undefined" === typeof i.requireds[s].orNum ? 1 : i.requireds[s].orNum;
                                                for (var p = 0, l = 0; l < i.requireds[s].orRequired.length; l++) t.app.activated.includes(i.requireds[s].orRequired[l].req) && "" != i.requireds[s].orRequired[l].req && p++;
                                                if (p < i.requireds[s].orNum) return !1
                                            } else if ("pointCompare" == i.requireds[s].type) {
												for (var c = void 0, h = void 0, d = 0; d < t.app.pointTypes.length; d++) i.requireds[s].reqId == t.app.pointTypes[d].id && (c = t.app.pointTypes[d].startingSum);
                                                for (var u = 0; u < t.app.pointTypes.length; u++) i.requireds[s].reqId1 == t.app.pointTypes[u].id && (h = t.app.pointTypes[u].startingSum);
												if ("undefined" !== typeof i.requireds[s].more) {
													for (var cp = 0, a = 0; a < i.requireds[s].more.length; a++) {
														if ("undefined" !== typeof i.requireds[s].more[a].id) {
															for (var r = 0; r < t.app.pointTypes.length; r++) o.requireds[s].more[a].id == e.app.pointTypes[r].id && (cp = e.app.pointTypes[r].startingSum);
														} else {
															cp = i.requireds[s].more[a].points;
														}
														if (1 == i.requireds[s].more[a].operator) h += parseInt(cp);
														else if (2 == i.requireds[s].more[a].operator) h -= parseInt(cp);
														else if (3 == i.requireds[s].more[a].operator) h *= parseInt(cp);
														else if (4 == i.requireds[s].more[a].operator) h /= parseInt(cp);
													}
												}
                                                if (c <= h && 1 == i.requireds[s].operator) return !1;
                                                if (c != h && 2 == i.requireds[s].operator) return !1;
                                                if (c < h && 3 == i.requireds[s].operator) return !1;
                                                if (c > h && 4 == i.requireds[s].operator) return !1;
                                                if (c >= h && 5 == i.requireds[s].operator) return !1
                                            }
                                        }
                                        if (!i.requireds[s].required) {
											if ("id" == i.requireds[s].type) {
												var ri = i.requireds[s].reqId.split("/ON#");
												if (ri.length > 1) {
													if (t.app.activated.some(RI => {if (RI.includes(ri[0] + "/ON#")) {return parseInt(RI.split("/ON#")[1]) >= parseInt(ri[1])} return !1})) return !1;
												} else {
													if (t.app.activated.includes(i.requireds[s].reqId)) return !1;
												}
											}
                                            if ("points" == i.requireds[s].type) {
                                                if ("undefined" == typeof i.requireds[s].operator) {
                                                    for (var g = 0; g < t.app.pointTypes.length; g++)
                                                        if (i.requireds[s].reqId == t.app.pointTypes[g].id && i.requireds[s].reqPoints <= t.app.pointTypes[g].startingSum) return !1
                                                } else
                                                    for (var w = 0; w < t.app.pointTypes.length; w++)
                                                        if (i.requireds[s].reqId == t.app.pointTypes[w].id)
                                                            if (isNaN(parseInt(i.requireds[s].reqPoints))) {
                                                                for (var f = 0; f < t.app.pointTypes.length; f++)
                                                                    if (i.requireds[s].reqPoints == t.app.pointTypes[f].id) {
                                                                        if (1 == i.requireds[s].operator && t.app.pointTypes[w].startingSum >= t.app.pointTypes[f].startingSum) return !1;
                                                                        if (2 == i.requireds[s].operator && t.app.pointTypes[w].startingSum > t.app.pointTypes[f].startingSum) return !1;
                                                                        if (3 == i.requireds[s].operator && parseInt(t.app.pointTypes[w].startingSum) !== parseInt(t.app.pointTypes[f].startingSum)) return !1;
                                                                        if (4 == i.requireds[s].operator && t.app.pointTypes[w].startingSum < t.app.pointTypes[f].startingSum) return !1;
                                                                        if (5 == i.requireds[s].operator && t.app.pointTypes[w].startingSum <= t.app.pointTypes[f].startingSum) return !1
                                                                    }
                                                            } else {
                                                                if (1 == i.requireds[s].operator && i.requireds[s].reqPoints >= t.app.pointTypes[w].startingSum) return !1;
                                                                if (2 == i.requireds[s].operator && i.requireds[s].reqPoints > t.app.pointTypes[w].startingSum) return !1;
                                                                if (3 == i.requireds[s].operator && parseInt(i.requireds[s].reqPoints) !== parseInt(t.app.pointTypes[w].startingSum)) return !1;
                                                                if (4 == i.requireds[s].operator && i.requireds[s].reqPoints < t.app.pointTypes[w].startingSum) return !1;
                                                                if (5 == i.requireds[s].operator && i.requireds[s].reqPoints <= t.app.pointTypes[w].startingSum) return !1
                                                            }
                                            } else if ("or" == i.requireds[s].type) {
                                                for (var b = !1, m = 0; m < i.requireds[s].orRequired.length; m++) t.app.activated.includes(i.requireds[s].orRequired[m].req) || "" == i.requireds[s].orRequired[m].req || (b = !0);
                                                if (!b) return !1
                                            }
                                        }
                                    }
                                }
                            return !0
                        }
                    }
                },
                mutations: {
                    loadApp: function(t, e) {
                        t.app = e
                    },
                    cleanActivated: function(t) {
                        var e, i, s, o, r, a, n, ps, vv, f, b, ee;
                        for (i = 0; i < t.app.rows.length; i++)
                            for (t.app.rows[i].isEditModeOn = !1, t.app.rows[i].allowedChoicesChange > 0 && (t.app.rows[i].allowedChoices -= t.app.rows[i].allowedChoicesChange), e = 0; e < t.app.rows[i].objects.length; e++)
                                if (t.app.rows[i].objects[e].isSelectableMultiple) {
                                    if (t.app.rows[i].objects[e].isMultipleUseVariable)
                                        for (s = 0; s < t.app.rows[i].objects[e].multipleUseVariable - 1; s++) {
                                                for (r = 0; r < t.app.rows[i].objects[e].scores.length; r++)
                                                    for (a = 0; a < t.app.pointTypes.length; a++) t.app.pointTypes[a].id == t.app.rows[i].objects[e].scores[r].id && this.getters.checkRequireds(t.app.rows[i].objects[e].scores[r]) && (t.app.pointTypes[a].startingSum += parseInt(t.app.rows[i].objects[e].scores[r].value))
                                        } else
                                            for (s = 0; s < t.app.rows[i].objects[e].numMultipleTimesPluss - t.app.rows[i].objects[e].numMultipleTimesMinus; s++) {
                                                for (n = 0; n < t.app.pointTypes.length; n++) t.app.pointTypes[n].id == t.app.rows[i].objects[e].multipleScoreId && (t.app.rows[i].objects[e].numMultipleTimesMinus < t.app.pointTypes[n].startingSum) && t.app.pointTypes[n].startingSum--;
                                            }
                                    t.app.rows[i].objects[e].multipleUseVariable = 0, t.app.rows[i].objects[e].selectedThisManyTimesProp = 0, t.app.rows[i].objects[e].forcedActivated = !1
                                }
						for (i = 0; i < t.app.rows.length; i++) {
							for (t.app.rows[i].isEditModeOn = !1, e = 0; e < t.app.rows[i].objects.length; e++) {
								if (t.app.rows[i].objects[e].isActive) {
									t.app.rows[i].objects[e].isActive = !1, t.app.rows[i].currentChoices = 0, t.app.rows[i].objects[e].forcedActivated = !1
									if (t.app.rows[i].objects[e].activateOtherChoice && "undefined" !== typeof t.app.rows[i].objects[e].activateThisChoice) {
										if (t.app.rows[i].objects[e].isActivateRandom && "undefined" !== typeof t.app.rows[i].objects[e].activatedRandom) {
											for (vv = t.app.rows[i].objects[e].activatedRandom.length - 1; vv >= 0; vv--)
												for (f = 0; f < t.app.rows.length; f++)
													for (b = 0; b < t.app.rows[f].objects.length; b++)
														if (t.app.rows[f].objects[b].isSelectableMultiple) {
															if (t.app.rows[f].objects[b].id == t.app.rows[i].objects[e].activatedRandom[vv].split("/ON#")[0]) {
																if (ee = t.app.rows[i].objects[e].activatedRandom[vv].split("/ON#")[1], ee > 0) {
																	for (var nn = 0; nn < ee; nn++) 
																		t.app.rows[f].objects[b].numMultipleTimesMinus--;
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++)
																		t.app.rows[f].objects[b].numMultipleTimesMinus++;
																}
															}
														}
										} else if (!t.app.rows[i].objects[e].isActivateRandom) {
											for (ps = t.app.rows[i].objects[e].activateThisChoice.split(","), vv = ps.length - 1; vv >= 0; vv--)
												for (f = 0; f < t.app.rows.length; f++)
													for (b = 0; b < t.app.rows[f].objects.length; b++)
														if (t.app.rows[f].objects[b].isSelectableMultiple) {
															if (t.app.rows[f].objects[b].id == ps[vv].split("/ON#")[0]) {
																if (ee = ps[vv].split("/ON#")[1], ee > 0) {
																	for (var nn = 0; nn < ee; nn++) 
																		t.app.rows[f].objects[b].numMultipleTimesMinus--;
																} else if (ee < 0) {
																	for (var pp = 0; pp < -1 * ee; pp++)
																		t.app.rows[f].objects[b].numMultipleTimesMinus++;
																}
															}
														}
										}
									}
									for (var c = 0; c < t.app.rows[i].objects[e].scores.length; c++)
										for (var h = 0; h < t.app.pointTypes.length; h++) t.app.pointTypes[h].id == t.app.rows[i].objects[e].scores[c].id && ("undefined" !== typeof t.app.rows[i].objects[e].scores[c].requireds || t.app.rows[i].objects[e].scores[c].requireds > 0 ? t.app.rows[i].objects[e].scores[c].isActive && (t.app.rows[i].objects[e].scores[c].isActive = !1, t.app.pointTypes[h].startingSum += parseInt(t.app.rows[i].objects[e].scores[c].value)) : t.app.pointTypes[h].startingSum += parseInt(t.app.rows[i].objects[e].scores[c].value))
								} else t.app.rows[i].objects[e].isImageUpload && (t.app.rows[i].objects[e].image = "")
							}
						}
						t.app.activated.splice(0);
                    },
                    addNewPointType: function(t, e) {
                        t.app.pointTypes.push({
                            id: e.id,
                            name: e.name,
                            startingSum: e.startingSum,
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
// //# sourceMappingURL=app.c533aa25.js.map