"use client"

import { motion } from "framer-motion"

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: {
      duration: 5,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
}

const orbitVariants = (delay: number) => ({
  animate: {
    y: [0, -10, 0],
    x: [0, 5, 0],
    transition: {
      duration: 4,
      ease: "easeInOut" as const,
      repeat: Infinity,
      delay,
    },
  },
})

export function HeroIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center" aria-hidden="true">
      {/* Radial glow behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[460px] h-[460px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute w-[280px] h-[280px] rounded-full bg-cyan-400/8 blur-2xl" />
      </div>

      {/* Main floating container */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="relative z-10 w-full max-w-[520px]"
      >
        {/* Laptop SVG */}
        <svg
          viewBox="0 0 520 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#14B8A6" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#0D1B2A" />
              <stop offset="1" stopColor="#0A1628" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Base/shadow platform */}
          <ellipse cx="260" cy="355" rx="220" ry="14" fill="url(#tealGrad)" opacity="0.15" />

          {/* Laptop body bottom */}
          <rect x="60" y="290" width="400" height="18" rx="6" fill="#0f1e2e" stroke="#14B8A6" strokeWidth="1" strokeOpacity="0.4"/>
          <ellipse cx="260" cy="308" rx="200" ry="8" fill="#14B8A6" opacity="0.08"/>

          {/* Keyboard base */}
          <rect x="70" y="232" width="380" height="62" rx="8" fill="#0b1623" stroke="#1e3a4a" strokeWidth="1.5"/>
          {/* Keyboard keys rows */}
          {[0,1,2,3].map((row) =>
            Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={`key-${row}-${i}`}
                x={85 + i * 30}
                y={240 + row * 13}
                width="24"
                height="9"
                rx="2"
                fill="#0f2030"
                stroke="#14B8A6"
                strokeWidth="0.4"
                strokeOpacity="0.3"
              />
            ))
          )}
          {/* Touchpad */}
          <rect x="210" y="298" width="100" height="6" rx="3" fill="#0f2030" stroke="#14B8A6" strokeWidth="0.5" strokeOpacity="0.3"/>

          {/* Screen bezel */}
          <rect x="70" y="50" width="380" height="190" rx="12" fill="#0b1623" stroke="url(#tealGrad)" strokeWidth="2"/>
          {/* Screen inner */}
          <rect x="78" y="58" width="364" height="174" rx="8" fill="url(#screenGrad)"/>

          {/* Screen content: code lines */}
          {[0,1,2,3,4,5,6,7].map((i) => (
            <rect
              key={`code-${i}`}
              x={92}
              y={72 + i * 18}
              width={i % 3 === 0 ? 180 : i % 3 === 1 ? 130 : 160}
              height="6"
              rx="3"
              fill={i === 0 ? "#14B8A6" : i === 3 ? "#22D3EE" : "#1e4060"}
              opacity={i === 0 || i === 3 ? 0.8 : 0.4}
            />
          ))}

          {/* AI Brain glow on screen center-right */}
          <circle cx="350" cy="140" r="48" fill="#14B8A6" opacity="0.06" filter="url(#softGlow)"/>
          <circle cx="350" cy="140" r="36" fill="none" stroke="url(#tealGrad)" strokeWidth="1.5" strokeDasharray="4 3" filter="url(#glow)" opacity="0.7"/>
          {/* Brain simplified paths */}
          <path d="M335 135 C335 125 345 118 353 122 C356 115 366 115 368 124 C374 124 378 132 374 138 C378 144 374 152 368 152 C366 161 356 161 353 154 C345 158 335 151 335 141 Z" fill="none" stroke="url(#tealGrad)" strokeWidth="1.5" filter="url(#glow)" opacity="0.9"/>
          <path d="M353 122 L353 154 M335 138 L374 138" stroke="#22D3EE" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
        </svg>

        {/* Floating orbit icons */}
        <motion.div
          variants={orbitVariants(0)}
          animate="animate"
          className="absolute top-2 right-8 w-11 h-11 rounded-2xl bg-white/5 border border-teal-500/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-teal-500/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <motion.div
          variants={orbitVariants(1.2)}
          animate="animate"
          className="absolute top-16 -left-4 w-11 h-11 rounded-2xl bg-white/5 border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-cyan-500/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#22D3EE" strokeWidth="2"/>
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.div
          variants={orbitVariants(0.6)}
          animate="animate"
          className="absolute bottom-24 right-0 w-11 h-11 rounded-2xl bg-white/5 border border-orange-400/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-orange-500/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <motion.div
          variants={orbitVariants(1.8)}
          animate="animate"
          className="absolute top-8 left-16 w-10 h-10 rounded-2xl bg-white/5 border border-teal-400/20 backdrop-blur-sm flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M18 20V10M12 20V4M6 20v-6" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Glowing dots */}
        <div className="absolute top-1/3 right-[-12px] w-2.5 h-2.5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/80 animate-pulse" />
        <div className="absolute bottom-1/3 left-[-6px] w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80 animate-pulse" style={{ animationDelay: "1s" }}/>
      </motion.div>
    </div>
  )
}
