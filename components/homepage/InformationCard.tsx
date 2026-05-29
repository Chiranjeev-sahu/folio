import Image from "next/image";
// import profile from "./profile.jpg";
import profile from "@/public/profile.jpg";
import { CustomToggle } from "@/components/custom-theme-switcher";
export const InfoCard = () => {
  return (
    <section className="flex w-full flex-wrap items-start justify-between gap-3 p-4 py-2 lg:w-[46%]">
      <div className="flex min-w-0 gap-3">
        <div className="bg-background p-2 rounded-sm border border-color [box-shadow:inset_3px_3px_6px_#d1d1d1,inset_-1px_-1px_2px_#d1d1d1] dark:[box-shadow:inset_2px_2px_6px_#222222,inset_-2px_-2px_4px_#121212]">
          <div className="relative w-25 border  aspect-square shadow-[1px_2px_3px_var(--border-color)] rounded-sm overflow-hidden">
            <Image
              src={profile}
              alt="Profile picture"
              fill
              className="object-cover"
              quality={80}
              fetchPriority="high"
              placeholder="blur"
              sizes="110px"
            />
          </div>
        </div>

        <header className="mt-auto mb-2 min-w-0">
          <h1 className="font-medium leading-none md:leading-normal tracking-tighter text-shadow-xs  font-jetbrains text-[28px] md:text-3xl  antialiased">
            Chiranjeev
          </h1>
          <a
            href="https://x.com/chiruexe"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit chiruexe on X"
            className="inline-flex  font-mono font-medium text-muted-foreground/50 no-underline transition-all duration-700 hover:-translate-y-px hover:text-foreground/50 focus-visible:-translate-y-px focus-visible:text-foreground/50 focus-visible:outline-none"
          >
            @chiruexe
          </a>
        </header>
      </div>
      <div className="ml-auto flex shrink-0 items-center gap-2 self-start">
        <span className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-emerald-500/70 px-2 py-0.5 text-xs font-light text-emerald-500 [box-shadow:inset_3px_3px_8px_#b2f1a1] dark:[box-shadow:inset_2px_2px_26px_#114021] sm:px-3 sm:text-sm">
          <span
            className="size-2 animate-pulse rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          Available
        </span>
        <div>
          <CustomToggle />
        </div>
      </div>
    </section>
  );
};
