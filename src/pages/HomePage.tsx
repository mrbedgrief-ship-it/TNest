import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CalendarRange, Sparkles, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { marketingStats, recommendedDirections, pricingTiers, teamMembers } from '@/data/mockData';

const features = [
  { icon: Sparkles, title: 'Discover signals early', text: 'Track rising conversations across media, creators, and category shifts before they become crowded.' },
  { icon: BarChart3, title: 'Score every opportunity', text: 'Balance momentum, audience fit, and content potential in one fast decision layer.' },
  { icon: CalendarRange, title: 'Plan campaigns visually', text: 'Move high-conviction trends directly into a weekly publishing workflow built for teams.' },
  { icon: Users, title: 'Align cross-functional teams', text: 'Create a shared story between editorial, strategy, creative, and brand stakeholders.' }
];

export function HomePage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">Premium trend intelligence for modern content teams</div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">Spot trends earlier. <span className="text-gradient">Turn them into content faster.</span></h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">TrendNest helps media teams, creators, and brands discover rising trends, evaluate content opportunities, and build smarter publishing plans in one premium workspace.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard"><Button>Open Demo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link to="/pricing"><Button variant="secondary">View Pricing</Button></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {marketingStats.map((metric) => <Card key={metric.label} className="p-4"><p className="text-sm text-slate-400">{metric.label}</p><p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p></Card>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="overflow-hidden p-6">
              <div className="rounded-[28px] border border-white/10 bg-background/70 p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {recommendedDirections.map((item) => (
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
          </motion.div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Product preview" title="A complete trend-to-publish workflow in one premium workspace." description="TrendNest combines exploration, prioritization, ideation, and planning in a dark polished interface that feels investor-demo ready." />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {features.map((feature) => <Card key={feature.title} className="p-6"><feature.icon className="h-10 w-10 rounded-2xl bg-white/5 p-2 text-accent2" /><h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{feature.text}</p></Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {['Discover', 'Evaluate', 'Plan'].map((step, index) => <Card key={step} className="p-6"><p className="text-sm text-accent2">0{index + 1}</p><h3 className="mt-4 text-2xl font-semibold text-white">{step}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{index === 0 ? 'Explore rich trend cards, category signals, and audience changes.' : index === 1 ? 'Use momentum, audience fit, and content potential to identify priorities.' : 'Move the strongest ideas into a weekly planner and collaborative workspace.'}</p></Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Use cases" title="Built for media teams, creators, editors, and brand strategists." description="Every section is designed to tell a credible product story in a pitch, prototype review, or investor conversation." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6"><h3 className="text-xl font-semibold text-white">Trusted workflow metrics</h3><div className="mt-6 grid gap-4 sm:grid-cols-2">{['3.4x faster signal-to-publish workflow', '86% average audience fit on top ideas', '46 content items planned this month', '4 active cross-functional campaign pods'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>)}</div></Card>
          <Card className="p-6"><h3 className="text-xl font-semibold text-white">Who is in the workspace</h3><div className="mt-6 space-y-4">{teamMembers.map((member) => <div key={member.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><div><p className="font-medium text-white">{member.name}</p><p className="text-sm text-slate-400">{member.role}</p></div><CheckCircle2 className="h-5 w-5 text-emerald-400" /></div>)}</div></Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing preview" title="Simple pricing for creators, teams, and enterprise programs." description="A polished pricing story that supports product positioning without adding backend complexity." />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">{pricingTiers.map((tier) => <Card key={tier.name} className={`p-6 ${tier.highlighted ? 'border-accent/40 bg-gradient-to-b from-accent/15 to-panel/90' : ''}`}><p className="text-sm text-slate-400">{tier.name}</p><p className="mt-4 text-4xl font-semibold text-white">${tier.monthly}<span className="text-base text-slate-400">/mo</span></p><p className="mt-3 text-sm leading-6 text-slate-400">{tier.description}</p></Card>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <Card className="p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent2">Ready to explore the demo?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold text-white">Show how TrendNest moves from trend signals to a structured publishing strategy.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Use the dashboard, trend explorer, planner, and workspace views as a premium investor-demo walkthrough.</p>
          <div className="mt-8 flex justify-center gap-4"><Link to="/dashboard"><Button>Open Demo</Button></Link><Link to="/pricing"><Button variant="secondary">View Pricing</Button></Link></div>
        </Card>
      </section>
    </MarketingLayout>
  );
}
