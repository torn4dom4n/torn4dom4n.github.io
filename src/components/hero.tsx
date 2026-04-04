import GridContainer from "@/components/ui/grid-container";

export default function Hero() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="flex h-16 items-end px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25"
      >
        <span className="inline">[Running...]</span>
      </div>

      <GridContainer>
        <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400">
          <span className="text-gray-950 dark:text-white">What's up everybody.</span> My name is{" "}
          <span className="text-[1.0625rem]">Long Nhat Nguyen</span>. I explore{" "}
          <span className="font-mono text-[1.0625rem]">music</span>,{" "}
          <span className="font-mono text-[1.0625rem]">photography</span>,{" "}
          <span className="font-mono text-[1.0625rem]">technology</span>, and{" "}
          <span className="font-mono text-[1.0625rem]">nature</span>. Let's make and share things
          that bring a little positivity into the world.
        </p>
      </GridContainer>
    </div>
  );
}
