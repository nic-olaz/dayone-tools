import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 no-underline">
            {/* Day One logomark: a clean "1" in a circle */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
              1
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Day One</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                'text-sm transition-colors',
                location.pathname === '/'
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-900'
              )}
            >
              Stack
            </Link>
            <Link
              to="/why"
              className={cn(
                'text-sm transition-colors',
                location.pathname === '/why'
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-900'
              )}
            >
              Why
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
