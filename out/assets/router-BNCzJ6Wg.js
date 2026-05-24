const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/framework-BCcj1Z2J.js", "assets/rolldown-runtime-S-ySWqyJ.js"]),
) => i.map((i) => d[i]);
import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import { a as t, c as n, d as r, n as i, o as a, t as o } from "./url-utils-BW4074SE.js";
import { i as s } from "./framework-BCcj1Z2J.js";
import { n as c, o as l, r as u, t as d } from "./index-C2js5LZp.js";
import { a as f, i as p, n as m, r as h, t as g } from "./query-DZOG5WwV.js";
var _ = e(s(), 1),
  ee = (0, _.createContext)(null);
function v(e) {
  return !(
    typeof e != `string` ||
    e.length === 0 ||
    (!e.startsWith(`/`) && !e.startsWith(`./`)) ||
    e.startsWith(`//`) ||
    e.includes(`://`) ||
    e.includes(`..`)
  );
}
var y = ``;
function te() {
  let e = new Map();
  return {
    on(t, n) {
      (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
    },
    off(t, n) {
      e.get(t)?.delete(n);
    },
    emit(t, ...n) {
      e.get(t)?.forEach((e) => e(...n));
    },
  };
}
var b = te();
function ne(e) {
  if (typeof e == `string`) return e;
  let t = e.pathname ?? `/`;
  if (e.query) {
    let n = h(e.query);
    t = m(t, n);
  }
  return t;
}
function x(e, t, n) {
  return T(t ?? ne(e), n);
}
function S() {
  return window.__NEXT_DATA__?.domainLocales;
}
function C() {
  return window.location?.hostname;
}
function w(e, t) {
  return f(e, t, { basePath: y, currentHostname: C(), domainItems: S() });
}
function T(e, t) {
  return !t || typeof window > `u` || o(e)
    ? e
    : w(e, t) || p(e, t, window.__VINEXT_DEFAULT_LOCALE__ ?? ``);
}
function E(e) {
  return o(e);
}
function D(e) {
  if (typeof window > `u`) return e;
  if (e.startsWith(`#`)) return r(window.location.pathname, y) + window.location.search + e;
  try {
    let t = new URL(e, window.location.href);
    return r(t.pathname, y) + t.search + t.hash;
  } catch {
    return e;
  }
}
function O(e) {
  return e.startsWith(`#`) ? !0 : typeof window > `u` ? !1 : i(e, window.location.href, y);
}
function k() {
  let e = window.history.state ?? {};
  window.history.replaceState(
    { ...e, __vinext_scrollX: window.scrollX, __vinext_scrollY: window.scrollY },
    ``,
  );
}
var A = null,
  j = () => A,
  M = null,
  N = null;
function P(e, t, n) {
  let r = `${e}|${t}|${n}`;
  if (N === r && M) return M;
  let i = { pathname: t, searchParams: new URLSearchParams(n), params: e ? (R(e, t) ?? {}) : {} };
  return ((M = i), (N = r), i);
}
function F() {
  if (typeof window > `u`) {
    let e = j();
    if (!e) return null;
    let t, n;
    try {
      let r = new URL(e.asPath, `http://_`);
      ((t = r.searchParams), (n = r.pathname));
    } catch {
      ((t = new URLSearchParams()), (n = e.pathname));
    }
    let r = R(e.pathname, n) ?? {};
    return { pathname: n, searchParams: t, params: r };
  }
  let e = r(window.location.pathname, y);
  return P(window.__NEXT_DATA__?.page ?? ``, e, window.location.search);
}
function I(e) {
  let t = [],
    n = e.matchAll(/\[{1,2}(?:\.\.\.)?([^\]]+)\]{1,2}/g);
  for (let e of n) t.push(e[1]);
  if (t.length > 0) return t;
  let r = e.matchAll(/:([^/+*]+)[+*]?/g);
  for (let e of r) t.push(e[1]);
  return t;
}
function L(e) {
  return e.split(`/`).filter(Boolean);
}
function R(e, t) {
  return c(L(t), u(e));
}
function z(e, t) {
  let n = {};
  if (!e?.query || !e.page) return n;
  let r = I(e.page);
  if (r.length === 0) return n;
  let i = R(e.page, t);
  if (i) return i;
  for (let t of r) {
    let r = e.query[t];
    typeof r == `string` ? (n[t] = r) : Array.isArray(r) && (n[t] = [...r]);
  }
  return n;
}
function B() {
  if (typeof window > `u`) {
    let e = j();
    if (e) {
      let t = {};
      for (let [n, r] of Object.entries(e.query)) t[n] = Array.isArray(r) ? [...r] : r;
      return { pathname: e.pathname, query: t, asPath: e.asPath };
    }
    return { pathname: `/`, query: {}, asPath: `/` };
  }
  let e = r(window.location.pathname, y),
    t = window.__NEXT_DATA__?.page ?? e,
    n = window.__NEXT_DATA__,
    i = z(n, e),
    a = {},
    o = new URLSearchParams(window.location.search);
  for (let [e, t] of o) g(a, e, t);
  return {
    pathname: t,
    query: { ...a, ...i },
    asPath: e + window.location.search + window.location.hash,
  };
}
var V = class extends Error {
    cancelled = !0;
    constructor(e) {
      (super(`Abort fetching component for route: "${e}"`),
        (this.name = `NavigationCancelledError`));
    }
  },
  H = class extends Error {
    hardNavigationScheduled = !0;
    constructor(e) {
      (super(e), (this.name = `HardNavigationScheduledError`));
    }
  },
  U = 0,
  W = null;
function G(e, t) {
  throw (typeof window > `u` || (window.location.href = e), new H(t));
}
async function K(t) {
  if (typeof window > `u`) return;
  let n = window.__VINEXT_ROOT__;
  if (!n) {
    window.location.href = t;
    return;
  }
  W?.abort();
  let r = new AbortController();
  W = r;
  let i = ++U;
  function a() {
    if (i !== U) throw new V(t);
  }
  try {
    let i;
    try {
      i = await fetch(t, { headers: { Accept: `text/html` }, signal: r.signal });
    } catch (e) {
      throw e instanceof DOMException && e.name === `AbortError` ? new V(t) : e;
    }
    (a(), i.ok || G(t, `Navigation failed: ${i.status} ${i.statusText}`));
    let o = await i.text();
    a();
    let s = o.match(/<script>window\.__NEXT_DATA__\s*=\s*(.*?)<\/script>/);
    s || G(t, `Navigation failed: missing __NEXT_DATA__ in response`);
    let c = JSON.parse(s[1]),
      { pageProps: l } = c.props,
      u = c.__vinext?.pageModuleUrl;
    if (!u) {
      let e = o.match(/import\("([^"]+)"\);\s*\n\s*const PageComponent/),
        t = o.match(/await import\("([^"]+pages\/[^"]+)"\)/);
      u = e?.[1] ?? t?.[1] ?? void 0;
    }
    (u || G(t, `Navigation failed: no page module URL found`),
      v(u) ||
        (console.error(`[vinext] Blocked import of invalid page module path:`, u),
        G(t, `Navigation failed: invalid page module path`)));
    let f = await d(() => import(u), []);
    a();
    let p = f.default;
    p || G(t, `Navigation failed: page module has no default export`);
    let m = (
      await d(
        async () => {
          let { default: t } = await import(`./framework-BCcj1Z2J.js`).then((t) => e(t.i(), 1));
          return { default: t };
        },
        __vite__mapDeps([0, 1]),
      )
    ).default;
    a();
    let h = window.__VINEXT_APP__,
      g = c.__vinext?.appModuleUrl;
    if (!h && g)
      if (!v(g)) console.error(`[vinext] Blocked import of invalid app module path:`, g);
      else
        try {
          ((h = (
            await d(async () => {
              let { default: e } = await import(g);
              return { default: e };
            }, [])
          ).default),
            (window.__VINEXT_APP__ = h));
        } catch {}
    a();
    let _;
    ((_ = h ? m.createElement(h, { Component: p, pageProps: l }) : m.createElement(p, l)),
      (_ = oe(_)),
      (window.__NEXT_DATA__ = c),
      n.render(_));
  } finally {
    i === U && (W = null);
  }
}
async function q(e, t) {
  try {
    return (await K(e), `completed`);
  } catch (n) {
    return (
      b.emit(`routeChangeError`, n, t, { shallow: !1 }),
      n instanceof V
        ? `cancelled`
        : (typeof window < `u` && !(n instanceof H) && (window.location.href = e), `failed`)
    );
  }
}
function J(e, t, n, r) {
  let i = j(),
    a = typeof window < `u` ? window.__NEXT_DATA__ : void 0,
    o = typeof window > `u` ? i?.locale : window.__VINEXT_LOCALE__,
    s = typeof window > `u` ? i?.locales : window.__VINEXT_LOCALES__,
    c = typeof window > `u` ? i?.defaultLocale : window.__VINEXT_DEFAULT_LOCALE__,
    l = typeof window > `u` ? i?.domainLocales : a?.domainLocales;
  return {
    pathname: e,
    route: typeof window < `u` ? (a?.page ?? e) : e,
    query: t,
    asPath: n,
    basePath: y,
    locale: o,
    locales: s,
    defaultLocale: c,
    domainLocales: l,
    isReady: !0,
    isPreview: !1,
    isFallback: typeof window < `u` && a?.isFallback === !0,
    ...r,
    events: b,
  };
}
function Y(e) {
  let t = e.indexOf(`#`);
  return t === -1 ? `` : e.slice(t);
}
function X() {
  window.dispatchEvent(new CustomEvent(`vinext:navigate`));
}
function Z(e, t) {
  (e === `push` ? window.history.pushState({}, ``, t) : window.history.replaceState({}, ``, t),
    (ae = window.location.pathname + window.location.search));
}
async function Q(e, r, i, o, s) {
  let c = x(e, r, i?.locale);
  if (E(c)) {
    let e = a(c, y);
    if (e == null)
      return (o === `push` ? window.location.assign(c) : window.location.replace(c), !0);
    c = e;
  }
  let l = t(c, window.location.href, y),
    u = i?.shallow ?? !1,
    d = i?.scroll !== !1;
  if (O(l)) {
    let e = D(l);
    return (
      b.emit(`hashChangeStart`, e, { shallow: u }),
      Z(o, c.startsWith(`#`) ? c : l),
      d && n(Y(c)),
      s?.(),
      b.emit(`hashChangeComplete`, e, { shallow: u }),
      X(),
      !0
    );
  }
  if (
    (o === `push` && k(),
    b.emit(`routeChangeStart`, c, { shallow: u }),
    b.emit(`beforeHistoryChange`, c, { shallow: u }),
    Z(o, l),
    !u)
  ) {
    let e = await q(l, c);
    if (e === `cancelled`) return !0;
    if (e === `failed`) return !1;
  }
  (s?.(), b.emit(`routeChangeComplete`, c, { shallow: u }));
  let f = Y(c);
  return (d && (f ? n(f) : window.scrollTo(0, 0)), X(), !0);
}
async function re(e) {
  if (typeof document < `u`) {
    let t = document.createElement(`link`);
    ((t.rel = `prefetch`), (t.href = e), (t.as = `document`), document.head.appendChild(t));
  }
}
function ie({ children: e }) {
  let [{ pathname: t, query: n, asPath: r }, i] = (0, _.useState)(B);
  (0, _.useEffect)(() => {
    let e = (e) => {
      i(B());
    };
    return (
      window.addEventListener(`vinext:navigate`, e),
      () => window.removeEventListener(`vinext:navigate`, e)
    );
  }, []);
  let a = (0, _.useMemo)(
    () =>
      J(t, n, r, {
        push: $.push,
        replace: $.replace,
        back: $.back,
        reload: $.reload,
        prefetch: $.prefetch,
        beforePopState: $.beforePopState,
      }),
    [t, n, r],
  );
  return (0, _.createElement)(ee.Provider, { value: a }, e);
}
var ae = typeof window < `u` ? window.location.pathname + window.location.search : ``;
function oe(e) {
  return (0, _.createElement)(ie, null, e);
}
var $ = {
  push: (e, t, n) => Q(e, t, n, `push`),
  replace: (e, t, n) => Q(e, t, n, `replace`),
  back: () => window.history.back(),
  reload: () => window.location.reload(),
  prefetch: re,
  beforePopState: (e) => {},
  events: b,
};
typeof window < `u` && l({ router: $ });
var se = Symbol.for(`vinext.navigation.pagesNavigationContextAccessor`);
globalThis[se] = F;
export { $ as default };
