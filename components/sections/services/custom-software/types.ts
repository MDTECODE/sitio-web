import type { LucideIcon } from "lucide-react"

export type IconType = LucideIcon

export type Capability = {
  title: string
  text: string
  solve: string
  features: string
  icon: IconType
}

export type Faq = {
  question: string
  answer: string
}

export type Phase = {
  number: string
  title: string
  what: string
  needs: string
  result: string
  decision: string
}

export type TechItem = {
  icon: IconType
  title: string
  text: string
}

export type TrustItem = {
  icon: IconType
  title: string
  text: string
}

export type PainPoint = {
  title: string
  text: string
}

export type Context = {
  title: string
  text: string
}

export type Deliverable = {
  title: string
  text: string
}

export type ScopeValues = {
  solution: string
  complexity: string
  modules: string
  integrations: string
  design: string
  maintenance: string
}

export type ScopeField = {
  key: keyof ScopeValues
  label: string
  options: string[]
}