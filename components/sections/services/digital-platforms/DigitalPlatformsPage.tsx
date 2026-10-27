import { BackgroundDecor } from "./components/BackgroundDecor"
import { Benefits } from "./sections/Benefits"
import { Comparison } from "./sections/Comparison"
import { Contact } from "./sections/Contact"
import { Faq } from "./sections/Faq"
import { FinalCta } from "./sections/FinalCta"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { PlatformTypes } from "./sections/PlatformTypes"
import { Process } from "./sections/Process"
import { Technology } from "./sections/Technology"

export function DigitalPlatformsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
      <BackgroundDecor />
      
      <Hero />
      <Benefits />
      <PlatformTypes />
      <Process />
      <Comparison />
      <Technology />
      <Faq />
      <Contact />
      <FinalCta />
    </main>
  )
}