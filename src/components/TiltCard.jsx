import { useRef } from 'react'

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rX = (0.5 - py) * 18 // rotateX
    const rY = (px - 0.5) * 18 // rotateY
    const tX = (px - 0.5) * 12
    const tY = (py - 0.5) * 12
    el.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) translateZ(0px) translate(${tX}px, ${tY}px)`
    const shine = el.querySelector('[data-shine]')
    if (shine) {
      const dx = px * 100
      const dy = py * 100
      shine.style.background = `radial-gradient(600px circle at ${dx}% ${dy}%, rgba(255,255,255,0.25), transparent 40%)`
    }
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)'
    const shine = el.querySelector('[data-shine]')
    if (shine) shine.style.background = 'transparent'
  }

  return (
    <div className="[perspective:1200px] will-change-transform">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
      >
        <div data-shine className="pointer-events-none absolute inset-0 rounded-xl" />
        {children}
      </div>
    </div>
  )
}
