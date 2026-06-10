export default function GithubGraphSkeleton() {
  return (
    <section className="flex w-full flex-col gap-3 px-4 py-3 lg:w-[46%]">
      <div className="grid w-full grid-cols-53 gap-x-0.5">
        {Array.from({ length: 53 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-0.5">
            {Array.from({ length: 7 }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full aspect-square rounded-[1px] sm:rounded-xs bg-zinc-100 dark:bg-[#1a1a1a] animate-pulse"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
