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
        <h2 className="max-w-lg px-2 py-6 text-[2.5rem]/10 font-semibold tracking-heading text-balance max-sm:px-4">
          Get in touch.
        </h2>
      </GridContainer>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 py-6 text-base/relaxed text-geist-secondary max-sm:px-4">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <section className="mt-20 px-2 max-sm:px-4">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map(({ name, url, logo: Logo }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-geist-card bg-geist-background p-5 shadow-card transition-all hover:scale-[1.02] hover:shadow-elevation"
              >
                <div className="flex size-12 items-center justify-center rounded-geist bg-geist-background shadow-border transition-colors group-hover:bg-geist-accent group-hover:text-white">
                  <Logo className="size-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold tracking-tight-alt text-geist-foreground">
                    {name}
                  </span>
                  <span className="text-sm text-geist-tertiary">
                    Follow me on {name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
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
