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
      <GridContainer className="2xl:before:hidden">
        <SectionHeader className="text-foreground/80">Socials</SectionHeader>
        <div className="pbs-12 pbe-12">
          <h2 className="ps-2 pe-2 text-[2.5rem]/10 font-medium tracking-tightest text-balance max-inline-lg max-sm:ps-4 max-sm:pe-4 2xl:mbs-0">
            Get in touch
          </h2>
          <div className="block-6 sm:block-10" />
          <p className="ps-2 pe-2 text-base/7 text-muted-foreground max-inline-(--breakpoint-md) max-sm:ps-4 max-sm:pe-4">
            I'm active on several platforms. Follow my work, check out what I'm building, or just
            drop by to say hello.
          </p>
        </div>
      </GridContainer>

      <section aria-label="Social links">
        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <div className="border-e border-border block-full" />
            <div className="border-e border-border block-full" />
            <div className="border-e border-border block-full" />
            <div className="border-e border-border block-full max-md:hidden" />
            <div className="border-e border-border block-full max-md:hidden" />
            <div className="border-e border-border block-full max-lg:hidden" />
            <div className="border-e border-border block-full max-lg:hidden" />
          </div>

          <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {brands.map(({ name, url, logo: Logo }) => {
              return (
                <li key={name} className="relative">
                  <div className="absolute -inset-s-[100vw] inset-be-0 bg-border block-px inline-[200vw]" />

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group duration-normal relative flex aspect-square items-center justify-center text-foreground/80 transition-colors inline-full hover:bg-foreground hover:text-background sm:ps-2 sm:pe-2 sm:pbs-4 sm:pbe-4"
                    aria-label={`Follow me on ${name}`}
                  >
                    <div className="duration-normal flex flex-col items-center transition-transform group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                      <Logo className="size-8 sm:size-10" aria-hidden="true" />
                      <span className="duration-normal absolute inset-bs-full mbs-1 text-[10px] font-bold tracking-3 uppercase opacity-0 transition-all group-hover:opacity-100 sm:mbs-2 sm:text-xs">
                        {name}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
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
