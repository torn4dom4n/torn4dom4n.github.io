import React from "react";

import { useTheme } from "./theme-provider";

type Theme = "light" | "dark" | "system";

/**
 * ThemeToggleButtonProps defines the properties for individual segmented control buttons.
 */
type ThemeToggleButtonProps = {
  value: Theme;
  selected: boolean;
  onValueChange: (value: Theme) => void;
  title: string;
  children: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onSelect" | "value">;

/**
 * ThemeToggleButton Component
 *
 * An individual segmented button wrapping a hidden radio input.
 * Provides accessible, keyboard-navigable theme changing controls with custom styled focus state.
 * Leverages logical padding and `rounded-full` capsule-shaped border designs.
 */
function ThemeToggleButton({
  value,
  selected,
  onValueChange,
  title,
  children,
  ...props
}: ThemeToggleButtonProps) {
  return (
    <label
      title={title}
      className={`relative flex cursor-pointer items-center justify-center rounded-full p-1 transition-all ${
        selected
          ? "shadow-elevation bg-background text-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
      }`}
    >
      <input
        type="radio"
        className="sr-only"
        checked={selected}
        onChange={() => onValueChange(value)}
        {...props}
      />
      {children}
    </label>
  );
}

/**
 * ModeToggle Block Component
 *
 * A minimalist, segmented radio-group block component to toggle between light, dark, and system themes.
 * Uses semantic tokens and logical spacing, grouping system, light, and dark SVG SVGs.
 */
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Select color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-muted/50 p-0.5"
    >
      {/* Segment Option 1: System-Preferred Theme Selection */}
      <ThemeToggleButton
        aria-label="System theme"
        title="System theme"
        value="system"
        selected={theme === "system"}
        onValueChange={setTheme}
        name="theme"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      </ThemeToggleButton>

      {/* Segment Option 2: Light Theme Selection */}
      <ThemeToggleButton
        aria-label="Light theme"
        title="Light theme"
        value="light"
        selected={theme === "light"}
        onValueChange={setTheme}
        name="theme"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </ThemeToggleButton>

      {/* Segment Option 3: Dark Theme Selection */}
      <ThemeToggleButton
        aria-label="Dark theme"
        title="Dark theme"
        value="dark"
        selected={theme === "dark"}
        onValueChange={setTheme}
        name="theme"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </ThemeToggleButton>
    </div>
  );
}
