import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Day One
            </span>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              tools
            </span>
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
