import type { Metadata } from "next"
import { CustomSoftwarePage } from "@/components/sections/custom-software"

export const metadata: Metadata = {
  title: "Desarrollo de Software a la Medida para Empresas | MDTECODE",
  description: "Desarrollamos software a la medida para empresas: sistemas de gestión, plataformas internas, paneles administrativos e integraciones adaptadas a sus necesidades.",
}

export default function SoftwareAMedidaPage() {
  return <CustomSoftwarePage />
}
