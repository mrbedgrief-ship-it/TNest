import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { AudienceBars, OpportunityChart } from '@/components/charts/ChartCards';
import { trends, type Trend } from '@/data/mockData';
import { useToast } from '@/hooks/useToast';

const categories = ['All', 'Tech', 'Creator Economy', 'News Media', 'Lifestyle', 'Education'];
const formats = ['All formats', 'Short Video', 'Carousel', 'Explainer', 'Article'];

export function TrendsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [format, setFormat] = useState('All formats');
  const [activeTrend, setActiveTrend] = useState<Trend | null>(null);
  const { push } = useToast();

  const filtered = useMemo(() => trends.filter((trend) => {
    const matchesText = `${trend.title} ${trend.description} ${trend.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || trend.category === category;
    const matchesFormat = format === 'All formats' || trend.formats.includes(format);
    return matchesText && matchesCategory && matchesFormat;
  }), [query, category, format]);

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <Badge>Trend explorer</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-white">Discover and evaluate rising content signals</h1>
          <p className="mt-2 text-slate-400">Search, filter, compare, and open detailed trend views without leaving the static demo environment.</p>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr,auto,auto]">
          <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3"><Search className="h-4 w-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search trends, tags, or descriptions" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div>
          <div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm ${category === item ? 'bg-white text-slate-900' : 'glass text-slate-300'}`}>{item}</button>)}</div>
          <select value={format} onChange={(event) => setFormat(event.target.value)} className="glass rounded-full px-4 py-2 text-sm text-slate-200 outline-none"><option>All formats</option><option>Short Video</option><option>Carousel</option><option>Explainer</option><option>Article</option></select>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">{filtered.map((trend) => <Card key={trend.id} className="p-6"><div className="flex flex-wrap items-center gap-3"><Badge>{trend.category}</Badge><Badge className="bg-emerald-500/10 text-emerald-300">{trend.status}</Badge><span className="text-sm text-slate-500">Updated {trend.updatedAt}</span></div><div className="mt-4 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between"><div><h3 className="text-2xl font-semibold text-white">{trend.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{trend.description}</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"><p>Momentum {trend.momentumScore}</p><p className="mt-2">Audience fit {trend.audienceFit}</p><p className="mt-2">Content {trend.contentPotential}</p></div></div><div className="mt-5 flex flex-wrap gap-2">{trend.formats.map((item) => <Badge key={item}>{item}</Badge>)}</div><div className="mt-6 flex flex-wrap gap-3"><Button onClick={() => setActiveTrend(trend)}>Open detail</Button><Button variant="secondary" onClick={() => push('Added to watchlist.')}>Add to watchlist</Button></div></Card>)}</div>
      </div>
      <Modal open={Boolean(activeTrend)} onClose={() => setActiveTrend(null)} title={activeTrend?.title ?? 'Trend detail'}>
        {activeTrend ? (
          <div className="space-y-6">
            <p className="text-sm leading-6 text-slate-300">{activeTrend.description}</p>
            <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]"><OpportunityChart data={activeTrend.momentumSeries} /><Card className="p-6"><h3 className="text-lg font-semibold text-white">Audience profile</h3><p className="mt-1 text-sm text-slate-400">Who this signal is resonating with right now.</p><div className="mt-4"><AudienceBars data={activeTrend.audienceProfile} /></div></Card></div>
            <div className="grid gap-6 lg:grid-cols-3"><Card className="p-5"><h3 className="text-lg font-semibold text-white">Suggested hooks</h3><div className="mt-4 space-y-3">{activeTrend.suggestedHooks.map((hook) => <div key={hook} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">{hook}</div>)}</div></Card><Card className="p-5"><h3 className="text-lg font-semibold text-white">Recommended channels</h3><div className="mt-4 flex flex-wrap gap-2">{activeTrend.channels.map((channel) => <Badge key={channel}>{channel}</Badge>)}</div></Card><Card className="p-5"><h3 className="text-lg font-semibold text-white">Related trends</h3><div className="mt-4 flex flex-wrap gap-2">{activeTrend.relatedTrends.map((related) => <Badge key={related}>{related}</Badge>)}</div></Card></div>
            <div className="flex flex-wrap gap-3"><Button onClick={() => push('Added to watchlist.')}>Add to watchlist</Button><Button variant="secondary" onClick={() => push('Generated three content ideas.')}>Generate ideas</Button><Button variant="secondary" onClick={() => push('Added to planner backlog.')}>Add to planner</Button></div>
          </div>
        ) : null}
      </Modal>
    </AppLayout>
  );
}
