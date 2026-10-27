
"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Globe2,
  Menu,
  MoveRight,
  X,
} from "lucide-react";

type Language = "ES" | "EN";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  
  {
    label: "Soluciones",
    href: "#soluciones",
    dropdown: [
      {
        label: "Mdt ERP",
        description: "Solución de ERP para tu negocio.",
        href: "/soluciones/mdt-erp",
      },
      
    ],
  },

  {
    label: "Servicios",
    href: "#servicios",
    dropdown: [
      {
        label: "Software a medida",
        description: "Sistemas adaptados a tu negocio.",
        href: "/servicios/software-a-medida",
      },
      {
        label: "Plataformas digitales",
        description: "Experiencias web modernas y escalables.",
        href: "/servicios/plataformas-digitales",
      },
      {
        label: "Automatización",
        description: "Optimiza procesos y tareas.",
        href: "/servicios/automatizacion",
      },
      {
        label: "Inteligencia artificial",
        description: "Integra IA en tus procesos.",
        href: "/servicios/inteligencia-artificial",
      },
    ],
  },
  { label: "Precios", href: "/precios" },
  // { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

function Logo() {
  return (
    <a
      href="/"
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

export default function SiteNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("ES");

  function closeMenus() {
    setOpenDropdown(null);
    setMobileOpen(false);
    setLanguageOpen(false);
  }

  function selectLanguage(selected: Language) {
    setLanguage(selected);
    setLanguageOpen(false);

    // Conecta aquí next-intl u otro sistema de traducción.
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-[1265px] rounded-[2.8rem] border border-[#357eff]/40 bg-[#06132a]/75 px-5 py-3 shadow-[0_0_24px_rgba(22,107,255,0.2),inset_0_0_22px_rgba(12,57,130,0.15)] backdrop-blur-xl sm:px-7 lg:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <Logo />

          {/* Navegación de escritorio */}
          <div className="hidden items-center gap-5 xl:flex">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isOpen = openDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenDropdown(
                            isOpen ? null : item.label
                          )
                        }
                        className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-slate-200 transition-colors hover:text-[#55a8ff]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="absolute left-1/2 top-full z-50 w-[310px] -translate-x-1/2 pt-4">
                          <div className="rounded-2xl border border-white/10 bg-[#081426]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                            {item.dropdown?.map((option) => (
                              <a
                                key={option.label}
                                href={option.href}
                                onClick={closeMenus}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-blue-500/10"
                              >
                                <span className="block text-sm font-medium text-white">
                                  {option.label}
                                </span>
                                <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                                  {option.description}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="whitespace-nowrap text-sm font-medium text-slate-200 transition-colors hover:text-[#55a8ff]"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Acciones de escritorio */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <div className="h-8 w-px bg-white/10" />

            <div className="relative">
              <button
                type="button"
                aria-expanded={languageOpen}
                aria-haspopup="true"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex h-10 items-center gap-2 rounded-full border border-[#4a6a9b]/60 bg-[#0b1b36]/70 px-4 text-sm font-medium text-slate-100 transition hover:border-[#63aaff]"
              >
                <Globe2 className="size-4" />
                {language}
                <ChevronDown
                  className={`size-4 transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-white/10 bg-[#081426]/95 p-1 shadow-xl backdrop-blur-xl">
                  {(["ES", "EN"] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => selectLanguage(lang)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/5 ${
                        language === lang
                          ? "text-blue-400"
                          : "text-slate-200"
                      }`}
                    >
                      {lang === "ES" ? "Español" : "English"}
                      {language === lang && (
                        <span aria-hidden="true">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contacto"
              className="flex h-11 items-center gap-3 rounded-full bg-gradient-to-r from-[#0878f5] to-[#168eff] px-5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(14,130,255,0.35)] transition hover:shadow-[0_0_28px_rgba(14,130,255,0.6)]"
            >
              Hablemos
              <MoveRight className="size-5" />
            </a>
          </div>

          {/* Botón móvil */}
          <button
            type="button"
            className="rounded-full border border-white/15 p-2.5 text-white transition hover:bg-white/5 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {mobileOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 xl:hidden">
            <div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown);
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label}>
                    {hasDropdown ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenDropdown(
                              isOpen ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-white/5"
                        >
                          {item.label}
                          <ChevronDown
                            className={`size-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="mb-2 ml-3 border-l border-blue-500/30 pl-3">
                            {item.dropdown?.map((option) => (
                              <a
                                key={option.label}
                                href={option.href}
                                onClick={closeMenus}
                                className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                              >
                                {option.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={closeMenus}
                        className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}

              {/* Selector de idioma móvil */}
              <div className="mt-2 flex items-center gap-2 border-t border-white/10 px-3 pt-4">
                <Globe2 className="size-4 text-slate-400" />

                {(["ES", "EN"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => selectLanguage(lang)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      language === lang
                        ? "bg-blue-500/15 text-blue-400"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <a
                href="#contacto"
                onClick={closeMenus}
                className="mt-3 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0878f5] to-[#168eff] px-5 py-3 text-sm font-semibold text-white"
              >
                Hablemos
                <MoveRight className="size-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
