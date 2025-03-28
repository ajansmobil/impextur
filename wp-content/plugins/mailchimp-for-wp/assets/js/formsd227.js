!(function () {
  var e = {
      999: function (e) {
        function t() {
          this.listeners = {};
        }
        (t.prototype.emit = function (e, t) {
          var r;
          (this.listeners[e] =
            null !== (r = this.listeners[e]) && void 0 !== r ? r : []),
            this.listeners[e].forEach(function (e) {
              return e.apply(null, t);
            });
        }),
          (t.prototype.on = function (e, t) {
            var r;
            (this.listeners[e] =
              null !== (r = this.listeners[e]) && void 0 !== r ? r : []),
              this.listeners[e].push(t);
          }),
          (e.exports = t);
      },
      1677: function () {
        function e(e) {
          for (
            var t = !!e.getAttribute("data-show-if"),
              r = t
                ? e.getAttribute("data-show-if").split(":")
                : e.getAttribute("data-hide-if").split(":"),
              n = r[0],
              i = (r.length > 1 ? r[1] : "*").split("|"),
              a = (function (e, t) {
                for (
                  var r = [],
                    n = e.querySelectorAll(
                      'input[name="' +
                        t +
                        '"],select[name="' +
                        t +
                        '"],textarea[name="' +
                        t +
                        '"]',
                    ),
                    i = 0;
                  i < n.length;
                  i++
                ) {
                  var a = n[i];
                  (("radio" !== a.type && "checkbox" !== a.type) ||
                    a.checked) &&
                    r.push(a.value);
                }
                return r;
              })(
                (function (e) {
                  for (var t = e; t.parentElement; )
                    if ("FORM" === (t = t.parentElement).tagName) return t;
                  return null;
                })(e),
                n,
              ),
              o = !1,
              s = 0;
            s < a.length;
            s++
          ) {
            var u = a[s];
            if (
              (o = i.indexOf(u) > -1 || (i.indexOf("*") > -1 && u.length > 0))
            )
              break;
          }
          e.style.display = t ? (o ? "" : "none") : o ? "none" : "";
          for (
            var c = e.querySelectorAll("input,select,textarea"), l = 0;
            l < c.length;
            l++
          ) {
            var f = c[l];
            (o || t) &&
              f.getAttribute("data-was-required") &&
              ((f.required = !0), f.removeAttribute("data-was-required")),
              (o && t) ||
                !f.required ||
                (f.setAttribute("data-was-required", "true"),
                (f.required = !1));
          }
        }
        function t() {
          for (
            var t = document.querySelectorAll(
                ".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]",
              ),
              r = 0;
            r < t.length;
            r++
          )
            e(t[r]);
        }
        function r(t) {
          if (
            t.target &&
            t.target.form &&
            !(t.target.form.className.indexOf("mc4wp-form") < 0)
          )
            for (
              var r = t.target.form.querySelectorAll(
                  "[data-show-if],[data-hide-if]",
                ),
                n = 0;
              n < r.length;
              n++
            )
              e(r[n]);
        }
        document.addEventListener("keyup", r, !0),
          document.addEventListener("change", r, !0),
          document.addEventListener("mc4wp-refresh", t, !0),
          window.addEventListener("load", t),
          t();
      },
      2573: function (e, t, r) {
        var n = r(7422),
          i = r(3409),
          a = function (e, t) {
            (this.id = e),
              (this.element = t || document.createElement("form")),
              (this.name =
                this.element.getAttribute("data-name") || "Form #" + this.id),
              (this.errors = []),
              (this.started = !1);
          };
        (a.prototype.setData = function (e) {
          try {
            i(this.element, e);
          } catch (e) {
            console.error(e);
          }
        }),
          (a.prototype.getData = function () {
            return n(this.element, { hash: !0, empty: !0 });
          }),
          (a.prototype.getSerializedData = function () {
            return n(this.element, { hash: !1, empty: !0 });
          }),
          (a.prototype.setResponse = function (e) {
            this.element.querySelector(".mc4wp-response").innerHTML = e;
          }),
          (a.prototype.reset = function () {
            this.setResponse(""),
              (this.element.querySelector(".mc4wp-form-fields").style.display =
                ""),
              this.element.reset();
          }),
          (e.exports = a);
      },
      8592: function (e, t, r) {
        var n = r(2573),
          i = [],
          a = new (r(999))();
        function o(e, t) {
          t = t || parseInt(e.getAttribute("data-id")) || 0;
          var r = new n(t, e);
          return i.push(r), r;
        }
        e.exports = {
          get: function (e) {
            e = parseInt(e);
            for (var t = 0; t < i.length; t++) if (i[t].id === e) return i[t];
            return o(document.querySelector(".mc4wp-form-" + e), e);
          },
          getByElement: function (e) {
            for (var t = e.form || e, r = 0; r < i.length; r++)
              if (i[r].element === t) return i[r];
            return o(t);
          },
          on: function (e, t) {
            a.on(e, t);
          },
          trigger: function (e, t) {
            "submit" === e || e.indexOf(".submit") > 0
              ? (a.emit(t[0].id + "." + e, t), a.emit(e, t))
              : window.setTimeout(function () {
                  a.emit(t[0].id + "." + e, t), a.emit(e, t);
                }, 10);
          },
        };
      },
      7422: function (e) {
        var t = /^(?:submit|button|image|reset|file)$/i,
          r = /^(?:input|select|textarea|keygen)/i,
          n = /(\[[^\[\]]*\])/g;
        function i(e, t, r) {
          if (0 === t.length) return r;
          var n = t.shift(),
            a = n.match(/^\[(.+?)\]$/);
          if ("[]" === n)
            return (
              (e = e || []),
              Array.isArray(e)
                ? e.push(i(null, t, r))
                : ((e._values = e._values || []),
                  e._values.push(i(null, t, r))),
              e
            );
          if (a) {
            var o = a[1],
              s = +o;
            isNaN(s)
              ? ((e = e || {})[o] = i(e[o], t, r))
              : ((e = e || [])[s] = i(e[s], t, r));
          } else e[n] = i(e[n], t, r);
          return e;
        }
        function a(e, t, r) {
          if (t.match(n))
            i(
              e,
              (function (e) {
                var t = [],
                  r = new RegExp(n),
                  i = /^([^\[\]]*)/.exec(e);
                for (i[1] && t.push(i[1]); null !== (i = r.exec(e)); )
                  t.push(i[1]);
                return t;
              })(t),
              r,
            );
          else {
            var a = e[t];
            a ? (Array.isArray(a) || (e[t] = [a]), e[t].push(r)) : (e[t] = r);
          }
          return e;
        }
        function o(e, t, r) {
          return (
            (r = r.replace(/(\r)?\n/g, "\r\n")),
            (r = (r = encodeURIComponent(r)).replace(/%20/g, "+")),
            e + (e ? "&" : "") + encodeURIComponent(t) + "=" + r
          );
        }
        e.exports = function (e, n) {
          "object" != typeof n
            ? (n = { hash: !!n })
            : void 0 === n.hash && (n.hash = !0);
          for (
            var i = n.hash ? {} : "",
              s = n.serializer || (n.hash ? a : o),
              u = e && e.elements ? e.elements : [],
              c = Object.create(null),
              l = 0;
            l < u.length;
            ++l
          ) {
            var f = u[l];
            if (
              (n.disabled || !f.disabled) &&
              f.name &&
              r.test(f.nodeName) &&
              !t.test(f.type)
            ) {
              var d = f.name,
                m = f.value;
              if (
                (("checkbox" !== f.type && "radio" !== f.type) ||
                  f.checked ||
                  (m = void 0),
                n.empty)
              ) {
                if (
                  ("checkbox" !== f.type || f.checked || (m = ""),
                  "radio" === f.type &&
                    (c[f.name] || f.checked
                      ? f.checked && (c[f.name] = !0)
                      : (c[f.name] = !1)),
                  null == m && "radio" == f.type)
                )
                  continue;
              } else if (!m) continue;
              if ("select-multiple" !== f.type) i = s(i, d, m);
              else {
                m = [];
                for (var p = f.options, h = !1, v = 0; v < p.length; ++v) {
                  var g = p[v],
                    y = n.empty && !g.value,
                    w = g.value || y;
                  g.selected &&
                    w &&
                    ((h = !0),
                    (i =
                      n.hash && "[]" !== d.slice(d.length - 2)
                        ? s(i, d + "[]", g.value)
                        : s(i, d, g.value)));
                }
                !h && n.empty && (i = s(i, d, ""));
              }
            }
          }
          if (n.empty) for (var d in c) c[d] || (i = s(i, d, ""));
          return i;
        };
      },
      3409: function (e) {
        e.exports &&
          (e.exports = function e(t, r, n) {
            for (var i in r)
              if (r.hasOwnProperty(i)) {
                var a = i,
                  o = r[i];
                if (
                  (void 0 === o && (o = ""),
                  null === o && (o = ""),
                  void 0 !== n && (a = n + "[" + i + "]"),
                  o.constructor === Array)
                )
                  a += "[]";
                else if ("object" == typeof o) {
                  e(t, o, a);
                  continue;
                }
                var s = t.elements.namedItem(a);
                if (s)
                  switch (s.type || s[0].type) {
                    default:
                      s.value = o;
                      break;
                    case "radio":
                    case "checkbox":
                      for (
                        var u = o.constructor === Array ? o : [o], c = 0;
                        c < s.length;
                        c++
                      )
                        s[c].checked = u.indexOf(s[c].value) > -1;
                      break;
                    case "select-multiple":
                      u = o.constructor === Array ? o : [o];
                      for (var l = 0; l < s.options.length; l++)
                        s.options[l].selected =
                          u.indexOf(s.options[l].value) > -1;
                      break;
                    case "select":
                    case "select-one":
                      s.value = o.toString() || o;
                      break;
                    case "date":
                      s.value = new Date(o).toISOString().split("T")[0];
                  }
              }
          });
      },
    },
    t = {};
  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  !(function () {
    var e = window.mc4wp || {},
      t = r(8592);
    function n(e, t) {
      document.addEventListener(
        e,
        function (e) {
          if (e.target) {
            var r = e.target;
            (("string" == typeof r.className &&
              r.className.indexOf("mc4wp-form") > -1) ||
              ("function" == typeof r.matches && r.matches(".mc4wp-form *"))) &&
              t.call(e, e);
          }
        },
        !0,
      );
    }
    r(1677),
      n("submit", function (e) {
        if (!e.defaultPrevented) {
          var r = t.getByElement(e.target);
          e.defaultPrevented || t.trigger("submit", [r, e]);
        }
      }),
      n("focus", function (e) {
        var r = t.getByElement(e.target);
        r.started || (t.trigger("started", [r, e]), (r.started = !0));
      }),
      n("change", function (e) {
        var r = t.getByElement(e.target);
        t.trigger("change", [r, e]);
      }),
      e.listeners &&
        ([].forEach.call(e.listeners, function (e) {
          t.on(e.event, e.callback);
        }),
        delete e.listeners),
      (e.forms = t),
      (window.mc4wp = e);
  })();
})();
