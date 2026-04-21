import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { supabase, type Tool, type Category } from '@/lib/supabase'
import { ToolCard } from '@/components/ToolCard'
import { SEO } from '@/components/SEO'

type ToolWithCategory = Tool & { categories: Category }

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Day One',
    url: 'https://dayone.tools',
    description: 'The opinionated startup tool directory. One pick per category. No comparisons. No noise.',
    author: {
      '@type': 'Person',
      name: 'Nico Meibohm',
      url: 'https://lmno.de',
      jobTitle: 'Startup Coach & Founder Advisor',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Tools for Startups',
    description: 'One recommended tool per category for early-stage startups.',
    numberOfItems: 15,
    itemListElement: [
      { '@type': 'ListItem', position: 1,  name: 'Qonto',           description: 'Best business account for startups',      url: 'https://dayone.tools/tools/qonto' },
      { '@type': 'ListItem', position: 2,  name: 'GoDaddy',         description: 'Best domain registrar for startups',       url: 'https://dayone.tools/tools/godaddy' },
      { '@type': 'ListItem', position: 3,  name: 'Google Workspace', description: 'Best business email for startups',        url: 'https://dayone.tools/tools/google-workspace' },
      { '@type': 'ListItem', position: 4,  name: 'Claude',           description: 'Best AI / LLM for startups',              url: 'https://dayone.tools/tools/claude' },
      { '@type': 'ListItem', position: 5,  name: 'Slack',            description: 'Best team chat for startups',             url: 'https://dayone.tools/tools/slack' },
      { '@type': 'ListItem', position: 6,  name: 'Notion',           description: 'Best docs and notes tool for startups',   url: 'https://dayone.tools/tools/notion' },
      { '@type': 'ListItem', position: 7,  name: 'Asana',            description: 'Best task management for startups',       url: 'https://dayone.tools/tools/asana' },
      { '@type': 'ListItem', position: 8,  name: 'HubSpot',          description: 'Best CRM for startups',                   url: 'https://dayone.tools/tools/hubspot' },
      { '@type': 'ListItem', position: 9,  name: 'Framer',           description: 'Best website builder for startups',       url: 'https://dayone.tools/tools/framer' },
      { '@type': 'ListItem', position: 10, name: 'GitHub',           description: 'Best code repository for startups',       url: 'https://dayone.tools/tools/github' },
      { '@type': 'ListItem', position: 11, name: 'Brevo',            description: 'Best email marketing for startups',       url: 'https://dayone.tools/tools/brevo' },
      { '@type': 'ListItem', position: 12, name: 'Plausible',        description: 'Best analytics for startups',             url: 'https://dayone.tools/tools/plausible' },
      { '@type': 'ListItem', position: 13, name: 'Stripe',           description: 'Best payment solution for startups',      url: 'https://dayone.tools/tools/stripe' },
      { '@type': 'ListItem', position: 14, name: 'Lexoffice',        description: 'Best accounting software for startups',   url: 'https://dayone.tools/tools/lexoffice' },
      { '@type': 'ListItem', position: 15, name: 'Vercel',           description: 'Best deployment platform for startups',   url: 'https://dayone.tools/tools/vercel' },
    ],
  },
]

export function Home() {
  const [tools, setTools] = useState<ToolWithCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchTools() {
      const { data, error } = await supabase
        .from('tools')
        .select('*, categories(*)')
        .eq('is_active', true)
        .order('order_index', { referencedTable: 'categories', ascending: true })

      if (error) {
        setError('Could not load tools. Please try again.')
        console.error(error)
      } else {
        setTools((data as ToolWithCategory[]) ?? [])
      }
      setLoading(false)
    }

    fetchTools()
  }, [])

  function scrollToGrid() {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
    <SEO
      canonical="/"
      jsonLd={homeJsonLd}
    />
    <main className="flex-1">
      {/* Hero */}
      <section className="flex min-h-[calc(100svh-56px)] flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-600">
            15 categories &nbsp;·&nbsp; 1 pick each &nbsp;·&nbsp; updated regularly
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Every tool your
            <br />
            startup needs.
          </h1>

          <p className="mb-12 text-lg text-gray-500 sm:text-xl">
            One pick per category. No comparisons. No noise.
          </p>

          <button
            onClick={scrollToGrid}
            className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-gray-900 mx-auto"
            aria-label="Scroll to tools"
          >
            <span className="text-sm">See the stack</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* Tool Grid */}
      <section ref={gridRef} className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">The Stack</h2>
          <p className="mt-2 text-gray-500">
            The exact tools we hand to every founder on Day 1.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="h-52 animate-pulse rounded-xl border border-gray-200 bg-gray-100"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}

        {/* Affiliate disclaimer */}
        {!loading && !error && tools.length > 0 && (
          <p className="mt-12 text-center text-xs text-gray-400">
            Some links are affiliate links. We only recommend tools we'd actually use ourselves.
          </p>
        )}
      </section>

      {/* About section */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
            <img
              src="/nico.jpg"
              alt="Nico Meibohm"
              className="h-28 w-28 flex-shrink-0 rounded-2xl object-cover shadow-sm"
            />
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Built by
              </p>
              <h2 className="mb-3 text-2xl font-bold text-gray-900">Nico Meibohm</h2>
              <p className="leading-relaxed text-gray-600">
                I'm a startup coach and founder advisor. Over the years I've helped dozens of
                early-stage teams get off the ground — from their first pitch to their first
                funding round. Every time someone asked "what tools should I use?", I gave them
                the same list. So I turned it into a website.
              </p>
              <p className="mt-3 leading-relaxed text-gray-600">
                No sponsors drive these picks. No rankings were paid for.
                These are the tools I actually open in my browser.
              </p>
              <a
                href="/why"
                className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                Why opinionated recommendations? →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
