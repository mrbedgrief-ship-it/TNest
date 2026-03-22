import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib';

const links = [
  { to: '/dashboard', label: 'Demo' },
  { to: '/trends', label: 'Trends' },
  { to: '/pricing', label: 'Pricing' }
];

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/"><Logo /></Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => cn('text-sm text-slate-300 transition hover:text-white', isActive && 'text-white')}>{item.label}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/pricing"><Button variant="ghost">View Pricing</Button></Link>
            <Link to="/dashboard"><Button>Open Demo</Button></Link>
          </div>
          <button className="rounded-2xl border border-white/10 p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
        </div>
        {open ? <div className="border-t border-white/10 px-4 py-4 md:hidden"><div className="flex flex-col gap-3">{links.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-sm text-slate-300">{item.label}</Link>)}<Link to="/dashboard" onClick={() => setOpen(false)}><Button className="w-full">Open Demo</Button></Link></div></div> : null}
      </header>
      {children}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-8">
          <div className="space-y-4"><Logo /><p className="max-w-md text-sm leading-6 text-slate-400">TrendNest is a frontend-only static SaaS prototype for trend discovery, content ideation, and planning workflows. Built to deploy cleanly on GitHub Pages.</p></div>
          <div><h3 className="text-sm font-semibold text-white">Explore</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><Link to="/dashboard">Demo</Link><br /><Link to="/trends">Trends</Link><br /><Link to="/pricing">Pricing</Link></div></div>
          <div><h3 className="text-sm font-semibold text-white">Deployment</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><p>Static build only</p><p>HashRouter safe</p><p>GitHub Pages compatible</p></div></div>
        </div>
      </footer>
    </div>
  );
}
