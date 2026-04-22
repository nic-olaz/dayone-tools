import { useState } from 'react'
import { Mail, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

function GoogleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.29.07 2.18.74 2.94.8.93-.17 1.82-.87 2.94-.93 1.33-.09 2.63.54 3.41 1.54-3.44 2.07-2.81 6.64.71 7.87-.74 1.47-1.72 2.91-2 3.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  )
}

interface AuthPanelProps {
  onSuccess?: () => void
}

export function AuthPanel({ onSuccess }: AuthPanelProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState<'google' | 'apple' | 'email' | null>(null)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const redirectTo = window.location.href

  async function handleGoogle() {
    setLoading('google')
    setError(null)
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    })
  }

  async function handleApple() {
    setLoading('apple')
    setError(null)
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo },
    })
  }

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading('email')
    setError(null)
    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: redirectTo },
    })
    setLoading(null)
    if (err) { setError('Could not send login link. Please try again.'); return }
    setEmailSent(true)
    onSuccess?.()
  }

  if (emailSent) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
        Check your inbox. We sent you a login link.
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <p className="mb-1 text-sm font-semibold text-gray-900">Sign in to leave a comment</p>
      <p className="mb-5 text-xs text-gray-400">Using this tool? Share your experience.</p>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleGoogle}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
        >
          {loading === 'google' ? <Loader2 size={16} className="animate-spin" /> : <GoogleIcon />}
          Continue with Google
        </button>

        <button
          onClick={handleApple}
          disabled={loading !== null}
          className="flex items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50"
        >
          {loading === 'apple' ? <Loader2 size={16} className="animate-spin" /> : <AppleIcon />}
          Continue with Apple
        </button>

        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form onSubmit={handleEmail} className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading !== null || !email.trim()}
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 disabled:opacity-50"
          >
            {loading === 'email' ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
            Send link
          </button>
        </form>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  )
}
