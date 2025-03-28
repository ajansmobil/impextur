!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e, n) {
    n(2), n(6), (t.exports = n(4));
  },
  function (t, e, n) {
    var r, i, u, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */ (s = function (t) {
      "use strict";
      var e = "left",
        n = "right",
        r = "up",
        i = "down",
        u = "none",
        s = "doubletap",
        o = "longtap",
        a = "horizontal",
        l = "vertical",
        h = "all",
        f = "move",
        D = "end",
        p = "cancel",
        c = "ontouchstart" in window,
        d = window.navigator.msPointerEnabled && !window.PointerEvent && !c,
        g = (window.PointerEvent || window.navigator.msPointerEnabled) && !c,
        _ = "TouchSwipe";
      function m(m, v) {
        v = t.extend({}, v);
        var y = c || g || !v.fallbackToMouseEvents,
          C = y
            ? g
              ? d
                ? "MSPointerDown"
                : "pointerdown"
              : "touchstart"
            : "mousedown",
          x = y
            ? g
              ? d
                ? "MSPointerMove"
                : "pointermove"
              : "touchmove"
            : "mousemove",
          F = y
            ? g
              ? d
                ? "MSPointerUp"
                : "pointerup"
              : "touchend"
            : "mouseup",
          w = y ? (g ? "mouseleave" : null) : "mouseleave",
          E = g ? (d ? "MSPointerCancel" : "pointercancel") : "touchcancel",
          b = 0,
          T = null,
          A = null,
          M = 0,
          O = 0,
          S = 0,
          P = 1,
          B = 0,
          k = 0,
          L = null,
          N = t(m),
          R = "start",
          I = 0,
          z = {},
          Y = 0,
          X = 0,
          j = 0,
          V = 0,
          U = 0,
          W = null,
          q = null;
        try {
          N.on(C, G), N.on(E, K);
        } catch (m) {
          t.error("events not supported " + C + "," + E + " on jQuery.swipe");
        }
        function G(u) {
          if (
            !0 !== N.data(_ + "_intouch") &&
            !(0 < t(u.target).closest(v.excludedElements, N).length)
          ) {
            var s = u.originalEvent ? u.originalEvent : u;
            if (
              !s.pointerType ||
              "mouse" != s.pointerType ||
              0 != v.fallbackToMouseEvents
            ) {
              var o,
                a,
                l = s.touches,
                f = l ? l[0] : s;
              return (
                (R = "start"),
                l
                  ? (I = l.length)
                  : !1 !== v.preventDefaultEvents && u.preventDefault(),
                (k = A = T = null),
                (P = 1),
                (B = S = O = M = b = 0),
                ((a = {})[e] = yt(e)),
                (a[n] = yt(n)),
                (a.up = yt(r)),
                (a[i] = yt(i)),
                (L = a),
                ct(),
                _t(0, f),
                !l || I === v.fingers || v.fingers === h || st()
                  ? ((Y = wt()),
                    2 == I &&
                      (_t(1, l[1]), (O = S = xt(z[0].start, z[1].start))),
                    (v.swipeStatus || v.pinchStatus) && (o = tt(s, R)))
                  : (o = !1),
                !1 === o
                  ? (tt(s, (R = p)), o)
                  : (v.hold &&
                      (q = setTimeout(
                        t.proxy(function () {
                          N.trigger("hold", [s.target]),
                            v.hold && (o = v.hold.call(N, s, s.target));
                        }, this),
                        v.longTapThreshold,
                      )),
                    gt(!0),
                    null)
              );
            }
          }
        }
        function H(s) {
          var o = s.originalEvent ? s.originalEvent : s;
          if (R !== D && R !== p && !dt()) {
            var c,
              d,
              g,
              _,
              m,
              y,
              C,
              x = o.touches,
              F = mt(x ? x[0] : o);
            if (
              ((X = wt()),
              x && (I = x.length),
              v.hold && clearTimeout(q),
              (R = f),
              2 == I &&
                (0 == O
                  ? (_t(1, x[1]), (O = S = xt(z[0].start, z[1].start)))
                  : (mt(x[1]),
                    (S = xt(z[0].end, z[1].end)),
                    z[0].end,
                    z[1].end,
                    (k = P < 1 ? "out" : "in")),
                (P = ((S / O) * 1).toFixed(2)),
                (B = Math.abs(O - S))),
              I === v.fingers || v.fingers === h || !x || st())
            ) {
              if (
                ((T = Ft(F.start, F.end)),
                (function (t, s) {
                  if (!1 !== v.preventDefaultEvents)
                    if (v.allowPageScroll === u) t.preventDefault();
                    else {
                      var o = "auto" === v.allowPageScroll;
                      switch (s) {
                        case e:
                          ((v.swipeLeft && o) ||
                            (!o && v.allowPageScroll != a)) &&
                            t.preventDefault();
                          break;
                        case n:
                          ((v.swipeRight && o) ||
                            (!o && v.allowPageScroll != a)) &&
                            t.preventDefault();
                          break;
                        case r:
                          ((v.swipeUp && o) ||
                            (!o && v.allowPageScroll != l)) &&
                            t.preventDefault();
                          break;
                        case i:
                          ((v.swipeDown && o) ||
                            (!o && v.allowPageScroll != l)) &&
                            t.preventDefault();
                      }
                    }
                })(s, (A = Ft(F.last, F.end))),
                (y = F.start),
                (C = F.end),
                (b = Math.round(
                  Math.sqrt(Math.pow(C.x - y.x, 2) + Math.pow(C.y - y.y, 2)),
                )),
                (M = Ct()),
                (function (t, e) {
                  t != u && ((e = Math.max(e, vt(t))), (L[t].distance = e));
                })(T, b),
                (c = tt(o, R)),
                !v.triggerOnTouchEnd || v.triggerOnTouchLeave)
              ) {
                var w = !0;
                v.triggerOnTouchLeave &&
                  ((g = {
                    left: (m = (_ = t((_ = this))).offset()).left,
                    right: m.left + _.outerWidth(),
                    top: m.top,
                    bottom: m.top + _.outerHeight(),
                  }),
                  (w =
                    (d = F.end).x > g.left &&
                    d.x < g.right &&
                    d.y > g.top &&
                    d.y < g.bottom)),
                  !v.triggerOnTouchEnd && w
                    ? (R = J(f))
                    : v.triggerOnTouchLeave && !w && (R = J(D)),
                  (R != p && R != D) || tt(o, R);
              }
            } else tt(o, (R = p));
            !1 === c && tt(o, (R = p));
          }
        }
        function Q(t) {
          var e,
            n = t.originalEvent ? t.originalEvent : t,
            r = n.touches;
          if (r) {
            if (r.length && !dt())
              return (e = n), (j = wt()), (V = e.touches.length + 1), !0;
            if (r.length && dt()) return !0;
          }
          return (
            dt() && (I = V),
            (X = wt()),
            (M = Ct()),
            rt() || !nt()
              ? tt(n, (R = p))
              : v.triggerOnTouchEnd || (!1 === v.triggerOnTouchEnd && R === f)
              ? (!1 !== v.preventDefaultEvents &&
                  !1 !== t.cancelable &&
                  t.preventDefault(),
                tt(n, (R = D)))
              : !v.triggerOnTouchEnd && ft()
              ? et(n, (R = D), "tap")
              : R === f && tt(n, (R = p)),
            gt(!1),
            null
          );
        }
        function K() {
          (S = O = Y = X = I = 0), (P = 1), ct(), gt(!1);
        }
        function Z(t) {
          var e = t.originalEvent ? t.originalEvent : t;
          v.triggerOnTouchLeave && tt(e, (R = J(D)));
        }
        function $() {
          N.off(C, G),
            N.off(E, K),
            N.off(x, H),
            N.off(F, Q),
            w && N.off(w, Z),
            gt(!1);
        }
        function J(t) {
          var e = t,
            n = it(),
            r = nt(),
            i = rt();
          return (
            !n || i
              ? (e = p)
              : !r || t != f || (v.triggerOnTouchEnd && !v.triggerOnTouchLeave)
              ? !r && t == D && v.triggerOnTouchLeave && (e = p)
              : (e = D),
            e
          );
        }
        function tt(t, e) {
          var n,
            r = t.touches;
          return (
            ((ot() && at()) || at()) && (n = et(t, e, "swipe")),
            ((ut() && st()) || st()) && !1 !== n && (n = et(t, e, "pinch")),
            pt() && Dt() && !1 !== n
              ? (n = et(t, e, s))
              : M > v.longTapThreshold && b < 10 && v.longTap && !1 !== n
              ? (n = et(t, e, o))
              : (1 !== I && c) ||
                !(isNaN(b) || b < v.threshold) ||
                !ft() ||
                !1 === n ||
                (n = et(t, e, "tap")),
            e === p && K(),
            e === D && ((r && r.length) || K()),
            n
          );
        }
        function et(u, a, l) {
          var h;
          if ("swipe" == l) {
            if (
              (N.trigger("swipeStatus", [
                a,
                T || null,
                b || 0,
                M || 0,
                I,
                z,
                A,
              ]),
              v.swipeStatus &&
                !1 ===
                  (h = v.swipeStatus.call(
                    N,
                    u,
                    a,
                    T || null,
                    b || 0,
                    M || 0,
                    I,
                    z,
                    A,
                  )))
            )
              return !1;
            if (a == D && ot()) {
              if (
                (clearTimeout(W),
                clearTimeout(q),
                N.trigger("swipe", [T, b, M, I, z, A]),
                v.swipe && !1 === (h = v.swipe.call(N, u, T, b, M, I, z, A)))
              )
                return !1;
              switch (T) {
                case e:
                  N.trigger("swipeLeft", [T, b, M, I, z, A]),
                    v.swipeLeft &&
                      (h = v.swipeLeft.call(N, u, T, b, M, I, z, A));
                  break;
                case n:
                  N.trigger("swipeRight", [T, b, M, I, z, A]),
                    v.swipeRight &&
                      (h = v.swipeRight.call(N, u, T, b, M, I, z, A));
                  break;
                case r:
                  N.trigger("swipeUp", [T, b, M, I, z, A]),
                    v.swipeUp && (h = v.swipeUp.call(N, u, T, b, M, I, z, A));
                  break;
                case i:
                  N.trigger("swipeDown", [T, b, M, I, z, A]),
                    v.swipeDown &&
                      (h = v.swipeDown.call(N, u, T, b, M, I, z, A));
              }
            }
          }
          if ("pinch" == l) {
            if (
              (N.trigger("pinchStatus", [
                a,
                k || null,
                B || 0,
                M || 0,
                I,
                P,
                z,
              ]),
              v.pinchStatus &&
                !1 ===
                  (h = v.pinchStatus.call(
                    N,
                    u,
                    a,
                    k || null,
                    B || 0,
                    M || 0,
                    I,
                    P,
                    z,
                  )))
            )
              return !1;
            if (a == D && ut())
              switch (k) {
                case "in":
                  N.trigger("pinchIn", [k || null, B || 0, M || 0, I, P, z]),
                    v.pinchIn &&
                      (h = v.pinchIn.call(
                        N,
                        u,
                        k || null,
                        B || 0,
                        M || 0,
                        I,
                        P,
                        z,
                      ));
                  break;
                case "out":
                  N.trigger("pinchOut", [k || null, B || 0, M || 0, I, P, z]),
                    v.pinchOut &&
                      (h = v.pinchOut.call(
                        N,
                        u,
                        k || null,
                        B || 0,
                        M || 0,
                        I,
                        P,
                        z,
                      ));
              }
          }
          return (
            "tap" == l
              ? (a !== p && a !== D) ||
                (clearTimeout(W),
                clearTimeout(q),
                Dt() && !pt()
                  ? ((U = wt()),
                    (W = setTimeout(
                      t.proxy(function () {
                        (U = null),
                          N.trigger("tap", [u.target]),
                          v.tap && (h = v.tap.call(N, u, u.target));
                      }, this),
                      v.doubleTapThreshold,
                    )))
                  : ((U = null),
                    N.trigger("tap", [u.target]),
                    v.tap && (h = v.tap.call(N, u, u.target))))
              : l == s
              ? (a !== p && a !== D) ||
                (clearTimeout(W),
                clearTimeout(q),
                (U = null),
                N.trigger("doubletap", [u.target]),
                v.doubleTap && (h = v.doubleTap.call(N, u, u.target)))
              : l == o &&
                ((a !== p && a !== D) ||
                  (clearTimeout(W),
                  (U = null),
                  N.trigger("longtap", [u.target]),
                  v.longTap && (h = v.longTap.call(N, u, u.target)))),
            h
          );
        }
        function nt() {
          var t = !0;
          return null !== v.threshold && (t = b >= v.threshold), t;
        }
        function rt() {
          var t = !1;
          return (
            null !== v.cancelThreshold &&
              null !== T &&
              (t = vt(T) - b >= v.cancelThreshold),
            t
          );
        }
        function it() {
          return !(v.maxTimeThreshold && M >= v.maxTimeThreshold);
        }
        function ut() {
          var t = lt(),
            e = ht(),
            n = null === v.pinchThreshold || B >= v.pinchThreshold;
          return t && e && n;
        }
        function st() {
          return v.pinchStatus || v.pinchIn || v.pinchOut;
        }
        function ot() {
          var t = it(),
            e = nt(),
            n = lt(),
            r = ht();
          return !rt() && r && n && e && t;
        }
        function at() {
          return (
            v.swipe ||
            v.swipeStatus ||
            v.swipeLeft ||
            v.swipeRight ||
            v.swipeUp ||
            v.swipeDown
          );
        }
        function lt() {
          return I === v.fingers || v.fingers === h || !c;
        }
        function ht() {
          return 0 !== z[0].end.x;
        }
        function ft() {
          return v.tap;
        }
        function Dt() {
          return !!v.doubleTap;
        }
        function pt() {
          if (null == U) return !1;
          var t = wt();
          return Dt() && t - U <= v.doubleTapThreshold;
        }
        function ct() {
          V = j = 0;
        }
        function dt() {
          var t = !1;
          return j && wt() - j <= v.fingerReleaseThreshold && (t = !0), t;
        }
        function gt(t) {
          N &&
            (!0 === t
              ? (N.on(x, H), N.on(F, Q), w && N.on(w, Z))
              : (N.off(x, H, !1), N.off(F, Q, !1), w && N.off(w, Z, !1)),
            N.data(_ + "_intouch", !0 === t));
        }
        function _t(t, e) {
          var n = {
            start: { x: 0, y: 0 },
            last: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
          };
          return (
            (n.start.x = n.last.x = n.end.x = e.pageX || e.clientX),
            (n.start.y = n.last.y = n.end.y = e.pageY || e.clientY),
            (z[t] = n)
          );
        }
        function mt(t) {
          var e = void 0 !== t.identifier ? t.identifier : 0,
            n = z[e] || null;
          return (
            null === n && (n = _t(e, t)),
            (n.last.x = n.end.x),
            (n.last.y = n.end.y),
            (n.end.x = t.pageX || t.clientX),
            (n.end.y = t.pageY || t.clientY),
            n
          );
        }
        function vt(t) {
          if (L[t]) return L[t].distance;
        }
        function yt(t) {
          return { direction: t, distance: 0 };
        }
        function Ct() {
          return X - Y;
        }
        function xt(t, e) {
          var n = Math.abs(t.x - e.x),
            r = Math.abs(t.y - e.y);
          return Math.round(Math.sqrt(n * n + r * r));
        }
        function Ft(t, s) {
          if (((a = s), (o = t).x == a.x && o.y == a.y)) return u;
          var o,
            a,
            l,
            h,
            f,
            D,
            p,
            c,
            d =
              ((h = s),
              (f = (l = t).x - h.x),
              (D = h.y - l.y),
              (p = Math.atan2(D, f)),
              (c = Math.round((180 * p) / Math.PI)) < 0 &&
                (c = 360 - Math.abs(c)),
              c);
          return (d <= 45 && 0 <= d) || (d <= 360 && 315 <= d)
            ? e
            : 135 <= d && d <= 225
            ? n
            : 45 < d && d < 135
            ? i
            : r;
        }
        function wt() {
          return new Date().getTime();
        }
        (this.enable = function () {
          return this.disable(), N.on(C, G), N.on(E, K), N;
        }),
          (this.disable = function () {
            return $(), N;
          }),
          (this.destroy = function () {
            $(), N.data(_, null), (N = null);
          }),
          (this.option = function (e, n) {
            if ("object" == typeof e) v = t.extend(v, e);
            else if (void 0 !== v[e]) {
              if (void 0 === n) return v[e];
              v[e] = n;
            } else {
              if (!e) return v;
              t.error(
                "Option " + e + " does not exist on jQuery.swipe.options",
              );
            }
            return null;
          });
      }
      (t.fn.rsswipe = function (e) {
        var n = t(this),
          r = n.data(_);
        if (r && "string" == typeof e) {
          if (r[e])
            return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
          t.error("Method " + e + " does not exist on jQuery.rsswipe");
        } else if (r && "object" == typeof e) r.option.apply(r, arguments);
        else if (!(r || ("object" != typeof e && e)))
          return function (e) {
            return (
              !e ||
                void 0 !== e.allowPageScroll ||
                (void 0 === e.swipe && void 0 === e.swipeStatus) ||
                (e.allowPageScroll = u),
              void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
              (e = e || {}),
              (e = t.extend({}, t.fn.rsswipe.defaults, e)),
              this.each(function () {
                var n = t(this),
                  r = n.data(_);
                r || ((r = new m(this, e)), n.data(_, r));
              })
            );
          }.apply(this, arguments);
        return n;
      }),
        (t.fn.rsswipe.version = "1.6.18"),
        (t.fn.rsswipe.defaults = {
          fingers: 1,
          threshold: 75,
          cancelThreshold: null,
          pinchThreshold: 20,
          maxTimeThreshold: null,
          fingerReleaseThreshold: 250,
          longTapThreshold: 500,
          doubleTapThreshold: 200,
          swipe: null,
          swipeLeft: null,
          swipeRight: null,
          swipeUp: null,
          swipeDown: null,
          swipeStatus: null,
          pinchIn: null,
          pinchOut: null,
          pinchStatus: null,
          click: null,
          tap: null,
          doubleTap: null,
          longTap: null,
          hold: null,
          triggerOnTouchEnd: !0,
          triggerOnTouchLeave: !1,
          allowPageScroll: "auto",
          fallbackToMouseEvents: !0,
          excludedElements: ".noSwipe",
          preventDefaultEvents: !0,
        }),
        (t.fn.rsswipe.phases = {
          PHASE_START: "start",
          PHASE_MOVE: f,
          PHASE_END: D,
          PHASE_CANCEL: p,
        }),
        (t.fn.rsswipe.directions = {
          LEFT: e,
          RIGHT: n,
          UP: r,
          DOWN: i,
          IN: "in",
          OUT: "out",
        }),
        (t.fn.rsswipe.pageScroll = {
          NONE: u,
          HORIZONTAL: a,
          VERTICAL: l,
          AUTO: "auto",
        }),
        (t.fn.rsswipe.fingers = {
          ONE: 1,
          TWO: 2,
          THREE: 3,
          FOUR: 4,
          FIVE: 5,
          ALL: h,
        });
    }),
      n(3).jQuery
        ? ((i = [n(0)]),
          void 0 === (u = "function" == typeof (r = s) ? r.apply(e, i) : r) ||
            (t.exports = u))
        : t.exports
        ? s(n(0))
        : s(jQuery);
  },
  function (t, e) {
    (function (e) {
      t.exports = e;
    }).call(this, {});
  },
  function (t, e) {
    var n;
    ((n = jQuery).waitForImages = {
      hasImageProperties: [
        "backgroundImage",
        "listStyleImage",
        "borderImage",
        "borderCornerImage",
      ],
    }),
      (n.expr.pseudos.uncached = function (t) {
        var e = document.createElement("img");
        return (e.src = t.src), n(t).is('img[src!=""]') && !e.complete;
      }),
      (n.fn.waitForImages = function (t, e, r) {
        if (
          (n.isPlainObject(t) &&
            ((e = t.each), (r = t.waitForAll), (t = t.finished)),
          (t = t || n.noop),
          (e = e || n.noop),
          (r = !!r),
          !n.isFunction(t) || !n.isFunction(e))
        )
          throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
          var i = n(this),
            u = [];
          if (r) {
            var s = n.waitForImages.hasImageProperties || [],
              o = /url\((['"]?)(.*?)\1\)/g;
            i.find("*").each(function () {
              var t = n(this);
              t.is("img:uncached") &&
                u.push({ src: t.attr("src"), element: t[0] }),
                n.each(s, function (e, n) {
                  var r,
                    i = t.css(n);
                  if (!i) return !0;
                  for (; (r = o.exec(i)); )
                    u.push({ src: r[2], element: t[0] });
                });
            });
          } else
            i.find("img:uncached").each(function () {
              u.push({ src: this.src, element: this });
            });
          var a = u.length,
            l = 0;
          0 == a && t.call(i[0]),
            n.each(u, function (r, u) {
              var s = new Image();
              n(s).bind("load error", function (n) {
                if ((l++, e.call(u.element, l, a, "load" == n.type), l == a))
                  return t.call(i[0]), !1;
              }),
                (s.src = u.src);
            });
        });
      });
  },
  ,
  function (t, e, n) {
    "use strict";
    function r(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function i(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    /*!
     * GSAP 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ n.r(e);
    var u,
      s,
      o,
      a,
      l,
      h,
      f,
      D,
      p,
      c,
      d,
      g,
      _,
      m,
      v,
      y,
      C,
      x,
      F,
      w,
      E,
      b,
      T,
      A,
      M,
      O,
      S,
      P = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      B = { duration: 0.5, overwrite: !1, delay: 0 },
      k = 1e8,
      L = 2 * Math.PI,
      N = L / 4,
      R = 0,
      I = Math.sqrt,
      z = Math.cos,
      Y = Math.sin,
      X = function (t) {
        return "string" == typeof t;
      },
      j = function (t) {
        return "function" == typeof t;
      },
      V = function (t) {
        return "number" == typeof t;
      },
      U = function (t) {
        return void 0 === t;
      },
      W = function (t) {
        return "object" == typeof t;
      },
      q = function (t) {
        return !1 !== t;
      },
      G = function () {
        return "undefined" != typeof window;
      },
      H = function (t) {
        return j(t) || X(t);
      },
      Q =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      K = Array.isArray,
      Z = /(?:-?\.?\d|\.)+/gi,
      $ = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      tt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      et = /[+-]=-?[\.\d]+/,
      nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      rt = {},
      it = {},
      ut = function (t) {
        return (it = St(t, rt)) && cn;
      },
      st = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      ot = function (t, e) {
        return !e && console.warn(t);
      },
      at = function (t, e) {
        return (t && (rt[t] = e) && it && (it[t] = e)) || rt;
      },
      lt = function () {
        return 0;
      },
      ht = {},
      ft = [],
      Dt = {},
      pt = {},
      ct = {},
      dt = 30,
      gt = [],
      _t = "",
      mt = function (t) {
        var e,
          n,
          r = t[0];
        if ((W(r) || j(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
          for (n = gt.length; n-- && !gt[n].targetTest(r); );
          e = gt[n];
        }
        for (n = t.length; n--; )
          (t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e)))) ||
            t.splice(n, 1);
        return t;
      },
      vt = function (t) {
        return t._gsap || mt(ie(t))[0]._gsap;
      },
      yt = function (t, e, n) {
        return (n = t[e]) && j(n)
          ? t[e]()
          : (U(n) && t.getAttribute && t.getAttribute(e)) || n;
      },
      Ct = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      xt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      Ft = function (t, e) {
        for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
        return r < n;
      },
      wt = function (t, e, n) {
        var r,
          i = V(t[1]),
          u = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          s = t[u];
        if ((i && (s.duration = t[1]), (s.parent = n), e)) {
          for (r = s; n && !("immediateRender" in r); )
            (r = n.vars.defaults || {}), (n = q(n.vars.inherit) && n.parent);
          (s.immediateRender = q(r.immediateRender)),
            e < 2 ? (s.runBackwards = 1) : (s.startAt = t[u - 1]);
        }
        return s;
      },
      Et = function () {
        var t,
          e,
          n = ft.length,
          r = ft.slice(0);
        for (Dt = {}, ft.length = 0, t = 0; t < n; t++)
          (e = r[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      bt = function (t, e, n, r) {
        ft.length && Et(), t.render(e, n, r), ft.length && Et();
      },
      Tt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(nt).length < 2
          ? e
          : X(t)
          ? t.trim()
          : t;
      },
      At = function (t) {
        return t;
      },
      Mt = function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t;
      },
      Ot = function (t, e) {
        for (var n in e)
          n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
      },
      St = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      Pt = function t(e, n) {
        for (var r in n) e[r] = W(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r];
        return e;
      },
      Bt = function (t, e) {
        var n,
          r = {};
        for (n in t) n in e || (r[n] = t[n]);
        return r;
      },
      kt = function (t) {
        var e = t.parent || u,
          n = t.keyframes ? Ot : Mt;
        if (q(t.inherit))
          for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      Lt = function (t, e, n, r) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var i = e._prev,
          u = e._next;
        i ? (i._next = u) : t[n] === e && (t[n] = u),
          u ? (u._prev = i) : t[r] === e && (t[r] = i),
          (e._next = e._prev = e.parent = null);
      },
      Nt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      Rt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
        return t;
      },
      It = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      zt = function (t) {
        return t._repeat ? Yt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Yt = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      Xt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      jt = function (t) {
        return (t._end = xt(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0),
        ));
      },
      Vt = function (t, e) {
        var n = t._dp;
        return (
          n &&
            n.smoothChildTiming &&
            t._ts &&
            ((t._start = xt(
              t._dp._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
            )),
            jt(t),
            n._dirty || Rt(n, t)),
          t
        );
      },
      Ut = function (t, e) {
        var n;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((n = Xt(t.rawTime(), e)),
            (!e._dur || Jt(0, e.totalDuration(), n) - e._tTime > 1e-8) &&
              e.render(n, !0)),
          Rt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (n = t; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          t._zTime = -1e-8;
        }
      },
      Wt = function (t, e, n, r) {
        return (
          e.parent && Nt(e),
          (e._start = xt(n + e._delay)),
          (e._end = xt(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          (function (t, e, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var u,
              s = t[r];
            if (i) for (u = e[i]; s && s[i] > u; ) s = s._prev;
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
              e._next ? (e._next._prev = e) : (t[r] = e),
              (e._prev = s),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          (t._recent = e),
          r || Ut(t, e),
          t
        );
      },
      qt = function (t, e) {
        return (
          (rt.ScrollTrigger || st("scrollTrigger", e)) &&
          rt.ScrollTrigger.create(e, t)
        );
      },
      Gt = function (t, e, n, r) {
        return (
          We(t, e),
          t._initted
            ? !n &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              h !== Ee.frame
              ? (ft.push(t), (t._lazy = [e, r]), 1)
              : void 0
            : 1
        );
      },
      Ht = function (t, e, n, r) {
        var i = t._repeat,
          u = xt(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !r && (t._time *= u / t._dur),
          (t._dur = u),
          (t._tDur = i ? (i < 0 ? 1e10 : xt(u * (i + 1) + t._rDelay * i)) : u),
          s && !r ? Vt(t, (t._tTime = t._tDur * s)) : t.parent && jt(t),
          n || Rt(t.parent, t),
          t
        );
      },
      Qt = function (t) {
        return t instanceof Ye ? Rt(t) : Ht(t, t._dur);
      },
      Kt = { _start: 0, endTime: lt },
      Zt = function t(e, n) {
        var r,
          i,
          u = e.labels,
          s = e._recent || Kt,
          o = e.duration() >= k ? s.endTime(!1) : e._dur;
        return X(n) && (isNaN(n) || n in u)
          ? "<" === (r = n.charAt(0)) || ">" === r
            ? ("<" === r ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0)
            : (r = n.indexOf("=")) < 0
            ? (n in u || (u[n] = o), u[n])
            : ((i = +(n.charAt(r - 1) + n.substr(r + 1))),
              r > 1 ? t(e, n.substr(0, r - 1)) + i : o + i)
          : null == n
          ? o
          : +n;
      },
      $t = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      Jt = function (t, e, n) {
        return n < t ? t : n > e ? e : n;
      },
      te = function (t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
          ? t
          : "";
      },
      ee = [].slice,
      ne = function (t, e) {
        return (
          t &&
          W(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && W(t[0]))) &&
          !t.nodeType &&
          t !== s
        );
      },
      re = function (t, e, n) {
        return (
          void 0 === n && (n = []),
          t.forEach(function (t) {
            var r;
            return (X(t) && !e) || ne(t, 1)
              ? (r = n).push.apply(r, ie(t))
              : n.push(t);
          }) || n
        );
      },
      ie = function (t, e) {
        return !X(t) || e || (!o && be())
          ? K(t)
            ? re(t, e)
            : ne(t)
            ? ee.call(t, 0)
            : t
            ? [t]
            : []
          : ee.call(a.querySelectorAll(t), 0);
      },
      ue = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      se = function (t) {
        if (j(t)) return t;
        var e = W(t) ? t : { each: t },
          n = Be(e.ease),
          r = e.from || 0,
          i = parseFloat(e.base) || 0,
          u = {},
          s = r > 0 && r < 1,
          o = isNaN(r) || s,
          a = e.axis,
          l = r,
          h = r;
        return (
          X(r)
            ? (l = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !s && o && ((l = r[0]), (h = r[1])),
          function (t, s, f) {
            var D,
              p,
              c,
              d,
              g,
              _,
              m,
              v,
              y,
              C = (f || e).length,
              x = u[C];
            if (!x) {
              if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, k])[1])) {
                for (
                  m = -k;
                  m < (m = f[y++].getBoundingClientRect().left) && y < C;

                );
                y--;
              }
              for (
                x = u[C] = [],
                  D = o ? Math.min(y, C) * l - 0.5 : r % y,
                  p = o ? (C * h) / y - 0.5 : (r / y) | 0,
                  m = 0,
                  v = k,
                  _ = 0;
                _ < C;
                _++
              )
                (c = (_ % y) - D),
                  (d = p - ((_ / y) | 0)),
                  (x[_] = g =
                    a ? Math.abs("y" === a ? d : c) : I(c * c + d * d)),
                  g > m && (m = g),
                  g < v && (v = g);
              "random" === r && ue(x),
                (x.max = m - v),
                (x.min = v),
                (x.v = C =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (y > C
                        ? C - 1
                        : a
                        ? "y" === a
                          ? C / y
                          : y
                        : Math.max(y, C / y)) ||
                    0) * ("edges" === r ? -1 : 1)),
                (x.b = C < 0 ? i - C : i),
                (x.u = te(e.amount || e.each) || 0),
                (n = n && C < 0 ? Se(n) : n);
            }
            return (
              (C = (x[t] - x.min) / x.max || 0),
              xt(x.b + (n ? n(C) : C) * x.v) + x.u
            );
          }
        );
      },
      oe = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (n) {
          return (
            Math.floor(Math.round(parseFloat(n) / t) * t * e) / e +
            (V(n) ? 0 : te(n))
          );
        };
      },
      ae = function (t, e) {
        var n,
          r,
          i = K(t);
        return (
          !i &&
            W(t) &&
            ((n = i = t.radius || k),
            t.values
              ? ((t = ie(t.values)), (r = !V(t[0])) && (n *= n))
              : (t = oe(t.increment))),
          $t(
            e,
            i
              ? j(t)
                ? function (e) {
                    return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                  }
                : function (e) {
                    for (
                      var i,
                        u,
                        s = parseFloat(r ? e.x : e),
                        o = parseFloat(r ? e.y : 0),
                        a = k,
                        l = 0,
                        h = t.length;
                      h--;

                    )
                      (i = r
                        ? (i = t[h].x - s) * i + (u = t[h].y - o) * u
                        : Math.abs(t[h] - s)) < a && ((a = i), (l = h));
                    return (
                      (l = !n || a <= n ? t[l] : e),
                      r || l === e || V(e) ? l : l + te(e)
                    );
                  }
              : oe(t),
          )
        );
      },
      le = function (t, e, n, r) {
        return $t(K(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
          return K(t)
            ? t[~~(Math.random() * t.length)]
            : (n = n || 1e-5) &&
                (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round((t + Math.random() * (e - t)) / n) * n * r,
                ) / r;
        });
      },
      he = function (t, e, n) {
        return $t(n, function (n) {
          return t[~~e(n)];
        });
      },
      fe = function (t) {
        for (var e, n, r, i, u = 0, s = ""; ~(e = t.indexOf("random(", u)); )
          (r = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (n = t.substr(e + 7, r - e - 7).match(i ? nt : Z)),
            (s +=
              t.substr(u, e - u) +
              le(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (u = r + 1);
        return s + t.substr(u, t.length - u);
      },
      De = function (t, e, n, r, i) {
        var u = e - t,
          s = r - n;
        return $t(i, function (e) {
          return n + (((e - t) / u) * s || 0);
        });
      },
      pe = function (t, e, n) {
        var r,
          i,
          u,
          s = t.labels,
          o = k;
        for (r in s)
          (i = s[r] - e) < 0 == !!n &&
            i &&
            o > (i = Math.abs(i)) &&
            ((u = r), (o = i));
        return u;
      },
      ce = function (t, e, n) {
        var r,
          i,
          u = t.vars,
          s = u[e];
        if (s)
          return (
            (r = u[e + "Params"]),
            (i = u.callbackScope || t),
            n && ft.length && Et(),
            r ? s.apply(i, r) : s.call(i)
          );
      },
      de = function (t) {
        return Nt(t), t.progress() < 1 && ce(t, "onInterrupt"), t;
      },
      ge = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          n = j(t),
          r =
            e && !n && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: lt,
            render: un,
            add: Ve,
            kill: on,
            modifier: sn,
            rawVars: 0,
          },
          u = {
            targetTest: 0,
            get: 0,
            getSetter: tn,
            aliases: {},
            register: 0,
          };
        if ((be(), t !== r)) {
          if (pt[e]) return;
          Mt(r, Mt(Bt(t, i), u)),
            St(r.prototype, St(i, Bt(t, u))),
            (pt[(r.prop = e)] = r),
            t.targetTest && (gt.push(r), (ht[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        at(e, r), t.register && t.register(cn, r, hn);
      },
      _e = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      me = function (t, e, n) {
        return (
          (255 *
            (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) +
            0.5) |
          0
        );
      },
      ve = function (t, e, n) {
        var r,
          i,
          u,
          s,
          o,
          a,
          l,
          h,
          f,
          D,
          p = t ? (V(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : _e.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]))
            p = _e[t];
          else if ("#" === t.charAt(0))
            4 === t.length &&
              ((r = t.charAt(1)),
              (i = t.charAt(2)),
              (u = t.charAt(3)),
              (t = "#" + r + r + i + i + u + u)),
              (p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ]);
          else if ("hsl" === t.substr(0, 3))
            if (((p = D = t.match(Z)), e)) {
              if (~t.indexOf("="))
                return (p = t.match($)), n && p.length < 4 && (p[3] = 1), p;
            } else
              (s = (+p[0] % 360) / 360),
                (o = +p[1] / 100),
                (r =
                  2 * (a = +p[2] / 100) -
                  (i = a <= 0.5 ? a * (o + 1) : a + o - a * o)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = me(s + 1 / 3, r, i)),
                (p[1] = me(s, r, i)),
                (p[2] = me(s - 1 / 3, r, i));
          else p = t.match(Z) || _e.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !D &&
            ((r = p[0] / 255),
            (i = p[1] / 255),
            (u = p[2] / 255),
            (a = ((l = Math.max(r, i, u)) + (h = Math.min(r, i, u))) / 2),
            l === h
              ? (s = o = 0)
              : ((f = l - h),
                (o = a > 0.5 ? f / (2 - l - h) : f / (l + h)),
                (s =
                  l === r
                    ? (i - u) / f + (i < u ? 6 : 0)
                    : l === i
                    ? (u - r) / f + 2
                    : (r - i) / f + 4),
                (s *= 60)),
            (p[0] = ~~(s + 0.5)),
            (p[1] = ~~(100 * o + 0.5)),
            (p[2] = ~~(100 * a + 0.5))),
          n && p.length < 4 && (p[3] = 1),
          p
        );
      },
      ye = function (t) {
        var e = [],
          n = [],
          r = -1;
        return (
          t.split(xe).forEach(function (t) {
            var i = t.match(J) || [];
            e.push.apply(e, i), n.push((r += i.length + 1));
          }),
          (e.c = n),
          e
        );
      },
      Ce = function (t, e, n) {
        var r,
          i,
          u,
          s,
          o = "",
          a = (t + o).match(xe),
          l = e ? "hsla(" : "rgba(",
          h = 0;
        if (!a) return t;
        if (
          ((a = a.map(function (t) {
            return (
              (t = ve(t, e, 1)) &&
              l +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          n && ((u = ye(t)), (r = n.c).join(o) !== u.c.join(o)))
        )
          for (s = (i = t.replace(xe, "1").split(J)).length - 1; h < s; h++)
            o +=
              i[h] +
              (~r.indexOf(h)
                ? a.shift() || l + "0,0,0,0)"
                : (u.length ? u : a.length ? a : n).shift());
        if (!i)
          for (s = (i = t.split(xe)).length - 1; h < s; h++) o += i[h] + a[h];
        return o + i[s];
      },
      xe = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in _e) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      Fe = /hsl[a]?\(/,
      we = function (t) {
        var e,
          n = t.join(" ");
        if (((xe.lastIndex = 0), xe.test(n)))
          return (
            (e = Fe.test(n)),
            (t[1] = Ce(t[1], e)),
            (t[0] = Ce(t[0], e, ye(t[1]))),
            !0
          );
      },
      Ee =
        ((v = Date.now),
        (y = 500),
        (C = 33),
        (x = v()),
        (F = x),
        (E = w = 1e3 / 240),
        (T = function t(e) {
          var n,
            r,
            i,
            u,
            s = v() - F,
            o = !0 === e;
          if (
            (s > y && (x += s - C),
            ((n = (i = (F += s) - x) - E) > 0 || o) &&
              ((u = ++g.frame),
              (_ = i - 1e3 * g.time),
              (g.time = i /= 1e3),
              (E += n + (n >= w ? 4 : w - n)),
              (r = 1)),
            o || (p = c(t)),
            r)
          )
            for (m = 0; m < b.length; m++) b[m](i, _, u, e);
        }),
        (g = {
          time: 0,
          frame: 0,
          tick: function () {
            T(!0);
          },
          deltaRatio: function (t) {
            return _ / (1e3 / (t || 60));
          },
          wake: function () {
            l &&
              (!o &&
                G() &&
                ((s = o = window),
                (a = s.document || {}),
                (rt.gsap = cn),
                (s.gsapVersions || (s.gsapVersions = [])).push(cn.version),
                ut(it || s.GreenSockGlobals || (!s.gsap && s) || {}),
                (d = s.requestAnimationFrame)),
              p && g.sleep(),
              (c =
                d ||
                function (t) {
                  return setTimeout(t, (E - 1e3 * g.time + 1) | 0);
                }),
              (D = 1),
              T(2));
          },
          sleep: function () {
            (d ? s.cancelAnimationFrame : clearTimeout)(p), (D = 0), (c = lt);
          },
          lagSmoothing: function (t, e) {
            (y = t || 1 / 1e-8), (C = Math.min(e, y, 0));
          },
          fps: function (t) {
            (w = 1e3 / (t || 240)), (E = 1e3 * g.time + w);
          },
          add: function (t) {
            b.indexOf(t) < 0 && b.push(t), be();
          },
          remove: function (t) {
            var e;
            ~(e = b.indexOf(t)) && b.splice(e, 1) && m >= e && m--;
          },
          _listeners: (b = []),
        })),
      be = function () {
        return !D && Ee.wake();
      },
      Te = {},
      Ae = /^[\d.\-M][\d.\-,\s]/,
      Me = /["']/g,
      Oe = function (t) {
        for (
          var e,
            n,
            r,
            i = {},
            u = t.substr(1, t.length - 3).split(":"),
            s = u[0],
            o = 1,
            a = u.length;
          o < a;
          o++
        )
          (n = u[o]),
            (e = o !== a - 1 ? n.lastIndexOf(",") : n.length),
            (r = n.substr(0, e)),
            (i[s] = isNaN(r) ? r.replace(Me, "").trim() : +r),
            (s = n.substr(e + 1).trim());
        return i;
      },
      Se = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Pe = function t(e, n) {
        for (var r, i = e._first; i; )
          i instanceof Ye
            ? t(i, n)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === n ||
              (i.timeline
                ? t(i.timeline, n)
                : ((r = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = r),
                  (i._yoyo = n))),
            (i = i._next);
      },
      Be = function (t, e) {
        return (
          (t &&
            (j(t)
              ? t
              : Te[t] ||
                (function (t) {
                  var e,
                    n,
                    r,
                    i,
                    u = (t + "").split("("),
                    s = Te[u[0]];
                  return s && u.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [Oe(u[1])]
                          : ((e = t),
                            (n = e.indexOf("(") + 1),
                            (r = e.indexOf(")")),
                            (i = e.indexOf("(", n)),
                            e.substring(
                              n,
                              ~i && i < r ? e.indexOf(")", r + 1) : r,
                            ))
                              .split(",")
                              .map(Tt),
                      )
                    : Te._CE && Ae.test(t)
                    ? Te._CE("", t)
                    : s;
                })(t))) ||
          e
        );
      },
      ke = function (t, e, n, r) {
        void 0 === n &&
          (n = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === r &&
            (r = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          u = { easeIn: e, easeOut: n, easeInOut: r };
        return (
          Ct(t, function (t) {
            for (var e in ((Te[t] = rt[t] = u),
            (Te[(i = t.toLowerCase())] = n),
            u))
              Te[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = Te[t + "." + e] = u[e];
          }),
          u
        );
      },
      Le = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Ne = function t(e, n, r) {
        var i = n >= 1 ? n : 1,
          u = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          s = (u / L) * (Math.asin(1 / i) || 0),
          o = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Y((t - s) * u) + 1;
          },
          a =
            "out" === e
              ? o
              : "in" === e
              ? function (t) {
                  return 1 - o(1 - t);
                }
              : Le(o);
        return (
          (u = L / u),
          (a.config = function (n, r) {
            return t(e, n, r);
          }),
          a
        );
      },
      Re = function t(e, n) {
        void 0 === n && (n = 1.70158);
        var r = function (t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
          },
          i =
            "out" === e
              ? r
              : "in" === e
              ? function (t) {
                  return 1 - r(1 - t);
                }
              : Le(r);
        return (
          (i.config = function (n) {
            return t(e, n);
          }),
          i
        );
      };
    Ct("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var n = e < 5 ? e + 1 : e;
      ke(
        t + ",Power" + (n - 1),
        e
          ? function (t) {
              return Math.pow(t, n);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, n);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, n) / 2
            : 1 - Math.pow(2 * (1 - t), n) / 2;
        },
      );
    }),
      (Te.Linear.easeNone = Te.none = Te.Linear.easeIn),
      ke("Elastic", Ne("in"), Ne("out"), Ne()),
      (A = 7.5625),
      (O = 1 / (M = 2.75)),
      ke(
        "Bounce",
        function (t) {
          return 1 - S(1 - t);
        },
        (S = function (t) {
          return t < O
            ? A * t * t
            : t < 0.7272727272727273
            ? A * Math.pow(t - 1.5 / M, 2) + 0.75
            : t < 0.9090909090909092
            ? A * (t -= 2.25 / M) * t + 0.9375
            : A * Math.pow(t - 2.625 / M, 2) + 0.984375;
        }),
      ),
      ke("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      ke("Circ", function (t) {
        return -(I(1 - t * t) - 1);
      }),
      ke("Sine", function (t) {
        return 1 === t ? 1 : 1 - z(t * N);
      }),
      ke("Back", Re("in"), Re("out"), Re()),
      (Te.SteppedEase =
        Te.steps =
        rt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((r * Jt(0, 1 - 1e-8, t)) | 0) + i) * n;
              };
            },
          }),
      (B.ease = Te["quad.out"]),
      Ct(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (_t += t + "," + t + "Params,");
        },
      );
    var Ie = function (t, e) {
        (this.id = R++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : yt),
          (this.set = e ? e.getSetter : tn);
      },
      ze = (function () {
        function t(t, e) {
          var n = t.parent || u;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Ht(this, +t.duration, 1, 1),
            (this.data = t.data),
            D || Ee.wake(),
            n && Wt(n, this, e || 0 === e ? e : n._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Ht(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((be(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Vt(this, t); n.parent; )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                Wt(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), bt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + zt(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    zt(this),
                  e,
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * n, e)
              : this._repeat
              ? Yt(this._tTime, n) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Xt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              It(this.totalTime(Jt(-this._delay, this._tDur, e), !0))
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (be(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= 1e-8) &&
                          1e-8 !== Math.abs(this._zTime),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && Wt(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (q(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Xt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
              (n = e._start + n / (e._ts || 1)), (e = e._dp);
            return n;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), Qt(this))
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), Qt(this))
              : this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Zt(this, t), q(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, q(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              n = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= n &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((r[t] = e),
                    n && (r[t + "Params"] = n),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete r[t],
                this)
              : r[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (n) {
              var r = j(t) ? t : At,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    j(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                    n(r),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            de(this);
          }),
          t
        );
      })();
    Mt(ze.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ye = (function (t) {
      function e(e, n) {
        var i;
        return (
          void 0 === e && (e = {}),
          ((i = t.call(this, e, n) || this).labels = {}),
          (i.smoothChildTiming = !!e.smoothChildTiming),
          (i.autoRemoveChildren = !!e.autoRemoveChildren),
          (i._sort = q(e.sortChildren)),
          i.parent && Ut(i.parent, r(i)),
          e.scrollTrigger && qt(r(i), e.scrollTrigger),
          i
        );
      }
      i(e, t);
      var n = e.prototype;
      return (
        (n.to = function (t, e, n) {
          return (
            new Qe(
              t,
              wt(arguments, 0, this),
              Zt(this, V(e) ? arguments[3] : n),
            ),
            this
          );
        }),
        (n.from = function (t, e, n) {
          return (
            new Qe(
              t,
              wt(arguments, 1, this),
              Zt(this, V(e) ? arguments[3] : n),
            ),
            this
          );
        }),
        (n.fromTo = function (t, e, n, r) {
          return (
            new Qe(
              t,
              wt(arguments, 2, this),
              Zt(this, V(e) ? arguments[4] : r),
            ),
            this
          );
        }),
        (n.set = function (t, e, n) {
          return (
            (e.duration = 0),
            (e.parent = this),
            kt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Qe(t, e, Zt(this, n), 1),
            this
          );
        }),
        (n.call = function (t, e, n) {
          return Wt(this, Qe.delayedCall(0, t, e), Zt(this, n));
        }),
        (n.staggerTo = function (t, e, n, r, i, u, s) {
          return (
            (n.duration = e),
            (n.stagger = n.stagger || r),
            (n.onComplete = u),
            (n.onCompleteParams = s),
            (n.parent = this),
            new Qe(t, n, Zt(this, i)),
            this
          );
        }),
        (n.staggerFrom = function (t, e, n, r, i, u, s) {
          return (
            (n.runBackwards = 1),
            (kt(n).immediateRender = q(n.immediateRender)),
            this.staggerTo(t, e, n, r, i, u, s)
          );
        }),
        (n.staggerFromTo = function (t, e, n, r, i, u, s, o) {
          return (
            (r.startAt = n),
            (kt(r).immediateRender = q(r.immediateRender)),
            this.staggerTo(t, e, r, i, u, s, o)
          );
        }),
        (n.render = function (t, e, n) {
          var r,
            i,
            s,
            o,
            a,
            l,
            h,
            f,
            D,
            p,
            c,
            d,
            g = this._time,
            _ = this._dirty ? this.totalDuration() : this._tDur,
            m = this._dur,
            v = this !== u && t > _ - 1e-8 && t >= 0 ? _ : t < 1e-8 ? 0 : t,
            y = this._zTime < 0 != t < 0 && (this._initted || !m);
          if (v !== this._tTime || n || y) {
            if (
              (g !== this._time &&
                m &&
                ((v += this._time - g), (t += this._time - g)),
              (r = v),
              (D = this._start),
              (l = !(f = this._ts)),
              y && (m || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat &&
                ((c = this._yoyo),
                (a = m + this._rDelay),
                (r = xt(v % a)),
                v === _
                  ? ((o = this._repeat), (r = m))
                  : ((o = ~~(v / a)) && o === v / a && ((r = m), o--),
                    r > m && (r = m)),
                (p = Yt(this._tTime, a)),
                !g && this._tTime && p !== o && (p = o),
                c && 1 & o && ((r = m - r), (d = 1)),
                o !== p && !this._lock))
            ) {
              var C = c && 1 & p,
                x = C === (c && 1 & o);
              if (
                (o < p && (C = !C),
                (g = C ? 0 : m),
                (this._lock = 1),
                (this.render(g || (d ? 0 : xt(o * a)), e, !m)._lock = 0),
                !e && this.parent && ce(this, "onRepeat"),
                this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                g !== this._time || l !== !this._ts)
              )
                return this;
              if (
                ((m = this._dur),
                (_ = this._tDur),
                x &&
                  ((this._lock = 2),
                  (g = C ? m : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !d && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              Pe(this, d);
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, n) {
                  var r;
                  if (n > e)
                    for (r = t._first; r && r._start <= n; ) {
                      if (!r._dur && "isPause" === r.data && r._start > e)
                        return r;
                      r = r._next;
                    }
                  else
                    for (r = t._last; r && r._start >= n; ) {
                      if (!r._dur && "isPause" === r.data && r._start < e)
                        return r;
                      r = r._prev;
                    }
                })(this, xt(g), xt(r))) &&
                (v -= r - (r = h._start)),
              (this._tTime = v),
              (this._time = r),
              (this._act = !f),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              !g && r && !e && ce(this, "onStart"),
              r >= g && t >= 0)
            )
              for (i = this._first; i; ) {
                if (
                  ((s = i._next), (i._act || r >= i._start) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (r - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (r - i._start) * i._ts,
                      e,
                      n,
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), s && (v += this._zTime = -1e-8);
                    break;
                  }
                }
                i = s;
              }
            else {
              i = this._last;
              for (var F = t < 0 ? t : r; i; ) {
                if (
                  ((s = i._prev), (i._act || F <= i._end) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (F - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (F - i._start) * i._ts,
                      e,
                      n,
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), s && (v += this._zTime = F ? -1e-8 : 1e-8);
                    break;
                  }
                }
                i = s;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = D), jt(this), this.render(t, e, n);
            this._onUpdate && !e && ce(this, "onUpdate", !0),
              ((v === _ && _ >= this.totalDuration()) || (!v && g)) &&
                ((D !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !m) &&
                    ((v === _ && this._ts > 0) || (!v && this._ts < 0)) &&
                    Nt(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!v && !g) ||
                    (ce(this, v === _ ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(v < _ && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var n = this;
          if ((V(e) || (e = Zt(this, e)), !(t instanceof ze))) {
            if (K(t))
              return (
                t.forEach(function (t) {
                  return n.add(t, e);
                }),
                this
              );
            if (X(t)) return this.addLabel(t, e);
            if (!j(t)) return this;
            t = Qe.delayedCall(0, t);
          }
          return this !== t ? Wt(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, n, r) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === r && (r = -k);
          for (var i = [], u = this._first; u; )
            u._start >= r &&
              (u instanceof Qe
                ? e && i.push(u)
                : (n && i.push(u),
                  t && i.push.apply(i, u.getChildren(!0, e, n)))),
              (u = u._next);
          return i;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t) return e[n];
        }),
        (n.remove = function (t) {
          return X(t)
            ? this.removeLabel(t)
            : j(t)
            ? this.killTweensOf(t)
            : (Lt(this, t),
              t === this._recent && (this._recent = this._last),
              Rt(this));
        }),
        (n.totalTime = function (e, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = xt(
                  Ee.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              t.prototype.totalTime.call(this, e, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return (this.labels[t] = Zt(this, e)), this;
        }),
        (n.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (n.addPause = function (t, e, n) {
          var r = Qe.delayedCall(0, e || lt, n);
          return (
            (r.data = "isPause"), (this._hasPause = 1), Wt(this, r, Zt(this, t))
          );
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = Zt(this, t); e; )
            e._start === t && "isPause" === e.data && Nt(e), (e = e._next);
        }),
        (n.killTweensOf = function (t, e, n) {
          for (var r = this.getTweensOf(t, n), i = r.length; i--; )
            Xe !== r[i] && r[i].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var n, r = [], i = ie(t), u = this._first, s = V(e); u; )
            u instanceof Qe
              ? Ft(u._targets, i) &&
                (s
                  ? (!Xe || (u._initted && u._ts)) &&
                    u.globalTime(0) <= e &&
                    u.globalTime(u.totalDuration()) > e
                  : !e || u.isActive()) &&
                r.push(u)
              : (n = u.getTweensOf(i, e)).length && r.push.apply(r, n),
              (u = u._next);
          return r;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var n = this,
            r = Zt(n, t),
            i = e,
            u = i.startAt,
            s = i.onStart,
            o = i.onStartParams,
            a = Qe.to(
              n,
              Mt(e, {
                ease: "none",
                lazy: !1,
                time: r,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (r - (u && "time" in u ? u.time : n._time)) / n.timeScale(),
                  ) ||
                  1e-8,
                onStart: function () {
                  n.pause();
                  var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                  a._dur !== t && Ht(a, t, 0, 1).render(a._time, !0, !0),
                    s && s.apply(a, o || []);
                },
              }),
            );
          return a;
        }),
        (n.tweenFromTo = function (t, e, n) {
          return this.tweenTo(e, Mt({ startAt: { time: Zt(this, t) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return void 0 === t && (t = this._time), pe(this, Zt(this, t));
        }),
        (n.previousLabel = function (t) {
          return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1);
        }),
        (n.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (n.shiftChildren = function (t, e, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, u = this.labels; i; )
            i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (r in u) u[r] >= n && (u[r] += t);
          return Rt(this);
        }),
        (n.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n; )
            (e = n._next), this.remove(n), (n = e);
          return (
            (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Rt(this)
          );
        }),
        (n.totalDuration = function (t) {
          var e,
            n,
            r,
            i = 0,
            s = this,
            o = s._last,
            a = k;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -t : t),
            );
          if (s._dirty) {
            for (r = s.parent; o; )
              (e = o._prev),
                o._dirty && o.totalDuration(),
                (n = o._start) > a && s._sort && o._ts && !s._lock
                  ? ((s._lock = 1), (Wt(s, o, n - o._delay, 1)._lock = 0))
                  : (a = n),
                n < 0 &&
                  o._ts &&
                  ((i -= n),
                  ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                    ((s._start += n / s._ts), (s._time -= n), (s._tTime -= n)),
                  s.shiftChildren(-n, !1, -Infinity),
                  (a = 0)),
                o._end > i && o._ts && (i = o._end),
                (o = e);
            Ht(s, s === u && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((u._ts && (bt(u, Xt(t, u)), (h = Ee.frame)), Ee.frame >= dt)) {
            dt += P.autoSleep || 120;
            var e = u._first;
            if ((!e || !e._ts) && P.autoSleep && Ee._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || Ee.sleep();
            }
          }
        }),
        e
      );
    })(ze);
    Mt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Xe,
      je = function (t, e, n, r, i, u, s) {
        var o,
          a,
          l,
          h,
          f,
          D,
          p,
          c,
          d = new hn(this._pt, t, e, 0, 1, rn, null, i),
          g = 0,
          _ = 0;
        for (
          d.b = n,
            d.e = r,
            n += "",
            (p = ~(r += "").indexOf("random(")) && (r = fe(r)),
            u && (u((c = [n, r]), t, e), (n = c[0]), (r = c[1])),
            a = n.match(tt) || [];
          (o = tt.exec(r));

        )
          (h = o[0]),
            (f = r.substring(g, o.index)),
            l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
            h !== a[_++] &&
              ((D = parseFloat(a[_ - 1]) || 0),
              (d._pt = {
                _next: d._pt,
                p: f || 1 === _ ? f : ",",
                s: D,
                c:
                  "=" === h.charAt(1)
                    ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                    : parseFloat(h) - D,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = tt.lastIndex));
        return (
          (d.c = g < r.length ? r.substring(g, r.length) : ""),
          (d.fp = s),
          (et.test(r) || p) && (d.e = 0),
          (this._pt = d),
          d
        );
      },
      Ve = function (t, e, n, r, i, u, s, o, a) {
        j(r) && (r = r(i || 0, t, u));
        var l,
          h = t[e],
          f =
            "get" !== n
              ? n
              : j(h)
              ? a
                ? t[
                    e.indexOf("set") || !j(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](a)
                : t[e]()
              : h,
          D = j(h) ? (a ? $e : Ze) : Ke;
        if (
          (X(r) &&
            (~r.indexOf("random(") && (r = fe(r)),
            "=" === r.charAt(1) &&
              (r =
                parseFloat(f) +
                parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
                (te(f) || 0))),
          f !== r)
        )
          return isNaN(f * r)
            ? (!h && !(e in t) && st(e, r),
              je.call(this, t, e, f, r, D, o || P.stringFilter, a))
            : ((l = new hn(
                this._pt,
                t,
                e,
                +f || 0,
                r - (f || 0),
                "boolean" == typeof h ? nn : en,
                0,
                D,
              )),
              a && (l.fp = a),
              s && l.modifier(s, this, t),
              (this._pt = l));
      },
      Ue = function (t, e, n, r, i, u) {
        var s, o, a, l;
        if (
          pt[t] &&
          !1 !==
            (s = new pt[t]()).init(
              i,
              s.rawVars
                ? e[t]
                : (function (t, e, n, r, i) {
                    if (
                      (j(t) && (t = qe(t, i, e, n, r)),
                      !W(t) || (t.style && t.nodeType) || K(t) || Q(t))
                    )
                      return X(t) ? qe(t, i, e, n, r) : t;
                    var u,
                      s = {};
                    for (u in t) s[u] = qe(t[u], i, e, n, r);
                    return s;
                  })(e[t], r, i, u, n),
              n,
              r,
              u,
            ) &&
          ((n._pt = o = new hn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
          n !== f)
        )
          for (
            a = n._ptLookup[n._targets.indexOf(i)], l = s._props.length;
            l--;

          )
            a[s._props[l]] = o;
        return s;
      },
      We = function t(e, n) {
        var r,
          i,
          s,
          o,
          a,
          l,
          h,
          f,
          D,
          p,
          c,
          d,
          g,
          _ = e.vars,
          m = _.ease,
          v = _.startAt,
          y = _.immediateRender,
          C = _.lazy,
          x = _.onUpdate,
          F = _.onUpdateParams,
          w = _.callbackScope,
          E = _.runBackwards,
          b = _.yoyoEase,
          T = _.keyframes,
          A = _.autoRevert,
          M = e._dur,
          O = e._startAt,
          S = e._targets,
          P = e.parent,
          k = P && "nested" === P.data ? P.parent._targets : S,
          L = "auto" === e._overwrite,
          N = e.timeline;
        if (
          (N && (!T || !m) && (m = "none"),
          (e._ease = Be(m, B.ease)),
          (e._yEase = b ? Se(Be(!0 === b ? m : b, B.ease)) : 0),
          b &&
            e._yoyo &&
            !e._repeat &&
            ((b = e._yEase), (e._yEase = e._ease), (e._ease = b)),
          !N)
        ) {
          if (
            ((d = (f = S[0] ? vt(S[0]).harness : 0) && _[f.prop]),
            (r = Bt(_, ht)),
            O && O.render(-1, !0).kill(),
            v)
          ) {
            if (
              (Nt(
                (e._startAt = Qe.set(
                  S,
                  Mt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: P,
                      immediateRender: !0,
                      lazy: q(C),
                      startAt: null,
                      delay: 0,
                      onUpdate: x,
                      onUpdateParams: F,
                      callbackScope: w,
                      stagger: 0,
                    },
                    v,
                  ),
                )),
              ),
              y)
            )
              if (n > 0) A || (e._startAt = 0);
              else if (M && !(n < 0 && O)) return void (n && (e._zTime = n));
          } else if (E && M)
            if (O) !A && (e._startAt = 0);
            else if (
              (n && (y = !1),
              (s = Mt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: y && q(C),
                  immediateRender: y,
                  stagger: 0,
                  parent: P,
                },
                r,
              )),
              d && (s[f.prop] = d),
              Nt((e._startAt = Qe.set(S, s))),
              y)
            ) {
              if (!n) return;
            } else t(e._startAt, 1e-8);
          for (
            e._pt = 0, C = (M && q(C)) || (C && !M), i = 0;
            i < S.length;
            i++
          ) {
            if (
              ((h = (a = S[i])._gsap || mt(S)[i]._gsap),
              (e._ptLookup[i] = p = {}),
              Dt[h.id] && ft.length && Et(),
              (c = k === S ? i : k.indexOf(a)),
              f &&
                !1 !== (D = new f()).init(a, d || r, e, c, k) &&
                ((e._pt = o =
                  new hn(e._pt, a, D.name, 0, 1, D.render, D, 0, D.priority)),
                D._props.forEach(function (t) {
                  p[t] = o;
                }),
                D.priority && (l = 1)),
              !f || d)
            )
              for (s in r)
                pt[s] && (D = Ue(s, r, e, c, a, k))
                  ? D.priority && (l = 1)
                  : (p[s] = o =
                      Ve.call(e, a, s, "get", r[s], c, k, 0, _.stringFilter));
            e._op && e._op[i] && e.kill(a, e._op[i]),
              L &&
                e._pt &&
                ((Xe = e),
                u.killTweensOf(a, p, e.globalTime(0)),
                (g = !e.parent),
                (Xe = 0)),
              e._pt && C && (Dt[h.id] = 1);
          }
          l && ln(e), e._onInit && e._onInit(e);
        }
        (e._from = !N && !!_.runBackwards),
          (e._onUpdate = x),
          (e._initted = (!e._op || e._pt) && !g);
      },
      qe = function (t, e, n, r, i) {
        return j(t)
          ? t.call(e, n, r, i)
          : X(t) && ~t.indexOf("random(")
          ? fe(t)
          : t;
      },
      Ge = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      He = (Ge + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Qe = (function (t) {
        function e(e, n, i, s) {
          var o;
          "number" == typeof n && ((i.duration = n), (n = i), (i = null));
          var a,
            l,
            h,
            f,
            D,
            p,
            c,
            d,
            g = (o = t.call(this, s ? n : kt(n), i) || this).vars,
            _ = g.duration,
            m = g.delay,
            v = g.immediateRender,
            y = g.stagger,
            C = g.overwrite,
            x = g.keyframes,
            F = g.defaults,
            w = g.scrollTrigger,
            E = g.yoyoEase,
            b = o.parent,
            T = (K(e) || Q(e) ? V(e[0]) : "length" in n) ? [e] : ie(e);
          if (
            ((o._targets = T.length
              ? mt(T)
              : ot(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !P.nullTargetWarn,
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = C),
            x || y || H(_) || H(m))
          ) {
            if (
              ((n = o.vars),
              (a = o.timeline =
                new Ye({ data: "nested", defaults: F || {} })).kill(),
              (a.parent = r(o)),
              x)
            )
              Mt(a.vars.defaults, { ease: "none" }),
                x.forEach(function (t) {
                  return a.to(T, t, ">");
                });
            else {
              if (((f = T.length), (c = y ? se(y) : lt), W(y)))
                for (D in y) ~Ge.indexOf(D) && (d || (d = {}), (d[D] = y[D]));
              for (l = 0; l < f; l++) {
                for (D in ((h = {}), n)) He.indexOf(D) < 0 && (h[D] = n[D]);
                (h.stagger = 0),
                  E && (h.yoyoEase = E),
                  d && St(h, d),
                  (p = T[l]),
                  (h.duration = +qe(_, r(o), l, p, T)),
                  (h.delay = (+qe(m, r(o), l, p, T) || 0) - o._delay),
                  !y &&
                    1 === f &&
                    h.delay &&
                    ((o._delay = m = h.delay), (o._start += m), (h.delay = 0)),
                  a.to(p, h, c(l, p, T));
              }
              a.duration() ? (_ = m = 0) : (o.timeline = 0);
            }
            _ || o.duration((_ = a.duration()));
          } else o.timeline = 0;
          return (
            !0 === C && ((Xe = r(o)), u.killTweensOf(T), (Xe = 0)),
            b && Ut(b, r(o)),
            (v ||
              (!_ &&
                !x &&
                o._start === xt(b._time) &&
                q(v) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(r(o)) &&
                "nested" !== b.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -m))),
            w && qt(r(o), w),
            o
          );
        }
        i(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              i,
              u,
              s,
              o,
              a,
              l,
              h,
              f,
              D = this._time,
              p = this._tDur,
              c = this._dur,
              d = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
            if (c) {
              if (
                d !== this._tTime ||
                !t ||
                n ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((r = d), (h = this.timeline), this._repeat)) {
                  if (
                    ((s = c + this._rDelay),
                    (r = xt(d % s)),
                    d === p
                      ? ((u = this._repeat), (r = c))
                      : ((u = ~~(d / s)) && u === d / s && ((r = c), u--),
                        r > c && (r = c)),
                    (a = this._yoyo && 1 & u) &&
                      ((f = this._yEase), (r = c - r)),
                    (o = Yt(this._tTime, s)),
                    r === D && !n && this._initted)
                  )
                    return this;
                  u !== o &&
                    (h && this._yEase && Pe(h, a),
                    !this.vars.repeatRefresh ||
                      a ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(xt(s * u), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Gt(this, t < 0 ? t : r, n, e))
                    return (this._tTime = 0), this;
                  if (c !== this._dur) return this.render(t, e, n);
                }
                for (
                  this._tTime = d,
                    this._time = r,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = l = (f || this._ease)(r / c),
                    this._from && (this.ratio = l = 1 - l),
                    r && !D && !e && ce(this, "onStart"),
                    i = this._pt;
                  i;

                )
                  i.r(l, i.d), (i = i._next);
                (h &&
                  h.render(t < 0 ? t : !r && a ? -1e-8 : h._dur * l, e, n)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    ce(this, "onUpdate")),
                  this._repeat &&
                    u !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ce(this, "onRepeat"),
                  (d !== this._tDur && d) ||
                    this._tTime !== d ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !c) &&
                      ((d === this._tDur && this._ts > 0) ||
                        (!d && this._ts < 0)) &&
                      Nt(this, 1),
                    e ||
                      (t < 0 && !D) ||
                      (!d && !D) ||
                      (ce(
                        this,
                        d === p ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      this._prom &&
                        !(d < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var i,
                  u,
                  s = t.ratio,
                  o =
                    e < 0 ||
                    (!e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock) ||
                    ((t._ts < 0 || t._dp._ts < 0) &&
                      "isFromStart" !== t.data &&
                      "isStart" !== t.data)
                      ? 0
                      : 1,
                  a = t._rDelay,
                  l = 0;
                if (
                  (a &&
                    t._repeat &&
                    ((l = Jt(0, t._tDur, e)),
                    Yt(l, a) !== (u = Yt(t._tTime, a)) &&
                      ((s = 1 - o),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  o !== s || r || 1e-8 === t._zTime || (!e && t._zTime))
                ) {
                  if (!t._initted && Gt(t, e, r, n)) return;
                  for (
                    u = t._zTime,
                      t._zTime = e || (n ? 1e-8 : 0),
                      n || (n = e && !u),
                      t.ratio = o,
                      t._from && (o = 1 - o),
                      t._time = 0,
                      t._tTime = l,
                      n || ce(t, "onStart"),
                      i = t._pt;
                    i;

                  )
                    i.r(o, i.d), (i = i._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !n && ce(t, "onUpdate"),
                    l && t._repeat && !n && t.parent && ce(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === o &&
                      (o && Nt(t, 1),
                      n ||
                        (ce(t, o ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._act =
                this._lazy =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (n.kill = function (t, e) {
            if (
              (void 0 === e && (e = "all"),
              !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
            )
              return de(this);
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)
                  ._first || de(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Ht(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              u,
              s,
              o,
              a,
              l,
              h = this._targets,
              f = t ? ie(t) : h,
              D = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(h, f)
            )
              return "all" === e && (this._pt = 0), de(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (X(e) &&
                    ((o = {}),
                    Ct(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      u,
                      s = t[0] ? vt(t[0]).harness : 0,
                      o = s && s.aliases;
                    if (!o) return e;
                    for (r in ((n = St({}, e)), o))
                      if ((r in n))
                        for (i = (u = o[r].split(",")).length; i--; )
                          n[u[i]] = n[r];
                    return n;
                  })(h, e))),
                l = h.length;
              l--;

            )
              if (~f.indexOf(h[l]))
                for (o in ((i = D[l]),
                "all" === e
                  ? ((r[l] = e), (s = i), (u = {}))
                  : ((u = r[l] = r[l] || {}), (s = e)),
                s))
                  (a = i && i[o]) &&
                    (("kill" in a.d && !0 !== a.d.kill(o)) ||
                      Lt(this, a, "_pt"),
                    delete i[o]),
                    "all" !== u && (u[o] = 1);
            return this._initted && !this._pt && p && de(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, n) {
            return new e(t, wt(arguments, 1));
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, n, r) {
            return new e(t, wt(arguments, 2));
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return u.killTweensOf(t, e, n);
          }),
          e
        );
      })(ze);
    Mt(Qe.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      Ct("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Qe[t] = function () {
          var e = new Ye(),
            n = ee.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
          );
        };
      });
    var Ke = function (t, e, n) {
        return (t[e] = n);
      },
      Ze = function (t, e, n) {
        return t[e](n);
      },
      $e = function (t, e, n, r) {
        return t[e](r.fp, n);
      },
      Je = function (t, e, n) {
        return t.setAttribute(e, n);
      },
      tn = function (t, e) {
        return j(t[e]) ? Ze : U(t[e]) && t.setAttribute ? Je : Ke;
      },
      en = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      nn = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      rn = function (t, e) {
        var n = e._pt,
          r = "";
        if (!t && e.b) r = e.b;
        else if (1 === t && e.e) r = e.e;
        else {
          for (; n; )
            (r =
              n.p +
              (n.m
                ? n.m(n.s + n.c * t)
                : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
              r),
              (n = n._next);
          r += e.c;
        }
        e.set(e.t, e.p, r, e);
      },
      un = function (t, e) {
        for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
      },
      sn = function (t, e, n, r) {
        for (var i, u = this._pt; u; )
          (i = u._next), u.p === r && u.modifier(t, e, n), (u = i);
      },
      on = function (t) {
        for (var e, n, r = this._pt; r; )
          (n = r._next),
            (r.p === t && !r.op) || r.op === t
              ? Lt(this, r, "_pt")
              : r.dep || (e = 1),
            (r = n);
        return !e;
      },
      an = function (t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
      },
      ln = function (t) {
        for (var e, n, r, i, u = t._pt; u; ) {
          for (e = u._next, n = r; n && n.pr > u.pr; ) n = n._next;
          (u._prev = n ? n._prev : i) ? (u._prev._next = u) : (r = u),
            (u._next = n) ? (n._prev = u) : (i = u),
            (u = e);
        }
        t._pt = r;
      },
      hn = (function () {
        function t(t, e, n, r, i, u, s, o, a) {
          (this.t = e),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = u || en),
            (this.d = s || this),
            (this.set = o || Ke),
            (this.pr = a || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = an),
              (this.m = t),
              (this.mt = n),
              (this.tween = e);
          }),
          t
        );
      })();
    Ct(
      _t +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (ht[t] = 1);
      },
    ),
      (rt.TweenMax = rt.TweenLite = Qe),
      (rt.TimelineLite = rt.TimelineMax = Ye),
      (u = new Ye({
        sortChildren: !1,
        defaults: B,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (P.stringFilter = we);
    var fn = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        e.forEach(function (t) {
          return ge(t);
        });
      },
      timeline: function (t) {
        return new Ye(t);
      },
      getTweensOf: function (t, e) {
        return u.getTweensOf(t, e);
      },
      getProperty: function (t, e, n, r) {
        X(t) && (t = ie(t)[0]);
        var i = vt(t || {}).get,
          u = n ? At : Tt;
        return (
          "native" === n && (n = ""),
          t
            ? e
              ? u(((pt[e] && pt[e].get) || i)(t, e, n, r))
              : function (e, n, r) {
                  return u(((pt[e] && pt[e].get) || i)(t, e, n, r));
                }
            : t
        );
      },
      quickSetter: function (t, e, n) {
        if ((t = ie(t)).length > 1) {
          var r = t.map(function (t) {
              return cn.quickSetter(t, e, n);
            }),
            i = r.length;
          return function (t) {
            for (var e = i; e--; ) r[e](t);
          };
        }
        t = t[0] || {};
        var u = pt[e],
          s = vt(t),
          o = (s.harness && (s.harness.aliases || {})[e]) || e,
          a = u
            ? function (e) {
                var r = new u();
                (f._pt = 0),
                  r.init(t, n ? e + n : e, f, 0, [t]),
                  r.render(1, r),
                  f._pt && un(1, f);
              }
            : s.set(t, o);
        return u
          ? a
          : function (e) {
              return a(t, o, n ? e + n : e, s, 1);
            };
      },
      isTweening: function (t) {
        return u.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Be(t.ease, B.ease)), Pt(B, t || {});
      },
      config: function (t) {
        return Pt(P, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          n = t.effect,
          r = t.plugins,
          i = t.defaults,
          u = t.extendTimeline;
        (r || "").split(",").forEach(function (t) {
          return (
            t &&
            !pt[t] &&
            !rt[t] &&
            ot(e + " effect requires " + t + " plugin.")
          );
        }),
          (ct[e] = function (t, e, r) {
            return n(ie(t), Mt(e || {}, i), r);
          }),
          u &&
            (Ye.prototype[e] = function (t, n, r) {
              return this.add(ct[e](t, W(n) ? n : (r = n) && {}, this), r);
            });
      },
      registerEase: function (t, e) {
        Te[t] = Be(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Be(t, e) : Te;
      },
      getById: function (t) {
        return u.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var n,
          r,
          i = new Ye(t);
        for (
          i.smoothChildTiming = q(t.smoothChildTiming),
            u.remove(i),
            i._dp = 0,
            i._time = i._tTime = u._time,
            n = u._first;
          n;

        )
          (r = n._next),
            (!e &&
              !n._dur &&
              n instanceof Qe &&
              n.vars.onComplete === n._targets[0]) ||
              Wt(i, n, n._start - n._delay),
            (n = r);
        return Wt(u, i, 0), i;
      },
      utils: {
        wrap: function t(e, n, r) {
          var i = n - e;
          return K(e)
            ? he(e, t(0, e.length), n)
            : $t(r, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, n, r) {
          var i = n - e,
            u = 2 * i;
          return K(e)
            ? he(e, t(0, e.length - 1), n)
            : $t(r, function (t) {
                return e + ((t = (u + ((t - e) % u)) % u || 0) > i ? u - t : t);
              });
        },
        distribute: se,
        random: le,
        snap: ae,
        normalize: function (t, e, n) {
          return De(t, e, 0, 1, n);
        },
        getUnit: te,
        clamp: function (t, e, n) {
          return $t(n, function (n) {
            return Jt(t, e, n);
          });
        },
        splitColor: ve,
        toArray: ie,
        mapRange: De,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (n) {
            return t(parseFloat(n)) + (e || te(n));
          };
        },
        interpolate: function t(e, n, r, i) {
          var u = isNaN(e + n)
            ? 0
            : function (t) {
                return (1 - t) * e + t * n;
              };
          if (!u) {
            var s,
              o,
              a,
              l,
              h,
              f = X(e),
              D = {};
            if ((!0 === r && (i = 1) && (r = null), f))
              (e = { p: e }), (n = { p: n });
            else if (K(e) && !K(n)) {
              for (a = [], l = e.length, h = l - 2, o = 1; o < l; o++)
                a.push(t(e[o - 1], e[o]));
              l--,
                (u = function (t) {
                  t *= l;
                  var e = Math.min(h, ~~t);
                  return a[e](t - e);
                }),
                (r = n);
            } else i || (e = St(K(e) ? [] : {}, e));
            if (!a) {
              for (s in n) Ve.call(D, e, s, "get", n[s]);
              u = function (t) {
                return un(t, D) || (f ? e.p : e);
              };
            }
          }
          return $t(r, u);
        },
        shuffle: ue,
      },
      install: ut,
      effects: ct,
      ticker: Ee,
      updateRoot: Ye.updateRoot,
      plugins: pt,
      globalTimeline: u,
      core: {
        PropTween: hn,
        globals: at,
        Tween: Qe,
        Timeline: Ye,
        Animation: ze,
        getCache: vt,
        _removeLinkedListItem: Lt,
      },
    };
    Ct("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (fn[t] = Qe[t]);
    }),
      Ee.add(Ye.updateRoot),
      (f = fn.to({}, { duration: 0 }));
    var Dn = function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
          n = n._next;
        return n;
      },
      pn = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, n, r) {
            r._onInit = function (t) {
              var r, i;
              if (
                (X(n) &&
                  ((r = {}),
                  Ct(n, function (t) {
                    return (r[t] = 1);
                  }),
                  (n = r)),
                e)
              ) {
                for (i in ((r = {}), n)) r[i] = e(n[i]);
                n = r;
              }
              !(function (t, e) {
                var n,
                  r,
                  i,
                  u = t._targets;
                for (n in e)
                  for (r = u.length; r--; )
                    (i = t._ptLookup[r][n]) &&
                      (i = i.d) &&
                      (i._pt && (i = Dn(i, n)),
                      i && i.modifier && i.modifier(e[n], t, u[r], n));
              })(t, n);
            };
          },
        };
      },
      cn =
        fn.registerPlugin(
          {
            name: "attr",
            init: function (t, e, n, r, i) {
              var u, s;
              for (u in e)
                (s = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(u) || 0) + "",
                  e[u],
                  r,
                  i,
                  0,
                  0,
                  u,
                )) && (s.op = u),
                  this._props.push(u);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
            },
          },
          pn("roundProps", oe),
          pn("modifiers"),
          pn("snap", ae),
        ) || fn;
    (Qe.version = Ye.version = cn.version = "3.5.1"), (l = 1), G() && be();
    Te.Power0,
      Te.Power1,
      Te.Power2,
      Te.Power3,
      Te.Power4,
      Te.Linear,
      Te.Quad,
      Te.Cubic,
      Te.Quart,
      Te.Quint,
      Te.Strong,
      Te.Elastic,
      Te.Back,
      Te.SteppedEase,
      Te.Bounce,
      Te.Sine,
      Te.Expo,
      Te.Circ;
    /*!
     * CSSPlugin 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var dn,
      gn,
      _n,
      mn,
      vn,
      yn,
      Cn,
      xn,
      Fn = {},
      wn = 180 / Math.PI,
      En = Math.PI / 180,
      bn = Math.atan2,
      Tn = /([A-Z])/g,
      An = /(?:left|right|width|margin|padding|x)/i,
      Mn = /[\s,\(]\S/,
      On = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Sn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      Pn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e,
        );
      },
      Bn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e,
        );
      },
      kn = function (t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Ln = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Nn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      Rn = function (t, e, n) {
        return (t.style[e] = n);
      },
      In = function (t, e, n) {
        return t.style.setProperty(e, n);
      },
      zn = function (t, e, n) {
        return (t._gsap[e] = n);
      },
      Yn = function (t, e, n) {
        return (t._gsap.scaleX = t._gsap.scaleY = n);
      },
      Xn = function (t, e, n, r, i) {
        var u = t._gsap;
        (u.scaleX = u.scaleY = n), u.renderTransform(i, u);
      },
      jn = function (t, e, n, r, i) {
        var u = t._gsap;
        (u[e] = n), u.renderTransform(i, u);
      },
      Vn = "transform",
      Un = Vn + "Origin",
      Wn = function (t, e) {
        var n = gn.createElementNS
          ? gn.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : gn.createElement(t);
        return n.style ? n : gn.createElement(t);
      },
      qn = function t(e, n, r) {
        var i = getComputedStyle(e);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(Tn, "-$1").toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && t(e, Hn(n) || n, 1)) ||
          ""
        );
      },
      Gn = "O,Moz,ms,Ms,Webkit".split(","),
      Hn = function (t, e, n) {
        var r = (e || vn).style,
          i = 5;
        if (t in r && !n) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(Gn[i] + t in r);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Gn[i] : "") + t;
      },
      Qn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((dn = window),
          (gn = dn.document),
          (_n = gn.documentElement),
          (vn = Wn("div") || { style: {} }),
          (yn = Wn("div")),
          (Vn = Hn(Vn)),
          (Un = Vn + "Origin"),
          (vn.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (xn = !!Hn("perspective")),
          (mn = 1));
      },
      Kn = function t(e) {
        var n,
          r = Wn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg",
          ),
          i = this.parentNode,
          u = this.nextSibling,
          s = this.style.cssText;
        if (
          (_n.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (u ? i.insertBefore(this, u) : i.appendChild(this)),
          _n.removeChild(r),
          (this.style.cssText = s),
          n
        );
      },
      Zn = function (t, e) {
        for (var n = e.length; n--; )
          if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
      },
      $n = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (n) {
          e = Kn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === Kn ||
            (e = Kn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Zn(t, ["x", "cx", "x1"]) || 0,
                y: +Zn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Jn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !$n(t));
      },
      tr = function (t, e) {
        if (e) {
          var n = t.style;
          e in Fn && e !== Un && (e = Vn),
            n.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                n.removeProperty(e.replace(Tn, "-$1").toLowerCase()))
              : n.removeAttribute(e);
        }
      },
      er = function (t, e, n, r, i, u) {
        var s = new hn(t._pt, e, n, 0, 1, u ? Nn : Ln);
        return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
      },
      nr = { deg: 1, rad: 1, turn: 1 },
      rr = function t(e, n, r, i) {
        var u,
          s,
          o,
          a,
          l = parseFloat(r) || 0,
          h = (r + "").trim().substr((l + "").length) || "px",
          f = vn.style,
          D = An.test(n),
          p = "svg" === e.tagName.toLowerCase(),
          c = (p ? "client" : "offset") + (D ? "Width" : "Height"),
          d = "px" === i,
          g = "%" === i;
        return i === h || !l || nr[i] || nr[h]
          ? l
          : ("px" !== h && !d && (l = t(e, n, r, "px")),
            (a = e.getCTM && Jn(e)),
            g && (Fn[n] || ~n.indexOf("adius"))
              ? xt((l / (a ? e.getBBox()[D ? "width" : "height"] : e[c])) * 100)
              : ((f[D ? "width" : "height"] = 100 + (d ? h : i)),
                (s =
                  ~n.indexOf("adius") || ("em" === i && e.appendChild && !p)
                    ? e
                    : e.parentNode),
                a && (s = (e.ownerSVGElement || {}).parentNode),
                (s && s !== gn && s.appendChild) || (s = gn.body),
                (o = s._gsap) && g && o.width && D && o.time === Ee.time
                  ? xt((l / o.width) * 100)
                  : ((g || "%" === h) && (f.position = qn(e, "position")),
                    s === e && (f.position = "static"),
                    s.appendChild(vn),
                    (u = vn[c]),
                    s.removeChild(vn),
                    (f.position = "absolute"),
                    D && g && (((o = vt(s)).time = Ee.time), (o.width = s[c])),
                    xt(d ? (u * l) / 100 : u && l ? (100 / u) * l : 0))));
      },
      ir = function (t, e, n, r) {
        var i;
        return (
          mn || Qn(),
          e in On &&
            "transform" !== e &&
            ~(e = On[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          Fn[e] && "transform" !== e
            ? ((i = dr(t, r)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : gr(qn(t, Un)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                r ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (ar[e] && ar[e](t, e, n)) ||
                qn(t, e) ||
                yt(t, e) ||
                ("opacity" === e ? 1 : 0)),
          n && !~(i + "").indexOf(" ") ? rr(t, e, i, n) + n : i
        );
      },
      ur = function (t, e, n, r) {
        if (!n || "none" === n) {
          var i = Hn(e, t, 1),
            u = i && qn(t, i, 1);
          u && u !== n
            ? ((e = i), (n = u))
            : "borderColor" === e && (n = qn(t, "borderTopColor"));
        }
        var s,
          o,
          a,
          l,
          h,
          f,
          D,
          p,
          c,
          d,
          g,
          _,
          m = new hn(this._pt, t.style, e, 0, 1, rn),
          v = 0,
          y = 0;
        if (
          ((m.b = n),
          (m.e = r),
          (n += ""),
          "auto" === (r += "") &&
            ((t.style[e] = r), (r = qn(t, e) || r), (t.style[e] = n)),
          we((s = [n, r])),
          (r = s[1]),
          (a = (n = s[0]).match(J) || []),
          (r.match(J) || []).length)
        ) {
          for (; (o = J.exec(r)); )
            (D = o[0]),
              (c = r.substring(v, o.index)),
              h
                ? (h = (h + 1) % 5)
                : ("rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5)) ||
                  (h = 1),
              D !== (f = a[y++] || "") &&
                ((l = parseFloat(f) || 0),
                (g = f.substr((l + "").length)),
                (_ = "=" === D.charAt(1) ? +(D.charAt(0) + "1") : 0) &&
                  (D = D.substr(2)),
                (p = parseFloat(D)),
                (d = D.substr((p + "").length)),
                (v = J.lastIndex - d.length),
                d ||
                  ((d = d || P.units[e] || g),
                  v === r.length && ((r += d), (m.e += d))),
                g !== d && (l = rr(t, e, f, d) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: c || 1 === y ? c : ",",
                  s: l,
                  c: _ ? _ * p : p - l,
                  m: h && h < 4 ? Math.round : 0,
                }));
          m.c = v < r.length ? r.substring(v, r.length) : "";
        } else m.r = "display" === e && "none" === r ? Nn : Ln;
        return et.test(r) && (m.e = 0), (this._pt = m), m;
      },
      sr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      or = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var n,
            r,
            i,
            u = e.t,
            s = u.style,
            o = e.u,
            a = u._gsap;
          if ("all" === o || !0 === o) (s.cssText = ""), (r = 1);
          else
            for (i = (o = o.split(",")).length; --i > -1; )
              (n = o[i]),
                Fn[n] && ((r = 1), (n = "transformOrigin" === n ? Un : Vn)),
                tr(u, n);
          r &&
            (tr(u, Vn),
            a &&
              (a.svg && u.removeAttribute("transform"),
              dr(u, 1),
              (a.uncache = 1)));
        }
      },
      ar = {
        clearProps: function (t, e, n, r, i) {
          if ("isFromStart" !== i.data) {
            var u = (t._pt = new hn(t._pt, e, n, 0, 0, or));
            return (u.u = r), (u.pr = -10), (u.tween = i), t._props.push(n), 1;
          }
        },
      },
      lr = [1, 0, 0, 1, 0, 0],
      hr = {},
      fr = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Dr = function (t) {
        var e = qn(t, Vn);
        return fr(e) ? lr : e.substr(7).match($).map(xt);
      },
      pr = function (t, e) {
        var n,
          r,
          i,
          u,
          s = t._gsap || vt(t),
          o = t.style,
          a = Dr(t);
        return s.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (a = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? lr
            : a
          : (a !== lr ||
              t.offsetParent ||
              t === _n ||
              s.svg ||
              ((i = o.display),
              (o.display = "block"),
              ((n = t.parentNode) && t.offsetParent) ||
                ((u = 1), (r = t.nextSibling), _n.appendChild(t)),
              (a = Dr(t)),
              i ? (o.display = i) : tr(t, "display"),
              u &&
                (r
                  ? n.insertBefore(t, r)
                  : n
                  ? n.appendChild(t)
                  : _n.removeChild(t))),
            e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
      },
      cr = function (t, e, n, r, i, u) {
        var s,
          o,
          a,
          l = t._gsap,
          h = i || pr(t, !0),
          f = l.xOrigin || 0,
          D = l.yOrigin || 0,
          p = l.xOffset || 0,
          c = l.yOffset || 0,
          d = h[0],
          g = h[1],
          _ = h[2],
          m = h[3],
          v = h[4],
          y = h[5],
          C = e.split(" "),
          x = parseFloat(C[0]) || 0,
          F = parseFloat(C[1]) || 0;
        n
          ? h !== lr &&
            (o = d * m - g * _) &&
            ((a = x * (-g / o) + F * (d / o) - (d * y - g * v) / o),
            (x = x * (m / o) + F * (-_ / o) + (_ * y - m * v) / o),
            (F = a))
          : ((x =
              (s = $n(t)).x + (~C[0].indexOf("%") ? (x / 100) * s.width : x)),
            (F =
              s.y + (~(C[1] || C[0]).indexOf("%") ? (F / 100) * s.height : F))),
          r || (!1 !== r && l.smooth)
            ? ((v = x - f),
              (y = F - D),
              (l.xOffset = p + (v * d + y * _) - v),
              (l.yOffset = c + (v * g + y * m) - y))
            : (l.xOffset = l.yOffset = 0),
          (l.xOrigin = x),
          (l.yOrigin = F),
          (l.smooth = !!r),
          (l.origin = e),
          (l.originIsAbsolute = !!n),
          (t.style[Un] = "0px 0px"),
          u &&
            (er(u, l, "xOrigin", f, x),
            er(u, l, "yOrigin", D, F),
            er(u, l, "xOffset", p, l.xOffset),
            er(u, l, "yOffset", c, l.yOffset)),
          t.setAttribute("data-svg-origin", x + " " + F);
      },
      dr = function (t, e) {
        var n = t._gsap || new Ie(t);
        if ("x" in n && !e && !n.uncache) return n;
        var r,
          i,
          u,
          s,
          o,
          a,
          l,
          h,
          f,
          D,
          p,
          c,
          d,
          g,
          _,
          m,
          v,
          y,
          C,
          x,
          F,
          w,
          E,
          b,
          T,
          A,
          M,
          O,
          S,
          B,
          k,
          L,
          N = t.style,
          R = n.scaleX < 0,
          I = qn(t, Un) || "0";
        return (
          (r = i = u = a = l = h = f = D = p = 0),
          (s = o = 1),
          (n.svg = !(!t.getCTM || !Jn(t))),
          (g = pr(t, n.svg)),
          n.svg &&
            ((b = !n.uncache && t.getAttribute("data-svg-origin")),
            cr(t, b || I, !!b || n.originIsAbsolute, !1 !== n.smooth, g)),
          (c = n.xOrigin || 0),
          (d = n.yOrigin || 0),
          g !== lr &&
            ((y = g[0]),
            (C = g[1]),
            (x = g[2]),
            (F = g[3]),
            (r = w = g[4]),
            (i = E = g[5]),
            6 === g.length
              ? ((s = Math.sqrt(y * y + C * C)),
                (o = Math.sqrt(F * F + x * x)),
                (a = y || C ? bn(C, y) * wn : 0),
                (f = x || F ? bn(x, F) * wn + a : 0) && (o *= Math.cos(f * En)),
                n.svg &&
                  ((r -= c - (c * y + d * x)), (i -= d - (c * C + d * F))))
              : ((L = g[6]),
                (B = g[7]),
                (M = g[8]),
                (O = g[9]),
                (S = g[10]),
                (k = g[11]),
                (r = g[12]),
                (i = g[13]),
                (u = g[14]),
                (l = (_ = bn(L, S)) * wn),
                _ &&
                  ((b = w * (m = Math.cos(-_)) + M * (v = Math.sin(-_))),
                  (T = E * m + O * v),
                  (A = L * m + S * v),
                  (M = w * -v + M * m),
                  (O = E * -v + O * m),
                  (S = L * -v + S * m),
                  (k = B * -v + k * m),
                  (w = b),
                  (E = T),
                  (L = A)),
                (h = (_ = bn(-x, S)) * wn),
                _ &&
                  ((m = Math.cos(-_)),
                  (k = F * (v = Math.sin(-_)) + k * m),
                  (y = b = y * m - M * v),
                  (C = T = C * m - O * v),
                  (x = A = x * m - S * v)),
                (a = (_ = bn(C, y)) * wn),
                _ &&
                  ((b = y * (m = Math.cos(_)) + C * (v = Math.sin(_))),
                  (T = w * m + E * v),
                  (C = C * m - y * v),
                  (E = E * m - w * v),
                  (y = b),
                  (w = T)),
                l &&
                  Math.abs(l) + Math.abs(a) > 359.9 &&
                  ((l = a = 0), (h = 180 - h)),
                (s = xt(Math.sqrt(y * y + C * C + x * x))),
                (o = xt(Math.sqrt(E * E + L * L))),
                (_ = bn(w, E)),
                (f = Math.abs(_) > 2e-4 ? _ * wn : 0),
                (p = k ? 1 / (k < 0 ? -k : k) : 0)),
            n.svg &&
              ((b = t.getAttribute("transform")),
              (n.forceCSS = t.setAttribute("transform", "") || !fr(qn(t, Vn))),
              b && t.setAttribute("transform", b))),
          Math.abs(f) > 90 &&
            Math.abs(f) < 270 &&
            (R
              ? ((s *= -1),
                (f += a <= 0 ? 180 : -180),
                (a += a <= 0 ? 180 : -180))
              : ((o *= -1), (f += f <= 0 ? 180 : -180))),
          (n.x =
            ((n.xPercent =
              r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)
              ? 0
              : r) + "px"),
          (n.y =
            ((n.yPercent =
              i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
              ? 0
              : i) + "px"),
          (n.z = u + "px"),
          (n.scaleX = xt(s)),
          (n.scaleY = xt(o)),
          (n.rotation = xt(a) + "deg"),
          (n.rotationX = xt(l) + "deg"),
          (n.rotationY = xt(h) + "deg"),
          (n.skewX = f + "deg"),
          (n.skewY = D + "deg"),
          (n.transformPerspective = p + "px"),
          (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[Un] = gr(I)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = P.force3D),
          (n.renderTransform = n.svg ? yr : xn ? vr : mr),
          (n.uncache = 0),
          n
        );
      },
      gr = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      _r = function (t, e, n) {
        var r = te(e);
        return xt(parseFloat(e) + parseFloat(rr(t, "x", n + "px", r))) + r;
      },
      mr = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          vr(t, e);
      },
      vr = function (t, e) {
        var n = e || this,
          r = n.xPercent,
          i = n.yPercent,
          u = n.x,
          s = n.y,
          o = n.z,
          a = n.rotation,
          l = n.rotationY,
          h = n.rotationX,
          f = n.skewX,
          D = n.skewY,
          p = n.scaleX,
          c = n.scaleY,
          d = n.transformPerspective,
          g = n.force3D,
          _ = n.target,
          m = n.zOrigin,
          v = "",
          y = ("auto" === g && t && 1 !== t) || !0 === g;
        if (m && ("0deg" !== h || "0deg" !== l)) {
          var C,
            x = parseFloat(l) * En,
            F = Math.sin(x),
            w = Math.cos(x);
          (x = parseFloat(h) * En),
            (C = Math.cos(x)),
            (u = _r(_, u, F * C * -m)),
            (s = _r(_, s, -Math.sin(x) * -m)),
            (o = _r(_, o, w * C * -m + m));
        }
        "0px" !== d && (v += "perspective(" + d + ") "),
          (r || i) && (v += "translate(" + r + "%, " + i + "%) "),
          (y || "0px" !== u || "0px" !== s || "0px" !== o) &&
            (v +=
              "0px" !== o || y
                ? "translate3d(" + u + ", " + s + ", " + o + ") "
                : "translate(" + u + ", " + s + ") "),
          "0deg" !== a && (v += "rotate(" + a + ") "),
          "0deg" !== l && (v += "rotateY(" + l + ") "),
          "0deg" !== h && (v += "rotateX(" + h + ") "),
          ("0deg" === f && "0deg" === D) ||
            (v += "skew(" + f + ", " + D + ") "),
          (1 === p && 1 === c) || (v += "scale(" + p + ", " + c + ") "),
          (_.style[Vn] = v || "translate(0, 0)");
      },
      yr = function (t, e) {
        var n,
          r,
          i,
          u,
          s,
          o = e || this,
          a = o.xPercent,
          l = o.yPercent,
          h = o.x,
          f = o.y,
          D = o.rotation,
          p = o.skewX,
          c = o.skewY,
          d = o.scaleX,
          g = o.scaleY,
          _ = o.target,
          m = o.xOrigin,
          v = o.yOrigin,
          y = o.xOffset,
          C = o.yOffset,
          x = o.forceCSS,
          F = parseFloat(h),
          w = parseFloat(f);
        (D = parseFloat(D)),
          (p = parseFloat(p)),
          (c = parseFloat(c)) && ((p += c = parseFloat(c)), (D += c)),
          D || p
            ? ((D *= En),
              (p *= En),
              (n = Math.cos(D) * d),
              (r = Math.sin(D) * d),
              (i = Math.sin(D - p) * -g),
              (u = Math.cos(D - p) * g),
              p &&
                ((c *= En),
                (s = Math.tan(p - c)),
                (i *= s = Math.sqrt(1 + s * s)),
                (u *= s),
                c &&
                  ((s = Math.tan(c)),
                  (n *= s = Math.sqrt(1 + s * s)),
                  (r *= s))),
              (n = xt(n)),
              (r = xt(r)),
              (i = xt(i)),
              (u = xt(u)))
            : ((n = d), (u = g), (r = i = 0)),
          ((F && !~(h + "").indexOf("px")) ||
            (w && !~(f + "").indexOf("px"))) &&
            ((F = rr(_, "x", h, "px")), (w = rr(_, "y", f, "px"))),
          (m || v || y || C) &&
            ((F = xt(F + m - (m * n + v * i) + y)),
            (w = xt(w + v - (m * r + v * u) + C))),
          (a || l) &&
            ((s = _.getBBox()),
            (F = xt(F + (a / 100) * s.width)),
            (w = xt(w + (l / 100) * s.height))),
          (s =
            "matrix(" +
            n +
            "," +
            r +
            "," +
            i +
            "," +
            u +
            "," +
            F +
            "," +
            w +
            ")"),
          _.setAttribute("transform", s),
          x && (_.style[Vn] = s);
      },
      Cr = function (t, e, n, r, i, u) {
        var s,
          o,
          a = X(i),
          l = parseFloat(i) * (a && ~i.indexOf("rad") ? wn : 1),
          h = u ? l * u : l - r,
          f = r + h + "deg";
        return (
          a &&
            ("short" === (s = i.split("_")[1]) &&
              (h %= 360) !== h % 180 &&
              (h += h < 0 ? 360 : -360),
            "cw" === s && h < 0
              ? (h = ((h + 36e9) % 360) - 360 * ~~(h / 360))
              : "ccw" === s &&
                h > 0 &&
                (h = ((h - 36e9) % 360) - 360 * ~~(h / 360))),
          (t._pt = o = new hn(t._pt, e, n, r, h, Pn)),
          (o.e = f),
          (o.u = "deg"),
          t._props.push(n),
          o
        );
      },
      xr = function (t, e, n) {
        var r,
          i,
          u,
          s,
          o,
          a,
          l,
          h = yn.style,
          f = n._gsap;
        for (i in ((h.cssText =
          getComputedStyle(n).cssText + ";position:absolute;display:block;"),
        (h[Vn] = e),
        gn.body.appendChild(yn),
        (r = dr(yn, 1)),
        Fn))
          (u = f[i]) !== (s = r[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((o = te(u) !== (l = te(s)) ? rr(n, i, u, l) : parseFloat(u)),
            (a = parseFloat(s)),
            (t._pt = new hn(t._pt, f, i, o, a - o, Sn)),
            (t._pt.u = l || 0),
            t._props.push(i));
        gn.body.removeChild(yn);
      };
    Ct("padding,margin,Width,Radius", function (t, e) {
      var n = "Top",
        r = "Right",
        i = "Bottom",
        u = "Left",
        s = (e < 3 ? [n, r, i, u] : [n + u, n + r, i + r, i + u]).map(
          function (n) {
            return e < 2 ? t + n : "border" + n + t;
          },
        );
      ar[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
        var u, o;
        if (arguments.length < 4)
          return (
            (u = s.map(function (e) {
              return ir(t, e, n);
            })),
            5 === (o = u.join(" ")).split(u[0]).length ? u[0] : o
          );
        (u = (r + "").split(" ")),
          (o = {}),
          s.forEach(function (t, e) {
            return (o[t] = u[e] = u[e] || u[((e - 1) / 2) | 0]);
          }),
          t.init(e, o, i);
      };
    });
    var Fr,
      wr,
      Er = {
        name: "css",
        register: Qn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, n, r, i) {
          var u,
            s,
            o,
            a,
            l,
            h,
            f,
            D,
            p,
            c,
            d,
            g,
            _,
            m,
            v,
            y,
            C,
            x,
            F,
            w = this._props,
            E = t.style;
          for (f in (mn || Qn(), e))
            if (
              "autoRound" !== f &&
              ((s = e[f]), !pt[f] || !Ue(f, e, n, r, t, i))
            )
              if (
                ((l = typeof s),
                (h = ar[f]),
                "function" === l && (l = typeof (s = s.call(n, r, t, i))),
                "string" === l && ~s.indexOf("random(") && (s = fe(s)),
                h)
              )
                h(this, t, f, s, n) && (v = 1);
              else if ("--" === f.substr(0, 2))
                this.add(
                  E,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(f) + "",
                  s + "",
                  r,
                  i,
                  0,
                  0,
                  f,
                );
              else if ("undefined" !== l) {
                if (
                  ((u = ir(t, f)),
                  (a = parseFloat(u)),
                  (c =
                    "string" === l && "=" === s.charAt(1)
                      ? +(s.charAt(0) + "1")
                      : 0) && (s = s.substr(2)),
                  (o = parseFloat(s)),
                  f in On &&
                    ("autoAlpha" === f &&
                      (1 === a &&
                        "hidden" === ir(t, "visibility") &&
                        o &&
                        (a = 0),
                      er(
                        this,
                        E,
                        "visibility",
                        a ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o,
                      )),
                    "scale" !== f &&
                      "transform" !== f &&
                      ~(f = On[f]).indexOf(",") &&
                      (f = f.split(",")[0])),
                  (d = f in Fn))
                )
                  if (
                    (g ||
                      ((_ = t._gsap).renderTransform || dr(t),
                      (m = !1 !== e.smoothOrigin && _.smooth),
                      ((g = this._pt =
                        new hn(
                          this._pt,
                          E,
                          Vn,
                          0,
                          1,
                          _.renderTransform,
                          _,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === f)
                  )
                    (this._pt = new hn(
                      this._pt,
                      _,
                      "scaleY",
                      _.scaleY,
                      c ? c * o : o - _.scaleY,
                    )),
                      w.push("scaleY", f),
                      (f += "X");
                  else {
                    if ("transformOrigin" === f) {
                      (C = void 0),
                        (x = void 0),
                        (F = void 0),
                        (C = (y = s).split(" ")),
                        (x = C[0]),
                        (F = C[1] || "50%"),
                        ("top" !== x &&
                          "bottom" !== x &&
                          "left" !== F &&
                          "right" !== F) ||
                          ((y = x), (x = F), (F = y)),
                        (C[0] = sr[x] || x),
                        (C[1] = sr[F] || F),
                        (s = C.join(" ")),
                        _.svg
                          ? cr(t, s, 0, m, 0, this)
                          : ((p = parseFloat(s.split(" ")[2]) || 0) !==
                              _.zOrigin && er(this, _, "zOrigin", _.zOrigin, p),
                            er(this, E, f, gr(u), gr(s)));
                      continue;
                    }
                    if ("svgOrigin" === f) {
                      cr(t, s, 1, m, 0, this);
                      continue;
                    }
                    if (f in hr) {
                      Cr(this, _, f, a, s, c);
                      continue;
                    }
                    if ("smoothOrigin" === f) {
                      er(this, _, "smooth", _.smooth, s);
                      continue;
                    }
                    if ("force3D" === f) {
                      _[f] = s;
                      continue;
                    }
                    if ("transform" === f) {
                      xr(this, s, t);
                      continue;
                    }
                  }
                else f in E || (f = Hn(f) || f);
                if (
                  d ||
                  ((o || 0 === o) && (a || 0 === a) && !Mn.test(s) && f in E)
                )
                  o || (o = 0),
                    (D = (u + "").substr((a + "").length)) !==
                      (p = te(s) || (f in P.units ? P.units[f] : D)) &&
                      (a = rr(t, f, u, p)),
                    (this._pt = new hn(
                      this._pt,
                      d ? _ : E,
                      f,
                      a,
                      c ? c * o : o - a,
                      "px" !== p || !1 === e.autoRound || d ? Sn : kn,
                    )),
                    (this._pt.u = p || 0),
                    D !== p && ((this._pt.b = u), (this._pt.r = Bn));
                else if (f in E) ur.call(this, t, f, u, s);
                else {
                  if (!(f in t)) {
                    st(f, s);
                    continue;
                  }
                  this.add(t, f, t[f], s, r, i);
                }
                w.push(f);
              }
          v && ln(this);
        },
        get: ir,
        aliases: On,
        getSetter: function (t, e, n) {
          var r = On[e];
          return (
            r && r.indexOf(",") < 0 && (e = r),
            e in Fn && e !== Un && (t._gsap.x || ir(t, "x"))
              ? n && Cn === n
                ? "scale" === e
                  ? Yn
                  : zn
                : (Cn = n || {}) && ("scale" === e ? Xn : jn)
              : t.style && !U(t.style[e])
              ? Rn
              : ~e.indexOf("-")
              ? In
              : tn(t, e)
          );
        },
        core: { _removeProperty: tr, _getMatrix: pr },
      };
    (cn.utils.checkPrefix = Hn),
      (wr = Ct(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (Fr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          Fn[t] = 1;
        },
      )),
      Ct(Fr, function (t) {
        (P.units[t] = "deg"), (hr[t] = 1);
      }),
      (On[wr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Fr),
      Ct(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          On[e[1]] = wr[e[0]];
        },
      ),
      Ct(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          P.units[t] = "px";
        },
      ),
      cn.registerPlugin(Er);
    var br,
      Tr,
      Ar,
      Mr = cn.registerPlugin(Er) || cn,
      Or = Mr.core.Tween,
      Sr = function () {
        return (
          br ||
          ("undefined" != typeof window &&
            (br = window.gsap) &&
            br.registerPlugin &&
            br)
        );
      },
      Pr = function (t) {
        (br = Sr()),
          (Ar = br && br.parseEase("_CE"))
            ? ((Tr = 1),
              (br.parseEase("bounce").config = function (t) {
                return "object" == typeof t
                  ? kr("", t)
                  : kr("bounce(" + t + ")", { strength: +t });
              }))
            : t &&
              console.warn(
                "Please gsap.registerPlugin(CustomEase, CustomBounce)",
              );
      },
      Br = function (t) {
        var e,
          n = t.length,
          r = 1 / t[n - 2];
        for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
        t[n - 2] = 1;
      },
      kr = function (t, e) {
        Tr || Pr(1), (e = e || {});
        var n,
          r,
          i,
          u,
          s,
          o,
          a,
          l = Math.min(0.999, e.strength || 0.7),
          h = l,
          f = (e.squash || 0) / 100,
          D = f,
          p = 1 / 0.03,
          c = 0.2,
          d = 1,
          g = 0.1,
          _ = [0, 0, 0.07, 0, 0.1, 1, 0.1, 1],
          m = [0, 0, 0, 0, 0.1, 0, 0.1, 0];
        for (
          s = 0;
          s < 200 &&
          ((o = g + (c *= h * ((h + 1) / 2))),
          (u = 1 - (d *= l * l)),
          (r = (i = g + 0.49 * c) + 0.8 * (i - (n = g + d / p))),
          f &&
            ((g += f),
            (n += f),
            (i += f),
            (r += f),
            (o += f),
            (a = f / D),
            m.push(
              g - f,
              0,
              g - f,
              a,
              g - f / 2,
              a,
              g,
              a,
              g,
              0,
              g,
              0,
              g,
              -0.6 * a,
              g + (o - g) / 6,
              0,
              o,
              0,
            ),
            _.push(g - f, 1, g, 1, g, 1),
            (f *= l * l)),
          _.push(g, 1, n, u, i, u, r, u, o, 1, o, 1),
          (l *= 0.95),
          (p = d / (o - r)),
          (g = o),
          !(u > 0.999));
          s++
        );
        if (e.endAtStart && "false" !== e.endAtStart) {
          if (((i = -0.1), _.unshift(i, 1, i, 1, -0.07, 0), D))
            for (
              i -= f = 2.5 * D,
                _.unshift(i, 1, i, 1, i, 1),
                m.splice(0, 6),
                m.unshift(
                  i,
                  0,
                  i,
                  0,
                  i,
                  1,
                  i + f / 2,
                  1,
                  i + f,
                  1,
                  i + f,
                  0,
                  i + f,
                  0,
                  i + f,
                  -0.6,
                  i + f + 0.033,
                  0,
                ),
                s = 0;
              s < m.length;
              s += 2
            )
              m[s] -= i;
          for (s = 0; s < _.length; s += 2)
            (_[s] -= i), (_[s + 1] = 1 - _[s + 1]);
        }
        return (
          f &&
            (Br(m),
            (m[2] = "C" + m[2]),
            Ar(e.squashID || t + "-squash", "M" + m.join(","))),
          Br(_),
          (_[2] = "C" + _[2]),
          Ar(t, "M" + _.join(","))
        );
      },
      Lr = (function () {
        function t(t, e) {
          this.ease = kr(t, e);
        }
        return (
          (t.create = function (t, e) {
            return kr(t, e);
          }),
          (t.register = function (t) {
            (br = t), Pr();
          }),
          t
        );
      })();
    /*!
     * CustomBounce 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ Sr() && br.registerPlugin(Lr), (Lr.version = "3.5.1");
    /*!
     * paths 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Nr = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      Rr = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      Ir = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      zr = /(^[#\.][a-z]|[a-y][a-z])/i,
      Yr = Math.PI / 180,
      Xr = 180 / Math.PI,
      jr = Math.sin,
      Vr = Math.cos,
      Ur = Math.abs,
      Wr = Math.sqrt,
      qr = Math.atan2,
      Gr = function (t) {
        return "string" == typeof t;
      },
      Hr = function (t) {
        return "number" == typeof t;
      },
      Qr = {},
      Kr = {},
      Zr = function (t) {
        return Math.round(((t + 1e8) % 1) * 1e5) / 1e5 || (t < 0 ? 0 : 1);
      },
      $r = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      Jr = function (t, e, n, r) {
        var i = t[e],
          u = 1 === r ? 6 : hi(i, n, r);
        if (u && u + n + 2 < i.length)
          return t.splice(e, 0, i.slice(0, n + u + 2)), i.splice(0, n + u), 1;
      },
      ti = function (t, e) {
        return (
          (e.totalLength = t.totalLength),
          t.samples
            ? ((e.samples = t.samples.slice(0)),
              (e.lookup = t.lookup.slice(0)),
              (e.minLength = t.minLength),
              (e.resolution = t.resolution))
            : (e.totalPoints = t.totalPoints),
          e
        );
      },
      ei = function (t, e) {
        var n = t.length,
          r = t[n - 1] || [],
          i = r.length;
        e[0] === r[i - 2] &&
          e[1] === r[i - 1] &&
          ((e = r.concat(e.slice(2))), n--),
          (t[n] = e);
      };
    function ni(t) {
      var e,
        n = (t = (Gr(t) && zr.test(t) && document.querySelector(t)) || t)
          .getAttribute
          ? t
          : 0;
      return n && (t = t.getAttribute("d"))
        ? (n._gsPath || (n._gsPath = {}),
          (e = n._gsPath[t]) && !e._dirty ? e : (n._gsPath[t] = di(t)))
        : t
        ? Gr(t)
          ? di(t)
          : Hr(t[0])
          ? [t]
          : t
        : console.warn("Expecting a <path> element or an SVG path data string");
    }
    function ri(t) {
      var e,
        n = 0;
      for (t.reverse(); n < t.length; n += 2)
        (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
      t.reversed = !t.reversed;
    }
    var ii = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    };
    function ui(t, e) {
      var n,
        r,
        i,
        u,
        s,
        o,
        a,
        l,
        h,
        f,
        D,
        p,
        c,
        d,
        g,
        _,
        m,
        v,
        y,
        C,
        x,
        F,
        w = t.tagName.toLowerCase(),
        E = 0.552284749831;
      return "path" !== w && t.getBBox
        ? ((o = (function (t, e) {
            var n,
              r = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
              ),
              i = [].slice.call(t.attributes),
              u = i.length;
            for (e = "," + e + ","; --u > -1; )
              (n = i[u].nodeName.toLowerCase()),
                e.indexOf("," + n + ",") < 0 &&
                  r.setAttributeNS(null, n, i[u].nodeValue);
            return r;
          })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (F = (function (t, e) {
            for (
              var n = e ? e.split(",") : [], r = {}, i = n.length;
              --i > -1;

            )
              r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r;
          })(t, ii[w])),
          "rect" === w
            ? ((u = F.rx),
              (s = F.ry || u),
              (r = F.x),
              (i = F.y),
              (f = F.width - 2 * u),
              (D = F.height - 2 * s),
              (n =
                u || s
                  ? "M" +
                    (_ = (d = (c = r + u) + f) + u) +
                    "," +
                    (v = i + s) +
                    " V" +
                    (y = v + D) +
                    " C" +
                    [
                      _,
                      (C = y + s * E),
                      (g = d + u * E),
                      (x = y + s),
                      d,
                      x,
                      d - (d - c) / 3,
                      x,
                      c + (d - c) / 3,
                      x,
                      c,
                      x,
                      (p = r + u * (1 - E)),
                      x,
                      r,
                      C,
                      r,
                      y,
                      r,
                      y - (y - v) / 3,
                      r,
                      v + (y - v) / 3,
                      r,
                      v,
                      r,
                      (m = i + s * (1 - E)),
                      p,
                      i,
                      c,
                      i,
                      c + (d - c) / 3,
                      i,
                      d - (d - c) / 3,
                      i,
                      d,
                      i,
                      g,
                      i,
                      _,
                      m,
                      _,
                      v,
                    ].join(",") +
                    "z"
                  : "M" +
                    (r + f) +
                    "," +
                    i +
                    " v" +
                    D +
                    " h" +
                    -f +
                    " v" +
                    -D +
                    " h" +
                    f +
                    "z"))
            : "circle" === w || "ellipse" === w
            ? ("circle" === w
                ? (l = (u = s = F.r) * E)
                : ((u = F.rx), (l = (s = F.ry) * E)),
              (n =
                "M" +
                ((r = F.cx) + u) +
                "," +
                (i = F.cy) +
                " C" +
                [
                  r + u,
                  i + l,
                  r + (a = u * E),
                  i + s,
                  r,
                  i + s,
                  r - a,
                  i + s,
                  r - u,
                  i + l,
                  r - u,
                  i,
                  r - u,
                  i - l,
                  r - a,
                  i - s,
                  r,
                  i - s,
                  r + a,
                  i - s,
                  r + u,
                  i - l,
                  r + u,
                  i,
                ].join(",") +
                "z"))
            : "line" === w
            ? (n = "M" + F.x1 + "," + F.y1 + " L" + F.x2 + "," + F.y2)
            : ("polyline" !== w && "polygon" !== w) ||
              ((n =
                "M" +
                (r = (h =
                  (t.getAttribute("points") + "").match(Rr) || []).shift()) +
                "," +
                (i = h.shift()) +
                " L" +
                h.join(",")),
              "polygon" === w && (n += "," + r + "," + i + "z")),
          o.setAttribute("d", mi((o._gsRawPath = di(n)))),
          e &&
            t.parentNode &&
            (t.parentNode.insertBefore(o, t), t.parentNode.removeChild(t)),
          o)
        : t;
    }
    function si(t, e, n) {
      var r,
        i = t[e],
        u = t[e + 2],
        s = t[e + 4];
      return (
        (i += (u - i) * n),
        (i += ((u += (s - u) * n) - i) * n),
        (r = u + (s + (t[e + 6] - s) * n - u) * n - i),
        (i = t[e + 1]),
        (i += ((u = t[e + 3]) - i) * n),
        (i += ((u += ((s = t[e + 5]) - u) * n) - i) * n),
        $r(qr(u + (s + (t[e + 7] - s) * n - u) * n - i, r) * Xr)
      );
    }
    function oi(t, e, n) {
      void 0 === n && (n = 1);
      var r = (e = e || 0) > n,
        i = Math.max(0, ~~(Ur(n - e) - 1e-8));
      if (
        (r && ((r = n), (n = e), (e = r), (r = 1), (i -= i ? 1 : 0)),
        e < 0 || n < 0)
      ) {
        var u = 1 + ~~Math.min(e, n);
        (e += u), (n += u);
      }
      var s,
        o,
        a,
        l,
        h,
        f,
        D,
        p = (function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            e[n] = ti(t[n], t[n].slice(0));
          return ti(t, e);
        })(t.totalLength ? t : li(t)),
        c = n > 1,
        d = fi(p, e, Qr, !0),
        g = fi(p, n, Kr),
        _ = g.segment,
        m = d.segment,
        v = g.segIndex,
        y = d.segIndex,
        C = g.i,
        x = d.i,
        F = y === v,
        w = C === x && F,
        E = (F && x > C) || (w && d.t > g.t);
      if (c || i) {
        if (
          (Jr(p, y, x, d.t) &&
            ((s = 1),
            y++,
            w
              ? E
                ? (g.t /= d.t)
                : ((g.t = (g.t - d.t) / (1 - d.t)), v++, (C = 0))
              : y <= v + 1 && !E && (v++, F && (C -= x))),
          g.t ? Jr(p, v, C, g.t) && (E && s && y++, r && v++) : (v--, r && y--),
          (l = []),
          (f = 1 + (h = p.length) * i),
          (D = y),
          r)
        )
          for (f += (h - (v = (v || h) - 1) + y) % h, a = 0; a < f; a++)
            ei(l, p[D]), (D = (D || h) - 1);
        else for (f += (h - y + v) % h, a = 0; a < f; a++) ei(l, p[D++ % h]);
        p = l;
      } else if (((o = 1 === g.t ? 6 : hi(_, C, g.t)), e !== n))
        for (
          s = hi(m, x, w ? d.t / g.t : d.t),
            F && (o += s),
            _.splice(C + o + 2),
            (s || x) && m.splice(0, x + s),
            a = p.length;
          a--;

        )
          (a < y || a > v) && p.splice(a, 1);
      else
        (_.angle = si(_, C + o, 0)),
          (d = _[(C += o)]),
          (g = _[C + 1]),
          (_.length = _.totalLength = 0),
          (_.totalPoints = p.totalPoints = 8),
          _.push(d, g, d, g, d, g, d, g);
      return (
        r &&
          (function (t, e) {
            var n = t.length;
            for (e || t.reverse(); n--; ) t[n].reversed || ri(t[n]);
          })(p, c || i),
        (p.totalLength = 0),
        p
      );
    }
    function ai(t, e, n) {
      (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
      var r,
        i,
        u,
        s,
        o,
        a,
        l,
        h,
        f,
        D,
        p,
        c,
        d,
        g,
        _,
        m,
        v,
        y = ~~t.resolution || 12,
        C = 1 / y,
        x = n ? e + 6 * n + 1 : t.length,
        F = t[e],
        w = t[e + 1],
        E = e ? (e / 6) * y : 0,
        b = t.samples,
        T = t.lookup,
        A = (e ? t.minLength : 1e8) || 1e8,
        M = b[E + n * y - 1],
        O = e ? b[E - 1] : 0;
      for (b.length = T.length = 0, i = e + 2; i < x; i += 6) {
        if (
          ((u = t[i + 4] - F),
          (s = t[i + 2] - F),
          (o = t[i] - F),
          (h = t[i + 5] - w),
          (f = t[i + 3] - w),
          (D = t[i + 1] - w),
          (a = l = p = c = 0),
          Ur(u) < 1e-5 && Ur(h) < 1e-5 && Ur(o) + Ur(D) < 1e-5)
        )
          t.length > 8 && (t.splice(i, 6), (i -= 6), (x -= 6));
        else
          for (r = 1; r <= y; r++)
            (a =
              l -
              (l =
                ((g = C * r) * g * u + 3 * (d = 1 - g) * (g * s + d * o)) * g)),
              (p = c - (c = (g * g * h + 3 * d * (g * f + d * D)) * g)),
              (m = Wr(p * p + a * a)) < A && (A = m),
              (O += m),
              (b[E++] = O);
        (F += u), (w += h);
      }
      if (M) for (M -= O; E < b.length; E++) b[E] += M;
      if (b.length && A)
        for (
          t.totalLength = v = b[b.length - 1] || 0,
            t.minLength = A,
            m = _ = 0,
            r = 0;
          r < v;
          r += A
        )
          T[m++] = b[_] < r ? ++_ : _;
      else t.totalLength = b[0] = 0;
      return e ? O - b[e / 2 - 1] : O;
    }
    function li(t, e) {
      var n, r, i;
      for (i = n = r = 0; i < t.length; i++)
        (t[i].resolution = ~~e || 12), (r += t[i].length), (n += ai(t[i]));
      return (t.totalPoints = r), (t.totalLength = n), t;
    }
    function hi(t, e, n) {
      if (n <= 0 || n >= 1) return 0;
      var r = t[e],
        i = t[e + 1],
        u = t[e + 2],
        s = t[e + 3],
        o = t[e + 4],
        a = t[e + 5],
        l = r + (u - r) * n,
        h = u + (o - u) * n,
        f = i + (s - i) * n,
        D = s + (a - s) * n,
        p = l + (h - l) * n,
        c = f + (D - f) * n,
        d = o + (t[e + 6] - o) * n,
        g = a + (t[e + 7] - a) * n;
      return (
        (h += (d - h) * n),
        (D += (g - D) * n),
        t.splice(
          e + 2,
          4,
          $r(l),
          $r(f),
          $r(p),
          $r(c),
          $r(p + (h - p) * n),
          $r(c + (D - c) * n),
          $r(h),
          $r(D),
          $r(d),
          $r(g),
        ),
        t.samples &&
          t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
        6
      );
    }
    function fi(t, e, n, r) {
      (n = n || {}), t.totalLength || li(t), (e < 0 || e > 1) && (e = Zr(e));
      var i,
        u,
        s,
        o,
        a,
        l,
        h,
        f = 0,
        D = t[0];
      if (t.length > 1) {
        for (s = t.totalLength * e, a = l = 0; (a += t[l++].totalLength) < s; )
          f = l;
        e = (s - (o = a - (D = t[f]).totalLength)) / (a - o) || 0;
      }
      return (
        (i = D.samples),
        (u = D.resolution),
        (s = D.totalLength * e),
        (o = (l = D.lookup[~~(s / D.minLength)] || 0) ? i[l - 1] : 0),
        (a = i[l]) < s && ((o = a), (a = i[++l])),
        (h = (1 / u) * ((s - o) / (a - o) + (l % u))),
        (l = 6 * ~~(l / u)),
        r &&
          1 === h &&
          (l + 6 < D.length
            ? ((l += 6), (h = 0))
            : f + 1 < t.length && ((l = h = 0), (D = t[++f]))),
        (n.t = h),
        (n.i = l),
        (n.path = t),
        (n.segment = D),
        (n.segIndex = f),
        n
      );
    }
    function Di(t, e, n, r) {
      var i,
        u,
        s,
        o,
        a,
        l,
        h,
        f,
        D,
        p = t[0],
        c = r || {};
      if (((e < 0 || e > 1) && (e = Zr(e)), t.length > 1)) {
        for (s = t.totalLength * e, a = l = 0; (a += t[l++].totalLength) < s; )
          p = t[l];
        e = (s - (o = a - p.totalLength)) / (a - o) || 0;
      }
      return (
        (i = p.samples),
        (u = p.resolution),
        (s = p.totalLength * e),
        (o = (l = p.lookup[~~(s / p.minLength)] || 0) ? i[l - 1] : 0),
        (a = i[l]) < s && ((o = a), (a = i[++l])),
        (D = 1 - (h = (1 / u) * ((s - o) / (a - o) + (l % u)) || 0)),
        (f = p[(l = 6 * ~~(l / u))]),
        (c.x = $r(
          (h * h * (p[l + 6] - f) +
            3 * D * (h * (p[l + 4] - f) + D * (p[l + 2] - f))) *
            h +
            f,
        )),
        (c.y = $r(
          (h * h * (p[l + 7] - (f = p[l + 1])) +
            3 * D * (h * (p[l + 5] - f) + D * (p[l + 3] - f))) *
            h +
            f,
        )),
        n &&
          (c.angle = p.totalLength
            ? si(p, l, h >= 1 ? 1 - 1e-9 : h || 1e-9)
            : p.angle || 0),
        c
      );
    }
    function pi(t, e, n, r, i, u, s) {
      for (var o, a, l, h, f, D = t.length; --D > -1; )
        for (a = (o = t[D]).length, l = 0; l < a; l += 2)
          (h = o[l]),
            (f = o[l + 1]),
            (o[l] = h * e + f * r + u),
            (o[l + 1] = h * n + f * i + s);
      return (t._dirty = 1), t;
    }
    function ci(t, e, n, r, i, u, s, o, a) {
      if (t !== o || e !== a) {
        (n = Ur(n)), (r = Ur(r));
        var l = (i % 360) * Yr,
          h = Vr(l),
          f = jr(l),
          D = Math.PI,
          p = 2 * D,
          c = (t - o) / 2,
          d = (e - a) / 2,
          g = h * c + f * d,
          _ = -f * c + h * d,
          m = g * g,
          v = _ * _,
          y = m / (n * n) + v / (r * r);
        y > 1 && ((n = Wr(y) * n), (r = Wr(y) * r));
        var C = n * n,
          x = r * r,
          F = (C * x - C * v - x * m) / (C * v + x * m);
        F < 0 && (F = 0);
        var w = (u === s ? -1 : 1) * Wr(F),
          E = w * ((n * _) / r),
          b = w * ((-r * g) / n),
          T = (t + o) / 2 + (h * E - f * b),
          A = (e + a) / 2 + (f * E + h * b),
          M = (g - E) / n,
          O = (_ - b) / r,
          S = (-g - E) / n,
          P = (-_ - b) / r,
          B = M * M + O * O,
          k = (O < 0 ? -1 : 1) * Math.acos(M / Wr(B)),
          L =
            (M * P - O * S < 0 ? -1 : 1) *
            Math.acos((M * S + O * P) / Wr(B * (S * S + P * P)));
        isNaN(L) && (L = D),
          !s && L > 0 ? (L -= p) : s && L < 0 && (L += p),
          (k %= p),
          (L %= p);
        var N,
          R = Math.ceil(Ur(L) / (p / 4)),
          I = [],
          z = L / R,
          Y = ((4 / 3) * jr(z / 2)) / (1 + Vr(z / 2)),
          X = h * n,
          j = f * n,
          V = f * -r,
          U = h * r;
        for (N = 0; N < R; N++)
          (g = Vr((i = k + N * z))),
            (_ = jr(i)),
            (M = Vr((i += z))),
            (O = jr(i)),
            I.push(g - Y * _, _ + Y * g, M + Y * O, O - Y * M, M, O);
        for (N = 0; N < I.length; N += 2)
          (g = I[N]),
            (_ = I[N + 1]),
            (I[N] = g * X + _ * V + T),
            (I[N + 1] = g * j + _ * U + A);
        return (I[N - 2] = o), (I[N - 1] = a), I;
      }
    }
    function di(t) {
      var e,
        n,
        r,
        i,
        u,
        s,
        o,
        a,
        l,
        h,
        f,
        D,
        p,
        c,
        d,
        g =
          (t + "")
            .replace(Ir, function (t) {
              var e = +t;
              return e < 1e-4 && e > -1e-4 ? 0 : e;
            })
            .match(Nr) || [],
        _ = [],
        m = 0,
        v = 0,
        y = g.length,
        C = 0,
        x = "ERROR: malformed path: " + t,
        F = function (t, e, n, r) {
          (h = (n - t) / 3),
            (f = (r - e) / 3),
            o.push(t + h, e + f, n - h, r - f, n, r);
        };
      if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), _;
      for (e = 0; e < y; e++)
        if (
          ((p = u),
          isNaN(g[e]) ? (s = (u = g[e].toUpperCase()) !== g[e]) : e--,
          (r = +g[e + 1]),
          (i = +g[e + 2]),
          s && ((r += m), (i += v)),
          e || ((a = r), (l = i)),
          "M" === u)
        )
          o && (o.length < 8 ? (_.length -= 1) : (C += o.length)),
            (m = a = r),
            (v = l = i),
            (o = [r, i]),
            _.push(o),
            (e += 2),
            (u = "L");
        else if ("C" === u)
          o || (o = [0, 0]),
            s || (m = v = 0),
            o.push(
              r,
              i,
              m + 1 * g[e + 3],
              v + 1 * g[e + 4],
              (m += 1 * g[e + 5]),
              (v += 1 * g[e + 6]),
            ),
            (e += 6);
        else if ("S" === u)
          (h = m),
            (f = v),
            ("C" !== p && "S" !== p) ||
              ((h += m - o[o.length - 4]), (f += v - o[o.length - 3])),
            s || (m = v = 0),
            o.push(h, f, r, i, (m += 1 * g[e + 3]), (v += 1 * g[e + 4])),
            (e += 4);
        else if ("Q" === u)
          (h = m + (2 / 3) * (r - m)),
            (f = v + (2 / 3) * (i - v)),
            s || (m = v = 0),
            (m += 1 * g[e + 3]),
            (v += 1 * g[e + 4]),
            o.push(h, f, m + (2 / 3) * (r - m), v + (2 / 3) * (i - v), m, v),
            (e += 4);
        else if ("T" === u)
          (h = m - o[o.length - 4]),
            (f = v - o[o.length - 3]),
            o.push(
              m + h,
              v + f,
              r + (2 / 3) * (m + 1.5 * h - r),
              i + (2 / 3) * (v + 1.5 * f - i),
              (m = r),
              (v = i),
            ),
            (e += 2);
        else if ("H" === u) F(m, v, (m = r), v), (e += 1);
        else if ("V" === u) F(m, v, m, (v = r + (s ? v - m : 0))), (e += 1);
        else if ("L" === u || "Z" === u)
          "Z" === u && ((r = a), (i = l), (o.closed = !0)),
            ("L" === u || Ur(m - r) > 0.5 || Ur(v - i) > 0.5) &&
              (F(m, v, r, i), "L" === u && (e += 2)),
            (m = r),
            (v = i);
        else if ("A" === u) {
          if (
            ((c = g[e + 4]),
            (d = g[e + 5]),
            (h = g[e + 6]),
            (f = g[e + 7]),
            (n = 7),
            c.length > 1 &&
              (c.length < 3
                ? ((f = h), (h = d), n--)
                : ((f = d), (h = c.substr(2)), (n -= 2)),
              (d = c.charAt(1)),
              (c = c.charAt(0))),
            (D = ci(
              m,
              v,
              +g[e + 1],
              +g[e + 2],
              +g[e + 3],
              +c,
              +d,
              (s ? m : 0) + 1 * h,
              (s ? v : 0) + 1 * f,
            )),
            (e += n),
            D)
          )
            for (n = 0; n < D.length; n++) o.push(D[n]);
          (m = o[o.length - 2]), (v = o[o.length - 1]);
        } else console.log(x);
      return (
        (e = o.length) < 6
          ? (_.pop(), (e = 0))
          : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0),
        (_.totalPoints = C + e),
        _
      );
    }
    function gi(t, e) {
      void 0 === e && (e = 1);
      for (var n = t[0], r = 0, i = [n, r], u = 2; u < t.length; u += 2)
        i.push(n, r, t[u], (r = ((t[u] - n) * e) / 2), (n = t[u]), -r);
      return i;
    }
    function _i(t, e, n) {
      var r,
        i,
        u,
        s,
        o,
        a,
        l,
        h,
        f,
        D,
        p,
        c,
        d,
        g,
        _ = t.length - 2,
        m = +t[0],
        v = +t[1],
        y = +t[2],
        C = +t[3],
        x = [m, v, m, v],
        F = y - m,
        w = C - v,
        E = Math.abs(t[_] - m) < 0.001 && Math.abs(t[_ + 1] - v) < 0.001;
      for (
        isNaN(n) && (n = Math.PI / 10),
          E &&
            (t.push(y, C),
            (y = m),
            (C = v),
            (m = t[_ - 2]),
            (v = t[_ - 1]),
            t.unshift(m, v),
            (_ += 4)),
          e = e || 0 === e ? +e : 1,
          o = 2;
        o < _;
        o += 2
      )
        (r = m),
          (i = v),
          (m = y),
          (v = C),
          (c = (a = F) * a + (h = w) * h),
          (d = (F = (y = +t[o + 2]) - m) * F + (w = (C = +t[o + 3]) - v) * w),
          (g = (l = y - r) * l + (f = C - i) * f),
          (p = ((u = Math.acos((c + d - g) / Wr(4 * c * d))) / Math.PI) * e),
          (D = Wr(c) * p),
          (p *= Wr(d)),
          (m === r && v === i) ||
            (u > n
              ? ((s = qr(f, l)),
                x.push(
                  $r(m - Vr(s) * D),
                  $r(v - jr(s) * D),
                  $r(m),
                  $r(v),
                  $r(m + Vr(s) * p),
                  $r(v + jr(s) * p),
                ))
              : ((s = qr(h, a)),
                x.push($r(m - Vr(s) * D), $r(v - jr(s) * D)),
                (s = qr(w, F)),
                x.push($r(m), $r(v), $r(m + Vr(s) * p), $r(v + jr(s) * p))));
      return (
        x.push($r(y), $r(C), $r(y), $r(C)),
        E && (x.splice(0, 6), (x.length = x.length - 6)),
        x
      );
    }
    function mi(t) {
      Hr(t[0]) && (t = [t]);
      var e,
        n,
        r,
        i,
        u = "",
        s = t.length;
      for (n = 0; n < s; n++) {
        for (
          i = t[n],
            u += "M" + $r(i[0]) + "," + $r(i[1]) + " C",
            e = i.length,
            r = 2;
          r < e;
          r++
        )
          u +=
            $r(i[r++]) +
            "," +
            $r(i[r++]) +
            " " +
            $r(i[r++]) +
            "," +
            $r(i[r++]) +
            " " +
            $r(i[r++]) +
            "," +
            $r(i[r]) +
            " ";
        i.closed && (u += "z");
      }
      return u;
    }
    /*!
     * CustomEase 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var vi,
      yi,
      Ci = function () {
        return (
          vi ||
          ("undefined" != typeof window &&
            (vi = window.gsap) &&
            vi.registerPlugin &&
            vi)
        );
      },
      xi = function () {
        (vi = Ci())
          ? (vi.registerEase("_CE", Ti.create), (yi = 1))
          : console.warn("Please gsap.registerPlugin(CustomEase)");
      },
      Fi = function (t) {
        return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
      },
      wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Ei = /[cLlsSaAhHvVtTqQ]/g,
      bi = function t(e, n, r, i, u, s, o, a, l, h, f) {
        var D,
          p = (e + r) / 2,
          c = (n + i) / 2,
          d = (r + u) / 2,
          g = (i + s) / 2,
          _ = (u + o) / 2,
          m = (s + a) / 2,
          v = (p + d) / 2,
          y = (c + g) / 2,
          C = (d + _) / 2,
          x = (g + m) / 2,
          F = (v + C) / 2,
          w = (y + x) / 2,
          E = o - e,
          b = a - n,
          T = Math.abs((r - o) * b - (i - a) * E),
          A = Math.abs((u - o) * b - (s - a) * E);
        return (
          h ||
            ((h = [
              { x: e, y: n },
              { x: o, y: a },
            ]),
            (f = 1)),
          h.splice(f || h.length - 1, 0, { x: F, y: w }),
          (T + A) * (T + A) > l * (E * E + b * b) &&
            ((D = h.length),
            t(e, n, p, c, v, y, F, w, l, h, f),
            t(F, w, C, x, _, m, o, a, l, h, f + 1 + (h.length - D))),
          h
        );
      },
      Ti = (function () {
        function t(t, e, n) {
          yi || xi(), (this.id = t), this.setData(e, n);
        }
        var e = t.prototype;
        return (
          (e.setData = function (t, e) {
            e = e || {};
            var n,
              r,
              i,
              u,
              s,
              o,
              a,
              l,
              h,
              f = (t = t || "0,0,1,1").match(wi),
              D = 1,
              p = [],
              c = [],
              d = e.precision || 1,
              g = d <= 1;
            if (
              ((this.data = t),
              (Ei.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
                (f = di(t)[0]),
              4 === (n = f.length))
            )
              f.unshift(0, 0), f.push(1, 1), (n = 8);
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (
              (0 == +f[0] && 1 == +f[n - 2]) ||
                (function (t, e, n) {
                  n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                  var r,
                    i = -1 * +t[0],
                    u = -n,
                    s = t.length,
                    o = 1 / (+t[s - 2] + i),
                    a =
                      -e ||
                      (Math.abs(+t[s - 1] - +t[1]) < 0.01 * (+t[s - 2] - +t[0])
                        ? (function (t) {
                            var e,
                              n = t.length,
                              r = 1e20;
                            for (e = 1; e < n; e += 6) +t[e] < r && (r = +t[e]);
                            return r;
                          })(t) + u
                        : +t[s - 1] + u);
                  for (a = a ? 1 / a : -o, r = 0; r < s; r += 2)
                    (t[r] = (+t[r] + i) * o), (t[r + 1] = (+t[r + 1] + u) * a);
                })(f, e.height, e.originY),
                this.segment = f,
                u = 2;
              u < n;
              u += 6
            )
              (r = { x: +f[u - 2], y: +f[u - 1] }),
                (i = { x: +f[u + 4], y: +f[u + 5] }),
                p.push(r, i),
                bi(
                  r.x,
                  r.y,
                  +f[u],
                  +f[u + 1],
                  +f[u + 2],
                  +f[u + 3],
                  i.x,
                  i.y,
                  1 / (2e5 * d),
                  p,
                  p.length - 1,
                );
            for (n = p.length, u = 0; u < n; u++)
              (a = p[u]),
                (l = p[u - 1] || a),
                (a.x > l.x || (l.y !== a.y && l.x === a.x) || a === l) &&
                a.x <= 1
                  ? ((l.cx = a.x - l.x),
                    (l.cy = a.y - l.y),
                    (l.n = a),
                    (l.nx = a.x),
                    g &&
                      u > 1 &&
                      Math.abs(l.cy / l.cx - p[u - 2].cy / p[u - 2].cx) > 2 &&
                      (g = 0),
                    l.cx < D &&
                      (l.cx
                        ? (D = l.cx)
                        : ((l.cx = 0.001),
                          u === n - 1 &&
                            ((l.x -= 0.001),
                            (D = Math.min(D, 0.001)),
                            (g = 0)))))
                  : (p.splice(u--, 1), n--);
            if (((s = 1 / (n = (1 / D + 1) | 0)), (o = 0), (a = p[0]), g)) {
              for (u = 0; u < n; u++)
                (h = u * s),
                  a.nx < h && (a = p[++o]),
                  (r = a.y + ((h - a.x) / a.cx) * a.cy),
                  (c[u] = { x: h, cx: s, y: r, cy: 0, nx: 9 }),
                  u && (c[u - 1].cy = r - c[u - 1].y);
              c[n - 1].cy = p[p.length - 1].y - r;
            } else {
              for (u = 0; u < n; u++) a.nx < u * s && (a = p[++o]), (c[u] = a);
              o < p.length - 1 && (c[u - 1] = p[p.length - 2]);
            }
            return (
              (this.ease = function (t) {
                var e = c[(t * n) | 0] || c[n - 1];
                return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
              }),
              (this.ease.custom = this),
              this.id && vi.registerEase(this.id, this.ease),
              this
            );
          }),
          (e.getSVGData = function (e) {
            return t.getSVGData(this, e);
          }),
          (t.create = function (e, n, r) {
            return new t(e, n, r).ease;
          }),
          (t.register = function (t) {
            (vi = t), xi();
          }),
          (t.get = function (t) {
            return vi.parseEase(t);
          }),
          (t.getSVGData = function (e, n) {
            var r,
              i,
              u,
              s,
              o,
              a,
              l,
              h,
              f,
              D,
              p = (n = n || {}).width || 100,
              c = n.height || 100,
              d = n.x || 0,
              g = (n.y || 0) + c,
              _ = vi.utils.toArray(n.path)[0];
            if (
              (n.invert && ((c = -c), (g = 0)),
              "string" == typeof e && (e = vi.parseEase(e)),
              e.custom && (e = e.custom),
              e instanceof t)
            )
              r = mi(pi([e.segment], p, 0, 0, -c, d, g));
            else {
              for (
                r = [d, g],
                  s = 1 / (l = Math.max(5, 200 * (n.precision || 1))),
                  h = 5 / (l += 2),
                  f = Fi(d + s * p),
                  i = ((D = Fi(g + e(s) * -c)) - g) / (f - d),
                  u = 2;
                u < l;
                u++
              )
                (o = Fi(d + u * s * p)),
                  (a = Fi(g + e(u * s) * -c)),
                  (Math.abs((a - D) / (o - f) - i) > h || u === l - 1) &&
                    (r.push(f, D), (i = (a - D) / (o - f))),
                  (f = o),
                  (D = a);
              r = "M" + r.join(",");
            }
            return _ && _.setAttribute("d", r), r;
          }),
          t
        );
      })();
    Ci() && vi.registerPlugin(Ti), (Ti.version = "3.5.1");
    /*!
     * CustomWiggle 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ai,
      Mi,
      Oi,
      Si = function () {
        return (
          Ai ||
          ("undefined" != typeof window &&
            (Ai = window.gsap) &&
            Ai.registerPlugin &&
            Ai)
        );
      },
      Pi = {
        easeOut: "M0,1,C0.7,1,0.6,0,1,0",
        easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
        anticipate:
          "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
        uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0",
      },
      Bi = function (t) {
        return t;
      },
      ki = function (t) {
        if (!Mi)
          if (((Ai = Si()), (Oi = Ai && Ai.parseEase("_CE")))) {
            for (var e in Pi) Pi[e] = Oi("", Pi[e]);
            (Mi = 1),
              (Ni("wiggle").config = function (t) {
                return "object" == typeof t
                  ? Ni("", t)
                  : Ni("wiggle(" + t + ")", { wiggles: +t });
              });
          } else
            t &&
              console.warn(
                "Please gsap.registerPlugin(CustomEase, CustomWiggle)",
              );
      },
      Li = function (t, e) {
        return (
          "function" != typeof t && (t = Ai.parseEase(t) || Oi("", t)),
          t.custom || !e
            ? t
            : function (e) {
                return 1 - t(e);
              }
        );
      },
      Ni = function (t, e) {
        Mi || ki(1);
        var n,
          r,
          i,
          u,
          s,
          o,
          a,
          l,
          h,
          f = 0 | ((e = e || {}).wiggles || 10),
          D = 1 / f,
          p = D / 2,
          c = "anticipate" === e.type,
          d = Pi[e.type] || Pi.easeOut,
          g = Bi;
        if (
          (c && ((g = d), (d = Pi.easeOut)),
          e.timingEase && (g = Li(e.timingEase)),
          e.amplitudeEase && (d = Li(e.amplitudeEase, !0)),
          (l = [0, 0, (o = g(p)) / 4, 0, o / 2, (a = c ? -d(p) : d(p)), o, a]),
          "random" === e.type)
        ) {
          for (
            l.length = 4, n = g(D), r = 2 * Math.random() - 1, h = 2;
            h < f;
            h++
          )
            (p = n),
              (a = r),
              (n = g(D * h)),
              (r = 2 * Math.random() - 1),
              (i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4])),
              (u = Math.cos(i) * D),
              (s = Math.sin(i) * D),
              l.push(p - u, a - s, p, a, p + u, a + s);
          l.push(n, 0, 1, 0);
        } else {
          for (h = 1; h < f; h++)
            l.push(g(p + D / 2), a),
              (p += D),
              (a = (a > 0 ? -1 : 1) * d(h * D)),
              (o = g(p)),
              l.push(g(p - D / 2), a, o, a);
          l.push(g(p + D / 4), a, g(p + D / 4), 0, 1, 0);
        }
        for (h = l.length; --h > -1; ) l[h] = ~~(1e3 * l[h]) / 1e3;
        return (l[2] = "C" + l[2]), Oi(t, "M" + l.join(","));
      },
      Ri = (function () {
        function t(t, e) {
          this.ease = Ni(t, e);
        }
        return (
          (t.create = function (t, e) {
            return Ni(t, e);
          }),
          (t.register = function (t) {
            (Ai = t), ki();
          }),
          t
        );
      })();
    Si() && Ai.registerPlugin(Ri), (Ri.version = "3.5.1");
    /*!
     * DrawSVGPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ii,
      zi,
      Yi,
      Xi,
      ji,
      Vi = function () {
        return "undefined" != typeof window;
      },
      Ui = function () {
        return Ii || (Vi() && (Ii = window.gsap) && Ii.registerPlugin && Ii);
      },
      Wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      qi = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Gi = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      Hi = function (t) {
        return parseFloat(t || 0);
      },
      Qi = function (t, e) {
        return Hi(t.getAttribute(e));
      },
      Ki = Math.sqrt,
      Zi = function (t, e, n, r, i, u) {
        return Ki(
          Math.pow((Hi(n) - Hi(t)) * i, 2) + Math.pow((Hi(r) - Hi(e)) * u, 2),
        );
      },
      $i = function (t) {
        return console.warn(t);
      },
      Ji = function (t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect");
      },
      tu = function (t) {
        if (!(t = zi(t)[0])) return 0;
        var e,
          n,
          r,
          i,
          u,
          s,
          o,
          a = t.tagName.toLowerCase(),
          l = t.style,
          h = 1,
          f = 1;
        Ji(t) &&
          ((f = t.getScreenCTM()),
          (h = Ki(f.a * f.a + f.b * f.b)),
          (f = Ki(f.d * f.d + f.c * f.c)));
        try {
          n = t.getBBox();
        } catch (t) {
          $i(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs).",
          );
        }
        var D = n || { x: 0, y: 0, width: 0, height: 0 },
          p = D.x,
          c = D.y,
          d = D.width,
          g = D.height;
        if (
          ((n && (d || g)) ||
            !qi[a] ||
            ((d = Qi(t, qi[a][0])),
            (g = Qi(t, qi[a][1])),
            "rect" !== a && "line" !== a && ((d *= 2), (g *= 2)),
            "line" === a &&
              ((p = Qi(t, "x1")),
              (c = Qi(t, "y1")),
              (d = Math.abs(d - p)),
              (g = Math.abs(g - c)))),
          "path" === a)
        )
          (i = l.strokeDasharray),
            (l.strokeDasharray = "none"),
            (e = t.getTotalLength() || 0),
            h !== f &&
              $i(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.",
              ),
            (e *= (h + f) / 2),
            (l.strokeDasharray = i);
        else if ("rect" === a) e = 2 * d * h + 2 * g * f;
        else if ("line" === a) e = Zi(p, c, p + d, c + g, h, f);
        else if ("polyline" === a || "polygon" === a)
          for (
            r = t.getAttribute("points").match(Wi) || [],
              "polygon" === a && r.push(r[0], r[1]),
              e = 0,
              u = 2;
            u < r.length;
            u += 2
          )
            e += Zi(r[u - 2], r[u - 1], r[u], r[u + 1], h, f) || 0;
        else
          ("circle" !== a && "ellipse" !== a) ||
            ((s = (d / 2) * h),
            (o = (g / 2) * f),
            (e = Math.PI * (3 * (s + o) - Ki((3 * s + o) * (s + 3 * o)))));
        return e || 0;
      },
      eu = function (t, e) {
        if (!(t = zi(t)[0])) return [0, 0];
        e || (e = tu(t) + 1);
        var n = Yi.getComputedStyle(t),
          r = n.strokeDasharray || "",
          i = Hi(n.strokeDashoffset),
          u = r.indexOf(",");
        return (
          u < 0 && (u = r.indexOf(" ")),
          (r = u < 0 ? e : Hi(r.substr(0, u)) || 1e-5) > e && (r = e),
          [Math.max(0, -i), Math.max(0, r - i)]
        );
      },
      nu = function () {
        Vi() &&
          (document,
          (Yi = window),
          (ji = Ii = Ui()),
          (zi = Ii.utils.toArray),
          (Xi = -1 !== ((Yi.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      ru = {
        version: "3.5.1",
        name: "drawSVG",
        register: function (t) {
          (Ii = t), nu();
        },
        init: function (t, e, n, r, i) {
          if (!t.getBBox) return !1;
          ji || nu();
          var u,
            s,
            o,
            a,
            l = tu(t) + 1;
          return (
            (this._style = t.style),
            (this._target = t),
            e + "" == "true"
              ? (e = "0 100%")
              : e
              ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
              : (e = "0 0"),
            (s = (function (t, e, n) {
              var r,
                i,
                u = t.indexOf(" ");
              return (
                u < 0
                  ? ((r = void 0 !== n ? n + "" : t), (i = t))
                  : ((r = t.substr(0, u)), (i = t.substr(u + 1))),
                (r = ~r.indexOf("%") ? (Hi(r) / 100) * e : Hi(r)) >
                (i = ~i.indexOf("%") ? (Hi(i) / 100) * e : Hi(i))
                  ? [i, r]
                  : [r, i]
              );
            })(e, l, (u = eu(t, l))[0])),
            (this._length = Gi(l + 10)),
            0 === u[0] && 0 === s[0]
              ? ((o = Math.max(1e-5, s[1] - l)),
                (this._dash = Gi(l + o)),
                (this._offset = Gi(l - u[1] + o)),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  Gi(l - s[1] + o),
                )))
              : ((this._dash = Gi(u[1] - u[0]) || 1e-6),
                (this._offset = Gi(-u[0])),
                (this._dashPT = this.add(
                  this,
                  "_dash",
                  this._dash,
                  Gi(s[1] - s[0]) || 1e-5,
                )),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  Gi(-s[0]),
                ))),
            Xi &&
              (a = Yi.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin &&
              ((s = Hi(a.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", s, s + 0.01)),
            (this._live = Ji(t) || ~(e + "").indexOf("live")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (t, e) {
          var n,
            r,
            i,
            u,
            s = e._pt,
            o = e._style;
          if (s) {
            for (
              e._live &&
              (n = tu(e._target) + 11) !== e._length &&
              ((r = n / e._length),
              (e._length = n),
              (e._offsetPT.s *= r),
              (e._offsetPT.c *= r),
              e._dashPT
                ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
                : (e._dash *= r));
              s;

            )
              s.r(t, s.d), (s = s._next);
            (i = e._dash),
              (u = e._offset),
              (n = e._length),
              (o.strokeDashoffset = e._offset),
              1 !== t && t
                ? (o.strokeDasharray = i + "px," + n + "px")
                : (i - u < 0.001 && n - i <= 10 && (o.strokeDashoffset = u + 1),
                  (o.strokeDasharray =
                    u < 0.001 && n - i <= 10
                      ? "none"
                      : u === i
                      ? "0px, 999999px"
                      : i + "px," + n + "px"));
          }
        },
        getLength: tu,
        getPosition: eu,
      };
    Ui() && Ii.registerPlugin(ru);
    /*!
     * matrix 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var iu,
      uu,
      su,
      ou,
      au,
      lu,
      hu,
      fu,
      Du = "transform",
      pu = Du + "Origin",
      cu = function (t) {
        var e = t.ownerDocument || t;
        !(Du in t.style) &&
          "msTransform" in t.style &&
          (pu = (Du = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode); );
        if (((uu = window), (hu = new Cu()), e)) {
          (iu = e), (su = e.documentElement), (ou = e.body);
          var n = e.createElement("div"),
            r = e.createElement("div");
          ou.appendChild(n),
            n.appendChild(r),
            (n.style.position = "static"),
            (n.style[Du] = "translate3d(0,0,1px)"),
            (fu = r.offsetParent !== n),
            ou.removeChild(n);
        }
        return e;
      },
      du = [],
      gu = [],
      _u = function (t) {
        return (
          t.ownerSVGElement ||
          ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        );
      },
      mu = function t(e, n) {
        if (e.parentNode && (iu || cu(e))) {
          var r = _u(e),
            i = r
              ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
              : "http://www.w3.org/1999/xhtml",
            u = r ? (n ? "rect" : "g") : "div",
            s = 2 !== n ? 0 : 100,
            o = 3 === n ? 100 : 0,
            a = "position:absolute;display:block;pointer-events:none;",
            l = iu.createElementNS
              ? iu.createElementNS(i.replace(/^https/, "http"), u)
              : iu.createElement(u);
          return (
            n &&
              (r
                ? (lu || (lu = t(e)),
                  l.setAttribute("width", 0.01),
                  l.setAttribute("height", 0.01),
                  l.setAttribute("transform", "translate(" + s + "," + o + ")"),
                  lu.appendChild(l))
                : (au || ((au = t(e)).style.cssText = a),
                  (l.style.cssText =
                    a +
                    "width:0.1px;height:0.1px;top:" +
                    o +
                    "px;left:" +
                    s +
                    "px"),
                  au.appendChild(l))),
            l
          );
        }
        throw "Need document and parent.";
      },
      vu = function (t, e) {
        var n,
          r,
          i,
          u,
          s,
          o = _u(t),
          a = t === o,
          l = o ? du : gu;
        if (t === uu) return t;
        if (
          (l.length || l.push(mu(t, 1), mu(t, 2), mu(t, 3)),
          (n = o ? lu : au),
          o)
        )
          (i = a ? { x: 0, y: 0 } : t.getBBox()),
            (r = t.transform ? t.transform.baseVal : {}).numberOfItems
              ? ((u =
                  (r =
                    r.numberOfItems > 1
                      ? (function (t) {
                          for (
                            var e = new Cu(), n = 0;
                            n < t.numberOfItems;
                            n++
                          )
                            e.multiply(t.getItem(n).matrix);
                          return e;
                        })(r)
                      : r.getItem(0).matrix).a *
                    i.x +
                  r.c * i.y),
                (s = r.b * i.x + r.d * i.y))
              : ((r = hu), (u = i.x), (s = i.y)),
            e && "g" === t.tagName.toLowerCase() && (u = s = 0),
            n.setAttribute(
              "transform",
              "matrix(" +
                r.a +
                "," +
                r.b +
                "," +
                r.c +
                "," +
                r.d +
                "," +
                (r.e + u) +
                "," +
                (r.f + s) +
                ")",
            ),
            (a ? o : t.parentNode).appendChild(n);
        else {
          if (((u = s = 0), fu))
            for (
              r = t.offsetParent, i = t;
              i && (i = i.parentNode) && i !== r && i.parentNode;

            )
              (uu.getComputedStyle(i)[Du] + "").length > 4 &&
                ((u = i.offsetLeft), (s = i.offsetTop), (i = 0));
          ((i = n.style).top = t.offsetTop - s + "px"),
            (i.left = t.offsetLeft - u + "px"),
            (r = uu.getComputedStyle(t)),
            (i[Du] = r[Du]),
            (i[pu] = r[pu]),
            (i.border = r.border),
            (i.borderLeftStyle = r.borderLeftStyle),
            (i.borderTopStyle = r.borderTopStyle),
            (i.borderLeftWidth = r.borderLeftWidth),
            (i.borderTopWidth = r.borderTopWidth),
            (i.position = "fixed" === r.position ? "fixed" : "absolute"),
            t.parentNode.appendChild(n);
        }
        return n;
      },
      yu = function (t, e, n, r, i, u, s) {
        return (
          (t.a = e), (t.b = n), (t.c = r), (t.d = i), (t.e = u), (t.f = s), t
        );
      },
      Cu = (function () {
        function t(t, e, n, r, i, u) {
          void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = 1),
            void 0 === i && (i = 0),
            void 0 === u && (u = 0),
            yu(this, t, e, n, r, i, u);
        }
        var e = t.prototype;
        return (
          (e.inverse = function () {
            var t = this.a,
              e = this.b,
              n = this.c,
              r = this.d,
              i = this.e,
              u = this.f,
              s = t * r - e * n || 1e-10;
            return yu(
              this,
              r / s,
              -e / s,
              -n / s,
              t / s,
              (n * u - r * i) / s,
              -(t * u - e * i) / s,
            );
          }),
          (e.multiply = function (t) {
            var e = this.a,
              n = this.b,
              r = this.c,
              i = this.d,
              u = this.e,
              s = this.f,
              o = t.a,
              a = t.c,
              l = t.b,
              h = t.d,
              f = t.e,
              D = t.f;
            return yu(
              this,
              o * e + l * r,
              o * n + l * i,
              a * e + h * r,
              a * n + h * i,
              u + f * e + D * r,
              s + f * n + D * i,
            );
          }),
          (e.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.e, this.f);
          }),
          (e.equals = function (t) {
            var e = this.a,
              n = this.b,
              r = this.c,
              i = this.d,
              u = this.e,
              s = this.f;
            return (
              e === t.a &&
              n === t.b &&
              r === t.c &&
              i === t.d &&
              u === t.e &&
              s === t.f
            );
          }),
          (e.apply = function (t, e) {
            void 0 === e && (e = {});
            var n = t.x,
              r = t.y,
              i = this.a,
              u = this.b,
              s = this.c,
              o = this.d,
              a = this.e,
              l = this.f;
            return (
              (e.x = n * i + r * s + a || 0), (e.y = n * u + r * o + l || 0), e
            );
          }),
          t
        );
      })();
    function xu(t, e, n) {
      if (!t || !t.parentNode || (iu || cu(t)).documentElement === t)
        return new Cu();
      var r = (function (t) {
          for (var e, n; t && t !== ou; )
            (n = t._gsap) &&
              !n.scaleX &&
              !n.scaleY &&
              n.renderTransform &&
              ((n.scaleX = n.scaleY = 1e-4),
              n.renderTransform(1, n),
              e ? e.push(n) : (e = [n])),
              (t = t.parentNode);
          return e;
        })(t.parentNode),
        i = _u(t) ? du : gu,
        u = vu(t, n),
        s = i[0].getBoundingClientRect(),
        o = i[1].getBoundingClientRect(),
        a = i[2].getBoundingClientRect(),
        l = u.parentNode,
        h = (function t(e) {
          return (
            "fixed" === uu.getComputedStyle(e).position ||
            ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
          );
        })(t),
        f = new Cu(
          (o.left - s.left) / 100,
          (o.top - s.top) / 100,
          (a.left - s.left) / 100,
          (a.top - s.top) / 100,
          s.left +
            (h
              ? 0
              : uu.pageXOffset ||
                iu.scrollLeft ||
                su.scrollLeft ||
                ou.scrollLeft ||
                0),
          s.top +
            (h
              ? 0
              : uu.pageYOffset ||
                iu.scrollTop ||
                su.scrollTop ||
                ou.scrollTop ||
                0),
        );
      if ((l.removeChild(u), r))
        for (s = r.length; s--; )
          ((o = r[s]).scaleX = o.scaleY = 0), o.renderTransform(1, o);
      return e ? f.inverse() : f;
    }
    /*!
     * MotionPathPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var Fu,
      wu,
      Eu,
      bu,
      Tu = ["x", "translateX", "left", "marginLeft"],
      Au = ["y", "translateY", "top", "marginTop"],
      Mu = Math.PI / 180,
      Ou = function (t, e, n, r) {
        for (var i = e.length, u = 2 === r ? 0 : r, s = 0; s < i; s++)
          (t[u] = parseFloat(e[s][n])), 2 === r && (t[u + 1] = 0), (u += 2);
        return t;
      },
      Su = function (t, e, n) {
        return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
      },
      Pu = function (t) {
        var e,
          n = t[0],
          r = t[1];
        for (e = 2; e < t.length; e += 2) (n = t[e] += n), (r = t[e + 1] += r);
      },
      Bu = function (t, e, n, r, i, u, s) {
        "cubic" === s.type
          ? (e = [e])
          : (e.unshift(Su(n, r, s.unitX), i ? Su(n, i, s.unitY) : 0),
            s.relative && Pu(e),
            (e = [(i ? _i : gi)(e, s.curviness)]));
        return (
          (e = u(Iu(e, n, s))),
          zu(t, n, r, e, "x", s.unitX),
          i && zu(t, n, i, e, "y", s.unitY),
          li(e, s.resolution || (0 === s.curviness ? 20 : 12))
        );
      },
      ku = function (t) {
        return t;
      },
      Lu = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
      Nu = function (t, e, n) {
        var r,
          i,
          u,
          s = xu(t);
        return (
          "svg" === (t.tagName + "").toLowerCase()
            ? ((i = (r = t.viewBox.baseVal).x),
              (u = r.y),
              r.width ||
                (r = {
                  width: +t.getAttribute("width"),
                  height: +t.getAttribute("height"),
                }))
            : ((r = e && t.getBBox && t.getBBox()), (i = u = 0)),
          e &&
            "auto" !== e &&
            ((i += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x),
            (u += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y)),
          n.apply(i || u ? s.apply({ x: i, y: u }) : { x: s.e, y: s.f })
        );
      },
      Ru = function (t, e, n, r) {
        var i,
          u = xu(t.parentNode, !0, !0),
          s = u.clone().multiply(xu(e)),
          o = Nu(t, n, u),
          a = Nu(e, r, u),
          l = a.x,
          h = a.y;
        return (
          (s.e = s.f = 0),
          "auto" === r &&
            e.getTotalLength &&
            "path" === e.tagName.toLowerCase() &&
            ((i = e.getAttribute("d").match(Lu) || []),
            (l += (i = s.apply({ x: +i[0], y: +i[1] })).x),
            (h += i.y)),
          (i ||
            (e.getBBox &&
              t.getBBox &&
              e.ownerSVGElement === t.ownerSVGElement)) &&
            ((l -= (i = s.apply(e.getBBox())).x), (h -= i.y)),
          (s.e = l - o.x),
          (s.f = h - o.y),
          s
        );
      },
      Iu = function (t, e, n) {
        var r,
          i,
          u,
          s = n.align,
          o = n.matrix,
          a = n.offsetX,
          l = n.offsetY,
          h = n.alignOrigin,
          f = t[0][0],
          D = t[0][1],
          p = Su(e, "x"),
          c = Su(e, "y");
        return t && t.length
          ? (s &&
              ("self" === s || (r = bu(s)[0] || e) === e
                ? pi(t, 1, 0, 0, 1, p - f, c - D)
                : (h && !1 !== h[2]
                    ? Fu.set(e, {
                        transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%",
                      })
                    : (h = [
                        Su(e, "xPercent") / -100,
                        Su(e, "yPercent") / -100,
                      ]),
                  (u = (i = Ru(e, r, h, "auto")).apply({ x: f, y: D })),
                  pi(
                    t,
                    i.a,
                    i.b,
                    i.c,
                    i.d,
                    p + i.e - (u.x - i.e),
                    c + i.f - (u.y - i.f),
                  ))),
            o
              ? pi(t, o.a, o.b, o.c, o.d, o.e, o.f)
              : (a || l) && pi(t, 1, 0, 0, 1, a || 0, l || 0),
            t)
          : ni("M0,0L0,0");
      },
      zu = function (t, e, n, r, i, u) {
        var s = e._gsap,
          o = s.harness,
          a = o && o.aliases && o.aliases[n],
          l = a && a.indexOf(",") < 0 ? a : n,
          h = (t._pt = new wu(t._pt, e, l, 0, 0, ku, 0, s.set(e, l, t)));
        (h.u = Eu(s.get(e, l, u)) || 0),
          (h.path = r),
          (h.pp = i),
          t._props.push(l);
      },
      Yu = {
        version: "3.5.1",
        name: "motionPath",
        register: function (t, e, n) {
          (Eu = (Fu = t).utils.getUnit), (bu = Fu.utils.toArray), (wu = n);
        },
        init: function (t, e) {
          if (!Fu)
            return (
              console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1
            );
          ("object" == typeof e && !e.style && e.path) || (e = { path: e });
          var n,
            r,
            i,
            u,
            s,
            o,
            a = [],
            l = e.path,
            h = l[0],
            f = e.autoRotate,
            D =
              ((s = e.start),
              (o = "end" in e ? e.end : 1),
              function (t) {
                return s || 1 !== o ? oi(t, s, o) : t;
              });
          if (
            ((this.rawPaths = a),
            (this.target = t),
            (this.rotate = f || 0 === f) &&
              ((this.rOffset = parseFloat(f) || 0),
              (this.radians = !!e.useRadians),
              (this.rProp = e.rotation || "rotation"),
              (this.rSet = t._gsap.set(t, this.rProp, this)),
              (this.ru = Eu(t._gsap.get(t, this.rProp)) || 0)),
            Array.isArray(l) && !("closed" in l) && "number" != typeof h)
          ) {
            for (r in h) ~Tu.indexOf(r) ? (i = r) : ~Au.indexOf(r) && (u = r);
            for (r in (i && u
              ? a.push(
                  Bu(
                    this,
                    Ou(Ou([], l, i, 0), l, u, 1),
                    t,
                    e.x || i,
                    e.y || u,
                    D,
                    e,
                  ),
                )
              : (i = u = 0),
            h))
              r !== i &&
                r !== u &&
                a.push(Bu(this, Ou([], l, r, 2), t, r, 0, D, e));
          } else
            li((n = D(Iu(ni(e.path), t, e))), e.resolution),
              a.push(n),
              zu(this, t, e.x || "x", n, "x", e.unitX || "px"),
              zu(this, t, e.y || "y", n, "y", e.unitY || "px");
        },
        render: function (t, e) {
          var n = e.rawPaths,
            r = n.length,
            i = e._pt;
          for (t > 1 ? (t = 1) : t < 0 && (t = 0); r--; )
            Di(n[r], t, !r && e.rotate, n[r]);
          for (; i; )
            i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), (i = i._next);
          e.rotate &&
            e.rSet(
              e.target,
              e.rProp,
              n[0].angle * (e.radians ? Mu : 1) + e.rOffset + e.ru,
              e,
              t,
            );
        },
        getLength: function (t) {
          return li(ni(t)).totalLength;
        },
        sliceRawPath: oi,
        getRawPath: ni,
        pointsToSegment: _i,
        stringToRawPath: di,
        rawPathToString: mi,
        transformRawPath: pi,
        getGlobalMatrix: xu,
        getPositionOnPath: Di,
        cacheRawPathMeasurements: li,
        convertToPath: function (t, e) {
          return bu(t).map(function (t) {
            return ui(t, !1 !== e);
          });
        },
        convertCoordinates: function (t, e, n) {
          var r = xu(e, !0, !0).multiply(xu(t));
          return n ? r.apply(n) : r;
        },
        getAlignMatrix: Ru,
        getRelativePosition: function (t, e, n, r) {
          var i = Ru(t, e, n, r);
          return { x: i.e, y: i.f };
        },
        arrayToRawPath: function (t, e) {
          var n = Ou(Ou([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
          return (
            e.relative && Pu(n), ["cubic" === e.type ? n : _i(n, e.curviness)]
          );
        },
      };
    (Fu ||
      ("undefined" != typeof window &&
        (Fu = window.gsap) &&
        Fu.registerPlugin &&
        Fu)) &&
      Fu.registerPlugin(Yu);
    /*!
     * ScrollToPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Xu,
      ju,
      Vu,
      Uu,
      Wu,
      qu,
      Gu,
      Hu = function () {
        return "undefined" != typeof window;
      },
      Qu = function () {
        return Xu || (Hu() && (Xu = window.gsap) && Xu.registerPlugin && Xu);
      },
      Ku = function (t) {
        return "string" == typeof t;
      },
      Zu = function (t, e) {
        var n = "x" === e ? "Width" : "Height",
          r = "scroll" + n,
          i = "client" + n;
        return t === Vu || t === Uu || t === Wu
          ? Math.max(Uu[r], Wu[r]) - (Vu["inner" + n] || Uu[i] || Wu[i])
          : t[r] - t["offset" + n];
      },
      $u = function (t, e) {
        var n = "scroll" + ("x" === e ? "Left" : "Top");
        return (
          t === Vu &&
            (null != t.pageXOffset
              ? (n = "page" + e.toUpperCase() + "Offset")
              : (t = null != Uu[n] ? Uu : Wu)),
          function () {
            return t[n];
          }
        );
      },
      Ju = function (t, e) {
        var n = qu(t)[0].getBoundingClientRect(),
          r = !e || e === Vu || e === Wu,
          i = r
            ? {
                top:
                  Uu.clientTop -
                  (Vu.pageYOffset || Uu.scrollTop || Wu.scrollTop || 0),
                left:
                  Uu.clientLeft -
                  (Vu.pageXOffset || Uu.scrollLeft || Wu.scrollLeft || 0),
              }
            : e.getBoundingClientRect(),
          u = { x: n.left - i.left, y: n.top - i.top };
        return !r && e && ((u.x += $u(e, "x")()), (u.y += $u(e, "y")())), u;
      },
      ts = function (t, e, n, r, i) {
        return isNaN(t) || "object" == typeof t
          ? Ku(t) && "=" === t.charAt(1)
            ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i
            : "max" === t
            ? Zu(e, n) - i
            : Math.min(Zu(e, n), Ju(t, e)[n] - i)
          : parseFloat(t) - i;
      },
      es = function () {
        (Xu = Qu()),
          Hu() &&
            Xu &&
            document.body &&
            ((Vu = window),
            (Wu = document.body),
            (Uu = document.documentElement),
            (qu = Xu.utils.toArray),
            Xu.config({ autoKillThreshold: 7 }),
            (Gu = Xu.config()),
            (ju = 1));
      },
      ns = {
        version: "3.5.1",
        name: "scrollTo",
        rawVars: 1,
        register: function (t) {
          (Xu = t), es();
        },
        init: function (t, e, n, r, i) {
          ju || es();
          (this.isWin = t === Vu),
            (this.target = t),
            (this.tween = n),
            "object" != typeof e
              ? Ku((e = { y: e }).y) &&
                "max" !== e.y &&
                "=" !== e.y.charAt(1) &&
                (e.x = e.y)
              : e.nodeType && (e = { y: e, x: e }),
            (this.vars = e),
            (this.autoKill = !!e.autoKill),
            (this.getX = $u(t, "x")),
            (this.getY = $u(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != e.x
              ? (this.add(
                  this,
                  "x",
                  this.x,
                  ts(e.x, t, "x", this.x, e.offsetX || 0),
                  r,
                  i,
                  Math.round,
                ),
                this._props.push("scrollTo_x"))
              : (this.skipX = 1),
            null != e.y
              ? (this.add(
                  this,
                  "y",
                  this.y,
                  ts(e.y, t, "y", this.y, e.offsetY || 0),
                  r,
                  i,
                  Math.round,
                ),
                this._props.push("scrollTo_y"))
              : (this.skipY = 1);
        },
        render: function (t, e) {
          for (
            var n,
              r,
              i,
              u,
              s,
              o = e._pt,
              a = e.target,
              l = e.tween,
              h = e.autoKill,
              f = e.xPrev,
              D = e.yPrev,
              p = e.isWin;
            o;

          )
            o.r(t, o.d), (o = o._next);
          (n = p || !e.skipX ? e.getX() : f),
            (i = (r = p || !e.skipY ? e.getY() : D) - D),
            (u = n - f),
            (s = Gu.autoKillThreshold),
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            h &&
              (!e.skipX && (u > s || u < -s) && n < Zu(a, "x") && (e.skipX = 1),
              !e.skipY && (i > s || i < -s) && r < Zu(a, "y") && (e.skipY = 1),
              e.skipX &&
                e.skipY &&
                (l.kill(),
                e.vars.onAutoKill &&
                  e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))),
            p
              ? Vu.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
              : (e.skipY || (a.scrollTop = e.y),
                e.skipX || (a.scrollLeft = e.x)),
            (e.xPrev = e.x),
            (e.yPrev = e.y);
        },
        kill: function (t) {
          var e = "scrollTo" === t;
          (e || "scrollTo_x" === t) && (this.skipX = 1),
            (e || "scrollTo_y" === t) && (this.skipY = 1);
        },
      };
    (ns.max = Zu),
      (ns.getOffset = Ju),
      (ns.buildGetter = $u),
      Qu() && Xu.registerPlugin(ns);
    /*!
     * strings: 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var rs =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var is,
      us,
      ss,
      os,
      as = /(?:\r|\n|\t\t)/g,
      ls = /(?:\s\s+)/g,
      hs = function (t) {
        return us.getComputedStyle(t);
      },
      fs = Array.isArray,
      Ds = [].slice,
      ps = function (t, e) {
        var n;
        return fs(t)
          ? t
          : "string" == (n = typeof t) && !e && t
          ? Ds.call(is.querySelectorAll(t), 0)
          : t && "object" === n && "length" in t
          ? Ds.call(t, 0)
          : t
          ? [t]
          : [];
      },
      cs = function (t) {
        return "absolute" === t.position || !0 === t.absolute;
      },
      ds = function (t, e) {
        for (var n, r = e.length; --r > -1; )
          if (((n = e[r]), t.substr(0, n.length) === n)) return n.length;
      },
      gs = function (t, e) {
        void 0 === t && (t = "");
        var n = ~t.indexOf("++"),
          r = 1;
        return (
          n && (t = t.split("++").join("")),
          function () {
            return (
              "<" +
              e +
              " style='position:relative;display:inline-block;'" +
              (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
            );
          }
        );
      },
      _s = function t(e, n, r) {
        var i = e.nodeType;
        if (1 === i || 9 === i || 11 === i)
          for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
        else
          (3 !== i && 4 !== i) || (e.nodeValue = e.nodeValue.split(n).join(r));
      },
      ms = function (t, e) {
        for (var n = e.length; --n > -1; ) t.push(e[n]);
      },
      vs = function (t, e, n) {
        for (var r; t && t !== e; ) {
          if ((r = t._next || t.nextSibling))
            return r.textContent.charAt(0) === n;
          t = t.parentNode || t._parent;
        }
      },
      ys = function t(e) {
        var n,
          r,
          i = ps(e.childNodes),
          u = i.length;
        for (n = 0; n < u; n++)
          (r = i[n])._isSplit
            ? t(r)
            : (n && 3 === r.previousSibling.nodeType
                ? (r.previousSibling.nodeValue +=
                    3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue)
                : 3 !== r.nodeType && e.insertBefore(r.firstChild, r),
              e.removeChild(r));
      },
      Cs = function (t, e) {
        return parseFloat(e[t]) || 0;
      },
      xs = function (t, e, n, r, i, u, s) {
        var o,
          a,
          l,
          h,
          f,
          D,
          p,
          c,
          d,
          g,
          _,
          m,
          v = hs(t),
          y = Cs("paddingLeft", v),
          C = -999,
          x = Cs("borderBottomWidth", v) + Cs("borderTopWidth", v),
          F = Cs("borderLeftWidth", v) + Cs("borderRightWidth", v),
          w = Cs("paddingTop", v) + Cs("paddingBottom", v),
          E = Cs("paddingLeft", v) + Cs("paddingRight", v),
          b = Cs("fontSize", v) * (e.lineThreshold || 0.2),
          T = v.textAlign,
          A = [],
          M = [],
          O = [],
          S = e.wordDelimiter || " ",
          P = e.tag ? e.tag : e.span ? "span" : "div",
          B = e.type || e.split || "chars,words,lines",
          k = i && ~B.indexOf("lines") ? [] : null,
          L = ~B.indexOf("words"),
          N = ~B.indexOf("chars"),
          R = cs(e),
          I = e.linesClass,
          z = ~(I || "").indexOf("++"),
          Y = [];
        for (
          z && (I = I.split("++").join("")),
            l = (a = t.getElementsByTagName("*")).length,
            f = [],
            o = 0;
          o < l;
          o++
        )
          f[o] = a[o];
        if (k || R)
          for (o = 0; o < l; o++)
            ((D = (h = f[o]).parentNode === t) || R || (N && !L)) &&
              ((m = h.offsetTop),
              k &&
                D &&
                Math.abs(m - C) > b &&
                ("BR" !== h.nodeName || 0 === o) &&
                ((p = []), k.push(p), (C = m)),
              R &&
                ((h._x = h.offsetLeft),
                (h._y = m),
                (h._w = h.offsetWidth),
                (h._h = h.offsetHeight)),
              k &&
                (((h._isSplit && D) ||
                  (!N && D) ||
                  (L && D) ||
                  (!L &&
                    h.parentNode.parentNode === t &&
                    !h.parentNode._isSplit)) &&
                  (p.push(h), (h._x -= y), vs(h, t, S) && (h._wordEnd = !0)),
                "BR" === h.nodeName &&
                  ((h.nextSibling && "BR" === h.nextSibling.nodeName) ||
                    0 === o) &&
                  k.push([])));
        for (o = 0; o < l; o++)
          (D = (h = f[o]).parentNode === t),
            "BR" !== h.nodeName
              ? (R &&
                  ((d = h.style),
                  L ||
                    D ||
                    ((h._x += h.parentNode._x), (h._y += h.parentNode._y)),
                  (d.left = h._x + "px"),
                  (d.top = h._y + "px"),
                  (d.position = "absolute"),
                  (d.display = "block"),
                  (d.width = h._w + 1 + "px"),
                  (d.height = h._h + "px")),
                !L && N
                  ? h._isSplit
                    ? ((h._next = h.nextSibling), h.parentNode.appendChild(h))
                    : h.parentNode._isSplit
                    ? ((h._parent = h.parentNode),
                      !h.previousSibling &&
                        h.firstChild &&
                        (h.firstChild._isFirst = !0),
                      h.nextSibling &&
                        " " === h.nextSibling.textContent &&
                        !h.nextSibling.nextSibling &&
                        Y.push(h.nextSibling),
                      (h._next =
                        h.nextSibling && h.nextSibling._isFirst
                          ? null
                          : h.nextSibling),
                      h.parentNode.removeChild(h),
                      f.splice(o--, 1),
                      l--)
                    : D ||
                      ((m = !h.nextSibling && vs(h.parentNode, t, S)),
                      h.parentNode._parent &&
                        h.parentNode._parent.appendChild(h),
                      m && h.parentNode.appendChild(is.createTextNode(" ")),
                      "span" === P && (h.style.display = "inline"),
                      A.push(h))
                  : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML
                  ? M.push(h)
                  : N &&
                    !h._isSplit &&
                    ("span" === P && (h.style.display = "inline"), A.push(h)))
              : k || R
              ? (h.parentNode && h.parentNode.removeChild(h),
                f.splice(o--, 1),
                l--)
              : L || t.appendChild(h);
        for (o = Y.length; --o > -1; ) Y[o].parentNode.removeChild(Y[o]);
        if (k) {
          for (
            R &&
              ((g = is.createElement(P)),
              t.appendChild(g),
              (_ = g.offsetWidth + "px"),
              (m = g.offsetParent === t ? 0 : t.offsetLeft),
              t.removeChild(g)),
              d = t.style.cssText,
              t.style.cssText = "display:none;";
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (c = " " === S && (!R || (!L && !N)), o = 0; o < k.length; o++) {
            for (
              p = k[o],
                (g = is.createElement(P)).style.cssText =
                  "display:block;text-align:" +
                  T +
                  ";position:" +
                  (R ? "absolute;" : "relative;"),
                I && (g.className = I + (z ? o + 1 : "")),
                O.push(g),
                l = p.length,
                a = 0;
              a < l;
              a++
            )
              "BR" !== p[a].nodeName &&
                ((h = p[a]),
                g.appendChild(h),
                c && h._wordEnd && g.appendChild(is.createTextNode(" ")),
                R &&
                  (0 === a &&
                    ((g.style.top = h._y + "px"),
                    (g.style.left = y + m + "px")),
                  (h.style.top = "0px"),
                  m && (h.style.left = h._x - m + "px")));
            0 === l
              ? (g.innerHTML = "&nbsp;")
              : L || N || (ys(g), _s(g, String.fromCharCode(160), " ")),
              R && ((g.style.width = _), (g.style.height = h._h + "px")),
              t.appendChild(g);
          }
          t.style.cssText = d;
        }
        R &&
          (s > t.clientHeight &&
            ((t.style.height = s - w + "px"),
            t.clientHeight < s && (t.style.height = s + x + "px")),
          u > t.clientWidth &&
            ((t.style.width = u - E + "px"),
            t.clientWidth < u && (t.style.width = u + F + "px"))),
          ms(n, A),
          L && ms(r, M),
          ms(i, O);
      },
      Fs = function (t, e, n, r) {
        var i,
          u,
          s,
          o,
          a,
          l,
          h,
          f,
          D = e.tag ? e.tag : e.span ? "span" : "div",
          p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
          c = cs(e),
          d = e.wordDelimiter || " ",
          g = " " !== d ? "" : c ? "&#173; " : " ",
          _ = "</" + D + ">",
          m = 1,
          v = e.specialChars
            ? "function" == typeof e.specialChars
              ? e.specialChars
              : ds
            : null,
          y = is.createElement("div"),
          C = t.parentNode;
        for (
          C.insertBefore(y, t),
            y.textContent = t.nodeValue,
            C.removeChild(t),
            h =
              -1 !==
              (i = (function t(e) {
                var n = e.nodeType,
                  r = "";
                if (1 === n || 9 === n || 11 === n) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) r += t(e);
                } else if (3 === n || 4 === n) return e.nodeValue;
                return r;
              })((t = y))).indexOf("<"),
            !1 !== e.reduceWhiteSpace &&
              (i = i.replace(ls, " ").replace(as, "")),
            h && (i = i.split("<").join("{{LT}}")),
            a = i.length,
            u = (" " === i.charAt(0) ? g : "") + n(),
            s = 0;
          s < a;
          s++
        )
          if (((l = i.charAt(s)), v && (f = v(i.substr(s), e.specialChars))))
            (l = i.substr(s, f || 1)),
              (u += p && " " !== l ? r() + l + "</" + D + ">" : l),
              (s += f - 1);
          else if (l === d && i.charAt(s - 1) !== d && s) {
            for (u += m ? _ : "", m = 0; i.charAt(s + 1) === d; ) (u += g), s++;
            s === a - 1
              ? (u += g)
              : ")" !== i.charAt(s + 1) && ((u += g + n()), (m = 1));
          } else
            "{" === l && "{{LT}}" === i.substr(s, 6)
              ? ((u += p ? r() + "{{LT}}</" + D + ">" : "{{LT}}"), (s += 5))
              : (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
                (i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039)
              ? ((o = ((i.substr(s, 12).split(rs) || [])[1] || "").length || 2),
                (u +=
                  p && " " !== l
                    ? r() + i.substr(s, o) + "</" + D + ">"
                    : i.substr(s, o)),
                (s += o - 1))
              : (u += p && " " !== l ? r() + l + "</" + D + ">" : l);
        (t.outerHTML = u + (m ? _ : "")), h && _s(C, "{{LT}}", "<");
      },
      ws = function t(e, n, r, i) {
        var u,
          s,
          o = ps(e.childNodes),
          a = o.length,
          l = cs(n);
        if (3 !== e.nodeType || a > 1) {
          for (n.absolute = !1, u = 0; u < a; u++)
            (3 !== (s = o[u]).nodeType || /\S+/.test(s.nodeValue)) &&
              (l &&
                3 !== s.nodeType &&
                "inline" === hs(s).display &&
                ((s.style.display = "inline-block"),
                (s.style.position = "relative")),
              (s._isSplit = !0),
              t(s, n, r, i));
          return (n.absolute = l), void (e._isSplit = !0);
        }
        Fs(e, n, r, i);
      },
      Es = (function () {
        function t(t, e) {
          ss || ((is = document), (us = window), (ss = 1)),
            (this.elements = ps(t)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            this.split(e);
        }
        var e = t.prototype;
        return (
          (e.split = function (t) {
            this.isSplit && this.revert(),
              (this.vars = t = t || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var e,
                n,
                r,
                i = this.elements.length,
                u = t.tag ? t.tag : t.span ? "span" : "div",
                s = gs(t.wordsClass, u),
                o = gs(t.charsClass, u);
              --i > -1;

            )
              (r = this.elements[i]),
                (this._originals[i] = r.innerHTML),
                (e = r.clientHeight),
                (n = r.clientWidth),
                ws(r, t, s, o),
                xs(r, t, this.chars, this.words, this.lines, n, e);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (e.revert = function () {
            var t = this._originals;
            if (!t) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (e, n) {
                return (e.innerHTML = t[n]);
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          t
        );
      })();
    (Es.version = "3.5.1"),
      Mr.registerPlugin(Qe, Or, Ye, Ye, Lr, Ti, Ri, ru, Yu, ns, Er);
    var bs = (os = window.punchgs = window.tpGS = {});
    for (var Ts in ((bs.gsap = Mr),
    (bs.TweenLite = Qe),
    (bs.TweenMax = Or),
    (bs.TimelineLite = Ye),
    (bs.TimelineMax = Ye),
    (bs.CustomBounce = Lr),
    (bs.CustomEase = Ti),
    (bs.CustomWiggle = Ri),
    (bs.DrawSVGPlugin = ru),
    (bs.MotionPathPlugin = Yu),
    (bs.ScrollToPlugin = ns),
    (bs.CSSPlugin = Er),
    /*! Map SplitText to tpGS TPGSSPLITTEXT */
    (bs.SplitText = Es),
    (bs.RAD2DEG = 180 / Math.PI),
    (bs.DEG2RAD = Math.PI / 180),
    /*! REGISTER MOTION PATH (BEZIER) */
    bs.gsap.registerPlugin(bs.MotionPathPlugin),
    bs.gsap.config({ nullTargetWarn: !1 }),
    /*!FallBack for old and new Eases*/
    (bs.eases = bs.gsap.parseEase()),
    bs.eases))
      bs.eases.hasOwnProperty(Ts) &&
        void 0 === bs[Ts] &&
        (bs[Ts] = bs.eases[Ts]);
    /*! FallBack for Essential Grid */
    void 0 !== os &&
      void 0 !== os.TweenLite &&
      void 0 === os.TweenLite.lagSmoothing &&
      (os.TweenLite.lagSmoothing = function () {});
    var As = [];
    function Ms(t, e, n) {
      var r = document.createElement("canvas"),
        i = r.getContext("2d");
      if (((r.width = 100), (r.height = 200), 0 === t.length)) i.fillStyle = n;
      else {
        for (
          var u = i.createLinearGradient(0, 0, 100, 0), s = 0;
          s < t.length;
          s++
        )
          u.addColorStop(t[s].stop / 100, t[s].color);
        i.fillStyle = u;
      }
      i.fillRect(0, 0, 100, 200);
      var o = i.getImageData(0, 0, 100, 2).data,
        a = "";
      for (s = 0; s < e.length; s++) {
        var l = Math.ceil(e[s]),
          h = 4 * (0 !== l ? l - 1 : l);
        (a +=
          "rgba(" +
          o[h] +
          "," +
          o[h + 1] +
          "," +
          o[h + 2] +
          "," +
          o[h + 3] / 255 +
          ")"),
          (a += " " + l + (e.length - 1 === s ? "%" : "%,"));
      }
      return r.remove(), a;
    }
    function Os(t, e, n, r) {
      for (
        var i = "",
          u = bs.gsap.utils.mapRange(0, r.length - 1, 0, t.length - 1),
          s = 0;
        s < r.length;
        s++
      ) {
        var o = Math.round(u(s));
        (i += t[o].color),
          (i += " " + t[o].stop + (r.length - 1 === s ? "%" : "%,"));
      }
      return i;
    }
    function Ss(t) {
      var e = /rgb([\s\S]*?)%/g,
        n = [],
        r = [],
        i = [];
      do {
        (s = e.exec(t)) && n.push(s[0]);
      } while (s);
      for (var u = 0; u < n.length; u++) {
        var s = n[u],
          o = ((t = /rgb([\s\S]*?)\)/.exec(s)), /\)([\s\S]*?)%/.exec(s));
        t[0] && (t = t[0]),
          o[1] && (o = o[1]),
          i.push(parseFloat(o)),
          r.push({ color: t, stop: parseFloat(o) });
      }
      return (
        0 === r.length &&
          (r.push({ color: t, stop: 0 }),
          i.push(0),
          r.push({ color: t, stop: 100 }),
          i.push(100)),
        { points: r, stops: i }
      );
    }
    bs.getSSGColors = function (t, e, n) {
      if (
        ((n = void 0 === n ? "fading" : n),
        -1 === t.indexOf("gradient") && -1 === e.indexOf("gradient"))
      )
        return { from: t, to: e };
      for (var r = { from: t, to: e }, i = 0; i < As.length; i++) {
        if (As[i].from === t && As[i].to === e && As[i].type === n)
          return { from: As[i].rFrom, to: As[i].rTo };
        if (As[i].from === e && As[i].to === t && As[i].type === n)
          return { from: As[i].rTo, to: As[i].rFrom };
      }
      var u = Ss(t),
        s = Ss(e);
      if (
        u.stops.length === s.stops.length &&
        -1 !== t.indexOf("gradient") &&
        -1 !== e.indexOf("gradient")
      )
        return { from: t, to: e };
      var o,
        a,
        l = u.stops;
      for (i = 0; i < s.stops.length; i++)
        -1 === l.indexOf(s.stops[i]) && l.push(s.stops[i]);
      if (
        (l.sort(function (t, e) {
          return t - e;
        }),
        -1 !== t.indexOf("gradient("))
      ) {
        var h =
          -1 !== t.indexOf("deg,")
            ? t.indexOf("deg,") + 4
            : -1 !== t.indexOf("at center,")
            ? t.indexOf("at center,") + 10
            : t.indexOf("gradient(") + 9;
        (o = t.substring(0, h)),
          -1 === e.indexOf("gradient(") && (a = t.substring(0, h));
      }
      if (-1 !== e.indexOf("gradient(")) {
        h =
          -1 !== e.indexOf("deg,")
            ? e.indexOf("deg,") + 4
            : -1 !== e.indexOf("at center,")
            ? e.indexOf("at center,") + 10
            : e.indexOf("gradient(") + 9;
        (a = e.substring(0, h)),
          -1 === t.indexOf("gradient(") && (o = e.substring(0, h));
      }
      return (
        "fading" === n
          ? (u.stops.length,
            s.stops.length,
            (o += Ms(u.points, l, t)),
            (a += Ms(s.points, l, e)))
          : "sliding" === n &&
            (u.stops.length > s.stops.length
              ? (a += Os(s.points, l, e, u.points))
              : (o += Os(u.points, l, t, s.points))),
        (o += ")"),
        (a += ")"),
        "sliding" === n &&
          (u.stops.length > s.stops.length ? (o = t) : (a = e)),
        (r.rFrom = o),
        (r.rTo = a),
        (r.tyep = n),
        As.push(r),
        { from: o, to: a }
      );
    };
  },
]);

window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.tpGS = { loaded: true, version: "6.4.11" };
if (window.RS_MODULES.checkMinimal) window.RS_MODULES.checkMinimal();
