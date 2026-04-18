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
import SectionHeader from "@/components/ui/section-header";

type Brand = {
  name: string;
  url: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function GetInTouch() {
  return (
    <div className="relative max-w-full">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Socials</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="max-w-lg px-2 text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Get in touch
        </h2>
      </GridContainer>

      <div className="h-6 sm:h-10" />

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-base/7 text-muted-foreground max-sm:px-4">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <section
        className="mt-16 overflow-hidden border-y border-border py-12"
        aria-label="Social media links"
      >
        {/* Accessible non-animated list for screen readers */}
        <ul className="sr-only">
          {brands.map(({ name, url }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name} (opens in a new tab)
              </a>
            </li>
          ))}
        </ul>

        {/* Visual marquee track */}
        <div className="group flex overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee py-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...brands, ...brands].map(({ name, url, logo: Logo }, index) => (
              <div key={`${name}-${index}`} className="flex items-center">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 transition-colors hover:text-ring sm:px-12"
                  tabIndex={-1}
                >
                  <Logo className="size-8 sm:size-12" />
                  <span className="text-3xl font-bold tracking-tighter uppercase sm:text-5xl">
                    {name}
                  </span>
                </a>
                <span className="text-2xl text-border sm:text-4xl">✦</span>
              </div>
            ))}
          </div>
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
