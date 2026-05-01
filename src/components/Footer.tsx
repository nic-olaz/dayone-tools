import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Day One</span>
            <span className="text-gray-300">·</span>
            <span className="text-sm text-gray-400">dayone.tools</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/why" className="hover:text-gray-900 transition-colors">
              Why
            </Link>
            <Link to="/impressum" className="hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
            <a
              href="https://lmno.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              LMNO
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          Diese Website enthält Affiliate-Links. Wir erhalten eine Provision, wenn du über diese Links kaufst.
          Für dich entstehen keine Zusatzkosten. Wir empfehlen nur Tools, die wir selbst nutzen würden.
          &nbsp;&copy; {new Date().getFullYear()} Day One · Nicolas Meibohm
        </div>
      </div>
    </footer>
  )
}
