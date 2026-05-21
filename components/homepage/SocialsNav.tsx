import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const baseLinkClass =
  "inline-flex items-center gap-1 rounded-xl border text-sm border-accent dark:border-accent/80 font-jetbrains  bg-background p-2 py-1 text-foreground/80 no-underline transition-all duration-200 hover:-translate-y-0.5";

const lightShadowClass =
  "[box-shadow:inset_3px_3px_4px_#d1d1d1,inset_-1px_-1px_2px_#d1d1d1]";

const socials: {
  href: string;
  label: string;
  icon: IconType;
  iconClassName: string;
  darkShadowClass: string;
}[] = [
  {
    href: "https://www.linkedin.com/in/chiranjeev-sahu/",
    label: "LinkedIn",
    icon: FaLinkedin,
    iconClassName: "text-[#0A66C2] dark:text-[#3b82f6]",
    darkShadowClass: "dark:[box-shadow:inset_0px_1px_2px_#626262]",
  },
  {
    href: "https://github.com/Chiranjeev-sahu",
    label: "Github",
    icon: FaGithub,
    iconClassName: "text-zinc-800 dark:text-zinc-100",
    darkShadowClass: "dark:[box-shadow:inset_0px_1px_2px_#626262]",
  },
  {
    href: "https://x.com/chiruexe",
    label: "Twitter",
    icon: FaXTwitter,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
    darkShadowClass: "dark:[box-shadow:inset_0px_1px_2px_#626262]",
  },
  {
    href: "mailto:chiranjeevsahu1904@gmail.com",
    label: "Email",
    icon: FaEnvelope,
    iconClassName: "text-zinc-900 dark:text-zinc-100",
    darkShadowClass: "dark:[box-shadow:inset_0px_1px_2px_#626262]",
  },
];

export const Socials = () => {
  return (
    <>
      <div className="w-full px-6 py-2 lg:w-[46%] flex flex-col sm:flex-row sm:justify-between gap-3">
        <h3 className="text-xl font-bold font-jetbrains md:hidden tracking-tight">
          My socials
        </h3>
        <nav className="flex flex-wrap md:justify-between md:w-full gap-3">
          {socials.map(
            ({ href, label, icon: Icon, iconClassName, darkShadowClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseLinkClass} ${lightShadowClass} ${darkShadowClass}`}
              >
                <Icon className={`size-3 shrink-0 ${iconClassName}`} />
                <span className="text-xs tracking-tighter">{label}</span>
              </a>
            ),
          )}
        </nav>
      </div>
    </>
  );
};
