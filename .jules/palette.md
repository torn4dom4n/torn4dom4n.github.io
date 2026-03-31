# UX & Accessibility Learnings

## Skip to Content Link

A "Skip to Content" link is a crucial accessibility feature for keyboard-only and screen reader users. It allows them to bypass the navigation and jump straight to the main content. This is especially helpful on pages with complex headers or global navigation.

Implementation details:

- Placed as the first child of the `<body>` or just before the layout start.
- Uses `sr-only` by default, then `focus:not-sr-only` to become visible only on focus.
- Target is the `<main>` element with an `id="main-content"`.

## Theme Toggle Focus States

When using custom components like a theme toggle, it's essential to ensure they have clear, high-contrast focus rings for keyboard users. Relying on default browser focus rings is often insufficient when custom backgrounds are used.

Implementation:

- Added `focus-visible:ring-2` and context-aware ring colors (dark/light mode).
