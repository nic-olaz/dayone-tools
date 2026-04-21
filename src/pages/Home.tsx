import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { supabase, type Tool, type Category } from '@/lib/supabase'
import { ToolCard } from '@/components/ToolCard'

type ToolWithCategory = Tool & { categories: Category }

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
    <main className="flex-1">
      {/* Hero */}
      <section className="flex min-h-[calc(100svh-56px)] flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#222222] bg-[#111111] px-4 py-1.5 text-sm text-[#A1A1AA]">
            15 categories &nbsp;·&nbsp; 1 pick each &nbsp;·&nbsp; updated regularly
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Every tool your
            <br />
            startup needs.
          </h1>

          <p className="mb-12 text-lg text-[#A1A1AA] sm:text-xl">
            One pick per category. No comparisons. No noise.
          </p>

          <button
            onClick={scrollToGrid}
            className="flex flex-col items-center gap-2 text-[#A1A1AA] transition-colors hover:text-white mx-auto"
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
          <h2 className="text-3xl font-bold text-white">The Stack</h2>
          <p className="mt-2 text-[#A1A1AA]">
            The exact tools we hand to every founder on Day 1.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="h-52 animate-pulse rounded-xl border border-[#222222] bg-[#111111]"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-900/50 bg-red-950/20 p-8 text-center text-red-400">
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
          <p className="mt-12 text-center text-xs text-[#A1A1AA]">
            Some links are affiliate links. We only recommend tools we'd actually use ourselves.
          </p>
        )}
      </section>
    </main>
  )
}
