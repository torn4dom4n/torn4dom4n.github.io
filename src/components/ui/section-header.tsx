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
        "origin-be-e -inset-s-10 inset-bs-0 text-start font-mono text-sm font-semibold lowercase max-2xl:mbe-4 max-2xl:ps-2 max-2xl:pe-2 max-sm:ps-4 max-sm:pe-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-end",
      )}
    >
      {children}
    </p>
  );
}
