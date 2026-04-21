import { SEO } from '@/components/SEO'

export function Why() {
  return (
    <>
    <SEO
      title="Why opinionated recommendations?"
      description="Comparison paralysis kills startups. We pick one tool per category and stand behind it. Here's why that's better than a list of five options."
      canonical="/why"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Why opinionated tool recommendations for startups?',
        description: 'Comparison paralysis kills startups. One pick per category beats a list of five options every time.',
        author: { '@type': 'Person', name: 'Nicolas Meibohm', url: 'https://lmno.de' },
        publisher: { '@type': 'Organization', name: 'Day One', url: 'https://dayone.tools' },
        url: 'https://dayone.tools/why',
      }}
    />
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Our philosophy
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Day One?
          </h1>
        </div>

        <div className="space-y-16 text-gray-600">

          {/* The problem */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">The problem</h2>
            <p className="leading-relaxed">
              Comparison paralysis kills startups. The average founder spends 40+ hours
              picking tools before writing a single line of code, reading reviews,
              watching comparison videos, joining Reddit threads, asking in Slack groups.
              All of that energy goes into a decision that, frankly, doesn't matter that much.
            </p>
            <p className="mt-4 leading-relaxed">
              The right tool is the one you actually use. And you need to start using it today.
            </p>
          </section>

          {/* Our approach */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Our approach</h2>
            <p className="leading-relaxed">
              We've built startups. We've used all of these. These are the survivors: the
              tools that were still open in our browser six months after we first signed up.
              The ones we still recommend when a founder asks at 11pm.
            </p>
            <p className="mt-4 leading-relaxed">
              We don't list alternatives. We don't score features. We make a call and
              we stand behind it.
            </p>
          </section>

          {/* The rule */}
          <section className="rounded-xl border border-accent/20 bg-accent/5 p-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">The rule</h2>
            <p className="leading-relaxed">
              One pick per category. Always. If something better comes along,
              we switch, and we tell you why. No silent updates. No hedging.
            </p>
            <p className="mt-4 leading-relaxed">
              We'd rather be decisively wrong and correct ourselves than give you
              a list of five "great options" and send you back into the fog.
            </p>
          </section>

          {/* Transparency */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Transparency</h2>
            <p className="leading-relaxed">
              Some links are affiliate links. That means we earn a small commission
              if you sign up through Day One. This helps us maintain the site.
            </p>
            <p className="mt-4 leading-relaxed">
              That said: we only recommend tools we'd actually use ourselves. The
              affiliate relationship follows the recommendation. It never drives it.
              If a tool stops being the best pick, we replace it regardless of
              the commercial relationship.
            </p>
          </section>

          {/* Who built this */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Who built this</h2>
            <p className="leading-relaxed">
              Built by{' '}
              <a
                href="https://lmno.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline underline-offset-4 hover:text-accent transition-colors"
              >
                Nicolas Meibohm
              </a>
              , startup coach and founder advisor. I've helped dozens of early-stage startups get off the ground, from their first pitch deck to their first funding round.
            </p>
            <p className="mt-4 leading-relaxed">
              This is the stack I hand to every founder on Day 1. I got tired of repeating myself. Now it's a website.
            </p>
          </section>

        </div>
      </div>
    </main>
    </>
  )
}
