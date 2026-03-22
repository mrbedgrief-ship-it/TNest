const data = {
  heroStats: [
    { label: 'Tracked signals', value: '184' },
    { label: 'Avg opportunity score', value: '82' },
    { label: 'Campaigns planned', value: '46' },
    { label: 'Signal-to-publish lift', value: '3.4x' }
  ],
  features: [
    { icon: '✦', title: 'Trend discovery', text: 'Track rising conversations across media, creators, and category shifts before they become obvious.' },
    { icon: '◔', title: 'Opportunity scoring', text: 'Compare momentum, audience fit, and content potential in one premium decision layer.' },
    { icon: '⌁', title: 'Idea generation', text: 'Turn signals into platform-specific content angles, hooks, and calls to action.' },
    { icon: '▣', title: 'Publishing planner', text: 'Move approved opportunities into a weekly content operating system with team visibility.' },
    { icon: '◎', title: 'Team collaboration', text: 'Align editorial, strategy, creative, and brand teams around one current source of truth.' }
  ],
  kpis: [
    { label: 'Tracked trends', value: '184', note: '+18% month over month' },
    { label: 'Ideas generated', value: '126', note: '+24 this week' },
    { label: 'Content ready', value: '46', note: '12 scheduled now' },
    { label: 'Team velocity', value: '3.4x', note: 'Faster planning cycle' }
  ],
  weeklyPerformance: [68, 72, 81, 77, 88, 83, 90],
  weeklyContent: [54, 61, 73, 69, 84, 79, 85],
  categories: [
    { name: 'Creator Economy', value: 24, color: '#7c8cff' },
    { name: 'Short-form Video', value: 22, color: '#51d4ff' },
    { name: 'Tech', value: 18, color: '#9b7cff' },
    { name: 'Lifestyle', value: 14, color: '#34d399' },
    { name: 'Education', value: 12, color: '#fbbf24' },
    { name: 'Finance', value: 10, color: '#475569' }
  ],
  watchlist: ['AI search behavior shifts', 'B2B vertical video education', 'Trust-first finance explainers', 'Creator-led product launches'],
  recommendations: [
    { title: 'Executive-friendly AI workflow explainer', platform: 'LinkedIn + YouTube', score: 91, summary: 'Translate AI workflow momentum into a premium thought-leadership format.' },
    { title: 'Creator revenue stack carousel', platform: 'Instagram', score: 87, summary: 'Turn monetization shifts into a save-worthy social concept.' },
    { title: 'Search demand editorial memo', platform: 'Newsletter', score: 83, summary: 'Convert search patterns into a strategic recurring briefing.' }
  ],
  campaigns: [
    { name: 'Signals Weekly', owner: 'Mina', stage: 'Live', progress: 78 },
    { name: 'Creator Growth Report', owner: 'Jordan', stage: 'Review', progress: 62 },
    { name: 'Brand Pulse Q2', owner: 'Elena', stage: 'Drafting', progress: 46 }
  ],
  trends: [
    {
      id: 'ai-workflow-storytelling',
      category: 'Tech',
      title: 'AI workflow storytelling',
      description: 'Media teams are unpacking how AI changes ideation, editing, packaging, and production speed.',
      momentum: 92,
      audienceFit: 88,
      potential: 95,
      status: 'Rising',
      formats: ['Explainer', 'Carousel', 'Short Video'],
      overview: 'This signal is performing because audiences respond to practical, proof-heavy stories about how content teams actually work faster with AI.',
      hooks: ['What changed when our editorial team adopted AI?', 'The workflow shift most media teams still overlook.'],
      channels: ['YouTube', 'LinkedIn', 'Newsletter'],
      related: ['Creator monetization mix', 'Search-intent remix']
    },
    {
      id: 'creator-monetization-mix',
      category: 'Creator Economy',
      title: 'Creator monetization mix',
      description: 'Creators are diversifying income through memberships, products, consulting, and high-trust affiliate ecosystems.',
      momentum: 89,
      audienceFit: 84,
      potential: 90,
      status: 'Peaking',
      formats: ['Carousel', 'Interview', 'Short Video'],
      overview: 'This trend resonates because audiences and creators both want clear models for building resilient revenue beyond ad-only dependence.',
      hooks: ['Most creators still rely on the weakest revenue model.', 'The smartest audience businesses now stack four income layers.'],
      channels: ['Instagram', 'TikTok', 'Podcast'],
      related: ['AI workflow storytelling', 'Community-first launches']
    },
    {
      id: 'search-intent-remix',
      category: 'News Media',
      title: 'Search-intent remix',
      description: 'Editorial teams are packaging recurring search demand into faster modular formats they can refresh every week.',
      momentum: 81,
      audienceFit: 79,
      potential: 86,
      status: 'Emerging',
      formats: ['Article', 'Brief', 'Newsletter'],
      overview: 'The signal is gaining because repeatable content systems let editorial teams convert search demand into formats with longer shelf life.',
      hooks: ['Your next high-intent content series might already be in search behavior.', 'Why modular editorial systems are outperforming one-off stories.'],
      channels: ['Search', 'Blog', 'LinkedIn'],
      related: ['Micro expert series', 'AI workflow storytelling']
    },
    {
      id: 'community-first-launches',
      category: 'Lifestyle',
      title: 'Community-first launches',
      description: 'Brand teams are validating messaging through smaller communities before scaling launches wider.',
      momentum: 77,
      audienceFit: 74,
      potential: 79,
      status: 'Watch',
      formats: ['AMA', 'Recap', 'Case Study'],
      overview: 'Smaller communities are driving stronger launch narratives by surfacing better proof, clearer language, and more trust before scale.',
      hooks: ['Why smaller communities are outperforming broader launches.', 'The pre-launch feedback loop that made our campaign sharper.'],
      channels: ['Discord', 'Instagram', 'Email'],
      related: ['Creator monetization mix', 'Micro expert series']
    },
    {
      id: 'micro-expert-series',
      category: 'Education',
      title: 'Micro expert series',
      description: 'Short, repeatable expert-led formats are beating broader educational pieces by delivering precise authority fast.',
      momentum: 84,
      audienceFit: 86,
      potential: 82,
      status: 'Rising',
      formats: ['Short Video', 'Thread', 'Carousel'],
      overview: 'This format performs because it packages niche authority into a repeatable system that audiences can quickly understand and share.',
      hooks: ['One expert insight in under 60 seconds.', 'The repeatable short format that makes niche expertise bingeable.'],
      channels: ['YouTube Shorts', 'TikTok', 'LinkedIn'],
      related: ['Search-intent remix', 'Community-first launches']
    }
  ],
  planner: {
    draft: [{ title: 'Trend memo: AI workflows', channel: 'Newsletter' }, { title: 'Micro expert series outline', channel: 'Shorts' }],
    planned: [{ title: 'Creator revenue carousel', channel: 'Instagram' }, { title: 'Search intent briefing', channel: 'LinkedIn' }],
    approved: [{ title: 'Community-first launch recap', channel: 'Blog' }],
    scheduled: [{ title: 'Weekly signals dashboard clip', channel: 'TikTok' }, { title: 'AI workflow teardown', channel: 'YouTube' }]
  },
  ideas: [
    { angle: 'Show how one content team condensed scattered research into a single AI-assisted workflow.', hook: 'What changed when our editorial team stopped researching in five places?', platform: 'LinkedIn', tone: 'Strategic', cta: 'Download the workflow map', engagement: 'High' },
    { angle: 'Break down the creator monetization stack with benchmark ranges and simple visual logic.', hook: 'Most creators still rely on the lowest-leverage revenue stream.', platform: 'Instagram', tone: 'Insightful', cta: 'Save this revenue map', engagement: 'Very High' },
    { angle: 'Turn recurring search demand into a weekly editorial operating ritual for small teams.', hook: 'Your next high-intent content series might already be hidden in search behavior.', platform: 'Newsletter', tone: 'Authoritative', cta: 'Reply for the brief template', engagement: 'Medium' }
  ],
  workspace: {
    projects: [
      { title: 'Q2 Media Signals', status: 'On track', progress: 74 },
      { title: 'Creator Growth Report', status: 'Needs review', progress: 58 },
      { title: 'Brand Story Engine', status: 'In production', progress: 84 }
    ],
    team: [
      { name: 'Mina Patel', role: 'Editorial Lead', focus: 'Programming trend-led weekly launches' },
      { name: 'Jordan Lee', role: 'Trend Analyst', focus: 'Tracking momentum and signal movement' },
      { name: 'Elena Cruz', role: 'Brand Strategist', focus: 'Turning insights into campaign direction' },
      { name: 'Theo Kim', role: 'Motion Designer', focus: 'Packaging ideas into premium formats' }
    ],
    notes: [
      'Package AI workflow storytelling as a proof-heavy editorial series.',
      'Test more contrarian hooks in creator monetization content.',
      'Move search-intent remix into the April planner with newsletter-first positioning.'
    ],
    activity: [
      'Jordan promoted AI workflow storytelling into the top opportunity band.',
      'Mina added three new ideas to the upcoming editorial sprint.',
      'Elena updated pricing narrative for investor demo flows.',
      'Theo attached new visual treatments to the Creator Growth Report.'
    ]
  },
  pricing: [
    { name: 'Basic', monthly: 29, yearly: 24, description: 'For solo creators validating what to publish next.', features: ['30 tracked trends', 'Idea generator', 'Single workspace', 'Weekly planner view'] },
    { name: 'Pro', monthly: 79, yearly: 64, description: 'For teams turning live trend signals into weekly output.', features: ['Unlimited trends', 'Opportunity scoring', 'Shared planner', 'Campaign workspace', 'Priority support'], featured: true },
    { name: 'Team', monthly: 149, yearly: 124, description: 'For media and brand teams shipping across channels.', features: ['Up to 12 seats', 'Approval workflows', 'Custom dashboards', 'Performance snapshots'] },
    { name: 'Enterprise', monthly: 299, yearly: 249, description: 'For organizations that need scale, governance, and reporting.', features: ['Unlimited teams', 'Custom onboarding', 'Dedicated reviews', 'Advanced reporting'] }
  ],
  faq: [
    { q: 'Is TrendNest a real backend product?', a: 'No. This repository is intentionally a frontend-only static prototype powered entirely by mock/demo data.' },
    { q: 'Will it work directly on GitHub Pages?', a: 'Yes. The site is a plain static website with one index.html page, one stylesheet, and one script file.' },
    { q: 'Does it require a build step or Node server?', a: 'No. You can upload the files directly to GitHub and enable Pages without any runtime hosting requirements.' },
    { q: 'Are the interactions real?', a: 'They are frontend-only demo interactions such as filters, modals, toasts, accordion toggles, and planner item creation.' }
  ]
};

const state = {
  trendCategory: 'All',
  trendSearch: '',
  ideaTone: 'All',
  billing: 'monthly'
};

const heroStats = document.getElementById('heroStats');
const featureGrid = document.getElementById('featureGrid');
const kpiGrid = document.getElementById('kpiGrid');
const categoryLegend = document.getElementById('categoryLegend');
const watchlistCards = document.getElementById('watchlistCards');
const recommendations = document.getElementById('recommendations');
const campaignList = document.getElementById('campaignList');
const trendCategoryFilters = document.getElementById('trendCategoryFilters');
const trendGrid = document.getElementById('trendGrid');
const trendSearch = document.getElementById('trendSearch');
const plannerGrid = document.getElementById('plannerGrid');
const ideasGrid = document.getElementById('ideasGrid');
const ideaToneFilters = document.getElementById('ideaToneFilters');
const projectList = document.getElementById('projectList');
const teamList = document.getElementById('teamList');
const notesList = document.getElementById('notesList');
const activityList = document.getElementById('activityList');
const pricingGrid = document.getElementById('pricingGrid');
const faqList = document.getElementById('faqList');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const plannerModalOverlay = document.getElementById('plannerModalOverlay');
const toastStack = document.getElementById('toastStack');
const plannerForm = document.getElementById('plannerForm');

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 240);
  }, 2400);
}

function renderHeroStats() {
  heroStats.innerHTML = data.heroStats.map((item) => `
    <article class="stat-card reveal-up">
      <small>${item.label}</small>
      <strong>${item.value}</strong>
    </article>
  `).join('');
}

function renderFeatures() {
  featureGrid.innerHTML = data.features.map((item) => `
    <article class="feature-card card reveal-up">
      <div class="icon-wrap">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderKPIs() {
  kpiGrid.innerHTML = data.kpis.map((item) => `
    <article class="kpi-card card reveal-up">
      <small class="subtle">${item.label}</small>
      <strong>${item.value}</strong>
      <span class="subtle">${item.note}</span>
    </article>
  `).join('');
}

function renderLineChart() {
  const chart = document.getElementById('lineChart');
  const width = 780;
  const height = 220;
  const max = 100;
  const createPoints = (arr) => arr.map((value, index) => {
    const x = 40 + index * ((width - 80) / (arr.length - 1));
    const y = height - 28 - ((value / max) * (height - 60));
    return `${x},${y}`;
  }).join(' ');

  chart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      ${[0,1,2,3].map(i => `<line x1="0" y1="${30 + i * 42}" x2="${width}" y2="${30 + i * 42}" stroke="rgba(148,163,184,0.08)" />`).join('')}
      <polyline fill="none" stroke="#7c8cff" stroke-width="4" points="${createPoints(data.weeklyPerformance)}" />
      <polyline fill="none" stroke="#51d4ff" stroke-width="4" points="${createPoints(data.weeklyContent)}" />
    </svg>
  `;
}

function renderCategoryLegend() {
  categoryLegend.innerHTML = data.categories.map((item) => `<div><span style="background:${item.color}"></span>${item.name} · ${item.value}%</div>`).join('');
}

function renderWatchlist() {
  watchlistCards.innerHTML = data.watchlist.map((item) => `<div class="stack-item">${item}</div>`).join('');
}

function renderRecommendations() {
  recommendations.innerHTML = data.recommendations.map((item) => `
    <article class="stack-item">
      <h4>${item.title}</h4>
      <div class="subtle">${item.platform} · Opportunity score ${item.score}</div>
      <p>${item.summary}</p>
    </article>
  `).join('');
}

function renderCampaigns() {
  campaignList.innerHTML = data.campaigns.map((item) => `
    <article class="stack-item">
      <h4>${item.name}</h4>
      <div class="subtle">${item.owner} · ${item.stage}</div>
      <div class="progress-bar"><span style="width:${item.progress}%"></span></div>
    </article>
  `).join('');
}

function renderTrendFilters() {
  const categories = ['All', ...new Set(data.trends.map((item) => item.category))];
  trendCategoryFilters.innerHTML = categories.map((category) => `
    <button class="chip ${state.trendCategory === category ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');
  trendCategoryFilters.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.trendCategory = button.dataset.category;
      renderTrendFilters();
      renderTrends();
    });
  });
}

function renderTrends() {
  const filtered = data.trends.filter((trend) => {
    const matchesCategory = state.trendCategory === 'All' || trend.category === state.trendCategory;
    const haystack = `${trend.title} ${trend.description} ${trend.category} ${trend.formats.join(' ')}`.toLowerCase();
    const matchesSearch = haystack.includes(state.trendSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  trendGrid.innerHTML = filtered.map((trend) => `
    <article class="trend-card card reveal-up" data-trend-id="${trend.id}">
      <div class="trend-meta">
        <span class="tag">${trend.category}</span>
        <span class="tag status-badge">${trend.status}</span>
      </div>
      <h3>${trend.title}</h3>
      <p>${trend.description}</p>
      <div class="metric-row">
        <div class="metric-box"><small>Momentum</small><strong>${trend.momentum}</strong></div>
        <div class="metric-box"><small>Audience fit</small><strong>${trend.audienceFit}</strong></div>
        <div class="metric-box"><small>Potential</small><strong>${trend.potential}</strong></div>
      </div>
      <div class="trend-tags">${trend.formats.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      <div class="card-actions">
        <button class="btn btn-primary open-trend">Open Detail</button>
        <button class="btn btn-secondary quick-watch">Add to Watchlist</button>
      </div>
    </article>
  `).join('');

  trendGrid.querySelectorAll('.open-trend').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const card = event.target.closest('[data-trend-id]');
      openTrendModal(card.dataset.trendId);
    });
  });

  trendGrid.querySelectorAll('.quick-watch').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      showToast('Added to watchlist.');
    });
  });

  trendGrid.querySelectorAll('[data-trend-id]').forEach((card) => {
    card.addEventListener('click', () => openTrendModal(card.dataset.trendId));
  });
}

function openTrendModal(trendId) {
  const trend = data.trends.find((item) => item.id === trendId);
  if (!trend) return;
  modalContent.innerHTML = `
    <div class="modal-title-wrap">
      <div class="eyebrow">${trend.category} · ${trend.status}</div>
      <h3>${trend.title}</h3>
      <p class="modal-overview">${trend.overview}</p>
    </div>
    <div class="metric-row">
      <div class="metric-box"><small>Momentum</small><strong>${trend.momentum}</strong></div>
      <div class="metric-box"><small>Audience fit</small><strong>${trend.audienceFit}</strong></div>
      <div class="metric-box"><small>Potential</small><strong>${trend.potential}</strong></div>
    </div>
    <div class="modal-grid">
      <div class="modal-block">
        <h4>Suggested hooks</h4>
        <ul>${trend.hooks.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="modal-block">
        <h4>Recommended channels</h4>
        <ul>${trend.channels.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="modal-block">
        <h4>Related trends</h4>
        <ul>${trend.related.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" data-toast="Added to watchlist.">Add to watchlist</button>
      <button class="btn btn-secondary" data-toast="Generated three content ideas.">Generate ideas</button>
      <button class="btn btn-secondary" data-toast="Added to planner backlog.">Add to planner</button>
    </div>
  `;
  modalContent.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => showToast(button.dataset.toast));
  });
  modalOverlay.classList.remove('hidden');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function renderPlanner() {
  const columns = [
    ['draft', 'Draft'],
    ['planned', 'Planned'],
    ['approved', 'Approved'],
    ['scheduled', 'Scheduled']
  ];

  plannerGrid.innerHTML = columns.map(([id, title]) => `
    <article class="planner-column card reveal-up">
      <div class="card-head">
        <div>
          <h3>${title}</h3>
          <p>${data.planner[id].length} items in this column</p>
        </div>
      </div>
      <div class="planner-items">
        ${data.planner[id].map((item) => `
          <div class="planner-item">
            <strong>${item.title}</strong>
            <span class="subtle">${item.channel}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderIdeaFilters() {
  const tones = ['All', ...new Set(data.ideas.map((item) => item.tone))];
  ideaToneFilters.innerHTML = tones.map((tone) => `
    <button class="chip ${state.ideaTone === tone ? 'active' : ''}" data-tone="${tone}">${tone}</button>
  `).join('');
  ideaToneFilters.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.ideaTone = button.dataset.tone;
      renderIdeaFilters();
      renderIdeas();
    });
  });
}

function renderIdeas() {
  const visible = data.ideas.filter((idea) => state.ideaTone === 'All' || idea.tone === state.ideaTone);
  ideasGrid.innerHTML = visible.map((idea) => `
    <article class="idea-card card reveal-up">
      <div class="idea-meta">
        <span class="tag">${idea.platform}</span>
        <span class="tag status-badge">${idea.engagement}</span>
      </div>
      <h3>${idea.angle}</h3>
      <p>${idea.hook}</p>
      <div class="stack-item">
        <div class="subtle">Tone</div>
        <strong>${idea.tone}</strong>
        <div class="subtle" style="margin-top:8px">CTA · ${idea.cta}</div>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" data-action="Idea saved to workspace.">Save</button>
        <button class="btn btn-secondary" data-action="Idea duplicated.">Duplicate</button>
        <button class="btn btn-secondary" data-action="Idea added to planner.">Add to planner</button>
      </div>
    </article>
  `).join('');

  ideasGrid.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => showToast(button.dataset.action));
  });
}

function renderWorkspace() {
  projectList.innerHTML = data.workspace.projects.map((item) => `
    <article class="stack-item">
      <h4>${item.title}</h4>
      <div class="subtle">${item.status}</div>
      <div class="progress-bar"><span style="width:${item.progress}%"></span></div>
    </article>
  `).join('');

  teamList.innerHTML = data.workspace.team.map((item) => `
    <article class="stack-item">
      <h4>${item.name}</h4>
      <div class="subtle">${item.role}</div>
      <p>${item.focus}</p>
    </article>
  `).join('');

  notesList.innerHTML = data.workspace.notes.map((item) => `<div class="stack-item">${item}</div>`).join('');
  activityList.innerHTML = data.workspace.activity.map((item) => `<div class="stack-item">${item}</div>`).join('');
}

function renderPricing() {
  pricingGrid.innerHTML = data.pricing.map((plan) => `
    <article class="pricing-card card ${plan.featured ? 'featured' : ''} reveal-up">
      <div class="card-head">
        <div>
          <h3>${plan.name}</h3>
          <p>${plan.description}</p>
        </div>
        ${plan.featured ? '<span class="pill">Recommended</span>' : ''}
      </div>
      <div class="price">$${plan[state.billing]}<span class="subtle">/seat</span></div>
      <ul>${plan.features.map((item) => `<li>• ${item}</li>`).join('')}</ul>
      <div class="card-actions"><a href="#dashboard" class="btn btn-primary">Start Demo</a></div>
    </article>
  `).join('');
}

function renderFAQ() {
  faqList.innerHTML = data.faq.map((item, index) => `
    <article class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${item.q}</span>
        <span>${index === 0 ? '−' : '+'}</span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </article>
  `).join('');

  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const expanded = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(expanded));
      button.lastElementChild.textContent = expanded ? '−' : '+';
    });
  });
}

function closeModal(target) {
  target.classList.add('hidden');
  target.setAttribute('aria-hidden', 'true');
}

function setupInteractions() {
  document.getElementById('menuToggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const expanded = mobileMenu.classList.toggle('open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', String(expanded));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
    });
  });

  trendSearch.addEventListener('input', (event) => {
    state.trendSearch = event.target.value;
    renderTrends();
  });

  document.querySelectorAll('.toggle-option').forEach((button) => {
    button.addEventListener('click', () => {
      state.billing = button.dataset.billing;
      document.querySelectorAll('.toggle-option').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      renderPricing();
    });
  });

  document.getElementById('closeModal').addEventListener('click', () => closeModal(modalOverlay));
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) closeModal(modalOverlay);
  });

  document.getElementById('openPlannerModal').addEventListener('click', () => {
    plannerModalOverlay.classList.remove('hidden');
    plannerModalOverlay.setAttribute('aria-hidden', 'false');
  });
  document.getElementById('closePlannerModal').addEventListener('click', () => closeModal(plannerModalOverlay));
  plannerModalOverlay.addEventListener('click', (event) => {
    if (event.target === plannerModalOverlay) closeModal(plannerModalOverlay);
  });

  plannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(plannerForm);
    const item = {
      title: formData.get('title').toString(),
      channel: formData.get('channel').toString()
    };
    const column = formData.get('column').toString();
    data.planner[column].unshift(item);
    renderPlanner();
    closeModal(plannerModalOverlay);
    plannerForm.reset();
    showToast('Content item created in planner.');
    runRevealObserver();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(modalOverlay);
      closeModal(plannerModalOverlay);
    }
  });
}

function runRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up').forEach((element) => {
    if (!element.classList.contains('visible')) observer.observe(element);
  });
}

function init() {
  renderHeroStats();
  renderFeatures();
  renderKPIs();
  renderLineChart();
  renderCategoryLegend();
  renderWatchlist();
  renderRecommendations();
  renderCampaigns();
  renderTrendFilters();
  renderTrends();
  renderPlanner();
  renderIdeaFilters();
  renderIdeas();
  renderWorkspace();
  renderPricing();
  renderFAQ();
  setupInteractions();
  runRevealObserver();
}

init();
