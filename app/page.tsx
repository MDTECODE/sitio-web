"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-10-25T12:00:00-05:00").getTime();

const timeUnits = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

type Countdown = Record<(typeof timeUnits)[number]["key"], number>;

function getRemainingTime(): Countdown {
  const distance = Math.max(0, TARGET_DATE - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Page() {
  const [remaining, setRemaining] = useState<Countdown>(getRemainingTime);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining(getRemainingTime()),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const isComplete = Object.values(remaining).every((value) => value === 0);

  return (
    <main className="maintenance-page">
      <div className="scene" aria-hidden="true">
        <div className="scene-image" />
        <div className="scene-vignette" />
        <div className="scan-line" />
        <div className="blueprint blueprint-one" />
        <div className="blueprint blueprint-two" />
        <span className="ambient-particle particle-one" />
        <span className="ambient-particle particle-two" />
        <span className="ambient-particle particle-three" />
      </div>

      <header className="topbar">
        <img className="brand-logo" src="/mdtec.png" alt="MDTECODE" />
        <div className="status-mark">
          <span /> En remodelación
        </div>
      </header>

      <section className="content" aria-labelledby="page-title">
        <p className="eyebrow">
          <span className="eyebrow-line" /> Nueva plataforma en construcción
        </p>
        <h1 id="page-title">
          Estamos construyendo
          <br />
          <em>algo nuevo.</em>
        </h1>
        <p className="description">
          Nuestro sitio web está en remodelación. Estamos trabajando para
          ofrecerte una experiencia renovada. Muy pronto estaremos de vuelta.
        </p>

        {isComplete ? (
          <p className="back-message">¡Ya estamos de vuelta!</p>
        ) : (
          <div
            className="countdown"
            aria-label="Tiempo restante para el regreso"
          >
            {timeUnits.map(({ key, label }) => (
              <div className="time-unit" key={key}>
                <span className="time-value">
                  {String(remaining[key]).padStart(2, "0")}
                </span>
                <span className="time-label">{label}</span>
              </div>
            ))}
          </div>
        )}
        <p className="closing-line">
          Una nueva experiencia está en camino <span>—</span>
        </p>
      </section>

      <footer className="footer-note">
        <span className="footer-dot" /> Construyendo el futuro digital
      </footer>
    </main>
  );
}

// Cambia TARGET_DATE para configurar la fecha de regreso del sitio.
// La escena usa una imagen local generada para rendimiento y una capa estática para reduced motion.
