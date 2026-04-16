import { ModeToggle } from "@/components/theme-toggle";
import GridContainer from "@/components/ui/grid-container";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("pb-12", className)}>
      <GridContainer>
        <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {year} Long Nhat Nguyen.
          </p>
          <ModeToggle />
        </div>
      </GridContainer>
    </footer>
  );
}
