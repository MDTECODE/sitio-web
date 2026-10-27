export type NavItem = { label: string; href: string; cta?: boolean }

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "#tipos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Preguntas", href: "#faq" },
  { label: "Hablemos", href: "#contacto", cta: true },
]

export const contactEmail = "hola@mdtecode.com"

export const heroHighlights = [
  "Experiencias intuitivas",
  "Arquitectura escalable",
  "Integración con tus sistemas",
]