import { BackgroundDecor } from "./components/BackgroundDecor"
import { CategoryProvider } from "./context/CategorySelection"
import { Benefits } from "./sections/Benefits"
import { Breadcrumb } from "./sections/Breadcrumb"
import { Contact } from "./sections/Contact"
import { DataAndCost } from "./sections/DataAndCost"
import { Faq } from "./sections/Faq"
import { FinalCta } from "./sections/FinalCta"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Integrations } from "./sections/Integrations"
import { Principles } from "./sections/Principles"
import { Process } from "./sections/Process"
import { Solutions } from "./sections/Solutions"
import { UseCases } from "./sections/UseCases"

export function ArtificialIntelligencePage() {
  return (
    <CategoryProvider>
      <main id="inicio" className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
        <BackgroundDecor />
        
        <Breadcrumb />
        <Hero />
        <Solutions />
        <Benefits />
        <UseCases />
        <Integrations />
        <Process />
        <Principles />
        <DataAndCost />
        <Faq />
        <Contact />
        <FinalCta />
        <Footer />
      </main>
    </CategoryProvider>
  )
}