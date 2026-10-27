import { Header } from "./server-ui"
import {
  Capabilities, ContactCTA, Founders, Hero, Methodology,
  Philosophy, Principles, Vision,
} from "./sections"

export function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_78%_6%,rgba(14,116,255,0.2),transparent_30%),radial-gradient(circle_at_8%_45%,rgba(6,182,212,0.08),transparent_28%)]"
      />
      
      <Hero />
      <Vision />
      <Founders />
      <Philosophy />
      <Methodology />
      <Capabilities />
      <Principles />
      <ContactCTA />
    </main>
  )
}

export default About