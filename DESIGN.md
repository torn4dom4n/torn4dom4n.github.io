# Design System

This project follows a minimalist, typography-first design philosophy inspired by the Vercel and Next.js aesthetic. It focuses on clarity, performance, and a high-contrast monochrome palette.

## Core Principles

- **Minimalism**: Remove unnecessary elements to focus on content.
- **Typography-First**: Use high-quality typefaces as the primary design element.
- **Grid-Driven**: Align elements to a consistent grid system with subtle decorative dividers.
- **Dark Mode Native**: A first-class dark mode experience with deep blacks and refined grays.

## Typography

The project uses **Geist** and **Geist Mono** for a modern, engineering-focused look.

- **Geist Sans**: Used for headings and body text.
- **Geist Mono**: Used for technical details, labels, and small UI elements.
- **Font Fallbacks**: Optimized with Fontaine to reduce Layout Shift (CLS).

## Color Palette

The palette is strictly neutral to ensure a timeless and professional feel.

- **Light Mode**:
  - Background: White (`#ffffff`)
  - Text: Gray 950 (`#030712`)
  - Secondary Text: Gray 600 (`#4b5563`)
  - Borders/Dividers: Black 5% (`rgba(0, 0, 0, 0.05)`)
- **Dark Mode**:
  - Background: Black (`#000000`)
  - Text: White (`#ffffff`)
  - Secondary Text: Gray 400 (`#9ca3af`)
  - Borders/Dividers: White 10% (`rgba(255, 255, 255, 0.1)`)

## UI Components

### Grid Container

The layout is built around a central `GridContainer` that provides consistent padding and alignment. Decorative vertical stripes are used to frame the content on larger screens.

### Symmetrical Layouts

Following the "Vercel-style", sections like "Get in Touch" use symmetrical grid arrangements (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) instead of asymmetrical Bento layouts. This maintains a clean and predictable visual hierarchy.

### Cards

Cards (e.g., SpotifyCard, Social Links) feature:

- Subtle borders (`1px`).
- Interactive hover states (scaling, background shifts, or glows).
- Uniform padding and corner rounding.

## Visual Language

- **Dividers**: Thin lines (`1px`) using the standard border colors.
- **Patterns**: Subtle repeating linear gradients for background textures (e.g., the grid stripes).
- **Interactions**: Focus-visible rings (amber-500) for accessibility and smooth transitions for theme toggling.

## Architecture

- **Static Site Generation (SSG)**: Content is injected at build time to ensure zero-runtime API dependency and maximum portability.
- **Component-Driven**: UI is broken down into small, focused components in `src/components`.
- **Utility-First Styling**: Tailwind CSS 4.x for efficient and maintainable styling.
