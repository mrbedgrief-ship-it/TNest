import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqItems, pricingTiers } from '@/data/mockData';

export function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <MarketingLayout>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Premium plans for every stage of content maturity" description="A polished pricing view with GitHub Pages-safe static interactions and no backend dependencies." align="center" />
        <div className="mt-6 flex justify-center"><div className="glass inline-flex rounded-full p-1"><button onClick={() => setYearly(false)} className={`rounded-full px-4 py-2 text-sm ${!yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`}>Monthly</button><button onClick={() => setYearly(true)} className={`rounded-full px-4 py-2 text-sm ${yearly ? 'bg-white text-slate-900' : 'text-slate-300'}`}>Yearly</button></div></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">{pricingTiers.map((tier) => <Card key={tier.name} className={`p-6 ${tier.highlighted ? 'border-accent/40 bg-gradient-to-b from-accent/15 to-panel/90' : ''}`}><p className="text-lg font-semibold text-white">{tier.name}</p><p className="mt-4 text-4xl font-semibold text-white">${yearly ? tier.yearly : tier.monthly}<span className="text-base text-slate-400">/seat</span></p><p className="mt-3 text-sm text-slate-400">{tier.description}</p><div className="mt-6 space-y-3">{tier.features.map((feature) => <div key={feature} className="text-sm text-slate-300">• {feature}</div>)}</div><Link to="/dashboard" className="mt-6 block"><Button className="w-full">Start demo</Button></Link></Card>)}</div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">{faqItems.map((item) => <Card key={item.question} className="p-6"><h3 className="text-lg font-semibold text-white">{item.question}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{item.answer}</p></Card>)}</div>
      </div>
    </MarketingLayout>
  );
}
