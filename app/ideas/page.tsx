'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ideaCards } from '@/lib/data/mock-data';
import { useToast } from '@/components/ui/toast';

export default function IdeasPage() {
  const { push } = useToast();
  const [tone, setTone] = useState('All');
  const visible = tone === 'All' ? ideaCards : ideaCards.filter((idea) => idea.tone === tone);
  return (
    <div className="space-y-6">
      <div>
        <Badge>Idea generator</Badge>
        <h1 className="mt-4 text-3xl font-semibold text-white">Generate polished content directions from live signals</h1>
        <p className="mt-2 text-slate-400">Use tone filters and save the strongest ideas into your workflow.</p>
      </div>
      <div className="flex flex-wrap gap-2">{['All', 'Strategic', 'Insightful', 'Authoritative'].map((item) => <button key={item} onClick={() => setTone(item)} className={`rounded-full px-4 py-2 text-sm ${tone === item ? 'bg-white text-slate-900' : 'glass text-slate-300'}`}>{item}</button>)}</div>
      <div className="grid gap-4 xl:grid-cols-3">
        {visible.map((idea) => (
          <Card key={idea.id} className="p-6">
            <div className="flex items-center justify-between">
              <Badge>{idea.platform}</Badge>
              <Badge className="bg-emerald-500/10 text-emerald-300">{idea.engagement}</Badge>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{idea.angle}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">{idea.hook}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              Tone: {idea.tone}<br />CTA: {idea.cta}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => push('Idea saved to workspace.')}>Save</Button>
              <Button variant="secondary" onClick={() => push('Idea duplicated.')}>Duplicate</Button>
              <Button variant="secondary" onClick={() => push('Idea added to planner.')}>Add to planner</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
