import FacebookIcon from "~icons/simple-icons/facebook";
import GitHubIcon from "~icons/simple-icons/github";
import InstagramIcon from "~icons/simple-icons/instagram";
import LinkedInIcon from "~icons/simple-icons/linkedin";
import PinterestIcon from "~icons/simple-icons/pinterest";
import RedditIcon from "~icons/simple-icons/reddit";
import SoundCloudIcon from "~icons/simple-icons/soundcloud";
import XIcon from "~icons/simple-icons/x";
import YouTubeIcon from "~icons/simple-icons/youtube";

import GridContainer from "@/components/ui/grid-container";
import { cn } from "@/lib/utils";

type Brand = {
  name: string;
  url: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colSpan?: string;
  rowSpan?: string;
};

export default function LetsConnect() {
  return (
    <div className="relative max-w-full">
      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Let's connect.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:h-10 dark:[--pattern-fg:var(--color-white)]/10"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-400">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <GridContainer className="py-16">
        <div className="px-2 max-sm:px-4">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-3 lg:gap-6">
            {brands.map(({ name, url, logo: Logo, colSpan, rowSpan }) => (
              <li key={name} className={cn("group", colSpan, rowSpan)}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full min-h-32 flex-col items-center justify-center gap-4 rounded-3xl border border-gray-950/5 bg-gray-950/2.5 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-950/5 md:min-h-40 dark:border-white/10 dark:bg-white/2.5 dark:hover:bg-white/5"
                >
                  <Logo
                    className="size-10 transition-transform duration-300 group-hover:scale-110 md:size-12"
                    aria-hidden="true"
                  />
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-700 md:text-lg dark:text-gray-300">
                      {name}
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </GridContainer>
    </div>
  );
}

const brands: Brand[] = [
  {
    name: "GitHub",
    url: "https://github.com/torn4dom4n",
    logo: GitHubIcon,
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    name: "X",
    url: "https://x.com/torn4dom4n",
    logo: XIcon,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/torn4dom4n",
    logo: FacebookIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/torn4dom4n",
    logo: InstagramIcon,
    colSpan: "md:col-span-2",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/torn4dom4n",
    logo: LinkedInIcon,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@torn4dom4n",
    logo: YouTubeIcon,
    colSpan: "md:row-span-2",
  },
  {
    name: "Reddit",
    url: "https://reddit.com/user/torn4dom4n",
    logo: RedditIcon,
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/torn4dom4n",
    logo: PinterestIcon,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/torn4dom4n",
    logo: SoundCloudIcon,
  },
];
