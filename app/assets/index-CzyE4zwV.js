var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)), t.exports),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, { get: ((e) => i[e]).bind(null, d), enumerable: !(s = n(i, d)) || s.enumerable }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, { value: n, enumerable: !0 }) : o, n)
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function ee(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || g));
    }
    var te = (ee.prototype = new b());
    ((te.constructor = ee), _(te, y.prototype), (te.isPureReactComponent = !0));
    var x = Array.isArray;
    function ne() {}
    var S = { H: null, A: null, T: null, S: null },
      re = Object.prototype.hasOwnProperty;
    function C(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function ie(e, t) {
      return C(e.type, t, e.props);
    }
    function ae(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function oe(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var w = /\/+/g;
    function se(e, t) {
      return typeof e == `object` && e && e.key != null ? oe(`` + e.key) : t.toString(36);
    }
    function ce(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(ne, ne)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` && ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` && ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function le(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), le(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + se(e, 0) : a),
          x(o)
            ? ((i = ``),
              c != null && (i = c.replace(w, `$&/`) + `/`),
              le(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ae(o) &&
                (o = ie(
                  o,
                  i + (o.key == null || (e && e.key === o.key) ? `` : (`` + o.key).replace(w, `$&/`) + `/`) + c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (x(e)) for (var u = 0; u < e.length; u++) ((a = e[u]), (s = l + se(a, u)), (c += le(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + se(a, u++)), (c += le(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return le(ce(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function ue(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        le(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function de(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = t), n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = t), n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var fe =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == `object` && typeof process.emit == `function`) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function pe(e) {
      var t = S.T,
        n = {};
      ((n.types = t === null ? null : t.types), (S.T = n));
      try {
        var r = e(),
          i = S.S;
        (i !== null && i(n, r), typeof r == `object` && r && typeof r.then == `function` && r.then(ne, fe));
      } catch (e) {
        fe(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (S.T = t));
      }
    }
    function me(e) {
      var t = S.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else pe(me.bind(null, e));
    }
    var he = {
      map: ue,
      forEach: function (e, t, n) {
        ue(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ue(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ue(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ae(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = he),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = ee),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = me),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null) throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !re.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return C(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = { $$typeof: s, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            re.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps) for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return C(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ae),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: de };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = pe),
      (e.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return S.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return S.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return S.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return S.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return S.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (e.useState = function (e) {
        return S.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return S.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return S.H.useTransition();
      }),
      (e.version = `19.3.1`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n)) l < a && 0 > i(u, c) ? ((e[r] = u), (e[l] = n), (r = l)) : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (((e.unstable_now = void 0), typeof performance == `object` && typeof performance.now == `function`)) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function ee(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), te || ((te = !0), ie()));
        else {
          var t = n(l);
          t !== null && w(ee, t.startTime - e);
        }
      }
    }
    var te = !1,
      x = -1,
      ne = 5,
      S = -1;
    function re() {
      return g ? !0 : !(e.unstable_now() - S < ne);
    }
    function C() {
      if (((g = !1), te)) {
        var t = e.unstable_now();
        S = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(x), (x = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && re());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && w(ee, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ie() : (te = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(C);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = C),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(C, 0);
      };
    function w(t, n) {
      x = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ne = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o)) : (a = o), r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = { id: u++, callback: i, priorityLevel: r, startTime: a, expirationTime: s, sortIndex: -1 }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(x), (x = -1)) : (h = !0), w(ee, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), te || ((te = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = re),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.browser = function (e) {
        return { $$typeof: o, _reason: e };
      }),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299));
        return c(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = l.T,
          n = i.p;
        try {
          if (((l.T = null), (i.p = 2), e)) return e();
        } finally {
          ((l.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin), (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = d(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
              })
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = d(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = d(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = d(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return l.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (e.version = `19.3.1`));
  }),
  m = o((e, t) => {
    function n() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`)
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate;) ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
      for (; t.return;) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    function h(e, t, n, r, i, a) {
      for (; e !== null;) {
        if (
          ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
          ((e.tag !== 22 || e.memoizedState === null) &&
            (t || (e.tag !== 5 && e.tag !== 27)) &&
            h(e.child, t, n, r, i, a))
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function g(e) {
      for (e = e.return; e !== null;) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function _(e) {
      var t = !1;
      for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);)
        e = e.return;
      return t;
    }
    function v(e) {
      var t = [null, null],
        n = g(e);
      return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
    }
    function y(e, t, n, r) {
      for (; n !== null;) {
        if (n === t) r.foundSelf = !0;
        else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return ((e[1] = n), !0);
          e[0] = n;
        } else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
        n = n.sibling;
      }
      return !1;
    }
    function b(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var ee = null,
      te = null;
    function x(e, t, n) {
      return e === n || (e === t && ((ee = e), !0));
    }
    function ne(e, t, n) {
      return e === n ? ((te = e), !1) : e === t && (te !== null && (ee = e), !0);
    }
    function S(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return;
      while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function re(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i;) ((e = n(e)), r--);
      for (; 0 < i - r;) ((t = n(t)), i--);
      for (; r--;) {
        if (e === t || (t !== null && e === t.alternate)) return e;
        ((e = n(e)), (t = n(t)));
      }
      return null;
    }
    var C = Object.assign,
      ie = Symbol.for(`react.element`),
      ae = Symbol.for(`react.transitional.element`),
      oe = Symbol.for(`react.portal`),
      w = Symbol.for(`react.fragment`),
      se = Symbol.for(`react.strict_mode`),
      ce = Symbol.for(`react.profiler`),
      le = Symbol.for(`react.consumer`),
      ue = Symbol.for(`react.context`),
      de = Symbol.for(`react.forward_ref`),
      fe = Symbol.for(`react.suspense`),
      pe = Symbol.for(`react.suspense_list`),
      me = Symbol.for(`react.memo`),
      he = Symbol.for(`react.lazy`),
      ge = Symbol.for(`react.activity`),
      _e = Symbol.for(`react.legacy_hidden`),
      ve = Symbol.for(`react.memo_cache_sentinel`),
      ye = Symbol.for(`react.view_transition`),
      be = Symbol.for(`react.recoverable`),
      xe = Symbol.iterator;
    function Se(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (xe && e[xe]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var Ce = Symbol.for(`react.client.reference`);
    function we(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === Ce ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case w:
          return `Fragment`;
        case ce:
          return `Profiler`;
        case se:
          return `StrictMode`;
        case fe:
          return `Suspense`;
        case pe:
          return `SuspenseList`;
        case ge:
          return `Activity`;
        case ye:
          return `ViewTransition`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case oe:
            return `Portal`;
          case ue:
            return e.displayName || `Context`;
          case le:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case de:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||= ((e = t.displayName || t.name || ``), e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case me:
            return ((t = e.displayName || null), t === null ? we(e.type) || `Memo` : t);
          case he:
            ((t = e._payload), (e = e._init));
            try {
              return we(e(t));
            } catch {}
        }
      return null;
    }
    var Te = Array.isArray,
      T = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      E = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Ee = { pending: !1, data: null, method: null, action: null },
      De = [],
      Oe = -1;
    function ke(e) {
      return { current: e };
    }
    function Ae(e) {
      0 > Oe || ((e.current = De[Oe]), (De[Oe] = null), Oe--);
    }
    function D(e, t) {
      (Oe++, (De[Oe] = e.current), (e.current = t));
    }
    var je = ke(null),
      Me = ke(null),
      Ne = ke(null),
      Pe = ke(null);
    function Fe(e, t) {
      switch ((D(Ne, t), D(Me, e), D(je, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = up(t)), (e = dp(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (Ae(je), D(je, e));
    }
    function Ie() {
      (Ae(je), Ae(Me), Ae(Ne));
    }
    function Le(e) {
      var t = e.memoizedState;
      (t !== null && ((sh._currentValue = t.memoizedState), D(Pe, e)), (t = je.current));
      var n = dp(t, e.type);
      t !== n && (D(Me, e), D(je, n));
    }
    function Re(e) {
      (Me.current === e && (Ae(je), Ae(Me)), Pe.current === e && (Ae(Pe), (sh._currentValue = Ee)));
    }
    var ze, Be;
    function Ve(e) {
      if (ze === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ze = (t && t[1]) || ``),
            (Be =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        ze +
        e +
        Be
      );
    }
    var He = !1;
    function Ue(e, t) {
      if (!e || He) return ``;
      He = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = !1;
                  try {
                    var i = Object.getOwnPropertyDescriptor(e.prototype, `props`);
                    (Object.defineProperty(e.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (n = !0),
                      new e());
                  } finally {
                    n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((He = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Ve(n) : ``;
    }
    function We(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ve(e.type);
        case 16:
          return Ve(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? Ve(`Suspense Fallback`) : Ve(`Suspense`);
        case 19:
          return Ve(`SuspenseList`);
        case 0:
        case 15:
          return Ue(e.type, !1);
        case 11:
          return Ue(e.type.render, !1);
        case 1:
          return Ue(e.type, !0);
        case 31:
          return Ve(`Activity`);
        case 30:
          return Ve(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Ge(e) {
      try {
        var t = ``,
          n = null;
        do ((t += We(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ke = Object.prototype.hasOwnProperty,
      qe = t.unstable_scheduleCallback,
      Je = t.unstable_cancelCallback,
      Ye = t.unstable_shouldYield,
      Xe = t.unstable_requestPaint,
      Ze = t.unstable_now,
      Qe = t.unstable_getCurrentPriorityLevel,
      $e = t.unstable_ImmediatePriority,
      et = t.unstable_UserBlockingPriority,
      tt = t.unstable_NormalPriority,
      nt = t.unstable_LowPriority,
      rt = t.unstable_IdlePriority,
      it = t.log,
      at = t.unstable_setDisableYieldValue,
      ot = null,
      st = null;
    function ct(e) {
      if ((typeof it == `function` && at(e), st && typeof st.setStrictMode == `function`))
        try {
          st.setStrictMode(ot, e);
        } catch {}
    }
    var lt = Math.clz32 ? Math.clz32 : ft,
      ut = Math.log,
      dt = Math.LN2;
    function ft(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((ut(e) / dt) | 0)) | 0);
    }
    var pt = 256,
      mt = 262144,
      ht = 4194304;
    function gt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function _t(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0 ? (o === 0 ? n || ((n = r & ~e), n !== 0 && (i = gt(n))) : (i = gt(o))) : (i = gt(s)))
          : ((r = s & ~a),
            r === 0 ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = gt(n))) : (i = gt(o))) : (i = gt(r))),
        i === 0
          ? 0
          : t !== 0 && t !== i && (t & a) === 0 && ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function vt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function yt(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) {
          var r = 31 - lt(n),
            i = 1 << r;
          ((t |= e[r]), (n &= ~i));
        }
      return t;
    }
    function bt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function xt() {
      var e = ht;
      return ((ht <<= 1), !(ht & 62914560) && (ht = 4194304), e);
    }
    function St(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ct(e, t) {
      ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function wt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - lt(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && O(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function O(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - lt(t);
      ((e.entangledLanes |= t), (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Tt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - lt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function Et(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : Dt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function Dt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function k(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function Ot() {
      var e = E.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Ch(e.type)) : e;
    }
    function kt(e, t) {
      var n = E.p;
      try {
        return ((E.p = e), t());
      } finally {
        E.p = n;
      }
    }
    var At = Math.random().toString(36).slice(2),
      jt = `__reactFiber$` + At,
      Mt = `__reactProps$` + At,
      Nt = `__reactContainer$` + At,
      Pt = `__reactEvents$` + At,
      Ft = `__reactListeners$` + At,
      It = `__reactHandles$` + At,
      Lt = `__reactResources$` + At,
      Rt = `__reactMarker$` + At,
      zt = `__reactLoad$` + At;
    function Bt(e) {
      (delete e[jt], delete e[Mt], delete e[Ft], delete e[It]);
    }
    function Vt(e) {
      var t;
      if ((t = e[jt])) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[Nt] || n[jt])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = fm(e); e !== null;) {
              if ((n = e[jt])) return n;
              e = fm(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function A(e) {
      if ((e = e[jt] || e[Nt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Ht(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Ut(e) {
      var t = e[Lt];
      return ((t ||= e[Lt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function Wt(e) {
      e[Rt] = !0;
    }
    function Gt(e) {
      e[zt] = void 0;
    }
    var Kt = new Set(),
      qt = {};
    function Jt(e, t) {
      (Yt(e, t), Yt(e + `Capture`, t));
    }
    function Yt(e, t) {
      for (qt[e] = t, e = 0; e < t.length; e++) Kt.add(t[e]);
    }
    var Xt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Zt = {},
      Qt = {};
    function $t(e) {
      return Ke.call(Qt, e) ? !0 : Ke.call(Zt, e) ? !1 : Xt.test(e) ? (Qt[e] = !0) : ((Zt[e] = !0), !1);
    }
    var j = !1;
    function en() {
      var e = j;
      return ((j = !1), e);
    }
    function tn(e, t, n) {
      if ($t(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
      }
    }
    function nn(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function rn(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function an(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function on(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function sn(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function cn(e) {
      if (!e._valueTracker) {
        var t = on(e) ? `checked` : `value`;
        e._valueTracker = sn(e, t, `` + e[t]);
      }
    }
    function ln(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (e && (r = on(e) ? (e.checked ? `true` : `false`) : e.value), (e = r), e !== n && (t.setValue(e), !0));
    }
    var un = /[\n"\\]/g;
    function dn(e) {
      return e.replace(un, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function fn(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + an(t))
            : e.value !== `` + an(t) && (e.value = `` + an(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : mn(e, an(n))
          : o === `number` && e.value == t
            ? mn(e, an(e.value))
            : mn(e, an(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + an(s))
          : e.removeAttribute(`name`));
    }
    function pn(e, t, n, r, i, a, o, s) {
      if (
        (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          cn(e);
          return;
        }
        ((n = n == null ? `` : `` + an(n)),
          (t = t == null ? n : `` + an(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
        cn(e));
    }
    function mn(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function hn(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + an(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function gn(e, t, n) {
      t != null && ((t = `` + an(t)), t !== e.value && (e.value = t), n == null)
        ? e.defaultValue !== t && (e.defaultValue = t)
        : (e.defaultValue = n == null ? `` : `` + an(n));
    }
    function _n(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (Te(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = an(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        cn(e));
    }
    function vn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var yn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function bn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || yn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function xn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? (e.cssFloat = ``) : (e[r] = ``), (j = !0));
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && (bn(e, a, r), (j = !0)));
      } else for (var o in t) t.hasOwnProperty(o) && bn(e, o, t[o]);
    }
    function Sn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Cn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`maskType`, `mask-type`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      wn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Tn(e) {
      return wn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function En() {}
    var Dn = null;
    function On(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var kn = null,
      An = null;
    function jn(e) {
      var t = A(e);
      if (t && (e = t.stateNode)) {
        var n = e[Mt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (fn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll(`input[name="` + dn(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[Mt] || null;
                  if (!a) throw Error(i(90));
                  fn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && ln(r));
            }
            break a;
          case `textarea`:
            gn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
        }
      }
    }
    var Mn = !1;
    function Nn(e, t, n) {
      if (Mn) return e(t, n);
      Mn = !0;
      try {
        return e(t);
      } finally {
        if (((Mn = !1), (kn !== null || An !== null) && (zd(), kn && ((t = kn), (e = An), (An = kn = null), jn(t), e))))
          for (t = 0; t < e.length; t++) jn(e[t]);
      }
    }
    function Pn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[Mt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type), (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Fn = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0,
      In = !1;
    if (Fn)
      try {
        var Ln = {};
        (Object.defineProperty(Ln, "passive", {
          get: function () {
            In = !0;
          },
        }),
          window.addEventListener(`test`, Ln, Ln),
          window.removeEventListener(`test`, Ln, Ln));
      } catch {
        In = !1;
      }
    var Rn = null,
      zn = null,
      Bn = null;
    function Vn() {
      if (Bn) return Bn;
      var e,
        t = zn,
        n = t.length,
        r,
        i = `value` in Rn ? Rn.value : Rn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Bn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Hn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Un() {
      return !0;
    }
    function Wn() {
      return !1;
    }
    function Gn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented)
            ? Un
            : Wn),
          (this.isPropagationStopped = Wn),
          this
        );
      }
      return (
        C(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Un));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Un));
          },
          persist: function () {},
          isPersistent: Un,
        }),
        t
      );
    }
    var Kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      qn = Gn(Kn),
      Jn = C({}, Kn, { view: 0, detail: 0 }),
      Yn = Gn(Jn),
      Xn,
      Zn,
      Qn,
      $n = C({}, Jn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ur,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Qn &&
                (Qn && e.type === `mousemove`
                  ? ((Xn = e.screenX - Qn.screenX), (Zn = e.screenY - Qn.screenY))
                  : (Zn = Xn = 0),
                (Qn = e)),
              Xn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Zn;
        },
      }),
      er = Gn($n),
      tr = Gn(C({}, $n, { dataTransfer: 0 })),
      nr = Gn(C({}, Jn, { relatedTarget: 0 })),
      rr = Gn(C({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      ir = Gn(
        C({}, Kn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      ar = Gn(C({}, Kn, { data: 0 })),
      or = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      sr = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      cr = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function lr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = cr[e]) ? !!t[e] : !1;
    }
    function ur() {
      return lr;
    }
    var dr = Gn(
        C({}, Jn, {
          key: function (e) {
            if (e.key) {
              var t = or[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Hn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? sr[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: ur,
          charCode: function (e) {
            return e.type === `keypress` ? Hn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress` ? Hn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
        }),
      ),
      fr = Gn(
        C({}, $n, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      pr = Gn(C({}, Kn, { submitter: 0 })),
      mr = Gn(
        C({}, Jn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: ur,
        }),
      ),
      hr = Gn(C({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      gr = Gn(
        C({}, $n, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      _r = Gn(C({}, Kn, { newState: 0, oldState: 0, source: 0 })),
      vr = [9, 13, 27, 32],
      yr = Fn && `CompositionEvent` in window,
      br = null;
    Fn && `documentMode` in document && (br = document.documentMode);
    var xr = Fn && `TextEvent` in window && !br,
      Sr = Fn && (!yr || (br && 8 < br && 11 >= br)),
      Cr = ` `,
      wr = !1;
    function Tr(e, t) {
      switch (e) {
        case `keyup`:
          return vr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Er(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var Dr = !1;
    function Or(e, t) {
      switch (e) {
        case `compositionend`:
          return Er(t);
        case `keypress`:
          return t.which === 32 ? ((wr = !0), Cr) : null;
        case `textInput`:
          return ((e = t.data), e === Cr && wr ? null : e);
        default:
          return null;
      }
    }
    function kr(e, t) {
      if (Dr)
        return e === `compositionend` || (!yr && Tr(e, t)) ? ((e = Vn()), (Bn = zn = Rn = null), (Dr = !1), e) : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Sr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Ar = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function jr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Ar[e.type] : t === `textarea`;
    }
    function Mr(e, t, n, r) {
      (kn ? (An ? An.push(r) : (An = [r])) : (kn = r),
        (t = Jf(t, `onChange`)),
        0 < t.length && ((n = new qn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var Nr = null,
      Pr = null;
    function Fr(e) {
      Vf(e, 0);
    }
    function Ir(e) {
      if (ln(Ht(e))) return e;
    }
    function Lr(e, t) {
      if (e === `change`) return t;
    }
    var Rr = !1;
    if (Fn) {
      var zr;
      if (Fn) {
        var Br = `oninput` in document;
        if (!Br) {
          var Vr = document.createElement(`div`);
          (Vr.setAttribute(`oninput`, `return;`), (Br = typeof Vr.oninput == `function`));
        }
        zr = Br;
      } else zr = !1;
      Rr = zr && (!document.documentMode || 9 < document.documentMode);
    }
    function Hr() {
      Nr && (Nr.detachEvent(`onpropertychange`, Ur), (Pr = Nr = null));
    }
    function Ur(e) {
      if (e.propertyName === `value` && Ir(Pr)) {
        var t = [];
        (Mr(t, Pr, e, On(e)), Nn(Fr, t));
      }
    }
    function Wr(e, t, n) {
      e === `focusin` ? (Hr(), (Nr = t), (Pr = n), Nr.attachEvent(`onpropertychange`, Ur)) : e === `focusout` && Hr();
    }
    function Gr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return Ir(Pr);
    }
    function Kr(e, t) {
      if (e === `click`) return Ir(t);
    }
    function qr(e, t) {
      if (e === `input` || e === `change`) return Ir(t);
    }
    function Jr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Yr = typeof Object.is == `function` ? Object.is : Jr;
    function Xr(e, t) {
      if (Yr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ke.call(t, i) || !Yr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Zr(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Qr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function $r(e, t) {
      var n = Qr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Qr(n);
      }
    }
    function ei(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? ei(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function ti(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Zr(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Zr(e.document);
      }
      return t;
    }
    function ni(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var ri = Fn && `documentMode` in document && 11 >= document.documentMode,
      ii = null,
      ai = null,
      oi = null,
      si = !1;
    function ci(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      si ||
        ii == null ||
        ii !== Zr(r) ||
        ((r = ii),
        `selectionStart` in r && ni(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (oi && Xr(oi, r)) ||
          ((oi = r),
          (r = Jf(ai, `onSelect`)),
          0 < r.length &&
            ((t = new qn(`onSelect`, `select`, null, t, n)), e.push({ event: t, listeners: r }), (t.target = ii))));
    }
    function li(e, t) {
      var n = {};
      return ((n[e.toLowerCase()] = t.toLowerCase()), (n[`Webkit` + e] = `webkit` + t), (n[`Moz` + e] = `moz` + t), n);
    }
    var ui = {
        animationend: li(`Animation`, `AnimationEnd`),
        animationiteration: li(`Animation`, `AnimationIteration`),
        animationstart: li(`Animation`, `AnimationStart`),
        transitionrun: li(`Transition`, `TransitionRun`),
        transitionstart: li(`Transition`, `TransitionStart`),
        transitioncancel: li(`Transition`, `TransitionCancel`),
        transitionend: li(`Transition`, `TransitionEnd`),
      },
      di = {},
      fi = {};
    Fn &&
      ((fi = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete ui.animationend.animation, delete ui.animationiteration.animation, delete ui.animationstart.animation),
      `TransitionEvent` in window || delete ui.transitionend.transition);
    function pi(e) {
      if (di[e]) return di[e];
      if (!ui[e]) return e;
      var t = ui[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in fi) return (di[e] = t[n]);
      return e;
    }
    var mi = pi(`animationend`),
      hi = pi(`animationiteration`),
      gi = pi(`animationstart`),
      _i = pi(`transitionrun`),
      vi = pi(`transitionstart`),
      yi = pi(`transitioncancel`),
      bi = pi(`transitionend`),
      xi = new Map(),
      Si =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Si.push(`scrollEnd`);
    function Ci(e, t) {
      (xi.set(e, t), Jt(t, [e]));
    }
    var wi = 0;
    function Ti(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = bd.identifierPrefix;
      var n = wi++;
      return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
    }
    function Ei(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = Od;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = e[n[r]];
          if (i != null) {
            if (i === `none`) return `none`;
            t = t == null ? i : t + (` ` + i);
          }
        }
      return t ?? e.default;
    }
    function Di(e, t) {
      return ((e = Ei(e)), (t = Ei(t)), t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t);
    }
    var Oi =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ki = [],
      Ai = 0,
      ji = 0;
    function Mi() {
      for (var e = Ai, t = (ji = Ai = 0); t < e;) {
        var n = ki[t];
        ki[t++] = null;
        var r = ki[t];
        ki[t++] = null;
        var i = ki[t];
        ki[t++] = null;
        var a = ki[t];
        if (((ki[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && Ii(n, i, a);
      }
    }
    function Ni(e, t, n, r) {
      ((ki[Ai++] = e),
        (ki[Ai++] = t),
        (ki[Ai++] = n),
        (ki[Ai++] = r),
        (ji |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function Pi(e, t, n, r) {
      return (Ni(e, t, n, r), Li(e));
    }
    function Fi(e, t) {
      return (Ni(e, null, null, t), Li(e));
    }
    function Ii(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - lt(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function Li(e) {
      if (50 < kd) throw ((kd = 0), (Ad = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var Ri = {};
    function zi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Bi(e, t, n, r) {
      return new zi(e, t, n, r);
    }
    function Vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Bi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 1206910976),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Ui(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Wi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof r == `function`)) Vi(r) && (s = 1);
      else if (typeof r == `string`)
        s = qm(e, n, je.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (r) {
          case ge:
            return ((e = Bi(31, n, t, a)), (e.elementType = ge), (e.lanes = o), e);
          case w:
            return Gi(n.children, a, o, t);
          case se:
            ((s = 8), (a |= 24));
            break;
          case ce:
            return ((e = Bi(12, n, t, a | 2)), (e.elementType = ce), (e.lanes = o), e);
          case fe:
            return ((e = Bi(13, n, t, a)), (e.elementType = fe), (e.lanes = o), e);
          case pe:
            return ((e = Bi(19, n, t, a)), (e.elementType = pe), (e.lanes = o), e);
          case _e:
          case ye:
            return (
              (e = a | 32),
              (e = Bi(30, n, t, e)),
              (e.elementType = ye),
              (e.lanes = o),
              (e.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
              e
            );
          default:
            if (typeof r == `object` && r)
              switch (r.$$typeof) {
                case ue:
                  s = 10;
                  break a;
                case le:
                  s = 9;
                  break a;
                case de:
                  s = 11;
                  break a;
                case me:
                  s = 14;
                  break a;
                case he:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = Bi(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function Gi(e, t, n, r) {
      return ((e = Bi(7, e, r, t)), (e.lanes = n), e);
    }
    function Ki(e, t, n) {
      return ((e = Bi(6, e, null, t)), (e.lanes = n), e);
    }
    function qi(e) {
      var t = Bi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ji(e, t, n) {
      return (
        (t = Bi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      );
    }
    var Yi = new WeakMap();
    function Xi(e, t) {
      if (typeof e == `object` && e) {
        var n = Yi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: Ge(t) }), Yi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: Ge(t) };
    }
    var Zi = [],
      Qi = 0,
      $i = null,
      ea = 0,
      ta = [],
      na = 0,
      ra = null,
      ia = 1,
      aa = ``;
    function oa(e, t) {
      ((Zi[Qi++] = ea), (Zi[Qi++] = $i), ($i = e), (ea = t));
    }
    function sa(e, t, n) {
      ((ta[na++] = ia), (ta[na++] = aa), (ta[na++] = ra), (ra = e));
      var r = ia;
      e = aa;
      var i = 32 - lt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - lt(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ia = (1 << (32 - lt(t) + i)) | (n << i) | r),
          (aa = a + e));
      } else ((ia = (1 << a) | (n << i) | r), (aa = e));
    }
    function ca(e) {
      e.return !== null && (oa(e, 1), sa(e, 1, 0));
    }
    function la(e) {
      for (; e === $i;) (($i = Zi[--Qi]), (Zi[Qi] = null), (ea = Zi[--Qi]), (Zi[Qi] = null));
      for (; e === ra;)
        ((ra = ta[--na]), (ta[na] = null), (aa = ta[--na]), (ta[na] = null), (ia = ta[--na]), (ta[na] = null));
    }
    function ua(e, t) {
      ((ta[na++] = ia), (ta[na++] = aa), (ta[na++] = ra), (ia = t.id), (aa = t.overflow), (ra = e));
    }
    var da = null,
      M = null,
      N = !1,
      fa = null,
      pa = !1,
      ma = Error(i(519));
    function ha(e) {
      throw (
        xa(Xi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)),
        ma
      );
    }
    function ga(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[jt] = e), (t[Mt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < zf.length; n++) Q(zf[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t), pn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), _n(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        ep(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = En),
            (t = !0))
          : (t = !1),
        t || ha(e, !0));
    }
    function _a(e) {
      for (da = e.return; da;)
        switch (da.tag) {
          case 5:
          case 31:
          case 13:
            pa = !1;
            return;
          case 27:
          case 3:
            pa = !0;
            return;
          default:
            da = da.return;
        }
    }
    function va(e) {
      if (e !== da) return !1;
      if (!N) return (_a(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) && ((n = e.type), (n = n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
          (n = !n)),
        n && M && ha(e),
        _a(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        M = dm(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        M = dm(e);
      } else
        t === 27
          ? ((t = M), Sp(e.type) ? ((e = um), (um = null), (M = e)) : (M = t))
          : (M = da ? lm(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ya() {
      ((M = da = null), (N = !1));
    }
    function ba() {
      var e = fa;
      return (e !== null && (pd === null ? (pd = e) : pd.push.apply(pd, e), (fa = null)), e);
    }
    function xa(e) {
      fa === null ? (fa = [e]) : fa.push(e);
    }
    var Sa = ke(null),
      Ca = null,
      wa = null;
    function Ta(e, t, n) {
      (D(Sa, t._currentValue), (t._currentValue = n));
    }
    function Ea(e) {
      ((e._currentValue = Sa.current), Ae(Sa));
    }
    function Da(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Oa(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n), (c = o.alternate), c !== null && (c.lanes |= n), Da(o.return, n, e), r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n), (o = s.alternate), o !== null && (o.lanes |= n), Da(s, n, e), (s = null));
        } else
          a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null
            ? ((a.lanes |= n),
              (s = a.alternate),
              s !== null && (s.lanes |= n),
              Da(a.return, n, e),
              (s = a.child),
              (s = s === null ? null : s.sibling))
            : (s = a.child);
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ka(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Yr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === Pe.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? (e = [sh]) : e.push(sh));
        }
        a = a.return;
      }
      return (e !== null && Oa(t, e, n, r), (t.flags |= 262144), e !== null);
    }
    function Aa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Yr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ja(e) {
      ((Ca = e), (wa = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function Ma(e) {
      return Pa(Ca, e);
    }
    function Na(e, t) {
      return (Ca === null && ja(e), Pa(e, t));
    }
    function Pa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), wa === null)) {
        if (e === null) throw Error(i(308));
        ((wa = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else wa = wa.next = t;
      return n;
    }
    var Fa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Ia = t.unstable_scheduleCallback,
      La = t.unstable_NormalPriority,
      P = { $$typeof: ue, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Ra() {
      return { controller: new Fa(), data: new Map(), refCount: 0 };
    }
    function za(e) {
      (e.refCount--,
        e.refCount === 0 &&
          Ia(La, function () {
            e.controller.abort();
          }));
    }
    function Ba(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var Va = null;
    function Ha(e) {
      var t = e.transitionTypes;
      return ((e.transitionTypes = null), t);
    }
    var Ua = null,
      Wa = 0,
      Ga = 0,
      Ka = null;
    function qa(e, t) {
      if (Ua === null) {
        var n = (Ua = []);
        ((Wa = 0),
          (Ga = Pf()),
          (Ka = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (Wa++, t.then(Ja, Ja), t);
    }
    function Ja() {
      if (--Wa === 0 && ((Va = null), Ua !== null)) {
        Ka !== null && (Ka.status = `fulfilled`);
        var e = Ua;
        ((Ua = null), (Ga = 0), (Ka = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ya(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Xa = T.S;
    T.S = function (e, t) {
      if (((gd = Ze()), typeof t == `object` && t && typeof t.then == `function` && qa(e, t), Va !== null))
        for (var n = bf; n !== null;) (Ba(n, Va), (n = n.next));
      if (((n = e.types), n !== null)) {
        for (var r = bf; r !== null;) (Ba(r, n), (r = r.next));
        if (Ga !== 0) {
          ((r = Va), r === null && (r = Va = []));
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Xa !== null && Xa(e, t);
    };
    var Za = ke(null);
    function Qa() {
      var e = Za.current;
      return e === null ? G.pooledCache : e;
    }
    function $a(e, t) {
      t === null ? D(Za, Za.current) : D(Za, t.pool);
    }
    function eo() {
      var e = Qa();
      return e === null ? null : { parent: P._currentValue, pool: e };
    }
    var to = Error(i(460)),
      no = Error(i(474)),
      ro = Error(i(542)),
      io = { then: function () {} };
    function ao(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function oo(e, t, n) {
      switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(En, En), (t = n)), t.status)) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), uo(e), e === void 0 && !(`reason` in t) ? Error(i(600)) : e);
        default:
          if (typeof t.status == `string`) t.then(En, En);
          else {
            if (((e = G), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), uo(e), e);
          }
          throw ((co = t), to);
      }
    }
    function so(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((co = e), to) : e;
      }
    }
    var co = null;
    function lo() {
      if (co === null) throw Error(i(459));
      var e = co;
      return ((co = null), e);
    }
    function uo(e) {
      if (e === to || e === ro) throw Error(i(483));
    }
    var fo = null,
      po = 0;
    function mo(e) {
      var t = po;
      return ((po += 1), fo === null && (fo = []), oo(fo, e, t));
    }
    function ho(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function go(e, t) {
      throw t.$$typeof === ie
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
    }
    function _o(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;) (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = Hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null ? ((t.flags |= 134217730), n) : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 134217730), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ki(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === w
          ? ((e = d(e, t, n.props.children, r, n.key)), ho(e, n), e)
          : t !== null && (t.elementType === i || (typeof i == `object` && i && i.$$typeof === he && so(i) === t.type))
            ? ((t = a(t, n.props)), ho(t, n), (t.return = e), t)
            : ((t = Wi(n.type, n.key, n.props, null, e.mode, r)), ho(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ji(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = Ki(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case ae:
              return ((n = Wi(t.type, t.key, t.props, null, e.mode, n)), ho(n, t), (n.return = e), n);
            case oe:
              return ((t = Ji(t, e.mode, n)), (t.return = e), t);
            case he:
              return ((t = so(t)), f(e, t, n));
          }
          if (Te(t) || Se(t)) return ((t = Gi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, mo(t), n);
          if (t.$$typeof === ue) return f(e, Na(e, t), n);
          go(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case ae:
              return n.key === i ? l(e, t, n, r) : null;
            case oe:
              return n.key === i ? u(e, t, n, r) : null;
            case he:
              return ((n = so(n)), p(e, t, n, r));
          }
          if (Te(n) || Se(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, mo(n), r);
          if (n.$$typeof === ue) return p(e, t, Na(e, n), r);
          go(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case ae:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case oe:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case he:
              return ((r = so(r)), m(e, t, n, r, i));
          }
          if (Te(r) || Se(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, mo(r), i);
          if (r.$$typeof === ue) return m(e, t, n, Na(t, r), i);
          go(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (var l = null, u = null, d = a, h = (a = 0), g = null; d !== null && h < s.length; h++) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), N && oa(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)), d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (N && oa(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && ((_ = g.alternate), _ !== null && d.delete(_.key === null ? h : _.key)),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          N && oa(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), N && oa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)), v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (N && oa(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e && ((_ = v.alternate), _ !== null && h.delete(_.key === null ? g : _.key)),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          N && oa(a, g),
          u
        );
      }
      function _(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === w &&
            o.key === null &&
            o.props.ref === void 0 &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case ae:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === w)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = a(r, o.props.children)), ho(c, o), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === he && so(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), ho(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === w
                  ? ((c = Gi(o.props.children, e.mode, c, o.key)), ho(c, o), (c.return = e), (e = c))
                  : ((c = Wi(o.type, o.key, o.props, null, e.mode, c)), ho(c, o), (c.return = e), (e = c));
              }
              return s(e);
            case oe:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Ji(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case he:
              return ((o = so(o)), _(e, r, o, c));
          }
          if (Te(o)) return h(e, r, o, c);
          if (Se(o)) {
            if (((l = Se(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return _(e, r, mo(o), c);
          if (o.$$typeof === ue) return _(e, r, Na(e, o), c);
          go(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ki(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          po = 0;
          var i = _(e, t, n, r);
          return ((fo = null), i);
        } catch (t) {
          if (t === to || t === ro) throw t;
          var a = Bi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var vo = _o(!0),
      yo = _o(!1),
      bo = !1;
    function xo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function So(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Co(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function wo(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = Li(e)),
          Ii(e, null, n),
          t
        );
      }
      return (Ni(e, r, t, n), Li(e));
    }
    function To(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Tt(e, n));
      }
    }
    function Eo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
      } else ((e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
    }
    var Do = !1;
    function Oo() {
      if (Do) {
        var e = Ka;
        if (e !== null) throw e;
      }
    }
    function ko(e, t, n, r) {
      Do = !1;
      var i = e.updateQueue;
      bo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (q & f) === f : (r & f) === f) {
            (f !== 0 && f === Ga && (Do = !0),
              u !== null && (u = u.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (((m = h.payload), (f = typeof m == `function` ? m.call(g, d, f) : m), f == null)) break a;
                  d = C({}, d, f);
                  break a;
                case 2:
                  bo = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s), (s = p.next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (sd |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ao(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function jo(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ao(n[e], t);
    }
    var Mo = ke(null),
      No = ke(0);
    function Po(e, t) {
      ((e = od), D(No, e), D(Mo, t), (od = e | t.baseLanes));
    }
    function Fo() {
      (D(No, od), D(Mo, Mo.current));
    }
    function Io() {
      ((od = No.current), Ae(Mo), Ae(No));
    }
    var Lo = ke(null),
      Ro = null;
    function zo(e) {
      var t = e.alternate;
      (D(Wo, Wo.current & 1),
        D(Lo, e),
        Ro === null && (t === null || Mo.current !== null || t.memoizedState !== null) && (Ro = e));
    }
    function Bo(e) {
      (D(Wo, Wo.current), D(Lo, e), Ro === null && (Ro = e));
    }
    function Vo(e) {
      e.tag === 22 ? (D(Wo, Wo.current), D(Lo, e), Ro === null && (Ro = e)) : Ho();
    }
    function Ho() {
      (D(Wo, Wo.current), D(Lo, Lo.current));
    }
    function Uo(e) {
      (Ae(Lo), Ro === e && (Ro = null), Ae(Wo));
    }
    var Wo = ke(0);
    function Go(e, t) {
      (D(Lo, Lo.current), D(Wo, t));
    }
    function Ko(e) {
      (Ae(Wo), Ae(Lo), Ro === e && (Ro = null));
    }
    function qo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || om(n) || sm(n))) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Jo = 0,
      F = null,
      I = null,
      L = null,
      Yo = !1,
      Xo = !1,
      Zo = !1,
      Qo = 0,
      $o = 0,
      es = null,
      ts = 0;
    function R() {
      throw Error(i(321));
    }
    function ns(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Yr(e[n], t[n])) return !1;
      return !0;
    }
    function rs(e, t, n, r, i, a) {
      return (
        (Jo = a),
        (F = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (T.H = e === null || e.memoizedState === null ? yc : bc),
        (Zo = !1),
        (a = n(r, i)),
        (Zo = !1),
        Xo && (a = as(t, n, r, i)),
        is(e),
        a
      );
    }
    function is(e) {
      T.H = vc;
      var t = I !== null && I.next !== null;
      if (((Jo = 0), (L = I = F = null), (Yo = !1), ($o = 0), (es = null), t)) throw Error(i(300));
      e === null || B || ((e = e.dependencies), e !== null && Aa(e) && (B = !0));
    }
    function as(e, t, n, r) {
      F = e;
      var a = 0;
      do {
        if ((Xo && (es = null), ($o = 0), (Xo = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (L = I = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0));
        }
        ((T.H = xc), (o = t(n, r)));
      } while (Xo);
      return o;
    }
    function os() {
      var e = T.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? fs(t) : t),
        (e = e.useState()[0]),
        (I === null ? null : I.memoizedState) !== e && (F.flags |= 1024),
        t
      );
    }
    function ss() {
      var e = Qo !== 0;
      return ((Qo = 0), e);
    }
    function cs(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ls(e) {
      if (Yo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        Yo = !1;
      }
      ((Jo = 0), (L = I = F = null), (Xo = !1), ($o = Qo = 0), (es = null));
    }
    function us() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (L === null ? (F.memoizedState = L = e) : (L = L.next = e), L);
    }
    function z() {
      if (I === null) {
        var e = F.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = I.next;
      var t = L === null ? F.memoizedState : L.next;
      if (t !== null) ((L = t), (I = e));
      else {
        if (e === null) throw F.alternate === null ? Error(i(467)) : Error(i(310));
        ((I = e),
          (e = {
            memoizedState: I.memoizedState,
            baseState: I.baseState,
            baseQueue: I.baseQueue,
            queue: I.queue,
            next: null,
          }),
          L === null ? (F.memoizedState = L = e) : (L = L.next = e));
      }
      return L;
    }
    function ds() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function fs(e) {
      var t = $o;
      return (
        ($o += 1),
        es === null && (es = []),
        (e = oo(es, e, t)),
        (t = F),
        (L === null ? t.memoizedState : L.next) === null &&
          ((t = t.alternate), (T.H = t === null || t.memoizedState === null ? yc : bc)),
        e
      );
    }
    function ps(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return fs(e);
        if (e.$$typeof === be) return;
        if (e.$$typeof === ue) return Ma(e);
      }
      throw Error(i(438, String(e)));
    }
    function ms(e) {
      var t = null,
        n = F.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = F.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = ds()), (F.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ve;
      return (t.index++, n);
    }
    function hs(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function gs(e) {
      return _s(z(), I, e);
    }
    function _s(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (Jo & f) === f : (q & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === Ga && (d = !0));
            else if ((Jo & p) === p) {
              ((u = u.next), p === Ga && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (F.lanes |= p),
                (sd |= p));
            ((f = u.action), Zo && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (F.lanes |= f),
              (sd |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if ((l === null ? (s = o) : (l.next = c), !Yr(o, e.memoizedState) && ((B = !0), d && ((n = Ka), n !== null))))
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function vs(e) {
      var t = z(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Yr(o, t.memoizedState) || (B = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function ys(e, t, n) {
      var r = F,
        a = z(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Yr((I || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (B = !0)),
        (a = a.queue),
        Ws(Ss.bind(null, r, a, e), [e]),
        (e = a.getSnapshot !== t || s || (L !== null && !!(L.memoizedState.tag & 1))),
        zs(e ? 9 : 8, { destroy: void 0 }, xs.bind(null, r, a, n, t), null),
        e)
      ) {
        if (((r.flags |= 2048), G === null)) throw Error(i(349));
        o || Jo & 127 || bs(r, t, n);
      }
      return n;
    }
    function bs(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = F.updateQueue),
        t === null
          ? ((t = ds()), (F.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function xs(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Cs(t) && ws(e));
    }
    function Ss(e, t, n) {
      return n(function () {
        Cs(t) && ws(e);
      });
    }
    function Cs(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Yr(e, n);
      } catch {
        return !0;
      }
    }
    function ws(e) {
      var t = Fi(e, 2);
      t !== null && Pd(t, e, 2);
    }
    function Ts(e) {
      var t = us();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Zo)) {
          ct(!0);
          try {
            n();
          } finally {
            ct(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: e }),
        t
      );
    }
    function Es(e, t, n, r) {
      return ((e.baseState = n), _s(e, I, typeof r == `function` ? r : hs));
    }
    function Ds(e, t, n, r, a) {
      if (hc(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (T.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null ? ((o.next = t.pending = o), Os(t, o)) : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Os(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = T.T,
          o = {};
        ((o.types = a === null ? null : a.types), (T.T = o));
        try {
          var s = n(i, r),
            c = T.S;
          (c !== null && c(o, s), ks(e, t, s));
        } catch (n) {
          js(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (T.T = a));
        }
      } else
        try {
          ((a = n(i, r)), ks(e, t, a));
        } catch (n) {
          js(e, t, n);
        }
    }
    function ks(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              As(e, t, n);
            },
            function (n) {
              return js(e, t, n);
            },
          )
        : As(e, t, n);
    }
    function As(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Ms(t),
        (e.state = n),
        (t = e.pending),
        t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Os(e, n))));
    }
    function js(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Ms(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Ms(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ns(e, t) {
      return t;
    }
    function Ps(e, t) {
      if (N) {
        var n = G.formState;
        if (n !== null) {
          a: {
            var r = F;
            if (N) {
              if (M) {
                b: {
                  for (var i = M, a = pa; i.nodeType !== 8;)
                    if (!a || ((i = lm(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((M = lm(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              ha(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = us()),
        (n.memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ns, lastRenderedState: t }),
        (n.queue = r),
        (n = fc.bind(null, F, r)),
        (r.dispatch = n),
        (r = Ts(!1)),
        (a = mc.bind(null, F, !1, r.queue)),
        (r = us()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Ds.bind(null, F, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Fs(e) {
      return Is(z(), I, e);
    }
    function Is(e, t, n) {
      if (((t = _s(e, t, Ns)[0]), (e = gs(hs)[0]), typeof t == `object` && t && typeof t.then == `function`))
        try {
          var r = fs(t);
        } catch (e) {
          throw e === to ? ro : e;
        }
      else r = t;
      t = z();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState && ((F.flags |= 2048), zs(9, { destroy: void 0 }, Ls.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Ls(e, t) {
      e.action = t;
    }
    function Rs(e) {
      var t = z(),
        n = I;
      if (n !== null) return Is(t, n, e);
      (z(), (t = t.memoizedState), (n = z()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function zs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = F.updateQueue),
        t === null && ((t = ds()), (F.updateQueue = t)),
        (n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function Bs() {
      return z().memoizedState;
    }
    function Vs(e, t, n, r) {
      var i = us();
      ((F.flags |= e), (i.memoizedState = zs(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function Hs(e, t, n, r) {
      var i = z();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      I !== null && r !== null && ns(r, I.memoizedState.deps)
        ? (i.memoizedState = zs(t, a, n, r))
        : ((F.flags |= e), (i.memoizedState = zs(1 | t, a, n, r)));
    }
    function Us(e, t) {
      Vs(8390656, 8, e, t);
    }
    function Ws(e, t) {
      Hs(2048, 8, e, t);
    }
    function Gs(e) {
      F.flags |= 4;
      var t = F.updateQueue;
      if (t === null) ((t = ds()), (F.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function Ks(e) {
      var t = z().memoizedState;
      return (
        Gs({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function qs(e, t) {
      return Hs(4, 2, e, t);
    }
    function Js(e, t) {
      return Hs(4, 4, e, t);
    }
    function Ys(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Xs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), Hs(4, 4, Ys.bind(null, t, e), n));
    }
    function Zs() {}
    function Qs(e, t) {
      var n = z();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && ns(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function $s(e, t) {
      var n = z();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && ns(t, r[1])) return r[0];
      if (((r = e()), Zo)) {
        ct(!0);
        try {
          e();
        } finally {
          ct(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function ec(e, t, n) {
      return n === void 0 || (Jo & 1073741824 && !(q & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Md()), (F.lanes |= e), (sd |= e), n);
    }
    function tc(e, t, n, r) {
      return Yr(n, t)
        ? n
        : Mo.current === null
          ? !(Jo & 106) || (Jo & 1073741824 && !(q & 261930))
            ? ((B = !0), (e.memoizedState = n))
            : ((e = Md()), (F.lanes |= e), (sd |= e), t)
          : ((e = ec(e, n, r)), Yr(e, t) || (B = !0), e);
    }
    function nc(e, t, n, r, i) {
      var a = E.p;
      E.p = a !== 0 && 8 > a ? a : 8;
      var o = T.T,
        s = {};
      ((s.types = o === null ? null : o.types), (T.T = s), mc(e, !1, t, n));
      try {
        var c = i(),
          l = T.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function` ? pc(e, t, Ya(c, r), jd(e)) : pc(e, t, r, jd(e)));
      } catch (n) {
        pc(e, t, { then: function () {}, status: `rejected`, reason: n }, jd());
      } finally {
        ((E.p = a), o !== null && s.types !== null && (o.types = s.types), (T.T = o));
      }
    }
    function rc() {}
    function ic(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ac(e).queue;
      nc(
        e,
        a,
        t,
        Ee,
        n === null
          ? rc
          : function () {
              return (oc(e), n(r));
            },
      );
    }
    function ac(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Ee,
        baseState: Ee,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: Ee },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: n },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function oc(e) {
      var t = ac(e);
      (t.next === null && (t = e.alternate.memoizedState), pc(e, t.next.queue, {}, jd()));
    }
    function sc() {
      return Ma(sh);
    }
    function cc() {
      return z().memoizedState;
    }
    function lc() {
      return z().memoizedState;
    }
    function uc(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = jd();
            e = Co(n);
            var r = wo(t, e, n);
            (r !== null && (Pd(r, t, n), To(r, t, n)), (t = { cache: Ra() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function dc(e, t, n) {
      var r = jd();
      ((n = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
        hc(e) ? gc(t, n) : ((n = Pi(e, t, n, r)), n !== null && (Pd(n, e, r), _c(n, t, r))));
    }
    function fc(e, t, n) {
      pc(e, t, n, jd());
    }
    function pc(e, t, n, r) {
      var i = { lane: r, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (hc(e)) gc(t, i);
      else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Yr(s, o))) return (Ni(e, t, i, 0), G === null && Mi(), !1);
          } catch {}
        if (((n = Pi(e, t, i, r)), n !== null)) return (Pd(n, e, r), _c(n, t, r), !0);
      }
      return !1;
    }
    function mc(e, t, n, r) {
      if (
        ((r = { lane: 2, revertLane: Pf(), gesture: null, action: r, hasEagerState: !1, eagerState: null, next: null }),
        hc(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = Pi(e, n, r, 2)), t !== null && Pd(t, e, 2));
    }
    function hc(e) {
      var t = e.alternate;
      return e === F || (t !== null && t === F);
    }
    function gc(e, t) {
      Xo = Yo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function _c(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Tt(e, n));
      }
    }
    var vc = {
        readContext: Ma,
        use: ps,
        useCallback: R,
        useContext: R,
        useEffect: R,
        useImperativeHandle: R,
        useLayoutEffect: R,
        useInsertionEffect: R,
        useMemo: R,
        useReducer: R,
        useRef: R,
        useState: R,
        useDebugValue: R,
        useDeferredValue: R,
        useTransition: R,
        useSyncExternalStore: R,
        useId: R,
        useHostTransitionStatus: R,
        useFormState: R,
        useActionState: R,
        useOptimistic: R,
        useMemoCache: R,
        useCacheRefresh: R,
        useEffectEvent: R,
      },
      yc = {
        readContext: Ma,
        use: ps,
        useCallback: function (e, t) {
          return ((us().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Ma,
        useEffect: Us,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), Vs(4194308, 4, Ys.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Vs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Vs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = us();
          t = t === void 0 ? null : t;
          var r = e();
          if (Zo) {
            ct(!0);
            try {
              e();
            } finally {
              ct(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = us();
          if (n !== void 0) {
            var i = n(t);
            if (Zo) {
              ct(!0);
              try {
                n(t);
              } finally {
                ct(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
            (r.queue = e),
            (e = e.dispatch = dc.bind(null, F, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = us();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Ts(e);
          var t = e.queue,
            n = fc.bind(null, F, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Zs,
        useDeferredValue: function (e, t) {
          return ec(us(), e, t);
        },
        useTransition: function () {
          var e = Ts(!1);
          return ((e = nc.bind(null, F, e.queue, !0, !1)), (us().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = F,
            a = us();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), G === null)) throw Error(i(349));
            q & 127 || bs(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Us(Ss.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            zs(9, { destroy: void 0 }, xs.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = us(),
            t = G.identifierPrefix;
          if (N) {
            var n = aa,
              r = ia;
            ((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Qo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = ts++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: sc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function (e) {
          var t = us();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return ((t.queue = n), (t = mc.bind(null, F, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: ms,
        useCacheRefresh: function () {
          return (us().memoizedState = uc.bind(null, F));
        },
        useEffectEvent: function (e) {
          var t = us(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      bc = {
        readContext: Ma,
        use: ps,
        useCallback: Qs,
        useContext: Ma,
        useEffect: Ws,
        useImperativeHandle: Xs,
        useInsertionEffect: qs,
        useLayoutEffect: Js,
        useMemo: $s,
        useReducer: gs,
        useRef: Bs,
        useState: function () {
          return gs(hs);
        },
        useDebugValue: Zs,
        useDeferredValue: function (e, t) {
          return tc(z(), I.memoizedState, e, t);
        },
        useTransition: function () {
          var e = gs(hs)[0],
            t = z().memoizedState;
          return [typeof e == `boolean` ? e : fs(e), t];
        },
        useSyncExternalStore: ys,
        useId: cc,
        useHostTransitionStatus: sc,
        useFormState: Fs,
        useActionState: Fs,
        useOptimistic: function (e, t) {
          return Es(z(), I, e, t);
        },
        useMemoCache: ms,
        useCacheRefresh: lc,
        useEffectEvent: Ks,
      },
      xc = {
        readContext: Ma,
        use: ps,
        useCallback: Qs,
        useContext: Ma,
        useEffect: Ws,
        useImperativeHandle: Xs,
        useInsertionEffect: qs,
        useLayoutEffect: Js,
        useMemo: $s,
        useReducer: vs,
        useRef: Bs,
        useState: function () {
          return vs(hs);
        },
        useDebugValue: Zs,
        useDeferredValue: function (e, t) {
          var n = z();
          return I === null ? ec(n, e, t) : tc(n, I.memoizedState, e, t);
        },
        useTransition: function () {
          var e = vs(hs)[0],
            t = z().memoizedState;
          return [typeof e == `boolean` ? e : fs(e), t];
        },
        useSyncExternalStore: ys,
        useId: cc,
        useHostTransitionStatus: sc,
        useFormState: Rs,
        useActionState: Rs,
        useOptimistic: function (e, t) {
          var n = z();
          return I === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Es(n, I, e, t);
        },
        useMemoCache: ms,
        useCacheRefresh: lc,
        useEffectEvent: Ks,
      };
    function Sc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : C({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Cc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = Co(r);
        ((i.payload = t), n != null && (i.callback = n), (t = wo(e, i, r)), t !== null && (Pd(t, e, r), To(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = Co(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = wo(e, i, r)),
          t !== null && (Pd(t, e, r), To(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = jd(),
          r = Co(n);
        ((r.tag = 2), t != null && (r.callback = t), (t = wo(e, r, n)), t !== null && (Pd(t, e, n), To(t, e, n)));
      },
    };
    function wc(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Xr(n, r) || !Xr(i, a)
            : !0
      );
    }
    function Tc(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Cc.enqueueReplaceState(t, t.state, null));
    }
    function Ec(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps)) for (var i in (n === t && (n = C({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Dc(e) {
      Oi(e);
    }
    function Oc(e) {
      console.error(e);
    }
    function kc(e) {
      Oi(e);
    }
    function Ac(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function jc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Mc(e, t, n) {
      return (
        (n = Co(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Ac(e, t);
        }),
        n
      );
    }
    function Nc(e) {
      return ((e = Co(e)), (e.tag = 3), e);
    }
    function Pc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            jc(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (jc(t, n, r), typeof i != `function` && (yd === null ? (yd = new Set([this])) : yd.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function Fc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ka(t, n, a, !0), (n = Lo.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Ro === null ? Kd() : n.alternate === null && Y === 0 && (Y = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === io
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([r])) : t.add(r), mf(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === io
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    mf(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (mf(e, r, a), Kd(), !1);
      }
      if (N)
        return (
          (t = Lo.current),
          t === null
            ? (r !== ma && ((t = Error(i(423), { cause: r })), xa(Xi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Xi(r, n)),
              (a = Mc(e.stateNode, r, a)),
              Eo(e, a),
              Y !== 4 && (Y = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== ma && ((e = Error(i(422), { cause: r })), xa(Xi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = Xi(o, n)), fd === null ? (fd = [o]) : fd.push(o), Y !== 4 && (Y = 2), t === null)) return !0;
      ((r = Xi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return ((n.flags |= 65536), (e = a & -a), (n.lanes |= e), (e = Mc(n.stateNode, r, e)), Eo(n, e), !1);
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null && typeof o.componentDidCatch == `function` && (yd === null || !yd.has(o)))))
            )
              return ((n.flags |= 65536), (a &= -a), (n.lanes |= a), (a = Nc(a)), Pc(a, e, n, r), Eo(n, a), !1);
            break;
          case 22:
            if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Ic = Error(i(461)),
      B = !1;
    function Lc(e, t, n, r) {
      t.child = e === null ? yo(t, null, n, r) : vo(t, e.child, n, r);
    }
    function Rc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ja(t),
        (r = rs(e, t, n, o, a, i)),
        (s = ss()),
        e !== null && !B ? (cs(e, t, i), fl(e, t, i)) : (N && s && ca(t), (t.flags |= 1), Lc(e, t, r, i), t.child)
      );
    }
    function zc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !Vi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), Bc(e, t, a, r, i))
          : ((e = Wi(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
      }
      if (((a = e.child), !pl(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Xr : n), n(o, r) && e.ref === t.ref)) return fl(e, t, i);
      }
      return ((t.flags |= 1), (e = Hi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Bc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Xr(a, r) && e.ref === t.ref) {
          if (((B = !1), (t.pendingProps = r = a), pl(e, i))) e.flags & 131072 && (B = !0);
          else return ((t.lanes = e.lanes), fl(e, t, i));
        }
      }
      return Jc(e, t, n, r, i);
    }
    function Vc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;) ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return Uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && $a(t, a === null ? null : a.cachePool),
            a === null ? Fo() : Po(t, a),
            Vo(t));
        else return ((r = t.lanes = 536870912), Uc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && $a(t, null), Fo(), Ho())
          : ($a(t, a.cachePool), Po(t, a), Ho(), (t.memoizedState = null));
      return (Lc(e, t, i, n), t.child);
    }
    function Hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        t.sibling
      );
    }
    function Uc(e, t, n, r, i) {
      var a = Qa();
      return (
        (a = a === null ? null : { parent: P._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && $a(t, null),
        Fo(),
        Vo(t),
        e !== null && ka(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function Wc(e, t) {
      return (
        (t = rl({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Gc(e, t, n) {
      return (vo(t, e.child, null, n), (e = Wc(t, t.pendingProps)), (e.flags |= 2), Uo(t), (t.memoizedState = null), e);
    }
    function Kc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`)
            return (
              (e = Wc(t, r)),
              (t.lanes = 536870912),
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
              Hc(null, e)
            );
          if (
            (Bo(t),
            (e = M)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ra === null ? null : { id: ia, overflow: aa },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (da = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = 536870912), null);
        }
        return Wc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Bo(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = Gc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if ((B || ka(e, t, n, !1), (a = (n & e.childLanes) !== 0), B || a)) {
          if (Mo.current === null) {
            if (((r = G), r !== null && ((s = Et(r, n)), s !== 0 && s !== o.retryLane)))
              throw ((o.retryLane = s), Fi(e, s), Pd(r, e, s), Ic);
            Kd();
          }
          t = Gc(e, t, n);
        } else
          ((e = o.treeContext),
            (M = lm(s.nextSibling)),
            (da = t),
            (N = !0),
            (fa = null),
            (pa = !1),
            e !== null && ua(t, e),
            (t = Wc(t, r)),
            (t.flags |= 134221824));
        return t;
      }
      return (
        (e = Hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function qc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Jc(e, t, n, r, i) {
      return (
        ja(t),
        (n = rs(e, t, n, r, void 0, i)),
        (r = ss()),
        e !== null && !B ? (cs(e, t, i), fl(e, t, i)) : (N && r && ca(t), (t.flags |= 1), Lc(e, t, n, i), t.child)
      );
    }
    function Yc(e, t, n, r, i, a) {
      return (
        ja(t),
        (t.updateQueue = null),
        (n = as(t, r, n, i)),
        is(e),
        (r = ss()),
        e !== null && !B ? (cs(e, t, a), fl(e, t, a)) : (N && r && ca(t), (t.flags |= 1), Lc(e, t, n, a), t.child)
      );
    }
    function Xc(e, t, n, r, i) {
      if ((ja(t), t.stateNode === null)) {
        var a = Ri,
          o = n.contextType;
        (typeof o == `object` && o && (a = Ma(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Cc),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          xo(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Ma(o) : Ri),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Sc(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Cc.enqueueReplaceState(a, a.state, null),
            ko(t, r, a, i),
            Oo(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ec(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = Ri), typeof u == `object` && u && (o = Ma(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Tc(t, a, r, o)),
          (bo = !1));
        var f = t.memoizedState;
        ((a.state = f),
          ko(t, r, a, i),
          Oo(),
          (l = t.memoizedState),
          s || f !== l || bo
            ? (typeof d == `function` && (Sc(t, n, d, r), (l = t.memoizedState)),
              (c = bo || wc(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          So(e, t),
          (o = t.memoizedProps),
          (u = Ec(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = Ri),
          typeof l == `object` && l && (c = Ma(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Tc(t, a, r, c)),
          (bo = !1),
          (f = t.memoizedState),
          (a.state = f),
          ko(t, r, a, i),
          Oo());
        var p = t.memoizedState;
        o !== d || f !== p || bo || (e !== null && e.dependencies !== null && Aa(e.dependencies))
          ? (typeof s == `function` && (Sc(t, n, s, r), (p = t.memoizedState)),
            (u = bo || wc(t, n, u, r, f, p, c) || (e !== null && e.dependencies !== null && Aa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        qc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r ? ((t.child = vo(t, e.child, null, i)), (t.child = vo(t, null, n, i))) : Lc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = fl(e, t, i)),
        e
      );
    }
    function Zc(e, t, n, r) {
      return (ya(), (t.flags |= 256), Lc(e, t, n, r), t.child);
    }
    var Qc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function $c(e) {
      return { baseLanes: e, cachePool: eo() };
    }
    function el(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= ud), e);
    }
    function tl(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Wo.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (i ? zo(t) : Ho(),
            (e = M)
              ? ((e = am(e, pa)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ra === null ? null : { id: ia, overflow: aa },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = qi(e)),
                  (n.return = t),
                  (t.child = n),
                  (da = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw ha(t);
          return ((t.lanes = sm(e) ? 32 : 536870912), null);
        }
        return (
          (a = r.children),
          (r = r.fallback),
          i
            ? (Ho(),
              (i = t.mode),
              (a = rl({ mode: `hidden`, children: a }, i)),
              (r = Gi(r, i, n, null)),
              (a.return = t),
              (r.return = t),
              (a.sibling = r),
              (t.child = a),
              (r = t.child),
              (r.memoizedState = $c(n)),
              (r.childLanes = el(e, o, n)),
              (t.memoizedState = Qc),
              Hc(null, r))
            : (zo(t), nl(t, a))
        );
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return al(e, t, a, o, r, c, s, n);
      }
      return i
        ? (Ho(),
          (i = r.fallback),
          (a = t.mode),
          (s = e.child),
          (c = s.sibling),
          (r = Hi(s, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = s.subtreeFlags & 1206910976),
          c === null ? ((i = Gi(i, a, n, null)), (i.flags |= 2)) : (i = Hi(c, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          Hc(null, r),
          (r = t.child),
          (i = e.child.memoizedState),
          i === null
            ? (i = $c(n))
            : ((a = i.cachePool),
              a === null ? (a = eo()) : ((s = P._currentValue), (a = a.parent === s ? a : { parent: s, pool: s })),
              (i = { baseLanes: i.baseLanes | n, cachePool: a })),
          (r.memoizedState = i),
          (r.childLanes = el(e, o, n)),
          (t.memoizedState = Qc),
          Hc(e.child, r))
        : (zo(t),
          (n = e.child),
          (e = n.sibling),
          (n = Hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null && ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function nl(e, t) {
      return ((t = rl({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function rl(e, t) {
      return ((e = Bi(22, e, null, t)), (e.lanes = 0), e);
    }
    function il(e, t, n) {
      return (
        vo(t, e.child, null, n),
        (e = nl(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function al(e, t, n, r, a, o, s, c) {
      if (n)
        return t.flags & 256
          ? (zo(t), (t.flags &= -257), il(e, t, c))
          : t.memoizedState === null
            ? (Ho(),
              (o = a.fallback),
              (s = t.mode),
              (a = rl({ mode: `visible`, children: a.children }, s)),
              (o = Gi(o, s, c, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              vo(t, e.child, null, c),
              (a = t.child),
              (a.memoizedState = $c(c)),
              (a.childLanes = el(e, r, c)),
              (t.memoizedState = Qc),
              Hc(null, a))
            : (Ho(), (t.child = e.child), (t.flags |= 128), null);
      if ((zo(t), sm(o))) {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
          (r = l),
          r !== `` &&
            ((a = Error(i(419))), (a.stack = ``), (a.digest = r), xa({ value: a, source: null, stack: null })),
          il(e, t, c)
        );
      }
      if ((B || ka(e, t, c, !1), (r = (c & e.childLanes) !== 0), B || r)) {
        if (Mo.current !== null) return il(e, t, c);
        if (((r = G), r !== null && ((a = Et(r, c)), a !== 0 && a !== s.retryLane)))
          throw ((s.retryLane = a), Fi(e, a), Pd(r, e, a), Ic);
        return (om(o) || Kd(), il(e, t, c));
      }
      return om(o)
        ? ((t.flags |= 192), (t.child = e.child), null)
        : ((e = s.treeContext),
          (M = lm(o.nextSibling)),
          (da = t),
          (N = !0),
          (fa = null),
          (pa = !1),
          e !== null && ua(t, e),
          (t = nl(t, a.children)),
          (t.flags |= 134221824),
          t);
    }
    function ol(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Da(e.return, t, n));
    }
    function sl(e) {
      for (var t = null; e !== null;) {
        var n = e.alternate;
        (n !== null && qo(n) === null && (t = e), (e = e.sibling));
      }
      return t;
    }
    function cl(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function ll(e) {
      var t = e.child;
      for (e.child = null; t !== null;) {
        var n = t.sibling;
        ((t.sibling = e.child), (e.child = t), (t = n));
      }
    }
    function ul(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Wo.current;
      if (t.flags & 128) return (Go(t, o), null);
      var s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        Go(t, o),
        i === `backwards` && e !== null ? (ll(e), Lc(e, t, r, n), ll(e)) : Lc(e, t, r, n),
        (r = N ? ea : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && ol(e, n, t);
          else if (e.tag === 19) ol(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `backwards`:
          ((n = sl(t.child)),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null), ll(t)),
            cl(t, !0, i, null, a, r));
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && qo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          cl(t, !0, n, null, a, r);
          break;
        case `together`:
          cl(t, !1, null, null, void 0, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          ((n = sl(t.child)),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            cl(t, !1, i, n, a, r));
      }
      return t.child;
    }
    function dl(e, t, n) {
      var r = t.pendingProps;
      return (Ta(t, t.type, r.value), Lc(e, t, r.children, n), t.child);
    }
    function fl(e, t, n) {
      if ((e !== null && (t.dependencies = e.dependencies), (sd |= t.lanes), (n & t.childLanes) === 0)) {
        if (e !== null) {
          if ((ka(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = Hi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = Hi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function pl(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Aa(e)));
    }
    function ml(e, t, n) {
      switch (t.tag) {
        case 3:
          (Fe(t, t.stateNode.containerInfo), Ta(t, P, e.memoizedState.cache), ya());
          break;
        case 27:
        case 5:
          Le(t);
          break;
        case 4:
          Fe(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Bo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return (zo(t), (t.flags |= 128), null);
            r = ka(e, t, n, !1);
            var i = t.child.childLanes;
            return r || (n & i) !== 0 ? tl(e, t, n) : (zo(t), (e = fl(e, t, n)), e === null ? null : e.sibling);
          }
          zo(t);
          break;
        case 19:
          if (t.flags & 128) return ul(e, t, n);
          if (
            ((i = !!(e.flags & 128)),
            (r = (n & t.childLanes) !== 0),
            (r ||= (ka(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return ul(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Go(t, Wo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), Vc(e, t, n, t.pendingProps));
        case 24:
          Ta(t, P, e.memoizedState.cache);
      }
      return fl(e, t, n);
    }
    function hl(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) B = !0;
        else {
          if (!pl(e, n) && !(t.flags & 128)) return ((B = !1), ml(e, t, n));
          B = !!(e.flags & 131072);
        }
      } else ((B = !1), N && t.flags & 1048576 && sa(t, ea, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = so(t.elementType)), (t.type = e), typeof e == `function`))
              Vi(e)
                ? ((r = Ec(e, r)), (t.tag = 1), (t = Xc(null, t, e, r, n)))
                : ((t.tag = 0), (t = Jc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === de) {
                  ((t.tag = 11), (t = Rc(null, t, e, r, n)));
                  break a;
                }
                if (a === me) {
                  ((t.tag = 14), (t = zc(null, t, e, r, n)));
                  break a;
                }
                if (a === ue) {
                  ((t.tag = 10), (t.type = e), (t = dl(null, t, n)));
                  break a;
                }
              }
              throw ((t = we(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return Jc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ec(r, t.pendingProps)), Xc(e, t, r, a, n));
        case 3:
          a: {
            if ((Fe(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), So(e, t), ko(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache), Ta(t, P, r), r !== o.cache && Oa(t, [P], n, !0), Oo(), (r = s.element), o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = Zc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = Xi(Error(i(424)), t)), xa(a), (t = Zc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (M = lm(e.firstChild), da = t, N = !0, fa = null, pa = !0, n = yo(t, null, r, n), t.child = n; n;)
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
            } else {
              if ((ya(), r === a)) {
                t = fl(e, t, n);
                break a;
              }
              Lc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            qc(e, t),
            e === null
              ? (n = Nm(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N || (t.stateNode = fp(t.type, t.pendingProps, Ne.current, t))
              : (t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            Le(t),
            e === null &&
              N &&
              ((r = t.stateNode = hm(t.type, t.pendingProps, Ne.current)),
              (da = t),
              (pa = !0),
              (a = M),
              Sp(t.type) ? ((um = a), (M = lm(r.firstChild))) : (M = a)),
            Lc(e, t, t.pendingProps.children, n),
            qc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = M) &&
                ((r = rm(r, t.type, t.pendingProps, pa)),
                r === null ? (a = !1) : ((t.stateNode = r), (da = t), (M = lm(r.firstChild)), (pa = !1), (a = !0))),
              a || ha(t)),
            Le(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = rs(e, t, os, null, null, n)), (sh._currentValue = a)),
            qc(e, t),
            Lc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = M) &&
                ((n = im(n, t.pendingProps, pa)),
                n === null ? (e = !1) : ((t.stateNode = n), (da = t), (M = null), (e = !0))),
              e || ha(t)),
            null
          );
        case 13:
          return tl(e, t, n);
        case 4:
          return (
            Fe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = vo(t, null, r, n)) : Lc(e, t, r, n),
            t.child
          );
        case 11:
          return Rc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ((r = t.pendingProps), qc(e, t), Lc(e, t, r, n), t.child);
        case 8:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return dl(e, t, n);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ja(t),
            (a = Ma(a)),
            (r = r(a)),
            (t.flags |= 1),
            Lc(e, t, r, n),
            t.child
          );
        case 14:
          return zc(e, t, t.type, t.pendingProps, n);
        case 15:
          return Bc(e, t, t.type, t.pendingProps, n);
        case 19:
          return ul(e, t, n);
        case 31:
          return Kc(e, t, n);
        case 22:
          return Vc(e, t, n, t.pendingProps);
        case 24:
          return (
            ja(t),
            (r = Ma(P)),
            e === null
              ? ((a = Qa()),
                a === null &&
                  ((a = G),
                  (o = Ra()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                xo(t),
                Ta(t, P, a))
              : ((e.lanes & n) !== 0 && (So(e, t), ko(t, null, null, n), Oo()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), Ta(t, P, r), r !== a.cache && Oa(t, [P], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    Ta(t, P, r))),
            Lc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 30:
          return (
            t.stateNode === null && (t.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
            (r = t.pendingProps),
            r.name != null && r.name !== `auto` ? (t.flags |= e === null ? 18882560 : 18874368) : N && ca(t),
            e !== null && e.memoizedProps.name !== r.name ? (t.flags |= 4194816) : qc(e, t),
            Lc(e, t, r.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function gl(e) {
      e.flags |= 4;
    }
    function _l(e, t, n, r, i) {
      var a;
      if (
        ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
        a)
      ) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Ud()) e.flags |= 8192;
          else throw ((co = io), no);
        }
      } else e.flags &= -16777217;
    }
    function vl(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ym(t))) {
        if (Ud()) e.flags |= 8192;
        else throw ((co = io), no);
      }
    }
    function yl(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : xt()), (e.lanes |= t), (dd |= t)));
    }
    function bl(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n = e.tail, r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            break;
          default:
            for (t = e.tail, n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
        }
    }
    function V(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 1206910976),
            (r |= i.flags & 1206910976),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function xl(e, t, n) {
      var r = t.pendingProps;
      switch ((la(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (V(t), null);
        case 1:
          return (V(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ea(P),
            Ie(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (va(t)
                ? gl(t)
                : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), ba())),
            V(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (gl(t), o === null ? (V(t), _l(t, a, null, r, n)) : (V(t), vl(t, o)))
              : o
                ? o === e.memoizedState
                  ? (V(t), (t.flags &= -16777217))
                  : (gl(t), V(t), vl(t, o))
                : ((e = e.memoizedProps), e !== r && gl(t), V(t), _l(t, a, e, r, n)),
            null
          );
        case 27:
          if ((Re(t), (n = Ne.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            ((e = je.current), va(t) ? ga(t, e) : ((e = hm(a, r, n)), (t.stateNode = e), gl(t)));
          }
          return (V(t), (t.subtreeFlags &= -33554433), null);
        case 5:
          if ((Re(t), (a = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            if (((o = je.current), va(t))) ga(t, o);
            else {
              var s = lp(Ne.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string` ? s.createElement(`select`, { is: r.is }) : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size));
                      break;
                    default:
                      o = typeof r.is == `string` ? s.createElement(a, { is: r.is }) : s.createElement(a);
                  }
              }
              ((o[jt] = t), (o[Mt] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((np(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && gl(t);
            }
          }
          return (
            V(t),
            (t.subtreeFlags &= -33554433),
            _l(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && gl(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = Ne.current), va(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = da), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[jt] = t),
                (e = !!(e.nodeValue === n || (r !== null && !0 === r.suppressHydrationWarning) || ep(e.nodeValue, n))),
                e || ha(t, !0));
            } else ((e = lp(e).createTextNode(r)), (e[jt] = t), (t.stateNode = e));
          }
          return (V(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = va(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(557));
                e[jt] = t;
              } else (ya(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (V(t), (e = !1));
            } else
              ((n = ba()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), (e = !0));
            if (!e) return t.flags & 256 ? (Uo(t), t) : (Uo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (V(t), null);
        case 13:
          if (
            ((r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = va(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a)) throw Error(i(317));
                a[jt] = t;
              } else (ya(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (V(t), (a = !1));
            } else
              ((a = ba()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), (a = !0));
            if (!a) return t.flags & 256 ? (Uo(t), t) : (Uo(t), null);
          }
          return (
            Uo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                yl(t, t.updateQueue),
                V(t),
                null)
          );
        case 4:
          return (Ie(), e === null && Wf(t.stateNode.containerInfo), (t.flags |= 67108864), V(t), null);
        case 10:
          return (Ea(t.type), V(t), null);
        case 19:
          if ((Ko(t), (r = t.memoizedState), r === null)) return (V(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) bl(r, !1);
            else {
              if (Y !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = qo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        bl(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        yl(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (Ui(n, e), (n = n.sibling));
                    return (Go(t, (Wo.current & 1) | 2), N && oa(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null && Ze() > _d && ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = qo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  yl(t, e),
                  bl(r, !0),
                  r.tail === null && r.tailMode !== `collapsed` && r.tailMode !== `visible` && !o.alternate && !N)
                )
                  return (V(t), null);
              } else
                2 * Ze() - r.renderingStartTime > _d &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null;) {
                if (n.alternate !== null) {
                  n = !1;
                  break a;
                }
                n = n.sibling;
              }
              n = !0;
            }
            return (
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ze()),
              (e.sibling = null),
              (o = Wo.current),
              (o = a ? (o & 1) | 2 : o & 1),
              r.tailMode === `visible` || r.tailMode === `collapsed` || !n || N
                ? Go(t, o)
                : ((n = o), D(Lo, t), D(Wo, n), Ro === null && (Ro = t)),
              N && oa(t, r.treeForkCount),
              e
            );
          }
          return (V(t), null);
        case 22:
        case 23:
          return (
            Uo(t),
            Io(),
            (r = t.memoizedState !== null),
            e === null ? r && (t.flags |= 8192) : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r ? n & 536870912 && !(t.flags & 128) && (V(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : V(t),
            (n = t.updateQueue),
            n !== null && yl(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && Ae(Za),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ea(P),
            V(t),
            null
          );
        case 25:
          return null;
        case 30:
          return ((t.flags |= 33554432), V(t), null);
      }
      throw Error(i(156, t.tag));
    }
    function Sl(e, t) {
      switch ((la(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (Ea(P), Ie(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null);
        case 26:
        case 27:
        case 5:
          return (Re(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((Uo(t), t.alternate === null)) throw Error(i(340));
            ya();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((Uo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            ya();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (
            Ko(t),
            (e = t.flags),
            e & 65536
              ? ((t.flags = (e & -65537) | 128),
                (e = t.memoizedState),
                e !== null && ((e.rendering = null), (e.tail = null)),
                (t.flags |= 4),
                t)
              : null
          );
        case 4:
          return (Ie(), null);
        case 10:
          return (Ea(t.type), null);
        case 22:
        case 23:
          return (
            Uo(t),
            Io(),
            e !== null && Ae(Za),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ea(P), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Cl(e, t) {
      switch ((la(t), t.tag)) {
        case 3:
          (Ea(P), Ie());
          break;
        case 26:
        case 27:
        case 5:
          Re(t);
          break;
        case 4:
          Ie();
          break;
        case 31:
          t.memoizedState !== null && Uo(t);
          break;
        case 13:
          Uo(t);
          break;
        case 19:
          Ko(t);
          break;
        case 10:
          Ea(t.type);
          break;
        case 22:
        case 23:
          (Uo(t), Io(), e !== null && Ae(Za));
          break;
        case 24:
          Ea(P);
      }
    }
    function wl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Tl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function El(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          jo(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Dl(e, t, n) {
      ((n.props = Ec(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Ol(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = Ti(e.memoizedProps, i);
              ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), (r = i.ref));
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                (h(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function kl(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function Al(e, t) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
        for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function jl(e) {
      for (var t = e.return; t !== null && (Pl(t) && em(e.stateNode, t.stateNode), !Nl(t));) t = t.return;
    }
    function Ml(e) {
      for (var t = e.return; t !== null && (Pl(t) && tm(e.stateNode, t.stateNode), !Nl(t));) t = t.return;
    }
    function Nl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function Pl(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Fl(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Il(e, t, n) {
      try {
        var r = e.stateNode;
        (ip(r, e.type, n, t), (r[Mt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Ll(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Sp(e.type)) || e.tag === 4;
    }
    function Rl(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Ll(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if ((e.tag === 27 && Sp(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function zl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t
            ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(i, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(i),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = En)),
          Al(e, r),
          (j = !0));
      else if (
        i !== 4 &&
        (i === 27 && (Al(e, r), (r = null), Sp(e.type) && ((n = e.stateNode), (t = null))), (e = e.child), e !== null)
      )
        for (zl(e, t, n, r), e = e.sibling; e !== null;) (zl(e, t, n, r), (e = e.sibling));
    }
    function Bl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6) ((i = e.stateNode), t ? n.insertBefore(i, t) : n.appendChild(i), Al(e, r), (j = !0));
      else if (
        i !== 4 &&
        (i === 27 && (Al(e, r), (r = null), Sp(e.type) && (n = e.stateNode)), (e = e.child), e !== null)
      )
        for (Bl(e, t, n, r), e = e.sibling; e !== null;) (Bl(e, t, n, r), (e = e.sibling));
    }
    function Vl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (np(t, r, n), (t[jt] = e), (t[Mt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var Hl = !1,
      Ul = null;
    function Wl(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (Hl = !0);
    }
    var Gl = null;
    function Kl() {
      var e = Gl;
      return ((Gl = null), e);
    }
    var ql = 0;
    function Jl(e, t, n, r, i) {
      return ((ql = 0), Yl(e.child, t, n, r, i));
    }
    function Yl(e, t, n, r, i) {
      for (var a = !1; e !== null;) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            (r.push(s), s.view && (a = !0));
          } else a || (Op(o).view && (a = !0));
          ((Hl = !0), Tp(o, ql === 0 ? t : t + `_` + ql, n), ql++);
        } else
          (e.tag === 22 && e.memoizedState !== null) || (e.tag === 30 && i) || (Yl(e.child, t, n, r, i) && (a = !0));
        e = e.sibling;
      }
      return a;
    }
    function Xl(e, t) {
      for (; e !== null;)
        (e.tag === 5
          ? Ep(e.stateNode, e.memoizedProps)
          : (e.tag === 22 && e.memoizedState !== null) || (e.tag === 30 && t) || Xl(e.child, t),
          (e = e.sibling));
    }
    function Zl(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (
            (e.tag !== 22 || e.memoizedState === null) &&
            (Zl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
          ) {
            var t = e.memoizedProps;
            if (t.name == null || t.name === `auto`) throw Error(i(544));
            var n = t.name;
            ((t = Di(t.default, t.share)), t !== `none` && (Jl(e, n, t, null, !1) || Xl(e.child, !1)));
          }
          e = e.sibling;
        }
    }
    function Ql(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = Ti(r, n),
          a = Di(r.default, n.paired ? r.share : r.enter);
        a === `none` ? Zl(e) : Jl(e, i, a, null, !1) ? (Zl(e), n.paired || t || Nd(e, r.onEnter)) : Xl(e.child, !1);
      } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (Ql(e, t), (e = e.sibling));
      else Zl(e);
    }
    function $l(e) {
      if (Ul !== null && Ul.size !== 0) {
        var t = Ul;
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var n = e.memoizedProps,
                  r = n.name;
                if (r != null && r !== `auto`) {
                  var i = t.get(r);
                  if (i !== void 0) {
                    var a = Di(n.default, n.share);
                    if (
                      (a !== `none` &&
                        (Jl(e, r, a, null, !1)
                          ? ((a = e.stateNode), (i.paired = a), (a.paired = i), Nd(e, n.onShare))
                          : Xl(e.child, !1)),
                      t.delete(r),
                      t.size === 0)
                    )
                      break;
                  }
                }
              }
              $l(e);
            }
            e = e.sibling;
          }
      }
    }
    function eu(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = Ti(t, e.stateNode),
          r = Ul === null ? void 0 : Ul.get(n),
          i = Di(t.default, r === void 0 ? t.exit : t.share);
        (i !== `none` &&
          (Jl(e, n, i, null, !1)
            ? r === void 0
              ? Nd(e, t.onExit)
              : ((i = e.stateNode), (r.paired = i), (i.paired = r), Ul.delete(n), Nd(e, t.onShare))
            : Xl(e.child, !1)),
          Ul !== null && $l(e));
      } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (eu(e), (e = e.sibling));
      else Ul !== null && $l(e);
    }
    function tu(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Ti(t, e.stateNode);
          ((t = Di(t.default, t.update)), (e.flags &= -5), t !== `none` && Jl(e, n, t, (e.memoizedState = []), !1));
        } else e.subtreeFlags & 33554432 && tu(e);
        e = e.sibling;
      }
    }
    function nu(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var t = e.stateNode;
              t.paired !== null && ((t.paired = null), Xl(e.child, !1));
            }
            nu(e);
          }
          e = e.sibling;
        }
    }
    function ru(e) {
      if (e.tag === 30) ((e.stateNode.paired = null), Xl(e.child, !1), nu(e));
      else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (ru(e), (e = e.sibling));
      else nu(e);
    }
    function iu(e) {
      for (e = e.child; e !== null;)
        (e.tag === 30 ? Xl(e.child, !1) : e.subtreeFlags & 33554432 && iu(e), (e = e.sibling));
    }
    function au(e, t, n, r, i, a, o) {
      for (var s = !1; t !== null;) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && ql < a.length) {
            var l = a[ql],
              u = Op(c);
            (l.view || u.view) && (s = !0);
            var d;
            if ((d = !(e.flags & 4))) {
              if (u.clip) d = !0;
              else {
                d = l.rect;
                var f = u.rect;
                d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
              }
            }
            (d && (e.flags |= 4),
              u.abs ? (u = !l.abs) : ((l = l.rect), (u = u.rect), (u = l.height !== u.height || l.width !== u.width)),
              u && (e.flags |= 32));
          } else e.flags |= 32;
          (e.flags & 4 && Tp(c, ql === 0 ? n : n + `_` + ql, i),
            (s && e.flags & 4) || (Gl === null && (Gl = []), Gl.push(c, ql === 0 ? r : r + `_` + ql, t.memoizedProps)),
            ql++);
        } else
          (t.tag !== 22 || t.memoizedState === null) &&
            (t.tag === 30 && o ? (e.flags |= t.flags & 32) : au(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling;
      }
      return s;
    }
    function ou(e, t) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = Ti(n, r),
            a = Di(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else ((o = e.memoizedState), (e.memoizedState = null));
          r = e;
          var s = e.child;
          ((ql = 0), (i = au(r, s, i, i, a, o, !1)), e.flags & 4 && i && (t || Nd(e, n.onUpdate)));
        } else e.subtreeFlags & 33554432 && ou(e, t);
        e = e.sibling;
      }
    }
    var su = !1,
      H = !1,
      cu = !1,
      lu = !1,
      uu = typeof WeakSet == `function` ? WeakSet : Set,
      du = null,
      fu = !1,
      pu = !1,
      mu = !1,
      hu = !1;
    function gu(e, t, n) {
      if (((e = e.containerInfo), (sp = gh), (e = ti(e)), ni(e))) {
        if (`selectionStart` in e) var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var i = r.getSelection && r.getSelection();
            if (i && i.rangeCount !== 0) {
              r = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (r.nodeType, o.nodeType);
              } catch {
                r = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if ((p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null))
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              r = c === -1 || l === -1 ? null : { start: c, end: l };
            } else r = null;
          }
        r ||= { start: 0, end: 0 };
      } else r = null;
      for (
        cp = { focusedElem: e, selectionRange: r }, gh = !1, n = (n & 335544064) === n, du = t, t = n ? 9270 : 1024;
        du !== null;
      ) {
        if (((e = du), n && ((r = e.deletions), r !== null))) for (a = 0; a < r.length; a++) n && eu(r[a]);
        if (e.alternate === null && e.flags & 2) (n && Wl(e), _u(n));
        else {
          if (e.tag === 22) {
            if (((r = e.alternate), e.memoizedState !== null)) {
              (r !== null && r.memoizedState === null && n && eu(r), _u(n));
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              (n && Wl(e), _u(n));
              continue;
            }
          }
          ((r = e.child), (e.subtreeFlags & t) !== 0 && r !== null ? ((r.return = e), (du = r)) : (n && tu(e), _u(n)));
        }
      }
      Ul = null;
    }
    function _u(e) {
      for (; du !== null;) {
        var t = du,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
              var o = t.stateNode;
              try {
                var s = Ec(t.type, a);
                ((n = o.getSnapshotBeforeUpdate(s, r)), (o.__reactInternalSnapshotBeforeUpdate = n));
              } catch (e) {
                Z(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9)) nm(r);
              else if (n === 1)
                switch (r.nodeName) {
                  case `HEAD`:
                  case `HTML`:
                  case `BODY`:
                    nm(r);
                    break;
                  default:
                    r.textContent = ``;
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n &&
              r !== null &&
              ((n = Ti(r.memoizedProps, r.stateNode)),
              (a = t.memoizedProps),
              (a = Di(a.default, a.update)),
              a !== `none` && Jl(r, n, a, (r.memoizedState = []), !0));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (du = r));
          break;
        }
        du = t.return;
      }
    }
    function vu(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lu(e, n), r & 4 && wl(5, n));
          break;
        case 1:
          if ((Lu(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Ec(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && El(n), r & 512 && Ol(n, n.return));
          break;
        case 3:
          if ((Lu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              jo(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Vl(n);
        case 26:
        case 5:
          (Lu(e, n), t === null && r & 4 && Fl(n), r & 512 && Ol(n, n.return));
          break;
        case 12:
          Lu(e, n);
          break;
        case 31:
          (Lu(e, n), r & 4 && Eu(e, n));
          break;
        case 13:
          (Lu(e, n),
            r & 4 && Du(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null && ((e = e.dehydrated), e !== null && ((n = _f.bind(null, n)), cm(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || su), !r)) {
            var a = (t !== null && t.memoizedState !== null) || H;
            ((t = su),
              (i = H),
              (su = r),
              (H = a) && !i ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), zu(e, n, r)) : Lu(e, n),
              (su = t),
              (H = i));
          }
          break;
        case 30:
          (Lu(e, n), r & 512 && Ol(n, n.return));
          break;
        case 7:
          r & 512 && Ol(n, n.return);
        default:
          Lu(e, n);
      }
    }
    function yu(e, t) {
      for (e = e.child; e !== null;) (bu(e, t), (e = e.sibling));
    }
    function bu(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              typeof r.setProperty == `function` ? r.setProperty(`display`, `none`, `important`) : (r.display = `none`);
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display = o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          xu(e, t);
          break;
        case 6:
          try {
            ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (j = !0));
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            t ? wp(s, !0) : wp(e.stateNode, !1);
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && yu(e, t);
          break;
        default:
          yu(e, t);
      }
    }
    function xu(e, t) {
      if (e.subtreeFlags & 67108864)
        for (e = e.child; e !== null;) {
          a: {
            var n = e,
              r = t;
            switch (n.tag) {
              case 4:
                bu(n, r);
                break a;
              case 22:
                n.memoizedState === null && xu(n, r);
                break a;
              default:
                xu(n, r);
            }
          }
          e = e.sibling;
        }
    }
    function Su(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Su(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Bt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var U = null,
      Cu = !1;
    function wu(e, t, n) {
      for (n = n.child; n !== null;) (Tu(e, t, n), (n = n.sibling));
    }
    function Tu(e, t, n) {
      if (st && typeof st.onCommitFiberUnmount == `function`)
        try {
          st.onCommitFiberUnmount(ot, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (H || kl(n, t),
            wu(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && !H && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          (H || kl(n, t), Ml(n));
          var r = U,
            i = Cu;
          (Sp(n.type) && ((U = n.stateNode), (Cu = !1)),
            wu(e, t, n),
            gm(n.stateNode, n.type, n.memoizedProps),
            (U = r),
            (Cu = i));
          break;
        case 5:
          (H || kl(n, t), Ml(n));
        case 6:
          if ((n.tag === 6 && Ml(n), (r = U), (i = Cu), (U = null), wu(e, t, n), (U = r), (Cu = i), U !== null)) {
            if (Cu)
              try {
                ((U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(
                  n.stateNode,
                ),
                  (j = !0));
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                (U.removeChild(n.stateNode), (j = !0));
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          U !== null &&
            (Cu
              ? ((e = U),
                Cp(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
                Hh(e))
              : Cp(U, n.stateNode));
          break;
        case 4:
          ((r = U), (i = Cu), (U = n.stateNode.containerInfo), (Cu = !0), wu(e, t, n), (U = r), (Cu = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Tl(2, n, t), H || Tl(4, n, t), wu(e, t, n));
          break;
        case 1:
          (H || (kl(n, t), (r = n.stateNode), typeof r.componentWillUnmount == `function` && Dl(n, t, r)), wu(e, t, n));
          break;
        case 21:
          wu(e, t, n);
          break;
        case 22:
          ((H = (r = H) || n.memoizedState !== null), wu(e, t, n), (H = r));
          break;
        case 30:
          (kl(n, t), wu(e, t, n));
          break;
        case 7:
          (H || kl(n, t), wu(e, t, n));
          break;
        default:
          wu(e, t, n);
      }
    }
    function Eu(e, t) {
      if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function Du(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function Ou(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new uu()), t);
        case 22:
          return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new uu()), t);
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ku(e, t) {
      var n = Ou(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = vf.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Au(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = e,
            c = t,
            l = c;
          a: for (; l !== null;) {
            switch (l.tag) {
              case 27:
                if (Sp(l.type)) {
                  ((U = l.stateNode), (Cu = !1));
                  break a;
                }
                break;
              case 5:
                ((U = l.stateNode), (Cu = !1));
                break a;
              case 3:
              case 4:
                ((U = l.stateNode.containerInfo), (Cu = !0));
                break a;
            }
            l = l.return;
          }
          if (U === null) throw Error(i(160));
          (Tu(s, c, o), (U = null), (Cu = !1), (s = o.alternate), s !== null && (s.return = null), (o.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (Mu(t, e, n), (t = t.sibling));
    }
    var ju = null;
    function Mu(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (a & 4 && ((r = e.updateQueue), (r = r === null ? null : r.events), r !== null))
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.ref.impl = s.nextImpl;
            }
          (Au(t, e, n), Nu(e), a & 4 && (Tl(3, e, e.return), wl(3, e), Tl(5, e, e.return)));
          break;
        case 1:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            a & 64 &&
              su &&
              ((e = e.updateQueue),
              e !== null &&
                ((t = e.callbacks),
                t !== null &&
                  ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
          break;
        case 26:
          if (((o = ju), Au(t, e, n), Nu(e), a & 512 && (H || r === null || kl(r, r.return)), a & 4)) {
            if (((a = r === null ? null : r.memoizedState), (n = e.memoizedState), r === null)) {
              if (n === null) {
                if (e.stateNode === null) {
                  if (su) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
                  else {
                    a: {
                      ((t = e.type), (n = e.memoizedProps), (a = o.ownerDocument || o));
                      b: switch (t) {
                        case `title`:
                          ((r = a.getElementsByTagName(`title`)[0]),
                            (!r ||
                              r[Rt] ||
                              r[jt] ||
                              r.namespaceURI === `http://www.w3.org/2000/svg` ||
                              r.hasAttribute(`itemprop`)) &&
                              ((r = a.createElement(t)), a.head.insertBefore(r, a.querySelector(`head > title`))),
                            np(r, t, n),
                            (r[jt] = e),
                            Wt(r),
                            (t = r));
                          break a;
                        case `link`:
                          if ((o = Gm(`link`, `href`, a).get(t + (n.href || ``)))) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) &&
                                  r.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                  r.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                  r.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)), np(r, t, n), a.head.appendChild(r));
                          break;
                        case `meta`:
                          if ((o = Gm(`meta`, `content`, a).get(t + (n.content || ``)))) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`content`) === (n.content == null ? null : `` + n.content) &&
                                  r.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                  r.getAttribute(`property`) === (n.property == null ? null : n.property) &&
                                  r.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) &&
                                  r.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)), np(r, t, n), a.head.appendChild(r));
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      ((r[jt] = e), Wt(r), (t = r));
                    }
                    e.stateNode = t;
                  }
                } else su || Km(o, e.type, e.stateNode);
              } else e.stateNode = Bm(o, n, e.memoizedProps);
            } else
              a === n
                ? n === null && e.stateNode !== null && Il(e, e.memoizedProps, r.memoizedProps)
                : (a === null ? ((t = r.stateNode), t === null || H || t.parentNode.removeChild(t)) : a.count--,
                  n === null ? su || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
          }
          break;
        case 27:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            r !== null && a & 4 && Il(e, e.memoizedProps, r.memoizedProps));
          break;
        case 5:
          if (
            ((o = cu),
            (cu = !1),
            Au(t, e, n),
            (cu = o),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            e.flags & 32)
          ) {
            t = e.stateNode;
            try {
              (vn(t, ``), (j = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (a & 4 && e.stateNode != null && ((t = e.memoizedProps), Il(e, t, r === null ? t : r.memoizedProps)),
            a & 1024 && (lu = !0));
          break;
        case 6:
          if ((Au(t, e, n), Nu(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((t = e.memoizedProps), (n = e.stateNode));
            try {
              ((n.nodeValue = t), (j = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((j = !1),
            (Wm = null),
            (o = ju),
            (ju = bm(t.containerInfo)),
            Au(t, e, n),
            (ju = o),
            Nu(e),
            a & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Hh(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          (lu && ((lu = !1), Pu(e)), (j = !1));
          break;
        case 4:
          ((a = cu),
            (cu = su),
            (r = en()),
            (o = ju),
            (ju = bm(e.stateNode.containerInfo)),
            Au(t, e, n),
            Nu(e),
            (ju = o),
            j && pu && (mu = !0),
            (j = r),
            (cu = a));
          break;
        case 12:
          (Au(t, e, n), Nu(e));
          break;
        case 31:
          (Au(t, e, n), Nu(e), a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 13:
          (Au(t, e, n),
            Nu(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) &&
              (hd = Ze()),
            a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 22:
          ((o = e.memoizedState !== null), (s = r !== null && r.memoizedState !== null));
          var c = su,
            l = H,
            u = cu;
          ((su = c || o),
            (cu = u || o),
            (H = l || s),
            Au(t, e, n),
            (H = l),
            (cu = u),
            (su = c),
            Nu(e),
            a & 8192 &&
              ((t = e.stateNode),
              (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
              !o ||
                r === null ||
                s ||
                su ||
                H ||
                ((t = s || H), (n = su), (r = H), (su = o || su), (H = t), Ru(e, 2), (su = n), (H = r)),
              (!o && cu) || yu(e, o)),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((n = t.retryQueue), n !== null && ((t.retryQueue = null), ku(e, n)))));
          break;
        case 19:
          (Au(t, e, n), Nu(e), a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 30:
          (a & 512 && (H || r === null || kl(r, r.return)),
            (a = en()),
            (o = pu),
            (s = (n & 335544064) === n),
            (c = e.memoizedProps),
            (pu = s && Di(c.default, c.update) !== `none`),
            Au(t, e, n),
            Nu(e),
            s && r !== null && j && (e.flags |= 4),
            (pu = o),
            (j = a));
          break;
        case 21:
          break;
        case 7:
          (a & 512 && (H || r === null || kl(r, r.return)),
            r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
        default:
          (Au(t, e, n), Nu(e));
      }
    }
    function Nu(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Ll(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null;) {
            if (Pl(a)) {
              var o = a.stateNode;
              r === null ? (r = [o]) : r.push(o);
            }
            if (Nl(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              Bl(e, Rl(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              (n.flags & 32 && (vn(l, ``), (n.flags &= -33)), Bl(e, Rl(e), l, s));
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              zl(e, Rl(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Pu(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Pu(t),
            t.tag === 5 && t.flags & 1024 && ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
            (e = e.sibling));
        }
    }
    function Fu(e, t) {
      if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) (Iu(t, e), (t = t.sibling));
      else ou(t, !1);
    }
    function Iu(e, t) {
      var n = e.alternate;
      if (n === null) Ql(e, !1);
      else
        switch (e.tag) {
          case 3:
            if (((hu = fu = !1), Kl(), Fu(t, e), !fu && !mu)) {
              if (((e = Gl), e !== null))
                for (var r = 0; r < e.length; r += 3) {
                  n = e[r];
                  var i = e[r + 1];
                  (Ep(n, e[r + 2]),
                    (n = n.ownerDocument.documentElement),
                    n !== null &&
                      n.animate(
                        { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                        { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i + `)` },
                      ));
                }
              ((e = t.containerInfo),
                (e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `` &&
                  ((e.style.viewTransitionName = `none`),
                  e.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)` },
                  ),
                  e.animate(
                    { width: [0, 0], height: [0, 0] },
                    { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` },
                  )),
                (hu = !0));
            }
            Gl = null;
            break;
          case 5:
            Fu(t, e);
            break;
          case 4:
            ((r = fu), (fu = !1), Fu(t, e), fu && (mu = !0), (fu = r));
            break;
          case 22:
            e.memoizedState === null && (n.memoizedState === null ? Fu(t, e) : Ql(e, !1));
            break;
          case 30:
            ((r = fu), (i = Kl()), (fu = !1), Fu(t, e), fu && (e.flags |= 4));
            var a = e.memoizedProps,
              o = e.stateNode;
            ((t = Ti(a, o)), (o = Ti(n.memoizedProps, o)));
            var s = Di(a.default, a.update);
            (s === `none`
              ? (t = !1)
              : ((a = n.memoizedState),
                (n.memoizedState = null),
                (n = e.child),
                (ql = 0),
                (t = au(e, n, t, o, s, a, !0)),
                ql !== (a === null ? 0 : a.length) && (e.flags |= 32)),
              e.flags & 4 && t
                ? (Nd(e, e.memoizedProps.onUpdate), (Gl = i))
                : i !== null && (i.push.apply(i, Gl), (Gl = i)),
              (fu = e.flags & 32 ? !0 : r));
            break;
          default:
            Fu(t, e);
        }
    }
    function Lu(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) (vu(e, t.alternate, t), (t = t.sibling));
    }
    function Ru(e, t) {
      for (e = e.child; e !== null;) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Tl(4, n, n.return), Ru(n, r));
            break;
          case 1:
            kl(n, n.return);
            var i = n.stateNode;
            (typeof i.componentWillUnmount == `function` && Dl(n, n.return, i), Ru(n, r));
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            (kl(n, n.return), (n.tag !== 5 && n.tag !== 27) || Ml(n), Ru(n, r));
            break;
          case 6:
            Ml(n);
            break;
          case 26:
            (kl(n, n.return),
              (i = n.stateNode),
              n.memoizedState !== null || i === null || H || i.parentNode.removeChild(i),
              Ru(n, r));
            break;
          case 22:
            n.memoizedState === null && Ru(n, r);
            break;
          case 30:
            (kl(n, n.return), Ru(n, r));
            break;
          case 7:
            kl(n, n.return);
          default:
            Ru(n, r);
        }
        e = e.sibling;
      }
    }
    function zu(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (zu(i, a, n), wl(4, a));
            break;
          case 1:
            if ((zu(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) Ao(l[i], c);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (s && o & 64 && El(a), Ol(a, a.return));
            break;
          case 27:
            n & 2 && Vl(a);
          case 5:
            ((a.tag !== 5 && a.tag !== 27) || jl(a), zu(i, a, n), s && r === null && o & 4 && Fl(a), Ol(a, a.return));
            break;
          case 6:
            jl(a);
            break;
          case 26:
            ((c = a.stateNode),
              a.memoizedState !== null || c === null || su || Km(bm(c.ownerDocument), a.type, c),
              zu(i, a, n),
              s && r === null && o & 4 && Fl(a),
              Ol(a, a.return));
            break;
          case 12:
            zu(i, a, n);
            break;
          case 31:
            (zu(i, a, n), s && o & 4 && Eu(i, a));
            break;
          case 13:
            (zu(i, a, n), s && o & 4 && Du(i, a));
            break;
          case 22:
            (a.memoizedState === null && zu(i, a, n), Ol(a, a.return));
            break;
          case 30:
            (zu(i, a, n), Ol(a, a.return));
            break;
          case 7:
            Ol(a, a.return);
          default:
            zu(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Bu(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && za(n)));
    }
    function Vu(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && za(e)));
    }
    function Hu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) (Uu(e, t, n, r), (t = t.sibling));
      else i && iu(t);
    }
    function Uu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i && t.alternate === null && t.return !== null && t.return.alternate !== null && ru(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Hu(e, t, n, r), a & 2048 && wl(9, t));
          break;
        case 1:
          Hu(e, t, n, r);
          break;
        case 3:
          (Hu(e, t, n, r),
            i &&
              hu &&
              ((e = e.containerInfo),
              (e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e),
              e.style.viewTransitionName === `root` && (e.style.viewTransitionName = ``),
              (e = e.ownerDocument.documentElement),
              e !== null && e.style.viewTransitionName === `none` && (e.style.viewTransitionName = ``)),
            a & 2048 &&
              ((a = null),
              t.alternate !== null && (a = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== a && (t.refCount++, a != null && za(a))));
          break;
        case 12:
          if (a & 2048) {
            (Hu(e, t, n, r), (a = t.stateNode));
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` && c(s, t.alternate === null ? `mount` : `update`, a.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Hu(e, t, n, r);
          break;
        case 31:
          Hu(e, t, n, r);
          break;
        case 13:
          Hu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((o = t.stateNode),
            (s = t.alternate),
            t.memoizedState === null
              ? (i && s !== null && s.memoizedState !== null && ru(t),
                o._visibility & 2
                  ? Hu(e, t, n, r)
                  : ((o._visibility |= 2), Wu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
              : (i && s !== null && s.memoizedState === null && ru(s), o._visibility & 2 ? Hu(e, t, n, r) : Gu(e, t)),
            a & 2048 && Bu(s, t));
          break;
        case 24:
          (Hu(e, t, n, r), a & 2048 && Vu(t.alternate, t));
          break;
        case 30:
          (i && ((a = t.alternate), a !== null && (Xl(a.child, !0), Xl(t.child, !0))), Hu(e, t, n, r));
          break;
        default:
          Hu(e, t, n, r);
      }
    }
    function Wu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Wu(a, o, s, c, i), wl(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Wu(a, o, s, c, i))
              : u._visibility & 2
                ? Wu(a, o, s, c, i)
                : Gu(a, o),
              i && l & 2048 && Bu(o.alternate, o));
            break;
          case 24:
            (Wu(a, o, s, c, i), i && l & 2048 && Vu(o.alternate, o));
            break;
          default:
            Wu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Gu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Gu(n, r), i & 2048 && Bu(r.alternate, r));
              break;
            case 24:
              (Gu(n, r), i & 2048 && Vu(r.alternate, r));
              break;
            default:
              Gu(n, r);
          }
          t = t.sibling;
        }
    }
    var Ku = 8192;
    function qu(e, t, n) {
      if (e.subtreeFlags & Ku) for (e = e.child; e !== null;) (Ju(e, t, n), (e = e.sibling));
    }
    function Ju(e, t, n) {
      switch (e.tag) {
        case 26:
          (qu(e, t, n),
            e.flags & Ku &&
              (e.memoizedState === null
                ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                : Qm(n, ju, e.memoizedState, e.memoizedProps)));
          break;
        case 5:
          (qu(e, t, n), e.flags & Ku && ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
          break;
        case 3:
        case 4:
          var r = ju;
          ((ju = bm(e.stateNode.containerInfo)), qu(e, t, n), (ju = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null ? ((r = Ku), (Ku = 16777216), qu(e, t, n), (Ku = r)) : qu(e, t, n));
          break;
        case 30:
          if ((e.flags & Ku) !== 0 && ((r = e.memoizedProps.name), r != null && r !== `auto`)) {
            var i = e.stateNode;
            ((i.paired = null), Ul === null && (Ul = new Map()), Ul.set(r, i));
          }
          qu(e, t, n);
          break;
        default:
          qu(e, t, n);
      }
    }
    function Yu(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Xu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((du = r), $u(r, e));
          }
        Yu(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Zu(e), (e = e.sibling));
    }
    function Zu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Xu(e), e.flags & 2048 && Tl(9, e, e.return));
          break;
        case 3:
          Xu(e);
          break;
        case 12:
          Xu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Qu(e))
            : Xu(e);
          break;
        default:
          Xu(e);
      }
    }
    function Qu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((du = r), $u(r, e));
          }
        Yu(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Tl(8, t, t.return), Qu(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Qu(t)));
            break;
          default:
            Qu(t);
        }
        e = e.sibling;
      }
    }
    function $u(e, t) {
      for (; du !== null;) {
        var n = du;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Tl(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            za(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (du = r));
        else
          a: for (n = e; du !== null;) {
            r = du;
            var i = r.sibling,
              a = r.return;
            if ((Su(r), r === n)) {
              du = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (du = i));
              break a;
            }
            du = a;
          }
      }
    }
    var ed = {
        getCacheForType: function (e) {
          var t = Ma(P),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Ma(P).controller.signal;
        },
      },
      td = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      G = null,
      K = null,
      q = 0,
      J = 0,
      nd = null,
      rd = !1,
      id = !1,
      ad = !1,
      od = 0,
      Y = 0,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = 0,
      fd = null,
      pd = null,
      md = !1,
      hd = 0,
      gd = 0,
      _d = 1 / 0,
      vd = null,
      yd = null,
      X = 0,
      bd = null,
      xd = null,
      Sd = 0,
      Cd = 0,
      wd = null,
      Td = null,
      Ed = null,
      Dd = null,
      Od = null,
      kd = 0,
      Ad = null;
    function jd() {
      return W & 2 && q !== 0 ? q & -q : T.T === null ? Ot() : Pf();
    }
    function Md() {
      if (ud === 0) {
        if (!(q & 536870912) || N) {
          var e = mt;
          ((mt <<= 1), !(mt & 3932160) && (mt = 262144), (ud = e));
        } else ud = 536870912;
      }
      return ((e = Lo.current), e !== null && (e.flags |= 32), ud);
    }
    function Nd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        (r === null && (r = n.ref = Pp(Ti(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r)));
      }
    }
    function Pd(e, t, n) {
      (((e === G && (J === 2 || J === 9)) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, q, ud, !1)),
        Ct(e, n),
        (W & 2 && e === G) || (e === G && (!(W & 2) && (cd |= n), Y === 4 && Rd(e, q, ud, !1)), Ef(e)));
    }
    function Fd(e, t, n) {
      if (W & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || vt(e, t),
        a = r ? Yd(e, t) : qd(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          id && !r && Rd(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Ld(n))) ((a = qd(e, t, !1)), (o = !1));
        else {
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else ((s = e.pendingLanes & -536870913), (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = fd;
                var l = c.current.memoizedState.isDehydrated;
                if ((l && (Vd(c, s).flags |= 256), (s = qd(c, s, !1)), s !== 2 && s !== 6)) {
                  if (ad && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (cd |= o), (a = 4));
                    break a;
                  }
                  ((o = pd), (pd = a), o !== null && (pd === null ? (pd = o) : pd.push.apply(pd, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Vd(e, 0), Rd(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t && (t & 62914560) !== t) break;
              case 6:
                Rd(r, t, ud, !rd);
                break a;
              case 2:
                pd = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = hd + 300 - Ze()), 10 < a)) {
              if ((Rd(r, t, ud, !rd), _t(r, 0, !0) !== 0)) break a;
              ((Sd = t),
                (r.timeoutHandle = gp(Id.bind(null, r, n, pd, vd, md, t, ud, cd, dd, rd, o, `Throttled`, -0, 0), a)));
              break a;
            }
            Id(r, n, pd, vd, md, t, ud, cd, dd, rd, o, null, -0, 0);
          }
          break;
        }
      } while (1);
      Ef(e);
    }
    function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      ((d = null),
        (h || m & 8192 || (m & 16785408) == 16785408) &&
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: En,
        }),
        (Ul = null),
        Ju(t, a, d),
        h &&
          ((m = d),
          (h = e.containerInfo),
          (h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition),
          h != null && (m.count++, (m.waitingForViewTransition = !0), (m = nh.bind(m)), h.finished.then(m, m))),
        (m = (a & 62914560) === a ? hd - Ze() : (a & 4194048) === a ? gd - Ze() : 0),
        (m = eh(d, m)),
        m !== null)
          ? ((Sd = a),
            (e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p))),
            Rd(e, a, o, !l))
          : nf(e, t, a, n, r, i, o, s, c, l, u, d));
    }
    function Ld(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Yr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function Rd(e, t, n, r) {
      ((t = yt(e, t)),
        (t &= ~ld),
        (t &= ~cd),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - lt(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && O(e, n, t);
    }
    function zd() {
      return W & 6 ? !0 : (Df(0, !1), !1);
    }
    function Bd() {
      if (K !== null) {
        if (J === 0) var e = K.return;
        else ((e = K), (wa = Ca = null), ls(e), (fo = null), (po = 0), (e = K));
        for (; e !== null;) (Cl(e.alternate, e), (e = e.return));
        K = null;
      }
    }
    function Vd(e, t) {
      var n = e.timeoutHandle;
      return (
        n !== -1 && ((e.timeoutHandle = -1), _p(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (Sd = 0),
        Bd(),
        (G = e),
        (K = n = Hi(e.current, null)),
        (q = t),
        (J = 0),
        (nd = null),
        (rd = !1),
        (id = vt(e, t)),
        (ad = !1),
        (dd = ud = ld = cd = sd = Y = 0),
        (pd = fd = null),
        (md = !1),
        (od = yt(e, t)),
        Mi(),
        n
      );
    }
    function Hd(e, t) {
      ((F = null),
        (T.H = vc),
        t === to || t === ro
          ? ((t = lo()), (J = 3))
          : t === no
            ? ((t = lo()), (J = 4))
            : (J = t === Ic ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (nd = t),
        K === null && ((Y = 1), Ac(e, Xi(t, e.current))));
    }
    function Ud() {
      var e = Lo.current;
      return e === null
        ? !0
        : (q & 4194048) === q
          ? Ro === null
          : (q & 62914560) === q || q & 536870912
            ? e === Ro
            : !1;
    }
    function Wd() {
      var e = T.H;
      return ((T.H = vc), e === null ? vc : e);
    }
    function Gd() {
      var e = T.A;
      return ((T.A = ed), e);
    }
    function Kd() {
      ((Y = 4),
        rd || ((q & 4194048) !== q && Lo.current !== null) || (id = !0),
        (!(sd & 134217727) && !(cd & 134217727)) || G === null || Rd(G, q, ud, !1));
    }
    function qd(e, t, n) {
      var r = W;
      W |= 2;
      var i = Wd(),
        a = Gd();
      ((G !== e || q !== t) && ((vd = null), Vd(e, t)), (t = !1));
      var o = Y;
      a: do
        try {
          if (J !== 0 && K !== null) {
            var s = K,
              c = nd;
            switch (J) {
              case 8:
                (Bd(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Lo.current === null && (t = !0);
                var l = J;
                if (((J = 0), (nd = null), $d(e, s, c, l), n && id)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = J), (J = 0), (nd = null), $d(e, s, c, l));
            }
          }
          (Jd(), (o = Y));
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (wa = Ca = null),
        (W = r),
        (T.H = i),
        (T.A = a),
        K === null && ((G = null), (q = 0), Mi()),
        o
      );
    }
    function Jd() {
      for (; K !== null;) Zd(K);
    }
    function Yd(e, t) {
      var n = W;
      W |= 2;
      var r = Wd(),
        a = Gd();
      G !== e || q !== t ? ((vd = null), (_d = Ze() + 500), Vd(e, t)) : (id = vt(e, t));
      a: do
        try {
          if (J !== 0 && K !== null) {
            t = K;
            var o = nd;
            b: switch (J) {
              case 1:
                ((J = 0), (nd = null), $d(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ao(o)) {
                  ((J = 0), (nd = null), Qd(t));
                  break;
                }
                ((t = function () {
                  ((J !== 2 && J !== 9) || G !== e || (J = 7), Ef(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                J = 7;
                break a;
              case 4:
                J = 5;
                break a;
              case 7:
                ao(o) ? ((J = 0), (nd = null), Qd(t)) : ((J = 0), (nd = null), $d(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (K.tag) {
                  case 26:
                    s = K.memoizedState;
                  case 5:
                  case 27:
                    var c = K;
                    if (s ? Ym(s) : c.stateNode.complete) {
                      ((J = 0), (nd = null));
                      var l = c.sibling;
                      if (l !== null) K = l;
                      else {
                        var u = c.return;
                        u === null ? (K = null) : ((K = u), ef(u));
                      }
                      break b;
                    }
                }
                ((J = 0), (nd = null), $d(e, t, o, 5));
                break;
              case 6:
                ((J = 0), (nd = null), $d(e, t, o, 6));
                break;
              case 8:
                (Bd(), (Y = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Xd();
          break;
        } catch (t) {
          Hd(e, t);
        }
      while (1);
      return ((wa = Ca = null), (T.H = r), (T.A = a), (W = n), K === null ? ((G = null), (q = 0), Mi(), Y) : 0);
    }
    function Xd() {
      for (; K !== null && !Ye();) Zd(K);
    }
    function Zd(e) {
      var t = hl(e.alternate, e, od);
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (K = t));
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Yc(n, t, t.pendingProps, t.type, void 0, q);
          break;
        case 11:
          t = Yc(n, t, t.pendingProps, t.type.render, t.ref, q);
          break;
        case 5:
          ls(t);
          var r = t;
          r === da && (N ? (_a(r), r.tag === 5 && r.stateNode != null && (M = r.stateNode)) : (_a(r), (N = !0)));
        default:
          (Cl(n, t), (t = K = Ui(t, od)), (t = hl(n, t, od)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (K = t));
    }
    function $d(e, t, n, r) {
      ((wa = Ca = null), ls(t), (fo = null), (po = 0));
      var i = t.return;
      try {
        if (Fc(e, i, t, n, q)) {
          ((Y = 1), Ac(e, Xi(n, e.current)), (K = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((K = i), t);
        ((Y = 1), Ac(e, Xi(n, e.current)), (K = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : id || q & 536870912
              ? (e = !1)
              : ((rd = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = Lo.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          tf(t, e))
        : ef(t);
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, rd);
          return;
        }
        e = t.return;
        var n = xl(t.alternate, t, od);
        if (n !== null) {
          K = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          K = t;
          return;
        }
        K = t = e;
      } while (t !== null);
      Y === 0 && (Y = 5);
    }
    function tf(e, t) {
      do {
        var n = Sl(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (K = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          K = e;
          return;
        }
        K = e = n;
      } while (e !== null);
      ((Y = 6), (K = null));
    }
    function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do df();
      while (X !== 0);
      if (W & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        (e === G && ((K = G = null), (q = 0)),
          (xd = t),
          (bd = e),
          (Sd = n),
          (wd = a),
          (Td = r),
          rf(e, t, n, s, c, l, f));
      }
    }
    function rf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (
        ((Cd = s),
        (s |= ji),
        wt(e, n, s, r, i, a),
        (Dd = null),
        (n & 335544064) === n ? ((Od = Ha(e)), (r = 10262)) : ((Od = null), (r = 10256)),
        (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            yf(tt, function () {
              return (ff(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Hl = !1),
        (r = !!(t.flags & 13878)),
        t.subtreeFlags & 13878 || r)
      ) {
        ((r = T.T), (T.T = null), (i = E.p), (E.p = 2), (a = W), (W |= 4));
        try {
          gu(e, t, n);
        } finally {
          ((W = a), (E.p = i), (T.T = r));
        }
      }
      ((X = 1), Hl ? (Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null)) : (sf(), cf(), lf()));
    }
    function af(e) {
      if (X !== 0) {
        var t = bd.onRecoverableError;
        t(e, { componentStack: null });
      }
    }
    function of() {
      X === 3 && ((X = 0), Iu(xd, bd), (X = 4));
    }
    function sf() {
      if (X === 1) {
        X = 0;
        var e = bd,
          t = xd,
          n = Sd,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          ((r = T.T), (T.T = null));
          var i = E.p;
          E.p = 2;
          var a = W;
          W |= 4;
          try {
            ((pu = mu = !1), Mu(t, e, n), (n = cp));
            var o = ti(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (o !== s && s && s.ownerDocument && ei(s.ownerDocument.documentElement, s)) {
              if (c !== null && ni(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = $r(s, h),
                      v = $r(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((gh = !!sp), (cp = sp = null));
          } finally {
            ((W = a), (E.p = i), (T.T = r));
          }
        }
        ((e.current = t), (X = 2));
      }
    }
    function cf() {
      if (X === 2) {
        X = 0;
        var e = bd,
          t = xd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = T.T), (T.T = null));
          var r = E.p;
          E.p = 2;
          var i = W;
          W |= 4;
          try {
            vu(e, t.alternate, t);
          } finally {
            ((W = i), (E.p = r), (T.T = n));
          }
        }
        X = 3;
      }
    }
    function lf() {
      if (X === 4 || X === 3) {
        X = 0;
        var e = Ed;
        ((Ed = null), Xe());
        var t = bd,
          n = xd,
          r = Sd,
          i = Td,
          a = (r & 335544064) === r ? 10262 : 10256;
        if (
          ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
            ? (X = 5)
            : ((X = 0), (xd = bd = null), uf(t, t.pendingLanes)),
          (a = t.pendingLanes),
          a === 0 && (yd = null),
          k(r),
          (n = n.stateNode),
          st && typeof st.onCommitFiberRoot == `function`)
        )
          try {
            st.onCommitFiberRoot(ot, n, void 0, (n.current.flags & 128) == 128);
          } catch {}
        if (i !== null) {
          ((n = T.T), (a = E.p), (E.p = 2), (T.T = null));
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, { componentStack: c.stack });
            }
          } finally {
            ((T.T = n), (E.p = a));
          }
        }
        if (((i = Dd), (o = Od), (Od = null), i !== null && ((Dd = null), o === null && (o = []), e !== null)))
          for (c = 0; c < i.length; c++) ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
        (Sd & 3 && df(),
          Ef(t),
          (a = t.pendingLanes),
          r & 261930 && a & 42 ? (t === Ad ? kd++ : ((kd = 0), (Ad = t))) : ((kd = 0), (Ad = null)),
          Df(0, !1));
      }
    }
    function uf(e, t) {
      (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), za(t)));
    }
    function df() {
      return (Ed !== null && (Ed.skipTransition(), (Ed = null)), sf(), cf(), lf(), ff());
    }
    function ff() {
      if (X !== 5) return !1;
      var e = bd,
        t = Cd;
      Cd = 0;
      var n = k(Sd),
        r = T.T,
        a = E.p;
      try {
        ((E.p = 32 > n ? 32 : n), (T.T = null), (n = wd), (wd = null));
        var o = bd,
          s = Sd;
        if (((X = 0), (xd = bd = null), (Sd = 0), W & 6)) throw Error(i(331));
        var c = W;
        if (
          ((W |= 4),
          Zu(o.current),
          Uu(o, o.current, s, n),
          (W = c),
          Df(0, !1),
          st && typeof st.onPostCommitFiberRoot == `function`)
        )
          try {
            st.onPostCommitFiberRoot(ot, o);
          } catch {}
        return !0;
      } finally {
        ((E.p = a), (T.T = r), uf(e, t));
      }
    }
    function pf(e, t, n) {
      ((t = Xi(n, t)), (t = Mc(e.stateNode, t, 2)), (e = wo(e, t, 2)), e !== null && (Ct(e, 2), Ef(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) pf(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            pf(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (yd === null || !yd.has(r)))
            ) {
              ((e = Xi(n, e)), (n = Nc(2)), (r = wo(t, n, 2)), r !== null && (Pc(n, r, t, e), Ct(r, 2), Ef(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new td();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((ad = !0), i.add(n), (e = hf.bind(null, e, t, n)), t.then(e, e));
    }
    function hf(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        G === e &&
          (q & n) === n &&
          (Y === 4 || (Y === 3 && (q & 62914560) === q && 300 > Ze() - hd) ? (W & 2 ? (ld |= n) : Vd(e, 0)) : (ld |= n),
          dd === q && (dd = 0)),
        Ef(e));
    }
    function gf(e, t) {
      (t === 0 && (t = xt()), (e = Fi(e, t)), e !== null && (Ct(e, t), Ef(e)));
    }
    function _f(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), gf(e, n));
    }
    function vf(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), gf(e, n));
    }
    function yf(e, t) {
      return qe(e, t);
    }
    var bf = null,
      xf = null,
      Sf = !1,
      Cf = !1,
      wf = !1,
      Tf = 0;
    function Ef(e) {
      (e !== xf && e.next === null && (xf === null ? (bf = xf = e) : (xf = xf.next = e)),
        (Cf = !0),
        Sf || ((Sf = !0), Nf()));
    }
    function Df(e, t) {
      if (!wf && Cf) {
        wf = !0;
        do
          for (var n = !1, r = bf; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - lt(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), Mf(r, a));
              } else
                ((a = q),
                  (a = _t(r, r === G ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1)),
                  !(a & 3) || vt(r, a) || ((n = !0), Mf(r, a)));
            }
            r = r.next;
          }
        while (n);
        wf = !1;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = !1;
      var e = 0;
      Tf !== 0 && hp() && (e = Tf);
      for (var t = Ze(), n = null, r = bf; r !== null;) {
        var i = r.next,
          a = Af(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (bf = i) : (n.next = i), i === null && (xf = n))
          : ((n = r), (e !== 0 || a & 3) && (Cf = !0)),
          (r = i));
      }
      ((X !== 0 && X !== 5) || Df(e, !1), Tf !== 0 && (Tf = 0));
    }
    function Af(e, t) {
      for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
        var o = 31 - lt(a),
          s = 1 << o,
          c = i[o];
        (c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = bt(s, t)) : c <= t && (e.expiredLanes |= s), (a &= ~s));
      }
      if (
        ((t = G),
        (n = q),
        (n = _t(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (J === 2 || J === 9)) || e.cancelPendingCommit !== null)
      )
        return (r !== null && r !== null && Je(r), (e.callbackNode = null), (e.callbackPriority = 0));
      if (!(n & 3) || vt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Je(r), k(n))) {
          case 2:
          case 8:
            n = et;
            break;
          case 32:
            n = tt;
            break;
          case 268435456:
            n = rt;
            break;
          default:
            n = tt;
        }
        return ((r = jf.bind(null, e)), (n = qe(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
      }
      return (r !== null && r !== null && Je(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function jf(e, t) {
      if (X !== 0 && X !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (df() && e.callbackNode !== n) return null;
      var r = q;
      return (
        (r = _t(e, e === G ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (Fd(e, r, t), Af(e, Ze()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null)
      );
    }
    function Mf(e, t) {
      if (df()) return null;
      Fd(e, t, !0);
    }
    function Nf() {
      bp(function () {
        W & 6 ? qe($e, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e = Ga;
        (e === 0 && ((e = pt), (pt <<= 1), !(pt & 261888) && (pt = 256)), (Tf = e));
      }
      return Tf;
    }
    function Ff(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : Tn(e);
    }
    function If(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Ff((i[Mt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[Mt] || null) ? Ff(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new qn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (Tf !== 0) {
                    var e = new FormData(i, o);
                    ic(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = new FormData(i, o)),
                    ic(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var Lf = 0; Lf < Si.length; Lf++) {
      var Rf = Si[Lf];
      Ci(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    (Ci(mi, `onAnimationEnd`),
      Ci(hi, `onAnimationIteration`),
      Ci(gi, `onAnimationStart`),
      Ci(`dblclick`, `onDoubleClick`),
      Ci(`focusin`, `onFocus`),
      Ci(`focusout`, `onBlur`),
      Ci(_i, `onTransitionRun`),
      Ci(vi, `onTransitionStart`),
      Ci(yi, `onTransitionCancel`),
      Ci(bi, `onTransitionEnd`),
      Yt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Yt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Yt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Yt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Jt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
      Jt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),
      Jt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Jt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Jt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
      Jt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)));
    var zf =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
    function Vf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Oi(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Oi(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[Pt];
      n === void 0 && (n = t[Pt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Gf(t, e, 2, !1), n.add(r));
    }
    function Hf(e, t, n) {
      var r = 0;
      (t && (r |= 4), Gf(n, e, r, t));
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e) {
      if (!e[Uf]) {
        ((e[Uf] = !0),
          Kt.forEach(function (t) {
            t !== `selectionchange` && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Uf] || ((t[Uf] = !0), Hf(`selectionchange`, !1, t));
      }
    }
    function Gf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !In || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Kf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Vt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      Nn(function () {
        var r = a,
          i = On(n),
          s = [];
        a: {
          var c = xi.get(e);
          if (c !== void 0) {
            var l = qn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Hn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = dr;
                break;
              case `focusin`:
                ((u = `focus`), (l = nr));
                break;
              case `focusout`:
                ((u = `blur`), (l = nr));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = nr;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = er;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = tr;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = mr;
                break;
              case mi:
              case hi:
              case gi:
                l = rr;
                break;
              case bi:
                l = hr;
                break;
              case `scroll`:
              case `scrollend`:
                l = Yn;
                break;
              case `wheel`:
                l = gr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = ir;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = fr;
                break;
              case `submit`:
                l = pr;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = _r;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = Pn(m, p)), g != null && d.push(qf(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((l = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              l && n !== Dn && (u = n.relatedTarget || n.fromElement) && (Vt(u) || u[Nt]))
            )
              break a;
            (c || l) &&
              ((u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Vt(l) : null),
                  l !== null && ((f = o(l)), (d = l.tag), l !== f || (d !== 5 && d !== 27 && d !== 6)) && (l = null))
                : ((c = null), (l = r)),
              c !== l &&
                ((d = er),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = fr), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = c == null ? u : Ht(c)),
                (h = l == null ? u : Ht(l)),
                (u = new d(g, m + `leave`, c, n, i)),
                (u.target = f),
                (u.relatedTarget = h),
                (g = null),
                Vt(i) === r && ((d = new d(p, m + `enter`, l, n, i)), (d.target = h), (d.relatedTarget = f), (g = d)),
                (f = g),
                (d = c && l ? re(c, l, Yf) : null),
                c !== null && Xf(s, u, c, d, !1),
                l !== null && f !== null && Xf(s, f, l, d, !0)));
          }
          a: {
            if (
              ((c = r ? Ht(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = Lr;
            else if (jr(c)) {
              if (Rr) _ = qr;
              else {
                _ = Gr;
                var v = Wr;
              }
            } else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Sn(r.elementType) && (_ = Lr)
                  : (_ = Kr));
            if ((_ &&= _(e, r))) {
              Mr(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (((v = r ? Ht(r) : window), e)) {
            case `focusin`:
              (jr(v) || v.contentEditable === `true`) && ((ii = v), (ai = r), (oi = null));
              break;
            case `focusout`:
              oi = ai = ii = null;
              break;
            case `mousedown`:
              si = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((si = !1), ci(s, n, i));
              break;
            case `selectionchange`:
              if (ri) break;
            case `keydown`:
            case `keyup`:
              ci(s, n, i);
          }
          var y;
          if (yr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            Dr
              ? Tr(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (b = `onCompositionStart`);
          (b &&
            (Sr &&
              n.locale !== `ko` &&
              (Dr || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && Dr && (y = Vn())
                : ((Rn = i), (zn = `value` in Rn ? Rn.value : Rn.textContent), (Dr = !0))),
            (v = Jf(r, b)),
            0 < v.length &&
              ((b = new ar(b, e, null, n, i)),
              s.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = Er(n)), y !== null && (b.data = y)))),
            (y = xr ? Or(e, n) : kr(e, n)) &&
              ((b = Jf(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new ar(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: v, listeners: b }),
                (v.data = y))),
            If(s, e, r, n, i));
        }
        Vf(s, t);
      });
    }
    function qf(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Jf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = Pn(e, n)), i != null && r.unshift(qf(e, i, a)), (i = Pn(e, t)), i != null && r.push(qf(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Yf(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = Pn(n, a)), l != null && o.unshift(qf(n, l, c)))
            : i || ((l = Pn(n, a)), l != null && o.push(qf(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Zf = /\r\n?/g,
      Qf = /\u0000|\uFFFD/g;
    function $f(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Zf,
          `
`,
        )
        .replace(Qf, ``);
    }
    function ep(e, t) {
      return ((t = $f(t)), $f(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`) t === `body` || (t === `textarea` && r === ``) || vn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) t !== `body` && vn(e, `` + r);
          else return;
          break;
        case `className`:
          nn(e, `class`, r);
          break;
        case `tabIndex`:
          nn(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          nn(e, n, r);
          break;
        case `style`:
          xn(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            nn(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (
            (r === `` && (t !== `a` || n !== `href`)) ||
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Tn(r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Tn(r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = En);
          return;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Tn(r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), tn(e, `popover`, r));
          break;
        case `xlinkActuate`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          rn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          tn(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`))
            ((n = Cn.get(n) || n), tn(e, n, r));
          else return;
      }
      j = !0;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          xn(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) vn(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) vn(e, `` + r);
          else return;
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = En);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!qt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (o = n.slice(2, a ? n.length - 7 : void 0)),
                (t = e[Mt] || null),
                (t = t == null ? null : t[n]),
                typeof t == `function` && e.removeEventListener(o, t, a),
                typeof r == `function`)
              ) {
                (typeof t != `function` &&
                  t !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(o, r, a));
                break a;
              }
              ((j = !0), n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : tn(e, n, r));
            }
          return;
      }
      j = !0;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          pn(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o), (n = s), (e.multiple = !!r), t == null ? n != null && hn(e, !!r, n, !0) : hn(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          _n(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < zf.length; r++) Q(zf[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (Sn(t)) {
            for (d in n) n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  (m !== f && (j = !0), (o = m));
                  break;
                case `name`:
                  (m !== f && (j = !0), (a = m));
                  break;
                case `checked`:
                  (m !== f && (j = !0), (u = m));
                  break;
                case `defaultChecked`:
                  (m !== f && (j = !0), (d = m));
                  break;
                case `value`:
                  (m !== f && (j = !0), (s = m));
                  break;
                case `defaultValue`:
                  (m !== f && (j = !0), (c = m));
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          fn(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (((o = r[a]), (l = n[a]), r.hasOwnProperty(a) && (o != null || l != null)))
              switch (a) {
                case `value`:
                  (o !== l && (j = !0), (p = o));
                  break;
                case `defaultValue`:
                  (o !== l && (j = !0), (c = o));
                  break;
                case `multiple`:
                  (o !== l && (j = !0), (s = o));
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? hn(e, !!n, n ? [] : ``, !1) : hn(e, !!n, t, !0))
              : hn(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((a = n[c]), n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (a != null || o != null)))
              switch (s) {
                case `value`:
                  (a !== o && (j = !0), (p = a));
                  break;
                case `defaultValue`:
                  (a !== o && (j = !0), (m = a));
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          gn(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null)))
              switch (l) {
                case `selected`:
                  (p !== m && (j = !0), (e.selected = p && typeof p != `function` && typeof p != `symbol`));
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]), n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p));
          for (u in r)
            if (((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null)))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (Sn(t)) {
            for (var _ in n)
              ((p = n[_]), n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) || p === m || (p === void 0 && m === void 0) || tp(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n) ((p = n[v]), n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]), (m = n[f]), !r.hasOwnProperty(f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m));
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && ap(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`) ? e : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return ((n = lp(n).createElement(e)), (n[jt] = r), (n[Mt] = t), np(n, e, t), Wt(n), n);
    }
    function pp(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== mp && ((mp = e), !0) : ((mp = null), !1);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0,
      _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
      vp = typeof Promise == `function` ? Promise : void 0,
      yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : vp === void 0
            ? gp
            : function (e) {
                return vp.resolve(null).then(e).catch(xp);
              };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Hh(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) _m(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _m(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[Rt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _m(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``)) : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (
        ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
        (e.style.viewTransitionName = t),
        n != null && (e.style.viewTransitionClass = n),
        (n = getComputedStyle(e)),
        n.display === `inline`)
      ) {
        if (((t = e.getClientRects()), t.length === 1)) var r = 1;
        else
          for (var i = (r = 0); i < t.length; i++) {
            var a = t[i];
            0 < a.width && 0 < a.height && r++;
          }
        r === 1 &&
          ((e = e.style),
          (e.display = t.length === 1 ? `inline-block` : `block`),
          (e.marginTop = `-` + n.paddingTop),
          (e.marginBottom = `-` + n.paddingBottom));
      }
    }
    function Ep(e, t) {
      ((e = e.style), (t = t.style));
      var n =
        t == null
          ? null
          : t.hasOwnProperty(`viewTransitionName`)
            ? t.viewTransitionName
            : t.hasOwnProperty(`view-transition-name`)
              ? t[`view-transition-name`]
              : null;
      ((e.viewTransitionName = n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        (n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionClass`)
              ? t.viewTransitionClass
              : t.hasOwnProperty(`view-transition-class`)
                ? t[`view-transition-class`]
                : null),
        (e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        e.display === `inline-block` &&
          (t == null
            ? (e.display = e.margin = ``)
            : ((n = t.display),
              (e.display = n == null || typeof n == `boolean` ? `` : n),
              (n = t.margin),
              n == null
                ? ((n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`]),
                  (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                  (t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`]),
                  (e.marginBottom = t == null || typeof t == `boolean` ? `` : t))
                : (e.margin = n))));
    }
    function Dp(e, t, n) {
      return (
        (n = n.ownerDocument.defaultView),
        {
          rect: e,
          abs: t.position === `absolute` || t.position === `fixed`,
          clip:
            t.clipPath !== `none` ||
            t.overflow !== `visible` ||
            t.filter !== `none` ||
            t.mask !== `none` ||
            t.mask !== `none` ||
            t.borderRadius !== `0px`,
          view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth,
        }
      );
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (
              (o === `loaded` && (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
              (o = s.length),
              e !== null)
            )
              for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
                var f = c[d];
                if (!f.complete) {
                  var p = f.getBoundingClientRect();
                  if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
                    if (((u += Xm(f)), u > $m)) {
                      s.length = o;
                      break;
                    }
                    ((f = new Promise(jp.bind(f))), s.push(f));
                  }
                }
              }
            if (0 < s.length)
              return (
                (t = Promise.race([
                  Promise.all(s),
                  new Promise(function (e) {
                    return setTimeout(e, 500);
                  }),
                ]).then(i, i)),
                (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
              );
            if ((i(), n)) return n.finished.then(a, a);
            a();
          },
          types: n,
        });
        l.__reactViewTransition = u;
        var d = [];
        return (
          u.ready.then(
            function () {
              for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
                var n = e[t],
                  r = n.effect,
                  i = r.pseudoElement;
                if (i != null && i.startsWith(`::view-transition`)) {
                  (d.push(n), (n = r.getKeyframes()));
                  for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                    var u = n[c],
                      f = u.width;
                    if (i === void 0) i = f;
                    else if (i !== f) {
                      s = !1;
                      break;
                    }
                    if (((f = u.height), a === void 0)) a = f;
                    else if (a !== f) {
                      s = !1;
                      break;
                    }
                    (delete u.width, delete u.height, u.transform === `none` && delete u.transform);
                  }
                  s &&
                    i !== void 0 &&
                    a !== void 0 &&
                    (r.setKeyframes(n),
                    (s = getComputedStyle(r.target, r.pseudoElement)),
                    s.width !== i || s.height !== a) &&
                    ((s = n[0]),
                    (s.width = i),
                    (s.height = a),
                    (s = n[n.length - 1]),
                    (s.width = i),
                    (s.height = a),
                    r.setKeyframes(n));
                }
              }
              o();
            },
            function (e) {
              l.__reactViewTransition === u && (l.__reactViewTransition = null);
              try {
                if (typeof e == `object` && e)
                  switch (e.name) {
                    case `InvalidStateError`:
                      (e.message === `View transition was skipped because document visibility state is hidden.` ||
                        e.message === `Skipping view transition because document visibility state has become hidden.` ||
                        e.message === `Skipping view transition because viewport size changed.` ||
                        e.message === `Transition was aborted because of invalid state`) &&
                        (e = null);
                  }
                e !== null && c(e);
              } finally {
                (r(), i(), o());
              }
            },
          ),
          u.finished.finally(function () {
            for (var e = 0; e < d.length; e++) d[e].cancel();
            (l.__reactViewTransition === u && (l.__reactViewTransition = null), s());
          }),
          u
        );
      } catch {
        return (r(), i(), o(), null);
      }
    }
    function Np(e, t) {
      ((this._scope = document.documentElement), (this._selector = `::view-transition-` + e + `(` + t + `)`));
    }
    ((Np.prototype.animate = function (e, t) {
      return (
        (t = typeof t == `number` ? { duration: t } : C({}, t)),
        (t.pseudoElement = this._selector),
        this._scope.animate(e, t)
      );
    }),
      (Np.prototype.getAnimations = function () {
        for (
          var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].effect;
          a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
        }
        return r;
      }),
      (Np.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector);
      }));
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e),
      };
    }
    function Fp(e) {
      ((this._fragmentFiber = e), (this._observers = this._eventListeners = null));
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (!(n != null && typeof n != `boolean` && ((r = n.signal || null), r !== null && r.aborted))) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          (n != null &&
            typeof n != `boolean` &&
            !0 === n.once &&
            (s = function (r) {
              (o.removeEventListener(e, t, n), typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
            }),
            r !== null &&
              ((i = o.removeEventListener.bind(o, e, t, n)),
              r.addEventListener(`abort`, i, { once: !0 }),
              (i = r.removeEventListener.bind(r, `abort`, i))),
            (r = Rp(n)),
            a.push({ type: e, listener: t, optionsOrUseCapture: n, attachedListener: s, cleanup: i }),
            h(this._fragmentFiber.child, !1, Ip, e, s, r));
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return (b(e).addEventListener(t, n, r), !1);
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        ((i = Rp(i.optionsOrUseCapture)),
          h(this._fragmentFiber.child, !1, Lp, e, n, i),
          r.splice(t, 1),
          a !== null && a());
      }
    };
    function Lp(e, t, n, r) {
      return (b(e).removeEventListener(t, n, r), !1);
    }
    function Rp(e) {
      return e != null && typeof e != `boolean` && (!0 === e.once || e.signal instanceof AbortSignal)
        ? { capture: e.capture, passive: e.passive }
        : e;
    }
    function zp(e) {
      return e == null ? `c=0` : typeof e == `boolean` ? `c=` + (e ? `1` : `0`) : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
      }
      return -1;
    }
    ((Fp.prototype.dispatchEvent = function (e) {
      var t = g(this._fragmentFiber);
      if (t === null) return !0;
      t = b(t);
      var n = this._eventListeners;
      if ((n !== null && 0 < n.length) || !e.bubbles) {
        var r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
          }
        if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
          for (i = 0; i < n.length; i++)
            ((a = n[i]), r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture)));
        return (t.removeChild(r), e);
      }
      return t.dispatchEvent(e);
    }),
      (Fp.prototype.focus = function (e) {
        h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
      }));
    function Vp(e, t) {
      return e.tag !== 6 && ((e = b(e)), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return (t.push(e), !1);
    }
    Fp.prototype.blur = function () {
      var e = g(this._fragmentFiber);
      e !== null &&
        ((e = b(e)), (e = lp(e).activeElement), e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
    };
    function Up(e, t) {
      return e.tag !== 6 && ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
    }
    Fp.prototype.observeUsing = function (e) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(e),
        h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
    };
    function Wp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.observe(e)), !1);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        (t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
        for (var n = (t = 0); n < Kp.length; n++) {
          var r = Kp[n];
          r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : (Kp[t++] = r);
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return (e.tag === 6 || ((e = b(e)), t.unobserve(e)), !1);
    }
    var Kp = [],
      qp = !1;
    function Jp(e, t, n) {
      (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
        qp ||
          ((qp = !0),
          mm(function () {
            qp = !1;
            var e = Kp;
            Kp = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.observer.unobserve(n.instance);
            }
          })));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return (h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
      } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
      return !1;
    }
    ((Fp.prototype.getRootNode = function (e) {
      var t = g(this._fragmentFiber);
      return t === null ? this : b(t).getRootNode(e);
    }),
      (Fp.prototype.compareDocumentPosition = function (e) {
        var t = g(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
        var r = b(t);
        if (n.length === 0) {
          if (((n = r), _(this._fragmentFiber))) {
            a: {
              for (t = this._fragmentFiber.return; t !== null;) {
                if (t.tag === 4) {
                  t = t.stateNode.containerInfo;
                  break a;
                }
                if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                t = t.return;
              }
              t = null;
            }
            t != null && (n = t);
          }
          t = this._fragmentFiber;
          var i = (r = n.compareDocumentPosition(e));
          return (
            n === e
              ? (i = Node.DOCUMENT_POSITION_CONTAINS)
              : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                ((n = v(t)[1]),
                n === null
                  ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                  : ((e = b(n).compareDocumentPosition(e)),
                    (i =
                      e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                        ? Node.DOCUMENT_POSITION_FOLLOWING
                        : Node.DOCUMENT_POSITION_PRECEDING))),
            (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          );
        }
        ((t = b(n[0])), (i = b(n[n.length - 1])));
        var a = _(this._fragmentFiber) ? t.parentElement : r;
        if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        ((r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
          (a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY));
        var o = t.compareDocumentPosition(e),
          s = i.compareDocumentPosition(e),
          c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return (
          (s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING),
          (t =
            (r && t === e) || (a && i === e) || c || s
              ? Node.DOCUMENT_POSITION_CONTAINED_BY
              : (!r && t === e) || (!a && i === e)
                ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                : o),
          t & Node.DOCUMENT_POSITION_DISCONNECTED ||
          t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
          Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
            ? t
            : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        );
      }));
    function Xp(e, t, n, r, i) {
      var a = Vt(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((n = !!a))
          a: {
            for (; a !== null;) {
              if (a.tag === 7 && (a === t || a.alternate === t)) {
                n = !0;
                break a;
              }
              a = a.return;
            }
            n = !1;
          }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null) return ((a = i.ownerDocument), i === a || i === a.documentElement || i === a.body);
        a: {
          for (a = t, t = g(t); a !== null;) {
            if (!((a.tag !== 5 && a.tag !== 3 && a.tag !== 27) || (a !== t && a.alternate !== t))) {
              a = !0;
              break a;
            }
            a = a.return;
          }
          a = !1;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING
        ? ((t = !!a) &&
            !(t = a === n) &&
            ((t = re(n, a, S)), t === null ? (t = !1) : (h(t, !0, x, a, n), (a = ee), (ee = null), (t = a !== null))),
          t)
        : e & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((t = !!a) &&
              !(t = a === r) &&
              ((t = re(r, a, S)),
              t === null ? (t = !1) : (h(t, !0, ne, a, r), (a = ee), (te = ee = null), (t = a !== null))),
            t)
          : !1;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e),
        (e = n.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + e.left,
          t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight,
        ));
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
      var n = !1 !== e;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        if (((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]), r === null)) return;
        if (r.tag === 6) {
          ((e = b(r)), Zp(e, n));
          return;
        }
        if (((r = b(r)), r.nodeType !== 9)) {
          if (r.nodeType === 11) {
            ((n = `host` in r ? r.host : null), n !== null && n.scrollIntoView(e));
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var a = t[r];
        (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e), (r += n ? -1 : 1));
      }
    };
    function Qp(e, t) {
      return ((e = b(e)), $p(e, t), !1);
    }
    function $p(e, t) {
      ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            for (var r = 0, i = 0; i < Kp.length; i++) {
              var a = Kp[i];
              (a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
            }
            ((Kp.length = r), n.observe(e));
          }),
        $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
          }),
        e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nm(n), Bt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[Rt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = lm(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data), t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = !0;
      }
      if (e.ownerDocument.activeElement === e) return !0;
      var r = !1;
      try {
        (e.ownerDocument.addEventListener(`focus`, n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t));
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, !0);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (((t = lp(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
      }
      (n.dangerouslySetInnerHTML != null && (e.textContent = ``), e.onclick === En && (e.onclick = null), Bt(e));
    }
    function _m(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Bt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = E.d;
    E.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e = xm.f(),
        t = zd();
      return e || t;
    }
    function Cm(e) {
      var t = A(e);
      t !== null && t.tag === 5 && t.type === `form` ? oc(t) : xm.r(e);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = dn(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          ym.has(i) ||
            (ym.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), np(t, `link`, e), Wt(t), r.head.appendChild(t))));
      }
    }
    function Em(e) {
      (xm.D(e), Tm(`dns-prefetch`, e, null));
    }
    function Dm(e, t) {
      (xm.C(e, t), Tm(`preconnect`, e, t));
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + dn(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + dn(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + dn(n.imageSizes) + `"]`))
          : (i += `[href="` + dn(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (!(
          vm.has(a) ||
          ((e = C({ rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
          vm.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Fm(a))) ||
            (t === `script` && r.querySelector(zm(a))))
        )) {
          var o = r.createElement(`link`);
          (np(o, `link`, e),
            t === `style` &&
              ((o[zt] = !0),
              (o.onload = o.onerror =
                function () {
                  Gt(o);
                })),
            Wt(o),
            r.head.appendChild(o));
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + dn(r) + `"][href="` + dn(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (!vm.has(a) && ((e = C({ rel: `modulepreload`, href: e }, t)), vm.set(a, e), n.querySelector(i) === null)) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          ((r = n.createElement(`link`)), np(r, `link`, e), Wt(r), n.head.appendChild(r));
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Ut(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Fm(a)))) s.loading = 5;
          else {
            ((e = C({ rel: `stylesheet`, href: e, "data-precedence": t }, n)), (n = vm.get(a)) && Hm(e, n));
            var c = (o = r.createElement(`link`));
            (Wt(c),
              np(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vm(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Ut(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = C({ src: e, async: !0 }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Wt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Ut(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = C({ src: e, async: !0, type: `module` }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Wt(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = Ne.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((n = Pm(n.href)),
              (t = Ut(a).hoistableStyles),
              (r = t.get(n)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), t.set(n, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
            e = Pm(n.href);
            var o = Ut(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }),
                o.set(e, s),
                (o = a.querySelector(Fm(e)))
                  ? o._p || ((s.instance = o), (s.state.loading = 5))
                  : ((o = vm.get(e)),
                    o ||
                      ((o = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      vm.set(e, o)),
                    Lm(a, e, o, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((n = Rm(n)),
                (t = Ut(a).hoistableScripts),
                (r = t.get(n)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + dn(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return C({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lm(e, t, n, r) {
      if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
        if (!0 !== t[zt]) {
          r.loading = 1;
          return;
        }
      } else
        ((t = e.createElement(`link`)),
          (t[zt] = !0),
          (t.onload = t.onerror = Gt.bind(null, t)),
          np(t, `link`, n),
          Wt(t),
          e.head.appendChild(t));
      ((r.preload = t),
        t.addEventListener(`load`, function () {
          return (r.loading |= 1);
        }),
        t.addEventListener(`error`, function () {
          return (r.loading |= 2);
        }));
    }
    function Rm(e) {
      return `[src="` + dn(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + dn(n.href) + `"]`);
            if (r) return ((t.instance = r), Wt(r), r);
            var a = C({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Wt(r),
              np(r, `style`, a),
              Vm(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pm(n.href);
            var o = e.querySelector(Fm(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Wt(o), o);
            ((r = Im(n)), (a = vm.get(a)) && Hm(r, a), (o = (e.ownerDocument || e).createElement(`link`)), Wt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              np(o, `link`, r),
              (t.state.loading |= 4),
              Vm(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rm(n.src)),
              (a = e.querySelector(zm(o)))
                ? ((t.instance = a), Wt(a), a)
                : ((r = n),
                  (a = vm.get(o)) && ((r = C({}, n)), Um(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Wt(a),
                  np(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (
        var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      ((e.crossOrigin ??= t.crossOrigin), (e.referrerPolicy ??= t.referrerPolicy), (e.title ??= t.title));
    }
    function Um(e, t) {
      ((e.crossOrigin ??= t.crossOrigin), (e.referrerPolicy ??= t.referrerPolicy), (e.integrity ??= t.integrity));
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = (Wm = new Map());
        i.set(n, r);
      } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[Rt] || a[jt] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Km(e, t, n) {
      ((e = e.ownerDocument || e), e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jm(e, t) {
      return e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`;
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
    }
    function Zm(e, t) {
      typeof t.decode == `function` &&
        (e.imgCount++,
        t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
        (e = rh.bind(e)),
        t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` && t && typeof t.then == `function` && (e.count++, (e = nh.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Wt(a));
            return;
          }
          ((a = t.ownerDocument || t), (r = Im(r)), (i = vm.get(i)) && Hm(r, i), (a = a.createElement(`link`)), Wt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            np(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++, (n = nh.bind(e)), t.addEventListener(`load`, n), t.addEventListener(`error`, n)));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return (
        e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > $m ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);
        else if (e.unsuspend) {
          var t = e.unsuspend;
          ((e.unsuspend = null), t());
        }
      }
    }
    function nh() {
      (this.count--, th(this));
    }
    function rh() {
      (this.imgCount--, th(this));
    }
    var ih = null;
    function ah(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null && (e.count++, (ih = new Map()), t.forEach(oh, e), (ih = null), nh.call(e)));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ih.set(e, n));
          for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = nh.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var sh = { $$typeof: ue, Provider: null, Consumer: null, _currentValue: Ee, _currentValue2: Ee, _threadCount: 0 };
    function ch(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
        (this.callbackPriority = 0),
        (this.expirationTimes = St(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = St(0)),
        (this.hiddenUpdates = St(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ch(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = Bi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = Ra()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        xo(a),
        e
      );
    }
    function uh(e) {
      return e ? ((e = Ri), e) : Ri;
    }
    function dh(e, t, n, r, i, a) {
      ((i = uh(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Co(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = wo(e, r, t)),
        n !== null && (Pd(n, e, t), To(n, e, t)));
    }
    function fh(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      (fh(e, t), (e = e.alternate) && fh(e, t));
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Fi(e, 67108864);
        (t !== null && Pd(t, e, 67108864), ph(e, 67108864));
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = jd();
        t = Dt(t);
        var n = Fi(e, t);
        (n !== null && Pd(n, e, t), ph(e, t));
      }
    }
    var gh = !0;
    function _h(e, t, n, r) {
      var i = T.T;
      T.T = null;
      var a = E.p;
      try {
        ((E.p = 2), yh(e, t, n, r));
      } finally {
        ((E.p = a), (T.T = i));
      }
    }
    function vh(e, t, n, r) {
      var i = T.T;
      T.T = null;
      var a = E.p;
      try {
        ((E.p = 8), yh(e, t, n, r));
      } finally {
        ((E.p = a), (T.T = i));
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) (Kf(e, t, r, xh, n), Mh(e, r));
        else if (Ph(i, e, t, n, r)) r.stopPropagation();
        else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
          for (; i !== null;) {
            var a = A(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = gt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - lt(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Ef(a), !(W & 6) && ((_d = Ze() + 500), Df(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Fi(a, 2)), s !== null && Pd(s, a, 2), zd(), ph(a, 2));
              }
            if (((a = bh(r)), a === null && Kf(e, t, r, xh, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Kf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return ((e = On(e)), Sh(e));
    }
    var xh = null;
    function Sh(e) {
      if (((xh = null), (e = Vt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((xh = e), null);
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Qe()) {
            case $e:
              return 2;
            case et:
              return 8;
            case tt:
            case nt:
              return 32;
            case rt:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = !1,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
          t !== null && ((t = A(t)), t !== null && mh(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Th = Nh(Th, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Fh(e) {
      var t = Vt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                kt(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                kt(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Dn = r), n.target.dispatchEvent(r), (Dn = null));
        } else return ((t = A(n)), t !== null && mh(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      ((wh = !1),
        Th !== null && Ih(Th) && (Th = null),
        Eh !== null && Ih(Eh) && (Eh = null),
        Dh !== null && Ih(Dh) && (Dh = null),
        Oh.forEach(Lh),
        kh.forEach(Lh));
    }
    function zh(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null), wh || ((wh = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e &&
        ((Bh = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Bh === e && (Bh = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Sh(r || n) === null) continue;
              break;
            }
            var a = A(n);
            a !== null &&
              (e.splice(t, 3), (t -= 3), ic(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      (Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t));
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null);) (Fh(n), n.blockedOn === null && Ah.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[Mt] || null;
          if (typeof a == `function`) o || Vh(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[Mt] || null))) s = o.formAction;
              else if (Sh(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Vh(n));
          }
        }
    }
    function Uh() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, { state: e.getState(), info: `react-transition`, history: `replace` });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    ((Gh.prototype.render = Wh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        dh(n, jd(), e, t, null, null);
      }),
      (Gh.prototype.unmount = Wh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (dh(e.current, 2, null, e, null, null), zd(), (t[Nt] = null));
          }
        }));
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Ot();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        (Ah.splice(n, 0, e), n === 0 && Fh(e));
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.1`) throw Error(i(527, Kh, `19.3.1`));
    E.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function` ? Error(i(188)) : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return ((e = d(t)), (e = e === null ? null : p(e)), (e = e === null ? null : e.stateNode), e);
    };
    var qh = {
      bundleType: 0,
      version: `19.3.1`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: T,
      reconcilerVersion: `19.3.1`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber)
        try {
          ((ot = Jh.inject(qh)), (st = Jh));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Dc,
        s = Oc,
        c = kc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh)),
        (e[Nt] = t.current),
        Wf(e),
        new Wh(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`)
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u()),
  v = g();
m();
function y() {
  return (
    (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    y.apply(null, arguments)
  );
}
var b;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((b ||= {}));
var ee = `popstate`;
function te(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return C(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : ie(t);
  }
  return oe(t, n, null, e);
}
function x(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function ne(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function S() {
  return Math.random().toString(36).substr(2, 8);
}
function re(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function C(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    y({ pathname: typeof e == `string` ? e : e.pathname, search: ``, hash: `` }, typeof t == `string` ? ae(t) : t, {
      state: n,
      key: (t && t.key) || r || S(),
    })
  );
}
function ie(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function ae(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function oe(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = b.Pop,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState(y({}, o.state, { idx: l }), ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = b.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = b.Push;
    let r = C(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = re(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = b.Replace;
    let r = C(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = re(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d), a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : ie(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      x(t, `No window.location.(origin|href) available to create URL for href: ` + n),
      new URL(n, t)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(ee, d),
        (c = e),
        () => {
          (i.removeEventListener(ee, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
var w;
(function (e) {
  ((e.data = `data`), (e.deferred = `deferred`), (e.redirect = `redirect`), (e.error = `error`));
})((w ||= {}));
function se(e, t, n) {
  return (n === void 0 && (n = `/`), ce(e, t, n, !1));
}
function ce(e, t, n, r) {
  let i = Te((typeof t == `string` ? ae(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = le(e);
  de(a);
  let o = null,
    s = we(i);
  for (let e = 0; o == null && e < a.length; ++e) o = xe(a[e], s, r);
  return o;
}
function le(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (x(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = D([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (x(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` + (`all child routes from route path "` + s + `".`),
      ),
      le(e.children, t, c, s)),
      (e.path != null || e.index) && t.push({ path: s, score: ye(s, e.index), routesMeta: c }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of ue(e.path)) i(e, t, n);
    }),
    t
  );
}
function ue(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = ue(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function de(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? be(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var fe = /^:[\w-]+$/,
  pe = 3,
  me = 2,
  he = 1,
  ge = 10,
  _e = -2,
  ve = (e) => e === `*`;
function ye(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(ve) && (r += _e),
    t && (r += me),
    n.filter((e) => !ve(e)).reduce((e, t) => e + (fe.test(t) ? pe : t === `` ? he : ge), r)
  );
}
function be(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function xe(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = Se({ path: s.relativePath, caseSensitive: s.caseSensitive, end: c }, l),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Se({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, l)),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({ params: i, pathname: D([a, u.pathname]), pathnameBase: je(D([a, u.pathnameBase])), route: d }),
      u.pathnameBase !== `/` && (a = D([a, u.pathnameBase])));
  }
  return o;
}
function Se(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ce(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, t, n) => {
      let { paramName: r, isOptional: i } = t;
      if (r === `*`) {
        let e = s[n] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let c = s[n];
      return ((e[r] = i && !c ? void 0 : (c || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function Ce(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ne(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "` +
        e +
        `" will be treated as if it were ` +
        (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`),
    ));
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (r.push({ paramName: t, isOptional: n != null }), n ? `/?([^\\/]+)?` : `/([^\\/]+)`),
        );
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }), (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function we(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      ne(
        !1,
        `The URL path "` +
          e +
          `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` +
          (`encoding (` + t + `).`),
      ),
      e
    );
  }
}
function Te(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function T(e, t) {
  t === void 0 && (t = `/`);
  let { pathname: n, search: r = ``, hash: i = `` } = typeof e == `string` ? ae(e) : e,
    a;
  return (
    n ? ((n = Ae(n)), (a = n.startsWith(`/`) ? E(n.substring(1), `/`) : E(n, t))) : (a = t),
    { pathname: a, search: Me(r), hash: Ne(i) }
  );
}
function E(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Ee(e, t, n, r) {
  return (
    `Cannot include a '` +
    e +
    `' character in a manually specified ` +
    ("`to." + t + "` field [" + JSON.stringify(r) + `].  Please separate it out to the `) +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    `a string in <Link to="..."> and the router will parse it for you.`
  );
}
function De(e) {
  return e.filter((e, t) => t === 0 || (e.route.path && e.route.path.length > 0));
}
function Oe(e, t) {
  let n = De(e);
  return t ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e) => e.pathnameBase);
}
function ke(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == `string`
    ? (i = ae(e))
    : ((i = y({}, e)),
      x(!i.pathname || !i.pathname.includes(`?`), Ee(`?`, `pathname`, `search`, i)),
      x(!i.pathname || !i.pathname.includes(`#`), Ee(`#`, `pathname`, `hash`, i)),
      x(!i.search || !i.search.includes(`#`), Ee(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = T(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Ae = (e) => e.replace(/\/\/+/g, `/`),
  D = (e) => Ae(e.join(`/`)),
  je = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Me = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Ne = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e);
function Pe(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
var Fe = [`post`, `put`, `patch`, `delete`];
new Set(Fe);
var Ie = [`get`, ...Fe];
new Set(Ie);
function Le() {
  return (
    (Le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Le.apply(null, arguments)
  );
}
var Re = _.createContext(null),
  ze = _.createContext(null),
  Be = _.createContext(null),
  Ve = _.createContext(null),
  He = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ue = _.createContext(null);
function We() {
  return _.useContext(Ve) != null;
}
function Ge() {
  return (!We() && x(!1), _.useContext(Ve).location);
}
function Ke(e) {
  _.useContext(Be).static || _.useLayoutEffect(e);
}
function qe() {
  let { isDataRoute: e } = _.useContext(He);
  return e ? lt() : Je();
}
function Je() {
  !We() && x(!1);
  let e = _.useContext(Re),
    { basename: t, future: n, navigator: r } = _.useContext(Be),
    { matches: i } = _.useContext(He),
    { pathname: a } = Ge(),
    o = JSON.stringify(Oe(i, n.v7_relativeSplatPath)),
    s = _.useRef(!1);
  return (
    Ke(() => {
      s.current = !0;
    }),
    _.useCallback(
      function (n, i) {
        if ((i === void 0 && (i = {}), !s.current)) return;
        if (typeof n == `number`) {
          r.go(n);
          return;
        }
        let c = ke(n, JSON.parse(o), a, i.relative === `path`);
        (e == null && t !== `/` && (c.pathname = c.pathname === `/` ? t : D([t, c.pathname])),
          (i.replace ? r.replace : r.push)(c, i.state, i));
      },
      [t, r, o, a, e],
    )
  );
}
function Ye(e, t) {
  return Xe(e, t);
}
function Xe(e, t, n, r) {
  !We() && x(!1);
  let { navigator: i } = _.useContext(Be),
    { matches: a } = _.useContext(He),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = Ge(),
    u;
  if (t) {
    var d;
    let e = typeof t == `string` ? ae(t) : t;
    (!(c === `/` || ((d = e.pathname) != null && d.startsWith(c))) && x(!1), (u = e));
  } else u = l;
  let f = u.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = se(e, { pathname: p }),
    h = tt(
      m &&
        m.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: D([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : D([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && h
    ? _.createElement(
        Ve.Provider,
        {
          value: {
            location: Le({ pathname: `/`, search: ``, hash: ``, state: null, key: `default` }, u),
            navigationType: b.Pop,
          },
        },
        h,
      )
    : h;
}
function Ze() {
  let e = ct(),
    t = Pe(e) ? e.status + ` ` + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(`h2`, null, `Unexpected Application Error!`),
    _.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
    n ? _.createElement(`pre`, { style: { padding: `0.5rem`, backgroundColor: `rgba(200,200,200, 0.5)` } }, n) : null,
    null,
  );
}
var Qe = _.createElement(Ze, null),
  $e = class extends _.Component {
    constructor(e) {
      (super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(`React Router caught the following error during render`, e, t);
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : _.createElement(
            He.Provider,
            { value: this.props.routeContext },
            _.createElement(Ue.Provider, { value: this.state.error, children: this.props.component }),
          );
    }
  };
function et(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = _.useContext(Re);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(He.Provider, { value: t }, r)
  );
}
function tt(e, t, n, r) {
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let a = e,
    o = n?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (!(e >= 0) && x(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
        let { loaderData: e, errors: r } = n,
          i = t.route.loader && e[t.route.id] === void 0 && (!r || r[t.route.id] === void 0);
        if (t.route.lazy || i) {
          ((s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((e, r, i) => {
    let l,
      u = !1,
      d = null,
      f = null;
    n &&
      ((l = o && r.route.id ? o[r.route.id] : void 0),
      (d = r.route.errorElement || Qe),
      s &&
        (c < 0 && i === 0
          ? (dt(`route-fallback`, !1, "No `HydrateFallback` element provided to render during initial hydration"),
            (u = !0),
            (f = null))
          : c === i && ((u = !0), (f = r.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, i + 1)),
      m = () => {
        let t;
        return (
          (t = l
            ? d
            : u
              ? f
              : r.route.Component
                ? _.createElement(r.route.Component, null)
                : r.route.element
                  ? r.route.element
                  : e),
          _.createElement(et, {
            match: r,
            routeContext: { outlet: e, matches: p, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? _.createElement($e, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: l,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var nt = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      e
    );
  })(nt || {}),
  rt = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseLoaderData = `useLoaderData`),
      (e.UseActionData = `useActionData`),
      (e.UseRouteError = `useRouteError`),
      (e.UseNavigation = `useNavigation`),
      (e.UseRouteLoaderData = `useRouteLoaderData`),
      (e.UseMatches = `useMatches`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      (e.UseRouteId = `useRouteId`),
      e
    );
  })(rt || {});
function it(e) {
  let t = _.useContext(Re);
  return (!t && x(!1), t);
}
function at(e) {
  let t = _.useContext(ze);
  return (!t && x(!1), t);
}
function ot(e) {
  let t = _.useContext(He);
  return (!t && x(!1), t);
}
function st(e) {
  let t = ot(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && x(!1), n.route.id);
}
function ct() {
  let e = _.useContext(Ue),
    t = at(rt.UseRouteError),
    n = st(rt.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
function lt() {
  let { router: e } = it(nt.UseNavigateStable),
    t = st(rt.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Ke(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (r, i) {
        (i === void 0 && (i = {}),
          n.current && (typeof r == `number` ? e.navigate(r) : e.navigate(r, Le({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
var ut = {};
function dt(e, t, n) {
  !t && !ut[e] && (ut[e] = !0);
}
var ft = (e, t, n) => (
  `` + t + ("You can use the `" + e + "` future flag to opt-in early. ") + (`For more information, see ` + n + `.`),
  void 0
);
function pt(e, t) {
  (e?.v7_startTransition === void 0 &&
    ft(
      `v7_startTransition`,
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`,
    ),
    e?.v7_relativeSplatPath !== void 0 ||
      (t && t.v7_relativeSplatPath !== void 0) ||
      ft(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`,
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        ft(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`,
        ),
      t.v7_normalizeFormMethod === void 0 &&
        ft(
          `v7_normalizeFormMethod`,
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`,
        ),
      t.v7_partialHydration === void 0 &&
        ft(
          `v7_partialHydration`,
          "`RouterProvider` hydration behavior is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`,
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        ft(
          `v7_skipActionErrorRevalidation`,
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`,
        )));
}
function mt(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  !We() && x(!1);
  let { future: a, static: o } = _.useContext(Be),
    { matches: s } = _.useContext(He),
    { pathname: c } = Ge(),
    l = qe(),
    u = ke(t, Oe(s, a.v7_relativeSplatPath), c, i === `path`),
    d = JSON.stringify(u);
  return (_.useEffect(() => l(JSON.parse(d), { replace: n, state: r, relative: i }), [l, d, i, n, r]), null);
}
function ht(e) {
  x(!1);
}
function gt(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = b.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  We() && x(!1);
  let c = t.replace(/^\/*/, `/`),
    l = _.useMemo(
      () => ({ basename: c, navigator: a, static: o, future: Le({ v7_relativeSplatPath: !1 }, s) }),
      [c, s, a, o],
    );
  typeof r == `string` && (r = ae(r));
  let { pathname: u = `/`, search: d = ``, hash: f = ``, state: p = null, key: m = `default` } = r,
    h = _.useMemo(() => {
      let e = Te(u, c);
      return e == null ? null : { location: { pathname: e, search: d, hash: f, state: p, key: m }, navigationType: i };
    }, [c, u, d, f, p, m, i]);
  return h == null
    ? null
    : _.createElement(Be.Provider, { value: l }, _.createElement(Ve.Provider, { children: n, value: h }));
}
function _t(e) {
  let { children: t, location: n } = e;
  return Ye(yt(t), n);
}
var vt = (function (e) {
  return ((e[(e.pending = 0)] = `pending`), (e[(e.success = 1)] = `success`), (e[(e.error = 2)] = `error`), e);
})(vt || {});
(new Promise(() => {}), _.Component);
function yt(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    _.Children.forEach(e, (e, r) => {
      if (!_.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === _.Fragment) {
        n.push.apply(n, yt(e.props.children, i));
        return;
      }
      (e.type !== ht && x(!1), e.props.index && e.props.children && x(!1));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary: e.props.ErrorBoundary != null || e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = yt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var bt = `6`;
try {
  window.__reactRouterVersion = bt;
} catch {}
var xt = _.startTransition;
function St(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = _.useRef();
  a.current ??= te({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = _.useState({ action: o.action, location: o.location }),
    { v7_startTransition: l } = r || {},
    u = _.useCallback(
      (e) => {
        l && xt ? xt(() => c(e)) : c(e);
      },
      [c, l],
    );
  return (
    _.useLayoutEffect(() => o.listen(u), [o, u]),
    _.useEffect(() => pt(r), [r]),
    _.createElement(gt, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
typeof window < `u` && window.document !== void 0 && window.document.createElement;
var Ct;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Ct ||= {}));
var wt;
(function (e) {
  ((e.UseFetcher = `useFetcher`), (e.UseFetchers = `useFetchers`), (e.UseScrollRestoration = `useScrollRestoration`));
})((wt ||= {}));
var O = {
  get: (e, t) => {
    try {
      let n = localStorage.getItem(e);
      return n === null ? t : JSON.parse(n);
    } catch {
      return t;
    }
  },
  set: (e, t) => {
    try {
      localStorage.setItem(e, JSON.stringify(t));
    } catch {}
  },
};
function Tt() {
  let e = O.get(`emma_start_date`, null);
  if (!e) return 1;
  let t = Math.floor((Date.now() - new Date(e).getTime()) / 864e5) + 1,
    n = O.get(`emma_180_active`, !1) ? 180 : 90;
  return Math.min(Math.max(t, 1), n);
}
function Et() {
  let e = new Date().getHours();
  return e < 12 ? `Good Morning` : e < 17 ? `Good Afternoon` : `Good Evening`;
}
var Dt = o((e) => {
    var t = Symbol.for(`react.transitional.element`);
    function n(e, n, r) {
      var i = null;
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return ((n = r.ref), { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r });
    }
    ((e.jsx = n), (e.jsxs = n));
  }),
  k = o((e, t) => {
    t.exports = Dt();
  })();
function Ot() {
  let [e, t] = (0, _.useState)(``),
    n = qe();
  return (0, k.jsx)(`div`, {
    className: `flex flex-col items-center justify-center min-h-dvh bg-gradient-to-b from-[#E8F5EE] via-white to-[#F5F0E8] p-6`,
    children: (0, k.jsxs)(`div`, {
      className: `w-full max-w-sm text-center`,
      children: [
        (0, k.jsx)(`img`, {
          src: `/app/logo.png`,
          alt: `Emma`,
          className: `w-28 h-28 rounded-3xl mx-auto mb-6 shadow-lg animate-fade-in`,
        }),
        (0, k.jsx)(`h1`, {
          className: `text-2xl font-bold text-gray-900 mb-2 animate-fade-in delay-1`,
          children: `Welcome to Emma`,
        }),
        (0, k.jsx)(`p`, {
          className: `text-gray-400 mb-8 animate-fade-in delay-2`,
          children: `Enter the email you used to purchase`,
        }),
        (0, k.jsxs)(`form`, {
          onSubmit: (t) => {
            (t.preventDefault(), e.trim() && (O.set(`emma_email`, e.trim()), n(`/loading`)));
          },
          className: `w-full space-y-3.5 animate-fade-in delay-3`,
          children: [
            (0, k.jsx)(`input`, {
              type: `email`,
              value: e,
              onChange: (e) => t(e.target.value),
              placeholder: `your@email.com`,
              autoFocus: !0,
              className: `w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6B4A] focus:border-transparent bg-white text-center text-base`,
              required: !0,
            }),
            (0, k.jsx)(`button`, {
              type: `submit`,
              className: `w-full bg-[#1B6B4A] text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-[#1B6B4A]/20 active:bg-[#155a3d] text-base`,
              children: `Access My Protocol`,
            }),
          ],
        }),
        (0, k.jsx)(`p`, {
          className: `text-gray-300 text-sm mt-6 animate-fade-in delay-4`,
          children: `Your data stays private on your device`,
        }),
      ],
    }),
  });
}
var kt = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function At(e, t, n = []) {
  if (t == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
  return { name: kt(e), size: 24, node: t, ...(n.length > 0 ? { aliases: n } : {}) };
}
var jt = (e) => {
    let t = ``,
      n = !1;
    for (let r of e)
      r === `-` || r === `_` || r <= ` `
        ? (n = t.length > 0)
        : (t.length === 0 ? (t += r.toLowerCase()) : (t += n ? r.toUpperCase() : r), (n = !1));
    return t;
  },
  Mt = (e) => {
    let t = jt(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Nt = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Pt = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": 2,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
  };
function Ft(e) {
  return e != null;
}
function It(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? Pt.width,
    a = e.size ?? e.height ?? Pt.height,
    o = e.aliases?.filter((e) => typeof e == `string` && e.trim() !== ``).map((e) => `lucide-${e}`) ?? [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? Nt(...c) : Nt(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? Pt[`stroke-width`]) * Number(e.size ?? e.width ?? Pt.width)) /
        Number(t.size ?? t.width ?? Pt.width)
      : (t.strokeWidth ?? Pt[`stroke-width`]);
  return [
    `svg`,
    {
      ...Object.entries(Pt).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t && Ft(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && Ft(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && Ft(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i } : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
function Lt(e, t = {}) {
  return It(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: `className`,
      "stroke-width": `strokeWidth`,
      "stroke-linecap": `strokeLinecap`,
      "stroke-linejoin": `strokeLinejoin`,
      "vector-effect": `vectorEffect`,
    },
  });
}
var Rt = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  zt = (0, _.createContext)({}),
  Bt = () => (0, _.useContext)(zt),
  Vt = (0, _.forwardRef)(
    (
      {
        color: e,
        size: t,
        width: n,
        height: r,
        strokeWidth: i,
        absoluteStrokeWidth: a,
        nonScalingStroke: o,
        className: s = ``,
        children: c,
        iconNode: l = [],
        icon: u = { node: l, aliases: [], size: 24 },
        ...d
      },
      f,
    ) => {
      let {
          size: p = 24,
          strokeWidth: m = 2,
          absoluteStrokeWidth: h = !1,
          nonScalingStroke: g = !1,
          color: v = `currentColor`,
          className: y = ``,
        } = Bt() ?? {},
        b = !!c || Rt(d),
        [ee, te, x = []] = Lt(u, {
          color: e ?? v,
          width: n ?? t ?? p,
          height: r ?? t ?? p,
          strokeWidth: i ?? m,
          absoluteStrokeWidth: a ?? h,
          nonScalingStroke: o ?? g,
          className: Nt(y, s),
          hasA11yProp: b,
          attributes: d,
        });
      return (0, _.createElement)(ee, { ref: f, ...te }, [
        ...x.map(([e, t]) => (0, _.createElement)(e, t)),
        ...(Array.isArray(c) ? c : [c]),
      ]);
    },
  );
function A(e, t = [], n = []) {
  let r = typeof e == `string` ? At(e, t, n) : e,
    i = (0, _.forwardRef)(({ className: e, ...t }, n) =>
      (0, _.createElement)(Vt, { ref: n, icon: r, className: e, ...t }),
    );
  return (r.name && (i.displayName = Mt(r.name)), i);
}
var Ht = {
  name: `apple`,
  size: 24,
  node: [
    [`path`, { d: `M12 6.528V3a1 1 0 0 1 1-1h0`, key: `11qiee` }],
    [
      `path`,
      {
        d: `M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21`,
        key: `110c12`,
      },
    ],
  ],
};
Ht.node;
var Ut = A(Ht),
  Wt = {
    name: `bell`,
    size: 24,
    node: [
      [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
      [
        `path`,
        {
          d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
          key: `11g9vi`,
        },
      ],
    ],
  };
Wt.node;
var Gt = A(Wt),
  Kt = {
    name: `book-open`,
    size: 24,
    node: [
      [`path`, { d: `M12 5v16`, key: `1f6ucr` }],
      [
        `path`,
        {
          d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
          key: `1fyvmf`,
        },
      ],
    ],
  };
Kt.node;
var qt = A(Kt),
  Jt = {
    name: `brain`,
    size: 24,
    node: [
      [`path`, { d: `M12 18V5`, key: `adv99a` }],
      [`path`, { d: `M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4`, key: `5nuw1p` }],
      [`path`, { d: `M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294`, key: `18ldcf` }],
      [`path`, { d: `M17.996 5.125a4 4 0 012.526 5.77`, key: `1sdu8q` }],
      [`path`, { d: `M18 18a4 4 0 002-7.465`, key: `7xqqvr` }],
      [`path`, { d: `M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517`, key: `t46ysz` }],
      [`path`, { d: `M6 18a4 4 0 01-2-7.465`, key: `1y2m15` }],
      [`path`, { d: `M6.004 5.125a4 4 0 00-2.526 5.77`, key: `3cw1ss` }],
    ],
  };
Jt.node;
var Yt = A(Jt),
  Xt = {
    name: `chart-column`,
    size: 24,
    node: [
      [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
      [`path`, { d: `M18 17V9`, key: `2bz60n` }],
      [`path`, { d: `M13 17V5`, key: `1frdt8` }],
      [`path`, { d: `M8 17v-3`, key: `17ska0` }],
    ],
    aliases: [`bar-chart-3`],
  };
Xt.node;
var Zt = A(Xt),
  Qt = { name: `check`, size: 24, node: [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]] };
Qt.node;
var $t = A(Qt),
  j = { name: `chevron-down`, size: 24, node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]] };
j.node;
var en = A(j),
  tn = { name: `chevron-left`, size: 24, node: [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]] };
tn.node;
var nn = A(tn),
  rn = { name: `chevron-right`, size: 24, node: [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]] };
rn.node;
var an = A(rn),
  on = {
    name: `circle-question-mark`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`, key: `1u773s` }],
      [`path`, { d: `M12 17h.01`, key: `p32p05` }],
    ],
    aliases: [`help-circle`, `circle-help`],
  };
on.node;
var sn = A(on),
  cn = {
    name: `clipboard-check`,
    size: 24,
    node: [
      [`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }],
      [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`, key: `116196` }],
      [`path`, { d: `m9 14 2 2 4-4`, key: `df797q` }],
    ],
  };
cn.node;
var ln = A(cn),
  un = {
    name: `clock`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
    ],
  };
un.node;
var dn = A(un),
  fn = {
    name: `crown`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,
          key: `1vdc57`,
        },
      ],
      [`path`, { d: `M5 21h14`, key: `11awu3` }],
    ],
  };
fn.node;
var pn = A(fn),
  mn = {
    name: `droplets`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z`,
          key: `1ptgy4`,
        },
      ],
      [
        `path`,
        {
          d: `M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97`,
          key: `1sl1rz`,
        },
      ],
    ],
  };
mn.node;
var hn = A(mn),
  gn = {
    name: `flame`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,
          key: `1slcih`,
        },
      ],
    ],
  };
gn.node;
var _n = A(gn),
  vn = {
    name: `flask-conical`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,
          key: `18mbvz`,
        },
      ],
      [`path`, { d: `M6.453 15h11.094`, key: `3shlmq` }],
      [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
    ],
  };
vn.node;
var yn = A(vn),
  bn = {
    name: `house`,
    size: 24,
    node: [
      [`path`, { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` }],
      [
        `path`,
        {
          d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
          key: `r6nss1`,
        },
      ],
    ],
    aliases: [`home`],
  };
bn.node;
var xn = A(bn),
  Sn = {
    name: `loader-circle`,
    size: 24,
    node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
    aliases: [`loader-2`],
  };
Sn.node;
var Cn = A(Sn),
  wn = {
    name: `moon`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
          key: `kfwtm`,
        },
      ],
    ],
  };
wn.node;
var Tn = A(wn),
  _sd = { name: `shield`, size: 24, node: [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`, key: `oel41y` }]] };
_sd.node;
var _SI = A(_sd),
  En = {
    name: `rotate-ccw`,
    size: 24,
    node: [
      [`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }],
      [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
    ],
  };
En.node;
var Dn = A(En),
  On = {
    name: `save`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
          key: `1c8476`,
        },
      ],
      [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }],
      [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }],
    ],
  };
On.node;
var kn = A(On),
  An = {
    name: `shopping-cart`,
    size: 24,
    node: [
      [`path`, { d: `m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18`, key: `uebgi3` }],
      [`path`, { d: `M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25`, key: `1j7c9p` }],
      [`circle`, { cx: `18`, cy: `20`, r: `2`, key: `t9985n` }],
      [`circle`, { cx: `8`, cy: `20`, r: `2`, key: `ckkr5m` }],
    ],
  };
An.node;
var jn = A(An),
  Mn = {
    name: `sparkles`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
          key: `1s2grr`,
        },
      ],
      [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
      [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
      [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
    ],
    aliases: [`stars`],
  };
Mn.node;
var Nn = A(Mn),
  Pn = {
    name: `target`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`circle`, { cx: `12`, cy: `12`, r: `6`, key: `1vlfrh` }],
      [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
    ],
  };
Pn.node;
var Fn = A(Pn),
  In = {
    name: `timer`,
    size: 24,
    node: [
      [`line`, { x1: `10`, x2: `14`, y1: `2`, y2: `2`, key: `14vaq8` }],
      [`line`, { x1: `12`, x2: `15`, y1: `14`, y2: `11`, key: `17fdiu` }],
      [`circle`, { cx: `12`, cy: `14`, r: `8`, key: `1e1u0o` }],
    ],
  };
In.node;
var Ln = A(In),
  Rn = {
    name: `trophy`,
    size: 24,
    node: [
      [`path`, { d: `M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`, key: `pwuv1l` }],
      [`path`, { d: `M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`, key: `1y54w1` }],
      [`path`, { d: `M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`, key: `e30mpu` }],
      [`path`, { d: `M4 22h16`, key: `57wxv0` }],
      [`path`, { d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`, key: `1mhfuq` }],
      [`path`, { d: `M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`, key: `i0yafy` }],
    ],
  };
Rn.node;
var zn = A(Rn),
  Bn = {
    name: `utensils`,
    size: 24,
    node: [
      [`path`, { d: `M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2`, key: `cjf0a3` }],
      [`path`, { d: `M7 2v20`, key: `1473qp` }],
      [`path`, { d: `M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7`, key: `j28e5` }],
    ],
    aliases: [`fork-knife`],
  };
Bn.node;
var Vn = A(Bn),
  Hn = {
    name: `x`,
    size: 24,
    node: [
      [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
      [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
    ],
  };
Hn.node;
var Un = A(Hn),
  Wn = [
    `Verifying your access...`,
    `Loading your gut profile...`,
    `Preparing your personalized protocol...`,
    `You're all set!`,
  ];
function Gn() {
  let [e, t] = (0, _.useState)([]),
    n = qe();
  return (
    (0, _.useEffect)(() => {
      (Wn.forEach((e, n) => {
        setTimeout(() => t((e) => [...e, n]), (n + 1) * 1100);
      }),
        setTimeout(() => n(`/onboarding`, { replace: !0 }), 5200));
    }, []),
    (0, k.jsx)(`div`, {
      className: `min-h-dvh flex flex-col items-center justify-center px-6`,
      style: { background: `linear-gradient(180deg, #E8F5EE 0%, #FAFAF5 60%, #FFFFFF 100%)` },
      children: (0, k.jsxs)(`div`, {
        className: `w-full max-w-xs`,
        children: [
          (0, k.jsx)(`div`, {
            className: `flex justify-center mb-10`,
            children: (0, k.jsx)(`div`, {
              className: `w-14 h-14 rounded-full bg-[#1B6B4A] flex items-center justify-center shadow-md shadow-[#1B6B4A]/15`,
              children: (0, k.jsx)(Cn, { size: 24, className: `text-white animate-spin-slow` }),
            }),
          }),
          (0, k.jsx)(`div`, {
            className: `space-y-5`,
            children: Wn.map((t, n) => {
              let r = e.includes(n);
              return (0, k.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-3.5 transition-all duration-500 ${r ? `opacity-100` : `opacity-30`}`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-400 ${r ? `bg-[#2ECC71]` : `bg-[#E8E8E2]`}`,
                      children: r
                        ? (0, k.jsx)($t, { size: 14, className: `text-white animate-check` })
                        : (0, k.jsx)(Cn, { size: 12, className: `text-[#8B8B8B] animate-spin-slow` }),
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-[14px] ${r ? `text-[#1A1A1A] font-medium` : `text-[#8B8B8B]`}`,
                      children: t,
                    }),
                  ],
                },
                n,
              );
            }),
          }),
        ],
      }),
    })
  );
}
var Kn = [
  { id: `constipation`, emoji: `🔴`, label: `Chronic Constipation` },
  { id: `bloating`, emoji: `💨`, label: `Bloating & Gas` },
  { id: `irregular`, emoji: `🔄`, label: `Irregular Bowel Movements` },
  { id: `fatigue`, emoji: `😴`, label: `Fatigue & Brain Fog` },
  { id: `food`, emoji: `🍽️`, label: `Food Sensitivities` },
  { id: `heartburn`, emoji: `🔥`, label: `Heartburn / Acid Reflux` },
];
function qn({ onComplete: e }) {
  let [t, n] = (0, _.useState)(1),
    [r, i] = (0, _.useState)(``),
    [a, o] = (0, _.useState)(``),
    [s, c] = (0, _.useState)(``),
    [l, u] = (0, _.useState)(``),
    [d, f] = (0, _.useState)(`lbs`),
    [p, m] = (0, _.useState)([]),
    h = qe(),
    g = (e) => m((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-white flex flex-col px-6 pt-12 pb-8`,
    children: [
      (0, k.jsx)(`div`, {
        className: `flex gap-2 mb-10`,
        children: [1, 2, 3].map((e) =>
          (0, k.jsx)(
            `div`,
            {
              className: `h-1 flex-1 rounded-full transition-all duration-500 ${e <= t ? `bg-[#1B6B4A]` : `bg-[#F0F0EA]`}`,
            },
            e,
          ),
        ),
      }),
      t === 1 &&
        (0, k.jsxs)(
          `div`,
          {
            className: `flex-1 flex flex-col animate-fade-in`,
            children: [
              (0, k.jsx)(`h2`, {
                className: `text-[22px] font-bold text-[#1A1A1A] mb-1.5`,
                children: `Let's personalize your journey`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-sm text-[#8B8B8B] mb-8`,
                children: `First, what should we call you?`,
              }),
              (0, k.jsx)(`input`, {
                value: r,
                onChange: (e) => i(e.target.value),
                placeholder: `Your first name`,
                autoFocus: !0,
                className: `w-full px-4 py-3.5 rounded-xl border border-[#E8E8E2] bg-white text-[15px] text-[#1A1A1A] placeholder-[#C5C5BE] focus:border-[#1B6B4A] focus:ring-2 focus:ring-[#1B6B4A]/10 transition-all`,
              }),
              (0, k.jsx)(`div`, {
                className: `mt-auto pt-8`,
                children: (0, k.jsx)(`button`, {
                  onClick: () => r.trim() && n(2),
                  disabled: !r.trim(),
                  className: `w-full py-3.5 bg-[#1B6B4A] disabled:bg-[#E8E8E2] disabled:text-[#C5C5BE] text-white font-semibold rounded-xl text-[15px] transition-all active:scale-[0.98]`,
                  children: `Continue →`,
                }),
              }),
            ],
          },
          `s1`,
        ),
      t === 2 &&
        (0, k.jsxs)(
          `div`,
          {
            className: `flex-1 flex flex-col animate-fade-in`,
            children: [
              (0, k.jsx)(`h2`, {
                className: `text-[22px] font-bold text-[#1A1A1A] mb-1.5`,
                children: `About your body`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-sm text-[#8B8B8B] mb-8`,
                children: `This helps us calculate your personalized dosages and protocol.`,
              }),
              (0, k.jsxs)(`div`, {
                className: `mb-6`,
                children: [
                  (0, k.jsx)(`label`, {
                    className: `text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider mb-2 block`,
                    children: `Unit System`,
                  }),
                  (0, k.jsx)(`div`, {
                    className: `flex bg-[#F5F5EF] rounded-xl p-1 w-fit`,
                    children: [`lbs`, `kg`].map((e) =>
                      (0, k.jsx)(
                        `button`,
                        {
                          onClick: () => f(e),
                          className: `px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${d === e ? `bg-[#1B6B4A] text-white shadow-sm` : `text-[#8B8B8B]`}`,
                          children: e === `lbs` ? `lbs / oz` : `kg / ml`,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `mb-4`,
                children: [
                  (0, k.jsx)(`label`, {
                    className: `text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider mb-2 block`,
                    children: `Age`,
                  }),
                  (0, k.jsx)(`input`, {
                    type: `number`,
                    value: a,
                    onChange: (e) => o(e.target.value),
                    placeholder: `e.g. 48`,
                    className: `w-full px-4 py-3.5 rounded-xl border border-[#E8E8E2] bg-white text-[15px] text-[#1A1A1A] placeholder-[#C5C5BE] focus:border-[#1B6B4A] focus:ring-2 focus:ring-[#1B6B4A]/10 transition-all`,
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex gap-3 mb-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex-1`,
                    children: [
                      (0, k.jsxs)(`label`, {
                        className: `text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider mb-2 block`,
                        children: [`Current Weight (`, d, `)`],
                      }),
                      (0, k.jsx)(`input`, {
                        type: `number`,
                        value: s,
                        onChange: (e) => c(e.target.value),
                        placeholder: `e.g. 185`,
                        className: `w-full px-4 py-3.5 rounded-xl border border-[#E8E8E2] bg-white text-[15px] text-[#1A1A1A] placeholder-[#C5C5BE] focus:border-[#1B6B4A] focus:ring-2 focus:ring-[#1B6B4A]/10 transition-all`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex-1`,
                    children: [
                      (0, k.jsxs)(`label`, {
                        className: `text-[11px] font-semibold text-[#8B8B8B] uppercase tracking-wider mb-2 block`,
                        children: [`Goal Weight (`, d, `)`],
                      }),
                      (0, k.jsx)(`input`, {
                        type: `number`,
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: `e.g. 145`,
                        className: `w-full px-4 py-3.5 rounded-xl border border-[#E8E8E2] bg-white text-[15px] text-[#1A1A1A] placeholder-[#C5C5BE] focus:border-[#1B6B4A] focus:ring-2 focus:ring-[#1B6B4A]/10 transition-all`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `mt-auto pt-8 flex gap-3`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: () => n(1),
                    className: `px-6 py-3.5 text-[15px] font-medium text-[#8B8B8B] transition-all`,
                    children: `Back`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => a && s && n(3),
                    disabled: !a || !s,
                    className: `flex-1 py-3.5 bg-[#1B6B4A] disabled:bg-[#E8E8E2] disabled:text-[#C5C5BE] text-white font-semibold rounded-xl text-[15px] transition-all active:scale-[0.98]`,
                    children: `Continue →`,
                  }),
                ],
              }),
            ],
          },
          `s2`,
        ),
      t === 3 &&
        (0, k.jsxs)(
          `div`,
          {
            className: `flex-1 flex flex-col animate-fade-in`,
            children: [
              (0, k.jsx)(`h2`, { className: `text-[22px] font-bold text-[#1A1A1A] mb-1.5`, children: `Almost there!` }),
              (0, k.jsx)(`p`, {
                className: `text-sm text-[#8B8B8B] mb-6`,
                children: `Select anything that applies — this personalizes your daily tips.`,
              }),
              (0, k.jsx)(`div`, {
                className: `space-y-2.5 mb-4`,
                children: Kn.map((e) => {
                  let t = p.includes(e.id);
                  return (0, k.jsxs)(
                    `button`,
                    {
                      onClick: () => g(e.id),
                      className: `w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-[14px] transition-all ${t ? `border-[#1B6B4A] bg-[#1B6B4A]/4` : `border-[#F0F0EA] bg-white`}`,
                      children: [
                        (0, k.jsx)(`span`, { className: `text-base flex-shrink-0`, children: e.emoji }),
                        (0, k.jsx)(`span`, {
                          className: `flex-1 font-medium ${t ? `text-[#1B6B4A]` : `text-[#1A1A1A]`}`,
                          children: e.label,
                        }),
                        (0, k.jsx)(`div`, {
                          className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t ? `border-[#1B6B4A] bg-[#1B6B4A]` : `border-[#D5D5CF]`}`,
                          children: t && (0, k.jsx)(`span`, { className: `text-white text-[10px]`, children: `✓` }),
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
              (0, k.jsx)(`p`, {
                className: `text-[12px] text-[#C5C5BE] text-center mb-4`,
                children: `You can skip this step — it's optional`,
              }),
              (0, k.jsxs)(`div`, {
                className: `mt-auto pt-4 flex gap-3`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: () => n(2),
                    className: `px-6 py-3.5 text-[15px] font-medium text-[#8B8B8B] transition-all`,
                    children: `Back`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => {
                      (O.set(`emma_name`, r),
                        O.set(`emma_age`, a),
                        O.set(`emma_weight`, s),
                        O.set(`emma_unit`, d),
                        O.set(`emma_symptoms`, p),
                        O.set(`emma_start_date`, new Date().toISOString()),
                        O.set(`emma_onboarding_complete`, !0),
                        e(),
                        h(`/`, { replace: !0 }));
                    },
                    className: `flex-1 py-3.5 bg-[#2ECC71] text-white font-semibold rounded-xl text-[15px] transition-all active:scale-[0.98] shadow-md shadow-[#2ECC71]/20 flex items-center justify-center gap-2`,
                    children: `🌿 Start My Journey`,
                  }),
                ],
              }),
            ],
          },
          `s3`,
        ),
    ],
  });
}
var Jn = [
    {
      day: 1,
      protocol: `Warm water (8oz) + 1/2 lemon juice + 1/4 tsp turmeric. Drink on empty stomach.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Repeat once.`,
      tip: `Turmeric contains curcumin, which has been shown to reduce gut inflammation and inhibit archaea biofilm formation.`,
      fact: `Your gut contains over 100 trillion microorganisms — more than the stars in the Milky Way.`,
    },
    {
      day: 2,
      protocol: `Warm water (8oz) + 1 tbsp apple cider vinegar + pinch of ginger powder. Before breakfast.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Press gently below navel.`,
      tip: `Apple cider vinegar helps lower stomach pH, creating an inhospitable environment for methane-producing archaea.`,
      fact: `Archaea are not bacteria — they're a completely separate domain of life that's been around for 3.5 billion years.`,
    },
    {
      day: 3,
      protocol: `Berberine-rich tea: Steep goldenseal root (1 tsp) in hot water for 10 minutes. Drink before meals.`,
      ritual: `Deep breath in (3s), hold (2s), exhale slowly (2s). Gentle abdominal massage clockwise.`,
      tip: `Berberine is one of the most potent natural compounds against methane-producing organisms in the gut.`,
      fact: `Methane gas produced by archaea can slow your intestinal transit time by up to 59%.`,
    },
    {
      day: 4,
      protocol: `Star anise infusion: 2 whole star anise pods in 8oz boiling water, steep 15 min. Drink warm.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light stretch reaching overhead.`,
      tip: `Star anise contains anethole, a compound that disrupts archaea cell membranes and reduces methane production.`,
      fact: `80% of your immune system lives in your gut. A healthy microbiome is your body's first line of defense.`,
    },
    {
      day: 5,
      protocol: `Anti-archaea smoothie: 1 cup spinach + 1/2 cup blueberries + 1 tbsp coconut oil + 2 drops oregano oil (food grade). Blend with water.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle twist left, then right.`,
      tip: `Oregano oil contains carvacrol and thymol — natural antimicrobials that target archaea without harming beneficial bacteria as much.`,
      fact: `Your gut produces about 95% of your body's serotonin, the 'feel good' neurotransmitter.`,
    },
    {
      day: 6,
      protocol: `Garlic-ginger shot: Blend 2 cloves raw garlic + 1 inch fresh ginger + 4oz water + squeeze of lemon. Strain and drink.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Place warm hands on belly.`,
      tip: `Allicin in raw garlic is a powerful antimicrobial that can penetrate archaea biofilms.`,
      fact: `The vagus nerve connects your gut directly to your brain — that 'gut feeling' is a real neural signal.`,
    },
    {
      day: 7,
      protocol: `Coconut oil pulling: Swish 1 tbsp virgin coconut oil in mouth for 5-10 min, spit out. Then drink warm water with lemon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Repeat twice with eyes closed.`,
      tip: `Lauric acid in coconut oil has antimicrobial properties that start working from the moment it enters your mouth.`,
      fact: `Your gut microbiome weighs about 3-5 pounds — roughly the same as your brain.`,
    },
    {
      day: 8,
      protocol: `Turmeric golden paste: Mix 1/4 cup turmeric powder + 1/2 cup water + 1/4 tsp black pepper. Cook into paste. Take 1 tsp with warm water.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle side-to-side neck rolls.`,
      tip: `Black pepper increases turmeric absorption by 2,000%. Always pair them together for maximum gut-healing benefit.`,
      fact: `Archaea produce methane as a waste product — this gas is what causes the severe bloating many people experience.`,
    },
    {
      day: 9,
      protocol: `Dandelion root tea (1 tbsp dried root, steep 10 min) + 1/2 tsp raw honey. Drink 20 min before lunch.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Press gently on right side below ribs.`,
      tip: `Dandelion root stimulates bile production, which is essential for breaking down fats and flushing toxins from the gut.`,
      fact: `Bile acids are natural antimicrobials — healthy bile flow helps keep archaea populations in check.`,
    },
    {
      day: 10,
      protocol: `Anti-archaea broth: Simmer 4 cups water + 2 cloves garlic + 1 inch ginger + 1 star anise + 1/2 tsp turmeric for 20 min. Strain and sip.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle abdominal massage counterclockwise.`,
      tip: `Combining multiple anti-archaea compounds creates a synergistic effect that's more powerful than any single ingredient alone.`,
      fact: `Your intestines laid end to end would stretch about 25 feet — giving archaea a lot of real estate to colonize.`,
    },
    {
      day: 11,
      protocol: `Peppermint-fennel tea: 1 tsp peppermint leaves + 1 tsp crushed fennel seeds in 8oz hot water. Steep 8 min.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Inhale the mint aroma deeply first.`,
      tip: `Peppermint oil relaxes intestinal smooth muscle, helping trapped gas move through and reducing the bloating caused by methane.`,
      fact: `People with high methane levels are 3x more likely to experience chronic constipation.`,
    },
    {
      day: 12,
      protocol: `Beet-carrot juice: Juice 1 medium beet + 2 carrots + 1 inch ginger + 1/2 lemon. Drink on empty stomach.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle seated twist to each side.`,
      tip: `Beets contain betaine, which supports stomach acid production and bile flow — both critical for fighting archaea.`,
      fact: `The color of your stool after eating beets can tell you your gut transit time — a natural diagnostic tool.`,
    },
    {
      day: 13,
      protocol: `Oregano-thyme infusion: 1 tsp dried oregano + 1/2 tsp dried thyme in 8oz hot water. Steep 10 min. Add lemon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Roll shoulders back 5 times.`,
      tip: `Thyme's thymol compound works synergistically with oregano's carvacrol to disrupt archaea cell walls.`,
      fact: `Ancient Egyptians used thyme and oregano for digestive ailments over 3,500 years ago.`,
    },
    {
      day: 14,
      protocol: `Activated charcoal lemonade: 8oz water + juice of 1 lemon + 1/4 tsp activated charcoal powder. Drink between meals.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Place hands on belly, feel it rise and fall.`,
      tip: `Activated charcoal can bind to methane gas and toxins in the gut. Take away from medications.`,
      fact: `Week 2 milestone: Your gut pH is starting to shift, making it harder for archaea to thrive.`,
    },
    {
      day: 15,
      protocol: `Artichoke heart salad: Steam 1 cup artichoke hearts, drizzle with olive oil + lemon juice + minced garlic. Eat as first course.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle clockwise belly rub with warm hands.`,
      tip: `Artichokes are rich in cynarin, which stimulates bile production and supports liver detoxification pathways.`,
      fact: `Your liver produces about 500-600ml of bile per day — bile is your body's natural archaea fighter.`,
    },
    {
      day: 16,
      protocol: `Cinnamon-clove tea: 1 cinnamon stick + 3 whole cloves + 8oz boiling water. Steep 12 min. Add raw honey if desired.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Breathe in the warm spicy aroma.`,
      tip: `Eugenol in cloves has potent antimicrobial activity against a wide range of gut pathogens including archaea.`,
      fact: `Cloves have the highest antioxidant value (ORAC score) of any spice — 314,446 per 100g.`,
    },
    {
      day: 17,
      protocol: `Green detox juice: 2 cups kale + 1 cucumber + 1 green apple + 1 inch ginger + 1/2 lemon. Juice or blend and strain.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light forward fold stretch.`,
      tip: `Chlorophyll in dark greens helps oxygenate the blood and creates an alkaline environment that archaea struggle in.`,
      fact: `Your gut lining replaces itself every 3-5 days — it's one of the fastest-regenerating tissues in your body.`,
    },
    {
      day: 18,
      protocol: `Bone broth fast: Sip 3-4 cups of organic bone broth throughout the day. Add garlic, ginger, and turmeric to each cup.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle hugging of knees to chest (seated).`,
      tip: `Bone broth is rich in L-glutamine and collagen — the building blocks your gut lining needs to repair damage from archaea.`,
      fact: `Collagen makes up 70% of the protein in your gut lining. Without it, tight junctions become loose.`,
    },
    {
      day: 19,
      protocol: `Wormwood bitter tea: 1/2 tsp dried wormwood + 1 tsp chamomile in 8oz hot water. Steep 5 min only. Sip slowly before dinner.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light rocking side to side.`,
      tip: `Wormwood has been used for centuries as an antiparasitic — its bitter compounds stimulate digestive enzyme production.`,
      fact: `Bitter taste receptors exist not only on your tongue but throughout your entire digestive tract.`,
    },
    {
      day: 20,
      protocol: `Papaya enzyme bowl: 1 cup fresh papaya + 1/2 cup pineapple + squeeze of lime + sprinkle of turmeric. Eat on empty stomach.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle abdominal massage downward on left side.`,
      tip: `Papain and bromelain are natural digestive enzymes that break down proteins and reduce gut inflammation.`,
      fact: `Day 20: By now, archaea populations are significantly weakened. Many people report less bloating at this stage.`,
    },
    {
      day: 21,
      protocol: `Garlic-oregano olive oil: Warm 2 tbsp EVOO + 2 minced garlic cloves + 1/2 tsp dried oregano on low heat 2 min. Drizzle on salad.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Three slow clockwise belly circles.`,
      tip: `Extra virgin olive oil contains oleocanthal, an anti-inflammatory compound as potent as ibuprofen for gut inflammation.`,
      fact: `Your gut has its own nervous system called the enteric nervous system — it contains over 500 million neurons.`,
    },
    {
      day: 22,
      protocol: `Cranberry-ginger flush: 8oz unsweetened cranberry juice + 1 tbsp fresh ginger juice + 8oz water. Drink before lunch.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle pressing on acupressure point below knee.`,
      tip: `Cranberries contain proanthocyanidins that prevent harmful organisms from adhering to your intestinal walls.`,
      fact: `Gut bacteria communicate with each other through chemical signals called 'quorum sensing' — like a microscopic internet.`,
    },
    {
      day: 23,
      protocol: `Neem tea: Steep 5-6 dried neem leaves in 8oz hot water for 10 min. Add honey to taste. Drink before meals.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Slow head rotations, 3 each direction.`,
      tip: `Neem has been used in Ayurvedic medicine for millennia as a powerful gut cleanser and antiparasitic.`,
      fact: `In Indian traditional medicine, neem is called 'the village pharmacy' because of its 130+ biologically active compounds.`,
    },
    {
      day: 24,
      protocol: `Fermented garlic honey: Take 1 tsp of black garlic or fermented garlic honey. Follow with warm lemon water.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Place one hand on heart, one on belly.`,
      tip: `Fermented garlic retains its antimicrobial properties while being gentler on the stomach than raw garlic.`,
      fact: `Fermentation was one of humanity's first food preservation methods — and our guts evolved expecting fermented foods.`,
    },
    {
      day: 25,
      protocol: `Licorice root decoction: Simmer 1 tbsp DGL licorice root in 2 cups water for 15 min. Strain. Drink warm, half AM half PM.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle side stretch, both sides.`,
      tip: `DGL licorice stimulates mucus production in the gut lining, creating a protective barrier against archaea damage.`,
      fact: `The gut mucus layer is your intestinal wall's first defense — it's constantly being produced and shed.`,
    },
    {
      day: 26,
      protocol: `Anti-archaea stir fry: Sauté broccoli + garlic + ginger + onion in coconut oil. Season with turmeric + black pepper.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle seated spinal twist.`,
      tip: `Cruciferous vegetables like broccoli contain sulforaphane, which activates detoxification enzymes in the gut.`,
      fact: `Broccoli sprouts contain 50x more sulforaphane than mature broccoli.`,
    },
    {
      day: 27,
      protocol: `Grapefruit seed extract drink: 5 drops GSE in 8oz water. Drink 3x today between meals.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Alternate nostril breathing.`,
      tip: `Grapefruit seed extract has broad-spectrum antimicrobial activity and is particularly effective against gut biofilms.`,
      fact: `Biofilms are protective shields that archaea build around their colonies — breaking these is key to eliminating them.`,
    },
    {
      day: 28,
      protocol: `Cabbage juice protocol: Juice 1/4 head green cabbage + 1 green apple + 1/2 cucumber. Drink fresh on empty stomach.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Hug yourself and rock gently.`,
      tip: `Cabbage juice is rich in L-glutamine and vitamin U, both proven to heal damaged gut lining.`,
      fact: `In the 1950s, Dr. Garnett Cheney cured peptic ulcers with cabbage juice alone — no drugs needed.`,
    },
    {
      day: 29,
      protocol: `Triple-threat tea: Combine oregano + thyme + rosemary (1/2 tsp each) in 8oz hot water. Steep 10 min. Drink before each meal.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Full body stretch, reach for the sky.`,
      tip: `Today's triple combination creates the strongest herbal antimicrobial assault on remaining archaea colonies.`,
      fact: `Day 29: Your methane levels have dropped significantly. The Search & Destroy phase is nearly complete.`,
    },
    {
      day: 30,
      protocol: `Phase 1 completion broth: Rich broth with bone broth base + garlic + ginger + turmeric + star anise + oregano. Celebrate!`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Place both hands on belly — thank your body.`,
      tip: `Congratulations! You've completed 30 days of systematically weakening archaea. Your gut is ready for Phase 2: Repair.`,
      fact: `Phase 1 Complete! 30 days of consistent antimicrobial protocols can reduce methane by up to 70%.`,
    },
  ],
  Yn = [
    {
      day: 31,
      protocol: `Gut-healing golden milk: Warm 8oz coconut milk + 1/2 tsp turmeric + 1/4 tsp cinnamon + pinch black pepper + 1 tsp raw honey.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle self-hug, relax shoulders.`,
      tip: `Welcome to Phase 2! Now we shift from destroying archaea to repairing the damage they left behind.`,
      fact: `Your intestinal lining has the surface area of a tennis court — Phase 2 is about restoring every inch.`,
    },
    {
      day: 32,
      protocol: `L-glutamine smoothie: 1 banana + 1 cup almond milk + 1 tbsp almond butter + 5g L-glutamine powder. Blend smooth.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Light forward fold.`,
      tip: `L-glutamine is the primary fuel source for the cells lining your intestines.`,
      fact: `Your gut lining cells use more L-glutamine for energy than any other amino acid.`,
    },
    {
      day: 33,
      protocol: `Quercetin-rich meal: Red onion + apple + berry salad with olive oil dressing. Eat as your first meal today.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle clockwise belly massage.`,
      tip: `Quercetin reduces gut inflammation and strengthens the tight junctions between intestinal cells.`,
      fact: `Red onions contain up to 10x more quercetin than white onions — color matters.`,
    },
    {
      day: 34,
      protocol: `Aloe vera morning drink: 2 tbsp pure aloe vera gel (food grade) + 8oz water + squeeze of lime. Drink on empty stomach.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Place warm hands on lower belly.`,
      tip: `Aloe vera contains acemannan, which accelerates gut lining repair and reduces intestinal inflammation.`,
      fact: `Aloe vera has been used medicinally for over 6,000 years — the ancient Egyptians called it the 'plant of immortality'.`,
    },
    {
      day: 35,
      protocol: `Bone broth with collagen: Heat 2 cups bone broth + 1 scoop collagen peptides + 1/2 tsp ginger powder. Sip throughout morning.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Roll shoulders forward 5x, backward 5x.`,
      tip: `Collagen peptides provide glycine and proline — the building blocks for rebuilding your gut lining.`,
      fact: `Your body produces less collagen after age 25 — supplementing helps your gut repair itself.`,
    },
    {
      day: 36,
      protocol: `Zinc-rich pumpkin seed butter: 2 tbsp pumpkin seed butter on banana slices. Eat as morning snack.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle neck stretches.`,
      tip: `Zinc is essential for intestinal cell repair and immune function. Pumpkin seeds are one of the richest sources.`,
      fact: `Zinc deficiency affects over 2 billion people worldwide and is a major cause of poor gut health.`,
    },
    {
      day: 37,
      protocol: `Marshmallow root tea: Steep 1 tbsp dried marshmallow root in room temp water overnight. Strain and drink in morning.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle spinal twist seated.`,
      tip: `Marshmallow root creates a soothing mucilage coating that protects and heals irritated gut lining.`,
      fact: `The marshmallow plant has been used medicinally since ancient Greek times.`,
    },
    {
      day: 38,
      protocol: `Omega-3 bowl: Wild-caught salmon (4oz baked) + steamed spinach + 1/2 avocado + lemon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Three deep belly breaths.`,
      tip: `Omega-3 fatty acids reduce gut inflammation and help restore the intestinal mucosal barrier.`,
      fact: `Wild-caught salmon has up to 3x more omega-3s than farmed salmon.`,
    },
    {
      day: 39,
      protocol: `Slippery elm porridge: Mix 1 tbsp slippery elm powder into warm oatmeal + 1/2 banana + cinnamon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle abdominal massage downward left side.`,
      tip: `Slippery elm forms a gel-like coating over your gut lining, allowing damaged tissue to heal undisturbed.`,
      fact: `Native Americans used slippery elm bark for centuries as a primary gut-healing medicine.`,
    },
    {
      day: 40,
      protocol: `Sweet potato + ginger soup: Roast 2 sweet potatoes, blend with ginger, bone broth, turmeric, and coconut milk.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Place hands on belly, visualize healing.`,
      tip: `Sweet potatoes are rich in beta-carotene, essential for maintaining the gut mucosal lining.`,
      fact: `Vitamin A deficiency is directly linked to increased intestinal permeability (leaky gut).`,
    },
    {
      day: 41,
      protocol: `DGL licorice chews: Take 2 DGL licorice tablets (380mg) 20 min before lunch and dinner. Chew thoroughly.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Light side bends left and right.`,
      tip: `DGL increases mucus production and blood flow to the gut lining, accelerating repair.`,
      fact: `DGL licorice has healing compounds without the glycyrrhizin that can raise blood pressure.`,
    },
    {
      day: 42,
      protocol: `Berry-flax antioxidant bowl: 1 cup mixed berries + 2 tbsp ground flaxseed + 1/4 cup coconut yogurt + honey.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle shoulder shrugs up and release.`,
      tip: `Flaxseed contains both soluble and insoluble fiber, plus omega-3s — a triple benefit for gut repair.`,
      fact: `Ground flaxseed releases 2x more nutrients than whole flaxseed.`,
    },
    {
      day: 43,
      protocol: `Chamomile-lavender gut soother: Steep 1 tbsp chamomile + 1/2 tsp culinary lavender in 8oz hot water. After dinner.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Close eyes and relax jaw completely.`,
      tip: `Chamomile contains apigenin, which reduces gut inflammation and relaxes intestinal smooth muscle.`,
      fact: `Chamomile has been called 'the most ancient and versatile medicinal herb known to humankind.'`,
    },
    {
      day: 44,
      protocol: `Egg drop bone broth: Heat 2 cups bone broth, whisk in 2 beaten eggs + scallions + 1/2 tsp sesame oil.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Hug knees to chest gently.`,
      tip: `Eggs provide all 9 essential amino acids — the most bioavailable protein for gut repair.`,
      fact: `The amino acid profile of eggs almost perfectly matches what your gut lining needs for repair.`,
    },
    {
      day: 45,
      protocol: `Cabbage-apple slaw: Shred 2 cups purple cabbage + 1 green apple + 2 tbsp olive oil + 1 tbsp ACV.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Hands on heart — breathe gratitude.`,
      tip: `Halfway through Phase 2! Purple cabbage anthocyanins reduce gut inflammation and support repair.`,
      fact: `Halfway point: Your gut lining is actively rebuilding. Many notice reduced food sensitivities now.`,
    },
    {
      day: 46,
      protocol: `Turmeric-ginger bone broth gelatin: Heat bone broth + turmeric + ginger. Add 1 tbsp gelatin powder while warm.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle rocking forward and back.`,
      tip: `Gelatin lines the gut wall and helps seal the junctions between intestinal cells.`,
      fact: `Gelatin was prescribed as a digestive aid by physicians in the early 1900s.`,
    },
    {
      day: 47,
      protocol: `Mango-turmeric lassi: Blend 1/2 mango + 1/2 cup plain yogurt + 1/4 tsp turmeric + 1/2 cup water + cardamom.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light waist circles, 5 each direction.`,
      tip: `Probiotics in yogurt combined with turmeric's anti-inflammatory action create a powerful gut-healing combo.`,
      fact: `Yogurt has been consumed for gut health for over 7,000 years.`,
    },
    {
      day: 48,
      protocol: `Avocado-spinach gut bowl: 1/2 avocado + 2 cups spinach + 1/4 cup walnuts + olive oil + lemon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Three slow clockwise belly circles.`,
      tip: `Avocados are rich in glutathione, your body's master antioxidant, which protects healing gut tissue.`,
      fact: `One avocado contains more potassium than a banana.`,
    },
    {
      day: 49,
      protocol: `Fennel-ginger digestive tea: 1 tsp crushed fennel + 1/2 tsp grated ginger + mint in 8oz hot water. After meals.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle twisting to each side.`,
      tip: `Fennel stimulates digestive enzyme production and relaxes the smooth muscles of the GI tract.`,
      fact: `In India, fennel seeds are offered after meals as a natural digestive aid — a practice thousands of years old.`,
    },
    {
      day: 50,
      protocol: `Coconut-blueberry repair smoothie: 1 cup blueberries + 1/2 cup coconut cream + 1 tbsp collagen + 1 tsp maca.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Celebrate — you're past day 50!`,
      tip: `Blueberries contain pterostilbene, which strengthens the intestinal barrier and reduces inflammation.`,
      fact: `Day 50! Your gut lining is significantly stronger. Tight junctions are tightening up.`,
    },
    {
      day: 51,
      protocol: `Pumpkin spice gut healer: Blend 1/2 cup pumpkin puree + 1 cup almond milk + cinnamon, nutmeg, ginger + collagen.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light shoulder rolls.`,
      tip: `Pumpkin is rich in vitamin A and zinc — both critical for repairing the intestinal mucosal layer.`,
      fact: `Pumpkin seeds have been used in traditional medicine for over 7,000 years.`,
    },
    {
      day: 52,
      protocol: `Mediterranean gut plate: Hummus + cucumber + cherry tomatoes + olives + red onion + olive oil drizzle.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle forward fold stretch.`,
      tip: `The Mediterranean diet consistently produces the healthiest, most diverse gut microbiomes.`,
      fact: `People in Mediterranean regions have the lowest rates of inflammatory bowel disease.`,
    },
    {
      day: 53,
      protocol: `Warm lemon-honey-ginger tonic: 8oz warm water + 1 tbsp raw honey + juice of 1/2 lemon + 1/2 tsp grated ginger.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle neck rolls.`,
      tip: `Raw honey contains prebiotics and enzymes that feed beneficial bacteria while soothing inflamed tissue.`,
      fact: `Raw honey contains over 200 bioactive compounds and has been used as medicine for over 8,000 years.`,
    },
    {
      day: 54,
      protocol: `Zucchini noodle gut bowl: Spiralized zucchini + sautéed garlic + olive oil + basil + pine nuts + lemon.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Slow spinal twist each side.`,
      tip: `Zucchini is easy to digest and rich in vitamin C, which supports collagen production.`,
      fact: `Vitamin C is required for collagen synthesis — without it, your gut lining can't rebuild properly.`,
    },
    {
      day: 55,
      protocol: `Chia seed pudding: 3 tbsp chia seeds + 1 cup coconut milk + 1/2 tsp vanilla + berries. Refrigerate overnight.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Place warm hands on lower abdomen.`,
      tip: `Chia seeds form a gel that soothes the gut lining and provides slow-release fiber.`,
      fact: `Chia seeds absorb 12x their weight in water — this gel-forming ability is key for gut healing.`,
    },
    {
      day: 56,
      protocol: `Roasted beet + goat cheese salad: Roast 2 beets, slice, top with goat cheese + walnuts + arugula + balsamic.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Light walk in place 30 seconds.`,
      tip: `Goat cheese is easier to digest than cow's milk cheese and provides gut-friendly probiotics.`,
      fact: `Beets increase nitric oxide production, improving blood flow to the gut — more blood = faster healing.`,
    },
    {
      day: 57,
      protocol: `Ginger-carrot-coconut soup: Sauté ginger + garlic, add carrots + coconut milk + bone broth. Blend smooth.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Three grateful breaths for your healing body.`,
      tip: `Carrots are rich in beta-carotene and pectin — both support mucosal integrity.`,
      fact: `Cooking carrots increases their beta-carotene bioavailability by up to 25%.`,
    },
    {
      day: 58,
      protocol: `Probiotic intro: plain kefir (4oz) + 1/2 banana + 1 tsp honey. A gentle first introduction to fermented foods.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle belly rub clockwise.`,
      tip: `We're starting to gently introduce fermented foods. Your gut lining is now strong enough for beneficial bacteria.`,
      fact: `Kefir contains up to 61 different strains of bacteria and yeasts — far more diverse than yogurt.`,
    },
    {
      day: 59,
      protocol: `Quercetin apple crisp: Slice 2 apples, top with oats + cinnamon + walnuts + coconut oil. Bake at 350°F for 25 min.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Stretch arms overhead and smile.`,
      tip: `Apples with the skin on provide both quercetin and pectin — a powerful gut-sealing combination.`,
      fact: `An apple's quercetin is concentrated in the skin — peeling removes up to 80% of this compound.`,
    },
    {
      day: 60,
      protocol: `Phase 2 celebration bowl: Bone broth base + sweet potato + avocado + sauerkraut (1 tbsp) + olive oil + turmeric.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Hands on heart and belly — feel the connection.`,
      tip: `Phase 2 Complete! Your gut lining is repaired and sealed. Ready for Phase 3: recolonizing with beneficial bacteria.`,
      fact: `Phase 2 Complete! Intestinal permeability has significantly improved. Tight junctions are sealed and functioning.`,
    },
  ],
  Xn = [
    {
      day: 61,
      protocol: `Probiotic power smoothie: 1/2 cup kefir + 1/2 cup berries + 1 banana + 1 tbsp ground flaxseed.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Fresh start energy — shake out arms and legs.`,
      tip: `Welcome to Phase 3! Your gut is repaired — now we fill it with good bacteria for long-term protection.`,
      fact: `A healthy gut contains 1,000+ different species of bacteria — diversity is key to resilience.`,
    },
    {
      day: 62,
      protocol: `Sauerkraut + apple snack: 2 tbsp raw sauerkraut alongside apple slices with almond butter.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Light bounce on toes.`,
      tip: `Raw sauerkraut is one of the richest natural probiotic sources — billions of beneficial bacteria per serving.`,
      fact: `Sauerkraut was given to Dutch sailors in the 1700s to prevent scurvy.`,
    },
    {
      day: 63,
      protocol: `Miso soup morning: Dissolve 1 tbsp white miso paste in warm (not boiling) water + cubed tofu + seaweed + scallions.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Gentle belly circles.`,
      tip: `Miso contains Aspergillus oryzae and other organisms that help rebuild a diverse gut microbiome.`,
      fact: `In Japan, daily miso soup consumption is associated with lower rates of digestive diseases.`,
    },
    {
      day: 64,
      protocol: `Prebiotic fiber bowl: 1/2 cup oats + 1 sliced banana + 1 tbsp inulin powder + walnuts + honey.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Shoulder shrugs and release.`,
      tip: `Prebiotics are the food for your new beneficial bacteria. Without them, probiotics can't establish lasting colonies.`,
      fact: `Inulin can increase beneficial Bifidobacterium populations by up to 10x in just 2 weeks.`,
    },
    {
      day: 65,
      protocol: `Kimchi fried cauliflower rice: Riced cauliflower + 2 tbsp kimchi + egg + sesame oil + scallions.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle seated twist.`,
      tip: `Kimchi contains Lactobacillus, producing lactic acid that keeps archaea from recolonizing.`,
      fact: `Korean kimchi contains over 900 identified bacterial species.`,
    },
    {
      day: 66,
      protocol: `Resveratrol berry blast: Blend 1 cup dark grapes + 1/2 cup dark cherries + 1/2 cup blueberries + water.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Three grateful belly breaths.`,
      tip: `Resveratrol promotes growth of beneficial Lactobacillus and Bifidobacterium species.`,
      fact: `Resveratrol can cross the blood-brain barrier — it supports the gut-brain axis from both ends.`,
    },
    {
      day: 67,
      protocol: `Garlic-asparagus prebiotic sauté: 1 bunch asparagus + 3 cloves garlic in olive oil + lemon zest.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Forward fold and hang.`,
      tip: `Asparagus is rich in inulin and fructooligosaccharides — powerful prebiotics that selectively feed good bacteria.`,
      fact: `Asparagus has been cultivated as a medicinal plant for over 2,000 years.`,
    },
    {
      day: 68,
      protocol: `Coconut yogurt parfait: Layer coconut yogurt + granola + mixed berries + chia seeds + raw honey.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light side stretches.`,
      tip: `Layering probiotics with prebiotics and polyphenols creates optimal conditions for recolonization.`,
      fact: `The combination of probiotics and prebiotics together is called 'synbiotics' — the synergy makes each more effective.`,
    },
    {
      day: 69,
      protocol: `Jicama + lime snack: Slice 1 cup jicama into sticks, squeeze lime juice, sprinkle chili powder.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Gentle neck rolls both directions.`,
      tip: `Jicama is one of the richest sources of prebiotic inulin fiber.`,
      fact: `Jicama is 86% water and packed with prebiotic fiber — it hydrates while feeding your microbiome.`,
    },
    {
      day: 70,
      protocol: `Tempeh stir-fry: Slice tempeh, sauté with broccoli + bell pepper + garlic + ginger + tamari sauce.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Standing gentle twist.`,
      tip: `Tempeh is a fermented soybean product rich in probiotics and easily digestible plant protein.`,
      fact: `Day 70: Your gut microbiome diversity is increasing rapidly. New species establishing permanent colonies.`,
    },
    {
      day: 71,
      protocol: `Kombucha + ginger morning: 8oz plain kombucha + 1/2 tsp fresh grated ginger. Sip slowly with breakfast.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Bounce lightly on toes.`,
      tip: `Kombucha provides organic acids and probiotics that maintain the acidic pH your gut needs.`,
      fact: `Kombucha's SCOBY contains over 50 species of bacteria and yeasts working in harmony.`,
    },
    {
      day: 72,
      protocol: `Rainbow prebiotic salad: Red onion + garlic + asparagus + artichoke + banana + apple + walnuts + olive oil.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Abdominal massage clockwise.`,
      tip: `Eating a wide variety of prebiotic foods encourages microbiome diversity — the hallmark of a healthy gut.`,
      fact: `People who eat 30+ different plant foods per week have significantly more diverse gut microbiomes.`,
    },
    {
      day: 73,
      protocol: `Overnight probiotic oats: 1/2 cup oats + 1/2 cup kefir + 1 tbsp chia + berries. Refrigerate overnight.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light shoulder circles.`,
      tip: `Overnight oats with kefir combine resistant starch with live cultures for maximum colonization support.`,
      fact: `Resistant starch in cooled oats feeds bacteria that produce butyrate — the #1 fuel for colon cells.`,
    },
    {
      day: 74,
      protocol: `Turmeric-fermented veggie plate: Arrange sauerkraut + kimchi + pickled beets + pickled ginger on a plate.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Deep belly breaths.`,
      tip: `A plate of varied fermented foods introduces multiple probiotic strains — like planting a diverse garden.`,
      fact: `Every fermented food contains different bacterial strains — variety ensures comprehensive coverage.`,
    },
    {
      day: 75,
      protocol: `Green banana prebiotic smoothie: 1 green banana + 1/2 cup kefir + spinach + 1 tsp raw cacao + cinnamon.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Stand tall, reach for the ceiling.`,
      tip: `Green bananas are extremely rich in resistant starch — one of the most powerful prebiotics.`,
      fact: `Day 75! Three-quarters done. Your microbiome is rapidly approaching a healthy composition.`,
    },
    {
      day: 76,
      protocol: `Leek + potato soup: Sauté leeks + garlic, add potatoes + bone broth. Simmer, blend smooth.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Warmth from the bowl, breathe it in.`,
      tip: `Leeks are a potent source of prebiotic fructans that specifically feed protective Bifidobacterium.`,
      fact: `Leeks belong to the allium family — all alliums are powerful prebiotic foods.`,
    },
    {
      day: 77,
      protocol: `Food reintroduction test: Choose one food you've been avoiding. Eat a small portion. Journal how you feel for 24 hours.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Tune into your body's signals.`,
      tip: `With your gut healed, it's time to test food reintroductions. Go slow — one food at a time.`,
      fact: `Many food sensitivities are caused by a damaged gut lining, not true allergies — healing often resolves them.`,
    },
    {
      day: 78,
      protocol: `Apple cider vinegar + honey tonic: 1 tbsp ACV + 1 tsp raw honey + 8oz warm water + cinnamon. Before meals.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle self-massage on jaw.`,
      tip: `ACV maintains the acidic environment that keeps archaea from recolonizing.`,
      fact: `The 'mother' in unfiltered ACV is actually a colony of beneficial bacteria — a probiotic in itself.`,
    },
    {
      day: 79,
      protocol: `Dark chocolate bark: Melt 2oz dark chocolate (85%+), spread thin, top with goji berries + pumpkin seeds + coconut.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Enjoy something sweet — you deserve it!`,
      tip: `Dark chocolate polyphenols act as prebiotics, selectively feeding beneficial Lactobacillus and Bifidobacterium.`,
      fact: `Cacao is fermented before it reaches you — making it both a prebiotic and a former probiotic food.`,
    },
    {
      day: 80,
      protocol: `Diversity challenge: Eat 10 different plant foods today. Track each one.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Full body stretch.`,
      tip: `Plant food diversity is the #1 predictor of microbiome health.`,
      fact: `Day 80: Just 10 days to go! Your gut ecosystem is now robust and diverse.`,
    },
    {
      day: 81,
      protocol: `Pickled vegetable medley: Quick pickles — slice cucumber + carrot + radish, soak in ACV + water + salt + dill for 2 hours.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Light bounce, shake out limbs.`,
      tip: `Lacto-fermented vegetables provide probiotics your gut has evolved to recognize for thousands of years.`,
      fact: `Fermented vegetables are found in virtually every traditional cuisine on Earth.`,
    },
    {
      day: 82,
      protocol: `Walnut-date energy balls: Blend 1 cup walnuts + 8 dates + 2 tbsp cacao + 1 tbsp coconut oil. Roll into balls.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Gentle spinal twist each direction.`,
      tip: `Walnuts uniquely promote growth of Ruminococcaceae — bacteria that produce butyrate and protect the colon.`,
      fact: `Among all nuts, walnuts produce the most significant positive changes in gut microbiome composition.`,
    },
    {
      day: 83,
      protocol: `Second food reintroduction: Test another food you've been avoiding. Eat a small portion. Journal your response.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Mindful body scan, notice sensations.`,
      tip: `If yesterday's reintroduction went well, try another food today.`,
      fact: `About 70% of food sensitivities resolve after proper gut healing.`,
    },
    {
      day: 84,
      protocol: `Full probiotic feast: Breakfast with kefir parfait, lunch with kimchi rice bowl, dinner with miso soup + sauerkraut side.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Celebrate your probiotic feast!`,
      tip: `Eating fermented foods at every meal ensures constant influx of beneficial bacteria.`,
      fact: `People who eat fermented foods daily have 70% more gut microbiome diversity.`,
    },
    {
      day: 85,
      protocol: `Garlic-herb maintenance oil: Warm 3 tbsp olive oil + 4 garlic cloves + rosemary + thyme + oregano on low 5 min.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Make this oil a new habit.`,
      tip: `This maintenance oil combines antimicrobial herbs that prevent archaea from regaining a foothold.`,
      fact: `Day 85: Your maintenance habits are building the foundation for lifelong gut health.`,
    },
    {
      day: 86,
      protocol: `Prebiotic-probiotic power plate: Sauerkraut + steamed asparagus + garlic roasted sweet potato + tempeh.`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Deep gratitude for how far you've come.`,
      tip: `You're now eating like a gut health expert. These combinations naturally maintain your microbiome.`,
      fact: `Long-lived populations (Blue Zones) have high microbiome diversity and fermented food intake.`,
    },
    {
      day: 87,
      protocol: `Golden maintenance latte: Warm oat milk + turmeric + cinnamon + ginger + black pepper + 1/2 tsp coconut oil.`,
      ritual: `Deep breath in (3s), hold (2s), exhale (2s). Morning sunshine if possible.`,
      tip: `This golden latte combines anti-inflammatory compounds that keep your gut in top condition long-term.`,
      fact: `Turmeric has been used in Ayurvedic medicine for 4,000 years — modern science is confirming it.`,
    },
    {
      day: 88,
      protocol: `Build your maintenance plate: 1/4 protein + 1/4 complex carbs + 1/2 colorful vegetables + fermented food + healthy fat.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Memorize this plate ratio.`,
      tip: `This plate template ensures the right balance of nutrients, fiber, and probiotics forever.`,
      fact: `The 'healthy plate' model has been validated by every major nutrition research institution.`,
    },
    {
      day: 89,
      protocol: `Gratitude meal: Cook your favorite gut-friendly recipe from the last 89 days. Make it special — you've earned it.`,
      ritual: `Deep breath in (3s), hold (1s), exhale (3s). Reflect on your 89-day journey.`,
      tip: `Tomorrow is your final day. Appreciate how far you've come and how different your body feels.`,
      fact: `Day 89: Your gut is transformed. Archaea minimal, lining sealed, microbiome thriving.`,
    },
    {
      day: 90,
      protocol: `Protocol completion: Begin with golden milk. Lunch with your favorite recipe. Dinner with a probiotic feast. You did it!`,
      ritual: `Deep breath in (3s), hold (1s), exhale slowly (3s). Final ritual — place both hands on belly and say thank you.`,
      tip: `Congratulations! You've completed the full 90-day Emma Protocol. Maintain these habits and your gut will thrive.`,
      fact: `Day 90 — COMPLETE! Search & Destroy, Repair & Seal, Recolonize & Protect. Your gut is transformed.`,
    },
  ],
  Zn = [
    {
      day: 91,
      protocol: `Maintenance golden milk: Warm coconut milk + turmeric + cinnamon + ginger + black pepper. Your daily gut guardian.`,
      ritual: `Box breathing: In 4s, hold 4s, out 4s, hold 4s. Repeat 3 cycles.`,
      tip: `Welcome to Phase 4! Your gut is restored — now we lock in these gains for life.`,
      fact: `Studies show gut health gains from a 90-day protocol can last years with proper maintenance.`,
    },
    {
      day: 92,
      protocol: `Morning apple cider vinegar tonic: 1 tbsp ACV + warm water + 1/2 tsp honey + cinnamon. Before breakfast.`,
      ritual: `Box breathing: In 4s, hold 4s, out 4s, hold 4s. Gentle morning stretch.`,
      tip: `ACV keeps stomach acid at optimal levels, preventing archaea from ever regaining a foothold.`,
      fact: `Your stomach acid is strong enough to dissolve metal — maintaining it is your first line of defense.`,
    },
    {
      day: 93,
      protocol: `Prebiotic power breakfast: Overnight oats with banana, ground flax, chia seeds, and kefir.`,
      ritual: `Box breathing + 5 min gentle walk. Movement wakes up your gut.`,
      tip: `Combining prebiotics and probiotics at breakfast sets the microbiome tone for the entire day.`,
      fact: `Your gut bacteria have a circadian rhythm — feeding them at consistent times strengthens colonies.`,
    },
    {
      day: 94,
      protocol: `Advanced bone broth: Simmer bones 12 hrs with garlic, ginger, turmeric, star anise, and seaweed for minerals.`,
      ritual: `Box breathing + gentle abdominal massage clockwise.`,
      tip: `Adding seaweed to bone broth provides iodine and fucoidan, both powerful gut-protective compounds.`,
      fact: `Japanese centenarians consume seaweed daily — it's linked to their exceptional gut health and longevity.`,
    },
    {
      day: 95,
      protocol: `Food freedom test: Eat a moderate portion of bread or pasta. Journal bloating, energy, and digestion for 24 hours.`,
      ritual: `Box breathing + body scan meditation. Notice how your gut responds.`,
      tip: `Your healed gut can handle foods that once caused problems. Test and build confidence.`,
      fact: `After full gut restoration, 80% of previous food sensitivities typically resolve completely.`,
    },
    {
      day: 96,
      protocol: `Polyphenol smoothie: Blueberries + pomegranate + dark cherries + spinach + collagen + almond milk.`,
      ritual: `Box breathing + 5 shoulder rolls each direction.`,
      tip: `Polyphenols are nature's gut-protective compounds. They feed beneficial bacteria and inhibit harmful ones.`,
      fact: `Pomegranate contains punicalagin, which gut bacteria convert to urolithin A — a powerful anti-aging compound.`,
    },
    {
      day: 97,
      protocol: `Mediterranean maintenance plate: Grilled fish + roasted vegetables + olive oil + lemon + fermented side.`,
      ritual: `Box breathing + gentle seated twist each side.`,
      tip: `The Mediterranean eating pattern is the most evidence-backed approach for long-term gut health.`,
      fact: `People following a Mediterranean diet have 30% more Lactobacillus and Bifidobacterium than average.`,
    },
    {
      day: 98,
      protocol: `Gut-brain smoothie: Avocado + banana + walnuts + raw cacao + kefir + 1 tsp MCT oil.`,
      ritual: `Box breathing + gratitude journaling: 3 things your body did well today.`,
      tip: `MCT oil provides instant fuel for brain and gut cells without requiring bile for digestion.`,
      fact: `Your gut and brain developed from the same tissue in the embryo — they never stopped communicating.`,
    },
    {
      day: 99,
      protocol: `Fermented feast day: Include sauerkraut, kimchi, yogurt, and kombucha across all meals today.`,
      ritual: `Box breathing + mindful eating: chew each bite 20 times at lunch.`,
      tip: `A diverse range of fermented foods provides different probiotic strains for maximum microbiome diversity.`,
      fact: `People who eat 6+ servings of fermented foods weekly have measurably lower inflammation markers.`,
    },
    {
      day: 100,
      protocol: `Day 100 celebration bowl: Golden rice + avocado + kimchi + grilled salmon + furikake + drizzle of sesame oil.`,
      ritual: `Box breathing + self-celebration. Place hands on belly — you've made it to day 100!`,
      tip: `100 days of consistent gut care! Your microbiome is now significantly more resilient than when you started.`,
      fact: `Day 100! Your gut microbiome has undergone a complete transformation. New bacterial colonies are well-established.`,
    },
    {
      day: 101,
      protocol: `Anti-inflammatory turmeric scramble: 3 eggs + turmeric + black pepper + spinach + cherry tomatoes + avocado.`,
      ritual: `Box breathing + morning sunlight for 10 minutes.`,
      tip: `Eggs provide choline, essential for maintaining the gut-liver axis and bile production.`,
      fact: `Morning sunlight sets your circadian rhythm, which directly influences gut motility and enzyme production.`,
    },
    {
      day: 102,
      protocol: `Fiber diversity challenge: Eat 15 different plant foods today. Track each one.`,
      ritual: `Box breathing + gentle yoga cat-cow stretches.`,
      tip: `Fiber diversity is more important than fiber quantity. Each plant feeds different beneficial bacteria.`,
      fact: `The American Gut Project found that people eating 30+ plants per week have the healthiest microbiomes.`,
    },
    {
      day: 103,
      protocol: `Coconut-berry probiotic bowl: Coconut yogurt + mixed berries + hemp seeds + honey + granola + mint.`,
      ritual: `Box breathing + 2 minutes of humming. Humming stimulates the vagus nerve.`,
      tip: `Hemp seeds provide the ideal omega-3 to omega-6 ratio for reducing gut inflammation.`,
      fact: `Humming creates vibrations that travel through the vagus nerve, directly calming your digestive system.`,
    },
    {
      day: 104,
      protocol: `Garlic maintenance soup: Roast a whole head of garlic, blend with bone broth + white beans + rosemary + olive oil.`,
      ritual: `Box breathing + cold water face splash. Activates the diving reflex and vagus nerve.`,
      tip: `Roasted garlic retains its prebiotic properties while being gentler on the stomach than raw.`,
      fact: `White beans contain resistant starch that specifically feeds butyrate-producing bacteria in the colon.`,
    },
    {
      day: 105,
      protocol: `Gut-friendly snack prep: Make energy balls (dates + walnuts + cacao + coconut + collagen). Store for the week.`,
      ritual: `Box breathing + gentle neck stretches all directions.`,
      tip: `Having gut-healthy snacks ready prevents reaching for processed foods that harm your microbiome.`,
      fact: `Week 15 complete! Your gut flora diversity now exceeds the average American's by an estimated 40%.`,
    },
    {
      day: 106,
      protocol: `Mushroom immunity broth: Shiitake + maitake + lion's mane mushrooms simmered in bone broth + ginger + garlic.`,
      ritual: `Box breathing + 5 min walking meditation.`,
      tip: `Medicinal mushrooms contain beta-glucans that strengthen your gut immune barrier.`,
      fact: `Lion's mane mushroom stimulates nerve growth factor, supporting the gut-brain connection from both ends.`,
    },
    {
      day: 107,
      protocol: `Dairy reintroduction test: Try 1/2 cup of high-quality full-fat yogurt or aged cheese. Journal response.`,
      ritual: `Box breathing + mindful body scan after eating.`,
      tip: `Aged cheeses and full-fat yogurt are often well-tolerated even by formerly sensitive guts.`,
      fact: `Aged cheeses like parmesan contain almost no lactose — the aging process breaks it down completely.`,
    },
    {
      day: 108,
      protocol: `Green juice maintenance: Celery + cucumber + ginger + lemon + parsley + green apple. Drink on empty stomach.`,
      ritual: `Box breathing + gentle abdominal massage counterclockwise.`,
      tip: `Green juice provides concentrated chlorophyll, which supports healthy bile production.`,
      fact: `Celery juice contains apigenin and luteolin — anti-inflammatory compounds that protect the gut lining.`,
    },
    {
      day: 109,
      protocol: `Omega-3 power plate: Wild salmon + steamed broccoli + sweet potato + olive oil + lemon + dill.`,
      ritual: `Box breathing + 3 deep belly laughs. Laughter massages your intestines!`,
      tip: `Omega-3s from wild fish are absorbed 9x better than fish oil supplements.`,
      fact: `Laughter physically stimulates peristalsis. A genuine laugh is like an internal gut massage.`,
    },
    {
      day: 110,
      protocol: `Advanced fermented: Try water kefir or beet kvass today — these provide unique probiotic strains not found in dairy.`,
      ritual: `Box breathing + alternate nostril breathing for 2 minutes.`,
      tip: `Water kefir grains contain unique strains like Lactobacillus nagelii found in no other fermented food.`,
      fact: `Beet kvass has been used in Eastern European folk medicine for liver and gut health for centuries.`,
    },
    {
      day: 111,
      protocol: `Spice rack gut boost: Cook with at least 5 different spices today — turmeric, cumin, coriander, fennel, ginger.`,
      ritual: `Box breathing + gentle spinal twist each direction.`,
      tip: `Culinary spices are among the most concentrated sources of gut-protective polyphenols.`,
      fact: `India has the world's highest spice consumption and among the lowest rates of colorectal cancer.`,
    },
    {
      day: 112,
      protocol: `Gut-healing soup: Zucchini + leek + potato + garlic + bone broth + fresh herbs. Blend smooth.`,
      ritual: `Box breathing + warm hands on belly for 2 minutes.`,
      tip: `Blended soups are easily digestible and deliver concentrated nutrients directly to the gut lining.`,
      fact: `Your gut processes blended foods 40% faster than whole foods, allowing more efficient nutrient absorption.`,
    },
    {
      day: 113,
      protocol: `Stress-gut protocol: Chamomile tea morning + lavender tea evening. Practice 10 min meditation midday.`,
      ritual: `Extended breathing: In 4s, hold 7s, out 8s. The 4-7-8 pattern.`,
      tip: `Chronic stress is the #1 threat to your restored gut health. Today we build stress resilience.`,
      fact: `Stress hormones can change your gut bacterial composition within just 2 hours.`,
    },
    {
      day: 114,
      protocol: `Root vegetable nourishment: Roast beets + carrots + parsnips + sweet potato with olive oil + rosemary + garlic.`,
      ritual: `Box breathing + grounding exercise: feet flat on earth for 5 minutes.`,
      tip: `Root vegetables provide a unique blend of soluble and insoluble fiber that feeds deep colon bacteria.`,
      fact: `Root vegetables contain inulin-type fructans — the preferred food of health-promoting Bifidobacterium.`,
    },
    {
      day: 115,
      protocol: `Prebiotic-rich artichoke meal: Steamed artichoke hearts with lemon-garlic olive oil dip. Add to any main dish.`,
      ritual: `Box breathing + gentle hip circles, 5 each direction.`,
      tip: `Artichokes have the highest prebiotic fiber content of any vegetable — even higher than garlic.`,
      fact: `One medium artichoke provides 10g of fiber — nearly half the daily recommended intake.`,
    },
    {
      day: 116,
      protocol: `Gut detox day: Lemon water on rising, green juice mid-morning, bone broth lunch, light dinner with steamed vegetables.`,
      ritual: `Box breathing + 10 min silent meditation.`,
      tip: `Periodic light eating days give your digestive system a rest and allow deep cleaning by the MMC.`,
      fact: `Your migrating motor complex performs a full intestinal sweep every 90-120 minutes when you're not eating.`,
    },
    {
      day: 117,
      protocol: `Resveratrol maintenance: 1 oz dark chocolate (85%+) + handful of dark grapes + cup of green tea.`,
      ritual: `Box breathing + gentle forward fold, hang for 30 seconds.`,
      tip: `Resveratrol from multiple sources creates a synergistic effect for gut and overall health.`,
      fact: `Green tea catechins increase Akkermansia muciniphila — a keystone species for gut barrier health.`,
    },
    {
      day: 118,
      protocol: `Advanced probiotic protocol: Kefir smoothie breakfast + miso soup lunch + sauerkraut + kimchi dinner sides.`,
      ritual: `Box breathing + vagus nerve massage: gentle circular pressure behind earlobes.`,
      tip: `Rotating different probiotic foods ensures you're feeding and introducing the widest range of strains.`,
      fact: `The vagus nerve has branches behind your ears — massaging this area activates the gut-calming response.`,
    },
    {
      day: 119,
      protocol: `Nut and seed power: Trail mix of walnuts + pumpkin seeds + almonds + dark chocolate chips + goji berries.`,
      ritual: `Box breathing + 5 minutes of journaling about your gut health journey.`,
      tip: `Nuts and seeds provide zinc, selenium, and magnesium — all critical for ongoing gut maintenance.`,
      fact: `Walnuts specifically promote Roseburia and Faecalibacterium — two of the most beneficial gut species.`,
    },
    {
      day: 120,
      protocol: `Phase 4 completion: Mediterranean feast with all your favorite gut-friendly foods. Celebrate your consistency!`,
      ritual: `Box breathing + reflection meditation. How has your digestion transformed?`,
      tip: `Phase 4 Complete! 120 days of gut care. Your maintenance habits are now deeply ingrained.`,
      fact: `Phase 4 Complete! Your gut ecosystem is robust, diverse, and self-regulating. Archaea populations remain minimal.`,
    },
  ],
  Qn = [
    {
      day: 121,
      protocol: `Gut-brain morning elixir: Warm water + lion's mane powder + cacao + MCT oil + honey. Nourish both brains.`,
      ritual: `Wim Hof breathing: 30 power breaths, hold on exhale 30s, recovery breath. Repeat 2x.`,
      tip: `Welcome to Phase 5! We now optimize the gut-brain axis for peak mental clarity.`,
      fact: `Your gut produces 400x more melatonin than your pineal gland — gut health IS brain health.`,
    },
    {
      day: 122,
      protocol: `GABA-boosting lunch: Brown rice + tempeh + steamed leafy greens + pumpkin seeds + tahini dressing.`,
      ritual: `Wim Hof breathing + 30 seconds cold water at end of shower.`,
      tip: `Certain gut bacteria produce GABA directly — the calming neurotransmitter your brain needs for focus.`,
      fact: `Lactobacillus rhamnosus can increase GABA receptor expression in the brain via the vagus nerve.`,
    },
    {
      day: 123,
      protocol: `Serotonin support plate: Turkey + sweet potato + walnuts + banana + dark leafy greens + olive oil.`,
      ritual: `Wim Hof breathing + 10 min outdoor walk in nature.`,
      tip: `95% of serotonin is made in the gut. These foods provide the building blocks.`,
      fact: `Tryptophan from turkey is converted to serotonin by gut bacteria — without them, this conversion fails.`,
    },
    {
      day: 124,
      protocol: `Omega-3 brain bowl: Sardines or mackerel + avocado + sauerkraut + quinoa + lemon-herb dressing.`,
      ritual: `Wim Hof breathing + bilateral eye movement: look left-right slowly 20 times.`,
      tip: `Small fatty fish contain the highest omega-3 concentration per serving and lowest mercury levels.`,
      fact: `DHA from omega-3s makes up 40% of brain cell membranes and maintains gut barrier fluidity.`,
    },
    {
      day: 125,
      protocol: `Adaptogen gut tea: Ashwagandha + tulsi + ginger + lemon + honey. Drink mid-afternoon.`,
      ritual: `Wim Hof breathing + legs up the wall for 5 minutes.`,
      tip: `Ashwagandha reduces cortisol by 30%, directly protecting your gut from stress-induced damage.`,
      fact: `Chronic cortisol literally thins your gut lining — adaptogenic herbs reverse this process.`,
    },
    {
      day: 126,
      protocol: `Polyphenol diversity day: Eat berries, dark chocolate, green tea, olive oil, and red onion today.`,
      ritual: `Wim Hof breathing + 5 min guided meditation focusing on gut sensations.`,
      tip: `Polyphenol diversity is as important as probiotic diversity for maintaining a healthy microbiome.`,
      fact: `Polyphenols that aren't absorbed in the small intestine become fuel for beneficial colon bacteria.`,
    },
    {
      day: 127,
      protocol: `Collagen maintenance smoothie: Collagen peptides + blueberries + spinach + almond milk + 1 tsp maca.`,
      ritual: `Wim Hof breathing + gentle neck and jaw release exercises.`,
      tip: `Ongoing collagen intake keeps your gut lining strong and prevents regression.`,
      fact: `After age 30, collagen production decreases by 1% per year — supplementation maintains gut integrity.`,
    },
    {
      day: 128,
      protocol: `Gut motility meal: High-fiber salad with raw veggies + olive oil + lemon + flaxseed + probiotic side.`,
      ritual: `Wim Hof breathing + 100 jumping jacks or 5 min brisk walk.`,
      tip: `Physical movement stimulates peristalsis. Pair high-fiber meals with activity for optimal motility.`,
      fact: `A 15-minute walk after meals reduces blood sugar spikes by 60% and enhances gut motility.`,
    },
    {
      day: 129,
      protocol: `Fermented condiment day: Use miso dressing, kimchi mayo, sauerkraut relish, or probiotic hot sauce on everything.`,
      ritual: `Wim Hof breathing + progressive muscle relaxation, head to toe.`,
      tip: `Fermented condiments make it easy to add probiotics to every meal without changing your whole diet.`,
      fact: `Fermented hot sauces contain Lactobacillus that survives stomach acid better than most supplements.`,
    },
    {
      day: 130,
      protocol: `Sleep optimization dinner: Tart cherry juice + chamomile tea + magnesium-rich meal (salmon, spinach, dark chocolate).`,
      ritual: `Wim Hof breathing + evening routine: no screens 1 hr before bed, dim lights.`,
      tip: `Deep sleep is when your gut does 70% of its repair work. Optimizing sleep optimizes digestion.`,
      fact: `Tart cherries are one of the few natural sources of melatonin — your gut-healing sleep hormone.`,
    },
    {
      day: 131,
      protocol: `Intermittent fasting day: 16-hour fast, 8-hour eating window. Break fast with bone broth, then normal meals.`,
      ritual: `Wim Hof breathing during fasting period + gentle yoga.`,
      tip: `Periodic fasting activates autophagy — your body's cellular cleanup system that removes damaged gut cells.`,
      fact: `During a 16-hour fast, your MMC completes 8-10 full intestinal sweeps, thoroughly cleaning your gut.`,
    },
    {
      day: 132,
      protocol: `Anti-anxiety gut protocol: Magnesium glycinate supplement + chamomile + L-theanine green tea + probiotic foods.`,
      ritual: `Wim Hof breathing + 5-4-3-2-1 grounding exercise (5 things you see, 4 hear, 3 touch, 2 smell, 1 taste).`,
      tip: `Magnesium glycinate is the most bioavailable form for both gut relaxation and anxiety reduction.`,
      fact: `70% of people with IBS also have anxiety — healing the gut often resolves both simultaneously.`,
    },
    {
      day: 133,
      protocol: `Diversity sprint: Include beans, lentils, chickpeas, and at least 3 different vegetables in your meals today.`,
      ritual: `Wim Hof breathing + 2 min humming or chanting (vibrates vagus nerve).`,
      tip: `Legumes are the #1 food associated with longevity in every Blue Zone population studied.`,
      fact: `One cup of lentils provides 16g of fiber — prebiotic fuel that feeds over 100 beneficial species.`,
    },
    {
      day: 134,
      protocol: `Skin-from-within protocol: Collagen + vitamin C rich foods (bell pepper, kiwi, citrus) + zinc (pumpkin seeds).`,
      ritual: `Wim Hof breathing + dry brushing skin before shower (supports lymph drainage).`,
      tip: `Skin health is a direct reflection of gut health. Feed your gut, and your skin will glow.`,
      fact: `Gut bacteria produce biotin, vitamin K, and other nutrients that directly influence skin appearance.`,
    },
    {
      day: 135,
      protocol: `Energy optimization: Green tea + L-theanine + cordyceps mushroom powder in morning smoothie.`,
      ritual: `Wim Hof breathing + power pose for 2 minutes.`,
      tip: `Cordyceps increases ATP production — your cellular energy currency — without the crash of caffeine.`,
      fact: `Halfway through Phase 5! Your gut-brain axis is firing on all cylinders. Mental clarity should be noticeably sharper.`,
    },
    {
      day: 136,
      protocol: `Joint support through gut: Bone broth + turmeric + collagen + omega-3 rich fish + ginger tea.`,
      ritual: `Wim Hof breathing + gentle joint mobility exercises.`,
      tip: `Systemic inflammation from a leaky gut is the #1 hidden cause of joint pain. Your sealed gut prevents this.`,
      fact: `Bone broth contains glucosamine and chondroitin naturally — the same compounds sold as joint supplements.`,
    },
    {
      day: 137,
      protocol: `Microbiome diversity feast: Eat 20 different plant foods today. Include herbs, spices, nuts, seeds, and vegetables.`,
      ritual: `Wim Hof breathing + mindful eating at dinner — no screens, chew 25 times per bite.`,
      tip: `Aim for 30 different plants per week as a lifestyle habit. Diversity equals resilience.`,
      fact: `Hunter-gatherer populations eat 200+ different plant species per year. Modern Americans eat about 20.`,
    },
    {
      day: 138,
      protocol: `Hormone balance plate: Wild salmon + cruciferous vegetables (broccoli, cauliflower) + flaxseed + avocado.`,
      ritual: `Wim Hof breathing + 5 min meditation on body appreciation.`,
      tip: `Gut bacteria metabolize estrogen. A healthy microbiome prevents hormonal imbalances at the source.`,
      fact: `The 'estrobolome' is the collection of gut bacteria that specifically regulate estrogen levels.`,
    },
    {
      day: 139,
      protocol: `Immune fortress day: Elderberry syrup + garlic + ginger + echinacea tea + vitamin C foods + fermented foods.`,
      ritual: `Wim Hof breathing + cold exposure: 1 min cold shower or cold face immersion.`,
      tip: `80% of your immune system lives in your gut. These foods supercharge your intestinal immune response.`,
      fact: `Cold exposure activates brown fat and stimulates immune cell production in the gut.`,
    },
    {
      day: 140,
      protocol: `Deep hydration protocol: Drink 3L water today. Add electrolytes to one glass. Coconut water mid-afternoon.`,
      ritual: `Wim Hof breathing + track water intake mindfully — notice energy changes.`,
      tip: `Proper hydration keeps the mucus layer thick and protective. Dehydration thins it, exposing gut cells.`,
      fact: `Even 2% dehydration reduces gut motility and can trigger constipation within hours.`,
    },
    {
      day: 141,
      protocol: `Bitter foods for bile: Arugula + endive + dandelion greens + grapefruit + dark chocolate + coffee.`,
      ritual: `Wim Hof breathing + gentle liver area massage (right side below ribs).`,
      tip: `Bitter foods stimulate bile flow — your natural antimicrobial that keeps the small intestine clean.`,
      fact: `Ancient medicine traditions worldwide identified bitter foods as digestive medicine — modern science agrees.`,
    },
    {
      day: 142,
      protocol: `Resistant starch day: Cooled rice, cooled potatoes, green bananas, and overnight oats. All high in resistant starch.`,
      ritual: `Wim Hof breathing + 10 min stretching routine.`,
      tip: `Cooking and cooling starches creates resistant starch — the most powerful food for butyrate production.`,
      fact: `Reheated rice and potatoes have 2-3x more resistant starch than freshly cooked — a free health upgrade.`,
    },
    {
      day: 143,
      protocol: `Mindful eating practice: No screens during meals. Eat slowly. Chew thoroughly. Notice flavors and textures.`,
      ritual: `Wim Hof breathing + 5 min silent sitting before first meal.`,
      tip: `Mindful eating activates the cephalic phase of digestion — your body produces 20% more digestive enzymes.`,
      fact: `The mere sight and smell of food triggers enzyme production before food even enters your mouth.`,
    },
    {
      day: 144,
      protocol: `Spicy gut cleanse: Add cayenne, turmeric, ginger, and garlic to all meals. Capsaicin activates gut receptors.`,
      ritual: `Wim Hof breathing + warm lemon water gargle (stimulates throat vagus nerve endings).`,
      tip: `Capsaicin from peppers increases blood flow to the gut lining, accelerating cellular turnover.`,
      fact: `Capsaicin activates TRPV1 receptors in the gut, triggering protective mucus production.`,
    },
    {
      day: 145,
      protocol: `Recovery and rest: Light meals today. Bone broth, steamed vegetables, rice porridge. Let your gut rest and repair.`,
      ritual: `Wim Hof breathing + 20 min nap or deep rest (yoga nidra).`,
      tip: `Periodic rest days are as important for gut health as active protocols. Rest equals repair.`,
      fact: `Your gut does its deepest repair during rest — both sleep and periods of light eating.`,
    },
    {
      day: 146,
      protocol: `Prebiotic superfood: Jerusalem artichoke (sunchoke) roasted with garlic + olive oil + rosemary. Add to any meal.`,
      ritual: `Wim Hof breathing + gratitude list: 5 ways your digestion has improved.`,
      tip: `Sunchokes contain up to 76% inulin by dry weight — the most concentrated prebiotic food on Earth.`,
      fact: `Jerusalem artichokes were cultivated by Native Americans for centuries for digestive health.`,
    },
    {
      day: 147,
      protocol: `Gut-mood connection: Probiotic-rich breakfast + omega-3 lunch + tryptophan-rich dinner. Optimize feel-good chemicals.`,
      ritual: `Wim Hof breathing + social connection: call or meet a friend. Social bonds improve gut health.`,
      tip: `Positive social interactions reduce cortisol and increase oxytocin — both directly benefit your gut.`,
      fact: `People with strong social connections have more diverse gut microbiomes than isolated individuals.`,
    },
    {
      day: 148,
      protocol: `Seasonal eating practice: Visit a farmer's market. Buy and eat whatever is in season locally.`,
      ritual: `Wim Hof breathing + outdoor meditation in nature.`,
      tip: `Seasonal eating naturally rotates your diet, preventing the monotony that reduces microbiome diversity.`,
      fact: `Seasonal foods contain bacteria from local soil — a natural probiotic source our ancestors relied on.`,
    },
    {
      day: 149,
      protocol: `Evening gut ritual: Bone broth dinner, chamomile tea, magnesium supplement, gentle abdominal self-massage.`,
      ritual: `Full evening wind-down: dim lights, journaling, gratitude, 4-7-8 breathing.`,
      tip: `A consistent evening ritual trains your gut's circadian rhythm for optimal overnight repair.`,
      fact: `Your gut bacteria populations shift between day and night — a consistent schedule keeps them synchronized.`,
    },
    {
      day: 150,
      protocol: `Phase 5 celebration: Cook your most ambitious gut-healthy meal yet. Share it with someone you love.`,
      ritual: `Wim Hof breathing + reflection: write down your top 5 health improvements since day 1.`,
      tip: `Phase 5 Complete! Your gut-brain axis is optimized. Mental clarity, mood, and energy should be transformed.`,
      fact: `Phase 5 Complete! 150 days. Your gut is now a well-oiled machine supporting every system in your body.`,
    },
  ],
  $n = [
    {
      day: 151,
      protocol: `Lifetime protocol begins: Golden milk morning, Mediterranean lunch, probiotic dinner. This is your forever template.`,
      ritual: `Personalized breathing: choose your favorite technique from the last 150 days.`,
      tip: `Welcome to Phase 6! These final 30 days build the habits that protect your gut for a lifetime.`,
      fact: `It takes 66 days to form a habit. You're at 151 — your gut-healthy habits are deeply automatic now.`,
    },
    {
      day: 152,
      protocol: `Travel gut prep: Pack probiotics, ginger chews, activated charcoal, and peppermint tea for any upcoming travel.`,
      ritual: `Your chosen breathing technique + visualization of your healthiest self.`,
      tip: `Travel disrupts gut health. Having your toolkit ready means you'll never lose progress.`,
      fact: `Air travel changes gut bacteria within 24 hours due to pressure changes and altered eating patterns.`,
    },
    {
      day: 153,
      protocol: `Stress-proof your gut: Morning adaptogen tea + midday meditation + evening magnesium + fermented food at every meal.`,
      ritual: `Your chosen breathing technique + 2 min cold exposure.`,
      tip: `Life will throw stress at you. This protocol ensures your gut stays resilient through anything.`,
      fact: `People with diverse microbiomes recover from stress-related gut disruption 3x faster than those without.`,
    },
    {
      day: 154,
      protocol: `Teach someone: Share one gut health tip with a friend or family member today. Teaching reinforces your own knowledge.`,
      ritual: `Your chosen breathing technique + loving-kindness meditation.`,
      tip: `Teaching others about gut health solidifies your own habits and creates an accountability network.`,
      fact: `Social support for health habits increases long-term adherence by 65%.`,
    },
    {
      day: 155,
      protocol: `Advanced fermentation: Try making your own sauerkraut or water kefir. Simple recipes, powerful results.`,
      ritual: `Your chosen breathing technique + hands-on food prep as meditation.`,
      tip: `Homemade fermented foods contain 10-100x more probiotic strains than store-bought versions.`,
      fact: `A jar of homemade sauerkraut can contain over 1 trillion beneficial bacteria — more than any supplement.`,
    },
    {
      day: 156,
      protocol: `Elimination awareness: Notice if any food consistently causes discomfort. Your gut now signals clearly — listen to it.`,
      ritual: `Your chosen breathing technique + body awareness scan after each meal.`,
      tip: `A healthy gut sends clear signals. Bloating, gas, or fatigue after eating are now reliable feedback.`,
      fact: `After gut restoration, your interoception (internal body awareness) is dramatically improved.`,
    },
    {
      day: 157,
      protocol: `Anti-inflammatory lifestyle: Turmeric with every meal + 30 min movement + 7+ hours sleep + stress management.`,
      ritual: `Your chosen breathing technique + evening gratitude journaling.`,
      tip: `Inflammation is a daily battle. These four pillars — food, movement, sleep, stress — keep you winning.`,
      fact: `Chronic low-grade inflammation is the root cause of every major disease. Your gut controls inflammation.`,
    },
    {
      day: 158,
      protocol: `Seasonal transition prep: As seasons change, adjust your diet. More warm foods in cold months, lighter in warm months.`,
      ritual: `Your chosen breathing technique + 10 min outdoor time, observing nature.`,
      tip: `Your microbiome shifts with seasons naturally. Supporting this with diet changes optimizes adaptation.`,
      fact: `Studies on the Hadza tribe show dramatic seasonal shifts in gut bacteria tied to food availability.`,
    },
    {
      day: 159,
      protocol: `Weekly meal prep: Batch cook bone broth, fermented foods, prebiotic-rich grains, and roasted vegetables.`,
      ritual: `Your chosen breathing technique + cooking as mindful practice.`,
      tip: `Weekly meal prep is the single most effective strategy for maintaining gut health long-term.`,
      fact: `People who meal prep eat 25% more vegetables and 40% more fiber than those who don't.`,
    },
    {
      day: 160,
      protocol: `Alcohol awareness: If you drink, choose red wine (resveratrol) in moderation. Notice how alcohol affects your gut.`,
      ritual: `Your chosen breathing technique + honest self-reflection on habits.`,
      tip: `One glass of red wine can boost beneficial bacteria. More than two glasses damages the gut lining.`,
      fact: `Red wine polyphenols increase Akkermansia muciniphila — but excess alcohol kills the same bacteria.`,
    },
    {
      day: 161,
      protocol: `Sugar reset: Minimize added sugar today. Use honey, dates, or fruit for sweetness instead.`,
      ritual: `Your chosen breathing technique + 5 min walk after each meal.`,
      tip: `Excess sugar feeds harmful bacteria and yeast, potentially undoing your gut restoration work.`,
      fact: `It takes only 24 hours of high sugar intake to shift gut bacteria toward an unhealthy composition.`,
    },
    {
      day: 162,
      protocol: `Fiber variety challenge: Include 5 different fiber sources today — oats, beans, berries, vegetables, nuts.`,
      ritual: `Your chosen breathing technique + gentle abdominal massage.`,
      tip: `Different fibers feed different bacteria. Variety ensures no beneficial species gets starved out.`,
      fact: `Each type of dietary fiber promotes a unique set of gut bacterial species — diversity is protection.`,
    },
    {
      day: 163,
      protocol: `Gut-skin connection: Collagen + vitamin C + zinc + probiotics. Your skin reflects your gut — keep both radiant.`,
      ritual: `Your chosen breathing technique + facial massage and self-care.`,
      tip: `The gut-skin axis means that maintaining gut health directly maintains youthful, clear skin.`,
      fact: `Acne, eczema, and rosacea all have gut microbiome disruption as a contributing factor.`,
    },
    {
      day: 164,
      protocol: `Movement for digestion: 30 min walk + 10 min yoga + 5 min stretching. Gentle movement all day.`,
      ritual: `Your chosen breathing technique + walking meditation.`,
      tip: `Regular movement is the most underrated gut health strategy. It improves transit time by up to 30%.`,
      fact: `Exercise increases beneficial Akkermansia bacteria independently of diet changes.`,
    },
    {
      day: 165,
      protocol: `Gratitude for your body: Eat your favorite gut-healthy meals today. Appreciate how far your body has come.`,
      ritual: `Your chosen breathing technique + body gratitude meditation.`,
      tip: `Positive emotions about your body create measurable improvements in gut function via the vagus nerve.`,
      fact: `Day 165! Your gut has been in optimal health for 75 days. This duration creates lasting resilience.`,
    },
    {
      day: 166,
      protocol: `Sleep hygiene reset: No caffeine after 2 PM, no screens after 9 PM, cool bedroom, chamomile tea before bed.`,
      ritual: `Your chosen breathing technique + progressive relaxation before sleep.`,
      tip: `Sleep quality directly predicts gut health the following day. Protect your sleep like medicine.`,
      fact: `One night of poor sleep can reduce beneficial gut bacteria by 50% the next day.`,
    },
    {
      day: 167,
      protocol: `Cooking with herbs: Use fresh basil, cilantro, parsley, mint, and dill generously. Herbs are concentrated gut medicine.`,
      ritual: `Your chosen breathing technique + herb garden time if you have one.`,
      tip: `Fresh herbs provide more concentrated polyphenols per gram than almost any other food category.`,
      fact: `Parsley contains apigenin, the same gut-healing compound found in chamomile — but in higher concentrations.`,
    },
    {
      day: 168,
      protocol: `Social eating: Share a gut-healthy meal with friends or family. Connection + nutrition = optimal health.`,
      ritual: `Your chosen breathing technique + presence practice during social meal.`,
      tip: `Eating together reduces stress hormones and increases digestive enzyme production.`,
      fact: `People who regularly eat with others have more diverse microbiomes than solo eaters.`,
    },
    {
      day: 169,
      protocol: `Gut audit: Review your symptoms from day 1 vs now. Journal the differences. Celebrate every improvement.`,
      ritual: `Your chosen breathing technique + journaling comparison: then vs now.`,
      tip: `Documenting your transformation creates powerful motivation for maintaining these habits.`,
      fact: `Writing about health improvements activates reward circuits in the brain, reinforcing positive behaviors.`,
    },
    {
      day: 170,
      protocol: `Advanced probiotic rotation: This week, try a different fermented food each day — kefir, kimchi, sauerkraut, miso, kombucha, tempeh, yogurt.`,
      ritual: `Your chosen breathing technique + intention setting for the final 10 days.`,
      tip: `Rotating probiotic sources prevents any single strain from dominating and maintains healthy diversity.`,
      fact: `Your microbiome has a 'competitive exclusion' mechanism — diverse incoming bacteria keep each other balanced.`,
    },
    {
      day: 171,
      protocol: `Anti-aging gut protocol: Resveratrol + quercetin + collagen + omega-3 + fermented foods + green tea.`,
      ritual: `Your chosen breathing technique + cold-hot shower contrast (30s cold, 30s hot, 3 rounds).`,
      tip: `These six compounds together activate longevity pathways (sirtuins, AMPK, mTOR regulation) via the gut.`,
      fact: `Centenarians consistently have more diverse gut microbiomes than their younger, less healthy peers.`,
    },
    {
      day: 172,
      protocol: `Toxin avoidance: Choose organic produce, filter your water, avoid plastic containers for food. Protect your gut from chemicals.`,
      ritual: `Your chosen breathing technique + environmental awareness meditation.`,
      tip: `Pesticides, chlorine, and BPA all damage gut bacteria. Minimizing exposure preserves your restoration.`,
      fact: `Glyphosate (Roundup) was originally patented as an antibiotic — it kills gut bacteria at trace levels.`,
    },
    {
      day: 173,
      protocol: `Build your perfect plate template: 1/4 protein + 1/4 complex carbs + 1/2 colorful vegetables + fermented side + healthy fat.`,
      ritual: `Your chosen breathing technique + photograph your plate — make it beautiful.`,
      tip: `This plate ratio, used at every meal, naturally maintains optimal gut health without counting anything.`,
      fact: `The 'perfect plate' approach has been validated in every major nutritional study of the last decade.`,
    },
    {
      day: 174,
      protocol: `Maintenance supplement check: Assess which supplements you still benefit from. Many can now be replaced with food.`,
      ritual: `Your chosen breathing technique + inventory of your health toolkit.`,
      tip: `A well-maintained gut often reduces supplement needs by 50-70%. Food becomes your primary medicine.`,
      fact: `With a healthy microbiome, your gut synthesizes B vitamins, vitamin K, and short-chain fatty acids naturally.`,
    },
    {
      day: 175,
      protocol: `Five-day countdown: Focus on the 5 habits that made the biggest difference for you. Double down on them.`,
      ritual: `Your chosen breathing technique + visualize your healthy future self.`,
      tip: `Everyone's top 5 habits are different. Identify yours and make them non-negotiable.`,
      fact: `Day 175! Your commitment to 175 days of gut care puts you in the top 1% of health-conscious people.`,
    },
    {
      day: 176,
      protocol: `Write your maintenance protocol: Based on 175 days of data, write down your personal daily gut health routine.`,
      ritual: `Your chosen breathing technique + journaling your forever protocol.`,
      tip: `A personalized written protocol is 10x more likely to be followed than a mental note.`,
      fact: `People who write down their health routines adhere to them 42% more consistently long-term.`,
    },
    {
      day: 177,
      protocol: `Stock your kitchen: Ensure you have all maintenance staples — bone broth, fermented foods, spices, teas, collagen.`,
      ritual: `Your chosen breathing technique + kitchen organization as self-care.`,
      tip: `A well-stocked kitchen eliminates the #1 barrier to healthy eating: convenience.`,
      fact: `Kitchen environment predicts dietary choices more accurately than willpower or knowledge.`,
    },
    {
      day: 178,
      protocol: `Teach your body to self-regulate: Eat intuitively today. Trust your gut signals — hunger, fullness, cravings — completely.`,
      ritual: `Your chosen breathing technique + full body gratitude scan.`,
      tip: `After 178 days, your gut-brain communication is clear. Trust the signals your body sends you.`,
      fact: `A healed gut sends accurate hunger and satiety signals. Overeating becomes naturally less likely.`,
    },
    {
      day: 179,
      protocol: `Penultimate day: Your favorite protocol meal + your favorite ritual + your favorite fermented food. A greatest hits day.`,
      ritual: `All your favorite breathing techniques combined into one session.`,
      tip: `Tomorrow is your final day. You've built something remarkable — a gut that will serve you for life.`,
      fact: `Day 179: One more day. Your transformation from day 1 to now is nothing short of extraordinary.`,
    },
    {
      day: 180,
      protocol: `Day 180 — Protocol Complete! Golden milk morning, celebration feast lunch, gratitude dinner with loved ones. You did it!`,
      ritual: `Final ritual: hands on belly, eyes closed, 3 deep breaths. Say 'thank you' to your body.`,
      tip: `Congratulations! 180 days of dedication. Your gut health is transformed. Maintain these habits and thrive forever.`,
      fact: `Day 180 — COMPLETE! Six months of gut restoration. Search & Destroy, Repair & Seal, Recolonize & Protect, Maintain, Optimize, Master. You are a gut health champion.`,
    },
  ],
  er = [...Jn, ...Yn, ...Xn, ...Zn, ...Qn, ...$n],
  tr = (e) => er.find((t) => t.day === e) || er[0],
  nr = (e) => (e <= 30 ? 1 : e <= 60 ? 2 : e <= 90 ? 3 : e <= 120 ? 4 : e <= 150 ? 5 : 6),
  rr = (e) =>
    [
      ``,
      `Search & Destroy`,
      `Repair & Seal`,
      `Recolonize & Protect`,
      `Strengthen & Maintain`,
      `Gut-Brain Optimize`,
      `Lifetime Mastery`,
    ][e],
  ir = (e) => [``, `🔥`, `🛡️`, `🌿`, `💪`, `🧠`, `👑`][e],
  ar = (e) => [[], [1, 30], [31, 60], [61, 90], [91, 120], [121, 150], [151, 180]][e],
  or = () => {
    try {
      let e = localStorage.getItem(`emma_180_active`);
      return e && JSON.parse(e) ? 180 : 90;
    } catch {
      return 90;
    }
  },
  sr = [
    { path: `/`, icon: xn, label: `Home` },
    { path: `/protocol`, icon: yn, label: `7X` },
    { path: `/detox`, icon: _SI, label: `Shield` },
    { path: `/sleep`, icon: Tn, label: `Sleep` },
    { path: `/progress`, icon: Zt, label: `Progress` },
  ];
function cr() {
  let e = Ge(),
    t = qe();
  return (0, k.jsxs)(`nav`, {
    className: `fixed bottom-0 left-0 right-0 bg-white border-t border-[#F0F0EA] z-50`,
    children: [
      (0, k.jsx)(`div`, {
        className: `max-w-lg mx-auto flex justify-around items-center h-14`,
        children: sr.map((n) => {
          let r = e.pathname === n.path || (n.path === `/` && e.pathname === ``);
          return (0, k.jsxs)(
            `button`,
            {
              onClick: () => t(n.path),
              className: `flex flex-col items-center gap-0.5 min-w-0 flex-1 py-1.5 active:scale-95 transition-transform`,
              children: [
                (0, k.jsx)(n.icon, {
                  size: 20,
                  strokeWidth: r ? 2 : 1.5,
                  className: r ? `text-[#1B6B4A]` : `text-[#C5C5BE]`,
                }),
                (0, k.jsx)(`span`, {
                  className: `text-[10px] font-medium ${r ? `text-[#1B6B4A]` : `text-[#C5C5BE]`}`,
                  children: n.label,
                }),
              ],
            },
            n.path,
          );
        }),
      }),
      (0, k.jsx)(`div`, { className: `h-[env(safe-area-inset-bottom)] bg-white` }),
    ],
  });
}
var lr = [
    { id: `water`, icon: hn, label: `64oz Water` },
    { id: `steps`, icon: () => (0, k.jsx)(`span`, { className: `text-sm`, children: `🚶` }), label: `7K Steps` },
    {
      id: `morning`,
      icon: () => (0, k.jsx)(`span`, { className: `text-sm`, children: `🌅` }),
      label: `Morning Ritual`,
    },
  ],
  ur = {
    1: [`Archaea biofilms breaking down`, `Stomach acid normalizing`, `Toxin elimination accelerating`],
    2: [`Gut lining cells regenerating`, `Tight junctions repairing`, `Nutrient absorption improving`],
    3: [`Beneficial bacteria colonizing`, `Microbiome diversity increasing`, `Immune function strengthening`],
    4: [`Gut ecosystem stabilizing`, `Maintenance patterns forming`, `Food freedom expanding`],
    5: [`Gut-brain axis strengthening`, `Serotonin production optimizing`, `Mental clarity sharpening`],
    6: [`Lifetime habits solidifying`, `Microbiome self-regulating`, `Full-body transformation complete`],
  };
function dr() {
  let e = qe(),
    t = O.get(`emma_name`) || `Friend`,
    n = Tt(),
    r = tr(n),
    i = nr(n),
    a = rr(i),
    o = ir(i),
    s = ar(i),
    c = or(),
    l = c === 180 ? 6 : 3,
    [u, d] = (0, _.useState)(() => O.get(`emma_water_` + n) || 0),
    [f, p] = (0, _.useState)(() => O.get(`emma_day_done_` + n) || !1),
    [m, h] = (0, _.useState)(() => O.get(`emma_habits_` + n) || []),
    [g, v] = (0, _.useState)(() => Math.floor((n - 1) / 30)),
    [y, b] = (0, _.useState)(null),
    ee = O.get(`emma_180_active`, !1);
  ((0, _.useEffect)(() => {
    O.set(`emma_water_` + n, u);
  }, [u, n]),
    (0, _.useEffect)(() => {
      O.set(`emma_habits_` + n, m);
    }, [m, n]));
  let te = (e) => h((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e])),
    x = () => {
      (p(!0), O.set(`emma_day_done_` + n, !0));
    },
    ne = (() => {
      let e = 0;
      for (let t = n - 1; t >= 1 && O.get(`emma_day_done_` + t); t--) e++;
      return e;
    })(),
    S = (() => {
      let e = 0;
      for (let t = 1; t <= c; t++) O.get(`emma_day_done_` + t) && e++;
      return e;
    })(),
    re = Math.ceil(c / 30),
    C = g * 30 + 1,
    ie = Math.min(C + 29, c),
    ae = nr(C),
    oe = O.get(`emma_diagnostic_result`, null),
    w = (() => {
      let e = 0,
        t = 0;
      return (
        f && (e += 40),
        (t += 40),
        (e += Math.round((u / 8) * 30)),
        (t += 30),
        (e += Math.round((m.length / lr.length) * 30)),
        (t += 30),
        t > 0 ? Math.round((e / t) * 100) : 0
      );
    })(),
    se = (() => {
      let [e, t] = s;
      return Math.round(((n - e) / (t - e + 1)) * 100);
    })(),
    ce = (e) => {
      if (e === n) return;
      let t = tr(e);
      b({ day: e, ...t, phase: nr(e), phaseName: rr(nr(e)) });
    };
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `bg-gradient-to-r from-[#1B6B4A] to-[#155a3d] px-4 py-2.5 flex items-center justify-center space-x-2`,
        children: [
          (0, k.jsx)(Gt, { size: 11, className: `text-white/70` }),
          (0, k.jsx)(`p`, {
            className: `text-[11px] font-semibold text-white/90`,
            children: `Protocol validated by board-certified specialists`,
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-4 pb-2`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                children: [
                  (0, k.jsxs)(`h1`, { className: `text-2xl font-bold text-gray-900`, children: [Et(), `, `, t] }),
                  (0, k.jsxs)(`p`, {
                    className: `text-[13px] text-gray-400 mt-0.5`,
                    children: [`Day `, n, ` of your `, c, `-day journey`],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: () => e(`/faq`),
                    className: `w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center active:bg-gray-200 transition-colors`,
                    children: (0, k.jsx)(sn, { size: 18, className: `text-gray-500` }),
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center space-x-1.5 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1.5 rounded-full border border-green-200`,
                    children: [
                      (0, k.jsx)(`span`, { className: `text-[11px] font-bold text-[#D4874D]`, children: `🔥` }),
                      (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-[#D4874D]`, children: ne }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsx)(`button`, {
            onClick: () => e(`/tools/diagnostic`),
            className: `w-full bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl shadow-sm border border-teal-200 p-4 mb-5 text-left active:shadow-md transition-all`,
            children: (0, k.jsxs)(`div`, {
              className: `flex items-center gap-3.5`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `w-10 h-10 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center flex-shrink-0`,
                  children: (0, k.jsx)(`span`, { className: `text-lg`, children: `🩺` }),
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex-1 min-w-0`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center space-x-2`,
                      children: [
                        (0, k.jsx)(`p`, {
                          className: `text-[14px] font-bold text-gray-900`,
                          children: `Protocol Check-In`,
                        }),
                        (0, k.jsx)(`span`, {
                          className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-teal-500 text-white`,
                          children: `NEW`,
                        }),
                      ],
                    }),
                    oe
                      ? (0, k.jsxs)(`p`, {
                          className: `text-[12px] text-gray-400`,
                          children: [
                            `Last score: `,
                            (0, k.jsxs)(`span`, { className: `font-semibold text-teal-600`, children: [oe.pct, `%`] }),
                            ` · Tap to retake`,
                          ],
                        })
                      : (0, k.jsx)(`p`, {
                          className: `text-[12px] text-gray-400`,
                          children: `Find what's holding back your results`,
                        }),
                  ],
                }),
                (0, k.jsx)(an, { size: 16, className: `text-teal-400 flex-shrink-0` }),
              ],
            }),
          }),
          !ee &&
            n < 90 &&
            (0, k.jsxs)(`div`, {
              className: `bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-sm border border-gray-200 p-4 mb-5 opacity-70`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-2 mb-2`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gray-400 text-white`,
                      children: `🔒 LOCKED`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-[11px] text-gray-500 font-semibold`,
                      children: `Available after Day 90`,
                    }),
                  ],
                }),
                (0, k.jsx)(`h4`, {
                  className: `text-[14px] font-bold text-gray-600 mb-1`,
                  children: `180-Day Extended Protocol`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-[12px] text-gray-400 leading-relaxed`,
                  children: `Complete your 90-day protocol to unlock 90 extra days with advanced phases.`,
                }),
                (0, k.jsx)(`div`, {
                  className: `mt-3 w-full bg-gray-200 rounded-full h-1.5`,
                  children: (0, k.jsx)(`div`, {
                    className: `h-full bg-gray-400 rounded-full transition-all`,
                    style: { width: `${Math.round((n / 90) * 100)}%` },
                  }),
                }),
                (0, k.jsxs)(`p`, { className: `text-[10px] text-gray-400 mt-1.5`, children: [`Day `, n, ` of 90`] }),
              ],
            }),
          !ee &&
            n >= 90 &&
            (0, k.jsxs)(`div`, {
              className: `bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-sm border border-amber-200 p-4 mb-5`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-2 mb-2`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500 text-white`,
                      children: `UNLOCKED`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-[11px] text-amber-600 font-semibold`,
                      children: `You earned this!`,
                    }),
                  ],
                }),
                (0, k.jsx)(`h4`, {
                  className: `text-[14px] font-bold text-gray-900 mb-1`,
                  children: `180-Day Extended Protocol`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-[12px] text-gray-500 leading-relaxed mb-3`,
                  children: `Unlock 90 extra days: Strengthen & Maintain, Gut-Brain Optimize, and Lifetime Mastery phases.`,
                }),
                (0, k.jsxs)(`button`, {
                  onClick: () => {
                    (O.set(`emma_180_active`, !0), window.location.reload());
                  },
                  className: `flex items-center space-x-1.5 text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1.5 rounded-lg active:bg-amber-200 transition-colors`,
                  children: [
                    (0, k.jsx)(`span`, { children: `👑 Activate Free Extension` }),
                    (0, k.jsx)(an, { size: 12 }),
                  ],
                }),
              ],
            }),
          ee &&
            n <= 90 &&
            (0, k.jsxs)(`div`, {
              className: `bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl shadow-sm border border-emerald-200 p-4 mb-5`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-2 mb-1`,
                  children: [
                    (0, k.jsx)(`span`, {
                      className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500 text-white`,
                      children: `ACTIVE`,
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-[11px] text-emerald-600 font-semibold`,
                      children: `180-Day Protocol`,
                    }),
                  ],
                }),
                (0, k.jsx)(`p`, {
                  className: `text-[12px] text-gray-500 leading-relaxed`,
                  children: `3 bonus phases unlocked. Your calendar now extends to 180 days with advanced protocols.`,
                }),
              ],
            }),
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `w-full flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5 active:shadow-md transition-all`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-3.5`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center`,
                    children: (0, k.jsx)(`span`, { className: `text-lg`, children: `🧰` }),
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `text-left`,
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900`, children: `Tools & Extras` }),
                      (0, k.jsx)(`p`, {
                        className: `text-[12px] text-gray-400`,
                        children: `Recipes, shopping list, journal & more`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsx)(an, { size: 16, className: `text-gray-300` }),
            ],
          }),
          (0, k.jsxs)(`div`, { className: `mb-5`, children: [
            (0, k.jsx)(`p`, { className: `text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3`, children: `Premium Modules` }),
            (0, k.jsxs)(`div`, { className: `space-y-2.5`, children: [
              [`accelerator`, `⚡`, `7X Accelerator`, `/protocol`],
              [`detox`, `🛡️`, `Detox Shield`, `/detox`],
              [`sleep`, `🌙`, `Sleep & Digestion Mastery`, `/sleep`],
            ].map(function(mod) {
              var unlocked = O.get(`emma_unlock_` + mod[0], !1) || O.get(`emma_unlock_all`, !1);
              return (0, k.jsxs)(`button`, {
                onClick: function() { e(unlocked ? mod[3] : `/unlock`); },
                className: `w-full flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-4 active:shadow-md transition-all`,
                children: [
                  (0, k.jsxs)(`div`, { className: `flex items-center space-x-3`, children: [
                    (0, k.jsx)(`div`, { className: `w-10 h-10 rounded-xl flex items-center justify-center ` + (unlocked ? `bg-emerald-50` : `bg-gray-50`), children: (0, k.jsx)(`span`, { className: `text-lg`, children: mod[1] }) }),
                    (0, k.jsxs)(`div`, { className: `text-left`, children: [
                      (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900`, children: mod[2] }),
                      (0, k.jsx)(`p`, { className: `text-[11px] ` + (unlocked ? `text-emerald-600 font-semibold` : `text-gray-400`), children: unlocked ? `Active` : `Locked — Enter code to unlock` }),
                    ] }),
                  ] }),
                  (0, k.jsx)(an, { size: 16, className: `text-gray-300` }),
                ],
              }, mod[0]);
            }) }),
          ] }),
          (0, k.jsxs)(`div`, {
            className: `bg-gradient-to-br from-[#1B6B4A] to-[#155a3d] rounded-2xl p-5 mb-5 relative overflow-hidden`,
            children: [
              (0, k.jsx)(`div`, {
                className: `absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl opacity-5 -mr-10 -mt-10`,
              }),
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-3`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-lg`, children: o }),
                  (0, k.jsxs)(`span`, {
                    className: `text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/15 px-2.5 py-0.5 rounded-full`,
                    children: [`Phase `, i, ` of `, l],
                  }),
                ],
              }),
              (0, k.jsx)(`h2`, { className: `text-[18px] font-bold text-white`, children: a }),
              (0, k.jsxs)(`p`, {
                className: `text-[12px] text-white/70 mt-1.5 leading-relaxed`,
                children: [`Days `, s[0], `-`, s[1], ` · Follow your daily protocol and mark each day complete.`],
              }),
              (0, k.jsx)(`div`, {
                className: `mt-3 w-full bg-white/20 rounded-full h-1.5`,
                children: (0, k.jsx)(`div`, {
                  className: `h-full bg-white/70 rounded-full transition-all`,
                  style: { width: `${se}%` },
                }),
              }),
              (0, k.jsxs)(`p`, { className: `text-[10px] text-white/50 mt-1`, children: [se, `% of phase complete`] }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-3`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-sm`, children: `🔬` }),
                  (0, k.jsx)(`span`, {
                    className: `text-[14px] font-bold text-gray-900`,
                    children: `Your Body Right Now`,
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `space-y-2.5`,
                children: (ur[i] || ur[1]).map((e, t) =>
                  (0, k.jsxs)(
                    `div`,
                    {
                      className: `flex items-center space-x-2.5`,
                      children: [
                        (0, k.jsx)(`div`, { className: `w-2 h-2 rounded-full bg-[#1B6B4A] flex-shrink-0` }),
                        (0, k.jsx)(`span`, { className: `text-[13px] text-gray-600`, children: e }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center justify-between mb-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center space-x-2`,
                    children: [
                      (0, k.jsx)(`span`, { className: `text-sm`, children: `💚` }),
                      (0, k.jsx)(`span`, {
                        className: `text-[14px] font-bold text-gray-900`,
                        children: `Today's Gut Score`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`span`, {
                    className: `text-[18px] font-bold ${w >= 80 ? `text-emerald-600` : w >= 50 ? `text-amber-500` : `text-red-500`}`,
                    children: [w, `%`],
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `w-full bg-gray-100 rounded-full h-2.5 mb-2`,
                children: (0, k.jsx)(`div`, {
                  className: `h-full rounded-full transition-all duration-500 ${w >= 80 ? `bg-emerald-500` : w >= 50 ? `bg-amber-500` : `bg-red-500`}`,
                  style: { width: `${w}%` },
                }),
              }),
              (0, k.jsxs)(`div`, {
                className: `flex justify-between text-[10px] text-gray-400`,
                children: [
                  (0, k.jsx)(`span`, { children: `Complete protocol, water & habits to reach 100%` }),
                  (0, k.jsx)(`span`, { children: w >= 80 ? `🌟` : w >= 50 ? `💪` : `⚡` }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 mb-5 overflow-hidden`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `p-5 flex justify-between items-center`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center space-x-2`,
                    children: [
                      (0, k.jsx)(`span`, { className: `text-sm`, children: `📅` }),
                      (0, k.jsxs)(`span`, {
                        className: `text-[14px] font-bold text-gray-900`,
                        children: [c, `-Day Calendar`],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`span`, { className: `text-[12px] text-gray-400`, children: [S, `/`, c] }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `px-5 flex items-center justify-between mb-3`,
                children: [
                  (0, k.jsx)(`button`, {
                    onClick: () => v((e) => Math.max(0, e - 1)),
                    disabled: g === 0,
                    className: `w-8 h-8 rounded-full flex items-center justify-center transition-all ${g === 0 ? `bg-gray-50 text-gray-200` : `bg-gray-100 text-gray-600 active:bg-gray-200`}`,
                    children: (0, k.jsx)(nn, { size: 16 }),
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `text-center`,
                    children: [
                      (0, k.jsxs)(`p`, {
                        className: `text-[13px] font-bold text-gray-900`,
                        children: [`Days `, C, `-`, ie],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[10px] text-gray-400`, children: rr(ae) }),
                    ],
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => v((e) => Math.min(re - 1, e + 1)),
                    disabled: g >= re - 1,
                    className: `w-8 h-8 rounded-full flex items-center justify-center transition-all ${g >= re - 1 ? `bg-gray-50 text-gray-200` : `bg-gray-100 text-gray-600 active:bg-gray-200`}`,
                    children: (0, k.jsx)(an, { size: 16 }),
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `px-5 pb-5`,
                children: (0, k.jsx)(`div`, {
                  className: `grid grid-cols-6 gap-y-2.5 gap-x-2 place-items-center`,
                  children: [...Array(ie - C + 1)].map((e, t) => {
                    let r = C + t,
                      i = r === n,
                      a = O.get(`emma_day_done_` + r),
                      o = y && y.day === r;
                    return (0, k.jsx)(
                      `button`,
                      {
                        onClick: () => (i ? null : ce(r)),
                        className: `w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${i && !a ? `bg-white border-2 border-[#D4874D] text-[#D4874D] shadow-sm` : ``}
                    ${a ? `bg-[#1B6B4A] text-white` : ``}
                    ${o && !a ? `bg-blue-50 border-2 border-blue-400 text-blue-600` : ``}
                    ${!i && !a && !o ? `bg-gray-50 text-gray-400 border border-gray-100 active:bg-gray-100` : ``}
                  `,
                        children: r,
                      },
                      r,
                    );
                  }),
                }),
              }),
              y &&
                (0, k.jsxs)(`div`, {
                  className: `border-t border-gray-100 p-5 bg-gray-50/50 animate-fade-in`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `flex items-center justify-between mb-3`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `flex items-center space-x-2`,
                          children: [
                            (0, k.jsx)(`span`, {
                              className: `text-[10px] font-bold text-[#1B6B4A] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase tracking-widest`,
                              children: y.phaseName,
                            }),
                            (0, k.jsxs)(`span`, {
                              className: `text-[13px] font-bold text-gray-900`,
                              children: [`Day `, y.day],
                            }),
                          ],
                        }),
                        (0, k.jsx)(`button`, {
                          onClick: () => b(null),
                          className: `w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center`,
                          children: (0, k.jsx)(Un, { size: 14, className: `text-gray-400` }),
                        }),
                      ],
                    }),
                    (0, k.jsx)(`p`, {
                      className: `text-[13px] text-gray-600 leading-relaxed mb-2`,
                      children: y.protocol,
                    }),
                    (0, k.jsxs)(`p`, {
                      className: `text-[11px] text-gray-400 leading-relaxed`,
                      children: [`💡 `, y.tip],
                    }),
                  ],
                }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5 relative overflow-hidden`,
            children: [
              (0, k.jsx)(`div`, {
                className: `absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#1B6B4A] to-[#D4874D]`,
              }),
              (0, k.jsxs)(`div`, {
                className: `pl-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center justify-between mb-3`,
                    children: [
                      (0, k.jsxs)(`p`, {
                        className: `text-[15px] font-bold text-gray-900`,
                        children: [`Day `, n, ` Protocol`],
                      }),
                      (0, k.jsx)(`span`, {
                        className: `text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-100 text-green-700`,
                        children: a.split(` `)[0],
                      }),
                    ],
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-sm text-gray-600 leading-relaxed border-l-2 border-[#D4874D] pl-3 mb-4`,
                    children: r.protocol,
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `mb-4`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5`,
                        children: `Today's Tip`,
                      }),
                      (0, k.jsx)(`p`, { className: `text-[12px] text-gray-500 leading-relaxed`, children: r.tip }),
                    ],
                  }),
                  f
                    ? (0, k.jsxs)(`div`, {
                        className: `w-full py-4 rounded-xl flex items-center justify-center space-x-2 font-semibold bg-green-50 text-[#1B6B4A] border border-green-200`,
                        children: [
                          (0, k.jsx)(`span`, { children: `✓` }),
                          (0, k.jsxs)(`span`, { children: [`Day `, n, ` Complete`] }),
                        ],
                      })
                    : (0, k.jsxs)(`button`, {
                        onClick: x,
                        className: `w-full py-4 rounded-xl flex items-center justify-center space-x-2 font-semibold transition-all bg-[#1B6B4A] text-white shadow-lg shadow-[#1B6B4A]/20 active:bg-[#155a3d]`,
                        children: [
                          (0, k.jsx)(`span`, { children: `🌿` }),
                          (0, k.jsxs)(`span`, { children: [`Mark Day `, n, ` as Done`] }),
                        ],
                      }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center justify-between mb-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center space-x-2`,
                    children: [
                      (0, k.jsx)(hn, { size: 16, className: `text-blue-500` }),
                      (0, k.jsx)(`span`, {
                        className: `text-[14px] font-bold text-gray-900`,
                        children: `Hydration Tracker`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`span`, {
                    className: `text-[12px] font-semibold text-blue-500`,
                    children: [u, `/`, 8, ` glasses`],
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `flex gap-2 mb-3`,
                children: [...Array(8)].map((e, t) =>
                  (0, k.jsx)(
                    `div`,
                    {
                      onClick: () => d(t < u ? t : t + 1),
                      className: `flex-1 h-8 rounded-lg transition-all duration-300 cursor-pointer ${t < u ? `bg-blue-500 border border-blue-500` : `bg-blue-50 border border-blue-100`}`,
                    },
                    t,
                  ),
                ),
              }),
              (0, k.jsx)(`button`, {
                onClick: () => d(Math.min(u + 1, 8)),
                className: `w-full py-2.5 rounded-xl text-sm font-semibold transition-all bg-blue-50 text-blue-600 border border-blue-200 active:bg-blue-100`,
                children: `+ Add Glass of Water`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center justify-between mb-3`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Daily Habits` }),
                  (0, k.jsxs)(`span`, { className: `text-[12px] text-gray-400`, children: [m.length, `/`, lr.length] }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `flex gap-3`,
                children: lr.map((e) => {
                  let t = m.includes(e.id);
                  return (0, k.jsxs)(
                    `button`,
                    {
                      onClick: () => te(e.id),
                      className: `flex-1 flex flex-col items-center gap-2 py-3.5 rounded-xl transition-all ${t ? `bg-emerald-50 border border-emerald-200` : `bg-gray-50 border border-gray-100`}`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg flex items-center justify-center ${t ? `bg-[#1B6B4A] text-white` : `bg-white border border-gray-100`}`,
                          children:
                            typeof e.icon == `function`
                              ? (0, k.jsx)(e.icon, {})
                              : (0, k.jsx)(e.icon, { size: 14, className: t ? `text-white` : `text-gray-400` }),
                        }),
                        (0, k.jsx)(`span`, {
                          className: `text-[10px] font-semibold ${t ? `text-[#1B6B4A]` : `text-gray-400`}`,
                          children: e.label,
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-4`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-sm`, children: `📊` }),
                  (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Weekly Summary` }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `grid grid-cols-4 gap-2.5`,
                children: [
                  { label: `Days Done`, value: S, color: `text-[#1B6B4A]` },
                  { label: `Streak`, value: ne, color: `text-[#D4874D]` },
                  { label: `Water`, value: u, color: `text-blue-500` },
                  { label: `Phase`, value: i, color: `text-purple-500` },
                ].map((e) =>
                  (0, k.jsxs)(
                    `div`,
                    {
                      className: `text-center py-3 bg-gray-50 rounded-xl border border-gray-100`,
                      children: [
                        (0, k.jsx)(`p`, { className: `text-[18px] font-bold ${e.color}`, children: e.value }),
                        (0, k.jsx)(`p`, {
                          className: `text-[10px] text-gray-400 font-semibold mt-0.5`,
                          children: e.label,
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 text-center border border-green-100 mb-5`,
            children: (0, k.jsx)(`p`, {
              className: `text-[13px] text-[#1B6B4A] font-medium italic leading-relaxed`,
              children: `"Your gut feeds every major organ in your body. Heal the gut, heal your life."`,
            }),
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-2.5`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-sm`, children: `🧠` }),
                  (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Did You Know?` }),
                ],
              }),
              (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 leading-relaxed`, children: r.fact }),
            ],
          }),
          (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900 mb-3`, children: `Bonus Content` }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-2 gap-3 mb-5`,
            children: [
              {
                icon: jn,
                label: `Shopping List`,
                path: `/tools/shopping`,
                bg: `bg-blue-50`,
                iconColor: `text-blue-500`,
                textColor: `text-blue-600`,
                border: `border-blue-100`,
              },
              {
                icon: Vn,
                label: `Gut Recipes`,
                path: `/tools/recipes`,
                bg: `bg-amber-50`,
                iconColor: `text-amber-500`,
                textColor: `text-amber-600`,
                border: `border-amber-100`,
              },
              {
                icon: Tn,
                label: `Sleep Guide`,
                path: `/tools/sleep`,
                bg: `bg-purple-50`,
                iconColor: `text-purple-500`,
                textColor: `text-purple-600`,
                border: `border-purple-100`,
              },
              {
                icon: qt,
                label: `My Journal`,
                path: `/tools/journal`,
                bg: `bg-rose-50`,
                iconColor: `text-rose-500`,
                textColor: `text-rose-600`,
                border: `border-rose-100`,
              },
              { icon: () => (0, k.jsx)(`span`, { className: `text-sm`, children: `📱` }), label: `Install App`, path: `/install`, bg: `bg-sky-50`, iconColor: `text-sky-500`, textColor: `text-sky-600`, border: `border-sky-100` },
              { icon: () => (0, k.jsx)(`span`, { className: `text-sm`, children: `🔑` }), label: `Unlock Module`, path: `/unlock`, bg: `bg-violet-50`, iconColor: `text-violet-500`, textColor: `text-violet-600`, border: `border-violet-100` },
            ].map((t) =>
              (0, k.jsxs)(
                `button`,
                {
                  onClick: () => e(t.path),
                  className: `${t.bg} rounded-2xl p-4 flex flex-col items-center gap-2.5 border ${t.border} active:scale-[0.98] transition-all`,
                  children: [
                    (0, k.jsx)(t.icon, { size: 20, className: t.iconColor }),
                    (0, k.jsx)(`span`, { className: `text-[12px] font-bold ${t.textColor}`, children: t.label }),
                  ],
                },
                t.path,
              ),
            ),
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
var fr = [
    { day: 7, label: `First Week`, emoji: `🌱` },
    { day: 14, label: `Two Weeks`, emoji: `💪` },
    { day: 30, label: `Phase 1 Done`, emoji: `🔥` },
    { day: 45, label: `Halfway`, emoji: `⭐` },
    { day: 60, label: `Phase 2 Done`, emoji: `🛡️` },
    { day: 75, label: `75 Days`, emoji: `🏆` },
    { day: 90, label: `90 Days!`, emoji: `👑` },
  ],
  pr = [
    { day: 7, label: `First Week`, emoji: `🌱` },
    { day: 30, label: `Phase 1`, emoji: `🔥` },
    { day: 60, label: `Phase 2`, emoji: `🛡️` },
    { day: 90, label: `Phase 3`, emoji: `🌿` },
    { day: 120, label: `Phase 4`, emoji: `💪` },
    { day: 150, label: `Phase 5`, emoji: `🧠` },
    { day: 180, label: `Master!`, emoji: `👑` },
  ];
function mr() {
  let e = Tt(),
    t = nr(e),
    n = or(),
    r = n === 180 ? pr : fr,
    i = (0, _.useMemo)(() => {
      let t = 0;
      for (let n = e; n >= 1 && O.get(`emma_day_done_` + n); n--) t++;
      return t;
    }, [e]),
    a = (0, _.useMemo)(() => {
      let t = 0;
      for (let n = 1; n <= e; n++) t += O.get(`emma_water_` + n) || 0;
      return t;
    }, [e]),
    o = (0, _.useMemo)(() => {
      let t = 0;
      for (let n = 1; n <= e; n++) O.get(`emma_day_done_` + n) && t++;
      return t;
    }, [e]),
    s = Math.round((e / n) * 100),
    c = 2 * Math.PI * 54,
    l = c - (s / 100) * c;
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-5`,
        children: [
          (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900`, children: `Your Progress` }),
          (0, k.jsxs)(`p`, { className: `text-[13px] text-gray-400 mt-0.5`, children: [`Day `, e, ` of `, n] }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `relative w-32 h-32 mb-4`,
                children: [
                  (0, k.jsxs)(`svg`, {
                    className: `w-32 h-32 -rotate-90`,
                    viewBox: `0 0 120 120`,
                    children: [
                      (0, k.jsx)(`circle`, {
                        cx: `60`,
                        cy: `60`,
                        r: `54`,
                        fill: `none`,
                        stroke: `#F0F0EA`,
                        strokeWidth: `8`,
                      }),
                      (0, k.jsx)(`circle`, {
                        cx: `60`,
                        cy: `60`,
                        r: `54`,
                        fill: `none`,
                        stroke: `#1B6B4A`,
                        strokeWidth: `8`,
                        strokeDasharray: c,
                        strokeDashoffset: l,
                        strokeLinecap: `round`,
                        className: `transition-all duration-1000`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-center`,
                    children: [
                      (0, k.jsxs)(`span`, { className: `text-3xl font-bold text-gray-900`, children: [s, `%`] }),
                      (0, k.jsx)(`span`, {
                        className: `text-[10px] text-gray-400 font-semibold`,
                        children: `Complete`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2`,
                children: [
                  (0, k.jsx)(`span`, { className: `text-lg`, children: ir(t) }),
                  (0, k.jsxs)(`span`, {
                    className: `text-sm font-bold text-[#1B6B4A]`,
                    children: [`Phase `, t, `: `, rr(t)],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-2 gap-3 mb-5`,
            children: [
              {
                icon: _n,
                color: `text-orange-500`,
                bg: `bg-orange-50`,
                border: `border-orange-100`,
                value: i,
                label: `Day Streak`,
              },
              {
                icon: zn,
                color: `text-amber-500`,
                bg: `bg-amber-50`,
                border: `border-amber-100`,
                value: o,
                label: `Days Completed`,
              },
              {
                icon: hn,
                color: `text-blue-500`,
                bg: `bg-blue-50`,
                border: `border-blue-100`,
                value: a,
                label: `Glasses of Water`,
              },
              {
                icon: Fn,
                color: `text-purple-500`,
                bg: `bg-purple-50`,
                border: `border-purple-100`,
                value: e,
                label: `Current Day`,
              },
            ].map((e) =>
              (0, k.jsxs)(
                `div`,
                {
                  className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-4`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-8 h-8 rounded-lg ${e.bg} border ${e.border} flex items-center justify-center mb-3`,
                      children: (0, k.jsx)(e.icon, { size: 16, className: e.color }),
                    }),
                    (0, k.jsx)(`p`, { className: `text-2xl font-bold text-gray-900`, children: e.value }),
                    (0, k.jsx)(`p`, { className: `text-[11px] text-gray-400 font-semibold`, children: e.label }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, k.jsxs)(`div`, {
            className: `mb-5`,
            children: [
              (0, k.jsx)(`h3`, { className: `text-[14px] font-bold text-gray-900 mb-3`, children: `Badges` }),
              (0, k.jsx)(`div`, {
                className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                children: (0, k.jsx)(`div`, {
                  className: `grid grid-cols-4 gap-3`,
                  children: r.map((t) => {
                    let n = e >= t.day;
                    return (0, k.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col items-center gap-1.5`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-12 h-12 rounded-full flex items-center justify-center text-xl ${n ? `bg-emerald-50 border border-emerald-200` : `bg-gray-50 border border-gray-100 grayscale opacity-40`}`,
                            children: t.emoji,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[10px] font-semibold text-center ${n ? `text-gray-900` : `text-gray-300`}`,
                            children: t.label,
                          }),
                        ],
                      },
                      t.day,
                    );
                  }),
                }),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `mb-5`,
            children: [
              (0, k.jsx)(`h3`, {
                className: `text-[14px] font-bold text-gray-900 mb-3`,
                children: `This Week's Hydration`,
              }),
              (0, k.jsx)(`div`, {
                className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                children: (0, k.jsx)(`div`, {
                  className: `flex items-end justify-between gap-2 h-32`,
                  children: [`S`, `M`, `T`, `W`, `T`, `F`, `S`].map((t, n) => {
                    let r = e - (new Date().getDay() - n),
                      i = (r > 0 && O.get(`emma_water_` + r)) || 0,
                      a = Math.min((i / 8) * 100, 100);
                    return (0, k.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col items-center gap-1.5 flex-1`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-full bg-blue-50 border border-blue-100 rounded-md relative`,
                            style: { height: `80px` },
                            children: (0, k.jsx)(`div`, {
                              className: `absolute bottom-0 w-full bg-blue-500 rounded-md transition-all`,
                              style: { height: `${a}%` },
                            }),
                          }),
                          (0, k.jsx)(`span`, { className: `text-[10px] font-bold text-gray-400`, children: t }),
                        ],
                      },
                      n,
                    );
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
function hr() {
  let e = qe(),
    t = Tt(),
    n = tr(t),
    r = nr(t),
    [i] = (0, _.useState)(ar(r)),
    [a, o] = (0, _.useState)(() => O.get(`emma_ritual_` + t) || !1),
    [s, c] = (0, _.useState)(!1),
    [l, u] = (0, _.useState)(0);
  (0, _.useEffect)(() => {
    if (!s) return;
    let e = setInterval(() => {
      u((n) => (n >= 6 ? (clearInterval(e), c(!1), o(!0), O.set(`emma_ritual_` + t, !0), 0) : n + 1));
    }, 1e3);
    return () => clearInterval(e);
  }, [s, t]);
  let d = {
      1: [
        `Archaea populations decreasing`,
        `Biofilm layers breaking down`,
        `Stomach acid normalizing`,
        `Bloating beginning to reduce`,
      ],
      2: [
        `Gut lining cells regenerating`,
        `Tight junctions repairing`,
        `Inflammation decreasing`,
        `Nutrient absorption improving`,
      ],
      3: [
        `Beneficial bacteria colonizing`,
        `Microbiome diversity increasing`,
        `Immune function strengthening`,
        `Food sensitivities reducing`,
      ],
      4: [
        `Gut ecosystem stabilizing`,
        `Maintenance habits forming`,
        `Food freedom expanding`,
        `Energy levels optimizing`,
      ],
      5: [
        `Gut-brain axis strengthening`,
        `Serotonin production optimizing`,
        `Mental clarity sharpening`,
        `Stress resilience building`,
      ],
      6: [
        `Lifetime habits solidifying`,
        `Microbiome self-regulating`,
        `Immune system fortified`,
        `Full-body transformation complete`,
      ],
    },
    f = d[r] || d[3];
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-5`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/`),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsxs)(`div`, {
            className: `flex items-center space-x-2 mb-1.5`,
            children: [
              (0, k.jsx)(`span`, { className: `text-lg`, children: ir(r) }),
              (0, k.jsxs)(`span`, {
                className: `text-[10px] font-bold text-[#1B6B4A] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-widest`,
                children: [`Phase `, r, `: `, rr(r)],
              }),
            ],
          }),
          (0, k.jsxs)(`h1`, { className: `text-2xl font-bold text-gray-900`, children: [`Day `, t, ` Protocol`] }),
          (0, k.jsxs)(`p`, {
            className: `text-[12px] text-gray-400 mt-0.5`,
            children: [`Days `, i[0], `-`, i[1], ` · `, rr(r)],
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5 relative overflow-hidden`,
            children: [
              (0, k.jsx)(`div`, {
                className: `absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#1B6B4A] to-[#D4874D]`,
              }),
              (0, k.jsxs)(`div`, {
                className: `pl-3`,
                children: [
                  (0, k.jsx)(`h3`, {
                    className: `text-[14px] font-bold text-[#1B6B4A] mb-2.5`,
                    children: `🧪 Today's Protocol`,
                  }),
                  (0, k.jsx)(`p`, { className: `text-[14px] text-gray-600 leading-relaxed`, children: n.protocol }),
                ],
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-2.5`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100`,
                    children: (0, k.jsx)(Ln, { size: 14, className: `text-purple-500` }),
                  }),
                  (0, k.jsx)(`h3`, {
                    className: `text-[14px] font-bold text-purple-600`,
                    children: `Breathing Ritual`,
                  }),
                ],
              }),
              (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 mb-3 leading-relaxed`, children: n.ritual }),
              a
                ? (0, k.jsx)(`div`, {
                    className: `py-3 px-4 bg-green-50 rounded-xl text-[#1B6B4A] text-[13px] font-semibold border border-green-200 text-center`,
                    children: `✓ Completed today`,
                  })
                : s
                  ? (0, k.jsxs)(`div`, {
                      className: `text-center py-4`,
                      children: [
                        (0, k.jsx)(`div`, {
                          className: `text-2xl font-bold text-purple-600`,
                          children: l < 3 ? `Breathe In...` : l < 4 ? `Hold...` : `Exhale...`,
                        }),
                        (0, k.jsx)(`div`, {
                          className: `flex justify-center gap-1.5 mt-3`,
                          children: [...Array(7)].map((e, t) =>
                            (0, k.jsx)(
                              `div`,
                              {
                                className: `w-2.5 h-2.5 rounded-full transition-all ${t <= l ? `bg-purple-500` : `bg-gray-200`}`,
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    })
                  : (0, k.jsx)(`button`, {
                      onClick: () => {
                        (c(!0), u(0));
                      },
                      className: `w-full py-3 bg-purple-600 text-white font-semibold rounded-xl text-[14px] active:bg-purple-700 transition-all shadow-lg shadow-purple-500/20`,
                      children: `Start Breathing Exercise`,
                    }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-2.5`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100`,
                    children: (0, k.jsx)(Nn, { size: 14, className: `text-amber-500` }),
                  }),
                  (0, k.jsx)(`h3`, { className: `text-[14px] font-bold text-amber-600`, children: `Pro Tip` }),
                ],
              }),
              (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 leading-relaxed`, children: n.tip }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5`,
            children: [
              (0, k.jsx)(`h3`, {
                className: `text-[14px] font-bold text-gray-900 mb-3`,
                children: `🔬 What's Happening in Your Body`,
              }),
              (0, k.jsx)(`div`, {
                className: `space-y-2.5`,
                children: f.map((e, t) =>
                  (0, k.jsxs)(
                    `div`,
                    {
                      className: `flex items-center space-x-2.5 text-[13px] text-gray-600`,
                      children: [
                        (0, k.jsx)(`div`, { className: `w-2 h-2 rounded-full bg-[#1B6B4A] flex-shrink-0` }),
                        (0, k.jsx)(`span`, { children: e }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border border-green-100 mb-5`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center space-x-2 mb-2.5`,
                children: [
                  (0, k.jsx)(Yt, { size: 16, className: `text-[#1B6B4A]` }),
                  (0, k.jsx)(`h3`, { className: `text-[14px] font-bold text-[#1B6B4A]`, children: `Did You Know?` }),
                ],
              }),
              (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: n.fact }),
            ],
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
function gr() {
  let e = qe(),
    t = O.get(`emma_180_active`, !1),
    n = Tt(),
    r = [
      {
        icon: ln,
        label: `Protocol Check-In`,
        desc: `Diagnostic tracker: find what's holding back your results`,
        path: `/tools/diagnostic`,
        bg: `bg-teal-50`,
        border: `border-teal-200`,
        color: `text-teal-600`,
        isNew: !0,
      },
      {
        icon: pn,
        label: `180-Day Extended Protocol`,
        desc: n < 90 ? `Complete Day 90 to unlock (Day ${n}/90)` : `Unlock 90 extra days of advanced gut restoration`,
        path: null,
        bg: `bg-amber-50`,
        border: `border-amber-200`,
        color: `text-amber-600`,
        isNew: !t && n >= 90,
        isExtension: !0,
      },
      {
        icon: Vn,
        label: `Gut-Healing Recipes`,
        desc: `12 anti-archaea recipes across all phases`,
        path: `/tools/recipes`,
        bg: `bg-amber-50`,
        border: `border-amber-100`,
        color: `text-amber-500`,
      },
      {
        icon: jn,
        label: `Protocol Shopping List`,
        desc: `Every ingredient for your gut restoration protocol`,
        path: `/tools/shopping`,
        bg: `bg-blue-50`,
        border: `border-blue-100`,
        color: `text-blue-500`,
      },
      {
        icon: Tn,
        label: `Sleep & Digestion Guide`,
        desc: `The gut-sleep connection + 8 evidence-based tips`,
        path: `/tools/sleep`,
        bg: `bg-purple-50`,
        border: `border-purple-100`,
        color: `text-purple-500`,
      },
      {
        icon: qt,
        label: `Symptom Journal`,
        desc: `Track bloating, energy, bowel movements & mood daily`,
        path: `/tools/journal`,
        bg: `bg-rose-50`,
        border: `border-rose-100`,
        color: `text-rose-500`,
      },
      {
        icon: Yt,
        label: `Gut Health Knowledge Quiz`,
        desc: `Test what you know about archaea, microbiome & digestion`,
        path: `/tools/quiz`,
        bg: `bg-emerald-50`,
        border: `border-emerald-100`,
        color: `text-emerald-600`,
      },
      {
        icon: hn,
        label: `Hydration Calculator`,
        desc: `Personalized water intake based on your body weight`,
        path: null,
        bg: `bg-cyan-50`,
        border: `border-cyan-100`,
        color: `text-cyan-500`,
        isTool: !0,
      },
      {
        icon: Ut,
        label: `Food Reintroduction Tracker`,
        desc: `Log foods you reintroduce and track your gut response`,
        path: null,
        bg: `bg-green-50`,
        border: `border-green-100`,
        color: `text-green-500`,
        isTool: !0,
      },
    ],
    i = () => {
      (O.set(`emma_180_active`, !0), window.location.reload());
    };
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-5`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/`),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900`, children: `Tools & Extras` }),
          (0, k.jsx)(`p`, {
            className: `text-[13px] text-gray-400 mt-0.5`,
            children: `Everything to support your gut restoration journey`,
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 space-y-3`,
        children: r.map((r, a) => {
          if (r.isExtension && t)
            return (0, k.jsxs)(
              `div`,
              {
                className: `w-full bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl shadow-sm border border-emerald-200 p-4 flex items-center gap-3.5`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0`,
                    children: (0, k.jsx)(pn, { size: 18, className: `text-emerald-600` }),
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex-1 min-w-0`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-2`,
                        children: [
                          (0, k.jsx)(`p`, {
                            className: `text-[14px] font-bold text-emerald-700`,
                            children: `180-Day Protocol Active`,
                          }),
                          (0, k.jsx)(`span`, {
                            className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-emerald-500 text-white`,
                            children: `ON`,
                          }),
                        ],
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-[12px] text-emerald-600/70`,
                        children: `6 phases · 180 days of guided gut restoration`,
                      }),
                    ],
                  }),
                ],
              },
              a,
            );
          if (r.isExtension && !t) {
            let e = n < 90;
            return (0, k.jsxs)(
              `div`,
              {
                className: `w-full bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-sm border border-amber-200 p-4 flex items-center gap-3.5 text-left ${e ? `opacity-70` : `active:shadow-md transition-all`}`,
                children: [
                  (0, k.jsx)(`div`, {
                    className: `w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0`,
                    children: (0, k.jsx)(pn, { size: 18, className: `text-amber-600` }),
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex-1 min-w-0`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-2`,
                        children: [
                          (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900`, children: r.label }),
                          e
                            ? (0, k.jsx)(`span`, {
                                className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-gray-400 text-white`,
                                children: `🔒 LOCKED`,
                              })
                            : (0, k.jsx)(`span`, {
                                className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-amber-500 text-white`,
                                children: `NEW`,
                              }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[12px] text-gray-400`, children: r.desc }),
                    ],
                  }),
                  !e &&
                    (0, k.jsx)(`button`, {
                      onClick: i,
                      className: `px-3 py-1.5 bg-amber-500 text-white rounded-lg text-[11px] font-bold active:bg-amber-600 flex-shrink-0`,
                      children: `Activate`,
                    }),
                ],
              },
              a,
            );
          }
          return r.isTool
            ? (0, k.jsxs)(
                `div`,
                {
                  className: `w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3.5 opacity-60`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-10 h-10 rounded-xl ${r.bg} border ${r.border} flex items-center justify-center flex-shrink-0`,
                      children: (0, k.jsx)(r.icon, { size: 18, className: r.color }),
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex-1 min-w-0`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `flex items-center space-x-2`,
                          children: [
                            (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900`, children: r.label }),
                            (0, k.jsx)(`span`, {
                              className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-gray-400 text-white`,
                              children: `SOON`,
                            }),
                          ],
                        }),
                        (0, k.jsx)(`p`, { className: `text-[12px] text-gray-400`, children: r.desc }),
                      ],
                    }),
                  ],
                },
                a,
              )
            : (0, k.jsxs)(
                `button`,
                {
                  onClick: () => e(r.path),
                  className: `w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3.5 text-left active:shadow-md transition-all`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-10 h-10 rounded-xl ${r.bg} border ${r.border} flex items-center justify-center flex-shrink-0`,
                      children: (0, k.jsx)(r.icon, { size: 18, className: r.color }),
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex-1 min-w-0`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `flex items-center space-x-2`,
                          children: [
                            (0, k.jsx)(`p`, { className: `text-[14px] font-bold text-gray-900`, children: r.label }),
                            r.isNew &&
                              (0, k.jsx)(`span`, {
                                className: `text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-teal-500 text-white`,
                                children: `NEW`,
                              }),
                          ],
                        }),
                        (0, k.jsx)(`p`, { className: `text-[12px] text-gray-400`, children: r.desc }),
                      ],
                    }),
                    (0, k.jsx)(an, { size: 16, className: `text-gray-300 flex-shrink-0` }),
                  ],
                },
                a,
              );
        }),
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
var _r = [
    {
      id: 1,
      title: `Anti-Archaea Golden Milk`,
      time: `5 min`,
      phase: 1,
      ingredients: [
        `1 cup coconut milk`,
        `1/2 tsp turmeric`,
        `1/4 tsp cinnamon`,
        `1/4 tsp ginger powder`,
        `Pinch black pepper`,
        `1 tsp raw honey`,
      ],
      steps: [
        `Heat coconut milk in a small saucepan over medium heat.`,
        `Add turmeric, cinnamon, ginger, and black pepper.`,
        `Whisk until well combined and steaming (not boiling).`,
        `Pour into a mug and stir in honey.`,
        `Drink warm, ideally before bed.`,
      ],
    },
    {
      id: 2,
      title: `Gut-Healing Bone Broth`,
      time: `4 hrs`,
      phase: 2,
      ingredients: [
        `2 lbs chicken or beef bones`,
        `2 tbsp apple cider vinegar`,
        `4 cloves garlic`,
        `2 inch ginger root`,
        `1 tsp turmeric`,
        `1 onion quartered`,
        `Salt to taste`,
      ],
      steps: [
        `Place bones in a large pot, cover with water.`,
        `Add apple cider vinegar and let sit 30 min.`,
        `Add garlic, ginger, turmeric, and onion.`,
        `Bring to a boil, then reduce to a simmer.`,
        `Simmer for 4-24 hours, skimming foam.`,
        `Strain and season with salt. Store in fridge up to 5 days.`,
      ],
    },
    {
      id: 3,
      title: `Berberine Bitter Greens Salad`,
      time: `10 min`,
      phase: 1,
      ingredients: [
        `2 cups arugula`,
        `1 cup dandelion greens`,
        `1/2 cup radicchio`,
        `1/4 cup walnuts`,
        `2 tbsp olive oil`,
        `1 tbsp lemon juice`,
        `1 clove garlic minced`,
      ],
      steps: [
        `Wash and dry all greens.`,
        `Tear into bite-sized pieces and combine in a bowl.`,
        `Toast walnuts in a dry pan for 3 minutes.`,
        `Whisk olive oil, lemon juice, and garlic for dressing.`,
        `Toss greens with dressing and top with walnuts.`,
      ],
    },
    {
      id: 4,
      title: `Coconut-Turmeric Soup`,
      time: `25 min`,
      phase: 2,
      ingredients: [
        `1 can coconut milk`,
        `2 cups bone broth`,
        `1 sweet potato diced`,
        `1 inch ginger grated`,
        `1 tsp turmeric`,
        `2 cloves garlic`,
        `Spinach handful`,
      ],
      steps: [
        `Sauté garlic and ginger in coconut oil for 2 min.`,
        `Add diced sweet potato and cook 3 min.`,
        `Pour in coconut milk and bone broth.`,
        `Add turmeric, stir well.`,
        `Simmer 15-20 min until sweet potato is soft.`,
        `Add spinach, stir until wilted. Serve warm.`,
      ],
    },
    {
      id: 5,
      title: `Probiotic Kimchi Rice Bowl`,
      time: `15 min`,
      phase: 3,
      ingredients: [
        `1 cup cooked brown rice`,
        `1/4 cup kimchi`,
        `1 soft-boiled egg`,
        `1/2 avocado`,
        `1 tsp sesame oil`,
        `Scallions sliced`,
        `Sesame seeds`,
      ],
      steps: [
        `Place warm rice in a bowl.`,
        `Top with kimchi and sliced avocado.`,
        `Add soft-boiled egg (halved).`,
        `Drizzle with sesame oil.`,
        `Garnish with scallions and sesame seeds.`,
      ],
    },
    {
      id: 6,
      title: `Garlic-Ginger Antimicrobial Shot`,
      time: `5 min`,
      phase: 1,
      ingredients: [
        `2 cloves raw garlic`,
        `1 inch fresh ginger`,
        `1/2 lemon juiced`,
        `4 oz water`,
        `Pinch cayenne pepper`,
      ],
      steps: [
        `Peel garlic and ginger.`,
        `Blend all ingredients until smooth.`,
        `Strain through a fine mesh sieve.`,
        `Drink immediately on an empty stomach.`,
        `Follow with a glass of plain water.`,
      ],
    },
    {
      id: 7,
      title: `L-Glutamine Repair Smoothie`,
      time: `5 min`,
      phase: 2,
      ingredients: [
        `1 banana`,
        `1 cup almond milk`,
        `1 tbsp almond butter`,
        `5g L-glutamine powder`,
        `1/2 tsp cinnamon`,
        `1 tsp honey`,
      ],
      steps: [
        `Add all ingredients to a blender.`,
        `Blend on high for 60 seconds until smooth.`,
        `Pour into a glass and drink immediately.`,
        `Best consumed on an empty stomach in the morning.`,
      ],
    },
    {
      id: 8,
      title: `Fermented Veggie Plate`,
      time: `10 min`,
      phase: 3,
      ingredients: [
        `2 tbsp sauerkraut`,
        `2 tbsp kimchi`,
        `Pickled ginger slices`,
        `Pickled beets`,
        `1 tbsp olive oil`,
        `Fresh herbs`,
      ],
      steps: [
        `Arrange fermented vegetables on a plate.`,
        `Drizzle with olive oil.`,
        `Garnish with fresh herbs.`,
        `Eat as a side dish with any meal.`,
        `Aim for at least 2-3 servings of fermented foods daily.`,
      ],
    },
    {
      id: 9,
      title: `Oregano-Thyme Healing Tea`,
      time: `10 min`,
      phase: 1,
      ingredients: [
        `1 tsp dried oregano`,
        `1/2 tsp dried thyme`,
        `1/2 tsp rosemary`,
        `8 oz boiling water`,
        `Lemon slice`,
        `Raw honey optional`,
      ],
      steps: [
        `Place herbs in a tea strainer or infuser.`,
        `Pour boiling water over herbs.`,
        `Steep for 8-10 minutes.`,
        `Remove herbs and add lemon slice.`,
        `Sweeten with honey if desired.`,
        `Drink 2-3 times daily before meals.`,
      ],
    },
    {
      id: 10,
      title: `Collagen Gut-Seal Broth`,
      time: `10 min`,
      phase: 2,
      ingredients: [
        `2 cups bone broth`,
        `1 scoop collagen peptides`,
        `1/2 tsp ginger powder`,
        `1/4 tsp turmeric`,
        `Pinch salt`,
        `Fresh parsley`,
      ],
      steps: [
        `Heat bone broth in a saucepan until warm (not boiling).`,
        `Whisk in collagen peptides until dissolved.`,
        `Add ginger powder and turmeric.`,
        `Season with salt.`,
        `Pour into a mug, garnish with parsley.`,
        `Sip slowly throughout the morning.`,
      ],
    },
    {
      id: 11,
      title: `Prebiotic Fiber Bowl`,
      time: `10 min`,
      phase: 3,
      ingredients: [
        `1/2 cup rolled oats`,
        `1 sliced banana`,
        `1 tbsp ground flaxseed`,
        `1 tbsp inulin powder`,
        `1/4 cup walnuts`,
        `1 tsp honey`,
        `Cinnamon to taste`,
      ],
      steps: [
        `Cook oats with water or almond milk.`,
        `Stir in inulin powder and flaxseed.`,
        `Top with sliced banana and walnuts.`,
        `Drizzle with honey and sprinkle cinnamon.`,
        `Eat warm for maximum prebiotic benefit.`,
      ],
    },
    {
      id: 12,
      title: `Rainbow Gut Garden Salad`,
      time: `15 min`,
      phase: 3,
      ingredients: [
        `1 cup mixed greens`,
        `1/4 cup red cabbage shredded`,
        `1/4 cup shredded carrot`,
        `1/4 cup beets diced`,
        `2 tbsp sauerkraut`,
        `1 tbsp pumpkin seeds`,
        `2 tbsp olive oil + lemon dressing`,
      ],
      steps: [
        `Layer mixed greens as the base.`,
        `Arrange red cabbage, carrot, and beets on top.`,
        `Add a mound of sauerkraut in the center.`,
        `Sprinkle with pumpkin seeds.`,
        `Drizzle with olive oil and lemon dressing.`,
        `Toss gently and enjoy.`,
      ],
    },
  ],
  vr = {
    Produce: [
      `Lemons (6)`,
      `Fresh ginger root`,
      `Garlic (2 heads)`,
      `Bananas (6)`,
      `Avocados (3)`,
      `Sweet potatoes (2)`,
      `Spinach (1 bag)`,
      `Arugula (1 bag)`,
      `Dandelion greens`,
      `Red cabbage (1 small)`,
      `Carrots (1 bag)`,
      `Beets (3)`,
      `Cucumber (2)`,
      `Scallions (1 bunch)`,
      `Fresh parsley`,
      `Fresh herbs assorted`,
    ],
    Pantry: [
      `Extra virgin olive oil`,
      `Coconut oil`,
      `Apple cider vinegar (with mother)`,
      `Raw honey`,
      `Turmeric powder`,
      `Cinnamon sticks + ground`,
      `Black pepper`,
      `Dried oregano`,
      `Dried thyme`,
      `Rosemary`,
      `Cayenne pepper`,
      `Sesame oil`,
      `Sesame seeds`,
      `Rolled oats`,
      `Brown rice`,
      `Ground flaxseed`,
      `Inulin powder`,
    ],
    "Proteins & Dairy": [
      `Chicken or beef bones (2 lbs)`,
      `Eggs (1 dozen)`,
      `Collagen peptides`,
      `L-glutamine powder`,
      `Almond butter`,
      `Almond milk (unsweetened)`,
    ],
    "Fermented Foods": [
      `Sauerkraut (raw, unpasteurized)`,
      `Kimchi`,
      `Pickled ginger`,
      `Pickled beets`,
      `Coconut milk (2 cans)`,
      `Plain kefir`,
    ],
    "Nuts & Seeds": [`Walnuts (1 bag)`, `Pumpkin seeds`, `Chia seeds`],
    "Teas & Supplements": [
      `Star anise pods`,
      `Fennel seeds`,
      `Peppermint tea`,
      `Chamomile tea`,
      `Goldenseal root (dried)`,
      `Marshmallow root (dried)`,
      `Slippery elm powder`,
      `DGL licorice tablets`,
      `Activated charcoal (food grade)`,
      `Oregano oil (food grade)`,
    ],
  },
  yr = [
    {
      title: `The Gut-Sleep Connection`,
      content: `Your gut produces 95% of your body's serotonin, which converts to melatonin — your sleep hormone. A damaged gut means poor serotonin production, which means poor sleep. By healing your gut with the Emma Protocol, you're also fixing your sleep.`,
    },
    {
      title: `Evening Gut Ritual`,
      content: `Stop eating 3 hours before bed. This gives your migrating motor complex (MMC) time to sweep through your intestines — like a cleaning crew that only works when you're not eating. The MMC is crucial for preventing bacterial overgrowth.`,
    },
    {
      title: `Sleep Position for Digestion`,
      content: `Sleep on your left side. This positions your stomach below your esophagus (preventing acid reflux) and allows gravity to help waste move through your colon. Left-side sleeping can reduce morning bloating by up to 40%.`,
    },
    {
      title: `Calming Tea Before Bed`,
      content: `Drink chamomile or peppermint tea 1 hour before bed. Chamomile contains apigenin, which binds to GABA receptors (calming your nervous system), while also soothing your gut lining. Avoid caffeine after 2 PM.`,
    },
    {
      title: `Temperature & Your Gut`,
      content: `Keep your bedroom at 65-68°F (18-20°C). Cooler temperatures improve sleep quality AND reduce gut inflammation. Your core body temperature needs to drop for deep sleep — the same deep sleep phase when your gut does most of its repair work.`,
    },
    {
      title: `The 4-7-8 Breathing Technique`,
      content: `Inhale through your nose for 4 seconds. Hold for 7 seconds. Exhale slowly through your mouth for 8 seconds. This activates your vagus nerve — the same nerve that connects your brain to your gut. Do 4 cycles before sleep.`,
    },
    {
      title: `Blue Light & Gut Health`,
      content: `Blue light from screens suppresses melatonin production by up to 50%. But it also disrupts your gut circadian rhythm — your gut bacteria have their own internal clock. Stop screens 1 hour before bed, or use blue-light blocking glasses.`,
    },
    {
      title: `Morning Light Resets Everything`,
      content: `Get 10-15 minutes of morning sunlight within 1 hour of waking. This resets your circadian rhythm, which in turn resets your gut's circadian rhythm. Your gut bacteria are more diverse and balanced when your sleep-wake cycle is consistent.`,
    },
  ];
function br() {
  let e = qe(),
    [t, n] = (0, _.useState)(null),
    [r, i] = (0, _.useState)(0),
    a = r === 0 ? _r : _r.filter((e) => e.phase === r);
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#F5F7FA] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
          (0, k.jsx)(`h1`, { className: `text-xl font-extrabold text-[#2D2D2D]`, children: `Gut-Healing Recipes` }),
          (0, k.jsxs)(`p`, {
            className: `text-sm text-[#6B7280]`,
            children: [_r.length, ` recipes across all phases`],
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 mb-4 flex gap-2 overflow-x-auto`,
        children: [
          { v: 0, l: `All` },
          { v: 1, l: `Phase 1` },
          { v: 2, l: `Phase 2` },
          { v: 3, l: `Phase 3` },
        ].map((e) =>
          (0, k.jsx)(
            `button`,
            {
              onClick: () => i(e.v),
              className: `px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${r === e.v ? `bg-[#1B6B4A] text-white` : `bg-white text-[#6B7280]`}`,
              children: e.l,
            },
            e.v,
          ),
        ),
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 space-y-3`,
        children: a.map((e) =>
          (0, k.jsxs)(
            `div`,
            {
              className: `bg-white rounded-xl overflow-hidden`,
              children: [
                (0, k.jsxs)(`button`, {
                  onClick: () => n(t === e.id ? null : e.id),
                  className: `w-full p-4 flex items-center justify-between text-left`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`p`, { className: `text-sm font-bold text-[#2D2D2D]`, children: e.title }),
                        (0, k.jsxs)(`div`, {
                          className: `flex items-center gap-2 mt-1`,
                          children: [
                            (0, k.jsx)(dn, { size: 12, className: `text-[#6B7280]` }),
                            (0, k.jsx)(`span`, { className: `text-xs text-[#6B7280]`, children: e.time }),
                            (0, k.jsxs)(`span`, {
                              className: `text-xs text-[#1B6B4A] bg-[#1B6B4A]/10 px-1.5 py-0.5 rounded-full font-bold`,
                              children: [`Phase `, e.phase],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsx)(en, {
                      size: 16,
                      className: `text-gray-400 transition-transform ${t === e.id ? `rotate-180` : ``}`,
                    }),
                  ],
                }),
                t === e.id &&
                  (0, k.jsxs)(`div`, {
                    className: `px-4 pb-4 animate-fade-in`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `mb-3`,
                        children: [
                          (0, k.jsx)(`h4`, {
                            className: `text-xs font-bold text-[#1B6B4A] uppercase mb-2`,
                            children: `Ingredients`,
                          }),
                          (0, k.jsx)(`ul`, {
                            className: `space-y-1`,
                            children: e.ingredients.map((e, t) =>
                              (0, k.jsxs)(
                                `li`,
                                {
                                  className: `text-sm text-[#2D2D2D] flex items-start gap-2`,
                                  children: [
                                    (0, k.jsx)(`span`, { className: `text-[#2ECC71] mt-0.5`, children: `•` }),
                                    ` `,
                                    e,
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`div`, {
                        children: [
                          (0, k.jsx)(`h4`, {
                            className: `text-xs font-bold text-[#1B6B4A] uppercase mb-2`,
                            children: `Steps`,
                          }),
                          (0, k.jsx)(`ol`, {
                            className: `space-y-1`,
                            children: e.steps.map((e, t) =>
                              (0, k.jsxs)(
                                `li`,
                                {
                                  className: `text-sm text-[#2D2D2D] flex items-start gap-2`,
                                  children: [
                                    (0, k.jsxs)(`span`, {
                                      className: `text-xs font-bold text-[#1B6B4A] mt-0.5 flex-shrink-0`,
                                      children: [t + 1, `.`],
                                    }),
                                    ` `,
                                    e,
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
function xr() {
  let e = qe(),
    [t, n] = (0, _.useState)(Object.keys(vr)[0]),
    [r, i] = (0, _.useState)([]),
    a = (e) => i((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e])),
    o = Object.values(vr).flat();
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#F5F7FA] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
          (0, k.jsx)(`h1`, { className: `text-xl font-extrabold text-[#2D2D2D]`, children: `Shopping List` }),
          (0, k.jsxs)(`p`, {
            className: `text-sm text-[#6B7280]`,
            children: [r.length, `/`, o.length, ` items checked`],
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 space-y-3`,
        children: Object.entries(vr).map(([e, i]) =>
          (0, k.jsxs)(
            `div`,
            {
              className: `bg-white rounded-xl overflow-hidden`,
              children: [
                (0, k.jsxs)(`button`, {
                  onClick: () => n(t === e ? null : e),
                  className: `w-full p-4 flex items-center justify-between text-left`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`p`, { className: `text-sm font-bold text-[#2D2D2D]`, children: e }),
                        (0, k.jsxs)(`p`, {
                          className: `text-xs text-[#6B7280]`,
                          children: [i.filter((e) => r.includes(e)).length, `/`, i.length, ` items`],
                        }),
                      ],
                    }),
                    (0, k.jsx)(en, {
                      size: 16,
                      className: `text-gray-400 transition-transform ${t === e ? `rotate-180` : ``}`,
                    }),
                  ],
                }),
                t === e &&
                  (0, k.jsx)(`div`, {
                    className: `px-4 pb-4 space-y-1 animate-fade-in`,
                    children: i.map((e) =>
                      (0, k.jsxs)(
                        `button`,
                        {
                          onClick: () => a(e),
                          className: `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-all ${r.includes(e) ? `bg-green-50` : `bg-gray-50`}`,
                          children: [
                            (0, k.jsx)(`div`, {
                              className: `w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${r.includes(e) ? `border-green-500 bg-green-500` : `border-gray-300`}`,
                              children:
                                r.includes(e) && (0, k.jsx)(`span`, { className: `text-white text-xs`, children: `✓` }),
                            }),
                            (0, k.jsx)(`span`, {
                              className: r.includes(e) ? `text-gray-400 line-through` : `text-[#2D2D2D]`,
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
function Sr() {
  let e = qe(),
    [t, n] = (0, _.useState)(0);
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#F5F7FA] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
          (0, k.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-1`,
            children: [
              (0, k.jsx)(Tn, { size: 20, className: `text-[#8B5CF6]` }),
              (0, k.jsx)(`h1`, { className: `text-xl font-extrabold text-[#2D2D2D]`, children: `Sleep & Digestion` }),
            ],
          }),
          (0, k.jsx)(`p`, { className: `text-sm text-[#6B7280]`, children: `8 science-backed tips for better sleep` }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 space-y-3`,
        children: yr.map((e, r) =>
          (0, k.jsxs)(
            `div`,
            {
              className: `bg-white rounded-xl overflow-hidden`,
              children: [
                (0, k.jsxs)(`button`, {
                  onClick: () => n(t === r ? null : r),
                  className: `w-full p-4 flex items-center gap-3 text-left`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-8 h-8 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0`,
                      children: (0, k.jsx)(`span`, { className: `text-xs font-bold text-[#8B5CF6]`, children: r + 1 }),
                    }),
                    (0, k.jsx)(`span`, { className: `text-sm font-bold text-[#2D2D2D]`, children: e.title }),
                  ],
                }),
                t === r &&
                  (0, k.jsx)(`div`, {
                    className: `px-4 pb-4 animate-fade-in`,
                    children: (0, k.jsx)(`p`, {
                      className: `text-sm text-[#2D2D2D] leading-relaxed pl-11`,
                      children: e.content,
                    }),
                  }),
              ],
            },
            r,
          ),
        ),
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
var Cr = [
  { key: `bloating`, label: `Bloating`, emojis: [`😌`, `🙂`, `😐`, `😣`, `🤢`] },
  { key: `energy`, label: `Energy`, emojis: [`😴`, `🥱`, `😐`, `😊`, `⚡`] },
  { key: `mood`, label: `Mood`, emojis: [`😢`, `😕`, `😐`, `😊`, `😁`] },
  { key: `digestion`, label: `Digestion`, emojis: [`💀`, `😣`, `😐`, `👍`, `🌟`] },
];
function wr() {
  let e = qe(),
    t = Tt(),
    n = O.get(`emma_journal_` + t) || {},
    [r, i] = (0, _.useState)(n.text || ``),
    [a, o] = (0, _.useState)(n.ratings || {}),
    [s, c] = (0, _.useState)(!1),
    l = (e, t) => o((n) => ({ ...n, [e]: t }));
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#F5F7FA] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
          (0, k.jsx)(`h1`, { className: `text-xl font-extrabold text-[#2D2D2D]`, children: `Gut Journal` }),
          (0, k.jsxs)(`p`, {
            className: `text-sm text-[#6B7280]`,
            children: [`Day `, t, ` — Track how you're feeling`],
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 mb-4 space-y-3`,
        children: Cr.map((e) =>
          (0, k.jsxs)(
            `div`,
            {
              className: `bg-white rounded-xl p-4`,
              children: [
                (0, k.jsx)(`p`, { className: `text-sm font-bold text-[#2D2D2D] mb-3`, children: e.label }),
                (0, k.jsx)(`div`, {
                  className: `flex justify-between`,
                  children: e.emojis.map((t, n) =>
                    (0, k.jsx)(
                      `button`,
                      {
                        onClick: () => l(e.key, n + 1),
                        className: `w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all ${a[e.key] === n + 1 ? `bg-[#1B6B4A]/10 scale-110 ring-2 ring-[#1B6B4A]` : `bg-gray-50`}`,
                        children: t,
                      },
                      n,
                    ),
                  ),
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex justify-between mt-1`,
                  children: [
                    (0, k.jsx)(`span`, { className: `text-[10px] text-[#6B7280]`, children: `Bad` }),
                    (0, k.jsx)(`span`, { className: `text-[10px] text-[#6B7280]`, children: `Great` }),
                  ],
                }),
              ],
            },
            e.key,
          ),
        ),
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 mb-4`,
        children: (0, k.jsxs)(`div`, {
          className: `bg-white rounded-xl p-4`,
          children: [
            (0, k.jsx)(`p`, { className: `text-sm font-bold text-[#2D2D2D] mb-2`, children: `Notes` }),
            (0, k.jsx)(`textarea`, {
              value: r,
              onChange: (e) => i(e.target.value),
              placeholder: `What did you eat today? How did you feel? Any changes you noticed?`,
              className: `w-full h-32 px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1B6B4A] focus:ring-1 focus:ring-[#1B6B4A] bg-[#F5F7FA] resize-none`,
            }),
          ],
        }),
      }),
      (0, k.jsx)(`div`, {
        className: `px-4`,
        children: (0, k.jsxs)(`button`, {
          onClick: () => {
            (O.set(`emma_journal_` + t, { text: r, ratings: a, date: new Date().toISOString() }),
              c(!0),
              setTimeout(() => c(!1), 2e3));
          },
          className: `w-full py-3 font-bold rounded-full text-sm flex items-center justify-center gap-2 transition-colors ${s ? `bg-green-500 text-white` : `bg-[#2ECC71] text-white`}`,
          children: [(0, k.jsx)(kn, { size: 16 }), s ? `Saved!` : `Save Entry`],
        }),
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
var Tr = [
  {
    q: `What are archaea?`,
    options: [`A type of bacteria`, `A separate domain of life`, `A virus`, `A fungus`],
    correct: 1,
  },
  {
    q: `What gas do methane-producing archaea create?`,
    options: [`Oxygen`, `Carbon dioxide`, `Methane`, `Nitrogen`],
    correct: 2,
  },
  { q: `What percentage of serotonin is produced in the gut?`, options: [`50%`, `75%`, `95%`, `30%`], correct: 2 },
  {
    q: `Which compound in turmeric fights gut inflammation?`,
    options: [`Capsaicin`, `Curcumin`, `Caffeine`, `Menthol`],
    correct: 1,
  },
  {
    q: `What does the vagus nerve connect?`,
    options: [`Heart and lungs`, `Gut and brain`, `Liver and kidneys`, `Muscles and bones`],
    correct: 1,
  },
  { q: `How much of your immune system lives in the gut?`, options: [`50%`, `60%`, `70%`, `80%`], correct: 3 },
  {
    q: `What is a biofilm?`,
    options: [`A type of food`, `A protective shield around bacteria`, `A gut enzyme`, `A vitamin`],
    correct: 1,
  },
  {
    q: `Which spice increases turmeric absorption by 2,000%?`,
    options: [`Cinnamon`, `Ginger`, `Black pepper`, `Cayenne`],
    correct: 2,
  },
  {
    q: `What is the MMC (Migrating Motor Complex)?`,
    options: [`A cleaning wave in your intestines`, `A type of probiotic`, `A breathing technique`, `A supplement`],
    correct: 0,
  },
  {
    q: `How often does your gut lining replace itself?`,
    options: [`Every month`, `Every 3-5 days`, `Every year`, `Never`],
    correct: 1,
  },
];
function Er() {
  let e = qe(),
    [t, n] = (0, _.useState)(0),
    [r, i] = (0, _.useState)([]),
    [a, o] = (0, _.useState)(null),
    [s, c] = (0, _.useState)(!1),
    l = (e) => {
      a === null &&
        (o(e),
        setTimeout(() => {
          (i((t) => [...t, e]), o(null), t < Tr.length - 1 ? n((e) => e + 1) : c(!0));
        }, 1e3));
    },
    u = r.reduce((e, t, n) => e + +(t === Tr[n].correct), 0),
    d = () => {
      (n(0), i([]), o(null), c(!1));
    };
  if (s) {
    let t = Math.round((u / Tr.length) * 100);
    return (0, k.jsxs)(`div`, {
      className: `min-h-dvh bg-[#F5F7FA] pb-24`,
      children: [
        (0, k.jsx)(`div`, {
          className: `px-4 pt-8 pb-4`,
          children: (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
        }),
        (0, k.jsxs)(`div`, {
          className: `px-4 flex flex-col items-center text-center`,
          children: [
            (0, k.jsx)(`div`, { className: `text-6xl mb-4`, children: t >= 80 ? `🏆` : t >= 60 ? `💪` : `📚` }),
            (0, k.jsx)(`h1`, {
              className: `text-2xl font-extrabold text-[#2D2D2D] mb-2`,
              children:
                t >= 80
                  ? `Gut Health Expert! 🏆`
                  : t >= 60
                    ? `Great knowledge! 💪`
                    : t >= 40
                      ? `Keep learning! 📚`
                      : `Review the protocol! 🔬`,
            }),
            (0, k.jsxs)(`p`, {
              className: `text-lg font-bold text-[#1B6B4A]`,
              children: [u, `/`, Tr.length, ` correct (`, t, `%)`],
            }),
            (0, k.jsx)(`div`, {
              className: `w-full bg-gray-200 rounded-full h-3 mt-4 mb-8`,
              children: (0, k.jsx)(`div`, {
                className: `bg-[#2ECC71] rounded-full h-3 transition-all`,
                style: { width: `${t}%` },
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `w-full space-y-2 mb-6`,
              children: Tr.map((e, t) =>
                (0, k.jsxs)(
                  `div`,
                  {
                    className: `p-3 rounded-lg text-left text-sm ${r[t] === e.correct ? `bg-green-50 text-green-700` : `bg-red-50 text-red-700`}`,
                    children: [
                      (0, k.jsx)(`span`, { className: `font-bold`, children: r[t] === e.correct ? `✓` : `✗` }),
                      ` `,
                      e.q,
                      ` — `,
                      (0, k.jsx)(`span`, { className: `font-medium`, children: e.options[e.correct] }),
                    ],
                  },
                  t,
                ),
              ),
            }),
            (0, k.jsxs)(`button`, {
              onClick: d,
              className: `flex items-center gap-2 py-3 px-6 bg-[#2ECC71] text-white font-bold rounded-full text-sm`,
              children: [(0, k.jsx)(Dn, { size: 16 }), ` Try Again`],
            }),
          ],
        }),
        (0, k.jsx)(cr, {}),
      ],
    });
  }
  let f = Tr[t];
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#F5F7FA] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(`/tools`),
            className: `flex items-center gap-1 text-sm text-[#6B7280] mb-4`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` Back`],
          }),
          (0, k.jsxs)(`div`, {
            className: `flex items-center justify-between mb-2`,
            children: [
              (0, k.jsx)(`h1`, { className: `text-xl font-extrabold text-[#2D2D2D]`, children: `Gut Health Quiz` }),
              (0, k.jsxs)(`span`, { className: `text-xs font-bold text-[#6B7280]`, children: [t + 1, `/`, Tr.length] }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `bg-gray-200 rounded-full h-1.5`,
            children: (0, k.jsx)(`div`, {
              className: `bg-[#1B6B4A] rounded-full h-1.5 transition-all`,
              style: { width: `${((t + 1) / Tr.length) * 100}%` },
            }),
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4`,
        children: [
          (0, k.jsx)(`div`, {
            className: `bg-white rounded-xl p-5 mb-4`,
            children: (0, k.jsx)(`p`, {
              className: `text-base font-bold text-[#2D2D2D] leading-relaxed`,
              children: f.q,
            }),
          }),
          (0, k.jsx)(`div`, {
            className: `space-y-3`,
            children: f.options.map((e, t) => {
              let n = `bg-white`,
                r = `border-gray-200`,
                i = `text-[#2D2D2D]`;
              return (
                a !== null &&
                  (t === f.correct
                    ? ((n = `bg-green-50`), (r = `border-green-500`), (i = `text-green-700`))
                    : t === a && ((n = `bg-red-50`), (r = `border-red-500`), (i = `text-red-700`))),
                (0, k.jsx)(
                  `button`,
                  {
                    onClick: () => l(t),
                    className: `w-full p-4 rounded-xl border text-left text-sm font-medium transition-all ${n} ${r} ${i}`,
                    children: e,
                  },
                  t,
                )
              );
            }),
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}
var Dr = [
    {
      q: `How consistently are you following the daily protocol?`,
      icon: `📋`,
      options: [`Every single day`, `Most days (5-6/week)`, `Some days (3-4/week)`, `Rarely (1-2/week)`],
      key: `protocol`,
      gap: `Protocol consistency is the #1 factor. Archaea regenerate biofilm every 48 hours — missing even 2 days lets them fully rebuild.`,
    },
    {
      q: `Are you drinking at least 64oz of water daily?`,
      icon: `💧`,
      options: [`Yes, always`, `Usually`, `Sometimes`, `Rarely`],
      key: `hydration`,
      gap: `Hydration flushes archaea toxins. Without enough water, dead archaea and waste accumulate in your colon, causing more bloating.`,
    },
    {
      q: `Are you following the recommended meal guidelines?`,
      icon: `🥗`,
      options: [`Strictly`, `Mostly`, `Somewhat`, `Not really`],
      key: `meals`,
      gap: `Archaea feed on processed sugars and refined carbs. Even occasional slips can undo days of progress by feeding surviving colonies.`,
    },
    {
      q: `How is your sleep quality and duration?`,
      icon: `😴`,
      options: [`7-8+ hrs, great quality`, `6-7 hours, decent`, `Inconsistent`, `Less than 6 hours`],
      key: `sleep`,
      gap: `Your gut microbiome has a circadian rhythm. Poor sleep disrupts the migrating motor complex — the wave that sweeps debris while you sleep.`,
    },
    {
      q: `Are you doing the daily breathing exercises?`,
      icon: `🧘`,
      options: [`Every day`, `A few times/week`, `Occasionally`, `Haven't tried`],
      key: `breathing`,
      gap: `The vagus nerve connects your brain to your gut. Breathing exercises activate the rest-and-repair mode for your deepest healing.`,
    },
    {
      q: `Are you tracking symptoms in your journal?`,
      icon: `📓`,
      options: [`Every day`, `Most days`, `Sometimes`, `Never`],
      key: `journal`,
      gap: `Without tracking, you miss trigger foods and patterns. Many users discover symptoms came from specific foods, not the protocol.`,
    },
    {
      q: `Are you getting 7K+ steps or exercise daily?`,
      icon: `🚶`,
      options: [`Every day`, `Most days`, `Sometimes`, `Rarely`],
      key: `movement`,
      gap: `Movement stimulates gut motility. Walking after meals improves digestion by 20-30% and accelerates archaea elimination.`,
    },
    {
      q: `Are you avoiding restricted foods (gluten, dairy, sugar)?`,
      icon: `🚫`,
      options: [`Completely`, `Mostly`, `Sometimes slip`, `Not avoiding`],
      key: `restricted`,
      gap: `Gluten, dairy, and processed sugar are the top 3 archaea fuel sources. Small amounts feed the colonies you're trying to eliminate.`,
    },
    {
      q: `How is your bloating right now?`,
      icon: `🫄`,
      options: [`Completely gone`, `Mostly reduced`, `Still noticeable`, `Severe or unchanged`],
      key: `bloating`,
      gap: `Persistent bloating means archaea are still producing excess methane gas. Your antimicrobial protocol needs to be intensified — try adding raw garlic or oregano oil to accelerate biofilm breakdown.`,
    },
    {
      q: `How are your energy levels throughout the day?`,
      icon: `⚡`,
      options: [`High and consistent`, `Good with some dips`, `Average, often tired`, `Low, constant fatigue`],
      key: `energy`,
      gap: `Low energy signals that archaea toxins are still circulating. Focus on B-vitamin rich foods (leafy greens, eggs) and consider adding CoQ10 to support cellular energy recovery.`,
    },
    {
      q: `How is your digestion and bowel regularity?`,
      icon: `🔄`,
      options: [`Perfect, very regular`, `Good most days`, `Inconsistent`, `Poor, irregular`],
      key: `digestion`,
      gap: `Irregular digestion means your migrating motor complex isn't fully restored. Add post-meal walking and magnesium glycinate to stimulate peristalsis and normalize gut motility.`,
    },
    {
      q: `How would you rate your overall progress so far?`,
      icon: `📈`,
      options: [`Amazing results`, `Noticeable improvement`, `Slow but some change`, `Not seeing results yet`],
      key: `progress`,
      gap: `Slower progress is usually caused by hidden protocol gaps that compound daily. The specific recommendations below will help you break through this plateau.`,
    },
  ],
  Or = [
    {
      title: `Archaea Biofilm Disruption`,
      desc: `Your gut biofilms need targeted breakdown. Add 1 tbsp apple cider vinegar diluted in water 15 min before each meal — this disrupts the protective layer archaea use to survive.`,
      icon: `🎯`,
    },
    {
      title: `Vagus Nerve Activation`,
      desc: `Your gut-brain axis needs direct stimulation. End every shower with 30 seconds of cold water — this activates the vagus nerve, which controls 80% of your gut repair signaling.`,
      icon: `🧊`,
    },
    {
      title: `Circadian Gut Reset`,
      desc: `Your microbiome is out of sync with your body clock. Get 10-15 min of direct morning sunlight within 1 hour of waking — your gut bacteria use this signal to regulate digestion timing.`,
      icon: `☀️`,
    },
    {
      title: `Intestinal Sweeping Gap`,
      desc: `Your migrating motor complex needs a longer fasting window to complete its cleaning cycle. Implement a strict 14-hour overnight fast (7pm to 9am) — this is when your gut does its deepest debris removal.`,
      icon: `⏰`,
    },
    {
      title: `Gut Lining Repair Deficiency`,
      desc: `Your gut epithelial cells are not getting enough repair fuel. Add 1 cup of bone broth daily — L-glutamine is the #1 amino acid your gut lining cells use to regenerate.`,
      icon: `🍲`,
    },
    {
      title: `Prebiotic Starvation`,
      desc: `Your beneficial bacteria are underfed. Add raw garlic, onion, or chicory root daily — these prebiotics starve archaea while directly feeding the good bacteria you're trying to grow.`,
      icon: `🌱`,
    },
    {
      title: `Cortisol-Gut Damage Loop`,
      desc: `Unmanaged stress is silently destroying your gut lining and feeding archaea. Take magnesium glycinate 30 min before bed — it calms cortisol AND repairs gut tissue simultaneously.`,
      icon: `💊`,
    },
    {
      title: `Post-Meal Stagnation`,
      desc: `Food sitting in your stomach feeds archaea colonies. Walk 10-15 minutes after every meal — this alone can boost gastric emptying by 30% and accelerate toxin elimination.`,
      icon: `🚶‍♂️`,
    },
  ];
function kr({ result: e, nav: t, onRestart: n }) {
  if (!e) return null;
  let { pct: r, gaps: i, missing: a } = e,
    o,
    s,
    c;
  r >= 85
    ? ((o = `text-emerald-600`), (s = `Strong Adherence`), (c = `bg-emerald-50 border-emerald-200`))
    : r >= 70
      ? ((o = `text-blue-600`), (s = `Good Progress`), (c = `bg-blue-50 border-blue-200`))
      : r >= 50
        ? ((o = `text-amber-600`), (s = `Needs Attention`), (c = `bg-amber-50 border-amber-200`))
        : ((o = `text-red-600`), (s = `Critical Gaps Found`), (c = `bg-red-50 border-red-200`));
  let l = 2 * Math.PI * 52;
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-8`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-5`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => t(-1),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900 mb-1`, children: `Your Protocol Analysis` }),
          (0, k.jsx)(`p`, {
            className: `text-[13px] text-gray-400`,
            children: `We found areas that need your attention`,
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `rounded-2xl border p-6 mb-5 text-center ${c}`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `relative w-28 h-28 mx-auto mb-3`,
                children: [
                  (0, k.jsxs)(`svg`, {
                    className: `w-28 h-28 -rotate-90`,
                    viewBox: `0 0 120 120`,
                    children: [
                      (0, k.jsx)(`circle`, {
                        cx: `60`,
                        cy: `60`,
                        r: `52`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `8`,
                        className: `text-gray-200/50`,
                      }),
                      (0, k.jsx)(`circle`, {
                        cx: `60`,
                        cy: `60`,
                        r: `52`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `8`,
                        strokeDasharray: l,
                        strokeDashoffset: l * (1 - r / 100),
                        strokeLinecap: `round`,
                        className: o,
                      }),
                    ],
                  }),
                  (0, k.jsx)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-center`,
                    children: (0, k.jsxs)(`span`, { className: `text-3xl font-bold ${o}`, children: [r, `%`] }),
                  }),
                ],
              }),
              (0, k.jsx)(`p`, { className: `text-[14px] font-bold ${o}`, children: s }),
              (0, k.jsx)(`p`, { className: `text-[12px] text-gray-500 mt-1`, children: `Protocol Optimization Score` }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `bg-white rounded-2xl border border-gray-100 p-4 mb-5 shadow-sm`,
            children: (0, k.jsx)(`p`, {
              className: `text-[13px] text-gray-600 leading-relaxed`,
              children:
                r >= 85
                  ? `Your daily habits are strong — but our analysis detected specific protocol gaps that are slowing your gut restoration. These are the hidden factors most people miss.`
                  : r >= 70
                    ? `You're making progress, but we identified critical areas where small changes will dramatically accelerate your results.`
                    : `We found significant gaps in your protocol that are directly preventing your gut from healing at full speed. Focus on these areas immediately.`,
            }),
          }),
          i.length > 0 &&
            (0, k.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, k.jsx)(`h3`, {
                  className: `text-[14px] font-bold text-gray-900 mb-3`,
                  children: `⚠️ Areas Holding You Back`,
                }),
                (0, k.jsx)(`div`, {
                  className: `space-y-3`,
                  children: i
                    .sort((e, t) => e.score - t.score)
                    .map((e, t) =>
                      (0, k.jsx)(
                        `div`,
                        {
                          className: `bg-white rounded-2xl border border-gray-100 p-4 shadow-sm`,
                          children: (0, k.jsxs)(`div`, {
                            className: `flex items-start space-x-3`,
                            children: [
                              (0, k.jsx)(`span`, { className: `text-lg mt-0.5`, children: e.icon }),
                              (0, k.jsxs)(`div`, {
                                children: [
                                  (0, k.jsx)(`p`, {
                                    className: `text-[13px] font-bold text-gray-900 mb-1`,
                                    children: e.q.replace(`?`, ``),
                                  }),
                                  (0, k.jsx)(`p`, {
                                    className: `text-[12px] text-gray-500 leading-relaxed`,
                                    children: e.gap,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t,
                      ),
                    ),
                }),
              ],
            }),
          (0, k.jsxs)(`div`, {
            className: `mb-5`,
            children: [
              (0, k.jsx)(`h3`, {
                className: `text-[14px] font-bold text-gray-900 mb-1`,
                children: `🔍 Missing From Your Protocol`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-[12px] text-gray-500 mb-3 leading-relaxed`,
                children:
                  i.length === 0
                    ? `Even with strong adherence, our analysis detected these critical gaps. Most users who implement these see noticeably faster results within 7 days.`
                    : `In addition to the areas above, these essential protocol elements are missing. Implementing even 2 of these can dramatically speed up your results.`,
              }),
              (0, k.jsx)(`div`, {
                className: `space-y-3`,
                children: a.map((e, t) =>
                  (0, k.jsx)(
                    `div`,
                    {
                      className: `bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-4`,
                      children: (0, k.jsxs)(`div`, {
                        className: `flex items-start space-x-3`,
                        children: [
                          (0, k.jsx)(`span`, { className: `text-lg mt-0.5`, children: e.icon }),
                          (0, k.jsxs)(`div`, {
                            children: [
                              (0, k.jsx)(`p`, {
                                className: `text-[13px] font-bold text-amber-700 mb-1`,
                                children: e.title,
                              }),
                              (0, k.jsx)(`p`, {
                                className: `text-[12px] text-gray-600 leading-relaxed`,
                                children: e.desc,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-green-100 p-4 mb-5`,
            children: (0, k.jsx)(`p`, {
              className: `text-[13px] text-[#1B6B4A] font-semibold leading-relaxed`,
              children: `💡 Retake this check-in weekly to track your improvement and discover new optimization opportunities.`,
            }),
          }),
          (0, k.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, k.jsxs)(`button`, {
                onClick: n,
                className: `w-full py-3.5 rounded-xl font-semibold text-[14px] bg-[#1B6B4A] text-white shadow-lg shadow-[#1B6B4A]/20 active:bg-[#155a3d] flex items-center justify-center space-x-2`,
                children: [(0, k.jsx)(Dn, { size: 16 }), (0, k.jsx)(`span`, { children: `Retake Check-In` })],
              }),
              (0, k.jsx)(`button`, {
                onClick: () => t(`/`),
                className: `w-full py-3.5 rounded-xl font-semibold text-[14px] bg-white text-gray-600 border border-gray-200 active:bg-gray-50`,
                children: `Back to Dashboard`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ar() {
  let e = qe(),
    [t, n] = (0, _.useState)(0),
    [r, i] = (0, _.useState)([]),
    [a, o] = (0, _.useState)(null),
    s = O.get(`emma_diagnostic_result`, null),
    [c, l] = (0, _.useState)(!!s),
    u = () => {
      if (a === null) return;
      let e = [...r, { key: Dr[t].key, score: 3 - a }];
      if ((i(e), o(null), t < Dr.length - 1)) n(t + 1);
      else {
        let t = e.reduce((e, t) => e + t.score, 0),
          r = Dr.length * 3,
          i = Math.round((t / r) * 100),
          a = Math.min(i, 92),
          o = [];
        e.forEach((e, t) => {
          e.score < 3 && o.push({ ...Dr[t], score: e.score });
        });
        let s = o.length === 0 ? 4 : o.length <= 3 ? 3 : 2,
          c = {
            pct: a,
            gaps: o,
            missing: [...Or].sort(() => Math.random() - 0.5).slice(0, s),
            date: new Date().toISOString(),
          };
        (O.set(`emma_diagnostic_result`, c), l(!1), n(Dr.length));
      }
    },
    d = () => {
      (n(0), i([]), o(null), l(!1));
    };
  if (c && s) return (0, k.jsx)(kr, { result: s, nav: e, onRestart: d });
  if (t >= Dr.length) return (0, k.jsx)(kr, { result: O.get(`emma_diagnostic_result`), nav: e, onRestart: d });
  let f = Dr[t],
    p = ((t + 1) / Dr.length) * 100;
  return (0, k.jsx)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7]`,
    children: (0, k.jsxs)(`div`, {
      className: `px-4 pt-8 pb-5`,
      children: [
        (0, k.jsxs)(`button`, {
          onClick: () => e(-1),
          className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
          children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
        }),
        (0, k.jsxs)(`div`, {
          className: `mb-6`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex justify-between items-center mb-2`,
              children: [
                (0, k.jsxs)(`span`, {
                  className: `text-[11px] font-bold text-gray-400 uppercase tracking-widest`,
                  children: [`Question `, t + 1, ` of `, Dr.length],
                }),
                (0, k.jsxs)(`span`, {
                  className: `text-[11px] font-semibold text-[#1B6B4A]`,
                  children: [Math.round(p), `%`],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `w-full h-1.5 bg-gray-100 rounded-full overflow-hidden`,
              children: (0, k.jsx)(`div`, {
                className: `h-full bg-gradient-to-r from-[#1B6B4A] to-[#2ECC71] rounded-full transition-all duration-500`,
                style: { width: `${p}%` },
              }),
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `text-center mb-8`,
          children: [
            (0, k.jsx)(`span`, { className: `text-4xl mb-4 block`, children: f.icon }),
            (0, k.jsx)(`h2`, { className: `text-[18px] font-bold text-gray-900 leading-snug`, children: f.q }),
          ],
        }),
        (0, k.jsx)(`div`, {
          className: `space-y-3 mb-8`,
          children: f.options.map((e, t) =>
            (0, k.jsx)(
              `button`,
              {
                onClick: () => o(t),
                className: `w-full p-4 rounded-2xl border text-left transition-all ${a === t ? `border-[#1B6B4A] bg-emerald-50 shadow-sm` : `border-gray-100 bg-white active:border-gray-200`}`,
                children: (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-3`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${a === t ? `border-[#1B6B4A] bg-[#1B6B4A]` : `border-gray-300`}`,
                      children: a === t && (0, k.jsx)(`div`, { className: `w-2 h-2 rounded-full bg-white` }),
                    }),
                    (0, k.jsx)(`span`, {
                      className: `text-[14px] font-medium ${a === t ? `text-[#1B6B4A]` : `text-gray-700`}`,
                      children: e,
                    }),
                  ],
                }),
              },
              t,
            ),
          ),
        }),
        (0, k.jsx)(`button`, {
          onClick: u,
          disabled: a === null,
          className: `w-full py-4 rounded-xl font-semibold text-[14px] transition-all ${a === null ? `bg-gray-100 text-gray-300` : `bg-[#1B6B4A] text-white shadow-lg shadow-[#1B6B4A]/20 active:bg-[#155a3d]`}`,
          children: t < Dr.length - 1 ? `Next Question →` : `See My Analysis →`,
        }),
      ],
    }),
  });
}
var jr = [
  {
    title: `Getting Started`,
    icon: `🚀`,
    items: [
      {
        q: `What is the Emma Gut Health Protocol?`,
        a: `Emma is a science-backed 90-day gut restoration program targeting harmful archaea overgrowth. It's divided into 3 phases: Search & Destroy (eliminate archaea), Repair & Seal (rebuild gut lining), and Recolonize & Protect (restore healthy bacteria). Each day has a unique protocol, tips, and rituals.`,
      },
      {
        q: `How do I navigate the app?`,
        a: `Home — your daily dashboard with protocol, hydration tracker, habits, and calendar. Progress — stats, badges, and streaks. 7x Accelerator — your current phase protocol details. Tools & Extras (on Home) — recipes, shopping list, journal, and more.`,
      },
      {
        q: `How do I mark a day as complete?`,
        a: `On the Home screen, scroll to your "Day Protocol" card and tap "Mark Day as Done" after completing your daily protocol. This updates your streak, progress, and badges automatically.`,
      },
    ],
  },
  {
    title: `Protocol Questions`,
    icon: `🔬`,
    items: [
      {
        q: `How long until I see results?`,
        a: `Most users notice initial changes within 7-14 days — reduced bloating, better energy. Significant gut restoration takes the full 60-90 days as archaea are eliminated and your microbiome rebuilds. Commit to the full protocol for real, lasting results.`,
      },
      {
        q: `What if I miss a day?`,
        a: `One missed day won't undo your progress. However, archaea can rebuild biofilm within 48 hours, so avoid missing 2+ days in a row. Simply resume from your current day — the protocol is designed to be continuous.`,
      },
      {
        q: `I'm feeling worse — is that normal?`,
        a: `Yes! This is actually a GOOD sign called "die-off" (Herxheimer response). As archaea die, they release toxins that temporarily worsen bloating, headaches, or fatigue. This typically lasts 3-7 days and confirms the protocol is working. Stay hydrated and push through.`,
      },
      {
        q: `Can I eat foods not on the list?`,
        a: `During the first 60 days, stick strictly to protocol-approved foods. Gluten, dairy, and processed sugar are the top archaea fuel sources. After Phase 2, you can slowly reintroduce foods one at a time while tracking reactions in your Symptom Journal.`,
      },
      {
        q: `What are the 3 main phases?`,
        a: `Phase 1 (Days 1-30): Search & Destroy — antimicrobial protocols to break down archaea biofilms. Phase 2 (Days 31-60): Repair & Seal — heal the gut lining with targeted nutrients. Phase 3 (Days 61-90): Recolonize & Protect — establish healthy bacteria colonies for lasting protection.`,
      },
    ],
  },
  {
    title: `App Features`,
    icon: `📱`,
    items: [
      {
        q: `What is the 180-Day Extended Protocol?`,
        a: `After completing Day 90, you can unlock 90 additional days with three advanced phases: Strengthen & Maintain, Gut-Brain Optimize, and Lifetime Mastery. It's a free extension available in Tools & Extras once you complete the core protocol.`,
      },
      {
        q: `What is the Protocol Check-In?`,
        a: `A diagnostic tool that analyzes your protocol adherence. It asks 8 questions about your daily habits and identifies specific areas holding back your results — plus advanced optimization tips. Take it weekly for best results.`,
      },
      {
        q: `How does the Hydration Tracker work?`,
        a: `Tap the glass icons on your Home dashboard to log water intake. Aim for 8 glasses (64oz) daily. Hydration is critical for flushing archaea toxins during the protocol.`,
      },
      {
        q: `How does the Symptom Journal work?`,
        a: `Go to Tools & Extras → Symptom Journal. Log bloating, energy, bowel health, and mood daily. Over time, this reveals trigger foods and improvement trends you'd otherwise miss.`,
      },
    ],
  },
  {
    title: `Premium Modules`,
    icon: `⚡`,
    items: [
      { q: `What are the Premium Modules?`, a: `Three optional add-ons: 7X Accelerator (enhanced daily protocol, forbidden foods, meal plan), Detox Shield (30-day liver support, die-off calendar, skin rescue, smoothies), and Sleep & Digestion Mastery (nighttime gut repair, dinner guide, guided wind-down).` },
      { q: `How do I unlock a Premium Module?`, a: `After purchasing, you receive an access code via email. Go to Unlock Module (Bonus Content on Home) and enter your code. EMMA7X unlocks Accelerator, EMMADS unlocks Detox Shield, EMMASM unlocks Sleep Mastery, EMMAALL unlocks all three.` },
      { q: `Do I need all three modules?`, a: `The base protocol works on its own. Each module targets a different aspect — they work independently or together for maximum effect.` },
      { q: `How do I install Emma on my phone?`, a: `Go to Bonus Content and tap Install App. Follow the step-by-step instructions for iPhone (Safari) or Android (Chrome) to add Emma to your home screen.` },
    ],
  },
  {
    title: `Troubleshooting`,
    icon: `🔧`,
    items: [
      {
        q: `My progress seems slow — what should I do?`,
        a: `Take the Protocol Check-In to identify gaps. The most common issues: inconsistent adherence, not enough water, eating restricted foods, and poor sleep. These fundamentals account for 90% of slow progress — small adjustments make a big difference.`,
      },
      {
        q: `I want to cancel or get a refund`,
        a: `We understand the early weeks can feel challenging. Please consider: die-off symptoms are temporary and mean it's working. Results compound over the full 90 days — most users who complete the protocol report significant improvements. Take the Protocol Check-In to optimize your approach. Give it the full commitment before judging results — your gut needs time to rebuild.`,
      },
      {
        q: `Can I restart from Day 1?`,
        a: `The protocol follows your start date automatically — each day builds on the previous. If you've missed days, simply resume from your current day. The calendar lets you review past days anytime.`,
      },
      {
        q: `Will my progress be saved?`,
        a: `Yes! All your data — day completions, streaks, hydration, journal entries, habits — is saved locally on your device. You can close the app and return anytime without losing progress.`,
      },
    ],
  },
];
function Mr() {
  let e = qe(),
    [t, n] = (0, _.useState)(null),
    r = (e) => n((t) => (t === e ? null : e));
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-8`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-5`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => e(-1),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsx)(`h1`, {
            className: `text-2xl font-bold text-gray-900 mb-1`,
            children: `Frequently Asked Questions`,
          }),
          (0, k.jsx)(`p`, {
            className: `text-[13px] text-gray-400`,
            children: `Everything you need to know about your protocol`,
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `px-4 space-y-5`,
        children: [
          jr.map((e, n) =>
            (0, k.jsxs)(
              `div`,
              {
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center space-x-2 mb-3`,
                    children: [
                      (0, k.jsx)(`span`, { className: `text-sm`, children: e.icon }),
                      (0, k.jsx)(`h2`, { className: `text-[14px] font-bold text-gray-900`, children: e.title }),
                    ],
                  }),
                  (0, k.jsx)(`div`, {
                    className: `space-y-2`,
                    children: e.items.map((e, i) => {
                      let a = `${n}-${i}`,
                        o = t === a;
                      return (0, k.jsxs)(
                        `div`,
                        {
                          className: `bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden`,
                          children: [
                            (0, k.jsxs)(`button`, {
                              onClick: () => r(a),
                              className: `w-full p-4 flex items-center justify-between text-left`,
                              children: [
                                (0, k.jsx)(`span`, {
                                  className: `text-[13px] font-semibold text-gray-900 pr-3 leading-snug`,
                                  children: e.q,
                                }),
                                (0, k.jsx)(en, {
                                  size: 16,
                                  className: `text-gray-400 flex-shrink-0 transition-transform duration-200 ${o ? `rotate-180` : ``}`,
                                }),
                              ],
                            }),
                            o &&
                              (0, k.jsx)(`div`, {
                                className: `px-4 pb-4 -mt-1`,
                                children: (0, k.jsx)(`p`, {
                                  className: `text-[12px] text-gray-500 leading-relaxed`,
                                  children: e.a,
                                }),
                              }),
                          ],
                        },
                        a,
                      );
                    }),
                  }),
                ],
              },
              n,
            ),
          ),
          (0, k.jsx)(`div`, {
            className: `bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 text-center border border-green-100 mt-5`,
            children: (0, k.jsx)(`p`, {
              className: `text-[13px] text-[#1B6B4A] font-medium leading-relaxed`,
              children: `Still have questions? Keep following the protocol — most concerns resolve naturally as your gut heals. 💚`,
            }),
          }),
        ],
      }),
    ],
  });
}
function Nr() {
  let e = qe();
  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#1B6B4A] flex flex-col items-center justify-center px-8 relative overflow-hidden`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `absolute inset-0`,
        children: [
          (0, k.jsx)(`div`, {
            className: `absolute -top-24 -right-24 w-56 h-56 rounded-full bg-white/5 animate-breathe`,
          }),
          (0, k.jsx)(`div`, {
            className: `absolute bottom-32 -left-20 w-44 h-44 rounded-full bg-white/3 animate-breathe delay-4`,
          }),
          (0, k.jsx)(`div`, {
            className: `absolute top-1/3 right-8 w-20 h-20 rounded-full bg-white/4 animate-breathe delay-6`,
          }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: `relative z-10 w-full max-w-sm text-center`,
        children: [
          (0, k.jsx)(`div`, {
            className: `mb-8 animate-scale-in`,
            children: (0, k.jsx)(`div`, {
              className: `w-20 h-20 rounded-full bg-[#2ECC71] mx-auto flex items-center justify-center shadow-lg shadow-[#2ECC71]/30`,
              children: (0, k.jsx)(`svg`, {
                width: `36`,
                height: `36`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `white`,
                strokeWidth: `3`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                children: (0, k.jsx)(`polyline`, { points: `20 6 9 17 4 12` }),
              }),
            }),
          }),
          (0, k.jsx)(`div`, {
            className: `mb-6 animate-fade-in delay-2`,
            children: (0, k.jsx)(`img`, { src: `/app/logo.png`, alt: `Emma`, className: `w-32 h-auto mx-auto` }),
          }),
          (0, k.jsxs)(`div`, {
            className: `animate-slide-up delay-3`,
            children: [
              (0, k.jsx)(`h1`, {
                className: `text-2xl font-extrabold text-white mb-3 tracking-tight`,
                children: `Thank You for Your Purchase!`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-white/70 text-sm leading-relaxed mb-2`,
                children: `Your 90-day gut health protocol is ready.`,
              }),
              (0, k.jsx)(`p`, {
                className: `text-white/50 text-xs leading-relaxed mb-10`,
                children: `Tap the button below to set up your account and begin your healing journey.`,
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `animate-slide-up delay-5`,
            children: (0, k.jsx)(`button`, {
              onClick: () => e(`/`),
              className: `w-full py-4 bg-[#2ECC71] text-white font-bold rounded-xl text-base transition-all active:scale-[0.98] shadow-lg shadow-[#2ECC71]/25 animate-pulse-green`,
              children: `Enter the App →`,
            }),
          }),
          (0, k.jsx)(`div`, {
            className: `animate-fade-in delay-7 mt-8`,
            children: (0, k.jsx)(`p`, {
              className: `text-white/30 text-[11px]`,
              children: `Having trouble? Contact support@emmagut.com`,
            }),
          }),
        ],
      }),
      (0, k.jsx)(`div`, { className: `h-[env(safe-area-inset-bottom)]` }),
    ],
  });
}
var detoxDays = [
  {
    day: 1,
    morning: "Milk thistle seed tea: Crush 1 tsp milk thistle seeds, steep in 8oz hot water for 10 min. Strain and drink on empty stomach.",
    afternoon: "Lymphatic activation walk: 10-minute brisk walk swinging arms wide. Follow with 8oz room-temperature water + juice of 1/2 lemon.",
    symptom: "Mild fatigue",
    symptomAction: "Your liver is waking up. Rest when possible and drink an extra glass of water mid-morning."
  },
  {
    day: 2,
    morning: "Dandelion root decoction: Simmer 1 tbsp dried dandelion root in 10oz water for 15 min. Strain, add pinch of cinnamon. Drink warm.",
    afternoon: "Deep breathing flush: 4-7-8 breathing (inhale 4 counts, hold 7, exhale 8) for 5 rounds. Then drink 8oz water with 1 tsp chlorella powder.",
    symptom: "Slight headache",
    symptomAction: "Toxins are mobilizing. Add a pinch of sea salt to your water and drink 2 extra glasses today."
  },
  {
    day: 3,
    morning: "NAC power breakfast: 2 scrambled eggs with 3 cloves minced garlic, 1/2 cup chopped onion, and 1/4 cup broccoli sprouts. Cook in coconut oil.",
    afternoon: "Dry brushing session: Using a natural bristle brush, brush skin toward heart — start at feet, up legs, stomach (clockwise), arms, back. 5 minutes total. Shower after.",
    symptom: "Bloating increase",
    symptomAction: "Die-off gases are increasing as archaea break down. Sip peppermint tea after lunch and avoid raw vegetables today."
  },
  {
    day: 4,
    morning: "Artichoke liver tonic: Steep 1 artichoke tea bag + 1 tsp dried peppermint in 8oz hot water for 8 min. Add 1/2 tsp lemon juice.",
    afternoon: "Gentle rebounding: 2 minutes of gentle bouncing in place (feet barely leaving floor). Focus on rhythmic breathing. Drink 8oz cucumber water after.",
    symptom: "Low energy mid-day",
    symptomAction: "Your body is redirecting energy to detox pathways. Take a 15-minute rest or nap between 1-3 PM if possible."
  },
  {
    day: 5,
    morning: "Beet liver flush juice: Blend 1 small raw beet + 1 carrot + 1/2 apple + 1 inch ginger + 1/2 lemon juice. Strain if desired. Drink immediately.",
    afternoon: "Lymphatic drainage massage: Lie down, use fingertips to gently massage from collarbone to jawline (20 strokes each side). Then massage inner arms from wrist to armpit (10 strokes each).",
    symptom: "Headache intensifying",
    symptomAction: "Peak toxin release is beginning. Apply a cold compress to your forehead for 10 minutes and double your water intake today."
  },
  {
    day: 6,
    morning: "Turmeric golden milk: Heat 8oz unsweetened almond milk with 1 tsp turmeric, 1/2 tsp cinnamon, pinch black pepper, 1/2 tsp coconut oil. Whisk until frothy.",
    afternoon: "Activated charcoal lemonade: Mix 1/2 capsule activated charcoal (food-grade) in 12oz water with juice of 1 lemon and 1 tsp raw honey. Drink 2 hours away from meals/supplements.",
    symptom: "Skin starting to react — minor pimples",
    symptomAction: "Your skin is a detox organ and it's working overtime. Avoid touching your face. Wash with cool water only tonight."
  },
  {
    day: 7,
    morning: "Green liver support juice: Blend 2 cups spinach + 1 cucumber + 1/2 green apple + 1 stalk celery + juice of 1 lime + 1 inch ginger. Drink fresh.",
    afternoon: "4-7-8 breathing + cold splash: Do 6 rounds of 4-7-8 breathing, then splash cold water on face and neck 10 times. Pat dry gently.",
    symptom: "Fatigue and brain fog",
    symptomAction: "Week 1 complete — your body is in deep cleanse mode. Go to bed 30 minutes earlier tonight. Avoid screens after 8 PM."
  },
  {
    day: 8,
    morning: "Milk thistle + dandelion blend: Steep 1/2 tsp crushed milk thistle seeds + 1/2 tbsp dandelion root in 10oz hot water for 12 min. Add raw honey if needed.",
    afternoon: "Cilantro detox water: Blend a large handful of fresh cilantro in 16oz water. Strain and sip throughout the afternoon. Cilantro helps bind and remove heavy metals.",
    symptom: "Peak bloating and gas",
    symptomAction: "This is the die-off peak — the worst is almost over. Take a warm bath with 1 cup Epsom salt tonight for 20 minutes."
  },
  {
    day: 9,
    morning: "Cruciferous NAC boost: Sauté 1 cup chopped kale + 3 cloves garlic + 1/2 cup Brussels sprouts in olive oil. Season with lemon juice and sea salt. Eat warm.",
    afternoon: "Dry brushing + rebounding combo: 3 min dry brushing (feet to heart), then 2 min gentle bouncing. Finish with 8oz warm lemon water.",
    symptom: "Mood swings and irritability",
    symptomAction: "Toxin overload can affect neurotransmitters. Take 3 deep breaths whenever frustration hits. Add magnesium-rich foods to dinner (spinach, pumpkin seeds)."
  },
  {
    day: 10,
    morning: "Beet + carrot + ginger detox shot: Juice 1/2 beet + 1 carrot + 2 inches ginger. Take as a 4oz concentrated shot on empty stomach.",
    afternoon: "Lymphatic bouncing: 3 minutes of heel raises (stand on tiptoes, drop heels firmly). This pumps the lymph system. Follow with 10oz water + pinch of sea salt.",
    symptom: "Skin breakout (forehead/chin)",
    symptomAction: "Forehead = gut toxins clearing. Chin = liver overload. Increase dandelion tea to twice daily. Apply raw honey mask for 15 min tonight."
  },
  {
    day: 11,
    morning: "Artichoke + lemon morning tonic: Steep 1 artichoke tea bag in 8oz hot water. Add juice of 1/2 lemon and 1/4 tsp turmeric. Stir and drink warm.",
    afternoon: "Extended breathing session: Box breathing (4 in, 4 hold, 4 out, 4 hold) for 8 rounds. Then lie flat for 3 minutes with hands on belly. Focus on diaphragmatic breathing.",
    symptom: "Digestive irregularity",
    symptomAction: "Your gut is recalibrating. Eat smaller, more frequent meals today. Include 1 tbsp ground flaxseed in a smoothie or oatmeal."
  },
  {
    day: 12,
    morning: "Triple root tea: Simmer 1 tsp each of dandelion root, burdock root, and ginger root in 12oz water for 15 min. Strain, add cinnamon stick while cooling.",
    afternoon: "Castor oil compress (external only): Soak a cloth in castor oil, place on right side of abdomen (liver area), cover with plastic wrap, apply warm towel on top. Rest for 20 min.",
    symptom: "Last peak day — mixed symptoms",
    symptomAction: "This is the final peak. Tomorrow begins the downslope. Prioritize sleep, hydration, and gentle movement only. You're doing great."
  },
  {
    day: 13,
    morning: "Lemon + ginger + cayenne morning shot: 4oz warm water + juice of 1 lemon + 1/4 tsp ginger powder + tiny pinch cayenne pepper. Drink in one go.",
    afternoon: "Gentle yoga flow: 5 minutes of cat-cow stretches (on all fours, alternate arching and rounding back). Follow with child's pose for 1 minute. Drink 8oz water after.",
    symptom: "Symptoms starting to ease",
    symptomAction: "The die-off curve is descending. You should notice slightly more energy today. Keep your water intake high."
  },
  {
    day: 14,
    morning: "Milk thistle + peppermint recovery tea: Steep 1 tsp crushed milk thistle seeds + 1 tsp dried peppermint leaves in 8oz hot water for 10 min. Sip slowly.",
    afternoon: "Skin brushing (gentle): Light dry brushing, softer pressure than before. Focus on legs and arms only. Follow with 8oz warm water + 1/4 tsp turmeric.",
    symptom: "Lingering fatigue but improving",
    symptomAction: "Your liver is recovering well. Add an extra serving of leafy greens at dinner — the chlorophyll supports liver regeneration."
  },
  {
    day: 15,
    morning: "Dandelion + chicory root coffee: Brew 1 tbsp roasted dandelion root + 1 tsp chicory root in 8oz hot water. Add a splash of oat milk if desired.",
    afternoon: "Walking meditation: 10-minute walk at moderate pace. Breathe deeply through nose, exhale through mouth. Focus on each step touching the ground.",
    symptom: "Mild headache returning briefly",
    symptomAction: "Brief symptom flares are normal as deeper toxin layers are reached. This passes within hours. Drink peppermint tea and rest."
  },
  {
    day: 16,
    morning: "Green detox smoothie bowl: Blend 1 cup spinach + 1/2 avocado + 1/2 banana + 8oz coconut water + 1 tsp spirulina. Pour in bowl, top with pumpkin seeds.",
    afternoon: "Alternating hot/cold shower: Last 2 min of shower, alternate 30 sec hot / 30 sec cold for 4 rounds. End on cold. Stimulates lymphatic circulation powerfully.",
    symptom: "Energy improving noticeably",
    symptomAction: "Your detox pathways are clearing. Use this energy for a 15-minute walk outside — sunlight boosts liver detox enzymes."
  },
  {
    day: 17,
    morning: "Artichoke + fennel digestive tea: Steep 1 artichoke tea bag + 1 tsp fennel seeds in 8oz hot water for 10 min. Drink before breakfast.",
    afternoon: "Rebounding session: 3 minutes bouncing (slightly more vigorous than before). Add gentle arm swings. Follow with 10oz water with 1/2 tsp apple cider vinegar.",
    symptom: "Occasional bloating",
    symptomAction: "Residual inflammation is settling. Chew each bite of food 20+ times today to reduce digestive burden."
  },
  {
    day: 18,
    morning: "Beet kvass sip: If you prepared beet kvass (fermented beet water), drink 4oz. Otherwise: 1/2 beet juiced + 1 inch ginger + 1/4 lemon, diluted in 4oz water.",
    afternoon: "Diaphragmatic breathing + abdominal massage: 3 min deep belly breathing lying down, then gently massage abdomen clockwise for 2 min using warm coconut oil.",
    symptom: "Skin clearing up",
    symptomAction: "Celebrate this milestone. Your skin reflects your liver's improved function. Continue hydrating well."
  },
  {
    day: 19,
    morning: "Turmeric + black pepper + ginger latte: Heat 8oz coconut milk with 1 tsp turmeric, 1/4 tsp black pepper, 1/2 tsp ginger, 1/2 tsp cinnamon. Whisk well.",
    afternoon: "Dry brushing + stretching: 3 min dry brushing, then 5 min gentle full-body stretching (neck rolls, shoulder shrugs, side bends, forward fold, quad stretch).",
    symptom: "Improved mood and mental clarity",
    symptomAction: "Your brain is benefiting from reduced toxin load. Journal 3 things you're grateful for today — this amplifies the gut-brain healing."
  },
  {
    day: 20,
    morning: "NAC-rich veggie scramble: 2 eggs scrambled with 1/4 cup red onion, 2 cloves garlic, 1/4 cup mushrooms, handful arugula. Cook in ghee.",
    afternoon: "Cold water face immersion: Fill a bowl with cold water. Submerge face for 10 seconds, breathe, repeat 5 times. Activates vagus nerve and lymphatic drainage in face/neck.",
    symptom: "Stable — occasional mild tiredness",
    symptomAction: "You're in the smooth recovery zone. Maintain your protocol consistency. Consider adding 1 extra glass of water before bed."
  },
  {
    day: 21,
    morning: "Dandelion root + licorice root tea: Steep 1 tbsp dandelion root + 1/2 tsp licorice root in 10oz hot water for 12 min. Strain and drink warm.",
    afternoon: "Full lymphatic routine: Dry brush (5 min, full body toward heart), then 2 min gentle bouncing, then 3 min deep breathing. Drink 12oz water after.",
    symptom: "Die-off symptoms largely resolved",
    symptomAction: "21-day mark — the primary die-off phase is complete. Your liver and lymph system are now functioning at a higher level. Well done."
  },
  {
    day: 22,
    morning: "Chlorella green shot: Blend 1 tsp chlorella powder + 4oz coconut water + juice of 1/2 lime + small piece of ginger. Drink as a quick morning shot.",
    afternoon: "Mindful walking: 15 minutes at comfortable pace. Focus on breathing pattern: inhale for 4 steps, exhale for 4 steps. No phone.",
    symptom: "Feeling stronger",
    symptomAction: "Your baseline energy is higher now. Channel it into consistent daily movement — even 10 minutes makes a difference."
  },
  {
    day: 23,
    morning: "Milk thistle + chamomile calming blend: Steep 1/2 tsp milk thistle seeds + 1 chamomile tea bag in 8oz hot water for 8 min. Add raw honey.",
    afternoon: "Self-massage for liver area: Lie on back, gently press and release right ribcage area with fingertips in slow circles for 3 min. Then press below ribs and breathe deeply 5 times.",
    symptom: "Smooth sailing",
    symptomAction: "Maintenance mode. Focus on consistent sleep schedule — going to bed and waking at the same times supports your liver's circadian rhythm."
  },
  {
    day: 24,
    morning: "Carrot + turmeric + orange juice: Juice 2 carrots + 1 orange + 1 tsp turmeric powder + pinch black pepper. Drink fresh on empty stomach.",
    afternoon: "Epsom salt foot soak: Dissolve 1/2 cup Epsom salt in warm water in a basin. Soak feet for 15 min. Magnesium absorbs through skin and supports liver detox.",
    symptom: "Occasional mild bloating",
    symptomAction: "Minor fluctuations are normal. If bloating occurs after a specific food, note it — your gut is more sensitive and communicative now."
  },
  {
    day: 25,
    morning: "Burdock root + ginger tea: Simmer 1 tbsp burdock root + 1 inch sliced ginger in 10oz water for 12 min. Strain, add squeeze of lemon.",
    afternoon: "Box breathing reset: 6 rounds of box breathing (4-4-4-4). Then 2 min of gentle bouncing. Finish with 8oz room temp water.",
    symptom: "Energy stable throughout day",
    symptomAction: "Your circadian energy rhythm is normalizing. Notice when your natural energy peaks are — schedule important tasks then."
  },
  {
    day: 26,
    morning: "Liver-loving green bowl: Sauté 1 cup kale + 1/2 cup spinach + 2 cloves garlic in olive oil. Top with 1 tbsp pumpkin seeds + squeeze of lemon. Eat warm.",
    afternoon: "Dry brushing + cold rinse: 3 min dry brushing, then take a normal shower ending with 30 seconds of cold water. Towel dry vigorously.",
    symptom: "Clear-headed and lighter",
    symptomAction: "You're feeling the cumulative benefit of 26 days of liver support. Your body is processing toxins more efficiently now."
  },
  {
    day: 27,
    morning: "Artichoke + dandelion + lemon mega-tea: Steep 1 artichoke bag + 1 tsp dandelion root in 10oz water for 10 min. Add lemon juice + pinch of turmeric.",
    afternoon: "Gratitude breathing: 5 min session — inhale deeply and think of something you're grateful for. Exhale slowly and release tension. Repeat 10 times. Drink 8oz water after.",
    symptom: "Feeling healthy and balanced",
    symptomAction: "Your detox organs are performing well. Continue hydrating and eating whole foods. The protocol is doing its job."
  },
  {
    day: 28,
    morning: "Spirulina + banana + almond milk shake: Blend 1 tsp spirulina + 1 banana + 8oz almond milk + 1 tbsp almond butter + pinch cinnamon. Drink on empty stomach.",
    afternoon: "Full body stretch + breathwork: 5 min gentle stretching (reach overhead, side bends, forward fold, gentle twists). Then 3 min diaphragmatic breathing lying down.",
    symptom: "Strong and clear",
    symptomAction: "Almost done with the 30-day shield. Your liver is significantly stronger than when you started. Maintain the habits you've built."
  },
  {
    day: 29,
    morning: "Triple liver tea: Steep milk thistle (1/2 tsp seeds) + dandelion root (1/2 tbsp) + peppermint (1/2 tsp) in 10oz hot water for 12 min. Your signature blend.",
    afternoon: "Lymphatic celebration routine: Dry brush 3 min + bounce 2 min + cold face splash 1 min + deep breathing 2 min. Full circuit. Drink 10oz water.",
    symptom: "Peak wellness",
    symptomAction: "Tomorrow is your final day. Reflect on how different you feel compared to Day 1. Your body has done incredible work."
  },
  {
    day: 30,
    morning: "Golden beet + turmeric + ginger celebration juice: Juice 1 beet + 2 carrots + 1 inch ginger + 1/2 lemon + 1/4 tsp turmeric. Toast to 30 days of detox support.",
    afternoon: "Complete detox ritual: Dry brush (5 min) + Epsom salt bath (20 min) + deep breathing (5 min). This is your graduation ceremony. Drink 12oz lemon water after.",
    symptom: "Detox Shield complete",
    symptomAction: "30 days done. Your liver is stronger, your lymph system is flowing, your skin is clearer. Continue drinking dandelion tea 3x/week for ongoing maintenance."
  }
];

var skinDays = [
  {
    day: 1,
    foods: "Start with 2 cups cucumber slices + 1 cup celery sticks at breakfast. High water content flushes skin toxins from inside out.",
    topical: "Honey cleanse: Apply raw honey to damp face, leave 10 min, rinse with lukewarm water. Honey is antibacterial and won't strip your skin barrier.",
    supplement: "Bone broth (8oz) — rich in collagen, glycine, and proline that rebuild skin from the cellular level."
  },
  {
    day: 2,
    foods: "Breakfast: 1/2 avocado on toast + 2 Brazil nuts. Avocado delivers vitamin E, Brazil nuts provide selenium — both shield skin cells from oxidative damage.",
    topical: "Green tea compress: Brew 2 green tea bags, cool in fridge 10 min. Press bags gently on problem areas for 5 min. Anti-inflammatory catechins reduce redness.",
    supplement: "Pumpkin seeds (2 tbsp) — zinc powerhouse that accelerates skin cell turnover and wound healing."
  },
  {
    day: 3,
    foods: "Breakfast smoothie: 1 cup blueberries + 1/2 cup strawberries + 8oz water + 1 tbsp ground flaxseed. Antioxidant bomb for skin cell protection.",
    topical: "Oatmeal paste: Mix 2 tbsp ground oats + 1 tbsp warm water + 1/2 tsp honey. Apply to face for 10 min. Soothes inflammation and absorbs excess oil.",
    supplement: "Wild salmon or sardines at lunch — omega-3 fatty acids reduce inflammatory skin responses during detox."
  },
  {
    day: 4,
    foods: "Breakfast: 2 eggs + sautéed spinach (1 cup) + 1/4 cup red bell pepper. Vitamin A from spinach + vitamin C from pepper = collagen synthesis support.",
    topical: "Aloe vera gel: Apply pure aloe vera gel (from leaf or 99% pure) to face. Leave 15 min, rinse cool water. Calms irritation and speeds healing.",
    supplement: "Kefir (6oz) — probiotics from fermented dairy reduce skin inflammation by healing the gut-skin axis."
  },
  {
    day: 5,
    foods: "Breakfast: Sweet potato hash (1 small diced sweet potato + 1/2 onion in coconut oil). Beta-carotene converts to vitamin A, your skin's repair vitamin.",
    topical: "Turmeric spot treatment: Mix 1/4 tsp turmeric + 1/2 tsp honey. Dab on breakout spots only. Leave 15 min, rinse. Curcumin reduces localized inflammation.",
    supplement: "Dark chocolate (1oz, 70%+ cacao) — flavonoids improve blood flow to skin and provide UV protection from within."
  },
  {
    day: 6,
    foods: "Breakfast: Overnight oats with 1 tbsp chia seeds + 1/2 cup mixed berries + almond milk. Chia omega-3s + berry antioxidants = anti-inflammatory skin meal.",
    topical: "Cool cucumber mask: Blend 1/4 cucumber into paste, spread on face for 10 min. Rinse cool water. Hydrates and depuffs — especially around eyes.",
    supplement: "Walnuts (1/4 cup) — richest nut source of omega-3 ALA, which reduces skin dryness and flaking during detox."
  },
  {
    day: 7,
    foods: "Breakfast: Papaya bowl (1 cup cubed papaya + squeeze of lime + 1 tbsp pumpkin seeds). Papain enzyme aids digestion; less gut burden = less skin burden.",
    topical: "Apple cider vinegar toner: Mix 1 part ACV + 3 parts water. Apply with cotton pad after cleansing. Balances skin pH and reduces breakout bacteria. Patch test first.",
    supplement: "Sauerkraut (2 tbsp with lunch) — fermented cabbage delivers probiotics and vitamin C for gut-skin connection."
  },
  {
    day: 8,
    foods: "Breakfast: Carrot + ginger juice (3 carrots + 1 inch ginger + 1/2 orange). Beta-carotene surge targets skin cell repair during peak die-off period.",
    topical: "Honey + cinnamon mask: Mix 2 tsp honey + 1/4 tsp cinnamon. Apply thin layer to face, avoid eyes. 10 min, rinse. Antimicrobial and circulation-boosting.",
    supplement: "Liver (chicken or beef, 3oz) or liver pâté — nature's multivitamin, packed with vitamin A and B vitamins for skin regeneration."
  },
  {
    day: 9,
    foods: "Breakfast: Green smoothie with 2 cups spinach + 1/2 banana + 1 tbsp hemp seeds + coconut water. Chlorophyll acts as an internal skin cleanser.",
    topical: "Cold spoon depuff: Place 2 metal spoons in freezer 10 min. Press curved side under eyes and along jawline. Reduces puffiness and stimulates lymph drainage.",
    supplement: "Sunflower seeds (2 tbsp) — vitamin E protects skin cell membranes from free radical damage during detox."
  },
  {
    day: 10,
    foods: "Breakfast: 2 eggs + 1/2 avocado + handful of watercress. Watercress is packed with skin-clearing compounds (vitamins A, C, K and iron).",
    topical: "Yogurt mask: Apply 1 tbsp plain full-fat yogurt to face. Leave 10 min, rinse. Lactic acid gently exfoliates and probiotic cultures calm skin.",
    supplement: "Miso soup (1 bowl at lunch) — fermented soy delivers isoflavones that improve skin elasticity and hydration."
  },
  {
    day: 11,
    foods: "Breakfast: Beet + berry smoothie (1/2 small beet + 1 cup mixed berries + 8oz almond milk + 1 tsp flaxseed oil). Betalains in beets support Phase 2 liver detox.",
    topical: "Tea tree oil spot treatment: Mix 1 drop tea tree oil + 1 tsp coconut oil. Dab on active breakouts before bed. Natural antiseptic without stripping skin.",
    supplement: "Oysters or crab (3oz at dinner) — highest food source of zinc for rapid skin cell renewal."
  },
  {
    day: 12,
    foods: "Breakfast: Mango + turmeric smoothie (1/2 mango + 1/2 tsp turmeric + 8oz coconut milk + 1 tsp coconut oil). Mango vitamin A + turmeric anti-inflammatory = skin repair accelerator.",
    topical: "Chamomile compress: Brew 2 chamomile tea bags in 1 cup water, cool in fridge. Soak a clean cloth and press on face for 5 min. Calms redness and irritation.",
    supplement: "Kimchi (2 tbsp with dinner) — probiotic-rich fermented vegetables strengthen the gut-skin axis from both ends."
  },
  {
    day: 13,
    foods: "Breakfast: Omega-3 bowl — smoked salmon (2oz) + 1/2 avocado + lemon juice + capers on a rice cake. Anti-inflammatory fats that make skin glow from within.",
    topical: "Banana peel rub: Rub the inside of a banana peel on breakout-prone areas for 2 min. Leave residue on for 10 min, rinse. Enzymes and potassium soothe irritation.",
    supplement: "Collagen peptides (1 scoop in coffee or smoothie) — direct building blocks for skin elasticity and repair."
  },
  {
    day: 14,
    foods: "Celebration breakfast: Berry parfait — layer coconut yogurt + mixed berries + pumpkin seeds + drizzle of honey. Combines probiotics, antioxidants, and zinc.",
    topical: "Honey + oat + turmeric glow mask: Mix 1 tsp honey + 1 tbsp ground oats + pinch turmeric. Apply 10 min, rinse with warm water. Your graduation mask — combine the best of 2 weeks.",
    supplement: "Dark leafy greens mega-salad at lunch (spinach, kale, arugula, watercress) — your skin is noticeably clearer now. Maintain with daily greens."
  }
];

var energySmoothies = [
  {
    name: "The Liver Guardian",
    ingredients: "1 cup spinach, 1/2 beet (raw), 1/2 banana, 1 tbsp lemon juice, 1 inch ginger, 8oz coconut water, 3 ice cubes",
    prep: "Add coconut water and spinach first, blend 30 sec. Add remaining ingredients, blend until smooth. Drink immediately for maximum enzyme activity.",
    when: "1:00 PM — right when the afternoon energy dip begins",
    benefit: "Beet nitrates dilate blood vessels, delivering more oxygen to your cells and brain for sustained afternoon energy."
  },
  {
    name: "Mitochondria Fuel",
    ingredients: "1 cup kale, 1/2 banana, 1 tbsp almond butter, 1 tsp cacao powder, 1/2 tsp maca powder, 8oz almond milk, pinch cinnamon",
    prep: "Blend almond milk and kale until smooth. Add remaining ingredients and blend 30 sec. Creamy chocolate-like taste with massive energy support.",
    when: "2:00 PM — when the post-lunch crash typically hits hardest",
    benefit: "Maca root + cacao provide sustained energy by supporting mitochondrial ATP production without the jitters of caffeine."
  },
  {
    name: "Toxin Buster",
    ingredients: "1 cup cilantro (packed), 1/2 cucumber, 1/2 green apple, 1 tbsp chia seeds, juice of 1 lime, 10oz water, 3 ice cubes",
    prep: "Soak chia seeds in water 5 min. Add all ingredients and blend until smooth. Light and refreshing — easy to drink even when tired.",
    when: "1:30 PM — ideal during days 5-12 when die-off is highest",
    benefit: "Cilantro binds heavy metals and toxins while chia seeds provide slow-release energy through omega-3s and fiber."
  },
  {
    name: "The Adrenal Reset",
    ingredients: "1/2 avocado, 1/2 banana, 1 tbsp raw honey, 1/2 tsp ashwagandha powder, 8oz oat milk, pinch sea salt",
    prep: "Blend oat milk and avocado first until creamy. Add remaining ingredients and blend 20 sec. Rich and satisfying.",
    when: "2:30 PM — when cortisol naturally dips and fatigue sets in",
    benefit: "Ashwagandha is an adaptogen that helps your adrenals manage stress, while healthy fats provide steady fuel without blood sugar spikes."
  },
  {
    name: "Berry Shield",
    ingredients: "1 cup mixed berries (blueberry, raspberry, strawberry), 1/2 banana, 1 tbsp hemp seeds, 1 tsp spirulina, 8oz coconut water",
    prep: "Blend coconut water and spirulina first to dissolve evenly. Add berries, banana, hemp seeds, blend until smooth. Vibrant purple-green color.",
    when: "1:00 PM — great for energy on skin breakout days",
    benefit: "Berries deliver anthocyanins that fight inflammation, while spirulina provides B12 and iron for oxygen delivery to every cell."
  },
  {
    name: "Ginger Fire",
    ingredients: "1 carrot, 1 orange (peeled), 2 inches fresh ginger, 1/2 tsp turmeric, 1 tbsp flaxseed oil, 6oz water, 3 ice cubes",
    prep: "Roughly chop carrot and orange. Blend all ingredients on high for 45 sec until smooth. Spicy kick that wakes you up naturally.",
    when: "1:30 PM — especially effective on low-energy die-off days",
    benefit: "Ginger's gingerols increase metabolic rate and circulation, delivering a natural energy boost that lasts 2-3 hours."
  },
  {
    name: "The Green Machine",
    ingredients: "2 cups spinach, 1 stalk celery, 1/2 green apple, 1/2 cucumber, 1 tbsp pumpkin seeds, juice of 1/2 lemon, 8oz water",
    prep: "Blend water and greens first. Add apple, cucumber, pumpkin seeds, lemon. Blend until smooth. Clean, light, energizing.",
    when: "12:30 PM — drink before lunch to prevent the afternoon crash before it starts",
    benefit: "Chlorophyll from greens increases oxygen in your blood, while celery's natural sodium replaces electrolytes lost during detox."
  },
  {
    name: "Coconut Revival",
    ingredients: "1/2 banana, 2 tbsp shredded coconut, 1 tbsp coconut oil, 1/2 tsp vanilla extract, 1 tsp raw cacao nibs, 8oz coconut milk, pinch nutmeg",
    prep: "Blend coconut milk, banana, coconut oil, and vanilla until smooth. Add shredded coconut and cacao nibs, pulse 3 times for texture.",
    when: "2:00 PM — tastes like a treat while delivering real energy",
    benefit: "Medium-chain triglycerides (MCTs) in coconut oil are converted directly into energy by your liver, bypassing fat storage."
  },
  {
    name: "The Iron Maiden",
    ingredients: "2 cups baby spinach, 1/2 cup blackberries, 1 tbsp tahini, 1 tbsp molasses, 1/2 banana, 8oz oat milk",
    prep: "Blend oat milk and spinach until smooth. Add remaining ingredients and blend 30 sec. Rich, slightly sweet, deeply nourishing.",
    when: "1:00 PM — especially good if you're experiencing fatigue and dizziness",
    benefit: "Spinach + molasses + blackberries provide iron, which is essential for oxygen transport — low iron is a hidden cause of detox fatigue."
  },
  {
    name: "Probiotic Power",
    ingredients: "1/2 cup plain kefir, 1/2 banana, 1/2 cup pineapple chunks, 1 tbsp ground flaxseed, 1/2 tsp cinnamon, 4oz coconut water",
    prep: "Blend kefir and coconut water. Add pineapple, banana, flaxseed, cinnamon. Blend until smooth. Creamy and tropical.",
    when: "2:30 PM — supports both energy and gut healing simultaneously",
    benefit: "Kefir's 30+ probiotic strains support your gut while pineapple's bromelain enzyme aids nutrient absorption for faster energy delivery."
  },
  {
    name: "Matcha Zen",
    ingredients: "1 tsp matcha powder, 1/2 banana, 1/2 avocado, 1 tbsp honey, 8oz almond milk, 3 ice cubes",
    prep: "Dissolve matcha in 2 tbsp warm water first, whisk until smooth. Add to blender with remaining ingredients. Blend until creamy.",
    when: "1:00 PM — sustained energy without the coffee crash",
    benefit: "Matcha's L-theanine + caffeine combo provides calm, focused energy for 4-6 hours — ideal during detox when you need to function."
  },
  {
    name: "Beet Endurance",
    ingredients: "1/2 small beet (raw), 1/2 cup frozen cherries, 1 tbsp walnut pieces, 1 tsp maca powder, 8oz oat milk, 1 tsp maple syrup",
    prep: "Chop beet small. Blend oat milk and beet first on high 45 sec. Add cherries, walnuts, maca, maple syrup. Blend until smooth. Deep red color.",
    when: "2:00 PM — best for days when you need physical endurance",
    benefit: "Beet nitrates improve exercise efficiency by 5-15%, and tart cherries contain melatonin precursors that regulate your sleep-wake cycle."
  },
  {
    name: "Turmeric Sunrise",
    ingredients: "1/2 mango, 1/2 banana, 1 tsp turmeric, 1/4 tsp black pepper, 1 tbsp coconut cream, 8oz oat milk, 1/2 tsp ginger powder",
    prep: "Blend oat milk with turmeric, pepper, and ginger first. Add mango, banana, coconut cream. Blend until smooth. Golden and tropical.",
    when: "1:30 PM — anti-inflammatory energy boost",
    benefit: "Turmeric's curcumin (activated by black pepper) reduces systemic inflammation, freeing up energy your body was using to fight inflammation."
  },
  {
    name: "The Finisher",
    ingredients: "1 cup mixed greens (spinach + kale), 1/2 banana, 1/2 cup blueberries, 1 tbsp almond butter, 1 tsp spirulina, 1 tsp flaxseed oil, 8oz coconut water",
    prep: "Blend coconut water and greens. Add all remaining ingredients, blend 40 sec until smooth. The ultimate detox support smoothie.",
    when: "1:00 PM — your go-to for the final stretch of the 30-day protocol",
    benefit: "Combines every category — greens for chlorophyll, berries for antioxidants, healthy fats for absorption, spirulina for complete protein and B vitamins."
  }
];

function DetoxShieldPage() {
  var e = qe(),
    [t, n] = (0, _.useState)(0),
    [r, i] = (0, _.useState)(1),
    [a, o] = (0, _.useState)(() => O.get("emma_detox_morning_" + r) || false),
    [s, c] = (0, _.useState)(() => O.get("emma_detox_afternoon_" + r) || false);

  (0, _.useEffect)(function () {
    o(O.get("emma_detox_morning_" + r) || false);
    c(O.get("emma_detox_afternoon_" + r) || false);
  }, [r]);

  var l = detoxDays.find(function (e) { return e.day === r; }) || detoxDays[0],
    u = r <= 7 ? 1 : r <= 12 ? 3 : r <= 21 ? 2 : 1,
    d = ["", "Low", "Moderate", "High"][u],
    f = ["", "bg-green-100 text-green-700", "bg-yellow-100 text-yellow-700", "bg-red-100 text-red-700"][u],
    p = ["Daily Protocol", "Skin Rescue", "Smoothies"];

  return (0, k.jsxs)("div", {
    className: "min-h-dvh bg-[#FAFAF7] pb-24",
    children: [
      (0, k.jsxs)("div", {
        className: "px-4 pt-8 pb-4",
        children: [
          (0, k.jsxs)("button", {
            onClick: function () { e("/"); },
            className: "flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600",
            children: [(0, k.jsx)(nn, { size: 16 }), " ", (0, k.jsx)("span", { children: "Back" })]
          }),
          (0, k.jsxs)("div", {
            className: "flex items-center space-x-2 mb-1.5",
            children: [
              (0, k.jsx)("span", { className: "text-lg", children: "🛡️" }),
              (0, k.jsx)("span", {
                className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase tracking-widest",
                children: "Shield Active"
              })
            ]
          }),
          (0, k.jsx)("h1", { className: "text-2xl font-bold text-gray-900", children: "Detox Shield" }),
          (0, k.jsx)("p", { className: "text-[12px] text-gray-400 mt-0.5", children: "30-day liver support protocol" })
        ]
      }),
      (0, k.jsx)("div", {
        className: "px-4 mb-4",
        children: (0, k.jsx)("div", {
          className: "flex bg-white rounded-xl border border-gray-100 p-1",
          children: p.map(function (e, r) {
            return (0, k.jsx)("button", {
              onClick: function () { n(r); },
              className: "flex-1 py-2 text-[12px] font-semibold rounded-lg transition-all " + (t === r ? "bg-emerald-500 text-white shadow-sm" : "text-gray-400"),
              children: e
            }, r);
          })
        })
      }),
      t === 0 && (0, k.jsxs)("div", {
        className: "px-4",
        children: [
          (0, k.jsxs)("div", {
            className: "flex items-center justify-between mb-4",
            children: [
              (0, k.jsx)("button", {
                onClick: function () { r > 1 && i(r - 1); },
                className: "w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 " + (r <= 1 ? "opacity-30" : "active:bg-gray-50"),
                children: (0, k.jsx)("span", { className: "text-gray-600 text-sm", children: "‹" })
              }),
              (0, k.jsxs)("span", { className: "text-[15px] font-bold text-gray-900", children: ["Day ", r, " of 30"] }),
              (0, k.jsx)("button", {
                onClick: function () { r < 30 && i(r + 1); },
                className: "w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 " + (r >= 30 ? "opacity-30" : "active:bg-gray-50"),
                children: (0, k.jsx)("span", { className: "text-gray-600 text-sm", children: "›" })
              })
            ]
          }),
          (0, k.jsxs)("div", {
            className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4 relative overflow-hidden",
            children: [
              (0, k.jsx)("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-300" }),
              (0, k.jsxs)("div", {
                className: "pl-3",
                children: [
                  (0, k.jsx)("h3", { className: "text-[14px] font-bold text-emerald-600 mb-2", children: "Morning Liver Activation" }),
                  (0, k.jsx)("p", { className: "text-[14px] text-gray-600 leading-relaxed mb-3", children: l.morning }),
                  a
                    ? (0, k.jsx)("div", {
                        className: "py-2.5 px-4 bg-green-50 rounded-xl text-[#1B6B4A] text-[13px] font-semibold border border-green-200 text-center",
                        children: "✓ Completed"
                      })
                    : (0, k.jsx)("button", {
                        onClick: function () { o(true); O.set("emma_detox_morning_" + r, true); },
                        className: "w-full py-2.5 bg-emerald-500 text-white font-semibold rounded-xl text-[13px] active:bg-emerald-600 transition-all",
                        children: "Mark as Done"
                      })
                ]
              })
            ]
          }),
          (0, k.jsxs)("div", {
            className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4 relative overflow-hidden",
            children: [
              (0, k.jsx)("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300" }),
              (0, k.jsxs)("div", {
                className: "pl-3",
                children: [
                  (0, k.jsx)("h3", { className: "text-[14px] font-bold text-blue-600 mb-2", children: "Afternoon Toxin Flush" }),
                  (0, k.jsx)("p", { className: "text-[14px] text-gray-600 leading-relaxed mb-3", children: l.afternoon }),
                  s
                    ? (0, k.jsx)("div", {
                        className: "py-2.5 px-4 bg-green-50 rounded-xl text-[#1B6B4A] text-[13px] font-semibold border border-green-200 text-center",
                        children: "✓ Completed"
                      })
                    : (0, k.jsx)("button", {
                        onClick: function () { c(true); O.set("emma_detox_afternoon_" + r, true); },
                        className: "w-full py-2.5 bg-blue-500 text-white font-semibold rounded-xl text-[13px] active:bg-blue-600 transition-all",
                        children: "Mark as Done"
                      })
                ]
              })
            ]
          }),
          (0, k.jsxs)("div", {
            className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4",
            children: [
              (0, k.jsxs)("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                  (0, k.jsx)("h3", { className: "text-[14px] font-bold text-gray-900", children: "Symptom Alert" }),
                  (0, k.jsx)("span", { className: "text-[11px] font-bold px-2 py-0.5 rounded-full " + f, children: d })
                ]
              }),
              (0, k.jsx)("p", { className: "text-[14px] font-medium text-gray-700 mb-1", children: l.symptom }),
              (0, k.jsx)("p", { className: "text-[13px] text-gray-500 leading-relaxed", children: l.symptomAction })
            ]
          }),
          (0, k.jsx)("div", {
            className: "bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border border-green-100 mb-4",
            children: (0, k.jsxs)("div", {
              className: "flex items-center space-x-3",
              children: [
                (0, k.jsx)("div", {
                  className: "w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0",
                  children: (0, k.jsx)("span", { className: "text-lg", children: "🛡️" })
                }),
                (0, k.jsxs)("div", {
                  children: [
                    (0, k.jsx)("p", { className: "text-[13px] font-bold text-emerald-700", children: "Shield Progress" }),
                    (0, k.jsxs)("p", { className: "text-[12px] text-emerald-600", children: [Math.round((r / 30) * 100), "% complete"] })
                  ]
                })
              ]
            })
          })
        ]
      }),
      t === 1 && (0, k.jsx)("div", {
        className: "px-4",
        children: (0, k.jsxs)("div", {
          className: "space-y-3",
          children: [
            (0, k.jsx)("p", { className: "text-[13px] text-gray-500 mb-2", children: "14-day protocol to prevent and reverse detox-related skin breakouts." }),
            skinDays.map(function (e) {
              return (0, k.jsxs)("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-5",
                children: [
                  (0, k.jsxs)("div", {
                    className: "flex items-center space-x-2 mb-3",
                    children: [
                      (0, k.jsx)("div", {
                        className: "w-7 h-7 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-[11px] font-bold text-pink-600",
                        children: e.day
                      }),
                      (0, k.jsxs)("h4", { className: "text-[14px] font-bold text-gray-900", children: ["Day ", e.day] })
                    ]
                  }),
                  (0, k.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, k.jsxs)("div", {
                        children: [
                          (0, k.jsx)("p", { className: "text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1", children: "Morning Skin Foods" }),
                          (0, k.jsx)("p", { className: "text-[13px] text-gray-600 leading-relaxed", children: e.foods })
                        ]
                      }),
                      (0, k.jsxs)("div", {
                        children: [
                          (0, k.jsx)("p", { className: "text-[11px] font-bold text-purple-600 uppercase tracking-wider mb-1", children: "Topical Routine" }),
                          (0, k.jsx)("p", { className: "text-[13px] text-gray-600 leading-relaxed", children: e.topical })
                        ]
                      }),
                      (0, k.jsxs)("div", {
                        children: [
                          (0, k.jsx)("p", { className: "text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1", children: "Supplement" }),
                          (0, k.jsx)("p", { className: "text-[13px] text-gray-600 leading-relaxed", children: e.supplement })
                        ]
                      })
                    ]
                  })
                ]
              }, e.day);
            })
          ]
        })
      }),
      t === 2 && (0, k.jsx)("div", {
        className: "px-4",
        children: (0, k.jsxs)("div", {
          className: "space-y-3",
          children: [
            (0, k.jsx)("p", { className: "text-[13px] text-gray-500 mb-2", children: "14 energy-boosting smoothies to keep you going during detox. Best consumed between 1-3 PM." }),
            energySmoothies.map(function (e, t) {
              return (0, k.jsxs)("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-5",
                children: [
                  (0, k.jsxs)("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                      (0, k.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          (0, k.jsx)("div", {
                            className: "w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center",
                            children: (0, k.jsx)("span", { className: "text-sm", children: "🥤" })
                          }),
                          (0, k.jsx)("h4", { className: "text-[14px] font-bold text-gray-900", children: e.name })
                        ]
                      }),
                      (0, k.jsx)("span", { className: "text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full", children: e.when.split(" — ")[0] })
                    ]
                  }),
                  (0, k.jsxs)("div", {
                    className: "space-y-2.5",
                    children: [
                      (0, k.jsxs)("div", {
                        children: [
                          (0, k.jsx)("p", { className: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1", children: "Ingredients" }),
                          (0, k.jsx)("p", { className: "text-[13px] text-gray-600 leading-relaxed", children: e.ingredients })
                        ]
                      }),
                      (0, k.jsxs)("div", {
                        children: [
                          (0, k.jsx)("p", { className: "text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1", children: "Preparation" }),
                          (0, k.jsx)("p", { className: "text-[13px] text-gray-600 leading-relaxed", children: e.prep })
                        ]
                      }),
                      (0, k.jsx)("div", {
                        className: "bg-orange-50 rounded-xl p-3 border border-orange-100",
                        children: (0, k.jsx)("p", { className: "text-[12px] text-orange-700 leading-relaxed", children: e.benefit })
                      })
                    ]
                  })
                ]
              }, t);
            })
          ]
        })
      }),
      (0, k.jsx)(cr, {})
    ]
  });
}

var sleepDinnerFoods = {
  best: [
    { name: `Wild-caught salmon`, benefit: `Omega-3s reduce gut inflammation and promote overnight mucosal repair` },
    { name: `Steamed zucchini`, benefit: `Low residue, clears the stomach in under 2 hours` },
    { name: `Bone broth`, benefit: `Collagen and glycine seal gut lining and promote deep sleep` },
    { name: `Turkey breast`, benefit: `Tryptophan converts to serotonin and melatonin, supporting sleep and gut motility` },
    { name: `Sweet potato (small)`, benefit: `Complex carbs help tryptophan cross the blood-brain barrier` },
    { name: `Steamed asparagus`, benefit: `Prebiotic fiber feeds beneficial bacteria during overnight colonization` },
    { name: `White rice (small portion)`, benefit: `Easy to digest, empties stomach quickly, minimal fermentation` },
    { name: `Soft-cooked eggs`, benefit: `Complete protein with minimal digestive burden` },
    { name: `Cooked spinach`, benefit: `Magnesium relaxes smooth muscle in intestinal walls` },
    { name: `Ginger (fresh, grated)`, benefit: `Accelerates gastric emptying so the MMC can activate sooner` },
    { name: `Chamomile tea`, benefit: `Apigenin reduces intestinal spasms and lowers cortisol` },
    { name: `Avocado (half)`, benefit: `Healthy fats slow sugar absorption without stalling digestion` },
    { name: `Lean white fish (cod, sole)`, benefit: `Fastest-digesting animal protein, clears stomach in 90 minutes` },
    { name: `Fermented vegetables (small)`, benefit: `Live cultures support overnight bacterial recolonization` },
    { name: `Pumpkin (cooked)`, benefit: `Soluble fiber soothes intestinal walls and feeds beneficial flora` },
  ],
  avoid: [
    { name: `Red meat (steak, burgers)`, reason: `Takes 4-6 hours to digest, blocks overnight MMC activation entirely` },
    { name: `Raw cruciferous vegetables`, reason: `Broccoli, cauliflower, cabbage cause gas that disrupts sleep and gut repair` },
    { name: `Spicy foods`, reason: `Capsaicin raises core body temperature and triggers acid reflux when lying down` },
    { name: `Dairy (milk, cheese, ice cream)`, reason: `Lactose fermentation produces gas and bloating that peaks at 2-3 AM` },
    { name: `Fried foods`, reason: `High fat content delays gastric emptying by 3-4 hours` },
    { name: `Alcohol`, reason: `Fragments sleep architecture and destroys beneficial bacteria colonies` },
    { name: `Chocolate / caffeine`, reason: `Stimulates the nervous system for 6+ hours, blocking parasympathetic gut repair` },
    { name: `Sugary desserts`, reason: `Spikes blood sugar then crashes it at 2 AM, waking you and stopping repair` },
    { name: `Beans and lentils`, reason: `Oligosaccharides ferment for hours, producing gas that disrupts the MMC cycle` },
    { name: `Carbonated drinks`, reason: `Trapped gas distends the stomach and delays gastric emptying` },
  ],
  plates: [
    { name: `The Gut Healer`, description: `Herb-baked cod fillet + steamed asparagus + 1/3 cup white rice + ginger tea` },
    { name: `The Sleep Starter`, description: `Sliced turkey breast + roasted sweet potato + cooked spinach + chamomile tea` },
    { name: `The Light Repair`, description: `Miso soup with soft tofu + small bowl of white rice + steamed zucchini` },
  ],
};

var sleepRitualSteps = [
  {
    title: `Diaphragmatic Breathing`,
    icon: `🫁`,
    duration: 60,
    instruction: `Place one hand on your chest, one on your belly. Breathe in through your nose for 4 counts — feel your belly rise, not your chest. Hold for 7 counts. Exhale slowly through your mouth for 8 counts. Repeat 3 times.`,
    cue: [`Breathe in... 4 counts`, `Hold... 7 counts`, `Exhale slowly... 8 counts`],
  },
  {
    title: `Abdominal Self-Massage`,
    icon: `🤲`,
    duration: 60,
    instruction: `Using gentle pressure with your fingertips, massage your abdomen in a clockwise direction — start at your right hip, move up to your ribs, across to the left, and down to your left hip. This follows the path of your colon. 10 slow circles.`,
    cue: [`Right hip upward...`, `Across the top...`, `Down the left side...`],
  },
  {
    title: `Vagus Nerve Activation`,
    icon: `⚡`,
    duration: 60,
    instruction: `Splash cold water on your face and the sides of your neck — this triggers the dive reflex and activates the vagus nerve. Then hum deeply for 20 seconds (the vibration stimulates the vagus). Finally, gargle water vigorously for 10 seconds.`,
    cue: [`Cold water on face...`, `Hum deeply...`, `Gargle vigorously...`],
  },
];

var sleepWindDownTimeline = [
  {
    time: `90 min before bed`,
    title: `Screen Cutoff`,
    actions: [
      `Put phone on Do Not Disturb and place it face-down`,
      `Switch all lights to warm/dim — no overhead fluorescents`,
      `Brew chamomile tea with a pinch of magnesium powder`,
    ],
    why: `Screens emit blue light that spikes cortisol by up to 37%, blocking your gut's overnight repair mode.`,
  },
  {
    time: `60 min before bed`,
    title: `Gentle Movement`,
    actions: [
      `5-10 minute gentle walk or light stretching (no vigorous exercise)`,
      `Read a physical book or journal — write 3 things that went well today`,
      `Prepare your bedroom: cool (65-68°F), dark, quiet`,
    ],
    why: `Light movement activates the parasympathetic nervous system, signaling your gut to shift from digestion to repair.`,
  },
  {
    time: `30 min before bed`,
    title: `Evening Ritual`,
    actions: [
      `Complete your 3-minute Evening Ritual (Module 2 above)`,
      `Cold water face splash for vagus nerve activation`,
      `Set up pillow between knees for left-side sleeping`,
    ],
    why: `The vagus nerve is the direct communication line between your brain and gut — activating it triggers overnight healing.`,
  },
  {
    time: `15 min before bed`,
    title: `Sleep Position`,
    actions: [
      `Lie on your left side with knees slightly bent`,
      `Practice 4-7-8 breathing until you drift off`,
      `No phone, no checking messages — the last thing your brain processes sets the tone for overnight gut repair`,
    ],
    why: `Left-side sleeping uses gravity to optimize bile flow and intestinal transit while you sleep.`,
  },
];

var sleepNightRecipes = [
  {
    name: `Herb-Crusted White Fish`,
    ingredients: `6oz cod fillet, 1 tbsp olive oil, 1 tsp dried oregano, 1 tsp dried thyme, 1/2 lemon juice, salt and pepper, 1 cup steamed asparagus`,
    steps: `1. Preheat oven to 400°F. 2. Place cod on parchment-lined baking sheet. 3. Drizzle with olive oil, press herbs into top. 4. Bake 12-15 minutes until flaky. 5. Squeeze lemon over fish, serve with asparagus.`,
    timing: `Eat 3 hours before bed`,
    benefit: `Low-residue protein clears your stomach in 90 minutes, giving the MMC a full 6-hour repair window.`,
  },
  {
    name: `Turkey Lettuce Wraps`,
    ingredients: `5oz ground turkey, 1 tsp coconut aminos, 1 tsp fresh ginger (grated), 1 clove garlic (minced), butter lettuce leaves, 1/4 cucumber (diced), fresh cilantro`,
    steps: `1. Cook turkey in pan over medium heat, breaking apart. 2. Add ginger, garlic, coconut aminos — cook 2 min. 3. Spoon into lettuce cups. 4. Top with cucumber and cilantro.`,
    timing: `Eat 2.5 hours before bed`,
    benefit: `Tryptophan-rich turkey converts to serotonin and melatonin, supporting both sleep quality and gut motility.`,
  },
  {
    name: `Miso Soup with Soft Tofu`,
    ingredients: `2 cups water, 2 tbsp white miso paste, 4oz soft tofu (cubed), 1 green onion (sliced), small handful wakame seaweed`,
    steps: `1. Heat water to just below boiling. 2. Remove from heat, whisk in miso paste. 3. Add tofu cubes and wakame. 4. Garnish with green onion. 5. Serve warm.`,
    timing: `Eat 2 hours before bed`,
    benefit: `Fermented miso delivers live probiotics that colonize your gut while you sleep. Easiest meal to digest.`,
  },
  {
    name: `Lemon Herb Chicken`,
    ingredients: `5oz chicken breast, 1 tbsp olive oil, juice of 1 lemon, 1 tsp rosemary, 1 tsp thyme, 1 cup cooked spinach, 1/3 cup white rice`,
    steps: `1. Pound chicken to even thickness. 2. Season with herbs, salt, pepper. 3. Sear in olive oil 5 min per side. 4. Squeeze lemon over chicken. 5. Plate with spinach and rice.`,
    timing: `Eat 3 hours before bed`,
    benefit: `Lean protein with magnesium-rich spinach relaxes intestinal smooth muscle for overnight repair.`,
  },
  {
    name: `Ginger Salmon Bowl`,
    ingredients: `5oz salmon fillet, 1 tbsp coconut aminos, 1 tsp fresh ginger, 1/3 cup white rice, 1/2 avocado (sliced), steamed bok choy`,
    steps: `1. Bake salmon at 400°F for 12 min. 2. Cook rice. 3. Arrange bowl: rice base, salmon on top. 4. Add avocado slices and bok choy. 5. Drizzle coconut aminos and ginger.`,
    timing: `Eat 3 hours before bed`,
    benefit: `Omega-3 fatty acids reduce overnight gut inflammation by up to 40%, accelerating mucosal repair.`,
  },
  {
    name: `Sweet Potato & Egg Scramble`,
    ingredients: `1 small sweet potato (diced), 2 eggs, 1 tsp olive oil, pinch of turmeric, salt, cooked zucchini`,
    steps: `1. Microwave sweet potato cubes 4 min until soft. 2. Scramble eggs in olive oil over medium-low heat. 3. Add sweet potato and turmeric, fold gently. 4. Serve with zucchini on the side.`,
    timing: `Eat 2.5 hours before bed`,
    benefit: `Complex carbs from sweet potato help tryptophan cross into the brain, boosting melatonin production.`,
  },
  {
    name: `Bone Broth Healing Bowl`,
    ingredients: `2 cups bone broth, 1 tsp fresh ginger (sliced), 1 clove garlic, 1/2 cup cooked rice noodles, steamed bok choy, squeeze of lime`,
    steps: `1. Heat bone broth with ginger and garlic for 5 min. 2. Strain out solids or leave them. 3. Add rice noodles. 4. Top with bok choy and lime. 5. Sip slowly.`,
    timing: `Eat 2 hours before bed`,
    benefit: `Collagen and glycine from bone broth directly seal tight junctions in the gut lining while you sleep.`,
  },
  {
    name: `Pumpkin Puree Bowl`,
    ingredients: `1 cup pumpkin puree (canned, unsweetened), 1/4 tsp cinnamon, 1 tbsp almond butter, 1 tsp honey, pinch of nutmeg`,
    steps: `1. Warm pumpkin puree in a small pot. 2. Stir in cinnamon and nutmeg. 3. Pour into bowl. 4. Swirl almond butter on top. 5. Drizzle honey.`,
    timing: `Eat 2 hours before bed`,
    benefit: `Soluble fiber from pumpkin soothes intestinal walls and feeds beneficial bacteria for overnight colonization.`,
  },
  {
    name: `Poached Eggs on Wilted Greens`,
    ingredients: `2 eggs, 2 cups baby spinach, 1 tsp olive oil, 1 clove garlic (sliced), pinch of salt, toast (optional)`,
    steps: `1. Wilt spinach in olive oil with garlic for 2 min. 2. Poach eggs in simmering water with a splash of vinegar for 3 min. 3. Place eggs on greens. 4. Season with salt.`,
    timing: `Eat 2.5 hours before bed`,
    benefit: `Eggs digest in under 2 hours and spinach's magnesium activates 300+ enzymes involved in gut repair.`,
  },
  {
    name: `Chamomile Chicken Soup`,
    ingredients: `1 cup chicken broth, 4oz shredded chicken, 1 chamomile tea bag, 1/4 cup diced carrots, 1/4 cup diced celery, fresh dill`,
    steps: `1. Simmer broth with carrots and celery for 8 min. 2. Add chicken and chamomile tea bag, steep 3 min. 3. Remove tea bag. 4. Garnish with fresh dill.`,
    timing: `Eat 2 hours before bed`,
    benefit: `Chamomile's apigenin compound reduces intestinal spasms while the warm broth primes the gut for repair mode.`,
  },
  {
    name: `Avocado Zucchini Boats`,
    ingredients: `2 medium zucchini, 1/2 avocado (mashed), 1 can tuna (drained), 1 tbsp lemon juice, salt, pepper, cherry tomatoes`,
    steps: `1. Halve zucchini lengthwise, scoop out center. 2. Mix avocado, tuna, lemon juice. 3. Fill zucchini boats with mixture. 4. Top with halved cherry tomatoes. 5. Bake at 375°F for 10 min.`,
    timing: `Eat 2.5 hours before bed`,
    benefit: `Nearly zero-residue meal that fully clears your digestive tract before the MMC self-cleaning cycle begins.`,
  },
  {
    name: `Warm Fennel & White Fish`,
    ingredients: `5oz sole fillet, 1 fennel bulb (sliced), 1 tbsp olive oil, 1/2 lemon, fresh parsley, salt`,
    steps: `1. Sauté fennel slices in olive oil until soft, about 5 min. 2. Push fennel to the side, add fish. 3. Cook 3 min per side. 4. Squeeze lemon, garnish with parsley.`,
    timing: `Eat 2.5 hours before bed`,
    benefit: `Fennel relaxes the intestinal smooth muscle and reduces gas, while sole is the fastest-digesting fish.`,
  },
];

var sleepGuidedWindDown = [
  {
    instruction: `Close your eyes. Take a slow, deep breath in through your nose... hold it gently... and release through your mouth.`,
    duration: 30,
    detail: `Focus only on the air entering and leaving your body. Let your shoulders drop.`,
  },
  {
    instruction: `Place both hands on your belly. Feel it rise as you breathe in... and fall as you breathe out. Your gut is beginning to shift into repair mode.`,
    duration: 30,
    detail: `Each exhale signals your parasympathetic nervous system to activate. Your gut is listening.`,
  },
  {
    instruction: `Breathe in for 4 counts... hold for 7 counts... exhale slowly for 8 counts. This is the 4-7-8 pattern. Repeat 4 times.`,
    duration: 120,
    detail: `This rhythm activates the vagus nerve — the direct communication line between your brain and gut.`,
  },
  {
    instruction: `Now gently massage your abdomen in slow clockwise circles. Start at your right hip, move up, across, and down. 10 slow circles.`,
    duration: 60,
    detail: `You're following the path of your colon. This gentle pressure helps activate the MMC — your gut's overnight cleaning cycle.`,
  },
  {
    instruction: `Release your hands. Take one final deep breath. As you exhale, know that your gut is entering full repair mode. You are ready for sleep.`,
    duration: 30,
    detail: `Your gut will spend the next 8 hours regenerating, rebuilding, and healing. You've done the work. Let go.`,
  },
];

function SleepMasteryPage() {
  let nav = qe(),
    [activeTab, setActiveTab] = (0, _.useState)(0),
    [bedtime, setBedtime] = (0, _.useState)(`22:30`),
    [ritualRunning, setRitualRunning] = (0, _.useState)(!1),
    [ritualStep, setRitualStep] = (0, _.useState)(0),
    [ritualSec, setRitualSec] = (0, _.useState)(0),
    [ritualDone, setRitualDone] = (0, _.useState)(() => {
      let d = new Date().toISOString().slice(0, 10);
      return O.get(`emma_sleep_ritual_` + d, !1);
    }),
    [ritualStreak, setRitualStreak] = (0, _.useState)(() => O.get(`emma_ritual_streak`, 0)),
    [windDownChecks, setWindDownChecks] = (0, _.useState)(() => {
      let d = new Date().toISOString().slice(0, 10);
      return O.get(`emma_winddown_` + d, [!1, !1, !1, !1]);
    }),
    [windDownActive, setWindDownActive] = (0, _.useState)(!1),
    [wdStep, setWdStep] = (0, _.useState)(0),
    [wdSec, setWdSec] = (0, _.useState)(0),
    [expandedSection, setExpandedSection] = (0, _.useState)(0);

  let lastMealTime = (() => {
    let [h, m] = bedtime.split(`:`).map(Number),
      lh = h - 3,
      lm = m;
    if (lh < 0) lh += 24;
    return `${String(lh).padStart(2, `0`)}:${String(lm).padStart(2, `0`)}`;
  })();

  (0, _.useEffect)(() => {
    if (!ritualRunning) return;
    let iv = setInterval(() => {
      setRitualSec((s) => {
        if (s >= sleepRitualSteps[ritualStep].duration - 1) {
          if (ritualStep >= 2) {
            clearInterval(iv);
            setRitualRunning(!1);
            setRitualDone(!0);
            let d = new Date().toISOString().slice(0, 10);
            O.set(`emma_sleep_ritual_` + d, !0);
            let ns = ritualStreak + 1;
            setRitualStreak(ns);
            O.set(`emma_ritual_streak`, ns);
            return 0;
          }
          setRitualStep((p) => p + 1);
          return 0;
        }
        return s + 1;
      });
    }, 1e3);
    return () => clearInterval(iv);
  }, [ritualRunning, ritualStep]);

  (0, _.useEffect)(() => {
    if (!windDownActive) return;
    let iv = setInterval(() => {
      setWdSec((s) => {
        if (s >= sleepGuidedWindDown[wdStep].duration - 1) {
          if (wdStep >= sleepGuidedWindDown.length - 1) {
            clearInterval(iv);
            setWindDownActive(!1);
            return 0;
          }
          setWdStep((p) => p + 1);
          return 0;
        }
        return s + 1;
      });
    }, 1e3);
    return () => clearInterval(iv);
  }, [windDownActive, wdStep]);

  let toggleWindDown = (i) => {
    let nw = [...windDownChecks];
    nw[i] = !nw[i];
    setWindDownChecks(nw);
    let d = new Date().toISOString().slice(0, 10);
    O.set(`emma_winddown_` + d, nw);
  };

  let tabs = [`Night Protocol`, `Recipes`, `Wind-Down`];

  let sectionToggle = (i) => setExpandedSection(expandedSection === i ? -1 : i);

  let renderNightProtocol = () =>
    (0, k.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`,
          children: [
            (0, k.jsxs)(`button`, {
              onClick: () => sectionToggle(0),
              className: `w-full flex items-center justify-between p-4 text-left`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-3`,
                  children: [
                    (0, k.jsx)(`span`, { className: `text-lg`, children: `🍽️` }),
                    (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Dinner Optimization` }),
                  ],
                }),
                (0, k.jsx)(`span`, { className: `text-gray-400 text-[12px]`, children: expandedSection === 0 ? `▲` : `▼` }),
              ],
            }),
            expandedSection === 0 &&
              (0, k.jsxs)(`div`, {
                className: `px-4 pb-4 space-y-4`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `bg-blue-50 rounded-xl p-4 border border-blue-100`,
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[13px] font-semibold text-blue-700 mb-2`, children: `Last Meal Calculator` }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3`,
                        children: [
                          (0, k.jsx)(`label`, { className: `text-[12px] text-gray-600`, children: `Bedtime:` }),
                          (0, k.jsx)(`input`, {
                            type: `time`,
                            value: bedtime,
                            onChange: (e) => setBedtime(e.target.value),
                            className: `border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] bg-white`,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(`p`, {
                        className: `text-[14px] font-bold text-blue-800 mt-2`,
                        children: [`Finish eating by: `, lastMealTime],
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[13px] font-bold text-green-700 mb-2`, children: `Best Dinner Foods` }),
                      (0, k.jsx)(`div`, {
                        className: `space-y-1.5`,
                        children: sleepDinnerFoods.best.map((f, i) =>
                          (0, k.jsxs)(`div`, {
                            className: `flex items-start space-x-2 text-[12px]`,
                            children: [
                              (0, k.jsx)(`span`, { className: `text-green-500 mt-0.5 flex-shrink-0`, children: `✓` }),
                              (0, k.jsxs)(`span`, {
                                className: `text-gray-600`,
                                children: [(0, k.jsx)(`strong`, { children: f.name }), ` — `, f.benefit],
                              }),
                            ],
                          }, i),
                        ),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[13px] font-bold text-red-600 mb-2`, children: `Never Eat at Dinner` }),
                      (0, k.jsx)(`div`, {
                        className: `space-y-1.5`,
                        children: sleepDinnerFoods.avoid.map((f, i) =>
                          (0, k.jsxs)(`div`, {
                            className: `flex items-start space-x-2 text-[12px]`,
                            children: [
                              (0, k.jsx)(`span`, { className: `text-red-400 mt-0.5 flex-shrink-0`, children: `✗` }),
                              (0, k.jsxs)(`span`, {
                                className: `text-gray-600`,
                                children: [(0, k.jsx)(`strong`, { children: f.name }), ` — `, f.reason],
                              }),
                            ],
                          }, i),
                        ),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[13px] font-bold text-gray-800 mb-2`, children: `Example Dinner Plates` }),
                      (0, k.jsx)(`div`, {
                        className: `space-y-2`,
                        children: sleepDinnerFoods.plates.map((p, i) =>
                          (0, k.jsxs)(`div`, {
                            className: `bg-gray-50 rounded-lg p-3 border border-gray-100`,
                            children: [
                              (0, k.jsx)(`p`, { className: `text-[13px] font-semibold text-gray-800`, children: p.name }),
                              (0, k.jsx)(`p`, { className: `text-[12px] text-gray-500 mt-0.5`, children: p.description }),
                            ],
                          }, i),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),

        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`,
          children: [
            (0, k.jsxs)(`button`, {
              onClick: () => sectionToggle(1),
              className: `w-full flex items-center justify-between p-4 text-left`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-3`,
                  children: [
                    (0, k.jsx)(`span`, { className: `text-lg`, children: `🌙` }),
                    (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `3-Minute Evening Ritual` }),
                  ],
                }),
                (0, k.jsx)(`span`, { className: `text-gray-400 text-[12px]`, children: expandedSection === 1 ? `▲` : `▼` }),
              ],
            }),
            expandedSection === 1 &&
              (0, k.jsxs)(`div`, {
                className: `px-4 pb-4`,
                children: [
                  ritualStreak > 0 &&
                    (0, k.jsxs)(`div`, {
                      className: `bg-blue-50 rounded-lg px-3 py-2 mb-3 text-[12px] text-blue-700 font-medium text-center border border-blue-100`,
                      children: [`🔥 `, ritualStreak, ` night streak`],
                    }),
                  ritualDone
                    ? (0, k.jsx)(`div`, {
                        className: `py-4 px-4 bg-green-50 rounded-xl text-[#1B6B4A] text-[13px] font-semibold border border-green-200 text-center`,
                        children: `✓ Ritual completed tonight`,
                      })
                    : ritualRunning
                      ? (0, k.jsxs)(`div`, {
                          className: `text-center py-4`,
                          children: [
                            (0, k.jsx)(`div`, {
                              className: `w-16 h-16 rounded-full border-4 border-blue-200 mx-auto flex items-center justify-center mb-3`,
                              children: (0, k.jsx)(`span`, {
                                className: `text-2xl font-bold text-blue-600`,
                                children: sleepRitualSteps[ritualStep].duration - ritualSec,
                              }),
                            }),
                            (0, k.jsx)(`p`, { className: `text-[15px] font-bold text-gray-900 mb-1`, children: sleepRitualSteps[ritualStep].title }),
                            (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 leading-relaxed px-2`, children: sleepRitualSteps[ritualStep].instruction }),
                            (0, k.jsx)(`div`, {
                              className: `flex justify-center gap-2 mt-3`,
                              children: sleepRitualSteps.map((_, i) =>
                                (0, k.jsx)(`div`, {
                                  className: `w-3 h-3 rounded-full ${i < ritualStep ? `bg-blue-500` : i === ritualStep ? `bg-blue-400 animate-pulse` : `bg-gray-200`}`,
                                }, i),
                              ),
                            }),
                          ],
                        })
                      : (0, k.jsxs)(`div`, {
                          children: [
                            (0, k.jsx)(`div`, {
                              className: `space-y-2 mb-4`,
                              children: sleepRitualSteps.map((s, i) =>
                                (0, k.jsxs)(`div`, {
                                  className: `flex items-start space-x-3 text-[12px] text-gray-600`,
                                  children: [
                                    (0, k.jsx)(`span`, { className: `text-lg flex-shrink-0`, children: s.icon }),
                                    (0, k.jsxs)(`div`, {
                                      children: [
                                        (0, k.jsxs)(`p`, { className: `font-semibold text-gray-800`, children: [s.title, ` (`, s.duration, `s)`] }),
                                        (0, k.jsx)(`p`, { className: `text-gray-500 mt-0.5`, children: s.instruction }),
                                      ],
                                    }),
                                  ],
                                }, i),
                              ),
                            }),
                            (0, k.jsx)(`button`, {
                              onClick: () => { setRitualRunning(!0); setRitualStep(0); setRitualSec(0); },
                              className: `w-full py-3 bg-blue-600 text-white font-semibold rounded-xl text-[14px] active:bg-blue-700 transition-all shadow-lg shadow-blue-500/20`,
                              children: `Start 3-Minute Ritual`,
                            }),
                          ],
                        }),
                ],
              }),
          ],
        }),

        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`,
          children: [
            (0, k.jsxs)(`button`, {
              onClick: () => sectionToggle(2),
              className: `w-full flex items-center justify-between p-4 text-left`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-3`,
                  children: [
                    (0, k.jsx)(`span`, { className: `text-lg`, children: `🛏️` }),
                    (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Sleep Position Guide` }),
                  ],
                }),
                (0, k.jsx)(`span`, { className: `text-gray-400 text-[12px]`, children: expandedSection === 2 ? `▲` : `▼` }),
              ],
            }),
            expandedSection === 2 &&
              (0, k.jsx)(`div`, {
                className: `px-4 pb-4 space-y-3`,
                children: [
                  { icon: `✅`, title: `Left Side (recommended)`, desc: `Gravity helps bile flow from liver to intestine. Stomach sits below esophagus, reducing reflux. Colon aligns for natural transit. This is the optimal healing position.`, color: `bg-green-50 border-green-200` },
                  { icon: `❌`, title: `Right Side`, desc: `Compresses the intestines and forces bile to flow against gravity. Can worsen reflux by placing the stomach above the esophagus.`, color: `bg-red-50 border-red-200` },
                  { icon: `❌`, title: `On Your Back`, desc: `Tongue and soft palate collapse, disrupting breathing. Stomach acid can pool at the esophageal sphincter. Not ideal for gut repair.`, color: `bg-red-50 border-red-200` },
                  { icon: `❌`, title: `On Your Stomach`, desc: `Compresses all abdominal organs, restricts diaphragm, and forces neck rotation. Worst position for digestion and sleep quality.`, color: `bg-red-50 border-red-200` },
                ].map((p, i) =>
                  (0, k.jsxs)(`div`, {
                    className: `${p.color} rounded-xl p-3 border`,
                    children: [
                      (0, k.jsxs)(`p`, { className: `text-[13px] font-bold text-gray-800`, children: [p.icon, ` `, p.title] }),
                      (0, k.jsx)(`p`, { className: `text-[12px] text-gray-600 mt-1 leading-relaxed`, children: p.desc }),
                    ],
                  }, i),
                ).concat([
                  (0, k.jsxs)(`div`, {
                    className: `bg-amber-50 rounded-xl p-3 border border-amber-200`,
                    key: `tips`,
                    children: [
                      (0, k.jsx)(`p`, { className: `text-[13px] font-bold text-amber-700`, children: `Pro Tips` }),
                      (0, k.jsx)(`p`, { className: `text-[12px] text-gray-600 mt-1`, children: `Place a pillow between your knees to maintain spinal alignment. If you have acid reflux, elevate the head of your bed 15-20 degrees (use a wedge pillow, not extra pillows).` }),
                    ],
                  }),
                ]),
              }),
          ],
        }),

        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`,
          children: [
            (0, k.jsxs)(`button`, {
              onClick: () => sectionToggle(3),
              className: `w-full flex items-center justify-between p-4 text-left`,
              children: [
                (0, k.jsxs)(`div`, {
                  className: `flex items-center space-x-3`,
                  children: [
                    (0, k.jsx)(`span`, { className: `text-lg`, children: `😴` }),
                    (0, k.jsx)(`span`, { className: `text-[14px] font-bold text-gray-900`, children: `Cortisol Wind-Down Protocol` }),
                  ],
                }),
                (0, k.jsx)(`span`, { className: `text-gray-400 text-[12px]`, children: expandedSection === 3 ? `▲` : `▼` }),
              ],
            }),
            expandedSection === 3 &&
              (0, k.jsx)(`div`, {
                className: `px-4 pb-4 space-y-3`,
                children: sleepWindDownTimeline.map((b, i) =>
                  (0, k.jsxs)(`div`, {
                    className: `relative pl-6 pb-3 ${i < sleepWindDownTimeline.length - 1 ? `border-l-2 border-blue-100 ml-2` : `ml-2`}`,
                    children: [
                      (0, k.jsx)(`div`, {
                        className: `absolute left-[-5px] top-0 w-3 h-3 rounded-full ${windDownChecks[i] ? `bg-blue-500` : `bg-gray-300`} border-2 border-white`,
                      }),
                      (0, k.jsxs)(`div`, {
                        className: `flex items-start justify-between`,
                        children: [
                          (0, k.jsxs)(`div`, {
                            className: `flex-1`,
                            children: [
                              (0, k.jsx)(`p`, { className: `text-[11px] font-bold text-blue-600 uppercase tracking-wider`, children: b.time }),
                              (0, k.jsx)(`p`, { className: `text-[13px] font-bold text-gray-800 mt-0.5`, children: b.title }),
                              (0, k.jsx)(`div`, {
                                className: `mt-1.5 space-y-1`,
                                children: b.actions.map((a, j) =>
                                  (0, k.jsxs)(`p`, {
                                    className: `text-[12px] text-gray-500`,
                                    children: [`• `, a],
                                  }, j),
                                ),
                              }),
                              (0, k.jsx)(`p`, { className: `text-[11px] text-blue-500 italic mt-1.5`, children: b.why }),
                            ],
                          }),
                          (0, k.jsx)(`button`, {
                            onClick: () => toggleWindDown(i),
                            className: `ml-2 mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 ${windDownChecks[i] ? `bg-blue-500 border-blue-500 text-white` : `border-gray-300`}`,
                            children: windDownChecks[i] ? (0, k.jsx)(`span`, { className: `text-[10px]`, children: `✓` }) : null,
                          }),
                        ],
                      }),
                    ],
                  }, i),
                ),
              }),
          ],
        }),
      ],
    });

  let renderRecipes = () =>
    (0, k.jsx)(`div`, {
      className: `space-y-3`,
      children: sleepNightRecipes.map((r, i) =>
        (0, k.jsxs)(`div`, {
          className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-4`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex items-center justify-between mb-2`,
              children: [
                (0, k.jsx)(`h4`, { className: `text-[14px] font-bold text-gray-900`, children: r.name }),
                (0, k.jsx)(`span`, { className: `text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium`, children: r.timing }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsx)(`p`, { className: `text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5`, children: `Ingredients` }),
                    (0, k.jsx)(`p`, { className: `text-[12px] text-gray-600`, children: r.ingredients }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  children: [
                    (0, k.jsx)(`p`, { className: `text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5`, children: `Steps` }),
                    (0, k.jsx)(`p`, { className: `text-[12px] text-gray-600`, children: r.steps }),
                  ],
                }),
                (0, k.jsx)(`div`, {
                  className: `bg-blue-50 rounded-lg p-2.5 border border-blue-100`,
                  children: (0, k.jsx)(`p`, { className: `text-[11px] text-blue-700`, children: r.benefit }),
                }),
              ],
            }),
          ],
        }, i),
      ),
    });

  let renderWindDown = () =>
    windDownActive
      ? (0, k.jsxs)(`div`, {
          className: `bg-gray-900 rounded-2xl p-6 min-h-[400px] flex flex-col items-center justify-center text-center`,
          children: [
            (0, k.jsx)(`div`, {
              className: `w-20 h-20 rounded-full border-4 border-blue-400 flex items-center justify-center mb-5`,
              children: (0, k.jsx)(`span`, { className: `text-3xl font-bold text-blue-300`, children: sleepGuidedWindDown[wdStep].duration - wdSec }),
            }),
            (0, k.jsx)(`p`, { className: `text-[18px] font-semibold text-white leading-relaxed mb-3 px-2`, children: sleepGuidedWindDown[wdStep].instruction }),
            (0, k.jsx)(`p`, { className: `text-[13px] text-blue-300 leading-relaxed px-4`, children: sleepGuidedWindDown[wdStep].detail }),
            (0, k.jsx)(`div`, {
              className: `flex gap-2 mt-6`,
              children: sleepGuidedWindDown.map((_, i) =>
                (0, k.jsx)(`div`, {
                  className: `w-2.5 h-2.5 rounded-full ${i < wdStep ? `bg-blue-400` : i === wdStep ? `bg-blue-300 animate-pulse` : `bg-gray-600`}`,
                }, i),
              ),
            }),
            (0, k.jsx)(`button`, {
              onClick: () => setWindDownActive(!1),
              className: `mt-6 text-[12px] text-gray-500 underline`,
              children: `Stop`,
            }),
          ],
        })
      : (0, k.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, k.jsx)(`div`, {
              className: `bg-gradient-to-b from-indigo-50 to-blue-50 rounded-2xl p-6 border border-blue-100 mb-4`,
              children: (0, k.jsxs)(`div`, {
                children: [
                  (0, k.jsx)(`span`, { className: `text-4xl`, children: `🌙` }),
                  (0, k.jsx)(`h3`, { className: `text-[16px] font-bold text-gray-900 mt-3 mb-1`, children: `5-Minute Guided Wind-Down` }),
                  (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 mb-4`, children: `A guided breathing and massage sequence to activate your gut's overnight repair mode. Best done in bed, lights off.` }),
                  (0, k.jsx)(`button`, {
                    onClick: () => { setWindDownActive(!0); setWdStep(0); setWdSec(0); },
                    className: `w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl text-[14px] active:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20`,
                    children: `Start Wind-Down`,
                  }),
                ],
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `space-y-2 text-left`,
              children: sleepGuidedWindDown.map((s, i) =>
                (0, k.jsxs)(`div`, {
                  className: `bg-white rounded-xl p-3 border border-gray-100 flex items-start space-x-3`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 text-[12px] font-bold text-indigo-600`,
                      children: i + 1,
                    }),
                    (0, k.jsxs)(`div`, {
                      children: [
                        (0, k.jsx)(`p`, { className: `text-[12px] text-gray-700`, children: s.instruction }),
                        (0, k.jsxs)(`p`, { className: `text-[11px] text-gray-400 mt-0.5`, children: [s.duration, `s`] }),
                      ],
                    }),
                  ],
                }, i),
              ),
            }),
          ],
        });

  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-4`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => nav(`/`),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-4 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), ` `, (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsxs)(`div`, {
            className: `flex items-center space-x-2 mb-1.5`,
            children: [
              (0, k.jsx)(`span`, { className: `text-lg`, children: `🌙` }),
              (0, k.jsx)(`span`, {
                className: `text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full uppercase tracking-widest`,
                children: `Night Mode Active`,
              }),
            ],
          }),
          (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900`, children: `Sleep & Digestion Mastery` }),
          (0, k.jsx)(`p`, { className: `text-[12px] text-gray-400 mt-0.5`, children: `Your nighttime gut repair protocol` }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `px-4 mb-4`,
        children: (0, k.jsx)(`div`, {
          className: `flex bg-gray-100 rounded-xl p-1`,
          children: tabs.map((t, i) =>
            (0, k.jsx)(`button`, {
              onClick: () => setActiveTab(i),
              className: `flex-1 py-2 text-[12px] font-semibold rounded-lg transition-all ${activeTab === i ? `bg-white text-blue-600 shadow-sm` : `text-gray-500`}`,
              children: t,
            }, i),
          ),
        }),
      }),
      (0, k.jsx)(`div`, {
        className: `px-4`,
        children: activeTab === 0 ? renderNightProtocol() : activeTab === 1 ? renderRecipes() : renderWindDown(),
      }),
      /* BottomNav placeholder */
      (0, k.jsx)(cr, {}),
    ],
  });
}

function _UnlockPage() {
  let nav = qe(),
    [code, setCode] = (0, _.useState)(``),
    [error, setError] = (0, _.useState)(``),
    [success, setSuccess] = (0, _.useState)(``);

  function handleUnlock() {
    let c = code.toUpperCase().trim();
    if (!c) { setError(`Please enter your access code.`); return; }
    if (c.startsWith(`EMMAALL`)) {
      O.set(`emma_unlock_all`, !0);
      O.set(`emma_unlock_accelerator`, !0);
      O.set(`emma_unlock_detox`, !0);
      O.set(`emma_unlock_sleep`, !0);
      setSuccess(`All premium modules unlocked!`);
      setError(``);
      setTimeout(() => nav(`/`), 1500);
      return;
    }
    if (c.startsWith(`EMMA7X`)) {
      O.set(`emma_unlock_accelerator`, !0);
      setSuccess(`7X Accelerator unlocked!`);
      setError(``);
      setTimeout(() => nav(`/protocol`), 1500);
      return;
    }
    if (c.startsWith(`EMMADS`)) {
      O.set(`emma_unlock_detox`, !0);
      setSuccess(`Detox Shield unlocked!`);
      setError(``);
      setTimeout(() => nav(`/detox`), 1500);
      return;
    }
    if (c.startsWith(`EMMASM`)) {
      O.set(`emma_unlock_sleep`, !0);
      setSuccess(`Sleep & Digestion Mastery unlocked!`);
      setError(``);
      setTimeout(() => nav(`/sleep`), 1500);
      return;
    }
    setError(`Invalid code. Please check your email for the correct access code.`);
    setSuccess(``);
  }

  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-6`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => nav(`/`),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-6 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsx)(`div`, {
            className: `text-center mb-8`,
            children: (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsx)(`div`, {
                  className: `w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4`,
                  children: (0, k.jsx)(`span`, { className: `text-3xl`, children: `🔑` }),
                }),
                (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900 mb-2`, children: `Unlock Premium Module` }),
                (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 leading-relaxed`, children: `Enter the access code from your purchase confirmation email.` }),
              ],
            }),
          }),
          (0, k.jsxs)(`div`, {
            className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
            children: [
              (0, k.jsx)(`input`, {
                type: `text`,
                value: code,
                onChange: (ev) => { setCode(ev.target.value); setError(``); },
                placeholder: `Enter your access code`,
                className: `w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent mb-3`,
                autoCapitalize: `characters`,
              }),
              error && (0, k.jsx)(`p`, { className: `text-[12px] text-red-500 mb-3`, children: error }),
              success && (0, k.jsxs)(`div`, {
                className: `bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-3 flex items-center space-x-2`,
                children: [
                  (0, k.jsx)(`span`, { children: `✅` }),
                  (0, k.jsx)(`p`, { className: `text-[13px] text-emerald-700 font-semibold`, children: success }),
                ],
              }),
              (0, k.jsx)(`button`, {
                onClick: handleUnlock,
                className: `w-full py-3 bg-[#1B6B4A] text-white font-bold rounded-xl text-[15px] active:bg-[#155a3d] transition-all`,
                children: `Unlock Module`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
            children: [
              (0, k.jsx)(`p`, { className: `text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-3`, children: `Available Modules` }),
              (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-2`,
                        children: [
                          (0, k.jsx)(`span`, { children: `⚡` }),
                          (0, k.jsx)(`span`, { className: `text-[13px] font-semibold text-gray-900`, children: `7X Accelerator` }),
                        ],
                      }),
                      (0, k.jsx)(`span`, {
                        className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${O.get("emma_unlock_accelerator", !1) || O.get("emma_unlock_all", !1) ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-400"}`,
                        children: O.get(`emma_unlock_accelerator`, !1) || O.get(`emma_unlock_all`, !1) ? `Unlocked` : `Locked`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-2`,
                        children: [
                          (0, k.jsx)(`span`, { children: `🛡️` }),
                          (0, k.jsx)(`span`, { className: `text-[13px] font-semibold text-gray-900`, children: `Detox Shield` }),
                        ],
                      }),
                      (0, k.jsx)(`span`, {
                        className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${O.get("emma_unlock_detox", !1) || O.get("emma_unlock_all", !1) ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-400"}`,
                        children: O.get(`emma_unlock_detox`, !1) || O.get(`emma_unlock_all`, !1) ? `Unlocked` : `Locked`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-2`,
                        children: [
                          (0, k.jsx)(`span`, { children: `🌙` }),
                          (0, k.jsx)(`span`, { className: `text-[13px] font-semibold text-gray-900`, children: `Sleep & Digestion Mastery` }),
                        ],
                      }),
                      (0, k.jsx)(`span`, {
                        className: `text-[11px] font-semibold px-2 py-0.5 rounded-full ${O.get("emma_unlock_sleep", !1) || O.get("emma_unlock_all", !1) ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-400"}`,
                        children: O.get(`emma_unlock_sleep`, !1) || O.get(`emma_unlock_all`, !1) ? `Unlocked` : `Locked`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, k.jsx)(`p`, {
            className: `text-center text-[11px] text-gray-400 mt-6`,
            children: `Can't find your code? Check your email from Kashpay or contact support@emmagut.com`,
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}

function _InstallGuidePage() {
  let nav = qe(),
    [platform, setPlatform] = (0, _.useState)(() => {
      let ua = navigator.userAgent || ``;
      if (/android/i.test(ua)) return `android`;
      if (/iphone|ipad|ipod/i.test(ua)) return `ios`;
      return `ios`;
    });

  return (0, k.jsxs)(`div`, {
    className: `min-h-dvh bg-[#FAFAF7] pb-24`,
    children: [
      (0, k.jsxs)(`div`, {
        className: `px-4 pt-8 pb-6`,
        children: [
          (0, k.jsxs)(`button`, {
            onClick: () => nav(`/`),
            className: `flex items-center space-x-1 text-[13px] text-gray-400 mb-6 active:text-gray-600`,
            children: [(0, k.jsx)(nn, { size: 16 }), (0, k.jsx)(`span`, { children: `Back` })],
          }),
          (0, k.jsx)(`div`, {
            className: `text-center mb-6`,
            children: (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsx)(`div`, {
                  className: `w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4`,
                  children: (0, k.jsx)(`span`, { className: `text-3xl`, children: `📱` }),
                }),
                (0, k.jsx)(`h1`, { className: `text-2xl font-bold text-gray-900 mb-2`, children: `Install Emma App` }),
                (0, k.jsx)(`p`, { className: `text-[13px] text-gray-500 leading-relaxed`, children: `Add Emma to your home screen for quick access — just like a real app.` }),
              ],
            }),
          }),
          (0, k.jsxs)(`div`, {
            className: `flex bg-gray-100 rounded-xl p-1 mb-5`,
            children: [
              (0, k.jsx)(`button`, {
                onClick: () => setPlatform(`ios`),
                className: `flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all ${platform === "ios" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`,
                children: `iPhone / iPad`,
              }),
              (0, k.jsx)(`button`, {
                onClick: () => setPlatform(`android`),
                className: `flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all ${platform === "android" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`,
                children: `Android`,
              }),
            ],
          }),
          platform === `ios`
            ? (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `1`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Open in Safari` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Make sure you're viewing this page in Safari (not Chrome or another browser). Safari is required for iPhone installation.` }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `2`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Tap the Share Button` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Tap the share icon at the bottom of Safari — it looks like a square with an arrow pointing up.` }),
                      (0, k.jsx)(`div`, {
                        className: `mt-3 bg-gray-50 rounded-xl p-3 flex items-center justify-center`,
                        children: (0, k.jsx)(`div`, {
                          className: `text-center`,
                          children: (0, k.jsxs)(`div`, {
                            className: `inline-flex items-center space-x-1 text-blue-500`,
                            children: [
                              (0, k.jsx)(`svg`, {
                                width: 24, height: 24, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: 2, strokeLinecap: `round`, strokeLinejoin: `round`,
                                children: [(0, k.jsx)(`path`, { d: `M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`, key: `s1` }), (0, k.jsx)(`polyline`, { points: `16 6 12 2 8 6`, key: `s2` }), (0, k.jsx)(`line`, { x1: 12, y1: 2, x2: 12, y2: 15, key: `s3` })],
                              }),
                              (0, k.jsx)(`span`, { className: `text-[12px] font-semibold`, children: `Share` }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `3`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `"Add to Home Screen"` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Scroll down in the share menu and tap "Add to Home Screen". Then tap "Add" in the top right corner.` }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-[14px] font-bold text-emerald-600`,
                            children: `✓`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Done!` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Emma will now appear on your home screen as an app icon. Open it anytime for your daily protocol.` }),
                    ],
                  }),
                ],
              })
            : (0, k.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `1`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Open in Chrome` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Make sure you're viewing this page in Google Chrome. Chrome is required for the best Android experience.` }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `2`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Tap the Menu (⋮)` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Tap the three dots in the top-right corner of Chrome to open the menu.` }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[14px] font-bold text-blue-600`,
                            children: `3`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `"Install App" or "Add to Home Screen"` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Look for "Install App" or "Add to Home Screen" in the menu and tap it. Then confirm by tapping "Install" or "Add".` }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `bg-white rounded-2xl shadow-sm border border-gray-100 p-5`,
                    children: [
                      (0, k.jsxs)(`div`, {
                        className: `flex items-center space-x-3 mb-3`,
                        children: [
                          (0, k.jsx)(`div`, {
                            className: `w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-[14px] font-bold text-emerald-600`,
                            children: `✓`,
                          }),
                          (0, k.jsx)(`h3`, { className: `text-[15px] font-bold text-gray-900`, children: `Done!` }),
                        ],
                      }),
                      (0, k.jsx)(`p`, { className: `text-[13px] text-gray-600 leading-relaxed`, children: `Emma will now appear on your home screen as an app icon. Open it anytime for your daily protocol.` }),
                    ],
                  }),
                ],
              }),
          (0, k.jsx)(`div`, {
            className: `mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-4`,
            children: (0, k.jsxs)(`div`, {
              className: `flex items-start space-x-2`,
              children: [
                (0, k.jsx)(`span`, { className: `text-sm mt-0.5`, children: `💡` }),
                (0, k.jsx)(`p`, { className: `text-[12px] text-amber-700 leading-relaxed`, children: `Installing Emma on your home screen gives you instant access without opening a browser. Your progress and data are saved automatically.` }),
              ],
            }),
          }),
        ],
      }),
      (0, k.jsx)(cr, {}),
    ],
  });
}

function Pr() {
  let [e, t] = (0, _.useState)(O.get(`emma_onboarding_complete`, !1));
  return (0, k.jsxs)(_t, {
    children: [
      (0, k.jsx)(ht, { path: `/`, element: e ? (0, k.jsx)(dr, {}) : (0, k.jsx)(Ot, {}) }),
      (0, k.jsx)(ht, { path: `/loading`, element: (0, k.jsx)(Gn, {}) }),
      (0, k.jsx)(ht, { path: `/onboarding`, element: (0, k.jsx)(qn, { onComplete: () => t(!0) }) }),
      (0, k.jsx)(ht, { path: `/progress`, element: e ? (0, k.jsx)(mr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/protocol`, element: e ? (0, k.jsx)(hr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools`, element: e ? (0, k.jsx)(gr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/recipes`, element: e ? (0, k.jsx)(br, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/shopping`, element: e ? (0, k.jsx)(xr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/sleep`, element: e ? (0, k.jsx)(Sr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/journal`, element: e ? (0, k.jsx)(wr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/quiz`, element: e ? (0, k.jsx)(Er, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/tools/diagnostic`, element: e ? (0, k.jsx)(Ar, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/faq`, element: e ? (0, k.jsx)(Mr, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/detox`, element: e ? (0, k.jsx)(DetoxShieldPage, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/sleep`, element: e ? (0, k.jsx)(SleepMasteryPage, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/unlock`, element: e ? (0, k.jsx)(_UnlockPage, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/install`, element: e ? (0, k.jsx)(_InstallGuidePage, {}) : (0, k.jsx)(mt, { to: `/` }) }),
      (0, k.jsx)(ht, { path: `/thanks`, element: (0, k.jsx)(Nr, {}) }),
    ],
  });
}
function Fr() {
  return (0, k.jsx)(St, { basename: `/app`, children: (0, k.jsx)(Pr, {}) });
}
(0, v.createRoot)(document.getElementById(`root`)).render((0, k.jsx)(_.StrictMode, { children: (0, k.jsx)(Fr, {}) }));
