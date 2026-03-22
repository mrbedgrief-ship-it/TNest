import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-6 text-slate-400">TrendNest is a frontend-only premium SaaS prototype for spotting trends, shaping content strategy, and planning campaigns in one visual workspace.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Platform</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link href="/product" className="block">Product</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/dashboard" className="block">Demo</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>hello@trendnest.app</p>
            <p>San Francisco · London · Remote</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
