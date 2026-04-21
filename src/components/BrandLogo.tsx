import {
  siGodaddy,
  siGoogle,
  siClaude,
  siNotion,
  siAsana,
  siHubspot,
  siFramer,
  siGithub,
  siBrevo,
  siPlausibleanalytics,
  siStripe,
  siVercel,
} from 'simple-icons'

// Map tool name slug → simple-icons icon + optional color override
const ICONS: Record<string, { path: string; hex: string; title: string }> = {
  qonto:              { path: '', hex: '', title: 'Qonto' },           // emoji fallback
  godaddy:            siGodaddy,
  'google-workspace': siGoogle,
  claude:             siClaude,
  slack:              { path: '', hex: '', title: 'Slack' },           // emoji fallback
  notion:             siNotion,
  asana:              siAsana,
  hubspot:            siHubspot,
  framer:             siFramer,
  github:             siGithub,
  brevo:              siBrevo,
  plausible:          siPlausibleanalytics,
  stripe:             siStripe,
  lexoffice:          { path: '', hex: '', title: 'Lexoffice' },       // emoji fallback
  vercel:             siVercel,
}

// Emoji fallbacks for tools without a simple-icons entry
const EMOJI_FALLBACKS: Record<string, string> = {
  qonto:    '🏦',
  slack:    '💬',
  lexoffice:'🧾',
}

interface BrandLogoProps {
  toolName: string          // e.g. "GitHub", "HubSpot"
  categoryIcon?: string | null
  size?: number             // px, default 40
  className?: string
}

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
}

export function BrandLogo({ toolName, categoryIcon, size = 40, className = '' }: BrandLogoProps) {
  const slug = toSlug(toolName)
  const icon = ICONS[slug]

  const dim = size
  const padding = Math.round(size * 0.15)
  const inner = dim - padding * 2

  // Has a simple-icons SVG path
  if (icon && icon.path) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm ${className}`}
        style={{ width: dim, height: dim, padding }}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          width={inner}
          height={inner}
          fill={`#${icon.hex}`}
          aria-label={icon.title}
        >
          <path d={icon.path} />
        </svg>
      </div>
    )
  }

  // Emoji / category fallback
  const emoji = EMOJI_FALLBACKS[slug] ?? categoryIcon ?? '🔧'
  const emojiSize = Math.round(dim * 0.5)

  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 ${className}`}
      style={{ width: dim, height: dim, fontSize: emojiSize }}
    >
      {emoji}
    </div>
  )
}
