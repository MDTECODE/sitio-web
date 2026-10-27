import type { Metadata } from "next"
import { SolutionsHub } from "@/components/sections/services/solutions-hub/index"

export const metadata: Metadata = {
  title: "Soluciones Tecnológicas para Empresas | MDTECODE",
  description: "Explora las soluciones de MDTECODE: software a medida, plataformas digitales, automatización e inteligencia artificial para necesidades empresariales.",
}

export default function SolutionsPage() {
  return <SolutionsHub />
}
