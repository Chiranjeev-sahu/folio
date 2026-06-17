import { Globe } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { techMap, type Project } from "@/data/projectsData";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex w-full h-full gap-3 md:flex-col">
      <div className="w-[48%] shrink-0 bg-background p-1 rounded-sm border border-color [box-shadow:inset_3px_3px_6px_#d1d1d1,inset_-1px_-1px_2px_#d1d1d1] dark:[box-shadow:inset_1px_1px_2px_#202020] md:w-full">
        <div className="relative aspect-4/4 sm:aspect-4/3 w-full overflow-hidden rounded-sm border shadow-[1px_1px_2px_var(--border-color)] md:aspect-video">
          <Image
            src={project.lightModeSrc}
            alt={`${project.title} ${project.imageTitle}`}
            fill
            className="object-cover dark:hidden"
            quality={80}
            sizes="(min-width: 1024px) 23vw, (min-width: 768px) 50vw, 44vw"
          />

          <Image
            src={project.src}
            alt={`${project.title} ${project.imageTitle}`}
            fill
            className="hidden object-cover dark:block"
            quality={80}
            sizes="(min-width: 1024px) 23vw, (min-width: 768px) 50vw, 44vw"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 font-jetbrains flex-col gap-2">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground ">{project.imageTitle}</p>
          <h3 className="truncate text-sm font-medium  ">{project.title}</h3>
        </div>

        <p className="line-clamp-3 text-xs leading-5 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex justify-between mt-auto">
          <div className="flex flex-wrap gap-0">
            {project.tech.map((tech) => {
              const techInfo = techMap[tech];
              if (!techInfo) return null;
              const { icon: Icon, iconClassName, label } = techInfo;

              return (
                <span
                  key={tech}
                  title={label}
                  className="inline-flex size-5 items-center justify-center rounded-sm  bg-background text-muted-foreground dark:border-white/10"
                >
                  <Icon
                    className={`size-3 sm:size-4 ${iconClassName}`}
                    aria-hidden
                  />
                </span>
              );
            })}
          </div>

          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex size-7 items-center justify-center rounded-full border border-black/10 text-muted-foreground transition-colors hover:text-foreground dark:border-white/10"
            >
              <SiGithub className="size-3.5 " aria-hidden />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="inline-flex size-7 items-center justify-center rounded-full border border-black/10 text-muted-foreground transition-colors hover:text-slate-800 hover:dark:text-slate-400 dark:border-white/10"
            >
              <Globe className="size-3.5 " aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
