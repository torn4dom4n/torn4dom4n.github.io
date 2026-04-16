import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn("mx-auto max-w-(--breakpoint-2xl) px-4 pb-12 md:px-6 lg:px-8", className)}
    >
      <div className="flex items-center justify-between border-t border-gray-950/5 pt-8 dark:border-white/10">
        <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {year} Long Nhat Nguyen.</p>
        <ModeToggle />
      </div>
    </footer>
  );
}
