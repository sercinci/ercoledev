"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Check if View Transitions API is supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      // Fallback for browsers that don't support View Transitions
      setTheme(newTheme);
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-full hover:bg-white/10 transition-colors relative w-9 h-9 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
    </button>
  );
}
