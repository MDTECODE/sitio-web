export type NavItem = { label: string; href: string; cta?: boolean }

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "#catalogo" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Hablemos", href: "#contacto", cta: true },
]

export const heroHighlights = [
  "Tecnología a medida",
  "Sistemas conectados",
  "Evolución continua",
]

export const CONTACT_EMAIL = "hola@mdtecode.com"