const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/router-BNCzJ6Wg.js",
      "assets/rolldown-runtime-S-ySWqyJ.js",
      "assets/index-C2js5LZp.js",
      "assets/framework-BCcj1Z2J.js",
      "assets/navigation-DQN6zu37.js",
      "assets/url-utils-BW4074SE.js",
      "assets/query-DZOG5WwV.js",
    ]),
) => i.map((i) => d[i]);
import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import {
  a as t,
  d as n,
  i as r,
  o as i,
  r as a,
  s as o,
  t as s,
  u as c,
} from "./url-utils-BW4074SE.js";
import {
  M as l,
  N as u,
  f as d,
  g as f,
  l as p,
  lt as m,
  p as h,
  q as g,
  rt as ee,
  v as _,
} from "./navigation-DQN6zu37.js";
import { i as v, r as y } from "./framework-BCcj1Z2J.js";
import { a as b, i as x, t as te } from "./index-C2js5LZp.js";
import { a as S, i as C, n as w, r as T } from "./query-DZOG5WwV.js";
function E() {
  return {
    staticChildren: new Map(),
    dynamicChild: null,
    catchAllChild: null,
    optionalCatchAllChild: null,
    route: null,
  };
}
function D(e) {
  let t = E();
  for (let n of e) {
    let e = n.patternParts;
    if (e.length === 0) {
      t.route === null && (t.route = n);
      continue;
    }
    let r = t;
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i.endsWith(`+`) && i.startsWith(`:`)) {
        if (t !== e.length - 1) break;
        let a = i.slice(1, -1);
        r.catchAllChild === null && (r.catchAllChild = { paramName: a, route: n });
        break;
      }
      if (i.endsWith(`*`) && i.startsWith(`:`)) {
        if (t !== e.length - 1) break;
        let a = i.slice(1, -1);
        r.optionalCatchAllChild === null && (r.optionalCatchAllChild = { paramName: a, route: n });
        break;
      }
      if (i.startsWith(`:`)) {
        let a = i.slice(1);
        (r.dynamicChild === null && (r.dynamicChild = { paramName: a, node: E() }),
          (r = r.dynamicChild.node),
          t === e.length - 1 && r.route === null && (r.route = n));
        continue;
      }
      let a = r.staticChildren.get(i);
      (a || ((a = E()), r.staticChildren.set(i, a)),
        (r = a),
        t === e.length - 1 && r.route === null && (r.route = n));
    }
  }
  return t;
}
function O(e, t) {
  let n = A(e, t, 0);
  return (n && x(n.params), n);
}
function k() {
  return Object.create(null);
}
function A(e, t, n) {
  if (n === t.length)
    return e.route === null
      ? e.optionalCatchAllChild === null
        ? null
        : { route: e.optionalCatchAllChild.route, params: k() }
      : { route: e.route, params: k() };
  let r = t[n],
    i = e.staticChildren.get(r);
  if (i) {
    let e = A(i, t, n + 1);
    if (e !== null) return e;
  }
  if (e.dynamicChild !== null) {
    let i = A(e.dynamicChild.node, t, n + 1);
    if (i !== null) return ((i.params[e.dynamicChild.paramName] = r), i);
  }
  if (e.catchAllChild !== null) {
    let r = t.slice(n),
      i = k();
    return ((i[e.catchAllChild.paramName] = r), { route: e.catchAllChild.route, params: i });
  }
  if (e.optionalCatchAllChild !== null) {
    let r = t.slice(n),
      i = k();
    return (
      (i[e.optionalCatchAllChild.paramName] = r),
      { route: e.optionalCatchAllChild.route, params: i }
    );
  }
  return null;
}
function j() {
  return new WeakMap();
}
function M(e, t) {
  let n = e.get(t);
  return (n || ((n = D(t)), e.set(t, n)), n);
}
function N(e, t, n) {
  let r = e.split(`?`)[0],
    i = r === `/` ? `/` : r.replace(/\/$/, ``);
  i = b(i);
  let a = i.split(`/`).filter(Boolean);
  return O(M(n, t), a);
}
var P = () =>
  globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null
    ? null
    : {
        locale: globalThis.__VINEXT_LOCALE__,
        locales: globalThis.__VINEXT_LOCALES__,
        defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
        domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
        hostname: globalThis.__VINEXT_HOSTNAME__,
      };
function F() {
  return P();
}
function I(e) {
  return e.nodeEnv === `production` && e.prefetch !== !1 && !e.isDangerous;
}
function L(e) {
  return e.nodeEnv !== `production` || e.isDangerous
    ? !1
    : e.routerMode === `pages` || e.prefetch !== !1;
}
function R(e) {
  let { href: t, basePath: r, currentOrigin: i } = e;
  if (!s(t)) return t;
  if (i === void 0) return null;
  try {
    let e = new URL(i),
      a = t.startsWith(`//`) ? new URL(t, e.origin) : new URL(t);
    return a.origin === e.origin
      ? r
        ? c(a.pathname, r)
          ? n(a.pathname, r) + a.search + a.hash
          : null
        : a.pathname + a.search + a.hash
      : null;
  } catch {
    return null;
  }
}
var z = e(v(), 1),
  B = y(),
  V = (0, z.createContext)({ pending: !1 });
function H() {
  return (0, z.useContext)(V);
}
var U = ``,
  W = !1,
  G = j();
function ne(e) {
  if (typeof e == `string`) return e;
  let t = e.pathname ?? `/`;
  if (e.query) {
    let n = T(e.query);
    t = w(t, n);
  }
  return t;
}
function K(e, t) {
  return t || e === !1 ? `disabled` : e === !0 ? `full` : `auto`;
}
function q(e) {
  if (typeof window > `u`) return null;
  let t;
  try {
    t = new URL(e, window.location.href);
  } catch {
    return null;
  }
  return t.origin === window.location.origin ? `${n(t.pathname, U)}${t.search}` : null;
}
function J() {
  return typeof window < `u` && typeof window.__VINEXT_RSC_NAVIGATE__ == `function`
    ? `app`
    : `pages`;
}
function Y(e) {
  if (typeof window > `u`) return !1;
  let t = window.__VINEXT_LINK_PREFETCH_ROUTES__;
  if (!t) return !1;
  let n = q(e);
  if (n === null) return !1;
  let r = N(n, t, G);
  return r ? !r.route.isDynamic : !1;
}
function X(e, n, r = `low`) {
  if (typeof window > `u`) return;
  let i = R({ href: e, basePath: U, currentOrigin: window.location.origin });
  if (i == null) return;
  let a = t(i, window.location.href, U);
  (window.requestIdleCallback ?? ((e) => setTimeout(e, 100)))(() => {
    (async () => {
      if (typeof window.__VINEXT_RSC_NAVIGATE__ == `function`) {
        if (n === `auto` && !Y(i)) return;
        let e = p(),
          t = d(),
          o = l({ interceptionContext: e });
        t && o.set(m, t);
        let s = await u(a, o),
          c = g.encodeCacheKey(s, e),
          f = h();
        if (f.has(c)) return;
        (f.add(c),
          _(
            s,
            fetch(s, { headers: o, credentials: `include`, priority: r, purpose: `prefetch` }),
            e,
            t,
          ));
      } else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
        let e = document.createElement(`link`);
        ((e.rel = `prefetch`), (e.href = a), (e.as = `document`), document.head.appendChild(e));
      }
    })().catch((e) => {
      console.error(`[vinext] RSC prefetch setup error:`, e);
    });
  });
}
var Z = null,
  Q = new WeakMap(),
  $ = new Set();
function re(e, t) {
  if (((e.isVisible = t), t)) {
    if (($.add(e), e.routerMode === `pages` && e.viewportPrefetched)) return;
    (X(e.href, e.mode, `low`), (e.viewportPrefetched = !0));
  } else $.delete(e);
}
function ie() {
  typeof window > `u` || (window.__VINEXT_PING_VISIBLE_LINKS__ = ae);
}
function ae() {
  for (let e of $) e.isVisible && e.routerMode === `app` && X(e.href, e.mode, `low`);
}
function oe() {
  return typeof window > `u` || typeof IntersectionObserver > `u`
    ? null
    : Z ||
        ((Z = new IntersectionObserver(
          (e) => {
            for (let t of e) {
              let e = Q.get(t.target);
              e && re(e, t.isIntersecting || t.intersectionRatio > 0);
            }
          },
          { rootMargin: `250px` },
        )),
        Z);
}
function se() {
  return typeof window < `u` ? window.__VINEXT_DEFAULT_LOCALE__ : F()?.defaultLocale;
}
function ce() {
  return typeof window < `u` ? window.__NEXT_DATA__?.domainLocales : F()?.domainLocales;
}
function le() {
  return typeof window < `u` ? window.location.hostname : F()?.hostname;
}
function ue(e, t) {
  return S(e, t, { basePath: U, currentHostname: le(), domainItems: ce() });
}
function de(e, t) {
  return t === !1 || t === void 0 || s(e) ? e : ue(e, t) || C(e, t, se() ?? ``);
}
var fe = (0, z.forwardRef)(function (
  {
    href: e,
    as: n,
    replace: c = !1,
    prefetch: l,
    scroll: u = !0,
    children: d,
    onClick: p,
    onMouseEnter: m,
    onTouchStart: h,
    onNavigate: g,
    unstable_dynamicOnHover: _ = !1,
    ...v
  },
  y,
) {
  let { locale: b, ...x } = v,
    S = n ?? ne(e),
    C = typeof S == `string` && ee(S),
    w = a(de(C ? `/` : S, b), W),
    T = a(o(w, U), W),
    [E, D] = (0, z.useState)(!1),
    O = (0, z.useRef)(!0);
  (0, z.useEffect)(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    [],
  );
  let k = (0, z.useRef)(null),
    A = K(l, C),
    j = I({ nodeEnv: `production`, prefetch: l, isDangerous: C }),
    M = (0, z.useCallback)(
      (e) => {
        ((k.current = e), typeof y == `function` ? y(e) : y && (y.current = e));
      },
      [y],
    );
  (0, z.useEffect)(() => {
    if (!j || typeof window > `u`) return;
    let e = k.current;
    if (!e) return;
    let t = R({ href: w, basePath: U, currentOrigin: window.location.origin });
    if (t == null) return;
    let n = oe();
    if (!n) return;
    ie();
    let r = { href: t, isVisible: !1, mode: A, routerMode: J(), viewportPrefetched: !1 };
    return (
      Q.set(e, r),
      n.observe(e),
      () => {
        (n.unobserve(e), Q.delete(e), $.delete(r));
      }
    );
  }, [j, A, w]);
  let N = (0, z.useCallback)(() => {
      if (!L({ nodeEnv: `production`, prefetch: l, isDangerous: C, routerMode: J() })) return;
      let e = _ ? `full` : A;
      if (_ && k.current) {
        let e = Q.get(k.current);
        e && (e.mode = `full`);
      }
      X(w, e, `high`);
    }, [l, C, A, w, _]),
    P = (0, z.useCallback)(
      (e) => {
        (m?.(e), N());
      },
      [m, N],
    ),
    F = (0, z.useCallback)(
      (e) => {
        (h?.(e), N());
      },
      [h, N],
    ),
    H = async (e) => {
      if (
        (p && p(e),
        e.defaultPrevented ||
          e.currentTarget.hasAttribute(`download`) ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          (e.currentTarget.target && e.currentTarget.target !== `_self`))
      )
        return;
      let n = w;
      if (s(S)) {
        let e = i(S, U);
        if (e == null) return;
        n = e;
      }
      e.preventDefault();
      let a = r(n, window.location.href, U),
        o = t(n, window.location.href, U);
      if (g)
        try {
          let e = new URL(o, window.location.origin),
            t = !1,
            n = {
              url: e,
              preventDefault() {
                t = !0;
              },
              get defaultPrevented() {
                return t;
              },
            };
          if ((g(n), n.defaultPrevented)) return;
        } catch {}
      if (typeof window.__VINEXT_RSC_NAVIGATE__ == `function`) {
        (D(!0),
          z.startTransition(() => {
            f(n, c ? `replace` : `push`, u, !0).finally(() => {
              O.current && D(!1);
            });
          }));
        return;
      } else
        try {
          let e = (
            await te(
              async () => {
                let { default: e } = await import(`./router-BNCzJ6Wg.js`);
                return { default: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
            )
          ).default;
          c ? await e.replace(a, void 0, { scroll: u }) : await e.push(a, void 0, { scroll: u });
        } catch {
          (c ? window.history.replaceState({}, ``, o) : window.history.pushState({}, ``, o),
            window.dispatchEvent(new PopStateEvent(`popstate`)));
        }
    },
    { passHref: G, ...q } = x,
    Y = z.useMemo(() => ({ pending: E }), [E]);
  return C
    ? (0, B.jsx)(V.Provider, {
        value: Y,
        children: (0, B.jsx)(`a`, {
          ref: M,
          onClick: p,
          onMouseEnter: P,
          onTouchStart: F,
          ...q,
          children: d,
        }),
      })
    : (0, B.jsx)(V.Provider, {
        value: Y,
        children: (0, B.jsx)(`a`, {
          ref: M,
          href: T,
          onClick: (e) => {
            H(e);
          },
          onMouseEnter: P,
          onTouchStart: F,
          ...q,
          children: d,
        }),
      });
});
export {
  Y as canAutoPrefetchFullAppRoute,
  fe as default,
  K as resolveLinkPrefetchMode,
  H as useLinkStatus,
};
