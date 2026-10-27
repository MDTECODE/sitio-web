import { BackgroundDecor } from "./components/BackgroundDecor"
import { Approach } from "./sections/Approach"
import { Breadcrumb } from "./sections/Breadcrumb"
import { Catalog } from "./sections/Catalog"
import { FinalCta } from "./sections/FinalCta"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"

export function SolutionsHub() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
      <BackgroundDecor />
      <Header />
      <Breadcrumb />
      <Hero />
      <Catalog />
      <Approach />
      <FinalCta />
      <Footer />
    </main>
  )
}