import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import { a as t, c as n, d as r, n as i, o as a, t as o } from "./url-utils-BW4074SE.js";
import { i as s } from "./framework-BCcj1Z2J.js";
var c = `X-Vinext-Params`,
  l = `X-Vinext-Mounted-Slots`,
  u = `X-Vinext-Interception-Context`,
  d = `X-Vinext-Rsc-Render-Mode`,
  f = `x-rsc-action`,
  p = `x-nextjs-action-not-found`,
  ee = `x-action-revalidated`,
  te = `x-action-redirect`,
  ne = `Next-Router-State-Tree`,
  re = `Next-Router-Prefetch`,
  ie = `Next-Router-Segment-Prefetch`,
  ae = `Next-Url`,
  oe = `[\\u0000-\\u001F \\u200B\\uFEFF]*`,
  se = `[\\r\\n\\t]*`;
function ce(e) {
  let t = e.split(``).join(se);
  return RegExp(`^${oe}${t}${se}:`, `i`);
}
var le = [ce(`javascript`), ce(`data`), ce(`vbscript`)],
  ue = `Next.js has blocked a javascript: URL as a security precaution.`;
function de(e) {
  let t = `` + e;
  return le.some((e) => e.test(t));
}
function m(e) {
  if (de(e)) throw Error(ue);
}
var fe = `navigation`,
  h = `refresh-preserve-ui`,
  pe = `action-rerender-preserve-ui`;
function me(e) {
  switch (e) {
    case h:
      return h;
    case pe:
      return pe;
    default:
      return fe;
  }
}
var g = null;
function he(e) {
  return Object.values(e).some((e) => typeof e == `function`) ? e : null;
}
function ge(e) {
  return ((g = e), g);
}
function _e(e, t) {
  g?.onRouterTransitionStart?.(e, t);
}
function ve(e) {
  return (
    e.startsWith(`/`) &&
    !e.startsWith(`//`) &&
    !e.includes(`?`) &&
    !e.includes(`#`) &&
    !e.includes(`\0`)
  );
}
function ye(e) {
  if (
    e === `/` ||
    (e.length > 1 &&
      e[0] === `/` &&
      !e.includes(`//`) &&
      !e.includes(`/./`) &&
      !e.includes(`/../`) &&
      !e.endsWith(`/.`) &&
      !e.endsWith(`/..`))
  )
    return e;
  let t = e.split(`/`),
    n = [];
  for (let e of t) e === `` || e === `.` || (e === `..` ? n.pop() : n.push(e));
  return `/` + n.join(`/`);
}
function _(e = {}) {
  return {
    schemaVersion: 1,
    graphVersion: e.graphVersion ?? null,
    deploymentVersion: e.deploymentVersion ?? null,
    appElementsSchemaVersion: 1,
    rscPayloadSchemaVersion: 1,
    rootBoundaryId: e.rootBoundaryId ?? null,
    renderEpoch: e.renderEpoch ?? null,
  };
}
function be(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function v(e) {
  return typeof e == `string` || e === null;
}
function xe(e) {
  return (
    e.schemaVersion === 1 && e.appElementsSchemaVersion === 1 && e.rscPayloadSchemaVersion === 1
  );
}
function Se(e) {
  return !be(e) ||
    !xe(e) ||
    !v(e.graphVersion) ||
    !v(e.deploymentVersion) ||
    !v(e.rootBoundaryId) ||
    !v(e.renderEpoch)
    ? null
    : {
        schemaVersion: 1,
        graphVersion: e.graphVersion,
        deploymentVersion: e.deploymentVersion,
        appElementsSchemaVersion: 1,
        rscPayloadSchemaVersion: 1,
        rootBoundaryId: e.rootBoundaryId,
        renderEpoch: e.renderEpoch,
      };
}
var y = e(s(), 1),
  Ce = `\0`,
  we = `__artifactCompatibility`,
  Te = `__interception`,
  b = `__interceptionContext`,
  x = `__layoutIds`,
  S = `__layoutFlags`,
  Ee = `__renderObservation`,
  C = `__route`,
  w = `__rootLayout`,
  T = `__slotBindings`,
  De = `__VINEXT_UNMATCHED_SLOT__`,
  E = Symbol.for(`vinext.unmatchedSlot`);
function Oe(e, t) {
  return e < t ? -1 : +(e > t);
}
function ke(e, t) {
  return Oe(e.slotId, t.slotId);
}
function D(e, t = {}) {
  let n = t.layoutIds ? new Set(t.layoutIds) : null,
    r = new Set(),
    i = [];
  for (let t of e) {
    if (r.has(t.slotId))
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: duplicate slot id`);
    if ((r.add(t.slotId), n && t.ownerLayoutId !== null && !n.has(t.ownerLayoutId)))
      throw Error(
        `[vinext] Invalid __slotBindings in App Router payload: owner layout id missing from __layoutIds`,
      );
    i.push({ ...t });
  }
  return i.sort(ke);
}
function O(e, t) {
  return t === null ? e : `${e}${Ce}${t}`;
}
function Ae(e, t) {
  return O(`route:${e}`, t);
}
function je(e, t) {
  return O(`page:${e}`, t);
}
function Me(e) {
  return `layout:${e}`;
}
function Ne(e) {
  return `template:${e}`;
}
function Pe(e, t) {
  return `slot:${e}:${t}`;
}
function Fe(e, t) {
  return O(e, t);
}
function Ie(e) {
  let t = e.indexOf(Ce),
    n = t === -1 ? e : e.slice(0, t);
  return n.startsWith(`/`)
    ? { interceptionContext: t === -1 ? null : e.slice(t + 1), path: n }
    : null;
}
function k(e) {
  return e.startsWith(`/`) ? e : null;
}
function A(e) {
  if (e.startsWith(`route:`)) {
    let t = Ie(e.slice(6));
    return t ? { interceptionContext: t.interceptionContext, kind: `route`, path: t.path } : null;
  }
  if (e.startsWith(`page:`)) {
    let t = Ie(e.slice(5));
    return t ? { interceptionContext: t.interceptionContext, kind: `page`, path: t.path } : null;
  }
  if (e.startsWith(`layout:`)) {
    let t = k(e.slice(7));
    return t ? { kind: `layout`, treePath: t } : null;
  }
  if (e.startsWith(`template:`)) {
    let t = k(e.slice(9));
    return t ? { kind: `template`, treePath: t } : null;
  }
  if (e.startsWith(`slot:`)) {
    let t = e.slice(5),
      n = t.indexOf(`:`);
    if (n <= 0) return null;
    let r = t.slice(0, n),
      i = k(t.slice(n + 1));
    return i ? { kind: `slot`, name: r, treePath: i } : null;
  }
  return null;
}
function j(e) {
  if (!e.startsWith(`slot:`)) return !1;
  let t = e.slice(5),
    n = t.indexOf(`:`);
  return n > 0 && t.charCodeAt(n + 1) === 47;
}
function Le(e) {
  let t = [...(e.layoutIds ?? [])],
    n = { [C]: e.routeId, [b]: e.interceptionContext, [x]: t, [w]: e.rootLayoutTreePath },
    r = e.interception ? { ...n, [Te]: e.interception } : n;
  return e.slotBindings && e.slotBindings.length > 0
    ? { ...r, [T]: D(e.slotBindings, { layoutIds: t }) }
    : r;
}
function Re(e) {
  let t = !1;
  for (let [n, r] of Object.entries(e))
    if (j(n) && r === `__VINEXT_UNMATCHED_SLOT__`) {
      t = !0;
      break;
    }
  if (!t) return e;
  let n = {};
  for (let [t, r] of Object.entries(e)) n[t] = j(t) && r === `__VINEXT_UNMATCHED_SLOT__` ? E : r;
  return n;
}
function ze(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return !1;
  for (let t of Object.values(e)) if (t !== `s` && t !== `d`) return !1;
  return !0;
}
function Be(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function Ve(e) {
  return ze(e) ? e : {};
}
function He(e) {
  if (e === void 0) return [];
  if (!Array.isArray(e))
    throw Error(`[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]`);
  let t = [];
  for (let n of e) {
    if (typeof n != `string`)
      throw Error(
        `[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]`,
      );
    if (A(n)?.kind !== `layout`)
      throw Error(`[vinext] Invalid __layoutIds in App Router payload: expected layout ids`);
    t.push(n);
  }
  return t;
}
function Ue(e) {
  return e === `active` || e === `default` || e === `unmatched`;
}
function We(e, t = {}) {
  if (e === void 0) return [];
  if (!Array.isArray(e))
    throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected array`);
  let n = [];
  for (let t of e) {
    if (!Be(t))
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected objects`);
    let e = t.slotId;
    if (typeof e != `string` || A(e)?.kind !== `slot`)
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected slot ids`);
    let r = t.ownerLayoutId;
    if (r !== null && (typeof r != `string` || A(r)?.kind !== `layout`))
      throw Error(
        `[vinext] Invalid __slotBindings in App Router payload: expected owner layout ids`,
      );
    let i = t.state;
    if (!Ue(i))
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected state`);
    n.push({ ownerLayoutId: r, slotId: e, state: i });
  }
  return D(n, t);
}
function M(e, t) {
  let n = e[t];
  if (typeof n != `string`)
    throw Error(`[vinext] Invalid __interception in App Router payload: expected strings`);
  return n;
}
function Ge(e) {
  if (!ve(e))
    throw Error(`[vinext] Invalid __interception in App Router payload: expected path URLs`);
  return e;
}
function Ke(e, t) {
  let n = A(e);
  if (n?.kind !== `route` || n.path !== t || n.interceptionContext !== null)
    throw Error(`[vinext] Invalid __interception in App Router payload: expected route ids`);
  return e;
}
function qe(e) {
  if (A(e)?.kind !== `slot`)
    throw Error(`[vinext] Invalid __interception in App Router payload: expected slot id`);
  return e;
}
function Je(e) {
  if (e == null) return null;
  if (!Be(e)) throw Error(`[vinext] Invalid __interception in App Router payload: expected object`);
  let t = Ge(M(e, `sourceMatchedUrl`)),
    n = Ge(M(e, `targetMatchedUrl`));
  return {
    sourceMatchedUrl: t,
    sourceRouteId: Ke(M(e, `sourceRouteId`), t),
    slotId: qe(M(e, `slotId`)),
    targetMatchedUrl: n,
    targetRouteId: Ke(M(e, `targetRouteId`), n),
  };
}
function Ye(e) {
  return !(typeof e != `object` || !e || Array.isArray(e) || (0, y.isValidElement)(e));
}
function Xe(e, t) {
  return { ...e, [S]: t };
}
function Ze(e) {
  if (!Ye(e.element)) return e.element;
  let t = { ...e.element, [S]: e.layoutFlags, [we]: e.artifactCompatibility ?? _() };
  return (e.renderObservation && (t[Ee] = e.renderObservation), t);
}
function Qe(e) {
  return e === void 0 ? _() : (Se(e) ?? _());
}
function $e(e) {
  let t = e[C];
  if (typeof t != `string`) throw Error(`[vinext] Missing __route string in App Router payload`);
  let n = e[b];
  if (n != null && typeof n != `string`)
    throw Error(`[vinext] Invalid __interceptionContext in App Router payload`);
  let r = e[w];
  if (r === void 0) throw Error(`[vinext] Missing __rootLayout key in App Router payload`);
  if (r !== null && typeof r != `string`)
    throw Error(`[vinext] Invalid __rootLayout in App Router payload: expected string or null`);
  let i = Ve(e[S]),
    a = He(e[x]),
    o = We(e[T], { layoutIds: a }),
    s = Je(e[Te]);
  return {
    artifactCompatibility: Qe(e[we]),
    interception: s,
    interceptionContext: n ?? null,
    layoutIds: a,
    layoutFlags: i,
    routeId: t,
    rootLayoutTreePath: r,
    slotBindings: o,
  };
}
var N = {
  keys: {
    artifactCompatibility: we,
    interception: Te,
    interceptionContext: b,
    layoutIds: x,
    layoutFlags: S,
    renderObservation: Ee,
    rootLayout: w,
    route: C,
    slotBindings: T,
  },
  unmatchedSlotValue: De,
  createMetadataEntries: Le,
  decode: Re,
  encodeCacheKey: Fe,
  encodeLayoutId: Me,
  encodeOutgoingPayload: Ze,
  encodePageId: je,
  encodeRouteId: Ae,
  encodeSlotId: Pe,
  encodeTemplateId: Ne,
  isSlotId: j,
  parseElementKey: A,
  readMetadata: $e,
  withLayoutFlags: Xe,
};
function et(e) {
  return (
    (e &&
      Array.from(new Set(e.split(/\s+/).filter(Boolean)))
        .sort()
        .join(` `)) ||
    null
  );
}
function tt(e) {
  return Object.keys(e)
    .filter((t) => {
      let n = e[t];
      return N.isSlotId(t) && n != null && n !== E;
    })
    .sort();
}
function nt(e) {
  return et(tt(e).join(` `));
}
function rt(e, t) {
  return t ?? e;
}
var P = `__vinext_previousNextUrl`,
  F = `__vinext_historyIndex`;
function I(e) {
  if (!e || typeof e != `object`) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = r;
  return t;
}
function it(e, t) {
  return at(e, { previousNextUrl: t });
}
function at(e, t) {
  let n = I(e);
  return (
    t.previousNextUrl === null ? delete n[P] : (n[P] = t.previousNextUrl),
    t.traversalIndex !== void 0 && (ct(t.traversalIndex) ? (n[F] = t.traversalIndex) : delete n[F]),
    Object.keys(n).length > 0 ? n : null
  );
}
function ot(e, t) {
  let n = st(t);
  return n === null ? e : it(e, n);
}
function st(e) {
  let t = I(e)[P];
  return typeof t == `string` ? t : null;
}
function ct(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= 0;
}
function lt(e) {
  let t = I(e)[F];
  return ct(t) ? t : null;
}
function ut(e) {
  let t = lt(e.historyState),
    n = `unknown`;
  return (
    e.currentHistoryIndex !== null &&
      t !== null &&
      (t < e.currentHistoryIndex ? (n = `back`) : t > e.currentHistoryIndex && (n = `forward`)),
    { direction: n, historyState: e.historyState, targetHistoryIndex: t }
  );
}
var L = `_rsc`,
  R = `X-Vinext-RSC-Compatibility-Id`,
  dt = `text/x-component`;
[`RSC`, `Accept`, ne, re, ie, ae, u, l, d].join(`, `);
var ft = 12,
  pt = new TextEncoder();
function mt(e) {
  let t = ``;
  for (let n of e) t += String.fromCharCode(n);
  return btoa(t).replaceAll(`+`, `-`).replaceAll(`/`, `_`).replace(/=+$/, ``);
}
function ht(e) {
  return e ?? `0`;
}
function z(e) {
  return e && e.length > 0 ? e : null;
}
function gt() {
  return z(`5b67ff5c-f6d7-4fb0-bb3e-66fa102456df`);
}
function _t(e, t = gt()) {
  let n = z(e),
    r = z(t);
  return r === null || (n !== null && n === r);
}
function vt(e, t, n) {
  if (!e) return t;
  let r = new URL(e, n);
  Dt(r);
  let i = new URL(t, n),
    a = Ot(r.pathname);
  i.pathname.length > 1 && i.pathname.endsWith(`/`) && !a.endsWith(`/`) && (a += `/`);
  let o = a + r.search;
  return (i.hash && (o += i.hash), o);
}
function yt(e) {
  return _t(e.responseCompatibilityId, e.clientCompatibilityId)
    ? { kind: `compatible` }
    : { hardNavigationTarget: vt(e.responseUrl, e.currentHref, e.origin), kind: `hard-navigate` };
}
function bt(e) {
  let t = me(e);
  return t === `navigation` ? null : t;
}
function xt(e, t = {}) {
  let n = [
    e.get(re),
    e.get(ie),
    e.get(ne),
    e.get(ae),
    e.get(u),
    e.get(l),
    ...(t.includeRenderModeHeader === !1 ? [] : [bt(e.get(d))]),
  ];
  return n.every((e) => e === null) ? null : n.map(ht).join(`,`);
}
async function St(e) {
  let t = await globalThis.crypto.subtle.digest(`SHA-256`, pt.encode(e));
  return mt(new Uint8Array(t).subarray(0, ft));
}
function Ct(e) {
  return (e.search.startsWith(`?`) ? e.search.slice(1) : e.search)
    .split(`&`)
    .filter((e) => e.length > 0 && !wt(e));
}
function wt(e) {
  let t = e.indexOf(`=`),
    n = t === -1 ? e : e.slice(0, t);
  try {
    return decodeURIComponent(n.replaceAll(`+`, ` `)) === L;
  } catch {
    return n === L;
  }
}
async function Tt(e) {
  let t = xt(e);
  return t === null ? `` : St(t);
}
function Et(e, t) {
  let n = Ct(e);
  (n.push(t.length > 0 ? `${L}=${t}` : L), (e.search = `?${n.join(`&`)}`));
}
function Dt(e) {
  let t = Ct(e);
  e.search = t.length > 0 ? `?${t.join(`&`)}` : ``;
}
function Ot(e) {
  return e.endsWith(`.rsc`) ? e.slice(0, -4) : e;
}
function kt(e = {}) {
  let t = new Headers({ Accept: dt, RSC: `1` });
  (e.interceptionContext !== void 0 &&
    e.interceptionContext !== null &&
    t.set(u, e.interceptionContext),
    e.mountedSlotsHeader !== void 0 &&
      e.mountedSlotsHeader !== null &&
      t.set(l, e.mountedSlotsHeader));
  let n = e.renderMode ?? `navigation`;
  return (n !== `navigation` && t.set(d, n), t);
}
function At(e) {
  let t = e.indexOf(`#`),
    n = t === -1 ? e : e.slice(0, t),
    r = n.indexOf(`?`),
    i = r === -1 ? n : n.slice(0, r),
    a = r === -1 ? `` : n.slice(r);
  return `${i.length > 1 && i.endsWith(`/`) ? i.slice(0, -1) : i}.rsc${a}`;
}
async function jt(e, t) {
  let n = new URL(At(e), `http://vinext.local`);
  return (Et(n, await Tt(t)), `${n.pathname}${n.search}`);
}
var Mt = Symbol.for(`vinext.appRouterContext`),
  Nt = Symbol.for(`vinext.globalLayoutRouterContext`),
  Pt = Symbol.for(`vinext.layoutRouterContext`),
  Ft = Symbol.for(`vinext.missingSlotContext`),
  It = Symbol.for(`vinext.templateContext`);
function B(e, t) {
  if (typeof y.createContext != `function`) return null;
  let n = globalThis;
  return (n[e] || (n[e] = y.createContext(t)), n[e] ?? null);
}
var V = B(Mt, null);
(B(Nt, null), B(Pt, null), B(Ft, new Set()), B(It, null));
var H = class extends Error {
    constructor() {
      super(
        "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
      );
    }
  },
  U = class extends URLSearchParams {
    append(e, t) {
      throw new H();
    }
    delete(e, t) {
      throw new H();
    }
    set(e, t) {
      throw new H();
    }
    sort() {
      throw new H();
    }
  },
  Lt = class extends Error {
    constructor(...e) {
      (super(...e), (this.name = `UnrecognizedActionError`));
    }
  },
  W = Symbol.for(`vinext.layoutSegmentContext`),
  G = Symbol.for(`vinext.serverInsertedHTMLContext`);
function Rt() {
  if (typeof y.createContext != `function`) return null;
  let e = globalThis;
  return (e[G] || (e[G] = y.createContext(null)), e[G] ?? null);
}
Rt();
function zt() {
  if (typeof y.createContext != `function`) return null;
  let e = globalThis;
  return (e[W] || (e[W] = y.createContext({ children: [] })), e[W] ?? null);
}
var Bt = Symbol.for(`vinext.navigation.globalAccessors`),
  Vt = Symbol.for(`vinext.navigation.clientHydrationContext`);
function Ht() {
  return globalThis[Bt];
}
function Ut() {
  let e = globalThis;
  if (Object.prototype.hasOwnProperty.call(e, Vt)) return e[Vt] ?? null;
}
function Wt(e) {
  globalThis[Vt] = e;
}
var K = null,
  Gt = () => {
    if (typeof window < `u`) {
      let e = Ut();
      return e === void 0 ? K : e;
    }
    let e = Ht();
    return e ? e.getServerContext() : K;
  },
  Kt = (e) => {
    if (typeof window < `u`) {
      ((K = e), Wt(e));
      return;
    }
    let t = Ht();
    t ? t.setServerContext(e) : (K = e);
  },
  qt = Symbol.for(`vinext.navigation.pagesNavigationContextAccessor`);
function Jt() {
  let e = globalThis[qt];
  if (!e) return null;
  try {
    return e();
  } catch {
    return null;
  }
}
function Yt(e) {
  Kt(e);
}
var q = typeof window > `u`,
  Xt = 3e4;
function Zt() {
  return q ? null : r(window.location.pathname, ``);
}
function Qt() {
  return q ? `/` : window.location.pathname + window.location.search;
}
function J() {
  return q
    ? new Map()
    : (window.__VINEXT_RSC_PREFETCH_CACHE__ || (window.__VINEXT_RSC_PREFETCH_CACHE__ = new Map()),
      window.__VINEXT_RSC_PREFETCH_CACHE__);
}
function Y() {
  return q
    ? new Set()
    : (window.__VINEXT_RSC_PREFETCHED_URLS__ || (window.__VINEXT_RSC_PREFETCHED_URLS__ = new Set()),
      window.__VINEXT_RSC_PREFETCHED_URLS__);
}
function $t() {
  let e = J();
  if (e.size < 50) return;
  let t = Date.now(),
    n = Y();
  for (let [r, i] of e) t - i.timestamp >= 3e4 && X(e, n, r, i, !0);
  for (; e.size >= 50; ) {
    let t = e.keys().next().value;
    if (t !== void 0) {
      let r = e.get(t);
      r ? X(e, n, t, r, !0) : (e.delete(t), n.delete(t));
    } else break;
  }
}
function en(e) {
  e.invalidationTimer !== void 0 &&
    (clearTimeout(e.invalidationTimer), (e.invalidationTimer = void 0));
}
function tn(e) {
  en(e);
  let t = e.onInvalidateCallbacks;
  if (((e.onInvalidateCallbacks = void 0), t !== void 0))
    for (let e of t)
      try {
        e();
      } catch (e) {
        typeof reportError == `function` ? reportError(e) : console.error(e);
      }
}
function X(e, t, n, r, i) {
  (e.delete(n), t.delete(n), i ? tn(r) : (en(r), (r.onInvalidateCallbacks = void 0)));
}
function nn(e) {
  let t = J(),
    n = t.get(e);
  n && X(t, Y(), e, n, !0);
}
function rn(e, t) {
  if (t.onInvalidateCallbacks === void 0 || t.onInvalidateCallbacks.size === 0) return;
  en(t);
  let n = Date.now() - t.timestamp,
    r = Math.max(0, Xt - n);
  t.invalidationTimer = setTimeout(() => {
    nn(e);
  }, r);
}
function an(e, t) {
  t !== void 0 &&
    (e.onInvalidateCallbacks === void 0 && (e.onInvalidateCallbacks = new Set()),
    e.onInvalidateCallbacks.add(t));
}
function on(e, t) {
  if (t === void 0) return;
  let n = J().get(e);
  n && (an(n, t), n.outcome === `cache-seeded` && rn(e, n));
}
function sn() {
  let e = J(),
    t = Y();
  for (let [n, r] of e) X(e, t, n, r, !0);
  (t.clear(), q || window.__VINEXT_PING_VISIBLE_LINKS__?.());
}
function cn(e, t, n = null) {
  return {
    compatibilityIdHeader: e.headers.get(R),
    buffer: t,
    contentType: e.headers.get(`content-type`) ?? `text/x-component`,
    mountedSlotsHeader: e.headers.get(l),
    paramsHeader: e.headers.get(c),
    url: n ?? e.url,
  };
}
async function ln(e) {
  return cn(e, await e.arrayBuffer());
}
function un(e, t = !0) {
  let n = new Headers({ "content-type": e.contentType });
  return (
    e.mountedSlotsHeader != null && n.set(l, e.mountedSlotsHeader),
    e.compatibilityIdHeader != null && n.set(R, e.compatibilityIdHeader),
    e.paramsHeader != null && n.set(c, e.paramsHeader),
    new Response(t ? e.buffer.slice(0) : e.buffer, { status: 200, headers: n })
  );
}
function dn(e, t, n = null, r = null, i) {
  let a = N.encodeCacheKey(e, n),
    o = J(),
    s = Y(),
    c = { outcome: `pending`, timestamp: Date.now() };
  (an(c, i?.onInvalidate),
    (c.pending = t
      .then(async (e) => {
        e.ok ? (c.snapshot = { ...(await ln(e)), mountedSlotsHeader: r }) : X(o, s, a, c, !1);
      })
      .catch(() => {
        X(o, s, a, c, !1);
      })
      .finally(() => {
        ((c.pending = void 0), c.snapshot && ((c.outcome = `cache-seeded`), rn(a, c)));
      })),
    o.set(a, c),
    $t());
}
function fn(e, t = null, n = null) {
  let r = N.encodeCacheKey(e, t),
    i = J(),
    a = i.get(r);
  return !a || a.pending || a.outcome !== `cache-seeded`
    ? null
    : (X(i, Y(), r, a, !1),
      a.snapshot
        ? (a.snapshot.mountedSlotsHeader ?? null) !== n || Date.now() - a.timestamp >= 3e4
          ? null
          : a.snapshot
        : null);
}
var pn = Symbol.for(`vinext.clientNavigationState`),
  mn = Symbol.for(`vinext.mountedSlotsHeader`);
function hn(e) {
  if (q) return;
  let t = window;
  t[mn] = e;
}
function gn() {
  return q ? null : (window[mn] ?? null);
}
function Z() {
  if (q) return null;
  let e = window;
  return (
    (e[pn] ??= {
      listeners: new Set(),
      cachedSearch: window.location.search,
      cachedReadonlySearchParams: new U(window.location.search),
      cachedPathname: r(window.location.pathname, ``),
      clientParams: {},
      clientParamsJson: `{}`,
      pendingClientParams: null,
      pendingClientParamsJson: null,
      pendingPathname: null,
      pendingPathnameNavId: null,
      originalPushState: window.history.pushState.bind(window.history),
      originalReplaceState: window.history.replaceState.bind(window.history),
      patchInstalled: !1,
      hasPendingNavigationUpdate: !1,
      suppressUrlNotifyCount: 0,
      navigationSnapshotActiveCount: 0,
    }),
    e[pn]
  );
}
function _n() {
  let e = Z();
  if (e) for (let t of e.listeners) t();
}
function vn() {
  return Z()?.cachedPathname ?? `/`;
}
function yn() {
  let e = Z();
  if (!e) return !1;
  let t = !1,
    n = r(window.location.pathname, ``);
  n !== e.cachedPathname && ((e.cachedPathname = n), (t = !0));
  let i = window.location.search;
  return (
    i !== e.cachedSearch &&
      ((e.cachedSearch = i), (e.cachedReadonlySearchParams = new U(i)), (t = !0)),
    t
  );
}
function bn() {
  let e = Z();
  e && e.navigationSnapshotActiveCount++;
}
var xn = Symbol.for(`vinext.clientNavigationRenderContext`);
function Sn() {
  if (typeof y.createContext != `function`) return null;
  let e = globalThis;
  return (e[xn] || (e[xn] = y.createContext(null)), e[xn] ?? null);
}
function Cn() {
  let e = Sn();
  if (!e || typeof y.useContext != `function`) return null;
  try {
    return y.useContext(e);
  } catch {
    return null;
  }
}
function wn(e, t) {
  let n = typeof window < `u` ? window.location.origin : `http://localhost`,
    i = new URL(e, n);
  return { pathname: r(i.pathname, ``), searchParams: new U(i.search), params: t };
}
var Tn = `{}`;
function En(e) {
  let t = Z();
  if (!t) {
    let t = JSON.stringify(e);
    t !== Tn && (Tn = t);
    return;
  }
  let n = JSON.stringify(e);
  n !== t.clientParamsJson &&
    ((t.clientParams = e),
    (t.clientParamsJson = n),
    (t.pendingClientParams = null),
    (t.pendingClientParamsJson = null),
    _n());
}
function Dn(e) {
  let t = Z();
  if (!t) return;
  let n = JSON.stringify(e);
  n !== t.clientParamsJson &&
    n !== t.pendingClientParamsJson &&
    ((t.pendingClientParams = e),
    (t.pendingClientParamsJson = n),
    (t.hasPendingNavigationUpdate = !0));
}
function On(e, t) {
  let n = Z();
  n && ((n.pendingPathname = r(e, ``)), (n.pendingPathnameNavId = t));
}
function kn(e) {
  let t = Z();
  t &&
    (t.pendingPathnameNavId === null || t.pendingPathnameNavId === e) &&
    ((t.pendingPathname = null), (t.pendingPathnameNavId = null));
}
function An(e) {
  let t = Z();
  return t
    ? (t.listeners.add(e),
      () => {
        t.listeners.delete(e);
      })
    : () => {};
}
function jn() {
  if (q) {
    let e = Gt();
    return e ? e.pathname : (Jt()?.pathname ?? `/`);
  }
  let e = Cn(),
    t = y.useSyncExternalStore(An, vn, () => Gt()?.pathname ?? Jt()?.pathname ?? `/`);
  return e && (Z()?.navigationSnapshotActiveCount ?? 0) > 0 ? e.pathname : t;
}
function Mn(e) {
  return o(e);
}
function Nn(e) {
  return typeof window > `u` ? !1 : e.startsWith(`#`) ? !0 : i(e, window.location.href, ``);
}
function Pn(e) {
  let t = Z();
  if (!t) return e();
  t.suppressUrlNotifyCount += 1;
  try {
    return e();
  } finally {
    --t.suppressUrlNotifyCount;
  }
}
function Q(e, t) {
  if (q) return;
  let n = Z();
  if (!n) return;
  (e !== void 0 || t?.releaseSnapshot === !0) &&
    n.navigationSnapshotActiveCount > 0 &&
    --n.navigationSnapshotActiveCount;
  let r = yn();
  (n.pendingClientParams !== null &&
    n.pendingClientParamsJson !== null &&
    ((n.clientParams = n.pendingClientParams),
    (n.clientParamsJson = n.pendingClientParamsJson),
    (n.pendingClientParams = null),
    (n.pendingClientParamsJson = null)),
    (n.pendingPathnameNavId === null || (e !== void 0 && n.pendingPathnameNavId === e)) &&
      ((n.pendingPathname = null), (n.pendingPathnameNavId = null)));
  let i = r || n.hasPendingNavigationUpdate;
  ((n.hasPendingNavigationUpdate = !1), i && (_n(), window.__VINEXT_PING_VISIBLE_LINKS__?.()));
}
function Fn(e, t, n) {
  Pn(() => {
    Z()?.originalPushState.call(window.history, e, t, n);
  });
}
function $(e, t, n) {
  Pn(() => {
    Z()?.originalReplaceState.call(window.history, e, t, n);
  });
}
function In() {
  $(
    {
      ...window.history.state,
      __vinext_scrollX: window.scrollX,
      __vinext_scrollY: window.scrollY,
    },
    ``,
  );
}
function Ln(e, t, n) {
  let r = window.__VINEXT_RSC_COMMIT_HASH_NAVIGATION__;
  if (r) {
    r(e, t, n);
    return;
  }
  t === `replace` ? $(null, ``, e) : Fn(null, ``, e);
}
function Rn(e) {
  if (e && typeof e == `object` && `__vinext_scrollY` in e) {
    let { __vinext_scrollX: t, __vinext_scrollY: n } = e;
    Promise.resolve().then(() => {
      let e = window.__VINEXT_RSC_PENDING__ ?? null;
      e
        ? e.then(() => {
            requestAnimationFrame(() => {
              window.scrollTo(t, n);
            });
          })
        : requestAnimationFrame(() => {
            window.scrollTo(t, n);
          });
    });
  }
}
async function zn(e, r, i, o = !1) {
  let s = e;
  if (Mn(e)) {
    let t = a(e, ``);
    if (t == null) {
      r === `replace` ? window.location.replace(e) : window.location.assign(e);
      return;
    }
    s = t;
  }
  let c = t(s, window.location.href, ``);
  if ((_e(c, r), r === `push` && In(), Nn(c))) {
    let e = c.includes(`#`) ? c.slice(c.indexOf(`#`)) : ``;
    (Ln(c, r, i), Q(), i && n(e));
    return;
  }
  let l = c.indexOf(`#`),
    u = l === -1 ? `` : c.slice(l);
  (typeof window.__VINEXT_RSC_NAVIGATE__ == `function`
    ? await window.__VINEXT_RSC_NAVIGATE__(c, 0, `navigate`, r, void 0, o)
    : (r === `replace` ? $(null, ``, c) : Fn(null, ``, c), Q()),
    i && (u ? n(u) : window.scrollTo(0, 0)));
}
var Bn = {
  bfcacheId: `0`,
  push(e, t) {
    (m(e),
      !q &&
        y.startTransition(() => {
          zn(e, `push`, t?.scroll !== !1, !0);
        }));
  },
  replace(e, t) {
    (m(e),
      !q &&
        y.startTransition(() => {
          zn(e, `replace`, t?.scroll !== !1, !0);
        }));
  },
  back() {
    q || window.history.back();
  },
  forward() {
    q || window.history.forward();
  },
  refresh() {
    if (q) return;
    let e = window.__VINEXT_CLEAR_NAV_CACHES__;
    typeof e == `function` && e();
    let t = window.__VINEXT_RSC_NAVIGATE__;
    typeof t == `function` &&
      y.startTransition(() => {
        t(window.location.href, 0, `refresh`, void 0, void 0, !0);
      });
  },
  prefetch(e, n) {
    (m(e),
      !q &&
        (async () => {
          let r = e;
          if (o(e)) {
            let t = a(e, ``);
            if (t == null) return;
            r = t;
          }
          let i = t(r, window.location.href, ``),
            s = Zt(),
            c = gn(),
            u = kt({ interceptionContext: s });
          c && u.set(l, c);
          let d = await jt(i, u),
            f = N.encodeCacheKey(d, s),
            p = Y();
          if (p.has(f)) {
            on(f, n?.onInvalidate);
            return;
          }
          (p.add(f),
            dn(d, fetch(d, { headers: u, credentials: `include`, priority: `low` }), s, c, n));
        })().catch((e) => {
          console.error(`[vinext] RSC prefetch setup error:`, e);
        }));
  },
};
function Vn() {
  if (!V || typeof y.useContext != `function`)
    throw Error(`invariant expected app router to be mounted`);
  let e = y.useContext(V);
  if (e === null) throw Error(`invariant expected app router to be mounted`);
  return e;
}
var Hn = `NEXT_HTTP_ERROR_FALLBACK`,
  Un = class extends Error {
    digest;
    constructor(e, t) {
      (super(e), (this.digest = t));
    }
  };
function Wn() {
  throw new Un(`NEXT_NOT_FOUND`, `${Hn};404`);
}
function Gn(e) {
  return !e || typeof e != `object` || !(`digest` in e) || typeof e.digest != `string`
    ? !1
    : e.digest.startsWith(`NEXT_REDIRECT;`);
}
if (!q) {
  let e = Z();
  e &&
    !e.patchInstalled &&
    ((e.patchInstalled = !0),
    window.addEventListener(`popstate`, (e) => {
      typeof window.__VINEXT_RSC_NAVIGATE__ != `function` && (Q(), Rn(e.state));
    }),
    (window.history.pushState = function (t, n, r) {
      (e.originalPushState.call(window.history, ot(t, window.history.state), n, r),
        e.suppressUrlNotifyCount === 0 && Q());
    }),
    (window.history.replaceState = function (t, n, r) {
      (e.originalReplaceState.call(window.history, ot(t, window.history.state), n, r),
        e.suppressUrlNotifyCount === 0 && Q());
    }));
}
export {
  _e as $,
  V as A,
  it as B,
  En as C,
  jn as D,
  On as E,
  vt as F,
  nt as G,
  lt as H,
  yt as I,
  E as J,
  rt as K,
  Dt as L,
  kt as M,
  jt as N,
  Vn as O,
  gt as P,
  he as Q,
  Ot as R,
  un as S,
  Yt as T,
  ut as U,
  st as V,
  tt as W,
  D as X,
  Oe as Y,
  ye as Z,
  Wn as _,
  fn as a,
  ee as at,
  Dn as b,
  Sn as c,
  u as ct,
  zt as d,
  ge as et,
  gn as f,
  zn as g,
  Gn as h,
  Q as i,
  te as it,
  R as j,
  Lt as k,
  Zt as l,
  l as lt,
  sn as m,
  Bn as n,
  ue as nt,
  cn as o,
  p as ot,
  Y as p,
  N as q,
  kn as r,
  de as rt,
  wn as s,
  f as st,
  bn as t,
  h as tt,
  Qt as u,
  c as ut,
  dn as v,
  hn as w,
  $ as x,
  Fn as y,
  at as z,
};
