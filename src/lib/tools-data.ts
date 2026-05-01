export interface Tool {
  id: string
  slug: string
  name: string
  description: string
  website_url: string
  tagline: string
  why_text?: string
  is_active: boolean
  order_index: number
  categories: {
    id: string
    name: string
    slug: string
    order_index: number
  }
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'qonto',
    name: 'Qonto',
    description: 'Best business account for startups',
    website_url: 'https://qonto.com',
    tagline: 'Business account that gets you',
    is_active: true,
    order_index: 1,
    categories: {
      id: '1',
      name: 'Banking',
      slug: 'banking',
      order_index: 1
    }
  },
  {
    id: '2',
    slug: 'godaddy',
    name: 'GoDaddy',
    description: 'Best domain registrar for startups',
    website_url: 'https://godaddy.com',
    tagline: 'Domain registration done right',
    is_active: true,
    order_index: 2,
    categories: {
      id: '2',
      name: 'Domains',
      slug: 'domains',
      order_index: 2
    }
  },
  {
    id: '3',
    slug: 'google-workspace',
    name: 'Google Workspace',
    description: 'Best business email for startups',
    website_url: 'https://workspace.google.com',
    tagline: 'Professional email and productivity',
    is_active: true,
    order_index: 3,
    categories: {
      id: '3',
      name: 'Email',
      slug: 'email',
      order_index: 3
    }
  },
  {
    id: '4',
    slug: 'claude',
    name: 'Claude',
    description: 'Best AI / LLM for startups',
    website_url: 'https://claude.ai',
    tagline: 'AI assistant that understands context',
    is_active: true,
    order_index: 4,
    categories: {
      id: '4',
      name: 'AI',
      slug: 'ai',
      order_index: 4
    }
  },
  {
    id: '5',
    slug: 'slack',
    name: 'Slack',
    description: 'Best team chat for startups',
    website_url: 'https://slack.com',
    tagline: 'Team communication that scales',
    is_active: true,
    order_index: 5,
    categories: {
      id: '5',
      name: 'Chat',
      slug: 'chat',
      order_index: 5
    }
  },
  {
    id: '6',
    slug: 'notion',
    name: 'Notion',
    description: 'Best docs and notes tool for startups',
    website_url: 'https://notion.so',
    tagline: 'All-in-one workspace',
    is_active: true,
    order_index: 6,
    categories: {
      id: '6',
      name: 'Docs',
      slug: 'docs',
      order_index: 6
    }
  },
  {
    id: '7',
    slug: 'asana',
    name: 'Asana',
    description: 'Best task management for startups',
    website_url: 'https://asana.com',
    tagline: 'Project management that works',
    is_active: true,
    order_index: 7,
    categories: {
      id: '7',
      name: 'Tasks',
      slug: 'tasks',
      order_index: 7
    }
  },
  {
    id: '8',
    slug: 'hubspot',
    name: 'HubSpot',
    description: 'Best CRM for startups',
    website_url: 'https://hubspot.com',
    tagline: 'CRM with free tier',
    is_active: true,
    order_index: 8,
    categories: {
      id: '8',
      name: 'CRM',
      slug: 'crm',
      order_index: 8
    }
  },
  {
    id: '9',
    slug: 'framer',
    name: 'Framer',
    description: 'Best website builder for startups',
    website_url: 'https://framer.com',
    tagline: 'Build websites without code',
    is_active: true,
    order_index: 9,
    categories: {
      id: '9',
      name: 'Website',
      slug: 'website',
      order_index: 9
    }
  },
  {
    id: '10',
    slug: 'github',
    name: 'GitHub',
    description: 'Best code repository for startups',
    website_url: 'https://github.com',
    tagline: 'Where software is built',
    is_active: true,
    order_index: 10,
    categories: {
      id: '10',
      name: 'Code',
      slug: 'code',
      order_index: 10
    }
  },
  {
    id: '11',
    slug: 'brevo',
    name: 'Brevo',
    description: 'Best email marketing for startups',
    website_url: 'https://brevo.com',
    tagline: 'Email campaigns that convert',
    is_active: true,
    order_index: 11,
    categories: {
      id: '11',
      name: 'Marketing',
      slug: 'marketing',
      order_index: 11
    }
  },
  {
    id: '12',
    slug: 'plausible',
    name: 'Plausible',
    description: 'Best analytics for startups',
    website_url: 'https://plausible.io',
    tagline: 'Privacy-friendly analytics',
    is_active: true,
    order_index: 12,
    categories: {
      id: '12',
      name: 'Analytics',
      slug: 'analytics',
      order_index: 12
    }
  },
  {
    id: '13',
    slug: 'stripe',
    name: 'Stripe',
    description: 'Best payment solution for startups',
    website_url: 'https://stripe.com',
    tagline: 'Payments infrastructure',
    is_active: true,
    order_index: 13,
    categories: {
      id: '13',
      name: 'Payments',
      slug: 'payments',
      order_index: 13
    }
  },
  {
    id: '14',
    slug: 'lexoffice',
    name: 'Lexoffice',
    description: 'Best accounting software for startups',
    website_url: 'https://lexoffice.de',
    tagline: 'Accounting made simple',
    is_active: true,
    order_index: 14,
    categories: {
      id: '14',
      name: 'Accounting',
      slug: 'accounting',
      order_index: 14
    }
  },
  {
    id: '15',
    slug: 'vercel',
    name: 'Vercel',
    description: 'Best deployment platform for startups',
    website_url: 'https://vercel.com',
    tagline: 'Deploy in seconds',
    is_active: true,
    order_index: 15,
    categories: {
      id: '15',
      name: 'Hosting',
      slug: 'hosting',
      order_index: 15
    }
  }
]
