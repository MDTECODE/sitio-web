import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog – NerionTec",
  description: "Artículos, guías y casos prácticos sobre desarrollo de software, inteligencia artificial y transformación digital.",
}

const posts = [
  {
    slug: "ia-en-gestion-documental",
    tag: "Inteligencia Artificial",
    tagColor: "#14B8A6",
    title: "Cómo la IA está transformando la gestión documental en empresas",
    excerpt:
      "Los procesos manuales de clasificación y archivo de documentos son uno de los mayores cuellos de botella en empresas medianas. Descubre cómo la IA cambia esto.",
    date: "12 Mar 2025",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "chatbots-whatsapp-negocio",
    tag: "Automatización",
    tagColor: "#F97316",
    title: "Chatbots en WhatsApp: la guía práctica para implementar en tu negocio",
    excerpt:
      "WhatsApp Business API + IA = atención 24/7 sin costos de call center. Te explicamos paso a paso cómo funciona y qué necesitas para implementarlo.",
    date: "28 Feb 2025",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "mvp-saas-en-3-semanas",
    tag: "SaaS",
    tagColor: "#6366F1",
    title: "Cómo lanzamos un MVP SaaS en 3 semanas (y qué aprendimos)",
    excerpt:
      "Caso real: desde el primer wireframe hasta el primer cliente de pago en 21 días. Las decisiones técnicas y de producto que lo hicieron posible.",
    date: "14 Feb 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "vision-computador-retail",
    tag: "Visión por Computador",
    tagColor: "#3B82F6",
    title: "Visión por computador en retail: detección de inventario en tiempo real",
    excerpt:
      "Cómo implementamos un sistema de visión artificial para automatizar el conteo de inventario en una cadena retail, reduciendo errores en un 90%.",
    date: "5 Feb 2025",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "arquitectura-nextjs-2025",
    tag: "Desarrollo",
    tagColor: "#F59E0B",
    title: "Arquitectura de proyectos Next.js en 2025: lo que funciona de verdad",
    excerpt:
      "App Router, Server Components, caching, y las decisiones de arquitectura que tomamos después de decenas de proyectos en producción.",
    date: "20 Ene 2025",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "automatizacion-pymes",
    tag: "Transformación Digital",
    tagColor: "#EC4899",
    title: "Automatización para PYMEs: por dónde empezar sin gastar una fortuna",
    excerpt:
      "La automatización no es solo para grandes empresas. Te mostramos los 5 procesos más comunes en PYMEs que puedes automatizar hoy con bajo costo.",
    date: "8 Ene 2025",
    readTime: "6 min",
    featured: false,
  },
]

const categories = ["Todos", "Inteligencia Artificial", "Automatización", "SaaS", "Desarrollo", "Transformación Digital"]

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!
  const rest = posts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full bg-teal-600/6 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
            Contenido técnico
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Blog{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              NerionTec
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Artículos prácticos sobre IA, desarrollo de software y transformación digital para empresas reales.
          </p>
        </div>
      </section>

      {/* Category filter (visual only) */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                i === 0
                  ? "border-teal-500/60 bg-teal-500/10 text-teal-400"
                  : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            style={{ borderColor: `${featured.tagColor}33` }}
            className="rounded-2xl border bg-white/3 overflow-hidden"
          >
            <div className="p-8 md:p-12 flex flex-col gap-5 max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  style={{ color: featured.tagColor, borderColor: `${featured.tagColor}44`, background: `${featured.tagColor}15` }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide"
                >
                  <Tag className="w-3 h-3" />
                  {featured.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                  Destacado
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
                {featured.title}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">{featured.excerpt}</p>

              <div className="flex items-center gap-4 text-slate-500 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime} lectura
                </span>
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                style={{ borderColor: `${featured.tagColor}55`, color: featured.tagColor }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold hover:bg-white/5 transition-all duration-200 w-fit"
              >
                Leer artículo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <article
              key={p.slug}
              style={{ borderColor: `${p.tagColor}22` }}
              className="rounded-2xl border bg-white/3 p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <span
                style={{ color: p.tagColor, borderColor: `${p.tagColor}44`, background: `${p.tagColor}15` }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide w-fit"
              >
                <Tag className="w-3 h-3" />
                {p.tag}
              </span>

              <h2 className="font-serif text-lg font-bold text-white leading-snug text-balance">
                {p.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.excerpt}</p>

              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {p.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {p.readTime}
                </span>
              </div>

              <Link
                href={`/blog/${p.slug}`}
                style={{ color: p.tagColor }}
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all duration-200 w-fit"
              >
                Leer más
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
