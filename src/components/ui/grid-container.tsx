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
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-screen before:-translate-x-1/2 before:bg-gray-950/5 dark:before:bg-white/5",
        "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-screen after:-translate-x-1/2 after:bg-gray-950/5 dark:after:bg-white/5",
      )}
    >
      {children}
    </div>
  );
}
