import React from "react";

export function HumansLoading() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 sm:space-y-24 animate-pulse">
      {/* 1. Hero Section Skeleton */}
      <div className="text-center space-y-4 max-w-2xl mx-auto flex flex-col items-center">
        {/* Pill Badge */}
        <div className="h-6 w-36 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80" />
        {/* Main Title */}
        <div className="h-10 sm:h-12 w-3/4 max-w-md rounded-xl bg-neutral-200/90 dark:bg-neutral-800/90 mt-1" />
        {/* Subtitle */}
        <div className="space-y-2 w-full max-w-lg mt-2 flex flex-col items-center">
          <div className="h-4 w-full rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
          <div className="h-4 w-4/5 rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
        </div>
      </div>

      {/* 2. Manifesto Strip Skeleton (3 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="p-6 rounded-xl border border-[#e3e3e3] dark:border-[#464646] bg-[#ffffff] dark:bg-[#000000] space-y-3 shadow-xs"
          >
            <div className="h-9 w-9 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80" />
            <div className="h-5 w-36 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
            <div className="space-y-2">
              <div className="h-3.5 w-full rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
              <div className="h-3.5 w-5/6 rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Team Cards Skeleton */}
      <div className="space-y-6">
        <div className="border-b border-[#e3e3e3] dark:border-[#464646] pb-4 space-y-2">
          <div className="h-6 w-48 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80" />
          <div className="h-3.5 w-72 max-w-full rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((member) => (
            <div
              key={member}
              className="p-5 rounded-xl border border-[#e3e3e3] dark:border-[#464646] bg-[#ffffff] dark:bg-[#000000] space-y-4 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3">
                {/* Avatar + Name/Role */}
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 shrink-0" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-4 w-32 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
                    <div className="h-3 w-40 rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
                  </div>
                </div>

                {/* Bio lines */}
                <div className="space-y-1.5 pt-1">
                  <div className="h-3 w-full rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
                  <div className="h-3 w-5/6 rounded bg-neutral-200/40 dark:bg-neutral-800/40" />
                </div>
              </div>

              {/* Bottom Tags & Link Icons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#e3e3e3] dark:border-[#464646]">
                <div className="flex gap-1.5">
                  <div className="h-5 w-14 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50" />
                  <div className="h-5 w-16 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50" />
                  <div className="h-5 w-12 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50" />
                </div>
                <div className="flex gap-2">
                  <div className="h-4 w-4 rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
                  <div className="h-4 w-4 rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Join the Mission Callout Skeleton */}
      <div className="p-8 sm:p-10 rounded-2xl border border-[#e3e3e3] dark:border-[#464646] bg-[#ffffff] dark:bg-[#000000] text-center space-y-4 flex flex-col items-center shadow-xs">
        <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-6 w-72 max-w-full rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80" />
        <div className="space-y-1.5 w-full max-w-md">
          <div className="h-3.5 w-full rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
          <div className="h-3.5 w-3/4 mx-auto rounded bg-neutral-200/50 dark:bg-neutral-800/50" />
        </div>
        <div className="h-9 w-40 rounded-lg bg-[#050505]/80 dark:bg-[#fafafa]/80 mt-2" />
      </div>
    </div>
  );
}

export default HumansLoading;
