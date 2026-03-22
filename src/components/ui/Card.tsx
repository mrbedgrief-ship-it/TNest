import { cn } from '@/lib';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('panel rounded-[28px] border border-white/10 bg-panel/80 shadow-panel', className)}>{children}</div>;
}
