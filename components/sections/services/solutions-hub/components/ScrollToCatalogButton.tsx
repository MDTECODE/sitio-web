"use client"

import { useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type ScrollToCatalogButtonProps = {
  targetId?: string
  children: React.ReactNode
  className?: string
}

export function ScrollToCatalogButton({
  targetId = "catalogo",
  children,
  className,
}: ScrollToCatalogButtonProps) {
  const reduceMotion = useReducedMotion()

  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById(targetId)?.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
        })
      }
      className={className}
    >
      {children}
    </button>
  )
}