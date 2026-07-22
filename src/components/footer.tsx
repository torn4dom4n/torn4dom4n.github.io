import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// Retrieve the current year dynamically for the copyright text
const year = new Date().getFullYear();

/**
 * Footer Block Component
 *
 * Renders the site-wide footer which includes:
 * - A full-width horizontal divider border at the top of the footer.
 * - Dynamic copyright text displaying the current year and the author's name.
 * - The minimalist, segmented theme/mode toggle control for selecting light, dark, or system preferences.
 */
export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "relative mt-24 flex items-center justify-between py-8",
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border",
        className,
      )}
    >
      {/* Copyright text */}
      <p className="text-sm text-muted-foreground">&copy; {year} Long Nhat Nguyen.</p>
      {/* Interactive theme selector */}
      <ModeToggle />
    </footer>
  );
}
