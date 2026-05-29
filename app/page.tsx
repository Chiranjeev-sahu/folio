import { HorizontalDivider } from "@/components/dividers";
import { AboutMe } from "@/components/homepage/Aboutme";
import { Header } from "@/components/homepage/AnimatedHeader";
import { Footer } from "@/components/homepage/Footer";
import GithubGraph from "@/components/homepage/GithubGraph";
import GithubGraphSkeleton from "@/components/homepage/GithubGraphSkeleton";
import { InfoCard } from "@/components/homepage/InformationCard";
import { Projects } from "@/components/homepage/Projects";
import { Skills } from "@/components/homepage/Skills";
import { Socials } from "@/components/homepage/SocialsNav";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center overflow-x-hidden">
      {/* Left vertical line: 8px from edge on mobile, 30% on large */}
      <div
        className="absolute top-0 bottom-0 left-2 lg:left-[27%] w-0 border-r border-black/30 dark:border-white/15 pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
        }}
      />
      {/* Right vertical line */}
      <div
        className="absolute top-0 bottom-0 right-2 lg:right-[27%] w-0 border-r border-black/30 dark:border-white/15 pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
        }}
      />
      <Header />
      <HorizontalDivider />
      <InfoCard />
      <HorizontalDivider />
      <AboutMe />
      <HorizontalDivider />
      <Socials />
      <HorizontalDivider />
      <Suspense fallback={<GithubGraphSkeleton />}>
        <GithubGraph />
      </Suspense>{" "}
      <HorizontalDivider />
      <Projects />
      <HorizontalDivider />
      <Skills />
      <HorizontalDivider />
      <Footer />
    </div>
  );
}
