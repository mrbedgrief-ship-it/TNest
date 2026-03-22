import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { activityFeed, teamMembers, workspaceProjects, campaigns } from '@/lib/data/mock-data';

export default function WorkspacePage() {
  return (
    <div className="space-y-6">
      <div>
        <Badge>Workspace</Badge>
        <h1 className="mt-4 text-3xl font-semibold text-white">A shared space for campaigns, notes, and team coordination</h1>
        <p className="mt-2 text-slate-400">Make the prototype feel collaborative with project health, notes, and recent activity.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white">Active projects</h3>
          <div className="mt-6 space-y-4">{workspaceProjects.map((project) => <div key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between"><p className="font-medium text-white">{project.title}</p><p className="text-sm text-slate-400">{project.status}</p></div><div className="mt-4 h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${project.progress}%` }} /></div></div>)}</div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-white">Team overview</h3>
          <div className="mt-6 space-y-3">{teamMembers.map((member) => <div key={member.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><div><p className="font-medium text-white">{member.name}</p><p className="text-sm text-slate-400">{member.role}</p></div><div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/30 to-accent2/30" /></div>)}</div>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Campaign board</h3><div className="mt-4 space-y-3">{campaigns.map((item) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item.name} · {item.status}</div>)}</div></Card>
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Shared notes</h3><div className="mt-4 rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">Keep inspiration, launch angles, and messaging notes here. This designed empty state reinforces the collaborative product story.</div></Card>
        <Card className="p-6"><h3 className="text-lg font-semibold text-white">Recent activity</h3><div className="mt-4 space-y-3">{activityFeed.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>)}</div></Card>
      </div>
    </div>
  );
}
