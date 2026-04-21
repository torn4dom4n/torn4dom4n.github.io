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
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-[image:linear-gradient(to_right,var(--border)_1px,transparent_1px)] before:bg-[size:4px_1px] before:bg-repeat-x",
        "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[200vw] after:-translate-x-1/2 after:bg-[image:linear-gradient(to_right,var(--border)_1px,transparent_1px)] after:bg-[size:4px_1px] after:bg-repeat-x",
      )}
    >
      {children}
    </div>
  );
}
