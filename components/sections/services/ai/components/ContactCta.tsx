"use client"

import type { ReactNode } from "react"
import { useCategorySelection } from "../context/CategorySelection"

type ContactCtaProps = {
  value?: string
  children: ReactNode
  className?: string
}

export function ContactCta({ value, children, className }: ContactCtaProps) {
  const { goToContact } = useCategorySelection()
  return (
    <button type="button" onClick={() => goToContact(value)} className={className}>
      {children}
    </button>
  )
}