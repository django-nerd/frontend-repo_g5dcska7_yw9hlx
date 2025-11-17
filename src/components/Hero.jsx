import { useMemo } from 'react'

function Hero() {
  const gradients = useMemo(() => (
    'bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]'
  ), [])

  return (
    <section className={`relative overflow-hidden ${gradients} pt-24 pb-16`}> 
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm border border-blue-200">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            BCX — Websites that convert
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Launch fast. Look great. Sell more.
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We craft high‑performing landing pages, complete multi‑page sites, and conversion‑ready shop pages. Designed to be fast, responsive, and brand‑perfect.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
              Get a free quote
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
              Explore services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">2–3 week delivery</p>
              <p>Average project time</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">SEO friendly</p>
              <p>Built to be found</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Responsive</p>
              <p>Looks great on any device</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Performance</p>
              <p>Optimized for speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
