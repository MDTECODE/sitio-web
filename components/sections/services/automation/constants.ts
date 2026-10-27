export type NavItem = { label: string; href: string; cta?: boolean }

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Preguntas", href: "#faq" },
  { label: "Hablemos", href: "#contacto", cta: true },
]

export const heroHighlights = [
  { text: "Procesos más eficientes", icon: "zap" as const },
  { text: "Sistemas conectados", icon: "link" as const },
  { text: "Adaptado a tu negocio", icon: "sparkles" as const },
]