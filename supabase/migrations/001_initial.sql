-- ============================================================
-- Day One Tools — Initial Schema
-- Run in Supabase SQL Editor or via Supabase CLI
-- ============================================================

-- categories
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  icon text,
  description text,
  order_index integer default 0,
  created_at timestamptz default now()
);

-- tools
create table if not exists tools (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete cascade,
  name text not null,
  tagline text not null,
  why_short text,
  why text,
  affiliate_url text,
  website_url text,
  logo_url text,
  is_active boolean default true,
  is_sponsored boolean default false,
  order_index integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- click tracking
create table if not exists clicks (
  id uuid primary key default gen_random_uuid(),
  tool_id uuid references tools(id) on delete cascade,
  referrer text,
  created_at timestamptz default now()
);

-- ── Row Level Security ──────────────────────────────────────

alter table categories enable row level security;
alter table tools enable row level security;
alter table clicks enable row level security;

-- Public read for categories and active tools
create policy "Public read categories"
  on categories for select using (true);

create policy "Public read active tools"
  on tools for select using (is_active = true);

-- Anyone can insert clicks (anonymous tracking)
create policy "Public insert clicks"
  on clicks for insert with check (true);

-- Service role can do everything (for admin writes via server-side)
-- Note: admin edits in the MVP go through the anon key with RLS bypassed
-- by using the service role key server-side. For the browser admin,
-- temporarily grant update to anon — tighten before production:
create policy "Anon update tools"
  on tools for update using (true) with check (true);

-- ── Seed: Categories ───────────────────────────────────────

insert into categories (name, slug, icon, order_index) values
('Business Account', 'business-account', '🏦', 1),
('Domain', 'domain', '🌐', 2),
('Business Email', 'business-email', '📧', 3),
('AI / LLM', 'ai-llm', '🤖', 4),
('Team Chat', 'team-chat', '💬', 5),
('Docs & Notes', 'docs-notes', '📝', 6),
('Task Management', 'task-management', '✅', 7),
('CRM', 'crm', '📊', 8),
('Website Builder', 'website-builder', '💻', 9),
('Code Repo', 'code-repo', '📦', 10),
('Email Marketing', 'email-marketing', '📬', 11),
('Analytics', 'analytics', '📈', 12),
('Payments', 'payments', '💳', 13),
('Accounting', 'accounting', '🧾', 14),
('Deployment', 'deployment', '🚀', 15)
on conflict (slug) do nothing;

-- ── Seed: Tools ────────────────────────────────────────────

insert into tools (category_id, name, tagline, why_short, affiliate_url, website_url, order_index)
select c.id, t.name, t.tagline, t.why_short, t.affiliate_url, t.website_url, t.order_index
from (values
  ('business-account', 'Qonto', 'The business account built for startups', 'No hidden fees, instant setup, built for founders — not legacy banks.', 'https://qonto.com', 'https://qonto.com', 1),
  ('domain', 'GoDaddy', 'Register your domain in 60 seconds', 'Widest selection, solid uptime, easy DNS management.', 'https://godaddy.com', 'https://godaddy.com', 1),
  ('business-email', 'Google Workspace', 'Professional email on your domain', 'Gmail interface + Drive + Meet in one. Every startup already uses it.', 'https://workspace.google.com', 'https://workspace.google.com', 1),
  ('ai-llm', 'Claude', 'The AI that actually reasons', 'Best for writing, coding, and complex thinking. Built with safety in mind.', 'https://claude.ai', 'https://claude.ai', 1),
  ('team-chat', 'Slack', 'Where your team talks', 'The default for startups. Every tool integrates with it.', 'https://slack.com', 'https://slack.com', 1),
  ('docs-notes', 'Notion', 'Docs, wikis, and databases in one', 'Replaces 3 tools. Perfect for early teams that need flexibility.', 'https://notion.so', 'https://notion.so', 1),
  ('task-management', 'Asana', 'Tasks, projects, timelines', 'Clean, powerful, free for small teams. Scales when you do.', 'https://asana.com', 'https://asana.com', 1),
  ('crm', 'HubSpot', 'Free CRM that actually stays free', 'Best free tier in the market. Grows with your sales motion.', 'https://hubspot.com', 'https://hubspot.com', 1),
  ('website-builder', 'Framer', 'Beautiful sites, no code needed', 'Designer-quality output, React under the hood, deploys in one click.', 'https://framer.com', 'https://framer.com', 1),
  ('code-repo', 'GitHub', 'Where your code lives', 'The standard. CI/CD, Actions, Copilot — all in one place.', 'https://github.com', 'https://github.com', 1),
  ('email-marketing', 'Brevo', 'Email marketing without the price tag', 'Generous free tier, solid deliverability, easy automations.', 'https://brevo.com', 'https://brevo.com', 1),
  ('analytics', 'Plausible', 'Privacy-friendly analytics', 'No cookie banners, GDPR-compliant, simple dashboard. No Google needed.', 'https://plausible.io', 'https://plausible.io', 1),
  ('payments', 'Stripe', 'Payments infrastructure for the internet', 'The default for a reason. Best docs, best DX, global from day one.', 'https://stripe.com', 'https://stripe.com', 1),
  ('accounting', 'Lexoffice', 'German accounting made simple', 'DATEV-compatible, ELSTER integration, built for German GmbHs.', 'https://lexoffice.de', 'https://lexoffice.de', 1),
  ('deployment', 'Vercel', 'Deploy in seconds, scale forever', 'Best DX for frontend. Git push to deploy, free tier is genuinely useful.', 'https://vercel.com', 'https://vercel.com', 1)
) as t(slug, name, tagline, why_short, affiliate_url, website_url, order_index)
join categories c on c.slug = t.slug;
