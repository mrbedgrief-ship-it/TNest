'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { navMarketing } from '@/lib/data/mock-data';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function MarketingNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navMarketing.map((item) => (
            <Link key={item.href} href={item.href} className={cn('text-sm text-slate-300 transition hover:text-white', pathname === item.href && 'text-white')}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/pricing"><Button variant="ghost">View Pricing</Button></Link>
          <Link href="/dashboard"><Button>Open Demo</Button></Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navMarketing.map((item) => <Link key={item.href} href={item.href} className="text-slate-300" onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/dashboard" onClick={() => setOpen(false)}><Button className="w-full">Open Demo</Button></Link>
          </div>
        </div>
      )}
    </header>
  );
}
