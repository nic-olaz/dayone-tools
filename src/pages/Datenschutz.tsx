import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/SEO'

export function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung"
        description="Datenschutzerklärung gemäß DSGVO für dayone.tools"
        canonical="/datenschutz"
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-12 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to the stack
          </Link>

          <h1 className="mb-8 text-4xl font-bold text-gray-900">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Datenschutz auf einen Blick</h2>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Allgemeine Hinweise</h3>
              <p className="mb-3">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Datenerfassung auf dieser Website</h3>
              <p className="mb-3">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="mb-3">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="mb-3">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="mb-3">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="mb-3">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Hosting und Content Delivery Networks (CDN)</h2>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Vercel</h3>
              <p className="mb-3">
                Diese Website wird auf Servern von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.
                Vercel erfasst in sogenannten Logfiles automatisch Informationen, die Ihr Browser übermittelt.
                Dies sind:
              </p>
              <ul className="mb-3 list-disc list-inside space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="mb-3">
                Die Speicherung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
                und der Optimierung seiner Website.
              </p>
              <p className="mb-3">
                Wir haben einen Auftragsverarbeitungsvertrag (AVV) mit Vercel geschlossen. Mehr
                Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                Vercel:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Datenschutz</h3>
              <p className="mb-3">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-3">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-3">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mb-3">
                Nicolas Meibohm<br />
                LMNO<br />
                Alte Straße 36<br />
                38259 Salzgitter<br />
                E-Mail: nicolas.meibohm@gmail.com
              </p>
              <p className="mb-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Speicherdauer</h3>
              <p className="mb-3">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
                keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                Daten haben.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="mb-3">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Auskunft, Löschung und Berichtigung</h3>
              <p className="mb-3">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                oder Löschung dieser Daten.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Datenerfassung auf dieser Website</h2>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Server-Log-Dateien</h3>
              <p className="mb-3">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mb-3 list-disc list-inside space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="mb-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Affiliate-Links</h3>
              <p className="mb-3">
                Diese Website enthält Affiliate-Links zu externen Anbietern. Wenn Sie auf einen
                Affiliate-Link klicken, wird eine Kennung an den jeweiligen Anbieter übermittelt, um die
                Herkunft des Klicks nachzuverfolgen. Dies dient ausschließlich der Abrechnung von
                Provisionen und enthält keine personenbezogenen Daten.
              </p>
              <p className="mb-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                wirtschaftlichen Verwertung unserer redaktionellen Arbeit).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Plugins und Tools</h2>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Google Fonts (lokales Hosting)</h3>
              <p className="mb-3">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
                Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine
                Verbindung zu Servern von Google findet dabei nicht statt.
              </p>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-gray-900">Externe Links</h3>
              <p className="mb-3">
                Diese Website enthält Links zu externen Webseiten Dritter. Auf die Inhalte dieser direkt
                oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Für die Richtigkeit der
                Inhalte ist immer der jeweilige Anbieter oder Betreiber verantwortlich, weshalb wir
                diesbezüglich keinerlei Gewähr übernehmen.
              </p>
            </section>

            <section className="text-xs text-gray-500">
              <p>Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-2">
                Quelle: Erstellt mit Hilfe des{' '}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Datenschutz-Generators von eRecht24
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
