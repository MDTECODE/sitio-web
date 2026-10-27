import { Header } from "./server-ui"
import {
  CategoryNav, FaqSection, FinalCta, Hero, IncludedExcluded, PriceCatalog,
} from "./sections"

export function ProjectPricing() {
  return (
    <main className="min-h-screen bg-[#030817] text-slate-100">
      
      <Hero />
      <CategoryNav />
      <div className="mx-auto max-w-7xl space-y-20 px-5 py-14">
        <PriceCatalog />
        <IncludedExcluded />
        <FinalCta />
      </div>
      <FaqSection />
    </main>
  )
}

export default ProjectPricing