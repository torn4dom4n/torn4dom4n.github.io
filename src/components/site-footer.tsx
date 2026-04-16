import GitHubIcon from "~icons/simple-icons/github";
import InstagramIcon from "~icons/simple-icons/instagram";
import LinkedInIcon from "~icons/simple-icons/linkedin";
import XIcon from "~icons/simple-icons/x";

import { ModeToggle } from "@/components/theme-toggle";
import GridContainer from "@/components/ui/grid-container";
import { cn } from "@/lib/utils";

const year = new Date().getFullYear();

const navigation = {
  resources: [
    { name: "Docs", href: "#" },
    { name: "Support Policy", href: "#" },
    { name: "Learn", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Team", href: "#" },
  ],
  more: [
    { name: "Contact", href: "#" },
    { name: "Community", href: "#" },
    { name: "GitHub", href: "https://github.com/torn4dom4n" },
    { name: "Releases", href: "#" },
    { name: "Telemetry", href: "#" },
    { name: "Governance", href: "#" },
  ],
  about: [
    { name: "Open Source Software", href: "#" },
    { name: "GitHub", href: "https://github.com/torn4dom4n" },
    { name: "X", href: "https://x.com/torn4dom4n" },
    { name: "LinkedIn", href: "https://linkedin.com/in/torn4dom4n" },
    { name: "Instagram", href: "https://instagram.com/torn4dom4n" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Preferences", href: "#" },
  ],
};

const social = [
  {
    name: "GitHub",
    href: "https://github.com/torn4dom4n",
    icon: GitHubIcon,
  },
  {
    name: "X",
    href: "https://x.com/torn4dom4n",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/torn4dom4n",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/torn4dom4n",
    icon: InstagramIcon,
  },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn("relative pt-16 pb-12 sm:pt-20 lg:pt-24", className)}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <GridContainer className="py-12 sm:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Resources</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">More</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.more.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">About</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Stay updated on new releases and features, guides, and case studies.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-950/10 bg-white px-3 py-1.5 text-base text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 sm:text-sm/6 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-gray-950 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 dark:focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </GridContainer>

      <div className="mx-auto mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-6">
          <ModeToggle />
          <p className="text-sm/6 text-gray-600 dark:text-gray-400">
            &copy; {year} Long Nhat Nguyen. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 transition-colors hover:text-gray-500 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
            >
              <item.icon className="size-5" aria-hidden="true" />
              <span className="sr-only">{item.name} (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
