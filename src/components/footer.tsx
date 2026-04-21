import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "relative mt-24 flex items-center justify-between py-8",
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-[image:linear-gradient(to_right,var(--border)_1px,transparent_1px)] before:bg-[size:4px_1px] before:bg-repeat-x",
        className,
      )}
    >
      <p className="text-sm text-muted-foreground">&copy; {year} Long Nhat Nguyen.</p>
      <ModeToggle />
    </footer>
  );
}
