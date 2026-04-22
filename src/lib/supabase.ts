import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types matching the database schema
export interface Category {
  id: string
  name: string
  slug: string
  icon: string | null
  description: string | null
  order_index: number
  created_at: string
}

export interface Tool {
  id: string
  category_id: string
  name: string
  tagline: string
  why_short: string | null
  why: string | null
  affiliate_url: string | null
  website_url: string | null
  logo_url: string | null
  is_active: boolean
  is_sponsored: boolean
  order_index: number
  created_at: string
  updated_at: string
  // joined
  categories?: Category
}

export interface Click {
  id: string
  tool_id: string
  referrer: string | null
  created_at: string
}

export async function trackClick(toolId: string) {
  await supabase.from('clicks').insert({
    tool_id: toolId,
    referrer: document.referrer || null,
  })
}
