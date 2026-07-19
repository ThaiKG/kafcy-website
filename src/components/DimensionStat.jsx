export default function DimensionStat({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4">
      <div className="flex items-center gap-1 text-paper/60 w-full">
        <span className="h-2 w-px bg-current" />
        <span className="flex-1 h-px bg-current" />
        <span className="h-2 w-px bg-current" />
      </div>
      <div className="text-center">
        <div className="font-display text-2xl md:text-3xl text-paper">{value}</div>
        <div className="font-mono text-[11px] tracking-wider uppercase text-paper/60 mt-1">
          {label}
        </div>
      </div>
    </div>
  );
}
