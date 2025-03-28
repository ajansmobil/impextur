var runtime = (function (t) {
  "use strict";
  var r,
    e = Object.prototype,
    n = e.hasOwnProperty,
    o =
      (m = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator",
    i = m.asyncIterator || "@@asyncIterator",
    a = m.toStringTag || "@@toStringTag";
  function c(t, r, e) {
    return (
      Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[r]
    );
  }
  try {
    c({}, "");
  } catch (e) {
    c = function (t, r, e) {
      return (t[r] = e);
    };
  }
  function u(t, e, n, o) {
    var i, a, c, u;
    (e = e && e.prototype instanceof g ? e : g),
      (e = Object.create(e.prototype)),
      (o = new j(o || []));
    return (
      (e._invoke =
        ((i = t),
        (a = n),
        (c = o),
        (u = l),
        function (t, e) {
          if (u === s) throw new Error("Generator is already running");
          if (u === p) {
            if ("throw" === t) throw e;
            return k();
          }
          for (c.method = t, c.arg = e; ; ) {
            var n = c.delegate;
            if (
              n &&
              ((n = (function t(e, n) {
                var o = e.iterator[n.method];
                if (o === r) {
                  if (((n.delegate = null), "throw" === n.method)) {
                    if (
                      e.iterator.return &&
                      ((n.method = "return"),
                      (n.arg = r),
                      t(e, n),
                      "throw" === n.method)
                    )
                      return y;
                    (n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a 'throw' method",
                      ));
                  }
                  return y;
                }
                return "throw" === (o = h(o, e.iterator, n.arg)).type
                  ? ((n.method = "throw"),
                    (n.arg = o.arg),
                    (n.delegate = null),
                    y)
                  : (o = o.arg)
                  ? o.done
                    ? ((n[e.resultName] = o.value),
                      (n.next = e.nextLoc),
                      "return" !== n.method &&
                        ((n.method = "next"), (n.arg = r)),
                      (n.delegate = null),
                      y)
                    : o
                  : ((n.method = "throw"),
                    (n.arg = new TypeError("iterator result is not an object")),
                    (n.delegate = null),
                    y);
              })(n, c)),
              n)
            ) {
              if (n === y) continue;
              return n;
            }
            if ("next" === c.method) c.sent = c._sent = c.arg;
            else if ("throw" === c.method) {
              if (u === l) throw ((u = p), c.arg);
              c.dispatchException(c.arg);
            } else "return" === c.method && c.abrupt("return", c.arg);
            if (((u = s), "normal" === (n = h(i, a, c)).type)) {
              if (((u = c.done ? p : f), n.arg !== y))
                return { value: n.arg, done: c.done };
            } else
              "throw" === n.type &&
                ((u = p), (c.method = "throw"), (c.arg = n.arg));
          }
        })),
      e
    );
  }
  function h(t, r, e) {
    try {
      return { type: "normal", arg: t.call(r, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  t.wrap = u;
  var l = "suspendedStart",
    f = "suspendedYield",
    s = "executing",
    p = "completed",
    y = {};
  function g() {}
  function d() {}
  function v() {}
  var m,
    w,
    L =
      ((w =
        (w =
          (c((m = {}), o, function () {
            return this;
          }),
          Object.getPrototypeOf)) && w(w(O([])))) &&
        w !== e &&
        n.call(w, o) &&
        (m = w),
      (v.prototype = g.prototype = Object.create(m)));
  function x(t) {
    ["next", "throw", "return"].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function b(t, r) {
    var e;
    this._invoke = function (o, i) {
      function a() {
        return new r(function (e, a) {
          !(function e(o, i, a, c) {
            var u;
            if ("throw" !== (o = h(t[o], t, i)).type)
              return (i = (u = o.arg).value) &&
                "object" == typeof i &&
                n.call(i, "__await")
                ? r.resolve(i.__await).then(
                    function (t) {
                      e("next", t, a, c);
                    },
                    function (t) {
                      e("throw", t, a, c);
                    },
                  )
                : r.resolve(i).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return e("throw", t, a, c);
                    },
                  );
            c(o.arg);
          })(o, i, e, a);
        });
      }
      return (e = e ? e.then(a, a) : a());
    };
  }
  function E(t) {
    var r = { tryLoc: t[0] };
    1 in t && (r.catchLoc = t[1]),
      2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
      this.tryEntries.push(r);
  }
  function _(t) {
    var r = t.completion || {};
    (r.type = "normal"), delete r.arg, (t.completion = r);
  }
  function j(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(E, this),
      this.reset(!0);
  }
  function O(t) {
    if (t) {
      var e,
        i = t[o];
      if (i) return i.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length))
        return (
          (e = -1),
          ((i = function o() {
            for (; ++e < t.length; )
              if (n.call(t, e)) return (o.value = t[e]), (o.done = !1), o;
            return (o.value = r), (o.done = !0), o;
          }).next = i)
        );
    }
    return { next: k };
  }
  function k() {
    return { value: r, done: !0 };
  }
  return (
    c(L, "constructor", (d.prototype = v)),
    c(v, "constructor", d),
    (d.displayName = c(v, a, "GeneratorFunction")),
    (t.isGeneratorFunction = function (t) {
      return (
        !!(t = "function" == typeof t && t.constructor) &&
        (t === d || "GeneratorFunction" === (t.displayName || t.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, v)
          : ((t.__proto__ = v), c(t, a, "GeneratorFunction")),
        (t.prototype = Object.create(L)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    x(b.prototype),
    c(b.prototype, i, function () {
      return this;
    }),
    (t.AsyncIterator = b),
    (t.async = function (r, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new b(u(r, e, n, o), i);
      return t.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    x(L),
    c(L, a, "Generator"),
    c(L, o, function () {
      return this;
    }),
    c(L, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (t) {
      var r,
        e = [];
      for (r in t) e.push(r);
      return (
        e.reverse(),
        function r() {
          for (; e.length; ) {
            var n = e.pop();
            if (n in t) return (r.value = n), (r.done = !1), r;
          }
          return (r.done = !0), r;
        }
      );
    }),
    (t.values = O),
    (j.prototype = {
      constructor: j,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = r),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = r),
          this.tryEntries.forEach(_),
          !t)
        )
          for (var e in this)
            "t" === e.charAt(0) &&
              n.call(this, e) &&
              !isNaN(+e.slice(1)) &&
              (this[e] = r);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var e = this;
        function o(n, o) {
          return (
            (c.type = "throw"),
            (c.arg = t),
            (e.next = n),
            o && ((e.method = "next"), (e.arg = r)),
            !!o
          );
        }
        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var u = n.call(a, "catchLoc"),
              h = n.call(a, "finallyLoc");
            if (u && h) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!h) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var o = this.tryEntries[e];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        var a = (i =
          i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= r &&
          r <= i.finallyLoc
            ? null
            : i)
          ? i.completion
          : {};
        return (
          (a.type = t),
          (a.arg = r),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function (t, r) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && r && (this.next = r),
          y
        );
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e = this.tryEntries[r];
          if (e.finallyLoc === t)
            return this.complete(e.completion, e.afterLoc), _(e), y;
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e,
            n,
            o = this.tryEntries[r];
          if (o.tryLoc === t)
            return (
              "throw" === (e = o.completion).type && ((n = e.arg), _(o)), n
            );
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, e, n) {
        return (
          (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
          "next" === this.method && (this.arg = r),
          y
        );
      },
    }),
    t
  );
})("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  "object" == typeof globalThis
    ? (globalThis.regeneratorRuntime = runtime)
    : Function("r", "regeneratorRuntime = r")(runtime);
}
