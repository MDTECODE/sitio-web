import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PortfolioContent } from "@/components/portfolio-content";

export const metadata: Metadata = {
  title: "Portafolio – MDTEC",
  description:
    "Casos de éxito reales: proyectos que optimizan procesos y escalan negocios con tecnología e IA.",
};

export default function PortafolioPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <PortfolioContent />
      <Footer />
    </div>
  );
}
