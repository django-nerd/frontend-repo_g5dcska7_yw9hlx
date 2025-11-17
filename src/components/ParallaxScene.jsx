import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Lightweight 3D parallax background using CSS 3D transforms and mouse position
export default function ParallaxScene() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })

  const rx = useTransform(sy, [0, 1], [8, -8])
  const ry = useTransform(sx, [0, 1], [-8, 8])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mx.set(x)
      my.set(y)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden perspective-[1200px]" aria-hidden>
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="absolute inset-0 preserve-3d">
        {/* Depth layers */}
        <div className="absolute -top-40 -left-32 w-[44rem] h-[44rem] bg-gradient-to-br from-blue-500/40 to-indigo-500/20 rounded-full blur-3xl translate-z-[-200px]" />
        <div className="absolute -bottom-40 -right-32 w-[44rem] h-[44rem] bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/10 rounded-full blur-3xl translate-z-[-250px]" />
        {/* Floating orbs */}
        <motion.div
          className="absolute left-10 top-24 w-40 h-40 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl translate-z-[120px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-16 bottom-20 w-52 h-52 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/10 backdrop-blur-xl border border-white/20 shadow-xl translate-z-[200px]"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Grid plane */}
        <div className="absolute inset-x-0 bottom-[-30%] h-[60%] translate-z-[-150px] rotate-x-[60deg] origin-bottom">
          <div className="w-full h-full bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[length:40px_40px]" />
        </div>
      </motion.div>
    </div>
  )
}
