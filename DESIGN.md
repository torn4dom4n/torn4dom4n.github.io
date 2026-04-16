# Design System

This project follows a minimalist, engineering-focused design philosophy heavily inspired by the Next.js and Vercel aesthetic. It focuses on clarity, performance, and a high-contrast monochrome palette.

## Core Principles

- **Minimalism & Precision**: Every element is intentional. We use space and alignment to create a professional, clean interface.
- **Typography-First**: High-quality typefaces are the primary design element, using scale and weight to establish hierarchy.
- **Next.js Aesthetic**: Adopting the visual language of the Next.js website through refined typography, monochrome colors, and subtle decorative elements.
- **Dark Mode Native**: A first-class dark mode experience with deep blacks (#000) and pure whites (#fff).

## Typography

The project uses **Geist** and **Geist Mono** for a modern, engineering-focused look.

- **Geist Sans**: Used for headings and body text.
- **Geist Mono**: Used for labels and small UI elements.
- **Headings**: Use bold weight and tight tracking (`tracking-tighter`) to create a modern, high-contrast feel.

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

## Visual Language

- **Grid-Driven**: Elements are aligned to a consistent grid system with subtle decorative dividers.
- **Interactive States**: Hover effects use subtle background shifts (2% opacity) and slight translations to provide feedback without clutter.
- **Borders**: Thin lines (`1px`) using standard border colors define structure.
- **Patterns**: Subtle repeating linear gradients for background textures (e.g., the grid stripes).

## Architecture

- **Static Site Generation (SSG)**: Pure static output for maximum performance.
- **Component-Driven**: Modular UI architecture in `src/components`.
- **Utility-First**: Tailwind CSS 4.x for efficient styling.
