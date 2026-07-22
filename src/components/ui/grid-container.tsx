import { cn } from "@/lib/utils";

export default function GridContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const hideTopOn2xl = className?.includes("2xl:before:hidden");
  const hideBottomOn2xl = className?.includes("2xl:after:hidden");

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

      {/* Top-left dot */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 left-0 hidden size-1.5 -translate-x-1/2 -translate-y-1/2 border border-border bg-background md:block",
          hideTopOn2xl && "2xl:hidden",
        )}
      />
      {/* Top-right dot */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 right-0 hidden size-1.5 translate-x-1/2 -translate-y-1/2 border border-border bg-background md:block",
          hideTopOn2xl && "2xl:hidden",
        )}
      />
      {/* Bottom-left dot */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 hidden size-1.5 -translate-x-1/2 translate-y-1/2 border border-border bg-background md:block",
          hideBottomOn2xl && "2xl:hidden",
        )}
      />
      {/* Bottom-right dot */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-0 bottom-0 hidden size-1.5 translate-x-1/2 translate-y-1/2 border border-border bg-background md:block",
          hideBottomOn2xl && "2xl:hidden",
        )}
      />
    </div>
  );
}
