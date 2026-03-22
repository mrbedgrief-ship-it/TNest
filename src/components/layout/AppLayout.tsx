import { Link, NavLink } from 'react-router-dom';
import { Menu, LayoutDashboard, Sparkles, CalendarRange, Lightbulb, Users, CreditCard, Home } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib';
import { Button } from '@/components/ui/Button';

const nav = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/trends', label: 'Trends', icon: Sparkles },
  { to: '/planner', label: 'Planner', icon: CalendarRange },
  { to: '/ideas', label: 'Ideas', icon: Lightbulb },
  { to: '/workspace', label: 'Workspace', icon: Users },
  { to: '/pricing', label: 'Pricing', icon: CreditCard }
];

function NavItems({ onSelect }: { onSelect?: () => void }) {
  return nav.map(({ to, label, icon: Icon }) => (
    <NavLink
      key={to}
      to={to}
      onClick={onSelect}
      className={({ isActive }) => cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white', isActive && 'bg-white/10 text-white')}
    >
      <Icon className="h-4 w-4" />
      {label}
    </NavLink>
  ));
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const sidebar = (
    <div className="glass flex h-full flex-col rounded-[30px] p-4">
      <Link to="/"><Logo /></Link>
      <div className="mt-8 space-y-2"><NavItems onSelect={() => setOpen(false)} /></div>
      <div className="mt-auto rounded-[28px] border border-white/10 bg-gradient-to-br from-accent/20 via-accent3/10 to-accent2/10 p-4">
        <p className="text-sm font-medium text-white">This week’s signal</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">Three trend clusters moved into the high-conviction opportunity band.</p>
        <Link to="/dashboard" className="mt-4 inline-block"><Button className="w-full">Open Demo</Button></Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <aside className="hidden w-72 lg:block">{sidebar}</aside>
      <button className="glass fixed left-4 top-4 z-50 rounded-2xl p-3 lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu className="h-5 w-5" /></button>
      {open ? <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} /> : null}
      <aside className={cn('fixed left-0 top-0 z-50 h-full w-72 p-4 transition-transform lg:hidden', open ? 'translate-x-0' : '-translate-x-full')}>{sidebar}</aside>
      <main className="min-w-0 flex-1 pt-16 lg:pt-0">{children}</main>
    </div>
  );
}
