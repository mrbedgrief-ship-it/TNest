'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { plannerItems } from '@/lib/data/mock-data';
import { useToast } from '@/components/ui/toast';

export default function PlannerPage() {
  const [open, setOpen] = useState(false);
  const { push } = useToast();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge>Content planner</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-white">Plan weekly publishing with visual clarity</h1>
          <p className="mt-2 text-slate-400">A frontend-only calendar board for organizing trend-led content across channels.</p>
        </div>
        <Button onClick={() => setOpen(true)}>New content item</Button>
      </div>
      <div className="grid gap-4 xl:grid-cols-5">
        {plannerItems.map((item) => (
          <Card key={item.day} className="p-4">
            <p className="text-sm text-slate-400">{item.day}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-400">{item.channel}</p>
              <Badge className="mt-4">{item.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <Card className="w-full max-w-lg p-6">
            <h2 className="text-2xl font-semibold text-white">New content item</h2>
            <div className="mt-6 space-y-4">
              {['Title', 'Channel', 'Owner'].map((field) => <input key={field} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder={field} />)}
            </div>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => { push('Content item created in planner.'); setOpen(false); }}>Create item</Button>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
