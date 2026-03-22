'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pricingTiers } from '@/lib/data/mock-data';
import { PageShell } from '@/components/ui/page-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  return (
    <PageShell className="py-20">
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionHeading eyebrow="Pricing" title="Premium plans for every stage of content maturity" description="Compare tiers, switch billing mode, and show a polished SaaS pricing experience without any backend complexity." />
        <div className="glass inline-flex rounded-full p-1">
          <button className={`rounded-full px-4 py-2 text-sm ${!yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`} onClick={() => setYearly(false)}>Monthly</button>
          <button className={`rounded-full px-4 py-2 text-sm ${yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`} onClick={() => setYearly(true)}>Yearly</button>
        </div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={`p-6 ${tier.highlighted ? 'border-accent/40 bg-gradient-to-b from-accent/15 to-panel/90' : ''}`}>
            <p className="text-lg font-semibold text-white">{tier.name}</p>
            <p className="mt-4 text-4xl font-semibold text-white">${yearly ? tier.yearly : tier.monthly}<span className="text-base text-slate-400">/seat</span></p>
            <p className="mt-3 text-sm text-slate-400">{tier.description}</p>
            <div className="mt-6 space-y-3">{tier.features.map((feature) => <div key={feature} className="text-sm text-slate-300">• {feature}</div>)}</div>
            <Link href="/dashboard" className="mt-6 block"><Button className="w-full">Start demo</Button></Link>
          </Card>
        ))}
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {['Is this a real backend product?', 'Can I deploy it immediately?', 'Does pricing toggle persist?', 'Can it be customized for a demo?'].map((question, index) => (
          <Card key={question} className="p-6">
            <h3 className="text-lg font-semibold text-white">{question}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{['No. TrendNest is intentionally frontend-only and powered by local mock data.', 'Yes. It is structured to run locally and deploy cleanly to Vercel.', 'No persistence is required; the toggle is a polished local state interaction.', 'Yes. Replace the mock data and copy to tailor the prototype for your audience.'][index]}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
