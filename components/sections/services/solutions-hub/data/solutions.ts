import { Boxes, BrainCircuit, Code2, Workflow } from "lucide-react"
import type { Solution } from "../types"

export const solutions: Solution[] = [
  {
    title: "Software a medida",
    description: "Desarrollamos software adaptado a tus procesos, necesidades y objetivos, para que la tecnología trabaje de acuerdo con tu negocio.",
    examples: ["Sistemas internos", "Aplicaciones personalizadas", "Herramientas empresariales"],
    cta: "Explorar software a medida",
    href: "/soluciones/software-a-medida",
    accent: "from-blue-500/20 to-cyan-400/5",
    icon: Code2,
  },
  {
    title: "Plataformas digitales",
    description: "Diseñamos y desarrollamos plataformas digitales que conectan usuarios, información y procesos en una experiencia coherente.",
    examples: ["Portales y plataformas web", "Sistemas de gestión", "Experiencias digitales"],
    cta: "Explorar plataformas",
    href: "/soluciones/plataformas-digitales",
    accent: "from-cyan-400/20 to-blue-500/5",
    icon: Boxes,
  },
  {
    title: "Automatización",
    description: "Optimizamos tareas y flujos de trabajo mediante soluciones que reducen procesos manuales y facilitan la coordinación entre sistemas.",
    examples: ["Automatización de procesos", "Integración entre herramientas", "Flujos de trabajo"],
    cta: "Explorar automatización",
    href: "/soluciones/automatizacion",
    accent: "from-indigo-500/20 to-cyan-400/5",
    icon: Workflow,
  },
  {
    title: "Inteligencia artificial",
    description: "Evaluamos cómo aplicar inteligencia artificial para ayudar a procesar información, asistir a los equipos y mejorar determinados procesos.",
    examples: ["Asistentes inteligentes", "Análisis de información", "Automatización con IA"],
    cta: "Explorar inteligencia artificial",
    href: "/soluciones/inteligencia-artificial",
    accent: "from-blue-400/20 to-violet-500/5",
    icon: BrainCircuit,
  },
]