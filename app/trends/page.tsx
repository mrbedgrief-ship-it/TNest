'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trends } from '@/lib/data/mock-data';

const categories = ['All', 'Tech', 'Creator Economy', 'News Media', 'Lifestyle', 'Education'];

export default function TrendsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => trends.filter((trend) => {
    const matchesText = trend.title.toLowerCase().includes(query.toLowerCase()) || trend.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || trend.category === category;
    return matchesText && matchesCategory;
  }), [query, category]);

  return (
    <div className="space-y-6">
      <div>
        <Badge>Trend explorer</Badge>
        <h1 className="mt-4 text-3xl font-semibold text-white">Discover and evaluate rising signals</h1>
        <p className="mt-2 text-slate-400">Filter by category and inspect detailed scores, hooks, and related opportunities.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr,auto]">
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search trends, tags, or descriptions" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm ${category === item ? 'bg-white text-slate-900' : 'glass text-slate-300'}`}>{item}</button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {filtered.map((trend) => (
          <Card key={trend.id} className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{trend.category}</Badge>
              <Badge className="bg-emerald-500/10 text-emerald-300">{trend.status}</Badge>
              <span className="text-sm text-slate-500">Updated {trend.updatedAt}</span>
            </div>
            <div className="mt-4 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">{trend.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{trend.description}</p>
              </div>
              <div className="min-w-32 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                <p>Momentum {trend.momentumScore}</p>
                <p className="mt-2">Audience fit {trend.audienceFit}</p>
                <p className="mt-2">Content {trend.contentPotential}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {trend.formats.map((format) => <Badge key={format}>{format}</Badge>)}
            </div>
            <div className="mt-6 flex gap-3">
              <Link href={`/trends/${trend.id}`}><Button>Open detail</Button></Link>
              <Button variant="secondary">Add to watchlist</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
