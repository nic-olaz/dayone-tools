import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://dayone.tools'
const SITE_NAME = 'Day One'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  jsonLd?: object | object[]
}

export function SEO({ title, description, canonical, ogImage, jsonLd }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — The startup toolkit. One pick per category.`
  const metaDesc = description ?? 'The opinionated startup tool directory. One pick per category. No comparisons. No noise. Built by startup coach Nico Meibohm.'
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const image = ogImage ?? DEFAULT_OG_IMAGE

  const schemaArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schemaArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
