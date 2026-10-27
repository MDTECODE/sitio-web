import type { LucideIcon } from "lucide-react"

export type IconType = LucideIcon

export type Solution = {
  title: string
  text: string
  examples: string
  value: string
  icon: IconType
}

export type AiBenefit = {
  title: string
  text: string
  icon: IconType
}

export type UseCase = {
  title: string
  problem: string
  solution: string
  limit: string
  icon: IconType
}

export type ProcessStep = {
  number: string
  title: string
  text: string
}

export type Principle = {
  title: string
  text: string
}

export type Faq = {
  question: string
  answer: string
}

type BaseField = {
  name: string
  label: string
  required?: boolean
  placeholder?: string
  colSpan?: 1 | 2
}

export type ContactField =
  | (BaseField & { type: "text" | "email" })
  | (BaseField & { type: "textarea"; rows: number })
  | (BaseField & { type: "category-select" })