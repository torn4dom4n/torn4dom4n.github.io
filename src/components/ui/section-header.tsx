import { cn } from "@/lib/utils";

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
        "top-0 -left-10 origin-bottom-right text-left font-mono text-sm font-bold tracking-widest max-2xl:mb-4 max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right",
      )}
    >
      {children}
    </p>
  );
}
