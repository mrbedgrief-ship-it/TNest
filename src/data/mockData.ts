export type Trend = {
  id: string;
  title: string;
  category: string;
  description: string;
  momentumScore: number;
  audienceFit: number;
  contentPotential: number;
  status: 'Emerging' | 'Rising' | 'Peaking' | 'Watch';
  formats: string[];
  channels: string[];
  tags: string[];
  region: string;
  updatedAt: string;
  relatedTrends: string[];
  suggestedHooks: string[];
  suggestedAngles: string[];
  momentumSeries: { label: string; momentum: number }[];
  audienceProfile: { name: string; value: number }[];
};

export const marketingStats = [
  { label: 'Tracked signals', value: '184' },
  { label: 'Avg opportunity score', value: '82' },
  { label: 'Campaigns planned', value: '46' },
  { label: 'Signal-to-publish lift', value: '3.4x' }
];

export const dashboardMetrics = [
  { label: 'Tracked trends', value: '184', delta: '+18% MoM' },
  { label: 'Ideas generated', value: '126', delta: '+24 this week' },
  { label: 'Content ready', value: '46', delta: '12 scheduled' },
  { label: 'Team velocity', value: '3.4x', delta: 'Faster planning cycle' }
];

export const weeklyPerformance = [
  { label: 'Mon', momentum: 68, content: 54, campaigns: 3 },
  { label: 'Tue', momentum: 72, content: 61, campaigns: 4 },
  { label: 'Wed', momentum: 81, content: 73, campaigns: 6 },
  { label: 'Thu', momentum: 77, content: 69, campaigns: 5 },
  { label: 'Fri', momentum: 88, content: 84, campaigns: 8 },
  { label: 'Sat', momentum: 83, content: 79, campaigns: 6 },
  { label: 'Sun', momentum: 90, content: 85, campaigns: 7 }
];

export const categoryOverview = [
  { name: 'Creator Economy', value: 24 },
  { name: 'Short-form Video', value: 22 },
  { name: 'Tech', value: 18 },
  { name: 'Lifestyle', value: 14 },
  { name: 'Education', value: 12 },
  { name: 'Finance', value: 10 }
];

export const trends: Trend[] = [
  {
    id: 'ai-workflow-storytelling',
    title: 'AI workflow storytelling',
    category: 'Tech',
    description: 'Media teams are pulling back the curtain on how AI changes ideation, editing, packaging, and production speed.',
    momentumScore: 92,
    audienceFit: 88,
    contentPotential: 95,
    status: 'Rising',
    formats: ['Explainer', 'Carousel', 'Short Video'],
    channels: ['YouTube', 'LinkedIn', 'Newsletter'],
    tags: ['AI', 'workflow', 'editorial'],
    region: 'North America',
    updatedAt: '2 hours ago',
    relatedTrends: ['creator-monetization-mix', 'search-intent-remix'],
    suggestedHooks: ['What actually changed when our content team adopted AI?', 'The editorial workflow shift most teams still overlook.'],
    suggestedAngles: ['Day-in-the-life production breakdown', 'Tool-stack consolidation narrative', 'Before/after editorial velocity story'],
    momentumSeries: [
      { label: 'W1', momentum: 52 },
      { label: 'W2', momentum: 61 },
      { label: 'W3', momentum: 73 },
      { label: 'W4', momentum: 79 },
      { label: 'W5', momentum: 86 },
      { label: 'W6', momentum: 92 }
    ],
    audienceProfile: [
      { name: 'Media teams', value: 34 },
      { name: 'Creators', value: 27 },
      { name: 'Brands', value: 23 },
      { name: 'Editors', value: 16 }
    ]
  },
  {
    id: 'creator-monetization-mix',
    title: 'Creator monetization mix',
    category: 'Creator Economy',
    description: 'Creators are diversifying revenue through memberships, digital products, consulting, and high-trust affiliate ecosystems.',
    momentumScore: 89,
    audienceFit: 84,
    contentPotential: 90,
    status: 'Peaking',
    formats: ['Carousel', 'Interview', 'Short Video'],
    channels: ['Instagram', 'TikTok', 'Podcast'],
    tags: ['revenue', 'creators', 'growth'],
    region: 'Global',
    updatedAt: '5 hours ago',
    relatedTrends: ['ai-workflow-storytelling', 'community-first-launches'],
    suggestedHooks: ['Most creators still rely on the weakest revenue model.', 'The smartest audience businesses now stack four income layers.'],
    suggestedAngles: ['Revenue stack benchmark graphic', 'Creator interview format', 'Income diversification framework'],
    momentumSeries: [
      { label: 'W1', momentum: 60 },
      { label: 'W2', momentum: 67 },
      { label: 'W3', momentum: 72 },
      { label: 'W4', momentum: 80 },
      { label: 'W5', momentum: 85 },
      { label: 'W6', momentum: 89 }
    ],
    audienceProfile: [
      { name: 'Independent creators', value: 42 },
      { name: 'Brands', value: 24 },
      { name: 'Agencies', value: 18 },
      { name: 'Educators', value: 16 }
    ]
  },
  {
    id: 'search-intent-remix',
    title: 'Search-intent remix',
    category: 'News Media',
    description: 'Editorial teams are packaging recurring search demand into faster modular formats they can refresh every week.',
    momentumScore: 81,
    audienceFit: 79,
    contentPotential: 86,
    status: 'Emerging',
    formats: ['Article', 'Brief', 'Newsletter'],
    channels: ['Search', 'Blog', 'LinkedIn'],
    tags: ['SEO', 'search', 'newsroom'],
    region: 'Europe',
    updatedAt: 'Yesterday',
    relatedTrends: ['micro-expert-series', 'ai-workflow-storytelling'],
    suggestedHooks: ['Your best future content may already be inside search behavior.', 'Why modular editorial systems are outperforming one-off stories.'],
    suggestedAngles: ['Search refresh operating model', 'Question-led content workflow', 'Brief-to-video repurposing lane'],
    momentumSeries: [
      { label: 'W1', momentum: 41 },
      { label: 'W2', momentum: 48 },
      { label: 'W3', momentum: 58 },
      { label: 'W4', momentum: 67 },
      { label: 'W5', momentum: 75 },
      { label: 'W6', momentum: 81 }
    ],
    audienceProfile: [
      { name: 'Publishers', value: 32 },
      { name: 'B2B teams', value: 26 },
      { name: 'Analysts', value: 21 },
      { name: 'Students', value: 21 }
    ]
  },
  {
    id: 'community-first-launches',
    title: 'Community-first launches',
    category: 'Lifestyle',
    description: 'Brand teams are validating messaging through smaller communities before opening launches to broader audiences.',
    momentumScore: 77,
    audienceFit: 74,
    contentPotential: 79,
    status: 'Watch',
    formats: ['AMA', 'Recap', 'Case Study'],
    channels: ['Discord', 'Instagram', 'Email'],
    tags: ['community', 'brand', 'launch'],
    region: 'North America',
    updatedAt: '1 day ago',
    relatedTrends: ['creator-monetization-mix', 'micro-expert-series'],
    suggestedHooks: ['Why smaller communities are outperforming broader launches.', 'The pre-launch feedback loop that made our campaign sharper.'],
    suggestedAngles: ['Superfan-led launch playbook', 'Community validation framework', 'Recap content template'],
    momentumSeries: [
      { label: 'W1', momentum: 34 },
      { label: 'W2', momentum: 45 },
      { label: 'W3', momentum: 53 },
      { label: 'W4', momentum: 61 },
      { label: 'W5', momentum: 70 },
      { label: 'W6', momentum: 77 }
    ],
    audienceProfile: [
      { name: 'Consumer brands', value: 38 },
      { name: 'Creators', value: 24 },
      { name: 'Startups', value: 22 },
      { name: 'Agencies', value: 16 }
    ]
  },
  {
    id: 'micro-expert-series',
    title: 'Micro expert series',
    category: 'Education',
    description: 'Short, repeatable expert-led formats are beating broader educational pieces by delivering precise authority fast.',
    momentumScore: 84,
    audienceFit: 86,
    contentPotential: 82,
    status: 'Rising',
    formats: ['Short Video', 'Thread', 'Carousel'],
    channels: ['YouTube Shorts', 'TikTok', 'LinkedIn'],
    tags: ['education', 'experts', 'short-form'],
    region: 'Global',
    updatedAt: '4 hours ago',
    relatedTrends: ['search-intent-remix', 'community-first-launches'],
    suggestedHooks: ['One expert insight in under 60 seconds.', 'The repeatable short format that makes niche expertise bingeable.'],
    suggestedAngles: ['Series template for expert-led shorts', 'Authority-building content program', 'Short-form editorial calendar'],
    momentumSeries: [
      { label: 'W1', momentum: 50 },
      { label: 'W2', momentum: 57 },
      { label: 'W3', momentum: 64 },
      { label: 'W4', momentum: 72 },
      { label: 'W5', momentum: 79 },
      { label: 'W6', momentum: 84 }
    ],
    audienceProfile: [
      { name: 'Creators', value: 31 },
      { name: 'Educators', value: 28 },
      { name: 'B2B brands', value: 24 },
      { name: 'Students', value: 17 }
    ]
  }
];

export const recommendedDirections = [
  { title: 'Executive-friendly AI workflow explainer', platform: 'LinkedIn + YouTube', score: 91, summary: 'A polished breakdown of how faster research-to-publish systems change team output.' },
  { title: 'Creator revenue stack carousel', platform: 'Instagram', score: 87, summary: 'Turn monetization shifts into a save-worthy social breakdown for creators and brands.' },
  { title: 'Search demand editorial memo', platform: 'Newsletter', score: 83, summary: 'Convert search intent patterns into a weekly strategic briefing format.' }
];

export const watchlist = ['AI search behavior shifts', 'B2B vertical video education', 'Trust-first finance explainers', 'Creator-led product launches'];

export const campaigns = [
  { name: 'Signals Weekly', owner: 'Mina', stage: 'Live', progress: 78 },
  { name: 'Creator Growth Report', owner: 'Jordan', stage: 'Review', progress: 62 },
  { name: 'Brand Pulse Q2', owner: 'Elena', stage: 'Drafting', progress: 46 }
];

export const teamMembers = [
  { name: 'Mina Patel', role: 'Editorial Lead', focus: 'Programming trend-led weekly launches' },
  { name: 'Jordan Lee', role: 'Trend Analyst', focus: 'Tracking momentum and signal movement' },
  { name: 'Elena Cruz', role: 'Brand Strategist', focus: 'Turning insights into campaign direction' },
  { name: 'Theo Kim', role: 'Motion Designer', focus: 'Packaging ideas into premium formats' }
];

export const plannerColumns = [
  { id: 'draft', title: 'Draft', items: [{ title: 'Trend memo: AI workflows', channel: 'Newsletter' }, { title: 'Micro expert series outline', channel: 'Shorts' }] },
  { id: 'planned', title: 'Planned', items: [{ title: 'Creator revenue carousel', channel: 'Instagram' }, { title: 'Search intent briefing', channel: 'LinkedIn' }] },
  { id: 'approved', title: 'Approved', items: [{ title: 'Community-first launch recap', channel: 'Blog' }] },
  { id: 'scheduled', title: 'Scheduled', items: [{ title: 'Weekly signals dashboard clip', channel: 'TikTok' }, { title: 'AI workflow teardown', channel: 'YouTube' }] }
];

export const ideaCards = [
  { id: 'idea-1', angle: 'Show how one content team condensed scattered research into a single AI-assisted workflow.', hook: 'What changed when our editorial team stopped researching in five places?', platform: 'LinkedIn', tone: 'Strategic', cta: 'Download the workflow map', engagement: 'High' },
  { id: 'idea-2', angle: 'Break down the creator monetization stack with benchmark ranges and simple visual logic.', hook: 'Most creators still rely on the lowest-leverage revenue stream.', platform: 'Instagram', tone: 'Insightful', cta: 'Save this revenue map', engagement: 'Very High' },
  { id: 'idea-3', angle: 'Turn recurring search demand into a weekly editorial operating ritual for small teams.', hook: 'Your next high-intent content series might already be hidden in search behavior.', platform: 'Newsletter', tone: 'Authoritative', cta: 'Reply for the brief template', engagement: 'Medium' }
];

export const workspaceProjects = [
  { title: 'Q2 Media Signals', status: 'On track', progress: 74 },
  { title: 'Creator Growth Report', status: 'Needs review', progress: 58 },
  { title: 'Brand Story Engine', status: 'In production', progress: 84 }
];

export const workspaceNotes = [
  'Package “AI workflow storytelling” as a proof-heavy editorial series.',
  'Test more contrarian hooks in creator monetization content.',
  'Move search-intent remix into the April planner with newsletter-first positioning.'
];

export const activityFeed = [
  'Jordan promoted AI workflow storytelling to the top opportunity band.',
  'Mina added 3 new ideas to the upcoming editorial sprint.',
  'Elena updated pricing narrative for investor demo flows.',
  'Theo attached new visual treatments to the Creator Growth Report.'
];

export const pricingTiers = [
  { name: 'Basic', monthly: 29, yearly: 24, description: 'For solo creators validating what to publish next.', features: ['30 tracked trends', 'Idea generator', 'Single workspace', 'Weekly planner view'] },
  { name: 'Pro', monthly: 79, yearly: 64, description: 'For teams turning live trend signals into weekly output.', features: ['Unlimited trends', 'Opportunity scoring', 'Shared planner', 'Campaign workspace', 'Priority support'], highlighted: true },
  { name: 'Team', monthly: 149, yearly: 124, description: 'For media and brand teams shipping across channels.', features: ['Up to 12 seats', 'Approval workflows', 'Custom dashboards', 'Performance snapshots'] },
  { name: 'Enterprise', monthly: 299, yearly: 249, description: 'For organizations that need scale, governance, and reporting.', features: ['Unlimited teams', 'Custom onboarding', 'Dedicated reviews', 'Advanced reporting'] }
];

export const faqItems = [
  { question: 'Is TrendNest a real backend product?', answer: 'No. This repository is a frontend-only static prototype built entirely with local mock data.' },
  { question: 'Will it work on GitHub Pages?', answer: 'Yes. The app uses a static Vite build and HashRouter so direct links and refreshes remain safe on GitHub Pages.' },
  { question: 'Do I need environment variables?', answer: 'No. The prototype has no backend, no auth, and no external API dependencies.' },
  { question: 'Can I adapt it for a pitch deck or client demo?', answer: 'Yes. Update the mock data, copy, and visuals to tailor the story for your audience.' }
];
