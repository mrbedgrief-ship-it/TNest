import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-5xl font-semibold text-white">Page not found</h1>
        <p className="max-w-lg text-slate-400">This route does not exist in the static TrendNest prototype. Use the home page or open the dashboard demo.</p>
        <div className="flex gap-4"><Link to="/"><Button>Home</Button></Link><Link to="/dashboard"><Button variant="secondary">Open Demo</Button></Link></div>
      </div>
    </MarketingLayout>
  );
}
