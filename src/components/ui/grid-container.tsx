import { cn } from "@/lib/utils";

export default function GridContainer({
  children,
  className,
  withBorder = true,
}: {
  children: React.ReactNode;
  className?: string | undefined;
  withBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        className,
        "relative",
        withBorder && [
          "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border",
          "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[200vw] after:-translate-x-1/2 after:bg-border",
        ],
      )}
    >
      {children}
    </div>
  );
}
