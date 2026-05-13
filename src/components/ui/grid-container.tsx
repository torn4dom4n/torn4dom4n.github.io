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
        "before:absolute before:inset-s-1/2 before:inset-bs-0 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border",
        "after:absolute after:inset-s-1/2 after:inset-be-0 after:h-px after:w-[200vw] after:-translate-x-1/2 after:bg-border",
      )}
    >
      {children}
    </div>
  );
}
