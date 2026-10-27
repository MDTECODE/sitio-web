import type { Metadata } from "next"
import  {DigitalPlatformsPage}  from "@/components/sections/services/digital-platforms"

export const metadata: Metadata = {
  title: "Desarrollo de Plataformas Digitales | MDTECODE",
  description: "Diseñamos y desarrollamos plataformas digitales personalizadas para conectar usuarios, procesos y datos, con funcionalidades adaptadas a las necesidades de tu negocio.",
}

export default function PlataformasDigitalesPage() {
  return <DigitalPlatformsPage />
}
