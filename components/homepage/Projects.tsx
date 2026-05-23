import { Fragment } from "react";
import { projects } from "@/data/projectsData";
import { HorizontalDivider, VerticalDivider } from "../dividers";
import { ProjectCard } from "../ui/skiper-ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="flex w-full flex-col lg:w-[46%]">
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold font-jetbrains tracking-tight">
          Projects
        </h3>
      </div>

      <HorizontalDivider />

      <div className="relative grid w-full grid-cols-1 md:grid-cols-2">
        <VerticalDivider className="absolute left-1/2 hidden -translate-x-1/2 md:block" />

        {projects.map((project, index) => {
          const isLastProject = index === projects.length - 1;
          const isEndOfMdRow = index % 2 === 1;
          const hasMoreMdRows = index < projects.length - 1;

          return (
            <Fragment key={`${project.slug}-${index}`}>
              <div className="p-4 flex">
                <ProjectCard project={project} />
              </div>

              {!isLastProject && <HorizontalDivider className="md:hidden" />}

              {isEndOfMdRow && hasMoreMdRows && (
                <HorizontalDivider className="hidden md:col-span-2 md:block" />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};
