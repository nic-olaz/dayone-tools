import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/SEO'

export function Impressum() {
  return (
    <>
      <SEO
        title="Impressum"
        description="Impressum und Anbieterkennzeichnung nach §5 TMG"
        canonical="/impressum"
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-12 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to the stack
          </Link>

          <h1 className="mb-8 text-4xl font-bold text-gray-900">Impressum</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Angaben gemäß § 5 TMG</h2>
              <p>
                Nicolas Meibohm<br />
                LMNO<br />
                Alte Straße 36<br />
                38259 Salzgitter
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:nicolas.meibohm@gmail.com" className="text-gray-900 underline">nicolas.meibohm@gmail.com</a><br />
                Website: <a href="https://lmno.de" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">lmno.de</a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789 {/* TODO: Echte USt-ID eintragen */}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Nicolas Meibohm<br />
                Alte Straße 36<br />
                38259 Salzgitter
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Haftung für Inhalte</h2>
              <p className="mb-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Haftung für Links</h2>
              <p className="mb-3">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Urheberrecht</h2>
              <p className="mb-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Affiliate-Links & Kennzeichnung</h2>
              <p className="mb-3">
                Diese Website enthält sogenannte Affiliate-Links. Wenn Sie auf einen Affiliate-Link
                klicken und über diesen Link ein Produkt oder eine Dienstleistung erwerben, erhalten
                wir vom Anbieter eine Provision. Für Sie entstehen dadurch keine zusätzlichen Kosten.
              </p>
              <p>
                Wir empfehlen ausschließlich Tools und Services, von denen wir überzeugt sind und die
                wir selbst nutzen oder nutzen würden. Unsere redaktionelle Unabhängigkeit bleibt davon
                unberührt.
              </p>
            </section>

            <section className="text-xs text-gray-500">
              <p>
                Quelle: Erstellt mit Hilfe des{' '}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Impressum-Generators von eRecht24
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
