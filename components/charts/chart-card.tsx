'use client';

import { Card } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

export function PerformanceChart({ data }: { data: { day: string; momentum: number; content: number }[] }) {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Weekly trend performance</h3>
          <p className="text-sm text-slate-400">Momentum and content readiness across the last seven days.</p>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(148,163,184,0.08)" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#0d1326', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
            <Line type="monotone" dataKey="momentum" stroke="#7c8cff" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="content" stroke="#4fd1ff" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function CategoryChart({ data }: { data: { name: string; value: number }[] }) {
  const colors = ['#7c8cff', '#4fd1ff', '#8b5cf6', '#26c281', '#f2b45a', '#334155'];
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white">Audience interest mix</h3>
      <p className="mb-6 text-sm text-slate-400">Categories gaining the most traction in the workspace.</p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={68} outerRadius={92} paddingAngle={4} dataKey="value">
              {data.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#0d1326', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function MomentumMiniChart({ data }: { data: { week: string; score: number }[] }) {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="week" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: '#0d1326', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
          <Bar dataKey="score" radius={[10, 10, 0, 0]} fill="#7c8cff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
