/*! dialogs-manager v4.8.1 | (c) Kobi Zaltzberg | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt 
 2020-08-17 18:55 */
!(function (a, b) {
  "use strict";
  var c = {
    widgetsTypes: {},
    createWidgetType: function (b, d, e) {
      e || (e = this.Widget);
      var f = function () {
          e.apply(this, arguments);
        },
        g = (f.prototype = new e(b));
      return (
        (g.types = g.types.concat([b])),
        a.extend(g, d),
        (g.constructor = f),
        (f.extend = function (a, b) {
          return c.createWidgetType(a, b, f);
        }),
        f
      );
    },
    addWidgetType: function (a, b, c) {
      return b && b.prototype instanceof this.Widget
        ? (this.widgetsTypes[a] = b)
        : (this.widgetsTypes[a] = this.createWidgetType(a, b, c));
    },
    getWidgetType: function (a) {
      return this.widgetsTypes[a];
    },
  };
  (c.Instance = function () {
    var b = this,
      d = {},
      e = {},
      f = function () {
        d.body = a("body");
      },
      g = function (b) {
        var c = {
          classPrefix: "dialog",
          effects: { show: "fadeIn", hide: "fadeOut" },
        };
        a.extend(e, c, b);
      };
    (this.createWidget = function (a, d) {
      var e = c.getWidgetType(a),
        f = new e(a);
      return (d = d || {}), f.init(b, d), f;
    }),
      (this.getSettings = function (a) {
        return a ? e[a] : Object.create(e);
      }),
      (this.init = function (a) {
        return g(a), f(), b;
      }),
      b.init();
  }),
    (c.Widget = function (b) {
      var d = this,
        e = {},
        f = {},
        g = {},
        h = 0,
        i = ["refreshPosition"],
        j = function () {
          var a = [g.window];
          g.iframe && a.push(jQuery(g.iframe[0].contentWindow)),
            a.forEach(function (a) {
              e.hide.onEscKeyPress && a.on("keyup", v),
                e.hide.onOutsideClick && a[0].addEventListener("click", p, !0),
                e.hide.onOutsideContextMenu &&
                  a[0].addEventListener("contextmenu", p, !0),
                e.position.autoRefresh && a.on("resize", d.refreshPosition);
            }),
            (e.hide.onClick || e.hide.onBackgroundClick) &&
              g.widget.on("click", n);
        },
        k = function (b, c) {
          var d = e.effects[b],
            f = g.widget;
          if (a.isFunction(d)) d.apply(f, c);
          else {
            if (!f[d]) throw "Reference Error: The effect " + d + " not found";
            f[d].apply(f, c);
          }
        },
        l = function () {
          var b = i.concat(d.getClosureMethods());
          a.each(b, function () {
            var a = this,
              b = d[a];
            d[a] = function () {
              b.apply(d, arguments);
            };
          });
        },
        m = function (a) {
          if (a.my) {
            var b = /left|right/,
              c = /([+-]\d+)?$/,
              d = g.iframe.offset(),
              e = g.iframe[0].contentWindow,
              f = a.my.split(" "),
              h = [];
            1 === f.length &&
              (b.test(f[0]) ? f.push("center") : f.unshift("center")),
              f.forEach(function (a, b) {
                var f = a.replace(c, function (a) {
                  return (
                    (a = +a || 0),
                    (a += b ? d.top - e.scrollY : d.left - e.scrollX),
                    a >= 0 && (a = "+" + a),
                    a
                  );
                });
                h.push(f);
              }),
              (a.my = h.join(" "));
          }
        },
        n = function (b) {
          if (!t(b)) {
            if (e.hide.onClick) {
              if (a(b.target).closest(e.selectors.preventClose).length) return;
            } else if (b.target !== this) return;
            d.hide();
          }
        },
        o = function (b) {
          return !!e.hide.ignore && !!a(b.target).closest(e.hide.ignore).length;
        },
        p = function (b) {
          t(b) || a(b.target).closest(g.widget).length || o(b) || d.hide();
        },
        q = function () {
          if (
            (d.addElement("widget"),
            d.addElement("header"),
            d.addElement("message"),
            d.addElement("window", window),
            d.addElement("body", document.body),
            d.addElement("container", e.container),
            e.iframe && d.addElement("iframe", e.iframe),
            e.closeButton)
          ) {
            e.closeButtonClass &&
              (e.closeButtonOptions.iconClass = e.closeButtonClass);
            const b = a("<div>", e.closeButtonOptions.attributes),
              c = a("<i>", { class: e.closeButtonOptions.iconClass });
            b.append(c), d.addElement("closeButton", b);
          }
          var f = d.getSettings("id");
          f && d.setID(f);
          var h = [];
          a.each(d.types, function () {
            h.push(e.classes.globalPrefix + "-type-" + this);
          }),
            h.push(d.getSettings("className")),
            g.widget.addClass(h.join(" "));
        },
        r = function (c, f) {
          var g = a.extend(!0, {}, c.getSettings());
          (e = {
            headerMessage: "",
            message: "",
            effects: g.effects,
            classes: {
              globalPrefix: g.classPrefix,
              prefix: g.classPrefix + "-" + b,
              preventScroll: g.classPrefix + "-prevent-scroll",
            },
            selectors: { preventClose: "." + g.classPrefix + "-prevent-close" },
            container: "body",
            preventScroll: !1,
            iframe: null,
            closeButton: !1,
            closeButtonOptions: {
              iconClass: g.classPrefix + "-close-button-icon",
              attributes: {},
            },
            position: {
              element: "widget",
              my: "center",
              at: "center",
              enable: !0,
              autoRefresh: !1,
            },
            hide: {
              auto: !1,
              autoDelay: 5e3,
              onClick: !1,
              onOutsideClick: !0,
              onOutsideContextMenu: !1,
              onBackgroundClick: !0,
              onEscKeyPress: !0,
              ignore: "",
            },
          }),
            a.extend(!0, e, d.getDefaultSettings(), f),
            s();
        },
        s = function () {
          a.each(e, function (a) {
            var b = a.match(/^on([A-Z].*)/);
            b &&
              ((b = b[1].charAt(0).toLowerCase() + b[1].slice(1)),
              d.on(b, this));
          });
        },
        t = function (a) {
          return "click" === a.type && 2 === a.button;
        },
        u = function (a) {
          return a.replace(/([a-z])([A-Z])/g, function () {
            return arguments[1] + "-" + arguments[2].toLowerCase();
          });
        },
        v = function (a) {
          var b = 27,
            c = a.which;
          b === c && d.hide();
        },
        w = function () {
          var a = [g.window];
          g.iframe && a.push(jQuery(g.iframe[0].contentWindow)),
            a.forEach(function (a) {
              e.hide.onEscKeyPress && a.off("keyup", v),
                e.hide.onOutsideClick &&
                  a[0].removeEventListener("click", p, !0),
                e.hide.onOutsideContextMenu &&
                  a[0].removeEventListener("contextmenu", p, !0),
                e.position.autoRefresh && a.off("resize", d.refreshPosition);
            }),
            (e.hide.onClick || e.hide.onBackgroundClick) &&
              g.widget.off("click", n);
        };
      (this.addElement = function (b, c, d) {
        var f = (g[b] = a(c || "<div>")),
          h = u(b);
        return (
          (d = d ? d + " " : ""),
          (d += e.classes.globalPrefix + "-" + h),
          (d += " " + e.classes.prefix + "-" + h),
          f.addClass(d),
          f
        );
      }),
        (this.destroy = function () {
          return w(), g.widget.remove(), d.trigger("destroy"), d;
        }),
        (this.getElements = function (a) {
          return a ? g[a] : g;
        }),
        (this.getSettings = function (a) {
          var b = Object.create(e);
          return a ? b[a] : b;
        }),
        (this.hide = function () {
          if (d.isVisible())
            return (
              clearTimeout(h),
              k("hide", arguments),
              w(),
              e.preventScroll &&
                d.getElements("body").removeClass(e.classes.preventScroll),
              d.trigger("hide"),
              d
            );
        }),
        (this.init = function (a, b) {
          if (!(a instanceof c.Instance))
            throw (
              "The " +
              d.widgetName +
              " must to be initialized from an instance of DialogsManager.Instance"
            );
          return (
            l(),
            d.trigger("init", b),
            r(a, b),
            q(),
            d.buildWidget(),
            d.attachEvents(),
            d.trigger("ready"),
            d
          );
        }),
        (this.isVisible = function () {
          return g.widget.is(":visible");
        }),
        (this.on = function (b, c) {
          if ("object" == typeof b)
            return (
              a.each(b, function (a) {
                d.on(a, this);
              }),
              d
            );
          var e = b.split(" ");
          return (
            e.forEach(function (a) {
              f[a] || (f[a] = []), f[a].push(c);
            }),
            d
          );
        }),
        (this.off = function (a, b) {
          if (!f[a]) return d;
          if (!b) return delete f[a], d;
          var c = f[a].indexOf(b);
          return -1 !== c && f[a].splice(c, 1), d;
        }),
        (this.refreshPosition = function () {
          if (e.position.enable) {
            var b = a.extend({}, e.position);
            g[b.of] && (b.of = g[b.of]),
              b.of || (b.of = window),
              e.iframe && m(b),
              g[b.element].position(b);
          }
        }),
        (this.setID = function (a) {
          return g.widget.attr("id", a), d;
        }),
        (this.setHeaderMessage = function (a) {
          return d.getElements("header").html(a), d;
        }),
        (this.setMessage = function (a) {
          return g.message.html(a), d;
        }),
        (this.setSettings = function (b, c) {
          return (
            jQuery.isPlainObject(c) ? a.extend(!0, e[b], c) : (e[b] = c), d
          );
        }),
        (this.show = function () {
          return (
            clearTimeout(h),
            g.widget.appendTo(g.container).hide(),
            k("show", arguments),
            d.refreshPosition(),
            e.hide.auto && (h = setTimeout(d.hide, e.hide.autoDelay)),
            j(),
            e.preventScroll &&
              d.getElements("body").addClass(e.classes.preventScroll),
            d.trigger("show"),
            d
          );
        }),
        (this.trigger = function (b, c) {
          var e = "on" + b[0].toUpperCase() + b.slice(1);
          d[e] && d[e](c);
          var g = f[b];
          if (g)
            return (
              a.each(g, function (a, b) {
                b.call(d, c);
              }),
              d
            );
        });
    }),
    (c.Widget.prototype.types = []),
    (c.Widget.prototype.buildWidget = function () {
      var a = this.getElements(),
        b = this.getSettings();
      a.widget.append(a.header, a.message),
        this.setHeaderMessage(b.headerMessage),
        this.setMessage(b.message),
        this.getSettings("closeButton") && a.widget.prepend(a.closeButton);
    }),
    (c.Widget.prototype.attachEvents = function () {
      var a = this;
      a.getSettings("closeButton") &&
        a.getElements("closeButton").on("click", function () {
          a.hide();
        });
    }),
    (c.Widget.prototype.getDefaultSettings = function () {
      return {};
    }),
    (c.Widget.prototype.getClosureMethods = function () {
      return [];
    }),
    (c.Widget.prototype.onHide = function () {}),
    (c.Widget.prototype.onShow = function () {}),
    (c.Widget.prototype.onInit = function () {}),
    (c.Widget.prototype.onReady = function () {}),
    (c.widgetsTypes.simple = c.Widget),
    c.addWidgetType("buttons", {
      activeKeyUp: function (a) {
        var b = 9;
        a.which === b && a.preventDefault(),
          this.hotKeys[a.which] && this.hotKeys[a.which](this);
      },
      activeKeyDown: function (a) {
        if (this.focusedButton) {
          var b = 9;
          if (a.which === b) {
            a.preventDefault();
            var c,
              d = this.focusedButton.index();
            a.shiftKey
              ? ((c = d - 1), c < 0 && (c = this.buttons.length - 1))
              : ((c = d + 1), c >= this.buttons.length && (c = 0)),
              (this.focusedButton = this.buttons[c].focus());
          }
        }
      },
      addButton: function (b) {
        var c = this,
          d = c.getSettings(),
          e = jQuery.extend(d.button, b),
          f = b.classes ? b.classes + " " : "";
        f += d.classes.globalPrefix + "-button";
        var g = c.addElement(b.name, a("<" + e.tag + ">").html(b.text), f);
        c.buttons.push(g);
        var h = function () {
          d.hide.onButtonClick && c.hide(),
            a.isFunction(b.callback) && b.callback.call(this, c);
        };
        return (
          g.on("click", h),
          b.hotKey && (this.hotKeys[b.hotKey] = h),
          this.getElements("buttonsWrapper").append(g),
          b.focus && (this.focusedButton = g),
          c
        );
      },
      bindHotKeys: function () {
        this.getElements("window").on({
          keyup: this.activeKeyUp,
          keydown: this.activeKeyDown,
        });
      },
      buildWidget: function () {
        c.Widget.prototype.buildWidget.apply(this, arguments);
        var a = this.addElement("buttonsWrapper");
        this.getElements("widget").append(a);
      },
      getClosureMethods: function () {
        return ["activeKeyUp", "activeKeyDown"];
      },
      getDefaultSettings: function () {
        return { hide: { onButtonClick: !0 }, button: { tag: "button" } };
      },
      onHide: function () {
        this.unbindHotKeys();
      },
      onInit: function () {
        (this.buttons = []), (this.hotKeys = {}), (this.focusedButton = null);
      },
      onShow: function () {
        this.bindHotKeys(),
          this.focusedButton || (this.focusedButton = this.buttons[0]),
          this.focusedButton && this.focusedButton.focus();
      },
      unbindHotKeys: function () {
        this.getElements("window").off({
          keyup: this.activeKeyUp,
          keydown: this.activeKeyDown,
        });
      },
    }),
    c.addWidgetType(
      "lightbox",
      c.getWidgetType("buttons").extend("lightbox", {
        getDefaultSettings: function () {
          var b = c
            .getWidgetType("buttons")
            .prototype.getDefaultSettings.apply(this, arguments);
          return a.extend(!0, b, {
            contentWidth: "auto",
            contentHeight: "auto",
            position: {
              element: "widgetContent",
              of: "widget",
              autoRefresh: !0,
            },
          });
        },
        buildWidget: function () {
          c.getWidgetType("buttons").prototype.buildWidget.apply(
            this,
            arguments,
          );
          var a = this.addElement("widgetContent"),
            b = this.getElements();
          a.append(b.header, b.message, b.buttonsWrapper),
            b.widget.html(a),
            b.closeButton && a.prepend(b.closeButton);
        },
        onReady: function () {
          var a = this.getElements(),
            b = this.getSettings();
          "auto" !== b.contentWidth && a.message.width(b.contentWidth),
            "auto" !== b.contentHeight && a.message.height(b.contentHeight);
        },
      }),
    ),
    c.addWidgetType(
      "confirm",
      c.getWidgetType("lightbox").extend("confirm", {
        onReady: function () {
          c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
          var a = this.getSettings("strings"),
            b = "cancel" === this.getSettings("defaultOption");
          this.addButton({
            name: "cancel",
            text: a.cancel,
            callback: function (a) {
              a.trigger("cancel");
            },
            focus: b,
          }),
            this.addButton({
              name: "ok",
              text: a.confirm,
              callback: function (a) {
                a.trigger("confirm");
              },
              focus: !b,
            });
        },
        getDefaultSettings: function () {
          var a = c
            .getWidgetType("lightbox")
            .prototype.getDefaultSettings.apply(this, arguments);
          return (
            (a.strings = { confirm: "OK", cancel: "Cancel" }),
            (a.defaultOption = "cancel"),
            a
          );
        },
      }),
    ),
    c.addWidgetType(
      "alert",
      c.getWidgetType("lightbox").extend("alert", {
        onReady: function () {
          c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
          var a = this.getSettings("strings");
          this.addButton({
            name: "ok",
            text: a.confirm,
            callback: function (a) {
              a.trigger("confirm");
            },
          });
        },
        getDefaultSettings: function () {
          var a = c
            .getWidgetType("lightbox")
            .prototype.getDefaultSettings.apply(this, arguments);
          return (a.strings = { confirm: "OK" }), a;
        },
      }),
    ),
    (b.DialogsManager = c);
})(
  "undefined" != typeof jQuery
    ? jQuery
    : "function" == typeof require && require("jquery"),
  "undefined" != typeof module ? module.exports : window,
);
