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

      <section aria-label="Get in Touch">
        <div className="relative isolate mt-16">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-6 lg:grid-cols-8">
            <div className="border-r border-border" />
            <div className="border-r border-border" />
            <div className="border-r border-border" />
            <div className="border-r border-border max-md:hidden" />
            <div className="border-r border-border max-md:hidden" />
            <div className="border-r border-border max-lg:hidden" />
            <div className="border-r border-border max-lg:hidden" />
          </div>

          <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {brands.map(({ name, url, logo: Logo }) => (
              <li
                key={name}
                className="max-md:nth-[4n+1]:line-y max-md:nth-[4n+5]:before:hidden md:max-lg:nth-[6n+1]:line-y md:max-lg:nth-[6n+7]:before:hidden lg:nth-[8n+1]:line-y lg:nth-[8n+9]:before:hidden"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-square size-full items-center justify-center text-foreground/80 transition-colors duration-300 hover:bg-foreground hover:text-background sm:px-2 sm:py-4"
                  aria-label={`Follow me on ${name}`}
                >
                  <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                    <Logo className="size-8 sm:size-10" aria-hidden="true" />
                    <span className="absolute top-full mt-1 text-[10px] font-bold tracking-widest uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:mt-2 sm:text-xs">
                      {name}
                    </span>
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
