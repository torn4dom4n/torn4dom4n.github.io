import React from "react";

import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  const [copied, setCopied] = React.useState(false);
  const command = "npx @torn4dom4n/website@latest";

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-16 sm:pt-24 lg:pt-32">
      <GridContainer className="before:hidden">
        <div className="flex flex-col items-center px-4 text-center md:px-6 lg:px-8">
          <a
            href="https://github.com/torn4dom4n"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center rounded-full border border-black/5 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:border-white/10 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:bg-gray-900"
          >
            <span className="mr-2 rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-500">
              NEW
            </span>
            Available for new projects
            <svg className="ml-2 size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
            </svg>
          </a>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tighter text-balance sm:text-7xl lg:text-8xl xl:text-9xl">
            What's up everybody.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            My name is Long Nhat Nguyen. I explore music, photography, technology, and nature. Let's
            make and share things that bring a little positivity into the world.
          </p>

          <div className="mt-12 w-full max-w-md">
            <div className="relative flex items-center rounded-lg border border-black/5 bg-gray-50 p-1 font-mono text-sm dark:border-white/10 dark:bg-gray-900/50">
              <span className="flex-1 px-3 py-2 text-gray-600 dark:text-gray-400">
                <span className="mr-2 text-amber-500">▲</span>
                {command}
              </span>
              <button
                onClick={copyToClipboard}
                className="inline-flex size-9 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-200/50 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                title="Copy to clipboard"
              >
                {copied ? (
                  <svg
                    className="size-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </GridContainer>

      <div aria-hidden="true" className="mt-24 h-px w-full bg-black/5 dark:bg-white/10" />
    </div>
  );
}
