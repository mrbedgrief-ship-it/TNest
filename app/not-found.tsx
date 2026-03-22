import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/ui/page-shell';

export default function NotFound() {
  return (
    <PageShell className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-semibold text-white">Page not found</h1>
      <p className="max-w-md text-slate-400">This TrendNest route does not exist in the prototype. Return to the landing page or open the demo dashboard.</p>
      <div className="flex gap-4"><Link href="/"><Button>Home</Button></Link><Link href="/dashboard"><Button variant="secondary">Open Demo</Button></Link></div>
    </PageShell>
  );
}
