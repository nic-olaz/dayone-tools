import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackClick, type Tool } from '@/lib/supabase'
import { cn } from '@/lib/utils'

interface ToolCardProps {
  tool: Tool & { categories: { icon: string | null; name: string } }
}

export function ToolCard({ tool }: ToolCardProps) {
  const [clicking, setClicking] = useState(false)

  async function handleCTA() {
    if (!tool.affiliate_url) return
    setClicking(true)
    try {
      await trackClick(tool.id)
    } catch {
      // Fire and forget — don't block navigation on tracking errors
    }
    window.open(tool.affiliate_url, '_blank', 'noopener,noreferrer')
    setClicking(false)
  }

  return (
    <div
      className={cn(
        'group flex flex-col gap-4 rounded-xl border border-[#222222] bg-[#111111] p-6',
        'transition-all duration-200 hover:border-[#333333] hover:bg-[#161616]'
      )}
    >
      {/* Category badge + icon */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-3xl leading-none">{tool.categories?.icon ?? '🔧'}</span>
          <span className="mt-2 text-xs font-medium uppercase tracking-widest text-[#A1A1AA]">
            {tool.categories?.name}
          </span>
        </div>
        {tool.is_sponsored && (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
            Sponsored
          </span>
        )}
      </div>

      {/* Tool info */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
        <p className="text-sm leading-relaxed text-[#A1A1AA]">
          {tool.why_short ?? tool.tagline}
        </p>
      </div>

      {/* CTA */}
      <Button
        onClick={handleCTA}
        disabled={clicking || !tool.affiliate_url}
        className="w-full gap-2 bg-accent text-white hover:bg-accent/90"
      >
        Get {tool.name}
        <ExternalLink size={14} />
      </Button>
    </div>
  )
}
