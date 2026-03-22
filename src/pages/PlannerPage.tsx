import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { plannerColumns } from '@/data/mockData';
import { useToast } from '@/hooks/useToast';

export function PlannerPage() {
  const [open, setOpen] = useState(false);
  const { push } = useToast();

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><Badge>Content planner</Badge><h1 className="mt-4 text-3xl font-semibold text-white">Visual weekly planning built for editorial teams</h1><p className="mt-2 text-slate-400">A polished kanban-calendar hybrid for organizing trend-led content across multiple channels.</p></div>
          <Button onClick={() => setOpen(true)}>New content item</Button>
        </div>
        <div className="flex flex-wrap gap-2"><Badge>Brand: TrendNest Media</Badge><Badge>Channel: All</Badge><Badge>Week of April 14</Badge></div>
        <div className="grid gap-4 xl:grid-cols-4">{plannerColumns.map((column) => <Card key={column.id} className="p-4"><div className="flex items-center justify-between"><h3 className="text-lg font-semibold text-white">{column.title}</h3><Badge>{column.items.length} items</Badge></div><div className="mt-4 space-y-3">{column.items.map((item) => <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-medium text-white">{item.title}</p><p className="mt-2 text-sm text-slate-400">{item.channel}</p></div>)}</div></Card>)}</div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="New content item">
        <div className="space-y-4"><input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Title" /><input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Channel" /><input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Project" /><div className="flex gap-3 pt-2"><Button onClick={() => { push('Content item created.'); setOpen(false); }}>Create item</Button><Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button></div></div>
      </Modal>
    </AppLayout>
  );
}
