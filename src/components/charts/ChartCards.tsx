import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Card } from '@/components/ui/Card';

export function PerformanceChart({ data }: { data: { label: string; momentum: number; content: number }[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white">Trend momentum</h3>
      <p className="mt-1 text-sm text-slate-400">Weekly momentum and content readiness.</p>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(148,163,184,0.08)" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#0b1120', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
            <Line type="monotone" dataKey="momentum" stroke="#7c8cff" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="content" stroke="#51d4ff" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function OpportunityChart({ data }: { data: { label: string; momentum: number }[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white">Opportunity acceleration</h3>
      <p className="mt-1 text-sm text-slate-400">Signal growth over the last six weeks.</p>
      <div className="mt-6 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c8cff" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#7c8cff" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#0b1120', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
            <Area type="monotone" dataKey="momentum" stroke="#7c8cff" fill="url(#trendGradient)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function CategoryChart({ data }: { data: { name: string; value: number }[] }) {
  const colors = ['#7c8cff', '#51d4ff', '#8b5cf6', '#2dd4bf', '#fbbf24', '#475569'];
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white">Category overview</h3>
      <p className="mt-1 text-sm text-slate-400">Where audience interest is concentrating.</p>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={70} outerRadius={96} paddingAngle={4}>
              {data.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#0b1120', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function AudienceBars({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: '#0b1120', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 16 }} />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#51d4ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
