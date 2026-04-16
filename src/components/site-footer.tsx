import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("flex items-center justify-between pb-12", className)}>
      <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {year} Long Nhat Nguyen.</p>
      <ModeToggle />
    </footer>
  );
}
