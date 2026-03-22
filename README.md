# TrendNest

TrendNest is a premium frontend-only SaaS prototype for discovering emerging trends, converting them into content opportunities, and organizing publishing strategy in one modern workspace.

## What it is

This repository contains a polished investor/demo-ready web application built with mock data only. There is no backend, database, authentication provider, or external API dependency.

## Tech stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Recharts
- Framer Motion
- lucide-react

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Accept the default Next.js build settings.
4. Deploy with no required environment variables.

## Design rationale

TrendNest uses a dark premium SaaS visual system with layered cards, restrained gradients, subtle glassmorphism, and dashboard-first hierarchy inspired by modern tools like Linear, Vercel, and polished AI workspaces.

## Route overview

- `/` — Marketing landing page
- `/product` — Product capabilities overview
- `/pricing` — Pricing and FAQ
- `/dashboard` — Demo dashboard
- `/trends` — Trend explorer
- `/trends/[id]` — Trend detail view
- `/planner` — Content planner
- `/ideas` — Idea generator
- `/workspace` — Team workspace

## Prototype note

TrendNest is intentionally frontend-only and powered entirely by local mock TypeScript data for easy demos, customization, and immediate deployment.
