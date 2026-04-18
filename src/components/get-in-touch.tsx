import AppleIcon from "~icons/simple-icons/apple";
import FacebookIcon from "~icons/simple-icons/facebook";
import GitHubIcon from "~icons/simple-icons/github";
import InstagramIcon from "~icons/simple-icons/instagram";
import LinkedInIcon from "~icons/simple-icons/linkedin";
import RedditIcon from "~icons/simple-icons/reddit";
import SnapchatIcon from "~icons/simple-icons/snapchat";
import SoundCloudIcon from "~icons/simple-icons/soundcloud";
import SpotifyIcon from "~icons/simple-icons/spotify";
import TikTokIcon from "~icons/simple-icons/tiktok";
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

      <section className="mt-16 flex justify-center px-4" aria-label="Follow Me">
        <div className="grid grid-cols-4 border-t border-l border-border sm:grid-cols-5 md:grid-cols-6">
          {brands.map(({ name, url, logo: Logo }) => (
            <div key={name} className="border-r border-b border-border">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square size-full min-h-20 min-w-20 items-center justify-center text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background sm:size-32"
                aria-label={`Follow me on ${name} (opens in a new tab)`}
              >
                <Logo className="size-8 sm:size-10" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const brands: Brand[] = [
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
    name: "Spotify",
    url: "https://open.spotify.com/user/torn4dom4n",
    logo: SpotifyIcon,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/torn4dom4n",
    logo: FacebookIcon,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@torn4dom4n",
    logo: TikTokIcon,
  },
  {
    name: "X",
    url: "https://x.com/torn4dom4n",
    logo: XIcon,
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/torn4dom4n",
    logo: SnapchatIcon,
  },
  {
    name: "Apple",
    url: "https://music.apple.com/profile/torn4dom4n",
    logo: AppleIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/torn4dom4n",
    logo: GitHubIcon,
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
    name: "SoundCloud",
    url: "https://soundcloud.com/torn4dom4n",
    logo: SoundCloudIcon,
  },
];
