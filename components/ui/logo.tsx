import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-lg font-semibold text-white shadow-glow">T</span>
      <div>
        <div className="text-base font-semibold tracking-wide text-white">TrendNest</div>
        <div className="text-xs text-slate-400">Signal to strategy</div>
      </div>
    </Link>
  );
}
