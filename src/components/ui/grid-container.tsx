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
        "before:absolute before:inset-s-1/2 before:inset-bs-0 before:-translate-x-1/2 before:bg-border before:block-px before:inline-[200vw]",
        "after:absolute after:inset-s-1/2 after:inset-be-0 after:-translate-x-1/2 after:bg-border after:block-px after:inline-[200vw]",
      )}
    >
      {children}
    </div>
  );
}
