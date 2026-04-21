import { useEffect, useState } from 'react'
import { supabase, type Tool, type Category } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ADMIN_PASSWORD = 'dayone2026'

type ToolWithCategory = Tool & { categories: Category }

interface EditState {
  tagline: string
  why_short: string
  affiliate_url: string
  is_active: boolean
}

export function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)

  const [tools, setTools] = useState<ToolWithCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editState, setEditState] = useState<EditState | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState<string | null>(null)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthed(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  useEffect(() => {
    if (!authed) return

    async function fetchTools() {
      setLoading(true)
      const { data, error } = await supabase
        .from('tools')
        .select('*, categories(*)')
        .order('order_index', { referencedTable: 'categories', ascending: true })

      if (!error) {
        setTools((data as ToolWithCategory[]) ?? [])
      }
      setLoading(false)
    }

    fetchTools()
  }, [authed])

  function startEdit(tool: ToolWithCategory) {
    setEditingId(tool.id)
    setEditState({
      tagline: tool.tagline,
      why_short: tool.why_short ?? '',
      affiliate_url: tool.affiliate_url ?? '',
      is_active: tool.is_active,
    })
    setSaveMsg(null)
  }

  function cancelEdit() {
    setEditingId(null)
    setEditState(null)
  }

  async function saveEdit(toolId: string) {
    if (!editState) return
    setSaving(true)
    setSaveMsg(null)

    const { error } = await supabase
      .from('tools')
      .update({
        tagline: editState.tagline,
        why_short: editState.why_short || null,
        affiliate_url: editState.affiliate_url || null,
        is_active: editState.is_active,
        updated_at: new Date().toISOString(),
      })
      .eq('id', toolId)

    if (error) {
      setSaveMsg('Error saving. Please try again.')
    } else {
      setTools((prev) =>
        prev.map((t) =>
          t.id === toolId
            ? {
                ...t,
                tagline: editState.tagline,
                why_short: editState.why_short || null,
                affiliate_url: editState.affiliate_url || null,
                is_active: editState.is_active,
              }
            : t
        )
      )
      setSaveMsg('Saved.')
      setEditingId(null)
      setEditState(null)
    }

    setSaving(false)
  }

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-2xl font-bold text-white">Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm text-[#A1A1AA]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  'w-full rounded-md border bg-[#111111] px-3 py-2 text-sm text-white outline-none',
                  'focus:ring-1 focus:ring-accent',
                  authError ? 'border-red-500' : 'border-[#222222]'
                )}
                autoFocus
              />
              {authError && (
                <p className="mt-1.5 text-xs text-red-400">Incorrect password.</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </div>
      </main>
    )
  }

  // ── Admin table ───────────────────────────────────────────────────────────
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Tool Admin</h1>
        {saveMsg && (
          <span className="text-sm text-[#A1A1AA]">{saveMsg}</span>
        )}
      </div>

      {loading && (
        <p className="text-[#A1A1AA]">Loading tools...</p>
      )}

      {!loading && (
        <div className="space-y-2">
          {tools.map((tool) => {
            const isEditing = editingId === tool.id

            return (
              <div
                key={tool.id}
                className="rounded-xl border border-[#222222] bg-[#111111] p-5"
              >
                {!isEditing ? (
                  /* Row view */
                  <div className="flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{tool.name}</span>
                        <span className="text-xs text-[#A1A1AA]">
                          {tool.categories?.name}
                        </span>
                        {!tool.is_active && (
                          <span className="rounded-full bg-red-900/30 px-2 py-0.5 text-xs text-red-400">
                            Inactive
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-sm text-[#A1A1AA]">
                        {tool.affiliate_url ?? '(none)'}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startEdit(tool)}
                    >
                      Edit
                    </Button>
                  </div>
                ) : (
                  /* Inline edit form */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">{tool.name}</span>
                      <span className="text-xs text-[#A1A1AA]">{tool.categories?.name}</span>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-[#A1A1AA]">Tagline</label>
                      <input
                        type="text"
                        value={editState!.tagline}
                        onChange={(e) => setEditState({ ...editState!, tagline: e.target.value })}
                        className="w-full rounded-md border border-[#222222] bg-[#0A0A0A] px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-[#A1A1AA]">Why (short)</label>
                      <textarea
                        value={editState!.why_short}
                        onChange={(e) => setEditState({ ...editState!, why_short: e.target.value })}
                        rows={2}
                        className="w-full rounded-md border border-[#222222] bg-[#0A0A0A] px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-accent resize-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-[#A1A1AA]">Affiliate URL</label>
                      <input
                        type="url"
                        value={editState!.affiliate_url}
                        onChange={(e) => setEditState({ ...editState!, affiliate_url: e.target.value })}
                        className="w-full rounded-md border border-[#222222] bg-[#0A0A0A] px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="flex cursor-pointer items-center gap-2 text-sm text-[#A1A1AA]">
                        <input
                          type="checkbox"
                          checked={editState!.is_active}
                          onChange={(e) => setEditState({ ...editState!, is_active: e.target.checked })}
                          className="h-4 w-4 rounded border-[#222222] accent-accent"
                        />
                        Active
                      </label>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => saveEdit(tool.id)}
                        disabled={saving}
                      >
                        {saving ? 'Saving...' : 'Save'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={cancelEdit}
                        disabled={saving}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}
