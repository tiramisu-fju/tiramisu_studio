export interface CaseItem {
  id: string
  industry: '餐飲' | '美業' | '診所' | '工作室'
  kind: '示範作品'
  title: string
  tagline: string
  problem: string
  solution: string
  result: string
  highlights: string[]
  demoUrl?: string
  mockupBg: string
  accentColor: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  unit: string
  popular?: boolean
  description: string
  features: string[]
  ctaText: string
}

export interface StepItem {
  no: string
  title: string
  desc: string
  flow: string[]
}

export interface FaqItem {
  q: string
  a: string
}

