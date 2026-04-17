import GridContainer from "./ui/grid-container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
      <GridContainer className="before:hidden after:hidden">
        <div className="flex h-14 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter">▲</span>
            </a>
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <a
                href="#now-playing"
                className="transition-colors hover:text-black/70 dark:hover:text-white/70"
              >
                Now Playing
              </a>
              <a
                href="#get-in-touch"
                className="transition-colors hover:text-black/70 dark:hover:text-white/70"
              >
                Get in Touch
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/torn4dom4n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus-visible:ring-white"
            >
              Ship
            </a>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
