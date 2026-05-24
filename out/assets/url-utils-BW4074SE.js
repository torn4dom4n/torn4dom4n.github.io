function e(e, t) {
  return t ? e === t || e.startsWith(t + `/`) : !1;
}
function t(t, n) {
  return e(t, n) ? t.slice(n.length) || `/` : t;
}
function n(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function r(e) {
  let t = n(e.startsWith(`#`) ? e.slice(1) : e);
  if (t === `` || t === `top`) {
    window.scrollTo(0, 0);
    return;
  }
  let r = document.getElementById(t);
  if (r) {
    r.scrollIntoView({ behavior: `auto` });
    return;
  }
  document.getElementsByName(t)[0]?.scrollIntoView({ behavior: `auto` });
}
function i(e) {
  requestAnimationFrame(() => {
    r(e);
  });
}
var a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
function o(e) {
  let t = e.charCodeAt(0);
  return ((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && a.test(e);
}
function s(e) {
  return o(e) || e.startsWith(`//`);
}
function c(e) {
  if (typeof window > `u`) return null;
  try {
    let t = e.startsWith(`//`) ? new URL(e, window.location.origin) : new URL(e);
    if (t.origin === window.location.origin) return t.pathname + t.search + t.hash;
  } catch {}
  return null;
}
function l(n, r) {
  let i = c(n);
  if (i == null || !r) return i;
  try {
    let n = new URL(i, `http://vinext.local`);
    return e(n.pathname, r) ? t(n.pathname, r) + n.search + n.hash : null;
  } catch {
    return i;
  }
}
function u(e) {
  let t = e.indexOf(`#`),
    n = e.indexOf(`?`),
    r = n > -1 && (t < 0 || n < t);
  return r || t > -1
    ? {
        pathname: e.substring(0, r ? n : t),
        query: r ? e.substring(n, t > -1 ? t : void 0) : ``,
        hash: t > -1 ? e.slice(t) : ``,
      }
    : { pathname: e, query: ``, hash: `` };
}
function d(e) {
  return e.replace(/\/$/, ``) || `/`;
}
function f(e, t) {
  if (!e.startsWith(`/`) || e.startsWith(`//`)) return e;
  let { pathname: n, query: r, hash: i } = u(e);
  return t
    ? /\.[^/]+\/?$/.test(n)
      ? `${d(n)}${r}${i}`
      : n.endsWith(`/`)
        ? `${n}${r}${i}`
        : `${n}/${r}${i}`
    : `${d(n)}${r}${i}`;
}
function p(e, t) {
  return !t || !e.startsWith(`/`) || s(e) ? e : t + e;
}
function m(e, n, r = ``) {
  let i = n ?? (typeof window < `u` ? window.location.href : void 0);
  if (!i || e.startsWith(`/`) || s(e)) return e;
  try {
    let n = new URL(e, i);
    return (r && n.pathname === r ? `` : r ? t(n.pathname, r) : n.pathname) + n.search + n.hash;
  } catch {
    return e;
  }
}
function h(e, t, n = ``) {
  let r = m(e, t, n);
  return n ? (r === `` ? n : r.startsWith(`?`) || r.startsWith(`#`) ? n + r : p(r, n)) : p(r, n);
}
function g(e, n, r = ``) {
  try {
    let i = new URL(n),
      a = new URL(e, n);
    return t(i.pathname, r) === t(a.pathname, r) && i.search === a.search && a.hash !== ``;
  } catch {
    return !1;
  }
}
export { h as a, r as c, t as d, m as i, i as l, g as n, l as o, f as r, p as s, s as t, e as u };
