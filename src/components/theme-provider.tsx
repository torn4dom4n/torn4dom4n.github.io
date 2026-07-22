import {
  createContext,
  useCallback,
  use,
  useEffect,
  useMemo,
  useState,
  useEffectEvent,
} from "react";

// Supported themes
type Theme = "dark" | "light" | "system";

/**
 * Props accepted by the ThemeProvider block component.
 */
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

/**
 * Theme Provider context state contract.
 */
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Initial state fallback for context initialization
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

// React Context holding theme state
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * ThemeProvider Block Component
 *
 * Provides global state management and class-based DOM styling for light, dark, and system themes:
 * - Reads and persists the active theme choice inside localStorage under `storageKey`.
 * - Uses modern `useEffectEvent` to safely update the HTML documentElement's class list.
 * - Listens dynamically to hardware media query changes (`prefers-color-scheme`) to seamlessly update
 *   system-preferred color choices at runtime.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Read theme state from local storage or fallback to default
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  // Modern event handler to physically apply "light" or "dark" classes to the html root element
  const onApplyTheme = useEffectEvent((targetTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (targetTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(targetTheme);
    }
  });

  // Apply visual changes whenever theme choice updates
  useEffect(() => {
    onApplyTheme(theme);
  }, [theme]);

  // Synchronize color changes dynamically if system theme selection is active
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => onApplyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Callback to persist theme preferences on user interaction
  const handleSetTheme = useCallback(
    (newTheme: Theme) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
      setTheme(newTheme);
    },
    [storageKey],
  );

  // Memoized value for the context provider
  const value = useMemo(
    () => ({
      theme,
      setTheme: handleSetTheme,
    }),
    [theme, handleSetTheme],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * Custom hook to consume ThemeProviderContext state.
 * Leverages React 19 `use()` function instead of legacy `useContext`.
 */
export const useTheme = () => {
  const context = use(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
