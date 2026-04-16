# Design System

This project follows a minimalist, engineering-focused design philosophy heavily inspired by the Next.js and Vercel aesthetic. It focuses on clarity, performance, and a high-contrast monochrome palette with refined interactive elements.

## Core Principles

- **Minimalism & Precision**: Every element is intentional. We use space and alignment to create a professional, clean interface.
- **Typography-First**: High-quality typefaces are the primary design element, using scale and weight to establish hierarchy.
- **Next.js Aesthetic**: Incorporating elements like sticky headers with glass-morphism, announcement badges, and refined feature cards.
- **Dark Mode Native**: A first-class dark mode experience with deep blacks (#000) and high-contrast text.

## Typography

The project uses **Geist** and **Geist Mono** for a modern, engineering-focused look.

- **Geist Sans**: Used for headings and body text.
- **Geist Mono**: Used for code snippets, technical details, labels, and small UI elements.
- **Headings**: Use tight tracking (`tracking-tighter`) and large scales (up to `text-9xl` for hero elements) to create a bold, modern feel.

## Color Palette

The palette is strictly neutral with occasional accents for state and importance.

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
- **Accents**:
  - Amber 500 (`#f59e0b`): Used for primary focus rings and subtle "NEW" badges.

## UI Components

### Header

A sticky header with a `backdrop-blur-md` effect and a thin bottom border. It provides quick access to primary sections and a "Ship" primary CTA.

### Hero Section

Features a bold, tight-tracked heading, an announcement badge, and an interactive "terminal" box showcasing the project's identity.

### Feature/Social Cards

Cards use a uniform grid with subtle borders (`1px`). Hover states include:

- Refined shadow/glow effects.
- Subtle border color shifts.
- Smooth transitions for icons and text.

### Site Footer

A multi-column grid layout for structured navigation (Resources, Social, About) followed by a minimalist copyright and theme toggle section.

## Visual Language

- **Glass-morphism**: Used on the header to provide depth while maintaining content focus.
- **Borders**: Thin lines (`1px`) using the standard border colors to define structure without clutter.
- **Shadows**: Extremely subtle (`0 8px 30px rgba(0,0,0,0.04)`) to lift elements on hover.
- **Interactions**: Focus-visible rings (amber-500) for accessibility and smooth transitions.

## Architecture

- **Static Site Generation (SSG)**: Pure static output for maximum performance.
- **Component-Driven**: Modular UI architecture in `src/components`.
- **Utility-First**: Tailwind CSS 4.x for efficient styling.
