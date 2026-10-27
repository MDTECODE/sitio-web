export type NavItem = {
  label: string
  href: string
  cta?: boolean
}

export const CONTACT_EMAIL = "hola@mdtecode.com"

export const navItems: NavItem[] = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Preguntas", href: "#faq" },
  { label: "Hablemos", href: "#contacto", cta: true },
]