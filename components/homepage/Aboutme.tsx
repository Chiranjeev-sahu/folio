import { TechKey, techMap } from "@/data/projectsData";

const stack: TechKey[] = ["next", "node", "prisma", "express", "ts"];

export const AboutMe = () => {
  return (
    <>
      <div className="w-full px-6 py-2 lg:w-[60%]">
        <h3 className="font-jetbrains font-extralight text-sm md:text-base antialiased tracking-tighter ">
          Sup! I&apos;m{" "}
          <span className="italic underline font-medium underline-offset-2">
            Chiranjeev
          </span>
          , a full-stack developer obsessed with{" "}
          <span className="font-normal text-bold">
            building, breaking, fixing, polishing,
          </span>{" "}
          and <span className="font-normal text-bold"> shipping</span>{" "}
          real-world products.
          <br />
          <br />I thrive on building{" "}
          <span className="font-normal">practical systems</span> with{" "}
          <span className="font-normal">clean execution</span> and a
          <span className="font-normal"> detail-oriented mindset</span>.
          <br />
          <br />I specialize in turning complex problems into{" "}
          <span className="font-normal">scalable solutions</span> with clean
          code and modern architectures. My toolkit includes{" "}
          <span className="font-normal align-middle">
            {stack.map((tech, index) => {
              const { icon: Icon } = techMap[tech];
              return (
                <span key={tech}>
                  <span className="inline-flex items-center gap-1 align-middle whitespace-nowrap">
                    <Icon
                      className={`size-3 md:size-4 shrink-0 ${techMap[tech].iconClassName}`}
                    />
                    <span>{techMap[tech].label}</span>
                  </span>
                  {index < stack.length - 2 && ", "}
                  {index === stack.length - 2 && ", and "}
                </span>
              );
            })}
          </span>{" "}
          but I adapt quickly to new technologies.
        </h3>
      </div>
    </>
  );
};
