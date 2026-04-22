import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { trackClick, type Tool } from '@/lib/supabase'
import { cn } from '@/lib/utils'
import { BrandLogo } from '@/components/BrandLogo'

interface ToolCardProps {
  tool: Tool & { categories: { icon: string | null; name: string; slug: string } }
  stepNumber: number
}

export function ToolCard({ tool, stepNumber }: ToolCardProps) {
  const toolSlug = tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  async function handleCTA(e: React.MouseEvent) {
    e.preventDefault()
    if (!tool.affiliate_url && !tool.website_url) return
    try { await trackClick(tool.id) } catch { /* ignore */ }
    window.open(tool.affiliate_url ?? tool.website_url ?? '#', '_blank', 'noopener,noreferrer')
  }

  return (
    <Link
      to={`/tools/${toolSlug}`}
      className={cn(
        'group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6',
        'shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300'
      )}
    >
      {/* Step + Logo + Category */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo toolName={tool.name} categoryIcon={tool.categories?.icon} size={40} />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Step {stepNumber}
            </span>
            <p className="text-xs font-medium text-gray-500">{tool.categories?.name}</p>
          </div>
        </div>
        {tool.is_sponsored && (
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600">Sponsored</span>
        )}
      </div>

      {/* Tool info */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {tool.why_short ?? tool.tagline}
        </p>
      </div>

      {/* CTA row */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleCTA}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          Get {tool.name}
        </button>
        <span className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
          Why this? <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  )
}
