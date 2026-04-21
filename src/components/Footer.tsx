import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Day One</span>
            <span className="text-[#A1A1AA]">—</span>
            <span className="text-sm text-[#A1A1AA]">dayone.tools</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#A1A1AA]">
            <Link to="/why" className="hover:text-white transition-colors">
              Why
            </Link>
            <a
              href="https://qimp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              QIMP Incubator
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#A1A1AA]">
          Some links are affiliate links. We only recommend tools we'd actually use ourselves.
          &nbsp;&copy; {new Date().getFullYear()} Day One.
        </div>
      </div>
    </footer>
  )
}
