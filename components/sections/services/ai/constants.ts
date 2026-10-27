export type NavItem = { label: string; href: string; cta?: boolean }

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Preguntas", href: "#faq" },
  { label: "Hablemos", href: "#contacto", cta: true },
]

export const heroHighlights = [
  "Soluciones a medida",
  "Integración con tus sistemas",
  "Enfoque responsable",
]