import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://swzahjsdtauzomhbstmr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3emFoanNkdGF1em9taGJzdG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzQyMzMsImV4cCI6MjA5MjM1MDIzM30.swr2edwlfF7HPbDklLBLQkr7x7THjHt_ivPgQ6NRweo'
)

const updates = [
  { slug: 'business-account', order_index: 1 },
  { slug: 'domain', order_index: 2 },
  { slug: 'business-email', order_index: 3 },
  { slug: 'ai-llm', order_index: 4 },
  { slug: 'team-chat', order_index: 5 },
  { slug: 'docs-notes', order_index: 6 },
  { slug: 'task-management', order_index: 7 },
  { slug: 'crm', order_index: 8 },
  { slug: 'website-builder', order_index: 9 },
  { slug: 'code-repo', order_index: 10 },
  { slug: 'email-marketing', order_index: 11 },
  { slug: 'analytics', order_index: 12 },
  { slug: 'payments', order_index: 13 },
  { slug: 'accounting', order_index: 14 },
  { slug: 'deployment', order_index: 15 },
]

for (const { slug, order_index } of updates) {
  const { error } = await supabase
    .from('categories')
    .update({ order_index })
    .eq('slug', slug)
  if (error) console.error(slug, error)
  else console.log(`✓ ${slug} → ${order_index}`)
}
