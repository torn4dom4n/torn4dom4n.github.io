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

type Brand = {
  name: string;
  url: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function GetInTouch() {
  return (
    <div className="relative max-w-full">
      <GridContainer>
        <h2 className="max-w-lg px-2 py-8 text-[2.5rem]/10 font-semibold tracking-heading text-balance max-sm:px-4">
          Get in touch.
        </h2>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--border)] sm:h-10"
      />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 py-10 text-base/relaxed text-muted-foreground max-sm:px-4">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <div
        aria-hidden="true"
        className="h-6 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--border)] sm:h-10"
      />

      <section>
        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <div className="border-r border-border" />
            <div className="border-l border-border lg:border-x" />
            <div className="border-l border-border max-lg:hidden xl:border-x" />
            <div className="border-l border-border max-xl:hidden" />
          </div>

          <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map(({ name, url, logo: Logo }) => (
              <li
                key={name}
                className="max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-full place-content-center transition-colors hover:bg-border/10 sm:px-2 sm:py-8"
                >
                  <div className="flex h-24 w-full max-w-80 items-center gap-4">
                    <div className="rounded-radius flex size-12 items-center justify-center bg-background shadow-border transition-colors">
                      <Logo className="size-6" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold tracking-tight-alt text-foreground">
                        {name}
                      </span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
