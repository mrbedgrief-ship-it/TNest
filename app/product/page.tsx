import { PageShell } from '@/components/ui/page-shell';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

export default function ProductPage() {
  return (
    <PageShell className="space-y-12 py-20">
      <SectionHeading eyebrow="Product" title="A visual operating system for trend-led publishing" description="TrendNest combines exploration, prioritization, ideation, and planning in one premium interface built for modern content teams." />
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ['Explorer', 'Curated trend cards with scoring, hooks, formats, and deep detail views.'],
          ['Idea engine', 'Content directions tailored to platform, tone, and campaign needs.'],
          ['Planner', 'A structured weekly board that turns opportunity into execution.'],
          ['Workspace', 'Project health, campaign coordination, and collaborative notes.'],
          ['Dashboard', 'High-level metrics, trend momentum, and category-level charts.'],
          ['Pricing', 'A premium monetization story for investor demos and product positioning.']
        ].map(([title, description]) => <Card key={title} className="p-6"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></Card>)}
      </div>
    </PageShell>
  );
}
