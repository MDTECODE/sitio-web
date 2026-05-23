import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
