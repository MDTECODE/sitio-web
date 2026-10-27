import { AreaProvider } from "./context/AreaSelection"
import { BackgroundDecor } from "./components/BackgroundDecor"
import { Areas } from "./sections/Areas"
import { AutomationTypes } from "./sections/AutomationTypes"
import { Benefits } from "./sections/Benefits"
import { Breadcrumb } from "./sections/Breadcrumb"
import { Contact } from "./sections/Contact"
import { Control } from "./sections/Control"
import { Costs } from "./sections/Costs"
import { Faq } from "./sections/Faq"
import { FinalCta } from "./sections/FinalCta"
import { FlowExamples } from "./sections/FlowExamples"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Implementation } from "./sections/Implementation"
import { Integrations } from "./sections/Integrations"

export function AutomationPage() {
  return (
    <AreaProvider>
      <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
        <BackgroundDecor />
        
        <Breadcrumb />
        <Hero />
        <Benefits />
        <Areas />
        <FlowExamples />
        <Integrations />
        <Implementation />
        <AutomationTypes />
        <Control />
        <Costs />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
    </AreaProvider>
  )
}