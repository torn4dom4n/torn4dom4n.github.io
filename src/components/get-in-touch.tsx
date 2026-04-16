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
    <section id="get-in-touch" className="relative">
      <GridContainer>
        <div className="px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <h2 className="text-[2.5rem]/10 font-bold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
            Get in touch.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I'm active on several platforms. Follow my work, check out what I'm building, or just
            drop by to say hello.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map(({ name, url, logo: Logo }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-xl border border-gray-950/5 bg-white p-6 transition-all hover:border-black/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-white/10 dark:bg-black dark:hover:border-white/20 dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]"
              >
                <div className="flex size-12 items-center justify-center rounded-lg border border-gray-950/5 bg-gray-50 transition-colors group-hover:bg-gray-100 dark:border-white/10 dark:bg-gray-900 dark:group-hover:bg-gray-800">
                  <Logo className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
                  <p className="text-sm text-gray-500">Follow @torn4dom4n</p>
                </div>
                <div className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">
                  <svg
                    className="size-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
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
