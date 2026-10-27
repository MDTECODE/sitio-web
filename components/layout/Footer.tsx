
"use client";

import { useState,useEffect, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  GitBranch,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  SiGithub,
  SiInstagram,
  SiLinkerd,
  SiYoutube,
} from "@icons-pack/react-simple-icons";


const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const solutions = [
  { label: "Desarrollo web", href: "#soluciones" },
  { label: "Software a medida", href: "#soluciones" },
  { label: "Automatización", href: "#soluciones" },
  { label: "Soluciones Cloud", href: "#soluciones" },
  { label: "Asesoría tecnológica", href: "#contacto" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos y condiciones", href: "/terminos" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="MDTECODE, inicio"
      className="flex shrink-0 items-center"
    >
      <Image
        src="/mdtec.png"
        alt="MDTECODE"
        width={180}
        height={48}
        priority
        className="h-14 w-auto"
      />
    </a>
  );
}


function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.17h2.97v9.57ZM6.45 7.86a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.88h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.46V9.17h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.26Z" />
        </svg>
      );

    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      );

    default:
      return null;
  }
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
  setCurrentYear(new Date().getFullYear());
}, []);

  function handleNewsletterSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!consent) {
      setMessage("Debes aceptar recibir comunicaciones.");
      return;
    }

    // Conecta aquí tu API o servicio de newsletter.
    setMessage(
      "El formulario está listo. Falta conectar el servicio de suscripción.",
    );
  }

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-cyan-400/15 bg-[#030817] text-slate-300"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 75%, rgba(0,153,255,0.13), transparent 25%), radial-gradient(circle at 92% 5%, rgba(0,220,255,0.07), transparent 25%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-16 -z-10 h-80 w-80 rounded-full border border-cyan-400/10 bg-blue-500/[0.03] shadow-[0_0_100px_rgba(0,153,255,0.08)]"
      />

      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Marca */}
          <div className="lg:col-span-3">
            <Logo />

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-slate-500">
              Tecnología con propósito
            </p>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
              Desarrollamos soluciones digitales que impulsan tu
              negocio. Combinamos estrategia, diseño y tecnología
              para convertir ideas en resultados reales.
            </p>

            {/* Redes sociales */}
            <div className="mt-7 flex flex-wrap gap-3">
  {socialLinks.map(({ label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/50 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(0,220,255,0.10)]"
    >
      <SocialIcon name={label} />
    </a>
  ))}
</div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-2 lg:pl-5">
            <FooterHeading>Navegación</FooterHeading>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluciones */}
          <div className="lg:col-span-2">
            <FooterHeading>Soluciones</FooterHeading>

            <ul className="mt-6 space-y-4">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="lg:col-span-2">
            <FooterHeading>Recursos</FooterHeading>

            <ul className="mt-6 space-y-4">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y novedades */}
          <div className="lg:col-span-3">
            <FooterHeading>Hablemos</FooterHeading>

            <div className="mt-6 space-y-3">
              <ContactItem
                icon={<Mail size={18} />}
                href="mailto:hola@mdtecode.com"
              >
                hola@mdtecode.com
              </ContactItem>

              <ContactItem
                icon={<MessageCircle size={18} />}
                href="https://wa.me/573001234567"
              >
                Escríbenos por WhatsApp
              </ContactItem>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-cyan-400">
                  <MapPin size={18} />
                </span>
                Colombia · Atención remota
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-9">
              <h3 className="text-base font-semibold text-white">
                Recibe novedades
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Descubre ideas, recursos y novedades sobre tecnología.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-4"
              >
                <div className="flex gap-2">
                  <label
                    htmlFor="footer-email"
                    className="sr-only"
                  >
                    Tu correo electrónico
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setMessage("");
                    }}
                    placeholder="Tu correo electrónico"
                    className="min-w-0 flex-1 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10"
                  />

                  <button
                    type="submit"
                    aria-label="Suscribirme a las novedades"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(0,220,255,0.12)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,220,255,0.25)]"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-slate-500">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(event.target.checked)
                    }
                    className="mt-0.5 accent-cyan-400"
                  />

                  <span>
                    Acepto recibir comunicaciones de MDTECODE y he
                    leído la política de privacidad.
                  </span>
                </label>

                {message && (
                  <p
                    role="status"
                    className="mt-3 text-xs leading-5 text-cyan-300"
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="relative border-t border-cyan-400/15">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-cyan-400 shadow-[0_0_12px_rgba(0,220,255,0.8)]"
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="text-sm leading-6 text-slate-500">
            <p>
              © {currentYear ?? "2026"} MDTECODE. Todos los derechos reservados.
            </p>
            <p className="mt-1">Tecnología con propósito.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500 sm:text-sm">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-cyan-300"
            >
              Política de privacidad
            </Link>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-slate-700 sm:block"
            />

            <Link
              href="/terminos"
              className="transition-colors hover:text-cyan-300"
            >
              Términos y condiciones
            </Link>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-slate-700 sm:block"
            />

            <Link
              href="/cookies"
              className="transition-colors hover:text-cyan-300"
            >
              Cookies
            </Link>
          </div>

          <button
            type="button"
            aria-label="Volver al inicio de la página"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-cyan-400/70 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(0,220,255,0.2)] md:self-auto"
          >
            <ArrowUp
              size={21}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

/* Título de cada columna */
function FooterHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-semibold text-white sm:text-lg">
        {children}
      </h2>

      <span
        aria-hidden="true"
        className="mt-4 block h-[3px] w-10 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,220,255,0.4)]"
      />
    </div>
  );
}

/* Elemento reutilizable de contacto */
function ContactItem({
  icon,
  href,
  children,
}: {
  icon: ReactNode;
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("https://");

  return (
    <a
      href={href}
      {...(isExternal
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-300"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-slate-900/60 text-cyan-400 transition-all group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
        {icon}
      </span>

      <span className="break-words">{children}</span>
    </a>
  );
}
