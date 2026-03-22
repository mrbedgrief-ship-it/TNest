import { AppLayout } from '@/components/layout/AppLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { dashboardMetrics, weeklyPerformance, categoryOverview, recommendedDirections, watchlist, campaigns, teamMembers, trends } from '@/data/mockData';
import { CategoryChart, PerformanceChart } from '@/components/charts/ChartCards';

export function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <Badge>Demo dashboard</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-white">Trend intelligence command center</h1>
          <p className="mt-2 text-slate-400">A premium analytics surface for trend momentum, opportunity scoring, campaign progress, and team visibility.</p>
        </div>
        <div className="grid gap-4 xl:grid-cols-4">{dashboardMetrics.map((metric) => <Card key={metric.label} className="p-5"><p className="text-sm text-slate-400">{metric.label}</p><p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p><p className="mt-2 text-sm text-slate-400">{metric.delta}</p></Card>)}</div>
        <div className="grid gap-6 xl:grid-cols-[1.6fr,1fr]"><PerformanceChart data={weeklyPerformance} /><CategoryChart data={categoryOverview} /></div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr,0.9fr]">
          <Card className="p-6"><h3 className="text-lg font-semibold text-white">Recommended directions</h3><div className="mt-6 space-y-4">{recommendedDirections.map((item) => <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between gap-4"><h4 className="font-medium text-white">{item.title}</h4><span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{item.score}</span></div><p className="mt-2 text-sm text-slate-400">{item.summary}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{item.platform}</p></div>)}</div></Card>
          <Card className="p-6"><h3 className="text-lg font-semibold text-white">Watchlist</h3><div className="mt-6 space-y-3">{watchlist.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{item}</div>)}</div></Card>
          <Card className="p-6"><h3 className="text-lg font-semibold text-white">Recent campaigns</h3><div className="mt-6 space-y-4">{campaigns.map((campaign) => <div key={campaign.name} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between"><p className="font-medium text-white">{campaign.name}</p><p className="text-xs text-slate-400">{campaign.stage}</p></div><p className="mt-2 text-sm text-slate-400">Owner: {campaign.owner}</p><div className="mt-4 h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${campaign.progress}%` }} /></div></div>)}</div></Card>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Card className="p-6"><h3 className="text-lg font-semibold text-white">Top momentum panel</h3><div className="mt-6 grid gap-4 md:grid-cols-3">{trends.slice(0, 3).map((trend) => <div key={trend.id} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="flex items-center justify-between"><Badge>{trend.category}</Badge><span className="text-sm text-slate-400">{trend.momentumScore}</span></div><h4 className="mt-4 text-xl font-semibold text-white">{trend.title}</h4><p className="mt-3 text-sm text-slate-400">{trend.description}</p></div>)}</div></Card>
          <Card className="p-6"><h3 className="text-lg font-semibold text-white">Team snapshot</h3><div className="mt-6 space-y-3">{teamMembers.map((member) => <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><p className="font-medium text-white">{member.name}</p><p className="mt-1 text-sm text-slate-400">{member.role}</p><p className="mt-2 text-sm text-slate-500">{member.focus}</p></div>)}</div></Card>
        </div>
      </div>
    </AppLayout>
  );
}
