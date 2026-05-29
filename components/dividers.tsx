type DividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className = "" }: DividerProps) => (
  <div
    className={`w-full h-0 border-b border-black/30 dark:border-white/15 pointer-events-none ${className}`}
    style={{
      maskImage:
        "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 12px)",
      WebkitMaskImage:
        "repeating-linear-gradient(to right, black 0, black 4px, transparent 4px, transparent 12px)",
    }}
  />
);

export const VerticalDivider = ({ className = "" }: DividerProps) => (
  <div
    className={`top-0 bottom-0 w-0 border-r border-black/50 dark:border-white/15 pointer-events-none ${className}`}
    style={{
      maskImage:
        "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
      WebkitMaskImage:
        "repeating-linear-gradient(to bottom, black 0, black 5px, transparent 5px, transparent 12px)",
    }}
  />
);
