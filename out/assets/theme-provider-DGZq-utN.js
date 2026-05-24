import { r as e } from "./rolldown-runtime-S-ySWqyJ.js";
import { i as t, r as n } from "./framework-BCcj1Z2J.js";
var r = e(t(), 1),
  i = n(),
  a = (0, r.createContext)({ theme: `system`, setTheme: () => null });
function o({ children: e, defaultTheme: t = `system`, storageKey: n = `vite-ui-theme`, ...o }) {
  let [s, c] = (0, r.useState)(() => (typeof localStorage < `u` && localStorage.getItem(n)) || t);
  (0, r.useEffect)(() => {
    let e = window.document.documentElement;
    if ((e.classList.remove(`light`, `dark`), s === `system`)) {
      let t = window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
      e.classList.add(t);
      return;
    }
    e.classList.add(s);
  }, [s]);
  let l = (0, r.useCallback)(
      (e) => {
        (typeof localStorage < `u` && localStorage.setItem(n, e), c(e));
      },
      [n],
    ),
    u = (0, r.useMemo)(() => ({ theme: s, setTheme: l }), [s, l]);
  return (0, i.jsx)(a.Provider, { ...o, value: u, children: e });
}
var s = () => {
  let e = (0, r.use)(a);
  if (e === void 0) throw Error(`useTheme must be used within a ThemeProvider`);
  return e;
};
export { o as ThemeProvider, s as useTheme };
