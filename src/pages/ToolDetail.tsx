import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { supabase, trackClick, type Tool, type Category } from '@/lib/supabase'
import { BrandLogo } from '@/components/BrandLogo'

type ToolWithCategory = Tool & { categories: Category }

// Fallback why-texts per tool name (used when tool.why is null in DB)
const WHY_TEXTS: Record<string, string> = {
  'qonto': `Qonto was built specifically for startups and SMEs — not retrofitted from a legacy bank product. Setup takes under 10 minutes. No branch visits, no paperwork, no waiting for a relationship manager to call back.\n\nThe pricing is transparent. The IBAN works everywhere in the EU. The app is genuinely good. And critically: it integrates with every accounting tool you'll use later.\n\nWe've seen founders stuck with Deutsche Bank accounts that took 6 weeks to open. Qonto takes a Sunday afternoon. That time difference matters when you're trying to move fast.`,
  'godaddy': `GoDaddy has the largest domain inventory, consistent uptime, and a DNS management interface that doesn't require a manual to use. For a founder registering their first domain, simplicity wins.\n\nThe upsells are aggressive — ignore them all. You just need the domain. Their transfer process is also standard, so you're never locked in.\n\nAlternatives like Namecheap or Cloudflare Registrar are fine too, but GoDaddy's one-stop shop means one fewer account to manage in the chaotic early days.`,
  'google-workspace': `Your business email is the first thing investors, customers, and partners see. A Gmail address signals that you haven't started yet. A Google Workspace address on your domain signals you're real.\n\nBeyond email: you get Drive (file storage), Meet (video calls), Docs/Sheets (collaboration) — all integrated, all shareable. Your whole early team will already know how to use it.\n\nAt $6/user/month, it's the cheapest credibility upgrade available to a new startup.`,
  'claude': `Claude is the best general-purpose AI for founders right now. It writes better than GPT-4, reasons more carefully on complex problems, and doesn't hallucinate as aggressively on business-critical tasks.\n\nFor a founder, Claude handles: pitch deck copy, investor emails, market research synthesis, contract review (first pass), job descriptions, customer interview analysis, and a hundred other tasks that used to require expensive consultants.\n\nWe picked Claude over ChatGPT because the quality delta on writing tasks — which is what most founders actually need — is consistently in Claude's favor.`,
  'slack': `Slack is the default. Every tool you'll adopt has a Slack integration. Every contractor, advisor, and investor you'll work with already has a Slack account.\n\nThe free tier is functional for early teams. The archive limit is annoying but manageable. And when you grow, upgrading is painless.\n\nDiscord is better for communities. Teams is better for enterprises on Microsoft. For an early startup that talks to the outside world, Slack wins on network effects alone.`,
  'notion': `Notion replaces a wiki, a lightweight database, a document editor, and a simple project tracker — all in one workspace. For a team of 1–5, that consolidation is a massive time saver.\n\nThe real value: your product spec, your investor FAQ, your onboarding docs, your competitor research — all in one place, all linkable, all searchable.\n\nWe considered Confluence (too heavy), Coda (too complex), and Obsidian (no real-time collab). Notion hits the sweet spot for early-stage teams.`,
  'asana': `Asana's free tier is genuinely powerful. Tasks, subtasks, assignees, due dates, basic reporting — everything a seed-stage team needs. No per-seat cost until you scale.\n\nWe prefer it over Linear for non-technical tasks (Linear is excellent for engineering but overkill for sales, marketing, and ops workflows). Asana handles cross-functional work better.\n\nJira is too heavy. Trello is too simple. Asana is the right size for a 2–10 person team that needs to ship fast.`,
  'hubspot': `HubSpot's free CRM is the most generous free tier in the industry. Contacts, deals, pipeline, email tracking, meeting scheduling — all free, forever.\n\nFor a seed-stage startup doing outbound sales, it gives you everything you need: see when someone opened your email, track follow-up sequences, manage your pipeline in one place.\n\nWe don't recommend upgrading to paid HubSpot until you have a dedicated sales hire. The free version is more than sufficient for founders doing their own sales.`,
  'framer': `Framer produces design-quality websites with no code. The output looks like it was built by a senior designer — because the tool enforces good design constraints.\n\nFor a startup landing page, Framer beats Webflow (steeper learning curve), Squarespace (too generic), and WordPress (too heavy). You can go from idea to live landing page in an afternoon.\n\nIt also has a CMS for content and publishes to a fast CDN. When you need a custom app, you migrate off Framer — but that's a good problem to have.`,
  'github': `GitHub is where code lives. Not because it's the best Git host (Gitlab is arguably better for self-hosted CI), but because of the network.\n\nEvery developer you'll ever hire has a GitHub profile. Every open source tool you'll use is on GitHub. Every CI/CD system integrates with GitHub first. The ecosystem lock-in is a feature, not a bug.\n\nFor a technical startup, GitHub is infrastructure — not a decision to agonize over.`,
  'brevo': `Brevo (formerly Sendinblue) has the best free tier for transactional and marketing email: 300 emails/day, unlimited contacts, no credit card required.\n\nMailchimp charges by contact count — which gets expensive fast. Brevo charges by sends. For an early startup with a small list sending occasional campaigns, Brevo is significantly cheaper.\n\nDeliverability is solid. The automation builder is good enough. And the API for transactional emails is clean.`,
  'plausible': `Plausible is privacy-first analytics: no cookies, no GDPR banner needed, lightweight script (< 1KB). You get the data you need — pageviews, sources, top pages, conversions — without building surveillance infrastructure.\n\nGoogle Analytics 4 is free but requires a cookie banner, processes data in the US, and has a terrible UX. Plausible's dashboard takes 30 seconds to understand.\n\nAt €9/month, it's the right tradeoff for a startup that takes user privacy seriously.`,
  'stripe': `Stripe is the global standard for developer-friendly payments. The documentation is the best in the industry. The API handles one-time payments, subscriptions, invoicing, and payouts. It works in 40+ countries.\n\nThe 2.9% + 30¢ fee is slightly higher than alternatives, but the time saved on integration and the reliability of the infrastructure make it worth it for almost every startup.\n\nDon't agonize over payment providers. Use Stripe and move on.`,
  'lexoffice': `For a German GmbH, accounting compliance is non-negotiable. Lexoffice integrates with DATEV (the standard used by German accountants), handles ELSTER submissions for VAT, and exports in formats your Steuerberater expects.\n\nThe UX is modern (unlike most German accounting software). It connects to your bank account for automatic transaction matching. And it handles the EU reverse-charge logic that trips up most international tools.\n\nIf you're operating a German GmbH, Lexoffice saves you hours every month and keeps your accountant happy.`,
  'vercel': `Vercel is the best deployment platform for frontend applications. Git push, automatic deploy, preview URLs for every PR, edge CDN, serverless functions — all configured automatically.\n\nThe free tier is genuinely generous for early projects. The DX is the best in the industry. The performance (Edge Network) is exceptional.\n\nNetlify is a close second, but Vercel's Next.js integration and overall polish make it the default choice for any startup building on React.`,
}

function getWhyText(toolName: string, whyFromDb: string | null): string {
  if (whyFromDb) return whyFromDb
  const key = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return WHY_TEXTS[key] ?? `${toolName} is our pick for this category. It does the job reliably, integrates with the rest of your stack, and doesn't get in your way.`
}

export function ToolDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [tool, setTool] = useState<ToolWithCategory | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTool() {
      const { data } = await supabase
        .from('tools')
        .select('*, categories(*)')
        .eq('is_active', true)

      // Match by slug derived from name
      const match = (data as ToolWithCategory[] ?? []).find(
        t => t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
      )
      setTool(match ?? null)
      setLoading(false)
    }
    fetchTool()
  }, [slug])

  if (loading) {
    return (
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-24">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-100 mb-4" />
          <div className="h-12 w-80 animate-pulse rounded bg-gray-100" />
        </div>
      </main>
    )
  }

  if (!tool) {
    return (
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <p className="text-gray-500">Tool not found.</p>
          <Link to="/" className="mt-4 inline-block text-sm text-gray-900 underline">
            Back to the stack
          </Link>
        </div>
      </main>
    )
  }

  const whyText = getWhyText(tool.name, tool.why)

  async function handleCTA() {
    try { await trackClick(tool!.id) } catch { /* ignore */ }
    window.open(tool!.affiliate_url ?? tool!.website_url ?? '#', '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/"
          className="mb-12 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={14} /> Back to the stack
        </Link>

        {/* Header */}
        <div className="mb-10 flex items-start gap-6">
          <BrandLogo
            toolName={tool.name}
            categoryIcon={tool.categories?.icon}
            size={80}
          />
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              {tool.categories?.name}
            </span>
            <h1 className="mt-1 text-4xl font-bold text-gray-900">{tool.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{tool.tagline}</p>
          </div>
        </div>

        {/* Why section */}
        <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Why this is the one
          </h2>
          <div className="mt-4 space-y-4">
            {whyText.split('\n\n').map((para, i) => (
              <p key={i} className="leading-relaxed text-gray-700">{para}</p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleCTA}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Get {tool.name} <ExternalLink size={16} />
        </button>

        {tool.is_sponsored && (
          <p className="mt-3 text-center text-xs text-gray-400">Sponsored placement</p>
        )}
        <p className="mt-3 text-center text-xs text-gray-400">
          * This may be an affiliate link. We only recommend tools we'd actually use.
        </p>
      </div>
    </main>
  )
}
