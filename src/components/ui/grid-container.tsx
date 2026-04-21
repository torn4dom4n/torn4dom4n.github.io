import { cn } from "@/lib/utils";

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
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border before:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[200vw] after:-translate-x-1/2 after:bg-border after:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
      )}
    >
      {children}
    </div>
  );
}
