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
          Some links are affiliate links. We only recommend tools we'd actually use ourselves.
          &nbsp;&copy; {new Date().getFullYear()} Day One.
        </div>
      </div>
    </footer>
  )
}
