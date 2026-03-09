import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={cn(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <ModeToggle />
        <div className="flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>©&nbsp;{year}&nbsp;Long Nhat Nguyen.</span>
        </div>
      </div>
    </div>
  );
}
