import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { BrandLogo } from "@/components/brand-logo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Humans of Nodezed — The Engineers & Builders",
  description: "Meet the engineers, systems architects, and design purists building Nodezed cloud compute.",
  icons: {
    icon: "/light.svg",
    shortcut: "/light.svg",
    apple: "/light.svg",
  },
};

export default function HumansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="dynamic-favicon" rel="icon" href="/light.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white dark:bg-[#09090b] text-[#17171c] dark:text-[#f4f4f5] antialiased`}
      >
        <ThemeProvider>
          {/* Header */}
          <header className="sticky top-0 z-40 w-full border-b border-black/[0.06] dark:border-white/[0.08] bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
              <a
                href="https://nodezed.com"
                className="flex items-center gap-2 text-neutral-900 dark:text-white transition-opacity hover:opacity-85"
              >
                <BrandLogo height={20} />
                <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pl-1.5 border-l border-neutral-300 dark:border-neutral-700">
                  Humans
                </span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://nodezed.com"
                  className="text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Platform
                </a>
                <a
                  href="https://console.nodezed.com"
                  className="text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Console
                </a>
                <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Minimal Footer */}
          <footer className="border-t border-black/[0.06] dark:border-white/[0.08] py-8 text-center text-xs text-neutral-500 dark:text-neutral-500">
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Nodezed, Inc. Built for humans.</div>
              <div className="flex items-center gap-4">
                <a href="https://nodezed.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Home
                </a>
                <a href="https://x.com/nodezed" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="https://github.com/zer-node" target="_blank" rel="noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
