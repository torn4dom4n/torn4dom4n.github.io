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
    <div className="relative max-inline-full">
      <GridContainer className="2xl:before:hidden 2xl:after:hidden">
        <SectionHeader className="text-foreground/80">Socials</SectionHeader>
      </GridContainer>

      <GridContainer>
        <h2 className="ps-2 pe-2 text-[2.5rem]/10 font-medium tracking-tightest text-balance max-inline-lg max-sm:ps-4 max-sm:pe-4 2xl:mbs-0">
          Get in touch
        </h2>
      </GridContainer>

      <div className="block-6 sm:block-10" />

      <GridContainer>
        <p className="ps-2 pe-2 text-base/7 text-muted-foreground max-inline-(--breakpoint-md) max-sm:ps-4 max-sm:pe-4">
          I'm active on several platforms. Follow my work, check out what I'm building, or just drop
          by to say hello.
        </p>
      </GridContainer>

      <section aria-label="Get in Touch">
        <div className="relative isolate mbs-16">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <div className="border-e border-border" />
            <div className="border-e border-border" />
            <div className="border-e border-border" />
            <div className="border-e border-border max-md:hidden" />
            <div className="border-e border-border max-md:hidden" />
            <div className="border-e border-border max-lg:hidden" />
            <div className="border-e border-border max-lg:hidden" />
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
                  className="group duration-normal relative flex aspect-square size-full items-center justify-center text-foreground/80 transition-colors hover:bg-foreground hover:text-background sm:ps-2 sm:pe-2 sm:pbs-4 sm:pbe-4"
                  aria-label={`Follow me on ${name}`}
                >
                  <div className="duration-normal flex flex-col items-center transition-transform group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                    <Logo className="size-8 sm:size-10" aria-hidden="true" />
                    <span className="tracking-3 opacity-none duration-normal group-hover:opacity-full absolute inset-bs-full mbs-1 text-[10px] font-bold uppercase transition-opacity sm:mbs-2 sm:text-xs">
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
