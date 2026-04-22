export interface ToolData {
  slug: string
  step: number
  name: string
  category: string
  categoryIcon: string
  tagline: string
  whyShort: string
  why: string
  affiliateUrl: string | null
  websiteUrl: string
}

export const TOOLS: ToolData[] = [
  {
    slug: 'qonto',
    step: 1,
    name: 'Qonto',
    category: 'Business Account',
    categoryIcon: '🏦',
    tagline: 'The business account built for startups',
    whyShort: 'Opens in 10 minutes. Works everywhere in the EU. Built for founders, not banks.',
    why: `Qonto was built specifically for startups and SMEs — not retrofitted from a legacy bank product. Setup takes under 10 minutes. No branch visits, no paperwork, no waiting for a relationship manager to call back.

The pricing is transparent. The IBAN works everywhere in the EU. The app is genuinely good. And critically: it integrates with every accounting tool you'll use later.

We've seen founders stuck with Deutsche Bank accounts that took 6 weeks to open. Qonto takes a Sunday afternoon. That time difference matters when you're trying to move fast.`,
    affiliateUrl: null,
    websiteUrl: 'https://qonto.com',
  },
  {
    slug: 'godaddy',
    step: 2,
    name: 'GoDaddy',
    category: 'Domain Registrar',
    categoryIcon: '🌐',
    tagline: 'Register your domain in minutes',
    whyShort: 'Largest domain inventory, simple DNS management, easy transfers. Ignore the upsells.',
    why: `GoDaddy has the largest domain inventory, consistent uptime, and a DNS management interface that doesn't require a manual to use. For a founder registering their first domain, simplicity wins.

The upsells are aggressive — ignore them all. You just need the domain. Their transfer process is also standard, so you're never locked in.

Alternatives like Namecheap or Cloudflare Registrar are fine too, but GoDaddy's one-stop shop means one fewer account to manage in the chaotic early days.`,
    affiliateUrl: null,
    websiteUrl: 'https://godaddy.com',
  },
  {
    slug: 'google-workspace',
    step: 3,
    name: 'Google Workspace',
    category: 'Business Email',
    categoryIcon: '📧',
    tagline: 'Professional email on your domain',
    whyShort: 'Your @company.com email signals you\'re real. Plus Drive, Meet, and Docs — all in one.',
    why: `Your business email is the first thing investors, customers, and partners see. A Gmail address signals that you haven't started yet. A Google Workspace address on your domain signals you're real.

Beyond email: you get Drive (file storage), Meet (video calls), Docs/Sheets (collaboration) — all integrated, all shareable. Your whole early team will already know how to use it.

At $6/user/month, it's the cheapest credibility upgrade available to a new startup.`,
    affiliateUrl: null,
    websiteUrl: 'https://workspace.google.com',
  },
  {
    slug: 'claude',
    step: 4,
    name: 'Claude',
    category: 'AI / LLM',
    categoryIcon: '🤖',
    tagline: 'The AI that actually reasons',
    whyShort: 'Best for writing, reasoning, and business tasks. Outperforms GPT-4 on the stuff founders need.',
    why: `Claude is the best general-purpose AI for founders right now. It writes better than GPT-4, reasons more carefully on complex problems, and doesn't hallucinate as aggressively on business-critical tasks.

For a founder, Claude handles: pitch deck copy, investor emails, market research synthesis, contract review (first pass), job descriptions, customer interview analysis, and a hundred other tasks that used to require expensive consultants.

We picked Claude over ChatGPT because the quality delta on writing tasks — which is what most founders actually need — is consistently in Claude's favor.`,
    affiliateUrl: null,
    websiteUrl: 'https://claude.ai',
  },
  {
    slug: 'slack',
    step: 5,
    name: 'Slack',
    category: 'Team Chat',
    categoryIcon: '💬',
    tagline: 'Where your team communicates',
    whyShort: 'Every tool integrates with Slack. Every contractor you\'ll hire already has an account.',
    why: `Slack is the default. Every tool you'll adopt has a Slack integration. Every contractor, advisor, and investor you'll work with already has a Slack account.

The free tier is functional for early teams. The archive limit is annoying but manageable. And when you grow, upgrading is painless.

Discord is better for communities. Teams is better for enterprises on Microsoft. For an early startup that talks to the outside world, Slack wins on network effects alone.`,
    affiliateUrl: null,
    websiteUrl: 'https://slack.com',
  },
  {
    slug: 'notion',
    step: 6,
    name: 'Notion',
    category: 'Docs & Notes',
    categoryIcon: '📝',
    tagline: 'Your team\'s second brain',
    whyShort: 'Wiki + database + docs in one. Your spec, investor FAQ, and research — all searchable.',
    why: `Notion replaces a wiki, a lightweight database, a document editor, and a simple project tracker — all in one workspace. For a team of 1–5, that consolidation is a massive time saver.

The real value: your product spec, your investor FAQ, your onboarding docs, your competitor research — all in one place, all linkable, all searchable.

We considered Confluence (too heavy), Coda (too complex), and Obsidian (no real-time collab). Notion hits the sweet spot for early-stage teams.`,
    affiliateUrl: null,
    websiteUrl: 'https://notion.so',
  },
  {
    slug: 'asana',
    step: 7,
    name: 'Asana',
    category: 'Task Management',
    categoryIcon: '✅',
    tagline: 'Ship tasks, not chaos',
    whyShort: 'Free tier covers everything a seed-stage team needs. Better than Jira for cross-functional work.',
    why: `Asana's free tier is genuinely powerful. Tasks, subtasks, assignees, due dates, basic reporting — everything a seed-stage team needs. No per-seat cost until you scale.

We prefer it over Linear for non-technical tasks (Linear is excellent for engineering but overkill for sales, marketing, and ops workflows). Asana handles cross-functional work better.

Jira is too heavy. Trello is too simple. Asana is the right size for a 2–10 person team that needs to ship fast.`,
    affiliateUrl: null,
    websiteUrl: 'https://asana.com',
  },
  {
    slug: 'hubspot',
    step: 8,
    name: 'HubSpot',
    category: 'CRM',
    categoryIcon: '📊',
    tagline: 'The CRM that\'s actually free',
    whyShort: 'Most generous free CRM tier in the industry. Contacts, deals, pipeline — forever free.',
    why: `HubSpot's free CRM is the most generous free tier in the industry. Contacts, deals, pipeline, email tracking, meeting scheduling — all free, forever.

For a seed-stage startup doing outbound sales, it gives you everything you need: see when someone opened your email, track follow-up sequences, manage your pipeline in one place.

We don't recommend upgrading to paid HubSpot until you have a dedicated sales hire. The free version is more than sufficient for founders doing their own sales.`,
    affiliateUrl: null,
    websiteUrl: 'https://hubspot.com',
  },
  {
    slug: 'framer',
    step: 9,
    name: 'Framer',
    category: 'Website Builder',
    categoryIcon: '💻',
    tagline: 'Design-quality websites, no code',
    whyShort: 'From idea to live landing page in an afternoon. Looks like a senior designer built it.',
    why: `Framer produces design-quality websites with no code. The output looks like it was built by a senior designer — because the tool enforces good design constraints.

For a startup landing page, Framer beats Webflow (steeper learning curve), Squarespace (too generic), and WordPress (too heavy). You can go from idea to live landing page in an afternoon.

It also has a CMS for content and publishes to a fast CDN. When you need a custom app, you migrate off Framer — but that's a good problem to have.`,
    affiliateUrl: null,
    websiteUrl: 'https://framer.com',
  },
  {
    slug: 'github',
    step: 10,
    name: 'GitHub',
    category: 'Code Repository',
    categoryIcon: '📦',
    tagline: 'Where your code lives',
    whyShort: 'Every dev has a GitHub profile. Every tool integrates here first. Network effects win.',
    why: `GitHub is where code lives. Not because it's the best Git host (Gitlab is arguably better for self-hosted CI), but because of the network.

Every developer you'll ever hire has a GitHub profile. Every open source tool you'll use is on GitHub. Every CI/CD system integrates with GitHub first. The ecosystem lock-in is a feature, not a bug.

For a technical startup, GitHub is infrastructure — not a decision to agonize over.`,
    affiliateUrl: null,
    websiteUrl: 'https://github.com',
  },
  {
    slug: 'brevo',
    step: 11,
    name: 'Brevo',
    category: 'Email Marketing',
    categoryIcon: '📬',
    tagline: 'Email marketing that doesn\'t charge by contact',
    whyShort: '300 emails/day free, unlimited contacts. Way cheaper than Mailchimp for early-stage.',
    why: `Brevo (formerly Sendinblue) has the best free tier for transactional and marketing email: 300 emails/day, unlimited contacts, no credit card required.

Mailchimp charges by contact count — which gets expensive fast. Brevo charges by sends. For an early startup with a small list sending occasional campaigns, Brevo is significantly cheaper.

Deliverability is solid. The automation builder is good enough. And the API for transactional emails is clean.`,
    affiliateUrl: null,
    websiteUrl: 'https://brevo.com',
  },
  {
    slug: 'plausible',
    step: 12,
    name: 'Plausible',
    category: 'Analytics',
    categoryIcon: '📈',
    tagline: 'Privacy-first analytics',
    whyShort: 'No cookies, no GDPR banner, < 1KB script. The data you need without the surveillance.',
    why: `Plausible is privacy-first analytics: no cookies, no GDPR banner needed, lightweight script (< 1KB). You get the data you need — pageviews, sources, top pages, conversions — without building surveillance infrastructure.

Google Analytics 4 is free but requires a cookie banner, processes data in the US, and has a terrible UX. Plausible's dashboard takes 30 seconds to understand.

At €9/month, it's the right tradeoff for a startup that takes user privacy seriously.`,
    affiliateUrl: null,
    websiteUrl: 'https://plausible.io',
  },
  {
    slug: 'stripe',
    step: 13,
    name: 'Stripe',
    category: 'Payments',
    categoryIcon: '💳',
    tagline: 'The payment standard for startups',
    whyShort: 'Best docs in the industry. Works in 40+ countries. Stop agonizing, just use Stripe.',
    why: `Stripe is the global standard for developer-friendly payments. The documentation is the best in the industry. The API handles one-time payments, subscriptions, invoicing, and payouts. It works in 40+ countries.

The 2.9% + 30¢ fee is slightly higher than alternatives, but the time saved on integration and the reliability of the infrastructure make it worth it for almost every startup.

Don't agonize over payment providers. Use Stripe and move on.`,
    affiliateUrl: null,
    websiteUrl: 'https://stripe.com',
  },
  {
    slug: 'lexoffice',
    step: 14,
    name: 'Lexoffice',
    category: 'Accounting (DE)',
    categoryIcon: '🧾',
    tagline: 'German accounting that doesn\'t suck',
    whyShort: 'DATEV integration, ELSTER VAT submissions, modern UX. Keeps your Steuerberater happy.',
    why: `For a German GmbH, accounting compliance is non-negotiable. Lexoffice integrates with DATEV (the standard used by German accountants), handles ELSTER submissions for VAT, and exports in formats your Steuerberater expects.

The UX is modern (unlike most German accounting software). It connects to your bank account for automatic transaction matching. And it handles the EU reverse-charge logic that trips up most international tools.

If you're operating a German GmbH, Lexoffice saves you hours every month and keeps your accountant happy.`,
    affiliateUrl: null,
    websiteUrl: 'https://lexoffice.de',
  },
  {
    slug: 'vercel',
    step: 15,
    name: 'Vercel',
    category: 'Deployment',
    categoryIcon: '🚀',
    tagline: 'Deploy in seconds, scale forever',
    whyShort: 'Git push → live. Preview URLs per PR. Free tier is genuinely generous. Best DX in the industry.',
    why: `Vercel is the best deployment platform for frontend applications. Git push, automatic deploy, preview URLs for every PR, edge CDN, serverless functions — all configured automatically.

The free tier is genuinely generous for early projects. The DX is the best in the industry. The performance (Edge Network) is exceptional.

Netlify is a close second, but Vercel's Next.js integration and overall polish make it the default choice for any startup building on React.`,
    affiliateUrl: null,
    websiteUrl: 'https://vercel.com',
  },
]

export function getToolBySlug(slug: string): ToolData | undefined {
  return TOOLS.find(t => t.slug === slug)
}
