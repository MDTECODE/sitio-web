"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Check,
  Code2,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import type { ComponentType, PointerEvent } from "react";

const iconMap = {
  code: Code2,
  boxes: Boxes,
  workflow: Workflow,
  monitor: MonitorSmartphone,
};

type IconName = keyof typeof iconMap;

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  services: string[];
  href?: string;
  ariaLabel?: string;
  icon?: IconName;
};

export default function ServiceCard({
  number,
  title,
  description,
  services,
  href = "#contacto",
  ariaLabel,
  icon = "code",
}: ServiceCardProps) {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const spotlight = useMotionTemplate`
    radial-gradient(
      240px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 155, 255, 0.16),
      transparent 72%
    )
  `;

  const Icon: ComponentType<{ size?: number; strokeWidth?: number }> =
    iconMap[icon];

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    // No seguir el puntero en pantallas táctiles.
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  }

  return (
    <motion.article
      className="service-card group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-sky-400/20 bg-[#07101c]/90"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      onPointerMove={handlePointerMove}
    >
      {/* Luz que sigue el cursor */}
      <motion.div
        className="card-spotlight pointer-events-none absolute inset-0 -z-10"
        style={{ background: spotlight }}
        aria-hidden="true"
      />

      {/* Halo azul */}
      <div
        className="card-glow pointer-events-none absolute -right-20 -top-24 -z-10 h-48 w-48 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Contorno iluminado al hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-colors duration-300 group-hover:ring-sky-400/30"
        aria-hidden="true"
      />

      <div className="service-card-content flex h-full flex-col p-6">
        {/* Icono y número */}
        <div className="card-topline mb-6 flex items-start justify-between">
          <motion.div
            className="icon-box flex h-14 w-14 items-center justify-center rounded-xl border border-sky-500/60 bg-blue-500/10 text-sky-400 shadow-[0_0_20px_rgba(0,102,255,0.12)]"
            whileHover={{
              rotate: [0, -4, 4, 0],
              scale: 1.05,
            }}
            transition={{ duration: 0.45 }}
          >
            <Icon size={27} strokeWidth={2.4} />
          </motion.div>

          <span className="service-number font-mono text-sm text-sky-500/75">
            {number}
          </span>
        </div>

        {/* Título y descripción */}
        <div className="service-copy">
          <h3 className="font-[var(--font-sora)] text-lg font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>

        <div className="service-divider my-5 h-px bg-white/10" />

        {/* Lista de servicios */}
        <ul
          className="service-list space-y-3"
          aria-label={`Servicios incluidos en ${title}`}
        >
          {services.map((service, index) => (
            <motion.li
              key={service}
              className="flex items-start gap-2.5 text-sm text-slate-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.18 + index * 0.08,
                duration: 0.35,
              }}
            >
              <span className="check-icon mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500 text-[#06101c]">
                <Check size={12} strokeWidth={3.2} />
              </span>

              <span>{service}</span>
            </motion.li>
          ))}
        </ul>

        {/* Enlace */}
        <motion.a
          className="service-link mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
          href={href}
          whileHover="hover"
          aria-label={ariaLabel ?? `Ver más sobre ${title}`}
        >
          <span>Ver más</span>

          <motion.span
            variants={{ hover: { x: 5 } }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 18,
            }}
          >
            <ArrowRight size={17} strokeWidth={2.2} />
          </motion.span>
        </motion.a>
      </div>
    </motion.article>
  );
}