"use client";
import { useThemeToggle } from "./ui/skiper-ui/skiper26";
import { Sun, Moon } from "lucide-react";

export const CustomToggle = () => {
  const { isDark, toggleTheme } = useThemeToggle({
    variant: "circle",
    start: "top-right",
    blur: true,
  });

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-background text-zinc-700 transition-all duration-200 [box-shadow:inset_3px_3px_6px_#d1d1d1,inset_-1px_-1px_2px_#d1d1d1] hover:brightness-[1.02] active:scale-[0.98] border-none dark:text-zinc-100 dark:[box-shadow:inset_2px_2px_6px_#222222,inset_-2px_-2px_4px_#121212]"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? (
        <Moon className="size-5 text-[#7a7a7a] transition-transform duration-300 group-hover:-rotate-12" />
      ) : (
        <Sun className="size-5 text-gray-500 transition-transform duration-300 group-hover:rotate-12" />
      )}
    </button>
  );
};
