"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type AreaContextValue = {
  area: string
  setArea: (value: string) => void
}

const AreaContext = createContext<AreaContextValue | null>(null)

export function AreaProvider({ children }: { children: ReactNode }) {
  const [area, setArea] = useState("")
  return <AreaContext.Provider value={{ area, setArea }}>{children}</AreaContext.Provider>
}

export function useAreaSelection() {
  const ctx = useContext(AreaContext)
  if (!ctx) throw new Error("useAreaSelection must be used inside <AreaProvider>")
  return ctx
}