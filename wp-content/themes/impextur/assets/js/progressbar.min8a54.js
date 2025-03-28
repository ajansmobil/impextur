/*! bootstrap-progressbar v0.7.1 | Copyright (c) 2012-2014 Stephan Gross | MIT license | minddust.com */
!(function (t) {
  "use strict";
  var e = function (n, a) {
    (this.$element = t(n)), (this.options = t.extend({}, e.defaults, a));
  };
  (e.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: "none",
    use_percentage: !0,
    percent_format: function (t) {
      return t + "%";
    },
    amount_format: function (t, e) {
      return t + " / " + e;
    },
    update: t.noop,
    done: t.noop,
    fail: t.noop,
  }),
    (e.prototype.transition = function () {
      var n = this.$element,
        a = n.parent(),
        s = this.$back_text,
        i = this.$front_text,
        r = this.options,
        o = n.attr("data-valuetransitiongoal"),
        h = n.attr("data-valuemin") || 0,
        d = n.attr("data-valuemax") || 100,
        f = a.hasClass("vertical"),
        u =
          r.update && "function" == typeof r.update
            ? r.update
            : e.defaults.update,
        c = r.done && "function" == typeof r.done ? r.done : e.defaults.done,
        p = r.fail && "function" == typeof r.fail ? r.fail : e.defaults.fail;
      if (!o) return void p("aria-valuetransitiongoal not set");
      var l = Math.round((100 * (o - h)) / (d - h));
      if ("center" === r.display_text && !s && !i) {
        (this.$back_text = s =
          t("<span>").addClass("progressbar-back-text").prependTo(a)),
          (this.$front_text = i =
            t("<span>").addClass("progressbar-front-text").prependTo(n));
        var g;
        f
          ? ((g = a.css("height")),
            s.css({ height: g, "line-height": g }),
            i.css({ height: g, "line-height": g }),
            t(window).resize(function () {
              (g = a.css("height")),
                s.css({ height: g, "line-height": g }),
                i.css({ height: g, "line-height": g });
            }))
          : ((g = a.css("width")),
            i.css({ width: g }),
            t(window).resize(function () {
              (g = a.css("width")), i.css({ width: g });
            }));
      }
      setTimeout(function () {
        var t, e, p, g, _;
        f ? n.css("height", l + "%") : n.css("width", l + "%");
        var v = setInterval(function () {
          f
            ? ((p = n.height()), (g = a.height()))
            : ((p = n.width()), (g = a.width())),
            (t = Math.round((100 * p) / g)),
            (e = Math.round((p / g) * (d - h))),
            t >= l && ((t = l), (e = o), c(), clearInterval(v)),
            "none" !== r.display_text &&
              ((_ = r.use_percentage
                ? r.percent_format(t)
                : r.amount_format(e, d)),
              "fill" === r.display_text
                ? n.text(_)
                : "center" === r.display_text && (s.text(_), i.text(_))),
            n.attr("data-valuenow", e),
            u(t);
        }, r.refresh_speed);
      }, r.transition_delay);
    });
  var n = t.fn.progressbar;
  (t.fn.progressbar = function (n) {
    return this.each(function () {
      var a = t(this),
        s = a.data("bs.progressbar"),
        i = "object" == typeof n && n;
      s || a.data("bs.progressbar", (s = new e(this, i))), s.transition();
    });
  }),
    (t.fn.progressbar.Constructor = e),
    (t.fn.progressbar.noConflict = function () {
      return (t.fn.progressbar = n), this;
    });
})(window.jQuery);
