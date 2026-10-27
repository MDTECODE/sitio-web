"use client";

import { useState } from "react";
import Turnstile from "react-turnstile";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Code2,
  BrainCircuit,
  Layers3,
  Headphones,
} from "lucide-react";


const reasons = [
  "Desarrollo de software",
  "Soluciones con IA",
  "Producto SaaS",
  "Diseño UI/UX",
  "Consultoría tecnológica",
  "Otro",
];

const expectations = [
  {
    icon: Clock3,
    title: "Respuesta oportuna",
    description: "Te responderemos en menos de 24 horas hábiles.",
  },
  {
    icon: ShieldCheck,
    title: "Primera conversación sin costo",
    description: "Hablemos de tu idea sin compromiso.",
  },
  {
    icon: Headphones,
    title: "Trato directo",
    description: "Tu mensaje llega al equipo de MDTECODE.",
  },
];

const services = [
  { icon: Code2, title: "Software a medida", description: "Aplicaciones pensadas para tus procesos." },
  { icon: BrainCircuit, title: "Inteligencia artificial", description: "Automatización y soluciones inteligentes." },
  { icon: Layers3, title: "Productos digitales", description: "SaaS, plataformas web y experiencias digitales." },
];

type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactoPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selected, setSelected] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof ContactForm>(field: K, value: ContactForm[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errorMessage) setErrorMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!selected) {
      setErrorMessage("Selecciona el tipo de ayuda que necesitas.");
      return;
    }

    if (!turnstileToken) {
      setErrorMessage("Completa la verificación de seguridad antes de enviar.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          reason: selected,
          turnstileToken,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || data?.message || "No pudimos enviar tu mensaje. Inténtalo de nuevo."
        );
      }

      setSent(true);
      setSelected("");
      setTurnstileToken("");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error de conexión. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      

      <section className="relative px-6 pb-14 pt-32 sm:pb-20 sm:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/[0.10] blur-[130px]" />
          <div className="absolute -right-40 top-24 h-72 w-72 rounded-full bg-blue-600/[0.10] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(148,163,184,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Hablemos
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.08] tracking-[-.045em] sm:text-5xl md:text-7xl">
            Tu próxima idea empieza{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              con una conversación.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Cuéntanos qué quieres construir, mejorar o resolver. En MDTECODE te ayudamos a convertir
            necesidades reales en soluciones tecnológicas.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.75fr)] lg:gap-10">
          <div className="min-w-0">
            {sent ? (
              <div className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] p-8 text-center sm:p-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_60px_rgba(34,211,238,.12)]">
                  <CheckCircle2 className="h-10 w-10 text-cyan-300" />
                </div>
                <h2 className="mt-7 text-3xl font-bold tracking-tight">¡Mensaje recibido!</h2>
                <p className="mt-4 max-w-md leading-7 text-slate-400">
                  Gracias por escribirnos. Revisaremos la información y nos pondremos en contacto
                  contigo en menos de 24 horas hábiles.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/[0.08]"
                >
                  Enviar otro mensaje <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_25px_100px_rgba(0,0,0,.22)] backdrop-blur sm:p-8 lg:p-10"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Contacto</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Cuéntanos tu proyecto</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Completa el formulario y conversemos sobre cómo podemos ayudarte.
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] sm:flex">
                    <Mail className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
                      Nombre completo <span className="text-cyan-300">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="¿Cómo te llamas?"
                      className="w-full rounded-xl border border-white/10 bg-[#050c1d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/[0.08]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
                      Correo electrónico <span className="text-cyan-300">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="tu@correo.com"
                      className="w-full rounded-xl border border-white/10 bg-[#050c1d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/[0.08]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <label htmlFor="contact-company" className="text-sm font-medium text-slate-300">
                    Empresa <span className="text-slate-500">(opcional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    maxLength={120}
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    placeholder="Nombre de tu empresa o negocio"
                    className="w-full rounded-xl border border-white/10 bg-[#050c1d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/[0.08]"
                  />
                </div>

                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-medium text-slate-300">
                    ¿En qué te podemos ayudar? <span className="text-cyan-300">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {reasons.map((reason) => {
                      const active = selected === reason;
                      return (
                        <button
                          key={reason}
                          type="button"
                          aria-pressed={active}
                          onClick={() => {
                            setSelected(reason);
                            setErrorMessage("");
                          }}
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                            active
                              ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,.08)]"
                              : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {reason}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-6 flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
                    Cuéntanos sobre tu proyecto <span className="text-cyan-300">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="¿Qué necesitas resolver? Cuéntanos tu idea, tus objetivos o el reto que tienes..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#050c1d] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/[0.08]"
                  />
                  <span className="text-right text-xs text-slate-600">{form.message.length}/5000</span>
                </div>

                <div className="mt-5 flex justify-center overflow-hidden">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
                    onVerify={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken("")}
                    onError={() => setTurnstileToken("")}
                    theme="dark"
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="mt-5 rounded-xl border border-rose-400/20 bg-rose-400/[0.06] px-4 py-3 text-sm leading-6 text-rose-200"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !turnstileToken}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-[#02101e] shadow-[0_10px_35px_rgba(34,211,238,.16)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(34,211,238,.24)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 sm:w-auto sm:min-w-52"
                >
                  {loading ? "Enviando mensaje..." : "Enviar mensaje"}
                  <Send className={`h-4 w-4 ${loading ? "animate-pulse" : ""}`} />
                </button>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Tus datos se utilizarán únicamente para responder a tu consulta.
                </p>
              </form>
            )}
          </div>

          <aside className="flex flex-col gap-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Nuestro compromiso</p>
              <h3 className="mt-3 text-xl font-bold">Una conversación clara, desde el inicio.</h3>
              <div className="mt-6 flex flex-col gap-5">
                {expectations.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                      <Icon className="h-4.5 w-4.5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <h3 className="text-lg font-bold">¿Qué podemos construir juntos?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Cuéntanos el reto y encontraremos el enfoque adecuado para tu proyecto.
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {services.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.10] to-blue-500/[0.04] p-6 sm:p-7">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-300/[0.12] blur-3xl" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.08]">
                  <MessageCircle className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="mt-4 text-lg font-bold">¿Prefieres escribirnos directamente?</h3>
                <a
                  href="mailto:soporte@mdtecode.com"
                  className="mt-4 inline-flex items-center gap-2 break-all text-sm font-medium text-cyan-200 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  soporte@mdtecode.com
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </a>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Para WhatsApp, agrega el número comercial oficial cuando esté definido.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

     
    </main>
  );
}
