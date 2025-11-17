import TiltCard from './TiltCard'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThreeServices() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch {
        setServices([])
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="relative py-20 bg-[#0b0f19] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" aria-hidden />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Leistungen</h2>
        <p className="mt-2 text-white/70 text-center max-w-2xl mx-auto">Landing Pages, Multi‑page Websites und Shop Pages mit moderner 3D‑Optik und Micro‑Interactions.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(services.length ? services : [
            { key: 'landing', name: 'Landing Pages', tagline: 'Schnell konvertierend', price: 899, features: ['Hero + Sections', 'Kontakt', 'SEO Basics']},
            { key: 'multi', name: 'Multi-page Websites', tagline: 'Skalierbar & klar', price: 1999, features: ['Mehrere Seiten', 'CMS ready', 'Animationen']},
            { key: 'shop', name: 'Shop Pages', tagline: 'Verkaufen mit Stil', price: 2499, features: ['Produktseiten', 'Checkout ready', 'Performance']},
          ]).map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard className="rounded-2xl p-0.5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="rounded-2xl p-6 bg-[#0f1529]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{s.name}</h3>
                      <p className="text-white/70">{s.tagline}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-white/50">ab</span>
                      <span className="text-2xl font-bold">${s.price}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="#contact" className="inline-flex px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90">Anfragen</a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
