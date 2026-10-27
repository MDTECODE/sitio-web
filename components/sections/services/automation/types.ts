import type { LucideIcon } from "lucide-react"

export type IconType = LucideIcon

export type Benefit = {
  title: string
  text: string
  examples: string[]
  icon: IconType
}

export type Area = {
  title: string
  formValue: string
  text: string
  examples: string[]
  icon: IconType
}

export type Faq = {
  question: string
  answer: string
}

export type FlowExample = {
  title: string
  steps: string[]
}

export type ImplementationStep = {
  number: string
  title: string
  text: string
  result: string
}

export type AutomationType = {
  title: string
  text: string
  icon: IconType
  code?: string
  tags?: string[]
}

export type ControlItem = {
  title: string
  text: string
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
  | (BaseField & { type: "area-select" })