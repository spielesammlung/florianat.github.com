webpackJsonp([5], {
	"4+yF": function (t, e, a) {
		"use strict";
		var n = a("HwcC"),
		r = a("IvYF");
		e.a = {
			components: {
				Navbar: n.a,
				Username: r.a
			}
		}
	},
	"7rll": function (t, e, a) {
		var n = a("XUnZ");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		a("rjj0")("778a6aa3", n, !1, {
			sourceMap: !1
		})
	},
	FO9H: function (t, e, a) {
		"use strict";
		var n = function () {
			var t = this,
			e = t.$createElement,
			a = t._self._c || e;
			return a("div", {
				staticClass: "username-bar"
			}, [a("form", {
						on: {
							submit: function (e) {
								t.change()
							}
						}
					}, [a("input", {
								directives: [{
										name: "model",
										rawName: "v-model.trim",
										value: t.username,
										expression: "username",
										modifiers: {
											trim: !0
										}
									}
								],
								attrs: {
									type: "text",
									placeholder: "Dein BGG Benutzername"
								},
								domProps: {
									value: t.username
								},
								on: {
									input: function (e) {
										e.target.composing || (t.username = e.target.value.trim())
									},
									blur: function (e) {
										t.$forceUpdate()
									}
								}
							}), a("button", {
								on: {
									click: function (e) {
										t.change()
									}
								}
							}, [t._v("Anderer Spieler")])])])
		};
		n._withStripped = !0;
		var r = {
			render: n,
			staticRenderFns: []
		};
		e.a = r
	},
	HwcC: function (t, e, a) {
		"use strict";
		var n = a("RwsA"),
		r = a("VMOx"),
		i = !1;
		var o = function (t) {
			i || a("eMFG")
		},
		s = a("VU/8")(n.a, r.a, !1, o, "data-v-cfc91daa", null);
		s.options.__file = "components/Navbar.vue",
		e.a = s.exports
	},
	IvYF: function (t, e, a) {
		"use strict";
		var n = a("RXsQ"),
		r = a("FO9H"),
		i = !1;
		var o = function (t) {
			i || a("bJ/b")
		},
		s = a("VU/8")(n.a, r.a, !1, o, "data-v-341d139e", null);
		s.options.__file = "components/Username.vue",
		e.a = s.exports
	},
	Ma2J: function (t, e, a) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = a("4+yF"),
		r = a("R7nB"),
		i = !1;
		var o = function (t) {
			i || a("7rll")
		},
		s = a("VU/8")(n.a, r.a, !1, o, "data-v-314f53c6", null);
		s.options.__file = "layouts/default.vue",
		e.default = s.exports
	},
	OPCk: function (t, e, a) {
		(t.exports = a("FZ+f")(!1)).push([t.i, ".username-bar[data-v-341d139e]{font-size:12px}input[type=text][data-v-341d139e]{margin-right:16px;margin-right:1rem}button[data-v-341d139e]{cursor:pointer}", ""])
	},
	R7nB: function (t, e, a) {
		"use strict";
		var n = function () {
			var t = this.$createElement,
			e = this._self._c || t;
			return e("div", {
				staticClass: "app"
			}, [e("div", {
						staticClass: "main"
					}, [e("header", [e("navbar"), e("username")], 1), e("nuxt")], 1)])
		};
		n._withStripped = !0;
		var r = {
			render: n,
			staticRenderFns: []
		};
		e.a = r
	},
	RXsQ: function (t, e, a) {
		"use strict";
		var n = a("w64q");
		e.a = {
			methods: {
				change: function () {
					n.a.set("username", this.username),
					location.reload()
				}
			},
			props: {
				username: {
				default:
					n.a.get("username"),
					type: String
				}
			}
		}
	},
	RwsA: function (t, e, a) {
		"use strict";
		var n = a("NYxO");
		e.a = {
			computed: Object(n.mapGetters)(["isAuthenticated"])
		}
	},
	VMOx: function (t, e, a) {
		"use strict";
		var n = function () {
			var t = this.$createElement,
			e = this._self._c || t;
			return e("b-nav", {
				staticClass: "header"
			}, [e("b-nav-item", [e("nuxt-link", {
								attrs: {
									to: "/?userid=Spielkreis_Ebenthal"
								}
							}, [this._v("Aktuelle Spielesammlung des Spielkreis Ebenthal")])], 1)], 1)
		};
		n._withStripped = !0;
		var r = {
			render: n,
			staticRenderFns: []
		};
		e.a = r
	},
	XUnZ: function (t, e, a) {
		(t.exports = a("FZ+f")(!1)).push([t.i, ".app[data-v-314f53c6]{height:100vh;width:100vw}.main[data-v-314f53c6]{margin:0 auto;padding:30px;padding:1.875rem}header[data-v-314f53c6]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:16px;margin-bottom:1rem}", ""])
	},
	"bJ/b": function (t, e, a) {
		var n = a("OPCk");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		a("rjj0")("7ad5934a", n, !1, {
			sourceMap: !1
		})
	},
	dyoD: function (t, e, a) {
		(t.exports = a("FZ+f")(!1)).push([t.i, ".header[data-v-cfc91daa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;margin-bottom:20px;font-size:14px;font-size:.875rem}a[data-v-cfc91daa]{color:#999;text-decoration:none;text-transform:uppercase;padding-top:2px;padding-bottom:2px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-transition:color .25s;transition:color .25s;font-weight:400;line-height:normal}a[data-v-cfc91daa]:hover{color:#333}a.nuxt-link-active[data-v-cfc91daa]{color:#333;border-top:1px solid #333;border-bottom:1px solid #333;font-weight:600}", ""])
	},
	eMFG: function (t, e, a) {
		var n = a("dyoD");
		"string" == typeof n && (n = [[t.i, n, ""]]),
		n.locals && (t.exports = n.locals);
		a("rjj0")("54efbdb9", n, !1, {
			sourceMap: !1
		})
	},
	w64q: function (t, e, a) {
		"use strict";
		var n = a("Zrlr"),
		r = a.n(n),
		i = a("wxAW"),
		o = a.n(i),
		s = function () {
			function t() {
				r()(this, t)
			}
			return o()(t, null, [{
						key: "set",
						value: function (t, e, a) {
							a || (a = 3650);
							var n = new Date;
							n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
							var r = "expires=" + n.toUTCString();
							document.cookie = t + "=" + e + ";" + r + ";path=/"
						}
					}, {
						key: "get",
						value: function (t) {
							for (var e = t + "=", a = decodeURIComponent(document.cookie).split(";"), n = 0; n < a.length; n++) {
								for (var r = a[n]; " " === r.charAt(0); )
									r = r.substring(1);
								if (0 === r.indexOf(e))
									return r.substring(e.length, r.length)
							}
							return ""
						}
					}
				]),
			t
		}
		();
		e.a = s
	}
});
