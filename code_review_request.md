# Code Review Request: Fontaine Configuration Update

I have updated the Fontaine configuration in this project to follow the modern recommendations from the [unjs/fontaine](https://github.com/unjs/fontaine) documentation.

## Changes

1.  **Vite Configuration (`vite.config.ts`):**
    - Changed `fallbacks` from a legacy array of font names to an empty object `{}`. This enables Fontaine's automatic category-aware fallback detection.
2.  **Global Styles (`src/styles/globals.css`):**
    - Updated the `--font-sans` and `--font-mono` theme variables to include the generated fallback font families: `"Geist fallback"` and `"Geist Mono fallback"`.
    - This step is necessary because the project uses CSS variables to reference custom fonts, and Fontaine requires the fallback to be explicitly listed in the `font-family` stack to link it with the generated `@font-face` rules.

## Verification

- Ran `pnpm run build` and verified that the output CSS contains `@font-face` rules for the fallback fonts with appropriate metric overrides (e.g., `ascent-override`, `size-adjust`).
- Used a Playwright script to confirm that the computed `font-family` on the live site correctly includes the fallback fonts.
- Ran `vp check` to ensure no linting or formatting regressions were introduced.
