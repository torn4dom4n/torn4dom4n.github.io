import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string | undefined }) {
  return (
    <footer
      className={cn(
        "relative mt-24 flex items-center justify-between py-12",
        "before:absolute before:top-0 before:left-1/2 before:h-px before:w-[200vw] before:-translate-x-1/2 before:bg-border",
        className,
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">&copy; {year} Long Nhat Nguyen.</p>
      <ModeToggle />
    </footer>
  );
}
