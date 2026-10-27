"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "article"
}

export function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const reduceMotion = useReducedMotion()

  const commonProps = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay },
    className,
    children,
  }

  return as === "article"
    ? <motion.article {...commonProps} />
    : <motion.div {...commonProps} />
}