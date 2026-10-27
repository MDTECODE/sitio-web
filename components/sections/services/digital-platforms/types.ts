import type { LucideIcon } from "lucide-react"

export type IconType = LucideIcon

export type PlatformType = {
  title: string
  text: string
  tags: string[]
  icon: IconType
}

export type Benefit = {
  title: string
  text: string
  icon: IconType
}

export type Faq = {
  question: string
  answer: string
}

export type ProcessStep = {
  number: string
  title: string
  text: string
  activities: string
}

export type TechEntry = {
  title: string
  text: string
  icon: IconType
}

type BaseField = {
  name: string
  label: string
  required?: boolean
  colSpan?: 1 | 2
}

export type ContactField =
  | (BaseField & { type: "text" | "email" })
  | (BaseField & { type: "select"; options: string[] })
  | (BaseField & { type: "textarea"; rows: number })