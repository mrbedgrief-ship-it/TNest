export type Trend = {
  id: string;
  title: string;
  category: string;
  description: string;
  momentumScore: number;
  audienceFit: number;
  contentPotential: number;
  status: 'Emerging' | 'Rising' | 'Peaking' | 'Watch';
  region: string;
  channels: string[];
  formats: string[];
  tags: string[];
  updatedAt: string;
  relatedTrends: string[];
  suggestedHooks: string[];
  momentumSeries: { week: string; score: number }[];
  audienceProfile: { label: string; value: number }[];
  suggestedAngles: string[];
};

export const navApp = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/trends', label: 'Trends' },
  { href: '/planner', label: 'Planner' },
  { href: '/ideas', label: 'Ideas' },
  { href: '/workspace', label: 'Workspace' }
];

export const navMarketing = [
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Demo' }
];

export const dashboardMetrics = [
  { label: 'Tracked trends', value: '184', delta: '+18% vs last month' },
  { label: 'Avg opportunity score', value: '82', delta: '+9 points this week' },
  { label: 'Planned content pieces', value: '46', delta: '12 scheduled this week' },
  { label: 'Campaign velocity', value: '3.4x', delta: 'Faster from signal to publish' }
];

export const weeklyPerformance = [
  { day: 'Mon', momentum: 72, content: 64, campaigns: 30 },
  { day: 'Tue', momentum: 76, content: 68, campaigns: 34 },
  { day: 'Wed', momentum: 81, content: 74, campaigns: 42 },
  { day: 'Thu', momentum: 78, content: 72, campaigns: 39 },
  { day: 'Fri', momentum: 87, content: 81, campaigns: 48 },
  { day: 'Sat', momentum: 84, content: 79, campaigns: 44 },
  { day: 'Sun', momentum: 89, content: 83, campaigns: 52 }
];

export const categoryOverview = [
  { name: 'Short-form Video', value: 28 },
  { name: 'Creator Economy', value: 24 },
  { name: 'Tech', value: 18 },
  { name: 'Lifestyle', value: 14 },
  { name: 'Finance', value: 9 },
  { name: 'Education', value: 7 }
];

export const contentDirections = [
  {
    title: 'Explainer series around AI workflows',
    platform: 'YouTube + LinkedIn',
    score: 91,
    summary: 'Turn rising AI productivity trends into weekly explainers with executive-friendly framing.'
  },
  {
    title: 'Fast-react carousel for creator monetization',
    platform: 'Instagram',
    score: 86,
    summary: 'Package creator economy signals into concise carousel breakdowns for social teams.'
  },
  {
    title: 'Founder memo on community-led media',
    platform: 'Newsletter',
    score: 83,
    summary: 'Pair trend context with perspective to build authority and drive subscriber growth.'
  }
];

export const watchlist = [
  'AI search behavior shifts',
  'Creator-led product launches',
  'Vertical video for B2B education',
  'Trust-first finance explainers'
];

export const campaigns = [
  { name: 'Spring Creator Insights', owner: 'Mina', status: 'Live', progress: 78 },
  { name: 'Tech Signals Weekly', owner: 'Jordan', status: 'Drafting', progress: 46 },
  { name: 'Brand Pulse Q2', owner: 'Elena', status: 'Review', progress: 64 }
];

export const trends: Trend[] = [
  {
    id: 'ai-workflow-storytelling',
    title: 'AI workflow storytelling',
    category: 'Tech',
    description: 'Audiences are engaging with tactical behind-the-scenes stories about how teams actually use AI to create, edit, and ship faster.',
    momentumScore: 92,
    audienceFit: 88,
    contentPotential: 95,
    status: 'Rising',
    region: 'North America',
    channels: ['YouTube', 'LinkedIn', 'Newsletter'],
    formats: ['Explainer', 'Carousel', 'Short video'],
    tags: ['AI', 'productivity', 'editorial'],
    updatedAt: '2 hours ago',
    relatedTrends: ['creator-monetization-mix', 'search-intent-remix'],
    suggestedHooks: ['We replaced three disconnected tools with one AI workflow.', 'What actually changed after our team adopted AI editing assistants?'],
    momentumSeries: [
      { week: 'W1', score: 54 },
      { week: 'W2', score: 61 },
      { week: 'W3', score: 72 },
      { week: 'W4', score: 79 },
      { week: 'W5', score: 86 },
      { week: 'W6', score: 92 }
    ],
    audienceProfile: [
      { label: 'Media teams', value: 34 },
      { label: 'Creators', value: 29 },
      { label: 'Brand marketers', value: 23 },
      { label: 'Editors', value: 14 }
    ],
    suggestedAngles: ['A day-in-the-life editorial workflow walkthrough', 'Tool stack teardown for teams scaling content', 'Before/after comparison of production throughput']
  },
  {
    id: 'creator-monetization-mix',
    title: 'Creator monetization mix',
    category: 'Creator Economy',
    description: 'Creators are diversifying from ad-only income into memberships, products, consulting, and affiliate ecosystems.',
    momentumScore: 89,
    audienceFit: 84,
    contentPotential: 90,
    status: 'Peaking',
    region: 'Global',
    channels: ['Instagram', 'TikTok', 'Podcast'],
    formats: ['Carousel', 'Interview', 'Short video'],
    tags: ['creators', 'revenue', 'growth'],
    updatedAt: '5 hours ago',
    relatedTrends: ['ai-workflow-storytelling', 'community-first-launches'],
    suggestedHooks: ['The smartest creators are building three revenue layers, not one.', 'Here is what a modern creator income stack really looks like.'],
    momentumSeries: [
      { week: 'W1', score: 60 },
      { week: 'W2', score: 67 },
      { week: 'W3', score: 71 },
      { week: 'W4', score: 79 },
      { week: 'W5', score: 85 },
      { week: 'W6', score: 89 }
    ],
    audienceProfile: [
      { label: 'Independent creators', value: 42 },
      { label: 'Agencies', value: 18 },
      { label: 'Brand teams', value: 24 },
      { label: 'Education brands', value: 16 }
    ],
    suggestedAngles: ['Visual revenue-stack breakdown', 'Founder interview with diversified creators', 'Benchmarks for audience-to-revenue conversion']
  },
  {
    id: 'search-intent-remix',
    title: 'Search-intent remix',
    category: 'News Media',
    description: 'Editorial teams are repackaging recurring search demand into modular content formats that can be updated fast.',
    momentumScore: 81,
    audienceFit: 79,
    contentPotential: 85,
    status: 'Emerging',
    region: 'Europe',
    channels: ['Search', 'Blog', 'LinkedIn'],
    formats: ['Article', 'Brief', 'Newsletter'],
    tags: ['SEO', 'newsroom', 'repurposing'],
    updatedAt: 'Yesterday',
    relatedTrends: ['ai-workflow-storytelling', 'micro-expert-series'],
    suggestedHooks: ['What recurring questions are quietly driving your best traffic?', 'Build once, refresh weekly: the new editorial SEO loop.'],
    momentumSeries: [
      { week: 'W1', score: 43 },
      { week: 'W2', score: 49 },
      { week: 'W3', score: 58 },
      { week: 'W4', score: 69 },
      { week: 'W5', score: 75 },
      { week: 'W6', score: 81 }
    ],
    audienceProfile: [
      { label: 'Publishers', value: 31 },
      { label: 'B2B marketers', value: 26 },
      { label: 'Analysts', value: 22 },
      { label: 'Students', value: 21 }
    ],
    suggestedAngles: ['Editorial system for refreshing top queries', 'Search brief templates for smaller teams', 'Cross-format workflow from article to short']
  },
  {
    id: 'community-first-launches',
    title: 'Community-first launches',
    category: 'Lifestyle',
    description: 'Brands are validating launches with intimate audience communities before scaling to broader channels.',
    momentumScore: 77,
    audienceFit: 74,
    contentPotential: 80,
    status: 'Watch',
    region: 'North America',
    channels: ['Discord', 'Email', 'Instagram'],
    formats: ['AMA', 'Recap', 'Case study'],
    tags: ['community', 'brand', 'launches'],
    updatedAt: '1 day ago',
    relatedTrends: ['creator-monetization-mix', 'micro-expert-series'],
    suggestedHooks: ['Why smaller communities are outperforming bigger launches.', 'The pre-launch ritual that made our campaign feel inevitable.'],
    momentumSeries: [
      { week: 'W1', score: 35 },
      { week: 'W2', score: 46 },
      { week: 'W3', score: 54 },
      { week: 'W4', score: 61 },
      { week: 'W5', score: 69 },
      { week: 'W6', score: 77 }
    ],
    audienceProfile: [
      { label: 'Consumer brands', value: 37 },
      { label: 'Creators', value: 22 },
      { label: 'Startups', value: 25 },
      { label: 'Agencies', value: 16 }
    ],
    suggestedAngles: ['Launch checklist built around community signals', 'How to turn superfans into campaign collaborators', 'A post-launch recap template with trust metrics']
  },
  {
    id: 'micro-expert-series',
    title: 'Micro expert series',
    category: 'Education',
    description: 'Short, repeatable expert-led formats are outperforming broad educational pieces by offering focused, niche authority.',
    momentumScore: 84,
    audienceFit: 86,
    contentPotential: 82,
    status: 'Rising',
    region: 'Global',
    channels: ['YouTube Shorts', 'TikTok', 'LinkedIn'],
    formats: ['Short video', 'Thread', 'Carousel'],
    tags: ['education', 'experts', 'short-form'],
    updatedAt: '4 hours ago',
    relatedTrends: ['search-intent-remix', 'community-first-launches'],
    suggestedHooks: ['One expert insight in under 60 seconds.', 'The repeatable format that makes niche expertise bingeable.'],
    momentumSeries: [
      { week: 'W1', score: 51 },
      { week: 'W2', score: 58 },
      { week: 'W3', score: 63 },
      { week: 'W4', score: 71 },
      { week: 'W5', score: 79 },
      { week: 'W6', score: 84 }
    ],
    audienceProfile: [
      { label: 'Educators', value: 28 },
      { label: 'B2B brands', value: 24 },
      { label: 'Creators', value: 31 },
      { label: 'Students', value: 17 }
    ],
    suggestedAngles: ['Series template for expert-led shorts', 'Editorial calendar for niche expertise', 'How to maintain authority while scaling output']
  }
];

export const plannerItems = [
  { day: 'Monday', title: 'AI workflow teardown', channel: 'LinkedIn', status: 'Planned' },
  { day: 'Tuesday', title: 'Creator revenue carousel', channel: 'Instagram', status: 'Approved' },
  { day: 'Wednesday', title: 'Trend memo newsletter', channel: 'Email', status: 'Draft' },
  { day: 'Thursday', title: 'Micro expert short', channel: 'YouTube Shorts', status: 'Scheduled' },
  { day: 'Friday', title: 'Community launch recap', channel: 'Blog', status: 'Planned' }
];

export const ideaCards = [
  {
    id: 'idea-1',
    angle: 'Show the editorial stack behind a high-performing AI content team.',
    hook: 'What changed when we replaced scattered research with one trend workspace?',
    platform: 'LinkedIn',
    tone: 'Strategic',
    cta: 'Download the workflow template',
    engagement: 'High'
  },
  {
    id: 'idea-2',
    angle: 'Break down the modern creator monetization stack with benchmark ranges.',
    hook: 'Most creators leave money on the table because they rely on one revenue stream.',
    platform: 'Instagram',
    tone: 'Insightful',
    cta: 'Save this revenue map',
    engagement: 'Very High'
  },
  {
    id: 'idea-3',
    angle: 'Turn search demand into a weekly newsroom planning ritual.',
    hook: 'Your highest-intent content ideas are already hidden in search behavior.',
    platform: 'Newsletter',
    tone: 'Authoritative',
    cta: 'Reply for the briefing framework',
    engagement: 'Medium'
  }
];

export const teamMembers = [
  { name: 'Mina Patel', role: 'Editorial Lead' },
  { name: 'Jordan Lee', role: 'Trend Analyst' },
  { name: 'Elena Cruz', role: 'Brand Strategist' },
  { name: 'Theo Kim', role: 'Motion Designer' }
];

export const workspaceProjects = [
  { title: 'Q2 Media Signals', status: 'On track', progress: 74 },
  { title: 'Creator Growth Report', status: 'Needs review', progress: 58 },
  { title: 'Brand Story Engine', status: 'In production', progress: 82 }
];

export const activityFeed = [
  'Jordan promoted “AI workflow storytelling” to Rising status.',
  'Mina added 3 ideas to the April content plan.',
  'Elena updated the Pro pricing narrative for enterprise prospects.',
  'Theo attached a new visual treatment to the creator campaign board.'
];

export const pricingTiers = [
  {
    name: 'Basic',
    monthly: 29,
    yearly: 24,
    description: 'For solo creators validating what to publish next.',
    features: ['30 tracked trends', 'Idea generator', 'Single workspace', 'Basic planner views']
  },
  {
    name: 'Pro',
    monthly: 79,
    yearly: 64,
    description: 'For teams turning trend signals into weekly output.',
    features: ['Unlimited tracked trends', 'Advanced opportunity scoring', 'Shared planner', 'Campaign workspace', 'Priority support'],
    highlighted: true
  },
  {
    name: 'Team',
    monthly: 149,
    yearly: 124,
    description: 'For media and brand teams shipping across channels.',
    features: ['Unlimited seats up to 12', 'Custom views', 'Approvals workflow', 'Team analytics', 'Live workshops']
  },
  {
    name: 'Enterprise',
    monthly: 299,
    yearly: 249,
    description: 'For organizations that need structure, governance, and scale.',
    features: ['Unlimited teams', 'Advanced permissions', 'Dedicated onboarding', 'Strategy reviews', 'Custom reporting']
  }
];
