# Day One — dayone.tools

Opinionated startup tool directory. One pick per category. No comparisons. No noise.

## Stack

- **React + Vite + TypeScript** — frontend framework
- **Tailwind CSS v3** — styling
- **shadcn/ui** — base components
- **React Router v6** — routing
- **Supabase** — database, auth, click tracking
- **Vercel** — deployment (fra1 region)

## Routes

| Path | Description |
|---|---|
| `/` | Homepage — tool grid |
| `/why` | Editorial page — philosophy & transparency |
| `/admin` | Password-protected admin for editing tools |

## Local Setup

```bash
# 1. Clone
git clone https://github.com/nic-olaz/dayone-tools.git
cd dayone-tools

# 2. Install
pnpm install

# 3. Set up env vars
cp .env.local.example .env.local
# Fill in your Supabase URL, anon key, and admin password

# 4. Run Supabase migration
# Paste supabase/migrations/001_initial.sql into your Supabase SQL Editor

# 5. Start dev server
pnpm dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key (safe for frontend) |
| `VITE_ADMIN_PASSWORD` | Password for the `/admin` route |

Set these in Vercel under Project > Settings > Environment Variables for production.

## Supabase Schema

Three tables: `categories`, `tools`, `clicks`. Full schema + seed data in `supabase/migrations/001_initial.sql`.

## Deployment

Push to `main` and Vercel auto-deploys. Make sure all three env vars are set in Vercel.

Set Vercel region to `fra1` (Frankfurt) for GDPR compliance.
