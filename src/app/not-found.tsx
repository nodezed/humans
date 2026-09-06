export default function NotFound() {
  return (
    <div className="-mt-[58px] min-h-screen w-full flex items-center justify-center text-center px-6 bg-white dark:bg-[#09090b]">
      <div className="flex items-center gap-4 text-[14px]">
        <span className="font-semibold text-black dark:text-white border-r border-[#e4e4e7] dark:border-[#27272a] pr-4 py-1">
          404
        </span>
        <span className="text-[#71717a] dark:text-[#a1a1aa]">
          This page could not be found.
        </span>
      </div>
    </div>
  );
}
