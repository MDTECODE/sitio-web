"use client"

import {
  createContext, useCallback, useContext, useState, type ReactNode,
} from "react"
import { useReducedMotion } from "framer-motion"

type CategoryContextValue = {
  category: string
  setCategory: (value: string) => void
  goToContact: (category?: string) => void
}

const CategoryContext = createContext<CategoryContextValue | null>(null)

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState("")
  const reduceMotion = useReducedMotion()

  const goToContact = useCallback(
    (value?: string) => {
      if (value) setCategory(value)
      document.getElementById("contacto")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      })
    },
    [reduceMotion],
  )

  return (
    <CategoryContext.Provider value={{ category, setCategory, goToContact }}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategorySelection() {
  const ctx = useContext(CategoryContext)
  if (!ctx) throw new Error("useCategorySelection must be used inside <CategoryProvider>")
  return ctx
}