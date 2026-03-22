import { cn } from '@/lib/utils';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('card-gradient rounded-3xl border border-white/10 bg-panel/80 shadow-panel', className)}>{children}</div>;
}
