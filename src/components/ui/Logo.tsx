export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent via-accent3 to-accent2 text-sm font-semibold text-white shadow-glow">TN</div>
      <div>
        <div className="text-sm font-semibold tracking-[0.2em] text-white">TRENDNEST</div>
        <div className="text-xs text-slate-400">Signal to strategy</div>
      </div>
    </div>
  );
}
