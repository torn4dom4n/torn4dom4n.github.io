import { cn } from "@/lib/utils";

/**
 * SectionHeader Block Component
 *
 * Renders an absolute-positioned sidebar-like section category label:
 * - On smaller/standard screen sizes (under 2xl), it displays as a standard left-aligned block text.
 * - On larger screens (2xl and above), it dynamically repositions itself absolutely (`2xl:absolute`),
 *   rotates -90 degrees (`2xl:-rotate-90`), translates to fit the left margin/gutter guidelines,
 *   and acts as a vertical label.
 * - Features clean monospace lowercase styling (`font-mono text-sm font-semibold lowercase`).
 */
export default function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        className,
        "top-0 -left-10 origin-bottom-right text-left font-mono text-sm font-semibold lowercase max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right",
      )}
    >
      {children}
    </p>
  );
}
