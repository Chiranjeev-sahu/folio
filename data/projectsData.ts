import { Database, ShieldCheck, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiEslint,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";

export type TechKey =
  | "next"
  | "ts"
  | "react"
  | "prisma"
  | "node"
  | "motion"
  | "tailwind"
  | "eslint"
  | "express"
  | "radixui"
  | "github"
  | "css3"
  | "js"
  | "html"
  | "cpp"
  | "tanstack"
  | "postgres"
  | "mongo"
  | "neon"
  | "zod"
  | "netlify"
  | "vercel";

export type TechIcon = IconType | LucideIcon;

export type TechMeta = {
  label: string;
  icon: TechIcon;
  iconClassName: string;
};

export type Project = {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc: string;
  description: string;
  tech: TechKey[];
  github: string;
  live: string;
};

export const techMap: Record<TechKey, TechMeta> = {
  next: {
    label: "Next.js",
    icon: SiNextdotjs,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
  },
  ts: {
    label: "TypeScript",
    icon: SiTypescript,
    iconClassName: "text-[#3178C6] dark:text-[#60a5fa]",
  },
  react: {
    label: "React",
    icon: SiReact,
    iconClassName: "text-[#149ECA] dark:text-[#67e8f9]",
  },
  prisma: {
    label: "Prisma",
    icon: SiPrisma,
    iconClassName: "text-[#0c344b] dark:text-[#9ac6dd]",
  },

  node: {
    label: "Node.js",
    icon: SiNodedotjs,
    iconClassName: "text-[#539E43] dark:text-[#6cc24a]",
  },
  motion: {
    label: "Motion",
    icon: SiFramer,
    iconClassName: "text-[#0055FF] dark:text-[#93c5fd]",
  },
  tailwind: {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    iconClassName: "text-[#06B6D4] dark:text-[#67e8f9]",
  },
  eslint: {
    label: "ESLint",
    icon: SiEslint,
    iconClassName: "text-[#4B32C3] dark:text-[#a78bfa]",
  },
  express: {
    label: "Express",
    icon: SiExpress,
    iconClassName: "text-zinc-700 dark:text-zinc-300",
  },
  radixui: {
    label: "Radix UI",
    icon: SiRadixui,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
  },

  github: {
    label: "GitHub",
    icon: SiGithub,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
  },
  css3: {
    label: "CSS",
    icon: SiCss,
    iconClassName: "text-[#663399] dark:text-[#c084fc]",
  },
  js: {
    label: "JavaScript",
    icon: SiJavascript,
    iconClassName: "text-[#F7DF1E] dark:text-[#fde047]",
  },
  html: {
    label: "HTML",
    icon: SiHtml5,
    iconClassName: "text-[#E34F26] dark:text-[#fb923c]",
  },
  cpp: {
    label: "C++",
    icon: SiCplusplus,
    iconClassName: "text-[#00599C] dark:text-[#60a5fa]",
  },
  tanstack: {
    label: "TanStack Query",
    icon: SiReactquery,
    iconClassName: "text-[#FF4154] dark:text-[#fb7185]",
  },
  postgres: {
    label: "PostgreSQL",
    icon: SiPostgresql,
    iconClassName: "text-[#4169E1] dark:text-[#93c5fd]",
  },
  mongo: {
    label: "MongoDB",
    icon: SiMongodb,
    iconClassName: "text-[#47A248] dark:text-[#86efac]",
  },
  neon: {
    label: "Neon",
    icon: Database,
    iconClassName: "text-[#00E599] dark:text-[#5eead4]",
  },
  zod: {
    label: "Zod",
    icon: ShieldCheck,
    iconClassName: "text-blue-500 dark:text-blue-400",
  },
  netlify: {
    label: "Netlify",
    icon: SiNetlify,
    iconClassName: "text-[#00C7B7] dark:text-[#2dd4bf]",
  },
  vercel: {
    label: "Vercel",
    icon: SiVercel,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
  },
};

export const iconMap: Record<TechKey, TechIcon> = {
  next: techMap.next.icon,
  ts: techMap.ts.icon,
  react: techMap.react.icon,
  prisma: techMap.prisma.icon,
  node: techMap.node.icon,
  motion: techMap.motion.icon,
  tailwind: techMap.tailwind.icon,
  eslint: techMap.eslint.icon,
  express: techMap.express.icon,
  radixui: techMap.radixui.icon,
  github: techMap.github.icon,
  css3: techMap.css3.icon,
  js: techMap.js.icon,
  html: techMap.html.icon,
  cpp: techMap.cpp.icon,
  tanstack: techMap.tanstack.icon,
  postgres: techMap.postgres.icon,
  mongo: techMap.mongo.icon,
  neon: techMap.neon.icon,
  zod: techMap.zod.icon,
  netlify: techMap.netlify.icon,
  vercel: techMap.vercel.icon,
};

export const projects: Project[] = [
  {
    slug: "scribe",
    title: "Scribe",
    imageTitle: "Blog platform",
    src: "/projects/scribe-dark.png",
    lightModeSrc: "/projects/scribe-light.png",
    description:
      "A minimalist, high-performance blogging engine with sleek UI and tasteful microinteractions",
    tech: [
      "ts",
      "react",
      "node",
      "express",
      "tailwind",
      "motion",
      "zod",
      "eslint",
      "tanstack",
    ],
    github: "https://github.com/Chiranjeev-sahu/Scribe",
    live: "https://scriibe.netlify.app/",
  },

  {
    slug: "relay",
    title: "Relay3",
    imageTitle: "API Workspace",
    src: "/projects/relay-dark.png",
    lightModeSrc: "/projects/relay-light.png",
    description:
      "A collaborative API testing toolkit for teams that want fast request flows.",
    tech: ["ts", "node", "express", "prisma", "postgres", "zod", "eslint"],
    github: "https://github.com/Chiranjeev-sahu/Relay",
    live: "https://relay-omega-roan.vercel.app",
  },
];
