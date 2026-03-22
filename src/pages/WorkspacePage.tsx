import { AppLayout } from '@/components/layout/AppLayout';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { activityFeed, campaigns, teamMembers, workspaceNotes, workspaceProjects } from '@/data/mockData';

export function WorkspacePage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div><Badge>Workspace</Badge><h1 className="mt-4 text-3xl font-semibold text-white">A collaborative operating space for campaigns and content systems</h1><p className="mt-2 text-slate-400">Project health, campaign status, notes, and team roles all live in one polished prototype view.</p></div>
        <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]"><Card className="p-6"><h3 className="text-lg font-semibold text-white">Active projects</h3><div className="mt-6 space-y-4">{workspaceProjects.map((project) => <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between"><p className="font-medium text-white">{project.title}</p><p className="text-sm text-slate-400">{project.status}</p></div><div className="mt-4 h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${project.progress}%` }} /></div></div>)}</div></Card><Card className="p-6"><h3 className="text-lg font-semibold text-white">Team members</h3><div className="mt-6 space-y-3">{teamMembers.map((member) => <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-medium text-white">{member.name}</p><p className="mt-1 text-sm text-slate-400">{member.role}</p><p className="mt-2 text-sm text-slate-500">{member.focus}</p></div>)}</div></Card></div>
        <div className="grid gap-6 lg:grid-cols-3"><Card className="p-6"><h3 className="text-lg font-semibold text-white">Campaign board</h3><div className="mt-4 space-y-3">{campaigns.map((campaign) => <div key={campaign.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{campaign.name} · {campaign.stage}</div>)}</div></Card><Card className="p-6"><h3 className="text-lg font-semibold text-white">Shared notes</h3><div className="mt-4 space-y-3">{workspaceNotes.map((note) => <div key={note} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">{note}</div>)}</div></Card><Card className="p-6"><h3 className="text-lg font-semibold text-white">Recent activity</h3><div className="mt-4 space-y-3">{activityFeed.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>)}</div></Card></div>
      </div>
    </AppLayout>
  );
}
