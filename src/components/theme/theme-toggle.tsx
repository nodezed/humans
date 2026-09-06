"use client";

import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-8 items-center justify-center rounded-[7px] border border-black/[0.08] dark:border-white/15 bg-white/60 dark:bg-white/10 backdrop-blur-md text-[#52525b] hover:text-[#09090b] dark:text-[#a1a1aa] dark:hover:text-white shadow-2xs transition-all duration-150 hover:bg-white/90 dark:hover:bg-white/20 hover:border-black/15 dark:hover:border-white/25 active:scale-95 focus:outline-none cursor-pointer ${className}`}
      aria-label="Toggle dark mode"
      title="Toggle dark/light mode"
    >
      <Sun className="h-4 w-4 stroke-[2] text-amber-400 dark:text-amber-300 hidden dark:block transition-transform" />
      <Moon className="h-4 w-4 stroke-[2] text-[#27272a] block dark:hidden transition-transform" />
    </button>
  );
}
