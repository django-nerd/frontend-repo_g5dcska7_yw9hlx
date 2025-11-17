import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// Floating liquid-glass mascot that glides with page scroll (not the mouse)
export default function Mascot() {
  const { scrollYProgress } = useScroll()

  // Track viewport height to map scroll to viewport-relative positions
  const [vh, setVh] = useState(0)
  useEffect(() => {
    const update = () => setVh(typeof window !== 'undefined' ? window.innerHeight : 0)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Vertical glide between 15% and 75% of viewport as you scroll the page
  const rawY = useTransform(scrollYProgress, [0, 1], [() => vh * 0.15, () => vh * 0.75])
  const y = useSpring(rawY, { stiffness: 60, damping: 16, mass: 0.7 })

  // Gentle horizontal drift across the viewport while scrolling
  const rawX = useTransform(scrollYProgress, [0, 1], [-80, 80])
  const x = useSpring(rawX, { stiffness: 60, damping: 16, mass: 0.7 })

  // Subtle rotation tied to horizontal drift
  const rot = useTransform(x, [ -120, 0, 120 ], [ -6, 0, 6 ])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      <motion.div
        style={{ x, y, rotate: rot }}
        className="relative w-24 h-24 left-[85%] sm:left-[88%] md:left-[90%] -translate-x-1/2"
      >
        {/* Body */}
        <div className="relative w-full h-full rounded-[2rem] glass-mascot">
          {/* Inner liquid highlights */}
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(120px_120px_at_30%_25%,rgba(255,255,255,0.35),transparent_60%)]" />
          <div className="absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.18),transparent_40%,rgba(236,72,153,0.15),transparent_80%)]" />

          {/* Eyes */}
          <div className="absolute left-1/2 top-[42%] -translate-x-[42%] -translate-y-1/2 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-black/40 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/40 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]" />
          </div>

          {/* Mouth */}
          <div className="absolute left-1/2 top-[58%] -translate-x-1/2 w-8 h-2 rounded-b-full bg-black/20" />

          {/* Rim light */}
          <div className="pointer-events-none absolute -inset-0.5 rounded-[2rem] border border-white/20 bg-gradient-to-b from-white/20 to-transparent blur-[2px] opacity-70" />
        </div>

        {/* Soft shadow */}
        <motion.div
          className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-16 h-4 rounded-full bg-black/40 blur-md opacity-40"
          animate={{ scaleX: [0.9, 1.05, 0.9], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Tooltip bubble */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-[11px] text-white/90 whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 20 }}
        >
          Ich gleite mit dir durch die Seite ✨
        </motion.div>
      </motion.div>
    </div>
  )
}
