# Palette Persona Learnings

## Metadata and SEO

- **Learning**: Single Page Applications (SPAs) using client-side head management (like `@unhead/react`) may fail metadata checks by crawlers that do not execute JavaScript.
- **Action**: Always provide static fallback meta tags in `index.html` for critical SEO and social sharing (Open Graph, Twitter) to ensure accessibility and discoverability by all bots.
- **Verification**: Use both build artifact inspection (`dist/index.html`) and runtime verification (Playwright) to ensure tags are present statically and managed correctly dynamically.
