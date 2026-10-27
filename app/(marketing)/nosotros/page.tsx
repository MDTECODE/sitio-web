import type { Metadata } from "next"
import About from "@/components/sections/about/About"

export const metadata: Metadata = {
  title: "Nosotros | Tecnología con intención | MDTECODE",
  description: "Conoce la filosofía, metodología y capacidades de MDTECODE para crear soluciones digitales con propósito.",
}

export default function NosotrosPage() {
  return <About />
}
