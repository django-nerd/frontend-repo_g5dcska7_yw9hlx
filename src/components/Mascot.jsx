import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Floating liquid-glass mascot that gently follows the cursor across the site
export default function Mascot() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth follow springs
  const x = useSpring(mouseX, { stiffness: 60, damping: 12, mass: 0.6 })
  const y = useSpring(mouseY, { stiffness: 60, damping: 12, mass: 0.6 })

  // Subtle tilt based on direction
  const rot = useTransform([x, y], ([vx, vy]) => {
    const cx = typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    const cy = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    const dx = (vx - cx) / cx
    const dy = (vy - cy) / cy
    return dx * 6 - dy * 4
  })

  useEffect(() => {
    const handle = (e) => {
      const w = window.innerWidth
      const h = window.innerHeight
      // Keep within safe viewport padding
      const px = Math.max(80, Math.min(e.clientX, w - 80))
      const py = Math.max(80, Math.min(e.clientY, h - 120))
      mouseX.set(px)
      mouseY.set(py)
    }
    window.addEventListener('mousemove', handle)
    // Initial position bottom right
    mouseX.set(typeof window !== 'undefined' ? window.innerWidth - 120 : 0)
    mouseY.set(typeof window !== 'undefined' ? window.innerHeight - 160 : 0)
    return () => window.removeEventListener('mousemove', handle)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" aria-hidden>
      <motion.div
        style={{ x: x, y: y, rotate: rot }}
        className="relative w-24 h-24 -translate-x-1/2 -translate-y-1/2"
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
          Hi, ich begleite dich ✨
        </motion.div>
      </motion.div>
    </div>
  )
}
