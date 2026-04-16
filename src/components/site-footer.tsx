import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("px-4 pb-12 md:px-6 lg:px-8", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-gray-950/5 pt-8 sm:flex-row dark:border-white/10">
        <div className="flex items-center gap-6">
          <ModeToggle />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {year} Long Nhat Nguyen.
          </p>
        </div>
      </div>
    </footer>
  );
}
