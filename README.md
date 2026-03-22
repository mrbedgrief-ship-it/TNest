# TrendNest

TrendNest is a premium frontend-only static SaaS prototype for discovering emerging trends, evaluating content opportunities, generating content ideas, and organizing publishing strategy in one visual workspace.

## What this project is

- A polished investor/demo-ready React application.
- Built with **Vite + React + TypeScript + Tailwind CSS**.
- Powered entirely by local mock data.
- **No backend, no database, no auth, no API routes, and no server-side rendering**.
- Designed specifically to work as a **GitHub Pages-compatible static site**.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- lucide-react

## Local development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for **static-only deployment** and uses **HashRouter** so refreshes and deep links work on GitHub Pages without server rewrites.

### Base path configuration

The Vite base path is controlled in `vite.config.ts`.

Default:

```ts
base: '/TNest/'
```

If your repository name is different, set the base path before building:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

Example for a repo named `trendnest-demo`:

```bash
VITE_BASE_PATH=/trendnest-demo/ npm run build
```

### Deploy steps

1. Push this repository to GitHub.
2. Make sure the repo name matches your intended GitHub Pages path, or set `VITE_BASE_PATH` accordingly before building.
3. Run:

```bash
npm install
npm run build
```

4. Publish the generated `dist/` folder to GitHub Pages.
   - If using GitHub Actions, deploy the contents of `dist/`.
   - If using the Pages UI/manual branch flow, publish the built static output from `dist/`.
5. In GitHub Pages settings, ensure the published files come from the built output you generated.

Because the app uses `HashRouter`, routes will work as URLs like:

- `https://username.github.io/TNest/#/`
- `https://username.github.io/TNest/#/dashboard`
- `https://username.github.io/TNest/#/trends`

## Route overview

- `#/` — Marketing landing page
- `#/dashboard` — Demo dashboard
- `#/trends` — Trend explorer with detail modal
- `#/planner` — Visual content planner
- `#/ideas` — Idea generator
- `#/workspace` — Team workspace
- `#/pricing` — Pricing and FAQ

## Design rationale

TrendNest uses a premium dark SaaS visual system with layered cards, subtle gradients, restrained glass effects, clean typography, and dashboard-first hierarchy inspired by polished products such as Linear, Vercel, and modern AI SaaS interfaces.

## Static prototype note

This repository is intentionally a **frontend-only static prototype**. All metrics, trends, charts, campaigns, planner items, ideas, and pricing details are mock/demo data stored locally in the project.
