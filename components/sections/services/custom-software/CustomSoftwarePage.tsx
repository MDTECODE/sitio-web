import { BackgroundDecor } from "./components/BackgroundDecor"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { PainPoints } from "./sections/PainPoints"
import { Capabilities } from "./sections/Capabilities"
import { Contexts } from "./sections/Contexts"
import { Decision } from "./sections/Decision"
import { Deliverables } from "./sections/Deliverables"
import { Process } from "./sections/Process"
import { Technology } from "./sections/Technology"
import { Trust } from "./sections/Trust"
import { ScopeBuilder } from "./sections/ScopeBuilder"
import { Faq } from "./sections/Faq"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

export function CustomSoftwarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
      <BackgroundDecor />
      
      <Hero />
      <PainPoints />
      <Capabilities />
      <Contexts />
      <Decision />
      <Deliverables />
      <Process />
      <Technology />
      <Trust />
      <ScopeBuilder />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}