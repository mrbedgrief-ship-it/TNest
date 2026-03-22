import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' };

export function Button({ className, variant = 'primary', ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'bg-gradient-to-r from-accent to-accent2 text-white shadow-glow hover:-translate-y-0.5',
        variant === 'secondary' && 'glass text-white hover:bg-white/10',
        variant === 'ghost' && 'text-slate-300 hover:bg-white/5 hover:text-white',
        className
      )}
      {...props}
    />
  );
}
