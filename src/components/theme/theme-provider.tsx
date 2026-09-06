"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Disables all CSS transitions momentarily during theme toggle
 * so all colors and background surfaces switch with 0ms instantaneous snap.
 */
function disableTransitionsTemporarily() {
  if (typeof document === "undefined" || !document.head) return () => {};
  try {
    const css = document.createElement("style");
    css.setAttribute("data-theme-transition-lock", "true");
    css.textContent = `*, *::before, *::after { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; -ms-transition: none !important; transition: none !important; }`;
    document.head.appendChild(css);

    return () => {
      if (document.body) {
        void document.body.offsetHeight;
      }
      setTimeout(() => {
        try {
          if (css && typeof css.remove === "function") {
            css.remove();
          } else if (css && css.parentNode) {
            css.parentNode.removeChild(css);
          }
        } catch {}
      }, 20);
    };
  } catch {
    return () => {};
  }
}

/**
 * Updates dynamic favicon safely by modifying href attribute on existing link tags.
 * Stable URL without random timestamps avoids favicon flickering/changing on refresh.
 */
export function updateFavicon(theme: "light" | "dark") {
  if (typeof document === "undefined" || !document.head) return;
  const iconPath = theme === "dark" ? "/dark.svg" : "/light.svg";

  try {
    const iconLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    if (iconLinks.length > 0) {
      iconLinks.forEach((link) => {
        if (!link.rel.includes("apple")) {
          link.href = iconPath;
        }
      });
    } else {
      const iconLink = document.createElement("link");
      iconLink.id = "dynamic-favicon";
      iconLink.rel = "icon";
      iconLink.type = "image/svg+xml";
      iconLink.href = iconPath;
      document.head.appendChild(iconLink);
    }
  } catch {}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("nodezed-theme") as Theme | null;
        if (saved) return saved;
        if (document.documentElement.classList.contains("dark")) return "dark";
      } catch {}
    }
    return "light";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("nodezed-theme") || localStorage.getItem("zernode-theme");
        if (saved === "dark") return "dark";
        if (saved === "light") return "light";
        if (document.documentElement.classList.contains("dark")) return "dark";
      } catch {}
    }
    return "light";
  });

  const applyThemeInstant = useCallback((t: Theme) => {
    if (typeof document === "undefined") return;
    const reenableTransitions = disableTransitionsTemporarily();
    const root = document.documentElement;
    const isDark =
      t === "dark" ||
      (t === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      setResolvedTheme("dark");
      updateFavicon("dark");
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      setResolvedTheme("light");
      updateFavicon("light");
    }
    reenableTransitions();
  }, []);

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("nodezed-theme") || localStorage.getItem("zernode-theme")) as Theme | null;
      const initialTheme = saved || (document.documentElement.classList.contains("dark") ? "dark" : "light");
      setThemeState(initialTheme);
      applyThemeInstant(initialTheme);
    } catch {
      applyThemeInstant("light");
    }
  }, [applyThemeInstant]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return;
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("nodezed-theme") || localStorage.getItem("zernode-theme");
      if (!saved || saved === "system") {
        applyThemeInstant(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [applyThemeInstant]);

  const setTheme = useCallback(
    (t: Theme) => {
      const reenableTransitions = disableTransitionsTemporarily();

      if (typeof document !== "undefined") {
        const root = document.documentElement;
        const isDark =
          t === "dark" ||
          (t === "system" &&
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-color-scheme: dark)").matches);

        if (isDark) {
          root.classList.add("dark");
          root.style.colorScheme = "dark";
          setResolvedTheme("dark");
          updateFavicon("dark");
        } else {
          root.classList.remove("dark");
          root.style.colorScheme = "light";
          setResolvedTheme("light");
          updateFavicon("light");
        }
      }

      try {
        localStorage.setItem("nodezed-theme", t);
        localStorage.removeItem("zernode-theme");
      } catch {}

      setThemeState(t);
      reenableTransitions();
    },
    []
  );

  const toggleTheme = useCallback(() => {
    const reenableTransitions = disableTransitionsTemporarily();
    const isCurrentlyDark =
      typeof document !== "undefined"
        ? document.documentElement.classList.contains("dark")
        : resolvedTheme === "dark";
    const next: Theme = isCurrentlyDark ? "light" : "dark";

    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (next === "dark") {
        root.classList.add("dark");
        root.style.colorScheme = "dark";
        updateFavicon("dark");
      } else {
        root.classList.remove("dark");
        root.style.colorScheme = "light";
        updateFavicon("light");
      }
    }

    try {
      localStorage.setItem("nodezed-theme", next);
        localStorage.removeItem("zernode-theme");
    } catch {}

    setThemeState(next);
    setResolvedTheme(next);
    reenableTransitions();
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "light" as Theme,
      resolvedTheme: "light" as const,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
