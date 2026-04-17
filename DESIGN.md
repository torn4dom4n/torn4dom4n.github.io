# Vercel-Inspired Design System

This project implements a minimalist, engineering-focused design system heavily influenced by the Vercel and Next.js aesthetic. It prioritizes clarity, typography, and a "shadow-as-border" visual language.

## 1. Core Philosophy

The custom Geist font family is the foundation. Geist Sans uses aggressive negative letter-spacing to create a "minified" look, while Geist Mono provides technical precision.

What distinguishes this system is its **shadow-as-border** philosophy. Instead of traditional CSS borders, we use `box-shadow: 0 0 0 1px` to create refined lines that don't affect the box model, enabling smoother transitions and rounded corners.

## 2. Color Palette

- **Black** (`#000000`): Primary background in dark mode, primary text in light mode.
- **White** (`#ffffff`): Primary background in light mode, primary text in dark mode.
- **Grays**:
  - Gray 950 (`#030712`)
  - Gray 600 (`#4b5563`)
  - Gray 400 (`#9ca3af`)
- **Accents**:
  - Amber 500 (`#f59e0b`): Used for primary focus rings and status badges.

## 3. Typography (Geist)

- **Headings**: Bold (`font-bold`), extra tight tracking (`tracking-tighter`), and large scale.
- **Mono**: Geist Mono for technical labels and code snippets (`font-mono`).
- **Body**: Clean, high-readability sans-serif (`font-sans`).

## 4. Layout Components

### Sticky Header

A glass-morphic navigation bar (`backdrop-blur-md`) that persists at the top of the viewport. Features a centered layout with navigation links and a primary "Ship" CTA.

### Hero Section

Billboard-style headings combined with an interactive "terminal" box. Features an announcement badge for immediate context.

### Feature Cards

Feature/Social links are presented as refined cards with:

- `box-shadow: 0 0 0 1px rgba(0,0,0,0.08)` (Light) or `rgba(255,255,255,0.1)` (Dark).
- Hover-activated "glow" and subtle scaling.
- Integrated icons from `simple-icons`.

### Multi-column Footer

A structured footer with link categories (Resources, Social, About) and a theme toggle.

## 5. Visual Language

- **Glass-morphism**: Used on the header to create depth.
- **Shadow Borders**: Replaces standard CSS borders for a "Vercel" look.
- **Pattern Dividers**: Subtle linear gradients used as section separators.
- **Interactions**: Focus-visible rings in Amber 500.

## 6. Architecture

- **SSG**: Pre-built static content for maximum performance.
- **Component-Driven**: Modular React components.
- **Tailwind CSS 4.x**: Utility-first styling with custom CSS variables.
