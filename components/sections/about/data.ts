import {
  ArrowRight, BrainCircuit, Compass, Layers3, Rocket,
  ScanSearch, Sparkles, UsersRound,
} from "lucide-react"
import type { ComponentType, ReactNode } from "react"

export type AnyIcon = ComponentType<{ className?: string }>

export type NavItem = {
  label: string
  href: string
  active?: boolean
}

export type PhilosophyItem = {
  title: string
  text: string
  icon: AnyIcon
}

export type MethodologyStep = {
  title: string
  text: string
}

export type CapabilityItem = {
  title: string
  href: string
  icon: AnyIcon
}

export type PrincipleItem = {
  title: string
  text: string
}

export type Founder = {
  name: string
  role: string
  initials: string
  bio: string
}

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Precios", href: "/precios" },
  { label: "Nosotros", href: "/nosotros", active: true },
]

export const philosophy: PhilosophyItem[] = [
  { title: "Pensar antes de construir", text: "Comprendemos el problema y los objetivos antes de decidir cómo resolverlos.", icon: ScanSearch },
  { title: "Diseñar para las personas", text: "Buscamos experiencias claras, intuitivas y útiles para quienes utilizan cada solución.", icon: UsersRound },
  { title: "Construir para evolucionar", text: "Desarrollamos soluciones con una estructura que facilite su mantenimiento y crecimiento.", icon: Rocket },
]

export const methodology: MethodologyStep[] = [
  { title: "Descubrimiento", text: "Entendemos objetivos, usuarios y necesidades." },
  { title: "Estrategia", text: "Definimos alcance, prioridades y solución." },
  { title: "Diseño", text: "Estructuramos la experiencia y sus componentes." },
  { title: "Desarrollo", text: "Implementamos funcionalidades y realizamos pruebas." },
  { title: "Lanzamiento", text: "Preparamos la entrega y el despliegue acordado." },
]

// `icon` se resuelve en server-ui.tsx (GlobeIcon es un SVG propio)
export const capabilities: CapabilityItem[] = [
  { title: "Desarrollo web", href: "/soluciones/desarrollo-web", icon: null as unknown as AnyIcon },
  { title: "Software a la medida", href: "/soluciones/software-a-medida", icon: Layers3 },
  { title: "Plataformas SaaS", href: "/soluciones/plataformas-digitales", icon: BrainCircuit },
  { title: "Inteligencia artificial", href: "/soluciones/inteligencia-artificial", icon: Sparkles },
  
]

export const principles: PrincipleItem[] = [
  { title: "Claridad", text: "Decisiones comprensibles y objetivos definidos." },
  { title: "Utilidad", text: "Tecnología que responde a una necesidad concreta." },
  { title: "Evolución", text: "Soluciones que pueden adaptarse a nuevas necesidades." },
]

export const founders: Founder[] = [
  {
    name: "Pedro Aldana",
    role: "Co-fundador · CTO y desarrollo de software",
    initials: "PA",
    bio: "Lidera el desarrollo tecnológico de MDTECODE y la construcción de soluciones de software, desde la definición técnica hasta su implementación.",
  },
  {
    name: "Juan Camilo Zambrano",
    role: "Co-fundador · Dirección comercial y gestión de proyectos",
    initials: "JC",
    bio: "Lidera las relaciones comerciales, conversa con los clientes para entender sus necesidades y participa en el levantamiento y definición de los proyectos.",
  },
]