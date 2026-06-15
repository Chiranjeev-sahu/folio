export const Divider = () => (
  <div
    className="w-full h-0 border-b border-black/30 dark:border-white/15 pointer-events-none"
    style={{
      maskImage:
        "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 12px)",
      WebkitMaskImage:
        "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 12px)",
    }}
  />
);
