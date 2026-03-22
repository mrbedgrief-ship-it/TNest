'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Sparkles, CalendarRange, Lightbulb, Users, Menu } from 'lucide-react';
import { navApp } from '@/lib/data/mock-data';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const icons = [LayoutDashboard, Sparkles, CalendarRange, Lightbulb, Users];

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const content = (
    <div className="glass flex h-full flex-col rounded-3xl p-4">
      <Logo />
      <div className="mt-8 space-y-2">
        {navApp.map((item, index) => {
          const Icon = icons[index];
          return (
            <Link key={item.href} href={item.href} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white', pathname === item.href && 'bg-white/10 text-white')} onClick={() => setOpen(false)}>
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-auto rounded-3xl border border-white/10 bg-gradient-to-br from-accent/20 to-accent2/10 p-4">
        <p className="text-sm font-medium text-white">Weekly focus</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">Three rising signals moved into the top opportunity band this week.</p>
      </div>
    </div>
  );

  return (
    <>
      <button className="glass fixed left-4 top-4 z-50 rounded-2xl p-3 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
        <Menu className="h-5 w-5 text-white" />
      </button>
      <aside className="hidden lg:block lg:w-72">{content}</aside>
      {open && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn('fixed left-0 top-0 z-50 h-full w-72 p-4 transition lg:hidden', open ? 'translate-x-0' : '-translate-x-full')}>
        {content}
      </aside>
    </>
  );
}
