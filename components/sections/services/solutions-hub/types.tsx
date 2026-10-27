import type { LucideIcon } from "lucide-react"

export type IconType = LucideIcon

export type Solution = {
  title: string
  description: string
  examples: string[]
  cta: string
  href: string
  accent: string
  icon: IconType
}

export type Principle = {
  title: string
  text: string
  icon: IconType
}

export type EcosystemNode = {
  label: string
  position: string
  icon: IconType
}