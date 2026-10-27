import ServiceCard from "@/components/ui/ServiceCard";

const solutions = [
  {
    number: "01",
    title: "Desarrollo web",
    description:
      "Sitios y plataformas modernas, rápidas y adaptables, pensadas para crecer.",
    services: [
      "Sitios corporativos",
      "Plataformas web",
      "E-commerce",
      "Mantenimiento y soporte",
    ],
    icon: "code" as const,
  },
  {
    number: "02",
    title: "Software a medida",
    description:
      "Aplicaciones que se ajustan a los procesos de tu negocio, mejorando la eficiencia y productividad.",
    services: [
      "Sistemas internos",
      "Dashboards y paneles",
      "Integraciones",
      "Soluciones escalables",
    ],
    icon: "boxes" as const,
  },
  {
    number: "03",
    title: "Automatización",
    description:
      "Menos tareas repetitivas y más tiempo para lo que realmente importa.",
    services: [
      "Automatización de procesos",
      "Integración de herramientas",
      "Flujos de trabajo",
      "Optimización de tareas",
    ],
    icon: "workflow" as const,
  },
  {
    number: "04",
    title: "Diseño de productos digitales",
    description:
      "Interfaces intuitivas que conectan las necesidades de tus usuarios con la tecnología.",
    services: [
      "UI/UX",
      "Diseño de interfaces",
      "Prototipos interactivos",
      "Experiencia de usuario",
    ],
    icon: "monitor" as const,
  },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative isolate overflow-hidden bg-[#050912] py-24 text-white sm:py-28"
    >
      {/* Retícula */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56,169,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,169,255,.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      /> */}

      {/* Resplandor ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Encabezado */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
              Soluciones
              <span className="h-px w-12 bg-sky-500/50" />
            </div>

            <h2 className="max-w-2xl font-[var(--font-sora)] text-4xl font-semibold leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Soluciones digitales para llevar tu negocio{" "}
              <span className="text-sky-400">más lejos.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Desde una idea inicial hasta una plataforma lista para crecer:
              construimos tecnología útil, cuidando cada etapa del producto y
              adaptándonos a las necesidades de tu negocio.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#soluciones-lista"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,102,255,0.25)] transition hover:bg-blue-500"
              >
                Conoce nuestras soluciones
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.04]"
              >
                Hablemos de tu proyecto
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div
          id="soluciones-lista"
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {solutions.map((solution) => (
            <ServiceCard
              key={solution.number}
              number={solution.number}
              title={solution.title}
              description={solution.description}
              services={solution.services}
              icon={solution.icon}
              href="#contacto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}