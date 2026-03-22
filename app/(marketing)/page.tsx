import Link from 'next/link';
import { ArrowRight, BarChart3, Sparkles, CalendarRange, Users, CheckCircle2 } from 'lucide-react';
import { PageShell } from '@/components/ui/page-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { dashboardMetrics, contentDirections, pricingTiers, teamMembers } from '@/lib/data/mock-data';

const features = [
  { icon: Sparkles, title: 'Trend discovery', text: 'Surface emerging signals across media, creators, and brand categories before they become obvious.' },
  { icon: BarChart3, title: 'Opportunity scoring', text: 'Evaluate momentum, audience fit, and content potential in one decision-ready view.' },
  { icon: CalendarRange, title: 'Planning workflow', text: 'Turn signals into scheduled campaigns and weekly publishing plans without context switching.' },
  { icon: Users, title: 'Team coordination', text: 'Share watchlists, briefs, and campaign status across editorial, growth, and creative teams.' }
];

export default function HomePage() {
  return (
    <div>
      <PageShell className="py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">AI-powered trend intelligence for modern content teams</div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Spot trends earlier. Turn them into content faster.</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">TrendNest helps media teams, creators, and brands discover rising trends, evaluate content opportunities, and build smarter publishing plans in one premium workspace.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard"><Button>Open Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link href="/pricing"><Button variant="secondary">View Pricing</Button></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {dashboardMetrics.slice(0, 3).map((metric) => (
                <Card key={metric.label} className="p-4">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs text-slate-400">{metric.delta}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="overflow-hidden p-6">
            <div className="rounded-[28px] border border-white/10 bg-background/70 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {contentDirections.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-accent2">{item.platform}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
                    <div className="mt-4 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Opportunity score {item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </PageShell>

      <PageShell className="space-y-10 py-16">
        <SectionHeading eyebrow="Product preview" title="A complete trend-to-publish workflow in one workspace." description="From signal detection to content planning, TrendNest gives teams a high-clarity operating layer for editorial decisions." />
        <div className="grid gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <feature.icon className="h-10 w-10 rounded-2xl bg-white/5 p-2 text-accent2" />
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.text}</p>
            </Card>
          ))}
        </div>
      </PageShell>

      <PageShell className="grid gap-6 py-16 lg:grid-cols-3">
        {['Discover signals', 'Prioritize opportunities', 'Plan campaigns'].map((step, index) => (
          <Card key={step} className="p-6">
            <p className="text-sm text-accent2">0{index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{step}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{index === 0 ? 'Track emerging conversations, categories, and channel shifts in a curated explorer.' : index === 1 ? 'Compare momentum, audience fit, and content potential to decide what deserves resources.' : 'Move selected opportunities into a visual planner the whole team can align around.'}</p>
          </Card>
        ))}
      </PageShell>

      <PageShell className="space-y-8 py-16">
        <SectionHeading eyebrow="Built for modern media teams" title="Designed for creators, editors, strategists, and brand teams." description="TrendNest feels like a premium command center for teams that need speed, clarity, and a credible strategy narrative." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-white">Trusted workflow metrics</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['3.4x faster signal-to-publish workflow', '86% average audience fit on top ideas', '46 content items planned this month', '4 active cross-functional campaign pods'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-white">Who uses TrendNest</h3>
            <div className="mt-6 space-y-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="font-medium text-white">{member.name}</p>
                    <p className="text-sm text-slate-400">{member.role}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </PageShell>

      <PageShell className="py-16">
        <SectionHeading eyebrow="Pricing preview" title="Simple pricing for creators, teams, and enterprise programs." description="Choose the plan that matches your workflow maturity today and scale into more advanced planning and collaboration when your team is ready." />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`p-6 ${tier.highlighted ? 'border-accent/40 bg-gradient-to-b from-accent/15 to-panel/90' : ''}`}>
              <p className="text-sm text-slate-400">{tier.name}</p>
              <p className="mt-4 text-4xl font-semibold text-white">${tier.monthly}<span className="text-base text-slate-400">/mo</span></p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{tier.description}</p>
            </Card>
          ))}
        </div>
      </PageShell>

      <PageShell className="pb-20 pt-8">
        <Card className="overflow-hidden p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent2">Ready to explore the demo?</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold text-white">Move from trend signals to a structured content plan in minutes.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Perfect for investor demos, internal strategy reviews, and product storytelling.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/dashboard"><Button>Open Demo</Button></Link>
            <Link href="/product"><Button variant="secondary">Explore Product</Button></Link>
          </div>
        </Card>
      </PageShell>
    </div>
  );
}
