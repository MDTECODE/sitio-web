import type { Metadata } from "next"
import { ArtificialIntelligencePage } from "@/components/sections/services/ai"

export const metadata: Metadata = {
  title: "Soluciones de Inteligencia Artificial para Empresas | MDTECODE",
  description: "Diseñamos soluciones de inteligencia artificial adaptadas a tu negocio: asistentes inteligentes, análisis de información e integración con procesos y sistemas existentes.",
}

export default function InteligenciaArtificialPage() {
  return <ArtificialIntelligencePage />
}
