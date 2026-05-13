import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "relative mbs-24 flex items-center justify-between pbs-8 pbe-8",
        "before:absolute before:inset-s-1/2 before:inset-bs-0 before:-translate-x-1/2 before:bg-border before:block-px before:inline-[200vw]",
        className,
      )}
    >
      <p className="text-sm text-muted-foreground">&copy; {year} Long Nhat Nguyen.</p>
      <ModeToggle />
    </footer>
  );
}
