const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/spotify-card-BkVic7Hs.js",
      "assets/rolldown-runtime-S-ySWqyJ.js",
      "assets/framework-BCcj1Z2J.js",
      "assets/theme-provider-DGZq-utN.js",
      "assets/layout-segment-context-C54q6Ylb.js",
      "assets/navigation-BLfHYVYK.js",
      "assets/url-utils-BW4074SE.js",
      "assets/link-D_sA8jQG.js",
      "assets/query-DZOG5WwV.js",
      "assets/theme-toggle-BcMZpoyr.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, r as t, t as n } from "./rolldown-runtime-S-ySWqyJ.js";
import { d as r, l as i } from "./url-utils-BW4074SE.js";
import {
  $ as a,
  A as o,
  B as s,
  C as c,
  D as l,
  E as u,
  F as d,
  G as f,
  H as p,
  I as m,
  J as h,
  K as g,
  L as _,
  M as v,
  N as ee,
  O as y,
  P as b,
  Q as x,
  R as S,
  S as C,
  T as w,
  U as T,
  V as E,
  W as D,
  X as O,
  Y as k,
  Z as A,
  _ as j,
  a as M,
  at as N,
  b as P,
  c as F,
  ct as te,
  et as I,
  h as L,
  i as R,
  it as ne,
  j as re,
  k as z,
  l as ie,
  lt as ae,
  m as oe,
  n as se,
  nt as B,
  o as ce,
  ot as le,
  q as V,
  r as ue,
  rt as de,
  s as fe,
  st as pe,
  t as me,
  tt as he,
  u as ge,
  ut as _e,
  w as ve,
  x as H,
  y as ye,
  z as be,
} from "./navigation-BLfHYVYK.js";
import { i as xe, n as Se, r as Ce, t as we } from "./framework-BCcj1Z2J.js";
var U = `0.0.51`;
function Te(e) {
  if (typeof window > `u`) return;
  let t = window.next;
  if (t) {
    (e.version !== void 0 && (t.version = e.version),
      e.appDir !== void 0 && (t.appDir = e.appDir),
      e.router !== void 0 && (t.router = e.router),
      e.__pendingUrl !== void 0 && (t.__pendingUrl = e.__pendingUrl),
      e.__internal_src_page !== void 0 && (t.__internal_src_page = e.__internal_src_page));
    return;
  }
  window.next = { version: e.version ?? U, ...e };
}
function Ee(e) {
  return !e || typeof e != `object` || !(`digest` in e) ? null : String(e.digest);
}
function De(e) {
  let t = Ee(e);
  return t === null
    ? !1
    : t === `NEXT_NOT_FOUND` ||
        t.startsWith(`NEXT_HTTP_ERROR_FALLBACK;`) ||
        t.startsWith(`NEXT_REDIRECT;`);
}
var Oe = e({
    DevRecoveryBoundary: () => Ge,
    ErrorBoundary: () => Re,
    ErrorBoundaryInner: () => Le,
    ForbiddenBoundary: () => He,
    ForbiddenBoundaryInner: () => Ve,
    NotFoundBoundary: () => Be,
    RedirectBoundary: () => Ie,
    RedirectErrorBoundary: () => Fe,
    UnauthorizedBoundary: () => We,
    UnauthorizedBoundaryInner: () => Ue,
  }),
  W = t(xe(), 1),
  G = Ce();
function ke(e) {
  return e == null || e === `` ? null : e;
}
function K(e) {
  return { previousPathname: e.pathname, previousResetKey: ke(e.resetKey) };
}
function Ae(e, t) {
  let n = ke(e.previousResetKey),
    r = ke(t.previousResetKey);
  return n !== null || r !== null ? n !== r : e.previousPathname !== t.previousPathname;
}
function je(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Me(e) {
  let t = e.digest.split(`;`),
    n = t.length >= 5 ? t.slice(2, -2).join(`;`) : t[2];
  return n ? je(n) : null;
}
function Ne(e) {
  return e.digest.split(`;`, 2)[1] === `push` ? `push` : `replace`;
}
function Pe({ redirect: e, redirectType: t }) {
  let n = y();
  return (
    W.useEffect(() => {
      W.startTransition(() => {
        t === `push` ? n.push(e) : n.replace(e);
      });
    }, [e, t, n]),
    null
  );
}
var Fe = class extends W.Component {
  constructor(e) {
    (super(e), (this.state = { redirect: null, redirectType: null }));
  }
  static getDerivedStateFromError(e) {
    if (L(e)) {
      let t = e;
      if (t.handled) return { redirect: null, redirectType: null };
      let n = Me(t);
      if (n === null) throw e;
      return { redirect: n, redirectType: Ne(t) };
    }
    throw e;
  }
  render() {
    let { redirect: e, redirectType: t } = this.state;
    return e !== null && t !== null
      ? (0, G.jsx)(Pe, { redirect: e, redirectType: t })
      : this.props.children;
  }
};
function Ie({ children: e }) {
  return (0, G.jsx)(Fe, { children: e });
}
var Le = class extends W.Component {
  constructor(e) {
    (super(e), (this.state = { error: null, ...K(e) }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = K(e);
    return t.error && Ae(n, t) ? { error: null, ...n } : { error: t.error, ...n };
  }
  static getDerivedStateFromError(e) {
    if (De(e)) throw e;
    return { error: { thrownValue: e } };
  }
  reset = () => {
    this.setState({ error: null });
  };
  render() {
    if (this.state.error) {
      let e = this.props.fallback;
      return (0, G.jsx)(e, { error: this.state.error.thrownValue, reset: this.reset });
    }
    return this.props.children;
  }
};
function Re({ fallback: e, children: t, resetKey: n }) {
  return (0, G.jsx)(Le, { pathname: l(), resetKey: n, fallback: e, children: t });
}
var ze = class extends W.Component {
  constructor(e) {
    (super(e), (this.state = { notFound: !1, ...K(e) }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = K(e);
    return t.notFound && Ae(n, t) ? { notFound: !1, ...n } : { notFound: t.notFound, ...n };
  }
  static getDerivedStateFromError(e) {
    if (e && typeof e == `object` && `digest` in e) {
      let t = String(e.digest);
      if (t === `NEXT_NOT_FOUND` || t === `NEXT_HTTP_ERROR_FALLBACK;404`) return { notFound: !0 };
    }
    throw e;
  }
  render() {
    return this.state.notFound ? this.props.fallback : this.props.children;
  }
};
function Be({ fallback: e, children: t, resetKey: n }) {
  return (0, G.jsx)(ze, { pathname: l(), resetKey: n, fallback: e, children: t });
}
var Ve = class extends W.Component {
  constructor(e) {
    (super(e), (this.state = { forbidden: !1, ...K(e) }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = K(e);
    return t.forbidden && Ae(n, t) ? { forbidden: !1, ...n } : { forbidden: t.forbidden, ...n };
  }
  static getDerivedStateFromError(e) {
    if (
      e &&
      typeof e == `object` &&
      `digest` in e &&
      String(e.digest) === `NEXT_HTTP_ERROR_FALLBACK;403`
    )
      return { forbidden: !0 };
    throw e;
  }
  render() {
    return this.state.forbidden ? this.props.fallback : this.props.children;
  }
};
function He({ fallback: e, children: t, resetKey: n }) {
  return (0, G.jsx)(Ve, { pathname: l(), resetKey: n, fallback: e, children: t });
}
var Ue = class extends W.Component {
  constructor(e) {
    (super(e), (this.state = { unauthorized: !1, ...K(e) }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = K(e);
    return t.unauthorized && Ae(n, t)
      ? { unauthorized: !1, ...n }
      : { unauthorized: t.unauthorized, ...n };
  }
  static getDerivedStateFromError(e) {
    if (
      e &&
      typeof e == `object` &&
      `digest` in e &&
      String(e.digest) === `NEXT_HTTP_ERROR_FALLBACK;401`
    )
      return { unauthorized: !0 };
    throw e;
  }
  render() {
    return this.state.unauthorized ? this.props.fallback : this.props.children;
  }
};
function We({ fallback: e, children: t, resetKey: n }) {
  return (0, G.jsx)(Ue, { pathname: l(), resetKey: n, fallback: e, children: t });
}
var Ge = class extends W.Component {
    constructor(e) {
      (super(e), (this.state = { error: null, previousResetKey: e.resetKey }));
    }
    static getDerivedStateFromProps(e, t) {
      return e.resetKey === t.previousResetKey
        ? null
        : { error: null, previousResetKey: e.resetKey };
    }
    static getDerivedStateFromError(e) {
      if (De(e)) throw e;
      return { error: { thrownValue: e } };
    }
    componentDidCatch() {
      this.props.onCatch?.(this.props.resetKey);
    }
    render() {
      return this.state.error ? null : this.props.children;
    }
  },
  Ke = e({
    Children: () => at,
    ChildrenContext: () => Ye,
    ElementsContext: () => Je,
    ParallelSlot: () => ot,
    ParallelSlotsContext: () => Xe,
    Slot: () => it,
    UNMATCHED_SLOT: () => h,
    mergeElements: () => rt,
  }),
  qe = Object.freeze({}),
  Je = W.createContext(qe),
  Ye = W.createContext(null),
  Xe = W.createContext(null);
function Ze(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return !1;
  let t = Object.values(e);
  return t.length > 0 && t.every((e) => e === `s` || e === `d`);
}
function Qe(e) {
  return typeof e != `object` || !e || Array.isArray(e)
    ? !1
    : `schemaVersion` in e &&
        `appElementsSchemaVersion` in e &&
        `rscPayloadSchemaVersion` in e &&
        `graphVersion` in e &&
        `deploymentVersion` in e &&
        `rootBoundaryId` in e &&
        `renderEpoch` in e;
}
function $e(e) {
  return typeof e != `object` || !e || Array.isArray(e)
    ? !1
    : `ownerLayoutId` in e && `slotId` in e && `state` in e;
}
function et(e) {
  return Array.isArray(e) && e.length > 0 && e.every($e);
}
function tt(e) {
  return typeof e != `object` || !e || Array.isArray(e)
    ? !1
    : `sourceMatchedUrl` in e &&
        typeof e.sourceMatchedUrl == `string` &&
        `sourceRouteId` in e &&
        typeof e.sourceRouteId == `string` &&
        `slotId` in e &&
        typeof e.slotId == `string` &&
        `targetMatchedUrl` in e &&
        typeof e.targetMatchedUrl == `string` &&
        `targetRouteId` in e &&
        typeof e.targetRouteId == `string`;
}
function nt(e) {
  return Ze(e) || Qe(e) || tt(e) || et(e);
}
function rt(e, t, n = {}) {
  let r = typeof n == `boolean` ? n : (n.clearAbsentSlots ?? !1),
    i = typeof n == `boolean` ? !n : (n.preserveAbsentSlots ?? !0),
    a = typeof n == `boolean` ? [] : (n.preserveElementIds ?? []),
    o = typeof n == `boolean` ? [] : (n.preservePreviousSlotIds ?? []),
    s = { ...t };
  for (let t of a)
    if (!Object.hasOwn(s, t) && Object.hasOwn(e, t)) {
      let n = e[t];
      n !== void 0 && (s[t] = n);
    }
  let c = new Set([...Object.keys(e), ...Object.keys(t)].filter((e) => V.isSlotId(e)));
  if (r) for (let e of c) Object.hasOwn(t, e) || delete s[e];
  else if (i) {
    for (let t of c)
      if (!Object.hasOwn(s, t) && Object.hasOwn(e, t)) {
        let n = e[t];
        n !== void 0 && (s[t] = n);
      }
  }
  for (let t of o) {
    if (!V.isSlotId(t) || !Object.hasOwn(e, t)) continue;
    let n = e[t];
    n !== void 0 && n !== h && (s[t] = n);
  }
  return s;
}
function it({ id: e, children: t, parallelSlots: n }) {
  let r = W.useContext(Je);
  if (!Object.hasOwn(r, e)) return null;
  let i = r[e];
  return nt(i)
    ? null
    : (i === h && j(),
      (0, G.jsx)(Xe.Provider, {
        value: n ?? null,
        children: (0, G.jsx)(Ye.Provider, { value: t ?? null, children: i }),
      }));
}
function at() {
  return W.useContext(Ye);
}
function ot({ name: e }) {
  return W.useContext(Xe)?.[e] ?? null;
}
I(x(e({})));
var st = 1,
  ct = 2;
function lt(e) {
  return !!e && typeof e == `object` && (`returnValue` in e || `root` in e);
}
function ut(e, t = `none`) {
  return t !== `none` || !lt(e) ? !0 : e.root !== void 0;
}
function dt(e) {
  let t = e.get(N);
  if (!t) return `none`;
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    return `none`;
  }
  switch (n) {
    case st:
      return `staticAndDynamic`;
    case ct:
      return `dynamicOnly`;
    default:
      return `none`;
  }
}
function ft(e) {
  return e !== `none`;
}
function pt(e) {
  let t = e.origin === void 0 ? new URL(e.href) : new URL(e.href, e.origin);
  return {
    href: t.href,
    navigationId: e.navigationId,
    path: t.pathname + t.search,
    routerState: e.routerState,
  };
}
function mt(e) {
  let t = e.queueTask ?? queueMicrotask,
    n = 0,
    r = !1,
    i = !1;
  function a() {
    ((r = !1), !(!i || n > 0) && ((i = !1), e.runRefresh()));
  }
  function o() {
    r || ((r = !0), t(a));
  }
  return {
    markNavigationSettled() {
      (n > 0 && --n, o());
    },
    markNavigationStart() {
      n += 1;
    },
    schedule() {
      ((i = !0), o());
    },
  };
}
var ht = new TextEncoder();
function gt(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
function _t(e) {
  return typeof e == `string` ? ht.encode(e) : gt(e[1]);
}
function vt() {
  return globalThis;
}
function yt() {
  return Error(
    `The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.`,
  );
}
function bt(e) {
  return new ReadableStream({
    start(t) {
      for (let n of e) t.enqueue(_t(n));
      t.close();
    },
  });
}
function xt() {
  return new ReadableStream({
    start(e) {
      let t = vt(),
        n = t.__VINEXT_RSC_CHUNKS__ ?? [];
      for (let t of n) e.enqueue(_t(t));
      if (t.__VINEXT_RSC_DONE__) {
        e.close();
        return;
      }
      let r = !1,
        i,
        a = () => {
          let e = i;
          ((i = void 0), e?.());
        },
        o = () => {
          r || ((r = !0), a(), e.close());
        },
        s = () => {
          r || ((r = !0), a(), e.error(yt()));
        },
        c = (t.__VINEXT_RSC_CHUNKS__ ??= []);
      if (
        ((c.push = function (...n) {
          let i = Array.prototype.push.apply(this, n);
          if (r) return i;
          for (let t of n) e.enqueue(_t(t));
          return (t.__VINEXT_RSC_DONE__ && o(), i);
        }),
        typeof document < `u`)
      )
        if (document.readyState === `loading`)
          (document.addEventListener(`DOMContentLoaded`, s),
            (i = () => document.removeEventListener(`DOMContentLoaded`, s)));
        else {
          let e = setTimeout(s);
          i = () => clearTimeout(e);
        }
    },
  });
}
var St = /([/#?\\]|%(2f|23|3f|5c))/gi;
function Ct(e) {
  return e.replace(St, (e) => encodeURIComponent(e));
}
function wt(e) {
  try {
    return Ct(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Tt(e) {
  return e
    .split(`/`)
    .map((e) => wt(e))
    .join(`/`);
}
function Et(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Dt(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    Array.isArray(n) ? (e[t] = n.map(Et)) : (e[t] = Et(n));
  }
}
var q = {
    commitCurrent: `NC_COMMIT`,
    interceptedCommitCurrent: `NC_INTERCEPT_COMMIT`,
    interceptedRejectedIncompatibleRoot: `NC_INTERCEPT_REJECT_ROOT`,
    interceptedRejectedMissingProof: `NC_INTERCEPT_REJECT_MISSING_PROOF`,
    interceptedRejectedMissingSlotProof: `NC_INTERCEPT_REJECT_SLOT`,
    interceptedRejectedTargetMismatch: `NC_INTERCEPT_REJECT_TARGET`,
    interceptedRejectedUndeclaredTopology: `NC_INTERCEPT_REJECT_GRAPH`,
    interceptedRejectedUnknownSource: `NC_INTERCEPT_REJECT_SOURCE`,
    prefetchOnly: `NC_PREFETCH_ONLY`,
    requestWork: `NC_REQUEST`,
    rootBoundaryChanged: `NC_ROOT`,
    rootBoundaryUnknown: `NC_ROOT_UNKNOWN`,
    staleOperation: `NC_STALE`,
  },
  Ot = {
    hardNavigate: `NT_HARD_NAVIGATE`,
    noCommit: `NT_NO_COMMIT`,
    visibleCommit: `NT_VISIBLE_COMMIT`,
  };
function kt(e) {
  return {
    ...(e.activeNavigationId === void 0 ? {} : { activeNavigationId: e.activeNavigationId }),
    currentRootLayoutTreePath: e.currentRootLayoutTreePath,
    currentVisibleCommitVersion: e.currentVisibleCommitVersion,
    nextRootLayoutTreePath: e.nextRootLayoutTreePath,
    ...(e.startedNavigationId === void 0 ? {} : { startedNavigationId: e.startedNavigationId }),
    startedVisibleCommitVersion: e.startedVisibleCommitVersion,
  };
}
function At(e, t = {}) {
  return { code: e, fields: { ...t } };
}
function J(e, t = {}) {
  return { schemaVersion: 0, entries: [At(e, t)] };
}
function jt(e, t, n = {}) {
  return { schemaVersion: e.schemaVersion, entries: [At(t, n), ...e.entries] };
}
function Mt(e) {
  return e.startsWith(`[[...`) && e.endsWith(`]]`)
    ? `:${e.slice(5, -2)}*`
    : e.startsWith(`[...`) && e.endsWith(`]`)
      ? `:${e.slice(4, -1)}+`
      : e.startsWith(`[`) && e.endsWith(`]`)
        ? `:${e.slice(1, -1)}`
        : e;
}
function Nt(e) {
  return e.split(`/`).filter(Boolean).map(Mt);
}
function Pt(e, t) {
  let n = Object.create(null);
  function r(i, a) {
    if (a === t.length) return i === e.length;
    let o = t[a];
    if (o.startsWith(`:`) && (o.endsWith(`+`) || o.endsWith(`*`))) {
      let t = o.slice(1, -1),
        s = +!!o.endsWith(`+`);
      for (let o = i + s; o <= e.length; o++) {
        let s = e.slice(i, o);
        if ((s.length > 0 ? (n[t] = s) : delete n[t], r(o, a + 1))) return !0;
      }
      return (delete n[t], !1);
    }
    if (o.startsWith(`:`)) {
      if (i >= e.length) return !1;
      let t = o.slice(1);
      return ((n[t] = e[i]), r(i + 1, a + 1) ? !0 : (delete n[t], !1));
    }
    return i >= e.length || e[i] !== o ? !1 : r(i + 1, a + 1);
  }
  return r(0, 0) ? (Dt(n), n) : null;
}
function Ft(e, t) {
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t[r],
      a = r === t.length - 1;
    if (i.startsWith(`:`) && i.endsWith(`+`)) return a && e.length - n >= 1;
    if (i.startsWith(`:`) && i.endsWith(`*`)) return a;
    if (n >= e.length) return !1;
    if (i.startsWith(`:`)) {
      n++;
      continue;
    }
    if (e[n] !== i) return !1;
    n++;
  }
  return !0;
}
var It = `\0`;
function Lt(e) {
  let t = e.work.kind === `traverseFlight` ? { traverseDirection: e.work.direction } : {};
  return {
    kind: `requestWork`,
    token: e.state.nextOperationToken,
    work: e.work,
    trace: J(q.requestWork, { eventKind: e.eventKind, targetHref: Rt(e.work), ...t }),
  };
}
function Rt(e) {
  switch (e.kind) {
    case `flight`:
    case `prefetch`:
      return e.href;
    case `traverseFlight`:
      return null;
    default:
      throw Error(`[vinext] Unknown requested navigation work: ` + String(e));
  }
}
function zt(e) {
  return {
    layoutIds: e.layoutIds,
    rootBoundaryId: e.rootBoundaryId,
    rootLayoutTreePath: e.rootBoundaryId,
    slotBindings: e.slotBindings,
  };
}
function Bt(e) {
  let t = e.indexOf(It);
  return t === -1 ? e : e.slice(0, t);
}
function Vt(e) {
  try {
    return new URL(e, `https://vinext.local`).pathname;
  } catch {
    let [t = ``] = e.split(`#`),
      [n = ``] = t.split(`?`);
    return n === `` ? `/` : n;
  }
}
function Ht(e) {
  return Tt(Vt(e))
    .split(`/`)
    .filter((e) => e.length > 0);
}
function Ut(e, t) {
  let n = Ht(t);
  for (let t of e.segmentGraph.routes.values()) if (Pt(n, t.patternParts) !== null) return t;
  return null;
}
function Wt(e, t) {
  return Pt(Ht(t), e.patternParts) !== null;
}
function Gt(e) {
  let t = Bt(e.routeId),
    n = e.routeManifest.segmentGraph.routes.get(t);
  return n && Wt(n, e.matchedUrl) ? n : Ut(e.routeManifest, e.matchedUrl);
}
function Kt(e, t) {
  return t.interception === null
    ? Gt({ matchedUrl: t.matchedUrl, routeId: t.routeId, routeManifest: e })
    : Gt({
        matchedUrl: t.interception.sourceMatchedUrl,
        routeId: t.interception.sourceRouteId,
        routeManifest: e,
      });
}
function qt(e, t) {
  let n = [];
  for (let r of t.slotIds) {
    let i = e.segmentGraph.slotBindings.get(`${t.id}::${r}`);
    i && n.push({ ownerLayoutId: i.ownerLayoutId, slotId: i.slotId, state: i.state });
  }
  return n.sort((e, t) => k(e.slotId, t.slotId));
}
function Jt(e, t) {
  return t.rootBoundaryId === null
    ? null
    : (e.segmentGraph.rootBoundaries.get(t.rootBoundaryId)?.treePath ?? null);
}
function Yt(e) {
  let t = e.routeManifest === null ? null : Kt(e.routeManifest, e.snapshot);
  if (t === null || e.routeManifest === null) return zt(e.snapshot);
  let n = e.slotBindingSource === `manifestTarget` && e.snapshot.interception === null;
  return {
    layoutIds: t.layoutIds,
    rootBoundaryId: t.rootBoundaryId,
    rootLayoutTreePath: Jt(e.routeManifest, t),
    slotBindings: n ? qt(e.routeManifest, t) : e.snapshot.slotBindings,
  };
}
function Xt(e, t) {
  let n = Ht(t.sourceMatchedUrl),
    r = Ht(t.targetMatchedUrl),
    i = Gt({ matchedUrl: t.targetMatchedUrl, routeId: t.targetRouteId, routeManifest: e }),
    a = e.segmentGraph.interceptionsBySlotId.get(t.slotId) ?? [];
  for (let e of a)
    if (
      Ft(n, e.sourcePatternParts) &&
      Pt(r, e.targetPatternParts) !== null &&
      !(e.targetRouteId !== null && i?.id !== e.targetRouteId)
    )
      return e;
  return null;
}
function Zt(e) {
  return e.state.traceFields
    ? {
        ...e.state.traceFields,
        currentRootLayoutTreePath: e.currentRootLayoutTreePath,
        nextRootLayoutTreePath: e.nextRootLayoutTreePath,
      }
    : kt({
        currentRootLayoutTreePath: e.currentRootLayoutTreePath,
        currentVisibleCommitVersion: e.state.visibleCommitVersion,
        nextRootLayoutTreePath: e.nextRootLayoutTreePath,
        startedVisibleCommitVersion: e.event.token.baseVisibleCommitVersion,
      });
}
function Qt(e, t) {
  return e === null || t === null
    ? `rootBoundaryUnknownFallback`
    : e === t
      ? `currentRootBoundary`
      : `rootBoundaryChanged`;
}
function $t(e, t) {
  return en(zt(e), zt(t));
}
function en(e, t) {
  if (Qt(e.rootBoundaryId, t.rootBoundaryId) !== `currentRootBoundary`) return [];
  let n = [],
    r = Math.min(e.layoutIds.length, t.layoutIds.length);
  for (let i = 0; i < r; i++) {
    let r = e.layoutIds[i];
    if (r !== t.layoutIds[i]) break;
    n.push(r);
  }
  return n;
}
function tn(e, t) {
  return nn(e, $t(e, t));
}
function nn(e, t) {
  if (t.length === 0) return [];
  let n = new Set(t),
    r = [],
    i = new Set();
  for (let t of e.mountedParallelSlots)
    t.ownerLayoutId !== null &&
      n.has(t.ownerLayoutId) &&
      (i.has(t.slotId) || (r.push(t.slotId), i.add(t.slotId)));
  return r;
}
function rn(e, t) {
  let n = $t(e, t);
  return [...n, ...nn(e, n)];
}
function an(e) {
  return en(e.currentTopology, e.targetTopology);
}
function on(e) {
  if (e.lane === `traverse`) return [];
  let t = en(e.currentTopology, e.targetTopology);
  return t.length === 0
    ? []
    : sn({
        currentSlotBindings: e.currentTopology.slotBindings,
        preservedLayoutIds: t,
        targetSlotBindings: e.targetTopology.slotBindings,
      });
}
function sn(e) {
  let t = new Set(e.preservedLayoutIds),
    n = new Set();
  for (let t of e.currentSlotBindings) t.state !== `unmatched` && n.add(t.slotId);
  let r = [],
    i = new Set();
  for (let a of e.targetSlotBindings)
    a.ownerLayoutId !== null &&
      t.has(a.ownerLayoutId) &&
      a.state !== `active` &&
      n.has(a.slotId) &&
      (i.has(a.slotId) || (r.push(a.slotId), i.add(a.slotId)));
  return r.sort(k);
}
function cn(e) {
  return e.interception
    ? { matchedUrl: e.interception.sourceMatchedUrl, routeId: e.interception.sourceRouteId }
    : { matchedUrl: e.matchedUrl, routeId: e.routeId };
}
function ln(e) {
  return {
    kind: `hardNavigate`,
    reason: `interceptionProofRejected`,
    token: e.event.token,
    trace: J(e.reasonCode, e.traceFields),
    url: e.event.result.href,
  };
}
function un(e) {
  let t = e.targetSnapshot.interception;
  if (!t) return { kind: `rejected`, reasonCode: q.interceptedRejectedMissingProof };
  if (t.targetMatchedUrl !== e.targetSnapshot.matchedUrl)
    return { kind: `rejected`, reasonCode: q.interceptedRejectedTargetMismatch };
  let n = cn(e.currentSnapshot);
  if (t.sourceMatchedUrl !== n.matchedUrl || t.sourceRouteId !== n.routeId)
    return { kind: `rejected`, reasonCode: q.interceptedRejectedUnknownSource };
  let r = e.routeManifest === null ? null : Xt(e.routeManifest, t);
  if (e.routeManifest !== null && r === null)
    return { kind: `rejected`, reasonCode: q.interceptedRejectedUndeclaredTopology };
  let i = en(e.currentTopology, e.targetTopology);
  if (i.length === 0)
    return { kind: `rejected`, reasonCode: q.interceptedRejectedIncompatibleRoot };
  let a = new Set(i),
    o = e.targetTopology.slotBindings.find((e) => e.slotId === t.slotId);
  return !o || o.state !== `active` || o.ownerLayoutId === null || !a.has(o.ownerLayoutId)
    ? { kind: `rejected`, reasonCode: q.interceptedRejectedMissingSlotProof }
    : r !== null && o.ownerLayoutId !== r.ownerLayoutId
      ? { kind: `rejected`, reasonCode: q.interceptedRejectedUndeclaredTopology }
      : {
          kind: `approved`,
          preserveElementIds: i,
          preservePreviousSlotIds: sn({
            currentSlotBindings: e.currentTopology.slotBindings,
            preservedLayoutIds: i,
            targetSlotBindings: e.targetTopology.slotBindings,
          }).filter((e) => e !== t.slotId),
        };
}
function dn(e) {
  let t = e.event.result.targetSnapshot,
    n = Yt({
      routeManifest: e.routeManifest,
      slotBindingSource: `snapshot`,
      snapshot: e.state.visibleSnapshot,
    }),
    r = Yt({ routeManifest: e.routeManifest, slotBindingSource: `manifestTarget`, snapshot: t }),
    i = Zt({
      currentRootLayoutTreePath: n.rootLayoutTreePath,
      event: e.event,
      nextRootLayoutTreePath: r.rootLayoutTreePath,
      state: e.state,
    });
  if (e.event.token.lane === `prefetch`)
    return {
      kind: `noCommit`,
      reason: `prefetchOnly`,
      token: e.event.token,
      trace: J(q.prefetchOnly, i),
    };
  if (t.interception !== null) {
    let a = un({
      currentSnapshot: e.state.visibleSnapshot,
      currentTopology: n,
      routeManifest: e.routeManifest,
      targetSnapshot: t,
      targetTopology: r,
    });
    return a.kind === `rejected`
      ? ln({ event: e.event, reasonCode: a.reasonCode, traceFields: i })
      : {
          kind: `proposeCommit`,
          proposal: {
            preserveAbsentSlots: !1,
            preserveElementIds: a.preserveElementIds,
            preservePreviousSlotIds: a.preservePreviousSlotIds,
            reason: `interceptedCurrentRootBoundary`,
            targetSnapshot: t,
          },
          token: e.event.token,
          trace: J(q.interceptedCommitCurrent, i),
        };
  }
  let a = Qt(n.rootBoundaryId, r.rootBoundaryId);
  return a === `rootBoundaryChanged`
    ? {
        kind: `hardNavigate`,
        reason: `rootBoundaryChanged`,
        token: e.event.token,
        trace: J(q.rootBoundaryChanged, i),
        url: e.event.result.href,
      }
    : a === `rootBoundaryUnknownFallback`
      ? {
          kind: `proposeCommit`,
          proposal: {
            preserveAbsentSlots: !0,
            preserveElementIds: [],
            preservePreviousSlotIds: [],
            reason: `rootBoundaryUnknownFallback`,
            targetSnapshot: t,
          },
          token: e.event.token,
          trace: J(q.rootBoundaryUnknown, i),
        }
      : {
          kind: `proposeCommit`,
          proposal: {
            preserveAbsentSlots: !1,
            preserveElementIds: an({
              currentTopology: n,
              lane: e.event.token.lane,
              targetTopology: r,
            }),
            preservePreviousSlotIds: on({
              currentTopology: n,
              lane: e.event.token.lane,
              targetTopology: r,
            }),
            reason: `currentRootBoundary`,
            targetSnapshot: t,
          },
          token: e.event.token,
          trace: J(q.commitCurrent, i),
        };
}
function fn(e) {
  switch (e.event.kind) {
    case `navigate`:
      return Lt({
        eventKind: e.event.kind,
        state: e.state,
        work: { href: e.event.href, kind: `flight`, mode: e.event.mode },
      });
    case `refresh`:
      return Lt({
        eventKind: e.event.kind,
        state: e.state,
        work: { href: e.state.visibleSnapshot.displayUrl, kind: `flight`, mode: `refresh` },
      });
    case `traverse`:
      return Lt({
        eventKind: e.event.kind,
        state: e.state,
        work: {
          direction: e.event.direction,
          historyState: e.event.historyState,
          kind: `traverseFlight`,
        },
      });
    case `prefetch`:
      return Lt({
        eventKind: e.event.kind,
        state: e.state,
        work: { href: e.event.href, kind: `prefetch` },
      });
    case `flightResponseArrived`:
      return dn({ event: e.event, routeManifest: e.routeManifest, state: e.state });
    default: {
      let t = e.event;
      throw Error(`[vinext] Unknown navigation event: ` + String(t));
    }
  }
}
var pn = {
  classifyRootBoundaryTransition: Qt,
  plan: fn,
  resolveCurrentRootBoundaryElementPersistence: rn,
  resolveMountedParallelSlotPersistence: tn,
  resolveSameLayoutAncestorPersistence: $t,
};
function mn(e) {
  return {
    id: e.id,
    lane: e.lane,
    startedVisibleCommitVersion: e.startedVisibleCommitVersion,
    state: `pending`,
  };
}
function hn(e) {
  return A(Tt(e));
}
function gn(e) {
  if (e.interception !== null) return e.routeId;
  let t = V.parseElementKey(e.routeId);
  return t?.kind !== `route` || t.interceptionContext === null
    ? e.routeId
    : V.encodeRouteId(t.path, null);
}
function _n(e, t = ``) {
  return e === null ? null : r(new URL(e, `http://localhost`).pathname, t);
}
function vn(e) {
  let t = v();
  t.set(pe, e.actionId);
  let n = _n(e.previousNextUrl, e.basePath);
  n !== null && t.set(te, n);
  let r = f(e.elements);
  return (r !== null && t.set(ae, r), { headers: t });
}
function yn(e) {
  let t = bn(e);
  return e.startedNavigationId !== e.activeNavigationId ||
    e.pending.action.operation.startedVisibleCommitVersion !== e.currentState.visibleCommitVersion
    ? { disposition: `skip`, preserveElementIds: [], trace: J(q.staleOperation, t) }
    : On(
        Dn({
          currentState: e.currentState,
          pending: e.pending,
          routeManifest: e.routeManifest ?? null,
          targetHref: e.targetHref,
          traceFields: t,
        }),
      );
}
function bn(e) {
  return {
    ...kt({
      activeNavigationId: e.activeNavigationId,
      currentRootLayoutTreePath: e.currentState.rootLayoutTreePath,
      currentVisibleCommitVersion: e.currentState.visibleCommitVersion,
      nextRootLayoutTreePath: e.pending.rootLayoutTreePath,
      startedNavigationId: e.startedNavigationId,
      startedVisibleCommitVersion: e.pending.action.operation.startedVisibleCommitVersion,
    }),
    ...(e.targetHref === void 0 ? {} : { targetHref: e.targetHref }),
  };
}
function xn(e) {
  let t = e.searchParams.toString();
  return t === `` ? e.pathname : `${e.pathname}?${t}`;
}
function Sn(e) {
  let t = [];
  for (let n of D(e)) {
    let e = V.parseElementKey(n);
    e?.kind === `slot` && t.push({ ownerLayoutId: V.encodeLayoutId(e.treePath), slotId: n });
  }
  return t;
}
function Cn(e) {
  let t = xn(e.navigationSnapshot),
    n = hn(e.navigationSnapshot.pathname);
  return {
    displayUrl: t,
    interception: e.interception,
    interceptionContext: e.interceptionContext,
    layoutIds: e.layoutIds,
    matchedUrl: n,
    mountedParallelSlots: Sn(e.elements),
    rootBoundaryId: e.rootLayoutTreePath,
    routeId: gn({ interception: e.interception, routeId: e.routeId }),
    slotBindings: e.slotBindings,
  };
}
function wn(e) {
  let t = xn(e.action.navigationSnapshot),
    n = hn(e.action.navigationSnapshot.pathname);
  return {
    displayUrl: t,
    interception: e.action.interception,
    interceptionContext: e.action.interceptionContext,
    layoutIds: e.action.layoutIds,
    matchedUrl: n,
    mountedParallelSlots: Sn(e.action.elements),
    rootBoundaryId: e.rootLayoutTreePath,
    routeId: gn({ interception: e.action.interception, routeId: e.routeId }),
    slotBindings: e.action.slotBindings,
  };
}
function Tn(e) {
  return {
    baseVisibleCommitVersion: e.pending.action.operation.startedVisibleCommitVersion,
    deploymentVersion: null,
    graphVersion: e.routeManifest?.graphVersion ?? null,
    lane: e.pending.action.operation.lane,
    operationId: e.pending.action.operation.id,
    targetSnapshotFingerprint: En(e.targetSnapshot),
  };
}
function En(e) {
  return `${e.routeId}|root:${e.rootBoundaryId ?? `unknown`}`;
}
function Dn(e) {
  let t = wn(e.pending),
    n = Tn({ pending: e.pending, routeManifest: e.routeManifest, targetSnapshot: t });
  return pn.plan({
    routeManifest: e.routeManifest,
    state: {
      nextOperationToken: n,
      traceFields: e.traceFields,
      visibleCommitVersion: e.currentState.visibleCommitVersion,
      visibleSnapshot: Cn(e.currentState),
    },
    event: {
      kind: `flightResponseArrived`,
      result: { href: e.targetHref ?? t.displayUrl, targetSnapshot: t },
      token: n,
    },
  });
}
function On(e) {
  switch (e.kind) {
    case `proposeCommit`:
      return {
        disposition: `dispatch`,
        preserveAbsentSlots: e.proposal.preserveAbsentSlots,
        preserveElementIds: e.proposal.preserveElementIds,
        preservePreviousSlotIds: e.proposal.preservePreviousSlotIds,
        trace: e.trace,
      };
    case `hardNavigate`:
      return { disposition: `hard-navigate`, preserveElementIds: [], trace: e.trace };
    case `noCommit`:
      return { disposition: `skip`, preserveElementIds: [], trace: e.trace };
    case `requestWork`:
      throw Error(
        `[vinext] Root-boundary commit planning returned requestWork (${e.work.kind}); flightResponseArrived should never request work`,
      );
    default:
      throw Error(`[vinext] Unknown navigation decision: ` + String(e));
  }
}
async function kn(e) {
  let t = await e.nextElements,
    n = V.readMetadata(t),
    r = e.previousNextUrl === void 0 ? e.currentState.previousNextUrl : e.previousNextUrl,
    i = n.interception === null ? null : r;
  return {
    action: {
      elements: t,
      interception: n.interception,
      interceptionContext: n.interceptionContext,
      layoutIds: n.layoutIds,
      layoutFlags: n.layoutFlags,
      slotBindings: n.slotBindings,
      navigationSnapshot: e.navigationSnapshot,
      operation: mn({
        id: e.renderId,
        lane: e.operationLane,
        startedVisibleCommitVersion: e.currentState.visibleCommitVersion,
      }),
      previousNextUrl: i,
      renderId: e.renderId,
      rootLayoutTreePath: n.rootLayoutTreePath,
      routeId: n.routeId,
      type: e.type,
    },
    interception: n.interception,
    interceptionContext: n.interceptionContext,
    previousNextUrl: i,
    rootLayoutTreePath: n.rootLayoutTreePath,
    routeId: n.routeId,
  };
}
var An = Symbol(`ApprovedVisibleCommit`);
function jn(e, t) {
  return (Mn(t), In(e, t));
}
function Mn(e) {
  if (e[An] !== !0)
    throw Error(`[vinext] Visible router state mutation requires ApprovedVisibleCommit`);
}
function Nn(e, t) {
  return {
    id: e.id,
    lane: e.lane,
    startedVisibleCommitVersion: e.startedVisibleCommitVersion,
    state: `committed`,
    visibleCommitVersion: t,
  };
}
function Pn(e, t, n) {
  let r = e.visibleCommitVersion + 1;
  return { ...t, activeOperation: Nn(n, r), visibleCommitVersion: r };
}
function Fn(e, t, n, r) {
  if (r.length === 0) return t;
  let i = new Set(r),
    a = new Map();
  for (let t of e) i.has(t.slotId) && a.set(t.slotId, t);
  let o = [],
    s = new Set();
  for (let e of t) {
    let t = a.get(e.slotId);
    (o.push(t ?? e), s.add(e.slotId));
  }
  for (let e of r) {
    if (s.has(e)) continue;
    let t = a.get(e);
    t && o.push(t);
  }
  return O(o, { layoutIds: n });
}
function In(e, t) {
  let { action: n } = t;
  switch (n.type) {
    case `traverse`:
    case `navigate`:
      return Pn(
        e,
        {
          elements: rt(e.elements, n.elements, {
            clearAbsentSlots: n.type === `traverse`,
            preserveAbsentSlots: t.decision.preserveAbsentSlots,
            preserveElementIds: t.decision.preserveElementIds,
            preservePreviousSlotIds: t.decision.preservePreviousSlotIds,
          }),
          interception: n.interception,
          interceptionContext: n.interceptionContext,
          layoutFlags: zn(e.layoutFlags, n.layoutFlags, t.decision.preserveElementIds),
          layoutIds: n.layoutIds,
          navigationSnapshot: n.navigationSnapshot,
          previousNextUrl: n.previousNextUrl,
          renderId: n.renderId,
          rootLayoutTreePath: n.rootLayoutTreePath,
          routeId: n.routeId,
          slotBindings: Fn(
            e.slotBindings,
            n.slotBindings,
            n.layoutIds,
            t.decision.preservePreviousSlotIds,
          ),
        },
        n.operation,
      );
    case `replace`:
      return Pn(
        e,
        {
          elements: n.elements,
          interception: n.interception,
          interceptionContext: n.interceptionContext,
          layoutFlags: n.layoutFlags,
          layoutIds: n.layoutIds,
          navigationSnapshot: n.navigationSnapshot,
          previousNextUrl: n.previousNextUrl,
          renderId: n.renderId,
          rootLayoutTreePath: n.rootLayoutTreePath,
          routeId: n.routeId,
          slotBindings: n.slotBindings,
        },
        n.operation,
      );
    default: {
      let e = n.type;
      throw Error(`[vinext] Unknown router action: ` + String(e));
    }
  }
}
function Ln(e) {
  let t = yn(e);
  switch (t.disposition) {
    case `skip`:
      return { disposition: `no-commit`, trace: t.trace };
    case `hard-navigate`:
      return { disposition: `hard-navigate`, trace: t.trace };
    case `dispatch`:
      return Rn(t.trace, t.preserveElementIds, t.preserveAbsentSlots, t.preservePreviousSlotIds);
    default:
      throw Error(`[vinext] Unknown navigation commit disposition: ` + String(t));
  }
}
function Rn(e = J(q.commitCurrent), t = [], n = !1, r = []) {
  return {
    disposition: `commit`,
    preserveAbsentSlots: n,
    preserveElementIds: [...t],
    preservePreviousSlotIds: [...r],
    trace: e,
  };
}
function zn(e, t, n) {
  let r = { ...t };
  for (let t of n) {
    if (Object.hasOwn(r, t)) continue;
    let n = e[t];
    n && (r[t] = n);
  }
  return r;
}
function Bn(e) {
  return {
    [An]: !0,
    action: e.pending.action,
    decision: e.decision,
    interception: e.pending.interception,
    interceptionContext: e.pending.interceptionContext,
    previousNextUrl: e.pending.previousNextUrl,
    rootLayoutTreePath: e.pending.rootLayoutTreePath,
    routeId: e.pending.routeId,
  };
}
function Vn(e) {
  return {
    operationLane: e.action.operation.lane,
    pendingOperationId: e.action.operation.id,
    startedVisibleCommitVersion: e.action.operation.startedVisibleCommitVersion,
  };
}
function Hn(e, t, n) {
  return jt(e, t, Vn(n));
}
function Un(e, t) {
  switch (e.disposition) {
    case `commit`:
      return { ...e, trace: Hn(e.trace, Ot.visibleCommit, t) };
    case `hard-navigate`:
      return { ...e, trace: Hn(e.trace, Ot.hardNavigate, t) };
    case `no-commit`:
      return { ...e, trace: Hn(e.trace, Ot.noCommit, t) };
    default:
      throw Error(`[vinext] Unknown commit decision: ` + String(e));
  }
}
function Wn(e) {
  if (e.action.operation.lane !== `hmr`)
    throw Error(`[vinext] HMR visible commit approval requires an HMR pending operation`);
  let t = Un(Rn(), e);
  if (t.disposition !== `commit`)
    throw Error(`[vinext] HMR visible commit approval did not produce a commit decision`);
  return Bn({ decision: t, pending: e });
}
function Gn(e) {
  let t = Un(
    Ln({
      activeNavigationId: e.activeNavigationId,
      currentState: e.currentState,
      pending: e.pending,
      routeManifest: e.routeManifest ?? null,
      startedNavigationId: e.startedNavigationId,
      targetHref: e.targetHref,
    }),
    e.pending,
  );
  switch (t.disposition) {
    case `commit`:
      return { approvedCommit: Bn({ decision: t, pending: e.pending }), decision: t };
    case `hard-navigate`:
    case `no-commit`:
      return { approvedCommit: null, decision: t };
    default:
      throw Error(`[vinext] Unknown commit decision: ` + String(t));
  }
}
async function Kn(e) {
  let t = await kn({
      currentState: e.currentState,
      nextElements: e.nextElements,
      navigationSnapshot: e.navigationSnapshot,
      operationLane: e.operationLane,
      previousNextUrl: e.previousNextUrl,
      renderId: e.renderId,
      type: e.type,
    }),
    n = e.getCurrentStateForApproval?.() ?? e.currentState,
    r = Gn({
      activeNavigationId: e.getActiveNavigationId?.() ?? e.activeNavigationId,
      currentState: n,
      pending: t,
      routeManifest: e.routeManifest ?? null,
      startedNavigationId: e.startedNavigationId,
      targetHref: e.targetHref,
    });
  return {
    approvedCommit: r.approvedCommit,
    decision: r.decision,
    pending: t,
    trace: r.decision.trace,
  };
}
var qn = `__vinext_hard_navigation_target__`;
function Jn(e) {
  try {
    return new URL(e, window.location.href).href;
  } catch {
    return e;
  }
}
function Yn() {
  try {
    return window.sessionStorage.getItem(qn);
  } catch {
    return null;
  }
}
function Xn(e) {
  try {
    return (window.sessionStorage.setItem(qn, e), window.sessionStorage.getItem(qn) === e);
  } catch {
    return !1;
  }
}
function Zn() {
  try {
    window.sessionStorage.removeItem(qn);
  } catch {}
}
function Qn(e, t = `assign`) {
  let n = Jn(e),
    r = Jn(window.location.href);
  return Yn() === n && r === n
    ? (Zn(),
      console.error(
        `[vinext] Prevented repeated hard navigation to ${n}; leaving the current document in place to avoid a reload loop.`,
      ),
      !1)
    : !Xn(n) && r === n
      ? (console.error(
          `[vinext] Hard navigation to ${n} requires a reload-loop guard, but sessionStorage is unavailable; leaving the current document in place.`,
        ),
        !1)
      : (t === `replace` ? window.location.replace(e) : window.location.assign(e), !0);
}
function $n(e = {}) {
  let t = e.commitClientNavigationState ?? R,
    n = e.performHardNavigation ?? Qn,
    r = e.getRouteManifest ?? (() => null),
    i = e.syncHistoryStatePreviousNextUrl ?? (() => {}),
    a = 0,
    o = 0,
    s = new Map(),
    c = new Map(),
    l = null,
    u = null,
    d = null,
    f = null,
    p = null,
    m = !1;
  function h() {
    if (!l) throw Error(`[vinext] Browser router state setter is not initialized`);
    return l;
  }
  function g() {
    if (!u) throw Error(`[vinext] Browser router state is not initialized`);
    return u.current;
  }
  function _() {
    return u || m
      ? Promise.resolve()
      : ((p ||= new Promise((e) => {
          f = e;
        })),
        p);
  }
  function v() {
    m = !0;
    let e = f;
    ((f = null), (p = null), e?.());
  }
  function ee() {
    return ((o += 1), o);
  }
  function y() {
    return o;
  }
  function b() {
    return ((a += 1), a);
  }
  function x() {
    return u !== null;
  }
  function S(e) {
    return e === o;
  }
  function C() {
    let e = h();
    d && !d.settled && ((d.settled = !0), d.resolve(g()));
    let t,
      n = new Promise((e) => {
        t = e;
      });
    if (!t) throw Error(`[vinext] Failed to initialize browser router promise`);
    let r = { promise: n, resolve: t, settled: !1 };
    return ((d = r), e(n), r);
  }
  function w(e) {
    !e || e.settled || ((e.settled = !0), e.resolve(g()), d === e && (d = null));
  }
  function T(e, t) {
    (w(t), S(e) && ue(e));
  }
  function E(e, t) {
    !e || e.settled || ((e.settled = !0), e.resolve(jn(g(), t)), d === e && (d = null));
  }
  function D(e, t) {
    t && c.set(e, t);
  }
  function O(e) {
    for (let [n, r] of c)
      n > e || (c.delete(n), n === e ? r() : t(void 0, { releaseSnapshot: !0 }));
  }
  function k(e) {
    for (let [t, n] of s) t > e || (s.delete(t), n());
  }
  async function A(e, t) {
    if (!x()) return;
    let n = await kn({
      currentState: g(),
      nextElements: e,
      navigationSnapshot: t,
      operationLane: `hmr`,
      renderId: b(),
      type: `replace`,
    });
    x() && N(Wn(n));
  }
  function j({ renderId: e, children: t }) {
    return (
      (0, W.useLayoutEffect)(() => {
        O(e);
        let t = requestAnimationFrame(() => {
          k(e);
        });
        return () => {
          (cancelAnimationFrame(t), k(e));
        };
      }, [e]),
      t
    );
  }
  function M(e, t) {
    let n = h();
    if (t) {
      E(t, e);
      return;
    }
    (0, W.startTransition)(() => {
      n(jn(g(), e));
    });
  }
  function N(e) {
    h()(jn(g(), e));
  }
  function P(e) {
    ft(e?.revalidation ?? `none`) && e?.onDiscardedRevalidation?.();
  }
  async function F(e) {
    let i = b(),
      a,
      l = new Promise((e) => {
        ((a = e), s.set(i, e));
      }),
      u = !1;
    try {
      let t = await kn({
          currentState: g(),
          nextElements: e.nextElements,
          navigationSnapshot: e.navigationSnapshot,
          operationLane: e.operationLane,
          previousNextUrl: e.previousNextUrl,
          renderId: i,
          type: e.actionType,
        }),
        c = Gn({
          activeNavigationId: o,
          currentState: g(),
          pending: t,
          routeManifest: r(),
          startedNavigationId: e.navId,
          targetHref: e.targetHref,
        });
      if (c.decision.disposition === `no-commit`)
        return (w(e.pendingRouterState), s.delete(i), a?.(), `no-commit`);
      if (c.decision.disposition === `hard-navigate`)
        return (
          w(e.pendingRouterState), s.delete(i), n(e.targetHref) ? `hard-navigate` : `no-commit`
        );
      let l = c.approvedCommit;
      if (l === null) throw Error(`[vinext] Commit decision did not approve a visible commit`);
      (D(
        i,
        e.createNavigationCommitEffect({
          href: e.targetHref,
          historyUpdateMode: e.historyUpdateMode,
          navId: e.navId,
          params: e.params,
          previousNextUrl: l.previousNextUrl,
          targetHistoryIndex: e.targetHistoryIndex,
        }),
      ),
        me(),
        (u = !0),
        M(l, e.pendingRouterState));
    } catch (n) {
      throw (c.delete(i), s.delete(i), u && t(e.navId), w(e.pendingRouterState), a?.(), n);
    }
    return l.then(() => `committed`);
  }
  async function te(e, t, a, s, c) {
    let l = s ?? g(),
      u = c?.startedNavigationId ?? o,
      d = c?.targetHref ?? window.location.href,
      {
        approvedCommit: f,
        decision: p,
        pending: m,
        trace: h,
      } = await Kn({
        activeNavigationId: o,
        currentState: l,
        getActiveNavigationId: () => o,
        getCurrentStateForApproval: g,
        navigationSnapshot: t,
        nextElements: e,
        renderId: b(),
        operationLane: `server-action`,
        startedNavigationId: u,
        routeManifest: r(),
        targetHref: d,
        type: `navigate`,
      });
    if (p.disposition === `hard-navigate`) {
      n(d);
      return;
    }
    if (f) {
      let e = Gn({
        activeNavigationId: o,
        currentState: g(),
        pending: m,
        routeManifest: r(),
        startedNavigationId: u,
        targetHref: d,
      });
      if (e.decision.disposition === `hard-navigate`) {
        n(d);
        return;
      }
      e.approvedCommit ? (N(e.approvedCommit), i(e.approvedCommit.previousNextUrl)) : P(c);
    } else p.disposition === `no-commit` && P(c);
    if (a) {
      if (!a.ok) throw a.data;
      return a.data;
    }
  }
  function I(e, t) {
    return (
      (l = e),
      (u = t),
      v(),
      () => {
        (l === e && (l = null), u === t && ((u = null), (m = !1)));
      }
    );
  }
  return {
    beginNavigation: ee,
    getActiveNavigationId: y,
    hasBrowserRouterState: x,
    getBrowserRouterState: g,
    isCurrentNavigation: S,
    waitForBrowserRouterStateReady: _,
    attachBrowserRouterState: I,
    beginPendingBrowserRouterState: C,
    finalizeNavigation: T,
    renderNavigationPayload: F,
    commitSameUrlNavigatePayload: te,
    hmrReplaceTree: A,
    drainPrePaintEffects: O,
    NavigationCommitSignal: j,
  };
}
var er = `__VINEXT_RSC_FORM_STATE__`;
function tr(e) {
  let t = e.__VINEXT_RSC_FORM_STATE__ ?? null;
  return (delete e[er], t);
}
function nr(e) {
  let t = { formState: e.formState, onUncaughtError: e.onUncaughtError };
  return e.onCaughtError ? { ...t, onCaughtError: e.onCaughtError } : t;
}
function rr(e) {
  let t;
  if (
    (e.startTransition(() => {
      t = e.hydrateRoot(e.container, e.children, e.options);
    }),
    t === void 0)
  )
    throw Error(`[vinext] React.startTransition did not synchronously start hydration`);
  return t;
}
function ir(e) {
  return (t) => {
    e.notifyAppRouterTransitionStart(window.location.href);
    let n = e.getNavigate()?.(window.location.href, 0, `traverse`) ?? Promise.resolve(),
      r = e.getActiveNavigationId();
    (e.setPendingNavigation(n),
      n.finally(() => {
        (e.isCurrentNavigation(r) && e.restorePopstateScrollPosition(t.state),
          e.getPendingNavigation() === n && e.setPendingNavigation(null));
      }));
  };
}
function ar(e) {
  return (t, n) => {
    (console.error(t),
      n?.componentStack &&
        console.error(
          `The above error occurred in a React component:
` + n.componentStack,
        ));
    let r = e();
    r !== null && window.location.assign(r);
  };
}
var or = we(),
  sr = `https://nextjs.org/docs/messages/failed-to-find-server-action`;
function cr(e) {
  return `Server Action "${e}" was not found on the server. \nRead more: ${sr}`;
}
function lr(e) {
  return e.headers.get(le) === `1`;
}
function ur(e, t) {
  if (lr(e)) throw new z(cr(t));
}
var dr = 10;
function fr(e, t) {
  let n = new URL(e, t);
  return (_(n), `${S(n.pathname)}${n.search}${n.hash}`);
}
function pr(e) {
  let t = new URL(e.responseUrl, e.origin);
  if (t.origin !== e.origin)
    return {
      href: t.href,
      kind: `terminal-hard-navigation`,
      reason: `externalRedirect`,
      redirectDepth: e.redirectDepth,
    };
  let n = d(t.href, e.currentHref, e.origin);
  if (n === fr(e.currentHref, e.origin)) return { kind: `no-redirect` };
  let r = e.maxRedirectDepth ?? dr;
  return e.redirectDepth >= r
    ? {
        href: n,
        kind: `terminal-hard-navigation`,
        reason: `maxRedirectsExceeded`,
        redirectDepth: e.redirectDepth,
      }
    : {
        href: n,
        historyUpdateMode: e.historyUpdateMode,
        kind: `follow`,
        previousNextUrl: e.requestPreviousNextUrl,
        redirectDepth: e.redirectDepth + 1,
      };
}
function mr(e) {
  return e;
}
function hr(e, t) {
  let n = t?.keyFn ?? ((...e) => e[0]),
    r = t?.cache ?? new Map();
  return mr(function (...t) {
    let i = n(...t),
      a = r.get(i);
    if (a !== void 0) return a;
    let o = e.apply(this, t);
    return (r.set(i, o), o);
  });
}
function gr(e) {
  return e.split(`$$cache=`)[0];
}
function _r() {
  globalThis.__vite_rsc_require__ = (e) =>
    e.startsWith(`$$server:`)
      ? ((e = e.slice(9)), globalThis.__vite_rsc_server_require__(e))
      : globalThis.__vite_rsc_client_require__(e);
}
var vr = !1;
function yr(e) {
  if (vr) return;
  vr = !0;
  let t = hr((t) => e.load(gr(t)));
  ((globalThis.__vite_rsc_client_require__ = t), _r());
}
var br = n((e) => {
    var t = Se(),
      n = { stream: !0 },
      r = Object.prototype.hasOwnProperty;
    function i(e, t) {
      if (e) {
        var n = e[t[0]];
        if ((e = n && n[t[2]])) n = e.name;
        else {
          if (((e = n && n[`*`]), !e))
            throw Error(
              `Could not find the module "` +
                t[0] +
                `" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.`,
            );
          n = t[2];
        }
        return t.length === 4 ? [e.id, e.chunks, n, 1] : [e.id, e.chunks, n];
      }
      return t;
    }
    function a(e, t) {
      var n = ``,
        r = e[t];
      if (r) n = r.name;
      else {
        var i = t.lastIndexOf(`#`);
        if ((i !== -1 && ((n = t.slice(i + 1)), (r = e[t.slice(0, i)])), !r))
          throw Error(
            `Could not find the module "` +
              t +
              `" in the React Server Manifest. This is probably a bug in the React Server Components bundler.`,
          );
      }
      return r.async ? [r.id, r.chunks, n, 1] : [r.id, r.chunks, n];
    }
    var o = new Map();
    function s(e) {
      var t = __vite_rsc_require__(e);
      return typeof t.then != `function` || t.status === `fulfilled`
        ? null
        : (t.then(
            function (e) {
              ((t.status = `fulfilled`), (t.value = e));
            },
            function (e) {
              ((t.status = `rejected`), (t.reason = e));
            },
          ),
          t);
    }
    function c() {}
    function l(e) {
      for (var t = e[1], n = [], r = 0; r < t.length; ) {
        var i = t[r++],
          a = t[r++],
          l = o.get(i);
        l === void 0
          ? (d.set(i, a),
            (a = __webpack_chunk_load__(i)),
            n.push(a),
            (l = o.set.bind(o, i, null)),
            a.then(l, c),
            o.set(i, a))
          : l !== null && n.push(l);
      }
      return e.length === 4
        ? n.length === 0
          ? s(e[0])
          : Promise.all(n).then(function () {
              return s(e[0]);
            })
        : 0 < n.length
          ? Promise.all(n)
          : null;
    }
    function u(e) {
      var t = __vite_rsc_require__(e[0]);
      if (e.length === 4 && typeof t.then == `function`)
        if (t.status === `fulfilled`) t = t.value;
        else throw t.reason;
      if (e[2] === `*`) return t;
      if (e[2] === ``) return t.__esModule ? t.default : t;
      if (r.call(t, e[2])) return t[e[2]];
    }
    var d = new Map(),
      f = {}.u;
    ({}).u = function (e) {
      var t = d.get(e);
      return t === void 0 ? f(e) : t;
    };
    var p = t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      m = Symbol.for(`react.transitional.element`),
      h = Symbol.for(`react.lazy`),
      g = Symbol.iterator;
    function _(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (g && e[g]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var v = Symbol.asyncIterator,
      ee = Array.isArray,
      y = Object.getPrototypeOf,
      b = Object.prototype,
      x = new WeakMap();
    function S(e) {
      return Number.isFinite(e)
        ? e === 0 && 1 / e == -1 / 0
          ? `$-0`
          : e
        : e === 1 / 0
          ? `$Infinity`
          : e === -1 / 0
            ? `$-Infinity`
            : `$NaN`;
    }
    function C(e, t, n, r, i) {
      function a(e, n) {
        n = new Blob([new Uint8Array(n.buffer, n.byteOffset, n.byteLength)]);
        var r = f++;
        return (g === null && (g = new FormData()), g.append(t + r, n), `$` + e + r.toString(16));
      }
      function o(e) {
        function n(c) {
          c.done
            ? ((c = f++),
              a.append(t + c, new Blob(s)),
              a.append(t + o, `"$o` + c.toString(16) + `"`),
              a.append(t + o, `C`),
              p--,
              p === 0 && r(a))
            : (s.push(c.value), e.read(new Uint8Array(1024)).then(n, i));
        }
        g === null && (g = new FormData());
        var a = g;
        p++;
        var o = f++,
          s = [];
        return (e.read(new Uint8Array(1024)).then(n, i), `$r` + o.toString(16));
      }
      function s(e) {
        function n(s) {
          if (s.done) (a.append(t + o, `C`), p--, p === 0 && r(a));
          else
            try {
              var c = JSON.stringify(s.value, u);
              (a.append(t + o, c), e.read().then(n, i));
            } catch (e) {
              i(e);
            }
        }
        g === null && (g = new FormData());
        var a = g;
        p++;
        var o = f++;
        return (e.read().then(n, i), `$R` + o.toString(16));
      }
      function c(e) {
        try {
          var t = e.getReader({ mode: `byob` });
        } catch {
          return s(e.getReader());
        }
        return o(t);
      }
      function l(e, n) {
        function a(e) {
          if (e.done) {
            if (e.value === void 0) o.append(t + s, `C`);
            else
              try {
                var c = JSON.stringify(e.value, u);
                o.append(t + s, `C` + c);
              } catch (e) {
                i(e);
                return;
              }
            (p--, p === 0 && r(o));
          } else
            try {
              var l = JSON.stringify(e.value, u);
              (o.append(t + s, l), n.next().then(a, i));
            } catch (e) {
              i(e);
            }
        }
        g === null && (g = new FormData());
        var o = g;
        p++;
        var s = f++;
        return ((e = e === n), n.next().then(a, i), `$` + (e ? `x` : `X`) + s.toString(16));
      }
      function u(e, o) {
        if (o === null) return null;
        if (typeof o == `object`) {
          switch (o.$$typeof) {
            case m:
              if (n !== void 0 && e.indexOf(`:`) === -1) {
                var s = C.get(this);
                if (s !== void 0) return (n.set(s + `:` + e, o), `$T`);
              }
              throw Error(
                `React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.`,
              );
            case h:
              s = o._payload;
              var T = o._init;
              (g === null && (g = new FormData()), p++);
              try {
                var E = T(s),
                  D = f++,
                  O = d(E, D);
                return (g.append(t + D, O), `$` + D.toString(16));
              } catch (e) {
                if (typeof e == `object` && e && typeof e.then == `function`) {
                  p++;
                  var k = f++;
                  return (
                    (s = function () {
                      try {
                        var e = d(o, k),
                          n = g;
                        (n.append(t + k, e), p--, p === 0 && r(n));
                      } catch (e) {
                        i(e);
                      }
                    }),
                    e.then(s, s),
                    `$` + k.toString(16)
                  );
                }
                return (i(e), null);
              } finally {
                p--;
              }
          }
          if (((s = C.get(o)), typeof o.then == `function`)) {
            if (s !== void 0)
              if (w === o) w = null;
              else return s;
            (g === null && (g = new FormData()), p++);
            var A = f++;
            return (
              (e = `$@` + A.toString(16)),
              C.set(o, e),
              o.then(function (e) {
                try {
                  var n = C.get(e),
                    a = n === void 0 ? d(e, A) : JSON.stringify(n);
                  ((e = g), e.append(t + A, a), p--, p === 0 && r(e));
                } catch (e) {
                  i(e);
                }
              }, i),
              e
            );
          }
          if (s !== void 0)
            if (w === o) w = null;
            else return s;
          else
            e.indexOf(`:`) === -1 &&
              ((s = C.get(this)),
              s !== void 0 && ((e = s + `:` + e), C.set(o, e), n !== void 0 && n.set(e, o)));
          if (ee(o)) return o;
          if (o instanceof FormData) {
            g === null && (g = new FormData());
            var j = g;
            e = f++;
            var M = t + `_` + e + `_`;
            return (
              o.forEach(function (e, t) {
                j.append(M + t, e);
              }),
              `$K` + e.toString(16)
            );
          }
          if (o instanceof Map)
            return (
              (e = f++),
              (s = d(Array.from(o), e)),
              g === null && (g = new FormData()),
              g.append(t + e, s),
              `$Q` + e.toString(16)
            );
          if (o instanceof Set)
            return (
              (e = f++),
              (s = d(Array.from(o), e)),
              g === null && (g = new FormData()),
              g.append(t + e, s),
              `$W` + e.toString(16)
            );
          if (o instanceof ArrayBuffer)
            return (
              (e = new Blob([o])),
              (s = f++),
              g === null && (g = new FormData()),
              g.append(t + s, e),
              `$A` + s.toString(16)
            );
          if (o instanceof Int8Array) return a(`O`, o);
          if (o instanceof Uint8Array) return a(`o`, o);
          if (o instanceof Uint8ClampedArray) return a(`U`, o);
          if (o instanceof Int16Array) return a(`S`, o);
          if (o instanceof Uint16Array) return a(`s`, o);
          if (o instanceof Int32Array) return a(`L`, o);
          if (o instanceof Uint32Array) return a(`l`, o);
          if (o instanceof Float32Array) return a(`G`, o);
          if (o instanceof Float64Array) return a(`g`, o);
          if (o instanceof BigInt64Array) return a(`M`, o);
          if (o instanceof BigUint64Array) return a(`m`, o);
          if (o instanceof DataView) return a(`V`, o);
          if (typeof Blob == `function` && o instanceof Blob)
            return (
              g === null && (g = new FormData()),
              (e = f++),
              g.append(t + e, o),
              `$B` + e.toString(16)
            );
          if ((e = _(o)))
            return (
              (s = e.call(o)),
              s === o
                ? ((e = f++),
                  (s = d(Array.from(s), e)),
                  g === null && (g = new FormData()),
                  g.append(t + e, s),
                  `$i` + e.toString(16))
                : Array.from(s)
            );
          if (typeof ReadableStream == `function` && o instanceof ReadableStream) return c(o);
          if (((e = o[v]), typeof e == `function`)) return l(o, e.call(o));
          if (((e = y(o)), e !== b && (e === null || y(e) !== null))) {
            if (n === void 0)
              throw Error(
                `Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.`,
              );
            return `$T`;
          }
          return o;
        }
        if (typeof o == `string`)
          return o[o.length - 1] === `Z` && this[e] instanceof Date
            ? `$D` + o
            : ((e = o[0] === `$` ? `$` + o : o), e);
        if (typeof o == `boolean`) return o;
        if (typeof o == `number`) return S(o);
        if (o === void 0) return `$undefined`;
        if (typeof o == `function`) {
          if (((s = x.get(o)), s !== void 0))
            return (
              (e = C.get(o)),
              e === void 0
                ? ((e = JSON.stringify({ id: s.id, bound: s.bound }, u)),
                  g === null && (g = new FormData()),
                  (s = f++),
                  g.set(t + s, e),
                  (e = `$h` + s.toString(16)),
                  C.set(o, e),
                  e)
                : e
            );
          if (n !== void 0 && e.indexOf(`:`) === -1 && ((s = C.get(this)), s !== void 0))
            return (n.set(s + `:` + e, o), `$T`);
          throw Error(
            `Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.`,
          );
        }
        if (typeof o == `symbol`) {
          if (n !== void 0 && e.indexOf(`:`) === -1 && ((s = C.get(this)), s !== void 0))
            return (n.set(s + `:` + e, o), `$T`);
          throw Error(
            `Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.`,
          );
        }
        if (typeof o == `bigint`) return `$n` + o.toString(10);
        throw Error(`Type ` + typeof o + ` is not supported as an argument to a Server Function.`);
      }
      function d(e, t) {
        return (
          typeof e == `object` &&
            e &&
            ((t = `$` + t.toString(16)), C.set(e, t), n !== void 0 && n.set(t, e)),
          (w = e),
          JSON.stringify(e, u)
        );
      }
      var f = 1,
        p = 0,
        g = null,
        C = new WeakMap(),
        w = e,
        T = d(e, 0);
      return (
        g === null ? r(T) : (g.set(t + `0`, T), p === 0 && r(g)),
        function () {
          0 < p && ((p = 0), r(g === null ? T : g));
        }
      );
    }
    function w(e, t, n) {
      x.has(e) || x.set(e, { id: t, originalBind: e.bind, bound: n });
    }
    function T(e, t) {
      function n() {
        var e = Array.prototype.slice.call(arguments);
        return i
          ? i.status === `fulfilled`
            ? t(r, i.value.concat(e))
            : Promise.resolve(i).then(function (n) {
                return t(r, n.concat(e));
              })
          : t(r, e);
      }
      var r = e.id,
        i = e.bound;
      return (w(n, r, i), n);
    }
    function E(e, t, n) {
      ((this.status = e), (this.value = t), (this.reason = n));
    }
    ((E.prototype = Object.create(Promise.prototype)),
      (E.prototype.then = function (e, t) {
        switch (this.status) {
          case `resolved_model`:
            L(this);
            break;
          case `resolved_module`:
            R(this);
        }
        switch (this.status) {
          case `fulfilled`:
            typeof e == `function` && e(this.value);
            break;
          case `pending`:
          case `blocked`:
            (typeof e == `function` &&
              (this.value === null && (this.value = []), this.value.push(e)),
              typeof t == `function` &&
                (this.reason === null && (this.reason = []), this.reason.push(t)));
            break;
          case `halted`:
            break;
          default:
            typeof t == `function` && t(this.reason);
        }
      }));
    function D(e) {
      switch (e.status) {
        case `resolved_model`:
          L(e);
          break;
        case `resolved_module`:
          R(e);
      }
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `pending`:
        case `blocked`:
        case `halted`:
          throw e;
        default:
          throw e.reason;
      }
    }
    function O(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        typeof i == `function` ? i(t) : ie(i, t, n);
      }
    }
    function k(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        typeof r == `function` ? r(t) : ae(r, t);
      }
    }
    function A(e, t) {
      var n = t.handler.chunk;
      if (n === null) return null;
      if (n === e) return t.handler;
      if (((t = n.value), t !== null))
        for (n = 0; n < t.length; n++) {
          var r = t[n];
          if (typeof r != `function` && ((r = A(e, r)), r !== null)) return r;
        }
      return null;
    }
    function j(e, t, n) {
      switch (e.status) {
        case `fulfilled`:
          O(t, e.value, e);
          break;
        case `blocked`:
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (typeof i != `function`) {
              var a = A(e, i);
              if (a !== null)
                switch (
                  (ie(i, a.value, e),
                  t.splice(r, 1),
                  r--,
                  n !== null && ((i = n.indexOf(i)), i !== -1 && n.splice(i, 1)),
                  e.status)
                ) {
                  case `fulfilled`:
                    O(t, e.value, e);
                    return;
                  case `rejected`:
                    n !== null && k(n, e.reason);
                    return;
                }
            }
          }
        case `pending`:
          if (e.value) for (r = 0; r < t.length; r++) e.value.push(t[r]);
          else e.value = t;
          if (e.reason) {
            if (n) for (t = 0; t < n.length; t++) e.reason.push(n[t]);
          } else e.reason = n;
          break;
        case `rejected`:
          n && k(n, e.reason);
      }
    }
    function M(e, t, n) {
      t.status !== `pending` && t.status !== `blocked`
        ? t.reason.error(n)
        : ((e = t.reason), (t.status = `rejected`), (t.reason = n), e !== null && k(e, n));
    }
    function N(e, t, n) {
      return new E(
        `resolved_model`,
        (n ? `{"done":true,"value":` : `{"done":false,"value":`) + t + `}`,
        e,
      );
    }
    function P(e, t, n, r) {
      F(e, t, (r ? `{"done":true,"value":` : `{"done":false,"value":`) + n + `}`);
    }
    function F(e, t, n) {
      if (t.status !== `pending`) t.reason.enqueueModel(n);
      else {
        var r = t.value,
          i = t.reason;
        ((t.status = `resolved_model`),
          (t.value = n),
          (t.reason = e),
          r !== null && (L(t), j(t, r, i)));
      }
    }
    function te(e, t, n) {
      if (t.status === `pending` || t.status === `blocked`) {
        e = t.value;
        var r = t.reason;
        ((t.status = `resolved_module`),
          (t.value = n),
          (t.reason = null),
          e !== null && (R(t), j(t, e, r)));
      }
    }
    var I = null;
    function L(e) {
      var t = I;
      I = null;
      var n = e.value,
        r = e.reason;
      ((e.status = `blocked`), (e.value = null), (e.reason = null));
      try {
        var i = JSON.parse(n, r._fromJSON),
          a = e.value;
        if (a !== null)
          for (e.value = null, e.reason = null, n = 0; n < a.length; n++) {
            var o = a[n];
            typeof o == `function` ? o(i) : ie(o, i, e);
          }
        if (I !== null) {
          if (I.errored) throw I.reason;
          if (0 < I.deps) {
            ((I.value = i), (I.chunk = e));
            return;
          }
        }
        ((e.status = `fulfilled`), (e.value = i));
      } catch (t) {
        ((e.status = `rejected`), (e.reason = t));
      } finally {
        I = t;
      }
    }
    function R(e) {
      try {
        var t = u(e.value);
        ((e.status = `fulfilled`), (e.value = t));
      } catch (t) {
        ((e.status = `rejected`), (e.reason = t));
      }
    }
    function ne(e, t) {
      ((e._closed = !0),
        (e._closedReason = t),
        e._chunks.forEach(function (n) {
          n.status === `pending`
            ? M(e, n, t)
            : n.status === `fulfilled` && n.reason !== null && n.reason.error(t);
        }));
    }
    function re(e) {
      return { $$typeof: h, _payload: e, _init: D };
    }
    function z(e, t) {
      var n = e._chunks,
        r = n.get(t);
      return (
        r ||
          ((r = e._closed
            ? new E(`rejected`, null, e._closedReason)
            : new E(`pending`, null, null)),
          n.set(t, r)),
        r
      );
    }
    function ie(e, t) {
      var n = e.response,
        i = e.handler,
        a = e.parentObject,
        o = e.key,
        s = e.map,
        c = e.path;
      try {
        for (var l = 1; l < c.length; l++) {
          for (; typeof t == `object` && t && t.$$typeof === h; ) {
            var u = t._payload;
            if (u === i.chunk) t = i.value;
            else {
              switch (u.status) {
                case `resolved_model`:
                  L(u);
                  break;
                case `resolved_module`:
                  R(u);
              }
              switch (u.status) {
                case `fulfilled`:
                  t = u.value;
                  continue;
                case `blocked`:
                  var d = A(u, e);
                  if (d !== null) {
                    t = d.value;
                    continue;
                  }
                case `pending`:
                  (c.splice(0, l - 1),
                    u.value === null ? (u.value = [e]) : u.value.push(e),
                    u.reason === null ? (u.reason = [e]) : u.reason.push(e));
                  return;
                case `halted`:
                  return;
                default:
                  ae(e, u.reason);
                  return;
              }
            }
          }
          var f = c[l];
          if (typeof t == `object` && t && r.call(t, f)) t = t[f];
          else throw Error(`Invalid reference.`);
        }
        for (; typeof t == `object` && t && t.$$typeof === h; ) {
          var p = t._payload;
          if (p === i.chunk) t = i.value;
          else {
            switch (p.status) {
              case `resolved_model`:
                L(p);
                break;
              case `resolved_module`:
                R(p);
            }
            switch (p.status) {
              case `fulfilled`:
                t = p.value;
                continue;
            }
            break;
          }
        }
        var g = s(n, t, a, o);
        if (
          (o !== `__proto__` && (a[o] = g),
          o === `` && i.value === null && (i.value = g),
          a[0] === m && typeof i.value == `object` && i.value !== null && i.value.$$typeof === m)
        ) {
          var _ = i.value;
          switch (o) {
            case `3`:
              _.props = g;
          }
        }
      } catch (t) {
        ae(e, t);
        return;
      }
      (i.deps--,
        i.deps === 0 &&
          ((e = i.chunk),
          e !== null &&
            e.status === `blocked` &&
            ((t = e.value),
            (e.status = `fulfilled`),
            (e.value = i.value),
            (e.reason = i.reason),
            t !== null && O(t, i.value, e))));
    }
    function ae(e, t) {
      var n = e.handler;
      ((e = e.response),
        n.errored ||
          ((n.errored = !0),
          (n.value = null),
          (n.reason = t),
          (n = n.chunk),
          n !== null && n.status === `blocked` && M(e, n, t)));
    }
    function oe(e, t, n, r, i, a) {
      if (I) {
        var o = I;
        o.deps++;
      } else o = I = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 };
      return (
        (t = { response: r, handler: o, parentObject: t, key: n, map: i, path: a }),
        e.value === null ? (e.value = [t]) : e.value.push(t),
        e.reason === null ? (e.reason = [t]) : e.reason.push(t),
        null
      );
    }
    function se(e, t, n, r) {
      if (!e._serverReferenceConfig) return T(t, e._callServer);
      var i = a(e._serverReferenceConfig, t.id),
        o = l(i);
      if (o) t.bound && (o = Promise.all([o, t.bound]));
      else if (t.bound) o = Promise.resolve(t.bound);
      else return ((o = u(i)), w(o, t.id, t.bound), o);
      if (I) {
        var s = I;
        s.deps++;
      } else s = I = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 };
      return (
        o.then(
          function () {
            var e = u(i);
            if (t.bound) {
              var a = t.bound.value.slice(0);
              (a.unshift(null), (e = e.bind.apply(e, a)));
            }
            if (
              (w(e, t.id, t.bound),
              r !== `__proto__` && (n[r] = e),
              r === `` && s.value === null && (s.value = e),
              n[0] === m &&
                typeof s.value == `object` &&
                s.value !== null &&
                s.value.$$typeof === m)
            )
              switch (((a = s.value), r)) {
                case `3`:
                  a.props = e;
              }
            (s.deps--,
              s.deps === 0 &&
                ((e = s.chunk),
                e !== null &&
                  e.status === `blocked` &&
                  ((a = e.value),
                  (e.status = `fulfilled`),
                  (e.value = s.value),
                  (e.reason = null),
                  a !== null && O(a, s.value, e))));
          },
          function (t) {
            if (!s.errored) {
              ((s.errored = !0), (s.value = null), (s.reason = t));
              var n = s.chunk;
              n !== null && n.status === `blocked` && M(e, n, t);
            }
          },
        ),
        null
      );
    }
    function B(e, t, n, r, i) {
      t = t.split(`:`);
      var a = parseInt(t[0], 16);
      switch (((a = z(e, a)), a.status)) {
        case `resolved_model`:
          L(a);
          break;
        case `resolved_module`:
          R(a);
      }
      switch (a.status) {
        case `fulfilled`:
          a = a.value;
          for (var o = 1; o < t.length; o++) {
            for (; typeof a == `object` && a && a.$$typeof === h; ) {
              switch (((a = a._payload), a.status)) {
                case `resolved_model`:
                  L(a);
                  break;
                case `resolved_module`:
                  R(a);
              }
              switch (a.status) {
                case `fulfilled`:
                  a = a.value;
                  break;
                case `blocked`:
                case `pending`:
                  return oe(a, n, r, e, i, t.slice(o - 1));
                case `halted`:
                  return (
                    I
                      ? ((e = I), e.deps++)
                      : (I = {
                          parent: null,
                          chunk: null,
                          value: null,
                          reason: null,
                          deps: 1,
                          errored: !1,
                        }),
                    null
                  );
                default:
                  return (
                    I
                      ? ((I.errored = !0), (I.value = null), (I.reason = a.reason))
                      : (I = {
                          parent: null,
                          chunk: null,
                          value: null,
                          reason: a.reason,
                          deps: 0,
                          errored: !0,
                        }),
                    null
                  );
              }
            }
            a = a[t[o]];
          }
          for (; typeof a == `object` && a && a.$$typeof === h; ) {
            switch (((t = a._payload), t.status)) {
              case `resolved_model`:
                L(t);
                break;
              case `resolved_module`:
                R(t);
            }
            switch (t.status) {
              case `fulfilled`:
                a = t.value;
                continue;
            }
            break;
          }
          return i(e, a, n, r);
        case `pending`:
        case `blocked`:
          return oe(a, n, r, e, i, t);
        case `halted`:
          return (
            I
              ? ((e = I), e.deps++)
              : (I = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: null,
                  deps: 1,
                  errored: !1,
                }),
            null
          );
        default:
          return (
            I
              ? ((I.errored = !0), (I.value = null), (I.reason = a.reason))
              : (I = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: a.reason,
                  deps: 0,
                  errored: !0,
                }),
            null
          );
      }
    }
    function ce(e, t) {
      return new Map(t);
    }
    function le(e, t) {
      return new Set(t);
    }
    function V(e, t) {
      return new Blob(t.slice(1), { type: t[0] });
    }
    function ue(e, t) {
      e = new FormData();
      for (var n = 0; n < t.length; n++) e.append(t[n][0], t[n][1]);
      return e;
    }
    function de(e, t) {
      return t[Symbol.iterator]();
    }
    function fe(e, t) {
      return t;
    }
    function pe(e, t, n, r) {
      if (r[0] === `$`) {
        if (r === `$`)
          return (
            I !== null &&
              n === `0` &&
              (I = { parent: I, chunk: null, value: null, reason: null, deps: 0, errored: !1 }),
            m
          );
        switch (r[1]) {
          case `$`:
            return r.slice(1);
          case `L`:
            return ((t = parseInt(r.slice(2), 16)), (e = z(e, t)), re(e));
          case `@`:
            return ((t = parseInt(r.slice(2), 16)), z(e, t));
          case `S`:
            return Symbol.for(r.slice(2));
          case `h`:
            return ((r = r.slice(2)), B(e, r, t, n, se));
          case `T`:
            if (((t = `$` + r.slice(2)), (e = e._tempRefs), e == null))
              throw Error(
                `Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.`,
              );
            return e.get(t);
          case `Q`:
            return ((r = r.slice(2)), B(e, r, t, n, ce));
          case `W`:
            return ((r = r.slice(2)), B(e, r, t, n, le));
          case `B`:
            return ((r = r.slice(2)), B(e, r, t, n, V));
          case `K`:
            return ((r = r.slice(2)), B(e, r, t, n, ue));
          case `Z`:
            return Ce();
          case `i`:
            return ((r = r.slice(2)), B(e, r, t, n, de));
          case `I`:
            return 1 / 0;
          case `-`:
            return r === `$-0` ? -0 : -1 / 0;
          case `N`:
            return NaN;
          case `u`:
            return;
          case `D`:
            return new Date(Date.parse(r.slice(2)));
          case `n`:
            return BigInt(r.slice(2));
          default:
            return ((r = r.slice(1)), B(e, r, t, n, fe));
        }
      }
      return r;
    }
    function me() {
      throw Error(
        `Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.`,
      );
    }
    function he(e, t, n, r, i, a, o) {
      var s = new Map();
      ((this._bundlerConfig = e),
        (this._serverReferenceConfig = t),
        (this._moduleLoading = n),
        (this._callServer = r === void 0 ? me : r),
        (this._encodeFormAction = i),
        (this._nonce = a),
        (this._chunks = s),
        (this._stringDecoder = new TextDecoder()),
        (this._fromJSON = null),
        (this._closed = !1),
        (this._closedReason = null),
        (this._tempRefs = o),
        (this._fromJSON = Ee(this)));
    }
    function ge(e, t, n) {
      e = e._chunks;
      var r = e.get(t);
      r && r.status !== `pending`
        ? r.reason.enqueueValue(n)
        : ((n = new E(`fulfilled`, n, null)), e.set(t, n));
    }
    function _e(e, t, n) {
      var r = e._chunks,
        a = r.get(t);
      n = JSON.parse(n, e._fromJSON);
      var o = i(e._bundlerConfig, n);
      if ((n = l(o))) {
        if (a) {
          var s = a;
          s.status = `blocked`;
        } else ((s = new E(`blocked`, null, null)), r.set(t, s));
        n.then(
          function () {
            return te(e, s, o);
          },
          function (t) {
            return M(e, s, t);
          },
        );
      } else a ? te(e, a, o) : ((a = new E(`resolved_module`, o, null)), r.set(t, a));
    }
    function ve(e, t, n, r) {
      e = e._chunks;
      var i = e.get(t);
      i
        ? i.status === `pending` &&
          ((t = i.value),
          (i.status = `fulfilled`),
          (i.value = n),
          (i.reason = r),
          t !== null && O(t, i.value, i))
        : ((n = new E(`fulfilled`, n, r)), e.set(t, n));
    }
    function H(e, t, n) {
      var r = null,
        i = !1;
      n = new ReadableStream({
        type: n,
        start: function (e) {
          r = e;
        },
      });
      var a = null;
      ve(e, t, n, {
        enqueueValue: function (e) {
          a === null
            ? r.enqueue(e)
            : a.then(function () {
                r.enqueue(e);
              });
        },
        enqueueModel: function (t) {
          if (a === null) {
            var n = new E(`resolved_model`, t, e);
            (L(n),
              n.status === `fulfilled`
                ? r.enqueue(n.value)
                : (n.then(
                    function (e) {
                      return r.enqueue(e);
                    },
                    function (e) {
                      return r.error(e);
                    },
                  ),
                  (a = n)));
          } else {
            n = a;
            var i = new E(`pending`, null, null);
            (i.then(
              function (e) {
                return r.enqueue(e);
              },
              function (e) {
                return r.error(e);
              },
            ),
              (a = i),
              n.then(function () {
                (a === i && (a = null), F(e, i, t));
              }));
          }
        },
        close: function () {
          if (!i)
            if (((i = !0), a === null)) r.close();
            else {
              var e = a;
              ((a = null),
                e.then(function () {
                  return r.close();
                }));
            }
        },
        error: function (e) {
          if (!i)
            if (((i = !0), a === null)) r.error(e);
            else {
              var t = a;
              ((a = null),
                t.then(function () {
                  return r.error(e);
                }));
            }
        },
      });
    }
    function ye() {
      return this;
    }
    function be(e) {
      return ((e = { next: e }), (e[v] = ye), e);
    }
    function xe(e, t, n) {
      var r = [],
        i = !1,
        a = 0,
        o = {};
      ((o[v] = function () {
        var e = 0;
        return be(function (t) {
          if (t !== void 0)
            throw Error(
              `Values cannot be passed to next() of AsyncIterables passed to Client Components.`,
            );
          if (e === r.length) {
            if (i) return new E(`fulfilled`, { done: !0, value: void 0 }, null);
            r[e] = new E(`pending`, null, null);
          }
          return r[e++];
        });
      }),
        ve(e, t, n ? o[v]() : o, {
          enqueueValue: function (e) {
            if (a === r.length) r[a] = new E(`fulfilled`, { done: !1, value: e }, null);
            else {
              var t = r[a],
                n = t.value,
                i = t.reason;
              ((t.status = `fulfilled`),
                (t.value = { done: !1, value: e }),
                (t.reason = null),
                n !== null && j(t, n, i));
            }
            a++;
          },
          enqueueModel: function (t) {
            (a === r.length ? (r[a] = N(e, t, !1)) : P(e, r[a], t, !1), a++);
          },
          close: function (t) {
            if (!i)
              for (
                i = !0, a === r.length ? (r[a] = N(e, t, !0)) : P(e, r[a], t, !0), a++;
                a < r.length;
              )
                P(e, r[a++], `"$undefined"`, !0);
          },
          error: function (t) {
            if (!i)
              for (i = !0, a === r.length && (r[a] = new E(`pending`, null, null)); a < r.length; )
                M(e, r[a++], t);
          },
        }));
    }
    function Ce() {
      var e = Error(
        `An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.`,
      );
      return ((e.stack = `Error: ` + e.message), e);
    }
    function we(e, t) {
      for (var n = e.length, r = t.length, i = 0; i < n; i++) r += e[i].byteLength;
      r = new Uint8Array(r);
      for (var a = (i = 0); a < n; a++) {
        var o = e[a];
        (r.set(o, i), (i += o.byteLength));
      }
      return (r.set(t, i), r);
    }
    function U(e, t, n, r, i, a) {
      ((n = n.length === 0 && r.byteOffset % a === 0 ? r : we(n, r)),
        (i = new i(n.buffer, n.byteOffset, n.byteLength / a)),
        ge(e, t, i));
    }
    function Te(e, t, r, i, a, o) {
      switch (i) {
        case 65:
          ge(e, r, we(a, o).buffer);
          return;
        case 79:
          U(e, r, a, o, Int8Array, 1);
          return;
        case 111:
          ge(e, r, a.length === 0 ? o : we(a, o));
          return;
        case 85:
          U(e, r, a, o, Uint8ClampedArray, 1);
          return;
        case 83:
          U(e, r, a, o, Int16Array, 2);
          return;
        case 115:
          U(e, r, a, o, Uint16Array, 2);
          return;
        case 76:
          U(e, r, a, o, Int32Array, 4);
          return;
        case 108:
          U(e, r, a, o, Uint32Array, 4);
          return;
        case 71:
          U(e, r, a, o, Float32Array, 4);
          return;
        case 103:
          U(e, r, a, o, Float64Array, 8);
          return;
        case 77:
          U(e, r, a, o, BigInt64Array, 8);
          return;
        case 109:
          U(e, r, a, o, BigUint64Array, 8);
          return;
        case 86:
          U(e, r, a, o, DataView, 1);
          return;
      }
      t = e._stringDecoder;
      for (var s = ``, c = 0; c < a.length; c++) s += t.decode(a[c], n);
      switch (((a = s += t.decode(o)), i)) {
        case 73:
          _e(e, r, a);
          break;
        case 72:
          switch (((r = a[0]), (a = a.slice(1)), (e = JSON.parse(a, e._fromJSON)), (a = p.d), r)) {
            case `D`:
              a.D(e);
              break;
            case `C`:
              typeof e == `string` ? a.C(e) : a.C(e[0], e[1]);
              break;
            case `L`:
              ((r = e[0]), (i = e[1]), e.length === 3 ? a.L(r, i, e[2]) : a.L(r, i));
              break;
            case `m`:
              typeof e == `string` ? a.m(e) : a.m(e[0], e[1]);
              break;
            case `X`:
              typeof e == `string` ? a.X(e) : a.X(e[0], e[1]);
              break;
            case `S`:
              typeof e == `string`
                ? a.S(e)
                : a.S(e[0], e[1] === 0 ? void 0 : e[1], e.length === 3 ? e[2] : void 0);
              break;
            case `M`:
              typeof e == `string` ? a.M(e) : a.M(e[0], e[1]);
          }
          break;
        case 69:
          ((i = e._chunks),
            (o = i.get(r)),
            (a = JSON.parse(a)),
            (t = Ce()),
            (t.digest = a.digest),
            o ? M(e, o, t) : ((e = new E(`rejected`, null, t)), i.set(r, e)));
          break;
        case 84:
          ((e = e._chunks),
            (i = e.get(r)) && i.status !== `pending`
              ? i.reason.enqueueValue(a)
              : ((a = new E(`fulfilled`, a, null)), e.set(r, a)));
          break;
        case 78:
        case 68:
        case 74:
        case 87:
          throw Error(
            `Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.`,
          );
        case 82:
          H(e, r, void 0);
          break;
        case 114:
          H(e, r, `bytes`);
          break;
        case 88:
          xe(e, r, !1);
          break;
        case 120:
          xe(e, r, !0);
          break;
        case 67:
          (r = e._chunks.get(r)) &&
            r.status === `fulfilled` &&
            r.reason.close(a === `` ? `"$undefined"` : a);
          break;
        default:
          ((i = e._chunks),
            (o = i.get(r)) ? F(e, o, a) : ((e = new E(`resolved_model`, a, e)), i.set(r, e)));
      }
    }
    function Ee(e) {
      return function (t, n) {
        if (t !== `__proto__`) {
          if (typeof n == `string`) return pe(e, this, t, n);
          if (typeof n == `object` && n) {
            if (n[0] === m) {
              if (
                ((t = { $$typeof: m, type: n[1], key: n[2], ref: null, props: n[3] }), I !== null)
              ) {
                if (((n = I), (I = n.parent), n.errored))
                  ((t = new E(`rejected`, null, n.reason)), (t = re(t)));
                else if (0 < n.deps) {
                  var r = new E(`blocked`, null, null);
                  ((n.value = t), (n.chunk = r), (t = re(r)));
                }
              }
            } else t = n;
            return t;
          }
          return n;
        }
      };
    }
    function De(e) {
      ne(e, Error(`Connection closed.`));
    }
    function Oe(e) {
      return new he(
        null,
        null,
        null,
        e && e.callServer ? e.callServer : void 0,
        void 0,
        void 0,
        e && e.temporaryReferences ? e.temporaryReferences : void 0,
      );
    }
    function W(e, t, n) {
      function r(t) {
        var s = t.value;
        if (t.done) return n();
        var c = 0,
          l = a._rowState;
        t = a._rowID;
        for (var u = a._rowTag, d = a._rowLength, f = a._buffer, p = s.length; c < p; ) {
          var m = -1;
          switch (l) {
            case 0:
              ((m = s[c++]), m === 58 ? (l = 1) : (t = (t << 4) | (96 < m ? m - 87 : m - 48)));
              continue;
            case 1:
              ((l = s[c]),
                l === 84 ||
                l === 65 ||
                l === 79 ||
                l === 111 ||
                l === 85 ||
                l === 83 ||
                l === 115 ||
                l === 76 ||
                l === 108 ||
                l === 71 ||
                l === 103 ||
                l === 77 ||
                l === 109 ||
                l === 86
                  ? ((u = l), (l = 2), c++)
                  : (64 < l && 91 > l) || l === 35 || l === 114 || l === 120
                    ? ((u = l), (l = 3), c++)
                    : ((u = 0), (l = 3)));
              continue;
            case 2:
              ((m = s[c++]), m === 44 ? (l = 4) : (d = (d << 4) | (96 < m ? m - 87 : m - 48)));
              continue;
            case 3:
              m = s.indexOf(10, c);
              break;
            case 4:
              ((m = c + d), m > s.length && (m = -1));
          }
          var h = s.byteOffset + c;
          if (-1 < m)
            ((d = new Uint8Array(s.buffer, h, m - c)),
              Te(e, a, t, u, f, d),
              (c = m),
              l === 3 && c++,
              (d = t = u = l = 0),
              (f.length = 0));
          else {
            ((s = new Uint8Array(s.buffer, h, s.byteLength - c)), f.push(s), (d -= s.byteLength));
            break;
          }
        }
        return (
          (a._rowState = l),
          (a._rowID = t),
          (a._rowTag = u),
          (a._rowLength = d),
          o.read().then(r).catch(i)
        );
      }
      function i(t) {
        ne(e, t);
      }
      var a = { _rowState: 0, _rowID: 0, _rowTag: 0, _rowLength: 0, _buffer: [] },
        o = t.getReader();
      o.read().then(r).catch(i);
    }
    ((e.createFromFetch = function (e, t) {
      var n = Oe(t);
      return (
        e.then(
          function (e) {
            W(n, e.body, De.bind(null, n));
          },
          function (e) {
            ne(n, e);
          },
        ),
        z(n, 0)
      );
    }),
      (e.createFromReadableStream = function (e, t) {
        return ((t = Oe(t)), W(t, e, De.bind(null, t)), z(t, 0));
      }),
      (e.createTemporaryReferenceSet = function () {
        return new Map();
      }),
      (e.encodeReply = function (e, t) {
        return new Promise(function (n, r) {
          var i = C(e, ``, t && t.temporaryReferences ? t.temporaryReferences : void 0, n, r);
          if (t && t.signal) {
            var a = t.signal;
            if (a.aborted) i(a.reason);
            else {
              var o = function () {
                (i(a.reason), a.removeEventListener(`abort`, o));
              };
              a.addEventListener(`abort`, o);
            }
          }
        });
      }));
  }),
  xr = t(
    n((e, t) => {
      t.exports = br();
    })(),
    1,
  );
function Sr(e, t = {}) {
  return xr.createFromReadableStream(e, { callServer: Tr, findSourceMapURL: Or, ...t });
}
function Cr(e, t = {}) {
  return xr.createFromFetch(e, { callServer: Tr, findSourceMapURL: Or, ...t });
}
var wr = xr.encodeReply;
function Tr(...e) {
  return globalThis.__viteRscCallServer(...e);
}
function Er(e) {
  globalThis.__viteRscCallServer = e;
}
var Dr = xr.createTemporaryReferenceSet;
function Or(e, t) {
  let n = new URL(`/__vite_rsc_findSourceMapURL`, import.meta.url);
  return (
    n.searchParams.set(`filename`, e), n.searchParams.set(`environmentName`, t), n.toString()
  );
}
var kr = `modulepreload`,
  Ar = function (e) {
    return `/` + e;
  },
  jr = {},
  Y = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = Ar(t, n)), t in jr)) return;
          jr[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : kr),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Mr = {
    "0063f17b5b2e": async () => {
      let e = await Y(() => Promise.resolve().then(() => Oe), void 0);
      return {
        get ErrorBoundary() {
          return e.ErrorBoundary;
        },
        get ForbiddenBoundary() {
          return e.ForbiddenBoundary;
        },
        get NotFoundBoundary() {
          return e.NotFoundBoundary;
        },
        get RedirectBoundary() {
          return e.RedirectBoundary;
        },
        get UnauthorizedBoundary() {
          return e.UnauthorizedBoundary;
        },
      };
    },
    "1aa08cc3c627": async () => {
      let e = await Y(() => import(`./spotify-card-BkVic7Hs.js`), __vite__mapDeps([0, 1, 2]));
      return {
        get SpotifyCard() {
          return e.SpotifyCard;
        },
      };
    },
    "41578ab9c9e0": async () => {
      let e = await Y(() => import(`./theme-provider-DGZq-utN.js`), __vite__mapDeps([3, 1, 2]));
      return {
        get ThemeProvider() {
          return e.ThemeProvider;
        },
      };
    },
    "4441f662a01b": async () => {
      let e = await Y(
        () => import(`./layout-segment-context-C54q6Ylb.js`),
        __vite__mapDeps([4, 1, 2, 5, 6]),
      );
      return {
        get LayoutSegmentProvider() {
          return e.LayoutSegmentProvider;
        },
      };
    },
    "67e19589e4b9": async () => {
      let e = await Y(() => Promise.resolve().then(() => Ke), void 0);
      return {
        get Children() {
          return e.Children;
        },
        get ParallelSlot() {
          return e.ParallelSlot;
        },
        get Slot() {
          return e.Slot;
        },
      };
    },
    c2747888630f: async () => {
      let e = await Y(() => import(`./link-D_sA8jQG.js`), __vite__mapDeps([7, 1, 2, 5, 6, 8]));
      return {
        get default() {
          return e.default;
        },
      };
    },
    c578fdeec3b6: async () => {
      let e = await Y(() => import(`./theme-toggle-BcMZpoyr.js`), __vite__mapDeps([9, 1, 2, 3]));
      return {
        get ModeToggle() {
          return e.ModeToggle;
        },
      };
    },
  };
Nr();
function Nr() {
  yr({
    load: async (e) => {
      {
        let t = Mr[e];
        if (!t) throw Error(`client reference not found '${e}'`);
        return t();
      }
    },
  });
}
function Pr(e) {
  return e === `traverse` ? `traverse` : `navigate`;
}
function Fr(e) {
  switch (e) {
    case `navigate`:
      return `navigation`;
    case `refresh`:
      return `refresh`;
    case `traverse`:
      return `traverse`;
    default:
      throw Error(`[vinext] Unknown navigation kind: ` + String(e));
  }
}
var Ir = 50,
  Lr = 5 * 6e4,
  Rr = 30 * 6e4,
  zr = b();
function Br() {
  return window.__VINEXT_ROUTE_MANIFEST__ ?? null;
}
var X = $n({ getRouteManifest: Br, syncHistoryStatePreviousNextUrl: ci }),
  Vr = mt({
    runRefresh() {
      si();
      let e = window.__VINEXT_RSC_NAVIGATE__;
      typeof e == `function` && e(window.location.href, 0, `refresh`, void 0, void 0, !0);
    },
  }),
  Hr = X.NavigationCommitSignal;
function Ur(e) {
  if (!e) return null;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return null;
  }
}
function Wr(e) {
  return e instanceof Promise;
}
var Gr = {},
  Z = new Map(),
  Kr = null,
  Q = p(window.history.state) ?? 0,
  qr = Q;
function Jr(e) {
  switch (e) {
    case `push`:
      return qr + 1;
    case `replace`:
      return Q;
    case void 0:
      return null;
    default:
      throw Error(`[vinext] Unknown history update mode: ` + String(e));
  }
}
function Yr(e) {
  ((Q = e), e !== null && (qr = Math.max(qr, e)));
}
function Xr(e, t, n) {
  let r = Jr(t),
    i = ei() ? $().previousNextUrl : E(window.history.state),
    a = be(Zr(t, n), { previousNextUrl: i, traversalIndex: r });
  (t === `replace` ? H(a, ``, e) : ye(a, ``, e), Yr(r));
}
function Zr(e, t) {
  return e === `replace` ? (t ? Qr(window.history.state) : window.history.state) : null;
}
function Qr(e) {
  if (!e || typeof e != `object`) return e;
  let t = {};
  for (let [n, r] of Object.entries(e))
    n === `__vinext_scrollX` || n === `__vinext_scrollY` || (t[n] = r);
  return Object.keys(t).length > 0 ? t : null;
}
function $r(e) {
  Yr(p(e));
}
function $() {
  return X.getBrowserRouterState();
}
function ei() {
  return X.hasBrowserRouterState();
}
function ti() {
  return X.waitForBrowserRouterStateReady();
}
function ni() {
  return X.beginPendingBrowserRouterState();
}
function ri(e) {
  ((Gr = e), c(e));
}
function ii(e) {
  ((Gr = e), P(e));
}
function ai() {
  Z.clear();
}
function oi() {
  oe();
}
function si() {
  (ai(), oi());
}
function ci(e) {
  if (E(window.history.state) === e) return;
  let t = s(window.history.state, e);
  (H(t, ``, window.location.href),
    E(window.history.state) !== e && window.history.replaceState(t, ``, window.location.href));
}
function li() {
  let e = $();
  return pt({
    href: window.location.href,
    navigationId: X.getActiveNavigationId(),
    routerState: e,
  });
}
function ui(e) {
  let {
    href: t,
    historyUpdateMode: n,
    navId: r,
    params: i,
    previousNextUrl: a,
    targetHistoryIndex: o,
  } = e;
  return () => {
    if (!X.isCurrentNavigation(r)) {
      R(void 0, { releaseSnapshot: !0 });
      return;
    }
    let e = new URL(t, window.location.origin).href,
      s = n === `replace`,
      c = o === void 0 ? Jr(n) : o,
      l = be(s ? window.history.state : null, { previousNextUrl: a, traversalIndex: c }),
      u = !1;
    (n === `replace` && window.location.href !== e
      ? (ii(i), H(l, ``, t), (u = !0), Yr(c))
      : n === `push` && window.location.href !== e && (ii(i), ye(l, ``, t), (u = !0), Yr(c)),
      u || (ci(a), ii(i), o !== void 0 && Yr(o)),
      (Kr = null),
      R(r));
  };
}
async function di(e, t, n, r, i, a, o, s, c = `navigate`, l = `navigation`, u = null) {
  try {
    return await X.renderNavigationPayload({
      actionType: c,
      createNavigationCommitEffect: (e) => ((Kr = e.href), ui(e)),
      historyUpdateMode: i,
      navigationSnapshot: t,
      nextElements: e,
      operationLane: l,
      params: a,
      pendingRouterState: s,
      previousNextUrl: o,
      targetHistoryIndex: u === null ? void 0 : u.targetHistoryIndex,
      targetHref: n,
      navId: r,
    });
  } catch (e) {
    throw ((Kr = null), e);
  }
}
async function fi(e, t, n, r = `none`) {
  let i = fe(t.href, t.routerState.navigationSnapshot.params);
  return X.commitSameUrlNavigatePayload(e, i, n, t.routerState, {
    onDiscardedRevalidation() {
      Vr.schedule();
    },
    revalidation: r,
    startedNavigationId: t.navigationId,
    targetHref: t.href,
  });
}
function pi() {
  for (; Z.size >= Ir; ) {
    let e = Z.keys().next().value;
    if (e === void 0) return;
    Z.delete(e);
  }
}
function mi(e, t, n, r) {
  let i = V.encodeCacheKey(e, t),
    a = Z.get(i);
  if (!a) return null;
  if ((a.response.mountedSlotsHeader ?? null) !== n) return (Z.delete(i), null);
  if (r === `refresh`) return null;
  if (r === `traverse`) {
    let e = a.expiresAt - Lr;
    return Date.now() - e >= Rr ? (Z.delete(i), null) : (Z.delete(i), Z.set(i, a), a);
  }
  return a.expiresAt > Date.now() ? (Z.delete(i), Z.set(i, a), a) : (Z.delete(i), null);
}
function hi(e, t, n, r) {
  let i = V.encodeCacheKey(e, t);
  (Z.delete(i), pi());
  let a = Date.now();
  Z.set(i, { params: r, expiresAt: a + Lr, response: n });
}
function gi(e, t, n) {
  if (t !== void 0) return { interceptionContext: _n(t, ``), previousNextUrl: t };
  switch (e) {
    case `navigate`: {
      let e = $().previousNextUrl;
      return e === null
        ? { interceptionContext: ie(), previousNextUrl: ge() }
        : { interceptionContext: _n(e, ``), previousNextUrl: e };
    }
    case `traverse`: {
      let e = E(n ?? window.history.state);
      return { interceptionContext: _n(e, ``), previousNextUrl: e };
    }
    case `refresh`: {
      let e = $().previousNextUrl;
      return { interceptionContext: _n(e, ``), previousNextUrl: e };
    }
    default:
      throw Error(`[vinext] Unknown navigation kind: ` + String(e));
  }
}
function _i(e) {
  return Promise.resolve(e).then((e) => V.decode(e));
}
function vi({ initialElements: e, initialNavigationSnapshot: t }) {
  let n = (0, W.use)(e),
    r = V.readMetadata(n),
    [i, a] = (0, W.useState)({
      activeOperation: null,
      elements: n,
      interception: r.interception,
      interceptionContext: r.interceptionContext,
      layoutIds: r.layoutIds,
      layoutFlags: r.layoutFlags,
      navigationSnapshot: t,
      previousNextUrl: null,
      renderId: 0,
      rootLayoutTreePath: r.rootLayoutTreePath,
      routeId: r.routeId,
      slotBindings: r.slotBindings,
      visibleCommitVersion: 0,
    }),
    s = Wr(i) ? (0, W.use)(i) : i,
    c = (0, W.useRef)(s);
  ((c.current = s),
    (0, W.useLayoutEffect)(() => {
      let e = X.attachBrowserRouterState(a, c);
      return (
        (window.__VINEXT_HYDRATED_AT = performance.now()),
        () => {
          (e(), ve(null));
        }
      );
    }, [a]),
    (0, W.useLayoutEffect)(() => {
      (ve(f(c.current.elements)), window.__VINEXT_PING_VISIBLE_LINKS__?.());
    }, [s.elements]),
    (0, W.useLayoutEffect)(() => {
      s.renderId === 0 &&
        H(
          be(window.history.state, { previousNextUrl: s.previousNextUrl, traversalIndex: Q }),
          ``,
          window.location.href,
        );
    }, [s.previousNextUrl, s.renderId]));
  let l = (0, W.createElement)(
      Ie,
      null,
      (0, W.createElement)(
        Hr,
        { renderId: s.renderId },
        (0, W.createElement)(
          Je.Provider,
          { value: s.elements },
          (0, W.createElement)(it, { id: s.routeId }),
        ),
      ),
    ),
    u = o ? (0, W.createElement)(o.Provider, { value: se }, l) : l,
    d = F();
  return d ? (0, W.createElement)(d.Provider, { value: s.navigationSnapshot }, u) : u;
}
function yi(e, t, n) {
  w({ pathname: e, searchParams: new URLSearchParams(t), params: n });
}
function bi(e) {
  if (!(e && typeof e == `object` && `__vinext_scrollY` in e)) {
    window.location.hash && i(window.location.hash);
    return;
  }
  let t = Number(e.__vinext_scrollY),
    n = `__vinext_scrollX` in e ? Number(e.__vinext_scrollX) : 0;
  requestAnimationFrame(() => {
    window.scrollTo(n, t);
  });
}
function xi(e) {
  if (!ei()) return !1;
  let t = new URL(e, window.location.origin),
    n = $(),
    i = r(t.pathname, ``),
    a = new URLSearchParams(t.search).toString(),
    o = n.navigationSnapshot.searchParams.toString();
  return i === n.navigationSnapshot.pathname && a === o;
}
var Si = !1,
  Ci = `__vinext_rsc_initial_reload__`;
function wi() {
  try {
    return sessionStorage.getItem(Ci);
  } catch {
    return null;
  }
}
function Ti(e) {
  try {
    sessionStorage.setItem(Ci, e);
  } catch {}
}
function Ei() {
  try {
    sessionStorage.removeItem(Ci);
  } catch {}
}
function Di(e) {
  let t = window.location.pathname + window.location.search;
  return wi() === t
    ? (Ei(),
      console.error(
        `[vinext] Initial RSC fetch ${e} after reload; aborting hydration. Server-rendered HTML remains visible; client components will not hydrate.`,
      ),
      null)
    : (Ti(t),
      wi() === t
        ? (console.warn(
            `[vinext] Initial RSC fetch ${e}; reloading once to let the server render the HTML error page`,
          ),
          window.location.reload(),
          null)
        : (console.error(
            `[vinext] Initial RSC fetch ${e}; sessionStorage unavailable so the reload-loop guard cannot persist — aborting hydration. Server-rendered HTML remains visible; client components will not hydrate.`,
          ),
          null));
}
async function Oi() {
  let e = vt();
  if (e.__VINEXT_RSC__ || e.__VINEXT_RSC_CHUNKS__ || e.__VINEXT_RSC_DONE__) {
    if ((Ei(), Zn(), e.__VINEXT_RSC__)) {
      let t = e.__VINEXT_RSC__;
      delete e.__VINEXT_RSC__;
      let n = t.params ?? {};
      return (
        t.params && ri(t.params), t.nav && yi(t.nav.pathname, t.nav.searchParams, n), bt(t.rsc)
      );
    }
    let t = e.__VINEXT_RSC_PARAMS__ ?? {};
    return (
      e.__VINEXT_RSC_PARAMS__ && ri(e.__VINEXT_RSC_PARAMS__),
      e.__VINEXT_RSC_NAV__ &&
        yi(e.__VINEXT_RSC_NAV__.pathname, e.__VINEXT_RSC_NAV__.searchParams, t),
      xt()
    );
  }
  let t = v(),
    n = await fetch(await ee(window.location.pathname + window.location.search, t), {
      credentials: `include`,
      headers: t,
    });
  if (!n.ok) return Di(`returned ${n.status}`);
  let r = n.headers.get(`content-type`) ?? ``;
  if (!r.startsWith(`text/x-component`))
    return Di(`returned non-RSC content-type "${r || `(missing)`}"`);
  if (!n.body) return Di(`returned empty body`);
  (Ei(), Zn());
  let i = Ur(n.headers.get(_e)),
    a = i ?? {};
  if (i)
    try {
      ri(i);
    } catch {}
  return (yi(window.location.pathname, window.location.search, a), n.body);
}
function ki() {
  Er(async (e, t) => {
    let n = Dr(),
      r = li();
    ci(r.routerState.previousNextUrl);
    let i = await wr(t, { temporaryReferences: n }),
      { headers: a } = vn({
        actionId: e,
        basePath: ``,
        elements: r.routerState.elements,
        previousNextUrl: r.routerState.previousNextUrl,
      }),
      o = await fetch(await ee(r.path, a), { method: `POST`, headers: a, body: i });
    ur(o, e);
    let s = o.headers.get(ne);
    if (s) {
      if (de(s)) {
        console.error(B);
        return;
      }
      try {
        if (new URL(s, window.location.origin).origin !== window.location.origin) {
          window.location.href = s;
          return;
        }
      } catch {}
      (si(),
        (o.headers.get(`x-action-redirect-type`) ?? `replace`) === `push`
          ? window.location.assign(s)
          : window.location.replace(s));
      return;
    }
    if (
      m({
        clientCompatibilityId: zr,
        currentHref: r.href,
        origin: window.location.origin,
        responseCompatibilityId: o.headers.get(`X-Vinext-RSC-Compatibility-Id`),
        responseUrl: o.url,
      }).kind === `hard-navigate`
    ) {
      window.location.reload();
      return;
    }
    let c = dt(o.headers),
      l = await Cr(Promise.resolve(o), { temporaryReferences: n });
    if ((ut(l, c) && si(), lt(l))) {
      if (l.root !== void 0) return fi(Promise.resolve(V.decode(l.root)), r, l.returnValue, c);
      if (l.returnValue) {
        if (!l.returnValue.ok) throw l.returnValue.data;
        return l.returnValue.data;
      }
      return;
    }
    return fi(Promise.resolve(V.decode(l)), r, void 0, c);
  });
}
async function Ai() {
  ki();
  let e = await Oi();
  e !== null && ji(e);
}
function ji(e) {
  let t = _i(Sr(e)),
    n = fe(window.location.href, Gr);
  H(
    be(window.history.state, { previousNextUrl: null, traversalIndex: Q }),
    ``,
    window.location.href,
  );
  let r = ar(() => Kr),
    i = nr({ formState: tr(vt()), onUncaughtError: r });
  ((window.__VINEXT_RSC_ROOT__ = rr({
    children: (0, W.createElement)(vi, { initialElements: t, initialNavigationSnapshot: n }),
    container: document,
    hydrateRoot: or.hydrateRoot,
    options: i,
    startTransition: W.startTransition,
  })),
    (window.__VINEXT_CLEAR_NAV_CACHES__ = si),
    (window.__VINEXT_RSC_COMMIT_HASH_NAVIGATION__ = Xr),
    (window.__VINEXT_RSC_NAVIGATE__ = async function (e, t = 0, n = `navigate`, r, i, a = !1, o) {
      let s = null,
        c = X.beginNavigation();
      Vr.markNavigationStart();
      let l = e,
        p = r,
        h = i,
        _ = t,
        y =
          n === `traverse`
            ? (o ?? T({ currentHistoryIndex: Q, historyState: window.history.state }))
            : null;
      try {
        let e = a;
        if (e && ei()) s = ni();
        else {
          if ((await ti(), !X.isCurrentNavigation(c))) return;
          e && (s = ni());
        }
        for (;;) {
          let e = new URL(l, window.location.origin),
            t = gi(n, h, y?.historyState),
            r = t.interceptionContext,
            i = t.previousNextUrl;
          (n === `refresh` && ci(i), u(e.pathname, c));
          let a = $().elements,
            o = f(a),
            b = v({ interceptionContext: r, renderMode: n === `refresh` ? he : void 0 });
          o && b.set(ae, o);
          let x = await ee(e.pathname + e.search, b),
            S = mi(x, r, o, n);
          if (S) {
            let e = m({
              clientCompatibilityId: zr,
              currentHref: l,
              origin: window.location.origin,
              responseCompatibilityId: S.response.compatibilityIdHeader,
              responseUrl: S.response.url,
            });
            if (e.kind === `hard-navigate`) {
              window.location.href = e.hardNavigationTarget;
              return;
            }
            if (!X.isCurrentNavigation(c)) return;
            let t = S.params,
              r = fe(l, t),
              a = _i(Cr(Promise.resolve(C(S.response))));
            if (!X.isCurrentNavigation(c)) return;
            await di(a, r, l, c, p, t, i, s, Pr(n), Fr(n), y);
            return;
          }
          let w,
            T = null;
          if (n !== `refresh`) {
            let e = M(x, r, o);
            e && ((w = C(e, !1)), (T = e.url));
          }
          if (
            ((w ||= await fetch(x, { headers: b, credentials: `include` })),
            !X.isCurrentNavigation(c))
          )
            return;
          let E = (w.headers.get(`content-type`) ?? ``).startsWith(`text/x-component`);
          if (!w.ok || !E || !w.body) {
            let e = T ?? w.url;
            window.location.href = d(e, l, window.location.origin);
            return;
          }
          let D = m({
            clientCompatibilityId: zr,
            currentHref: l,
            origin: window.location.origin,
            responseCompatibilityId: w.headers.get(re),
            responseUrl: T ?? w.url,
          });
          if (D.kind === `hard-navigate`) {
            window.location.href = D.hardNavigationTarget;
            return;
          }
          let O = pr({
            currentHref: l,
            historyUpdateMode: p ?? `replace`,
            origin: window.location.origin,
            redirectDepth: _,
            requestPreviousNextUrl: i,
            responseUrl: T ?? w.url,
          });
          if (O.kind === `terminal-hard-navigation`) {
            (O.reason === `maxRedirectsExceeded` &&
              console.error(
                `[vinext] Too many RSC redirects — aborting navigation to prevent infinite loop.`,
              ),
              (window.location.href = O.href));
            return;
          }
          if (O.kind === `follow`) {
            ((l = O.href),
              (p = O.historyUpdateMode),
              (h = O.previousNextUrl),
              (_ = O.redirectDepth));
            continue;
          }
          let k = Ur(w.headers.get(`X-Vinext-Params`)) ?? {},
            A = fe(l, k),
            j = w.body;
          if (!j) return;
          let [N, P] = j.tee(),
            F = new Response(N, { status: w.status, headers: w.headers }),
            te = new Response(P).arrayBuffer();
          if (!X.isCurrentNavigation(c)) return;
          let I = _i(Cr(Promise.resolve(F)));
          if (
            !X.isCurrentNavigation(c) ||
            (await di(I, A, l, c, p, k, i, s, Pr(n), Fr(n), y)) !== `committed` ||
            !X.isCurrentNavigation(c)
          )
            return;
          let L = await I,
            R = V.readMetadata(L),
            ne = await te;
          hi(x, g(r, R.interceptionContext), ce(w, ne, T), k);
          return;
        }
      } catch (e) {
        if (!X.isCurrentNavigation(c)) return;
        (Si || console.error(`[vinext] RSC navigation error:`, e), (window.location.href = l));
      } finally {
        (X.finalizeNavigation(c, s), Vr.markNavigationSettled());
      }
    }),
    `scrollRestoration` in history && (history.scrollRestoration = `manual`));
  let o = ir({
    getActiveNavigationId: X.getActiveNavigationId.bind(X),
    getPendingNavigation: () => window.__VINEXT_RSC_PENDING__,
    getNavigate: () => window.__VINEXT_RSC_NAVIGATE__,
    isCurrentNavigation: X.isCurrentNavigation.bind(X),
    notifyAppRouterTransitionStart: (e) => {
      a(e, `traverse`);
    },
    restorePopstateScrollPosition: bi,
    setPendingNavigation: (e) => {
      window.__VINEXT_RSC_PENDING__ = e;
    },
  });
  window.addEventListener(`popstate`, (e) => {
    let t = window.location.href;
    if (xi(t)) {
      (a(t, `traverse`), $r(e.state), bi(e.state));
      return;
    }
    o(e);
  });
}
(typeof document < `u` &&
  (Te({ appDir: !0, router: se }),
  window.addEventListener(`pagehide`, () => {
    Si = !0;
  }),
  window.addEventListener(`pageshow`, () => {
    Si = !1;
  }),
  Ai()),
  (window.__VINEXT_LINK_PREFETCH_ROUTES__ = [{ patternParts: [], isDynamic: !1 }]),
  (window.__VINEXT_ROUTE_MANIFEST__ = {
    graphVersion: `graph:af7f67ba918bd4853f625a84d0489f35255d902b40184da28525a532857ce59f`,
    segmentGraph: {
      routes: new Map([
        [
          `route:/`,
          {
            id: `route:/`,
            pattern: `/`,
            patternParts: [],
            isDynamic: !1,
            paramNames: [],
            rootParamNames: [],
            rootBoundaryId: `root-boundary:/`,
            pageId: `page:/`,
            routeHandlerId: null,
            layoutIds: [`layout:/`],
            templateIds: [],
            slotIds: [],
          },
        ],
      ]),
      pages: new Map([[`page:/`, { id: `page:/`, routeId: `route:/`, pattern: `/` }]]),
      routeHandlers: new Map([]),
      layouts: new Map([
        [`layout:/`, { id: `layout:/`, treePath: `/`, rootBoundaryId: `root-boundary:/` }],
      ]),
      templates: new Map([]),
      slots: new Map([]),
      defaults: new Map([]),
      slotBindings: new Map([]),
      interceptions: new Map([]),
      interceptionsBySlotId: new Map([]),
      boundaries: new Map([
        [
          `boundary:notFound:/`,
          {
            id: `boundary:notFound:/`,
            outcome: `notFound`,
            treePath: `/`,
            ownerLayoutId: `layout:/`,
            rootBoundaryId: `root-boundary:/`,
          },
        ],
      ]),
      rootBoundaries: new Map([
        [`root-boundary:/`, { id: `root-boundary:/`, layoutId: `layout:/`, treePath: `/` }],
      ]),
    },
  }));
export { Tt as a, Dt as i, Pt as n, Te as o, Nt as r, Y as t };
