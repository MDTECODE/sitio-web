import type { Metadata } from "next"
import { CustomSoftwarePage } from "@/components/sections/services/custom-software"

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida | MDTECODE",
  description: "Descubre cómo el software a medida puede ayudarte a digitalizar procesos, conectar sistemas y construir soluciones adaptadas a las necesidades de tu negocio.",
}

export default function SoftwareAMedidaPage() {
  return <CustomSoftwarePage />
}
