# Bolt's Journal

## 2026-03-13 - [Safety First]
**Learning:** Attempted to remove unused dependencies from `package.json` but realized it violated core safety boundaries of the project. While it's a valid optimization, respecting project constraints is more important than minor bundle size gains.
**Action:** Always re-read "Boundaries" before modifying configuration files. Focus on code-level optimizations that have clear benefits without violating constraints.

## 2026-03-13 - [Context Memoization]
**Learning:** React Context providers without memoization cause all consumers to re-render whenever the provider's parent re-renders, even if the context value hasn't changed.
**Action:** Always memoize the `value` object in Context Providers using `useMemo` and `useCallback` to ensure stable references.
