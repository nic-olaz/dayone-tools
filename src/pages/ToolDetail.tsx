import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getToolBySlug } from '@/lib/tools-data'
import { BrandLogo } from '@/components/BrandLogo'
import { SEO } from '@/components/SEO'

export function ToolDetail() {
  const { slug } = useParams<{ slug: string }>()
  const tool = slug ? getToolBySlug(slug) : undefined

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

  const toolJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.why.split('\n\n')[0],
    applicationCategory: 'BusinessApplication',
    url: tool.websiteUrl,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier available' },
    review: {
      '@type': 'Review',
      reviewBody: tool.why,
      author: { '@type': 'Person', name: 'Nicolas Meibohm', url: 'https://lmno.de' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'Day One', url: 'https://dayone.tools' },
    },
  }

  function handleCTA() {
    window.open(tool!.affiliateUrl ?? tool!.websiteUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
    <SEO
      title={`${tool.name}: Best ${tool.category} for startups`}
      description={`Why ${tool.name} is the best ${tool.category.toLowerCase()} for early-stage startups. ${tool.tagline}`}
      canonical={`/tools/${tool.slug}`}
      jsonLd={toolJsonLd}
    />
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
            categoryIcon={tool.categoryIcon}
            size={80}
          />
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
              {tool.category}
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
            {tool.why.split('\n\n').map((para, i) => (
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

        {tool.affiliateUrl && (
          <p className="mt-3 text-center text-xs text-gray-400">
            * This is an affiliate link. We only recommend tools we'd actually use.
          </p>
        )}
      </div>
    </main>
    </>
  )
}
