"use client";

import {
  Code2,
  Cpu,
  Cloud,
  Lightbulb,
  ArrowRight,
  Rocket,
  Search,
  PenTool,
  Terminal,
} from "lucide-react";

const services = [
  {
    id: "software",
    icon: Code2,
    iconBg: "bg-[#3B82F6]",
    cardBg: "bg-[#EEF4FF]",
    titleTop: "Desarrollo de",
    titleBottom: "Software",
    titleBottomColor: "text-[#1E3A8A]",
    dotColor: "bg-[#3B82F6]",
    items: ["Apps Web y Mobile", "Sistemas Empresariales", "APIs a la Medida"],
    btnClass:
      "border-[#3B82F6] text-[#1E3A8A] hover:bg-[#3B82F6] hover:text-white",
    popular: false,
  },
  {
    id: "ia",
    icon: Cpu,
    iconBg: "bg-white/20",
    cardBg: "bg-gradient-to-br from-[#0EA5A0] to-[#0A4D6E]",
    titleTop: "Soluciones",
    titleBottom: "con IA",
    titleBottomColor: "text-white",
    dotColor: "bg-[#2DD4BF]",
    items: ["Automatización", "Chatbots Inteligentes"],
    btnClass: "border-white/40 text-white hover:bg-white/20",
    popular: true,
  },
  {
    id: "saas",
    icon: Cloud,
    iconBg: "bg-[#3B82F6]",
    cardBg: "bg-[#EEF4FF]",
    titleTop: "Productos",
    titleBottom: "SaaS",
    titleBottomColor: "text-[#3B82F6]",
    dotColor: "bg-[#3B82F6]",
    items: ["Plataformas Cloud", "MVPs Escalables", "Licenciamiento"],
    btnClass:
      "border-[#3B82F6] text-[#1E3A8A] hover:bg-[#3B82F6] hover:text-white",
    popular: false,
  },
  {
    id: "consulting",
    icon: Lightbulb,
    iconBg: "bg-[#D97706]",
    cardBg: "bg-[#FFF5EB]",
    titleTop: "Consultoría",
    titleBottom: "Tech",
    titleBottomColor: "text-[#D97706]",
    dotColor: "bg-[#D97706]",
    items: [
      "Transformación Digital",
      "Arquitectura de Software",
      "Integración de Sistemas",
    ],
    btnClass:
      "border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white",
    popular: false,
  },
];

const steps = [
  {
    num: "1",
    label: "Descubre",
    desc: "Tu idea o necesidad",
    icon: Search,
    bg: "bg-[#FDE8D8]",
    iconBg: "bg-[#D97706]",
    numColor: "text-[#1E3A8A]",
    arrowColor: "text-[#D97706]",
  },
  {
    num: "2",
    label: "Diseñamos",
    desc: "La solución perfecta",
    icon: PenTool,
    bg: "bg-[#DBEAFE]",
    iconBg: "bg-[#3B82F6]",
    numColor: "text-[#1E3A8A]",
    arrowColor: "text-[#3B82F6]",
  },
  {
    num: "3",
    label: "Desarrollamos",
    desc: "Con tecnología top",
    icon: Terminal,
    bg: "bg-[#DBEAFE]",
    iconBg: "bg-[#3B82F6]",
    numColor: "text-[#1E3A8A]",
    arrowColor: "text-[#3B82F6]",
  },
  {
    num: "4",
    label: "Implementamos",
    desc: "Y escalamos contigo",
    icon: Rocket,
    bg: "bg-[#FDE8D8]",
    iconBg: "bg-[#D97706]",
    numColor: "text-[#1E3A8A]",
    arrowColor: "text-[#D97706]",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#F4F7FB] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <div className="flex items-center gap-2 border border-[#CBD5E1] rounded-full px-4 py-1.5 text-sm font-medium text-[#3B82F6] bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] inline-block" />
            <span>Solutiones Integrales</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="text-[#64748B]"
            >
              <path
                d="M2 3.5L5 6.5L8 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-balance mb-4">
          <span className="text-[#1E3A8A]">Nuestros </span>
          <span className="text-[#3B82F6]">Servicios</span>
        </h2>
        <p className="text-center text-[#475569] max-w-xl mx-auto leading-relaxed mb-12 text-pretty">
          Transformamos tu negocio con{" "}
          <strong className="text-[#1E3A8A]">software</strong> a la medida,
          inteligencia artificial y{" "}
          <strong className="text-[#1E3A8A]">productos SaaS</strong> escalables.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {services.map((s) => {
            const Icon = s.icon;
            const isPopular = s.popular;
            return (
              <div
                key={s.id}
                className={`relative rounded-2xl p-6 flex flex-col gap-4 ${s.cardBg} ${isPopular ? "shadow-xl ring-2 ring-[#0EA5A0]/40 scale-[1.02]" : "shadow-md"} transition-transform duration-200 hover:-translate-y-1`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-[#0A4D6E] text-xs font-bold px-3 py-1 rounded-full shadow border border-[#0EA5A0]/30 tracking-wide uppercase">
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.iconBg} ${isPopular ? "" : ""}`}
                >
                  <Icon
                    className={`w-6 h-6 ${isPopular ? "text-white" : "text-white"}`}
                  />
                </div>

                {/* Title */}
                <div>
                  <p
                    className={`text-sm ${isPopular ? "text-white/80" : "text-[#475569]"}`}
                  >
                    {s.titleTop}
                  </p>
                  <p
                    className={`text-xl font-bold ${isPopular ? "text-white" : s.titleBottomColor}`}
                  >
                    {s.titleBottom}
                  </p>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-2 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${s.dotColor}`}
                      />
                      <span
                        className={`text-sm ${isPopular ? "text-white/90" : "text-[#334155]"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-2 w-full border rounded-full py-2 text-sm font-semibold transition-colors duration-200 ${s.btnClass}`}
                >
                  Ver más &rarr;
                </button>
              </div>
            );
          })}
        </div>

        {/* Process section */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-2">
            <span className="text-[#1E3A8A]">{"¿Cómo Podemos "}</span>
            <span className="text-[#3B82F6]">Ayudarte?</span>
          </h3>
          <p className="text-[#475569] text-base leading-relaxed">
            Elige la solución que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-center">
                {/* Step card */}
                <div
                  className={`${step.bg} rounded-2xl px-6 py-5 flex flex-col items-center text-center w-44 shadow-sm`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg} mb-3`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className={`text-base font-bold ${step.numColor}`}>
                    {step.num}. {step.label}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="mx-1 shrink-0">
                    <ArrowRight
                      className={`w-7 h-7 ${step.arrowColor}`}
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
