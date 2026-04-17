import React from "react";

import { useTheme } from "./theme-provider";

type Theme = "light" | "dark" | "system";

type ThemeToggleButtonProps = {
  value: Theme;
  selected: boolean;
  onValueChange: (value: Theme) => void;
  title: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "onSelect">;

function ThemeToggleButton({
  value,
  selected,
  onValueChange,
  title,
  children,
  ...props
}: ThemeToggleButtonProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      tabIndex={selected ? 0 : -1}
      onClick={() => onValueChange(value)}
      title={title}
      className={`flex items-center justify-center rounded-full p-1 transition-all ${
        selected
          ? "shadow-elevation bg-ds-background text-ds-foreground"
          : "text-ds-tertiary hover:bg-ds-border/20 hover:text-ds-foreground"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Select color theme"
      className="inline-flex items-center gap-0.5 rounded-full bg-ds-border/10 p-0.5 shadow-border"
    >
      <ThemeToggleButton
        aria-label="System theme"
        title="System theme"
        value="system"
        selected={theme === "system"}
        onValueChange={setTheme}
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

      <ThemeToggleButton
        aria-label="Light theme"
        title="Light theme"
        value="light"
        selected={theme === "light"}
        onValueChange={setTheme}
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

      <ThemeToggleButton
        aria-label="Dark theme"
        title="Dark theme"
        value="dark"
        selected={theme === "dark"}
        onValueChange={setTheme}
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
