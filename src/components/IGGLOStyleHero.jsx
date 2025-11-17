import ParallaxScene from './ParallaxScene'
import TiltCard from './TiltCard'
import { motion } from 'framer-motion'

export default function IGGLOStyleHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b0f19] text-white">
      <ParallaxScene />
      <div className="relative container mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              3D Web Experiences for Bold Brands
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-white/70 max-w-xl"
            >
              We design immersive sites with motion, depth and performance — inspired by the best in the industry.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90">
                Projekt anfragen
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10">
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"/>Performance</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-400"/>SEO</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-fuchsia-400"/>Branding</div>
            </div>
          </div>

          <div className="relative">
            <TiltCard className="rounded-2xl p-1 bg-gradient-to-br from-white/20 to-white/5 border border-white/10 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-[#0d1222]">
                <div className="relative aspect-[4/3]">
                  {/* Decorative 3D-ish composition */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
                    <div className="col-span-2 rounded-xl bg-white/5 border border-white/10"/>
                    <div className="rounded-xl bg-white/5 border border-white/10"/>
                    <div className="rounded-xl bg-white/5 border border-white/10"/>
                    <div className="col-span-2 rounded-xl bg-white/5 border border-white/10"/>
                    <div className="col-span-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 h-16"/>
                  </div>
                  <div className="absolute inset-0" style={{background:'radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.25), transparent 40%)'}}/>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
