import { Badge } from '@/components/ui/Badge';

export function SectionHeading({ eyebrow, title, description, align = 'left' }: { eyebrow: string; title: string; description: string; align?: 'left' | 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl space-y-4 text-center' : 'max-w-3xl space-y-4'}>
      <Badge>{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
