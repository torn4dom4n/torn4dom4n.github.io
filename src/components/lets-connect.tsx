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

interface Brand {
  name: string;
  url: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function LetsConnect() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="h-12 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:h-20 dark:[--pattern-fg:var(--color-white)]/10"
      />

      <GridContainer>
        <h2 className="px-2 text-3xl font-bold tracking-tighter text-balance max-sm:px-4 sm:text-4xl lg:text-5xl">
          Let's connect.
        </h2>
      </GridContainer>

      <div className="h-4 sm:h-6" />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <div className="h-10 sm:h-16" />

      <div className="grid grid-cols-1 border-t border-gray-950/5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:border-white/10">
        {brands.map(({ name, url, logo: Logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-32 items-center gap-4 border-b border-gray-950/5 px-6 transition-colors hover:bg-gray-950/[0.02] sm:border-r dark:border-white/10 dark:hover:bg-white/[0.02]"
          >
            <Logo className="size-8 text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {name}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

const brands: Brand[] = [
  {
    name: "GitHub",
    url: "https://github.com/torn4dom4n",
    logo: GitHubIcon,
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
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@torn4dom4n",
    logo: YouTubeIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/torn4dom4n",
    logo: LinkedInIcon,
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
