import { Fragment } from "react";
import { techMap, type TechKey } from "@/data/projectsData";
import { HorizontalDivider } from "../dividers";

const skills: Record<string, TechKey[]> = {
  Languages: ["ts", "js", "html", "css3", "cpp"],
  "Frameworks & Libraries": [
    "next",
    "react",
    "express",
    "tailwind",
    "tanstack",
    "motion",
  ],
  "Backend & Databases": ["node", "postgres", "mongo", "neon", "prisma"],
  "Platforms & deployment": ["github", "netlify", "vercel"],
};
export const Skills = () => {
  return (
    <section className="flex w-full flex-col lg:w-[46%]">
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold font-jetbrains tracking-tight">
          Skills
        </h3>
      </div>

      <HorizontalDivider />

      {Object.entries(skills).map(([title, technologies], index) => (
        <Fragment key={title}>
          <div className="flex flex-col gap-2 px-6 py-4">
            <h3 className="font-jetbrains text-sm font-medium">{title}</h3>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const { icon: Icon, iconClassName, label } = techMap[tech];

                return (
                  <span
                    key={tech}
                    title={label}
                    className="inline-flex items-center gap-1 rounded-xl [box-shadow:inset_2px_2px_2px_#e6e6e6,inset_0px_-4px_4px_#ffffff] border pointer-events-none border-black/10 bg-background/90 dark:bg-background dark:[box-shadow:inset_0px_1px_2px_#727272] px-2 py-1 text-xs text-zinc-800 dark:text-zinc-100 dark:border-none"
                  >
                    <Icon
                      className={`size-3 shrink-0 ${iconClassName}`}
                      aria-hidden
                    />
                    <span className="font-jetbrains">{label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {index < Object.entries(skills).length - 1 && <HorizontalDivider />}
        </Fragment>
      ))}
    </section>
  );
};
