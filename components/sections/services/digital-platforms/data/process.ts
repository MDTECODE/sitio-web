import type { ProcessStep } from "../types"

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimiento y estrategia",
    text: "Entendemos objetivos, usuarios, necesidades y alcance inicial.",
    activities: "Contexto, prioridades y restricciones.",
  },
  {
    number: "02",
    title: "Diseño y prototipo",
    text: "Organizamos la experiencia, diseñamos flujos y validamos la propuesta.",
    activities: "Flujos, prototipos y feedback.",
  },
  {
    number: "03",
    title: "Desarrollo y pruebas",
    text: "Implementamos funcionalidades, integramos sistemas y revisamos el comportamiento.",
    activities: "Construcción, pruebas y validación.",
  },
  {
    number: "04",
    title: "Lanzamiento y evolución",
    text: "Preparamos el despliegue y definimos posibles mejoras futuras.",
    activities: "Producción, transferencia y continuidad.",
  },
]