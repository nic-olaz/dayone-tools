import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Tool } from '@/lib/tools-data'
import { cn } from '@/lib/utils'
import { BrandLogo } from '@/components/BrandLogo'

interface ToolCardProps {
  tool: Tool
  stepNumber: number
}

export function ToolCard({ tool, stepNumber }: ToolCardProps) {
  function handleCTA(e: React.MouseEvent) {
    e.preventDefault()
    window.open(tool.website_url ?? '#', '_blank', 'noopener,noreferrer')
  }

  return (
    <Link
      to={`/tools/${tool.slug}`}
      className={cn(
        'group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6',
        'shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300'
      )}
    >
      {/* Step + Logo + Category */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo toolName={tool.name} size={40} />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Step {stepNumber}
            </span>
            <p className="text-xs font-medium text-gray-500">{tool.categories?.name}</p>
          </div>
        </div>
      </div>

      {/* Tool info */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {tool.tagline}
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
