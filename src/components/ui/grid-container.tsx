import { cn } from "@/lib/utils";

/**
 * GridContainer Block Component
 *
 * A key structural layout block used to standardize horizontal sections across the webpage:
 * - Implements top and bottom full-width horizontal divider lines using absolute-positioned
 *   `before` and `after` pseudo-elements (using logical spacing `inset-bs` / `inset-be` mapping, `h-px`, and `w-[200vw]`).
 * - Features the custom `bg-border` color (resolves nicely based on light/dark mode tokens).
 * - Encloses nested page elements to maintain strict visual grid alignment.
 */
export default function GridContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "relative",
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border",
        "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[200vw] after:-translate-x-1/2 after:bg-border",
      )}
    >
      {children}
    </div>
  );
}
