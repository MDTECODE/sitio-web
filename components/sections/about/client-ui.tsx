"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  trigger?: "view" | "mount"
}

export function FadeIn({
  children,
  className,
  delay = 0,
  trigger = "view",
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  const props =
    trigger === "mount"
      ? {
          initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: reduceMotion ? 0 : 0.65, delay },
        }
      : {
          initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: reduceMotion ? 0 : 0.55, delay },
        }

  return (
    <motion.div {...props} className={className}>
      {children}
    </motion.div>
  )
}