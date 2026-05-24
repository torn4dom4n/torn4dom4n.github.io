import "./rolldown-runtime-S-ySWqyJ.js";
import { i as e, r as t } from "./framework-BCcj1Z2J.js";
import { useTheme as n } from "./theme-provider-DGZq-utN.js";
e();
var r = t();
function i({ value: e, selected: t, onValueChange: n, title: i, children: a, ...o }) {
  return (0, r.jsx)(`button`, {
    type: `button`,
    role: `radio`,
    "aria-checked": t,
    tabIndex: t ? 0 : -1,
    onClick: () => n(e),
    title: i,
    className: `flex items-center justify-center rounded-full p-1 transition-all ${t ? `shadow-elevation bg-background text-foreground` : `text-muted-foreground hover:bg-accent/50 hover:text-foreground`}`,
    ...o,
    children: a,
  });
}
function a() {
  let { theme: e, setTheme: t } = n();
  return (0, r.jsxs)(`div`, {
    role: `radiogroup`,
    "aria-label": `Select color theme`,
    className: `inline-flex items-center gap-0.5 rounded-full border border-border bg-muted/50 p-0.5`,
    children: [
      (0, r.jsx)(i, {
        "aria-label": `System theme`,
        title: `System theme`,
        value: `system`,
        selected: e === `system`,
        onValueChange: t,
        children: (0, r.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          className: `size-3.5`,
          children: [
            (0, r.jsx)(`rect`, { width: `20`, height: `14`, x: `2`, y: `3`, rx: `2` }),
            (0, r.jsx)(`line`, { x1: `8`, x2: `16`, y1: `21`, y2: `21` }),
            (0, r.jsx)(`line`, { x1: `12`, x2: `12`, y1: `17`, y2: `21` }),
          ],
        }),
      }),
      (0, r.jsx)(i, {
        "aria-label": `Light theme`,
        title: `Light theme`,
        value: `light`,
        selected: e === `light`,
        onValueChange: t,
        children: (0, r.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          className: `size-3.5`,
          children: [
            (0, r.jsx)(`circle`, { cx: `12`, cy: `12`, r: `4` }),
            (0, r.jsx)(`path`, { d: `M12 2v2` }),
            (0, r.jsx)(`path`, { d: `M12 20v2` }),
            (0, r.jsx)(`path`, { d: `m4.93 4.93 1.41 1.41` }),
            (0, r.jsx)(`path`, { d: `m17.66 17.66 1.41 1.41` }),
            (0, r.jsx)(`path`, { d: `M2 12h2` }),
            (0, r.jsx)(`path`, { d: `M20 12h2` }),
            (0, r.jsx)(`path`, { d: `m6.34 17.66-1.41 1.41` }),
            (0, r.jsx)(`path`, { d: `m19.07 4.93-1.41 1.41` }),
          ],
        }),
      }),
      (0, r.jsx)(i, {
        "aria-label": `Dark theme`,
        title: `Dark theme`,
        value: `dark`,
        selected: e === `dark`,
        onValueChange: t,
        children: (0, r.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          className: `size-3.5`,
          children: (0, r.jsx)(`path`, { d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z` }),
        }),
      }),
    ],
  });
}
export { a as ModeToggle };
