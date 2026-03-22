'use client';

import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MomentumMiniChart } from '@/components/charts/chart-card';
import { trends } from '@/lib/data/mock-data';
import { useToast } from '@/components/ui/toast';

export default function TrendDetailPage({ params }: { params: { id: string } }) {
  const trend = trends.find((item) => item.id === params.id);
  const { push } = useToast();
  if (!trend) return notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{trend.category}</Badge>
        <Badge className="bg-emerald-500/10 text-emerald-300">{trend.status}</Badge>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white">{trend.title}</h1>
          <p className="mt-4 max-w-3xl text-slate-300">{trend.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => push('Added to watchlist.')}>Add to watchlist</Button>
          <Button variant="secondary" onClick={() => push('Generated three content directions.')}>Generate ideas</Button>
          <Button variant="secondary" onClick={() => push('Moved to planner backlog.')}>Add to planner</Button>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white">Momentum graph</h3>
          <p className="text-sm text-slate-400">Six-week signal acceleration.</p>
          <div className="mt-6"><MomentumMiniChart data={trend.momentumSeries} /></div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white">Audience profile</h3>
          <div className="mt-6 space-y-4">
            {trend.audienceProfile.map((segment) => (
              <div key={segment.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300"><span>{segment.label}</span><span>{segment.value}%</span></div>
                <div className="h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${segment.value}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Suggested angles</h3><div className="mt-4 space-y-3">{trend.suggestedAngles.map((angle) => <div key={angle} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{angle}</div>)}</div></Card>
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Recommended channels</h3><div className="mt-4 flex flex-wrap gap-2">{trend.channels.map((channel) => <Badge key={channel}>{channel}</Badge>)}</div></Card>
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Suggested hooks</h3><div className="mt-4 space-y-3">{trend.suggestedHooks.map((hook) => <div key={hook} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{hook}</div>)}</div></Card>
      </div>
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-white">Related trends</h3>
        <div className="mt-4 flex flex-wrap gap-2">{trend.relatedTrends.map((related) => <Badge key={related}>{related}</Badge>)}</div>
      </Card>
    </div>
  );
}
