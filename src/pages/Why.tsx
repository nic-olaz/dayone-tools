export function Why() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Our philosophy
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Why Day One?
          </h1>
        </div>

        <div className="space-y-16 text-[#A1A1AA]">

          {/* The problem */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">The problem</h2>
            <p className="leading-relaxed">
              Comparison paralysis kills startups. The average founder spends 40+ hours
              picking tools before writing a single line of code — reading reviews,
              watching comparison videos, joining Reddit threads, asking in Slack groups.
              All of that energy goes into a decision that, frankly, doesn't matter that much.
            </p>
            <p className="mt-4 leading-relaxed">
              The right tool is the one you actually use. And you need to start using it today.
            </p>
          </section>

          {/* Our approach */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Our approach</h2>
            <p className="leading-relaxed">
              We've built startups. We've used all of these. These are the survivors — the
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
            <h2 className="mb-4 text-xl font-semibold text-white">The rule</h2>
            <p className="leading-relaxed">
              One pick per category. Always. If something better comes along,
              we switch — and we tell you why. No silent updates. No hedging.
            </p>
            <p className="mt-4 leading-relaxed">
              We'd rather be decisively wrong and correct ourselves than give you
              a list of five "great options" and send you back into the fog.
            </p>
          </section>

          {/* Transparency */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Transparency</h2>
            <p className="leading-relaxed">
              Some links are affiliate links. That means we earn a small commission
              if you sign up through Day One. This helps us maintain the site.
            </p>
            <p className="mt-4 leading-relaxed">
              That said: we only recommend tools we'd actually use ourselves. The
              affiliate relationship follows the recommendation — it never drives it.
              If a tool stops being the best pick, we replace it regardless of
              the commercial relationship.
            </p>
          </section>

          {/* Who built this */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Who built this</h2>
            <p className="leading-relaxed">
              Built by{' '}
              <a
                href="https://linkedin.com/in/nicomeibohm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-accent transition-colors"
              >
                Nico Meibohm
              </a>
              , startup coach at{' '}
              <a
                href="https://qimp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-accent transition-colors"
              >
                QIMP Incubator
              </a>{' '}
              in Braunschweig. I work with DeepTech founders every day — helping them
              get from idea to investor-ready.
            </p>
            <p className="mt-4 leading-relaxed">
              This is the stack I hand to every founder on Day 1. I got tired of
              repeating myself. Now it's a website.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
