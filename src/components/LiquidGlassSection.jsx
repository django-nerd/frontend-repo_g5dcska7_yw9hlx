import { motion } from 'framer-motion'

// Wrapper that applies liquid glass cards and section chrome
export default function LiquidGlassSection({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      {/* section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl opacity-30" />
      </div>
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-2 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )}
