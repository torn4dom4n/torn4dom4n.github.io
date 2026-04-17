import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

import GridContainer from "./ui/grid-container";

const year = new Date().getFullYear();

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-24 border-t border-black/5 dark:border-white/10", className)}>
      <GridContainer className="before:hidden after:hidden">
        <div className="grid grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter">▲</span>
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Building things that bring a little positivity into the world.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="#now-playing" className="hover:text-black dark:hover:text-white">
                  Now Playing
                </a>
              </li>
              <li>
                <a href="#get-in-touch" className="hover:text-black dark:hover:text-white">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">Social</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="https://github.com/torn4dom4n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/torn4dom4n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white">About</h3>
            <p className="mt-4 text-sm text-gray-500">
              Based in Vietnam. Available for new projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-black/5 px-4 py-8 md:flex-row md:px-6 lg:px-8 dark:border-white/10">
          <p className="text-sm text-gray-500">
            &copy; {year} Long Nhat Nguyen. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ModeToggle />
          </div>
        </div>
      </GridContainer>
    </footer>
  );
}
