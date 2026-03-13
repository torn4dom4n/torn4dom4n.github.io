## 2025-05-14 - [Improving Accessibility for External Links and Icon Buttons]
**Learning:** External links with `target="_blank"` lack context for screen reader users, and icon-only buttons often lack visual tooltips for mouse users. Redundant ARIA labels on icons placed next to text labels can cause repetitive announcements.
**Action:** Always add a screen-reader-only span `(opens in a new tab)` to external links. Provide both `aria-label` and `title` to icon-only buttons. Set `aria-hidden="true"` on icons that are purely decorative or adjacent to descriptive text.
