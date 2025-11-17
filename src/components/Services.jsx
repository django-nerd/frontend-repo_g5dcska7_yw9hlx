import { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    loadServices()
  }, [])

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">What we build</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Choose the perfect package for your business goals.</p>

        {loading ? (
          <p className="text-center text-gray-500 mt-10">Loading services...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.key} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">{s.name}</h3>
                <p className="mt-1 text-gray-600">{s.tagline}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Starting at</span>
                    <p className="text-2xl font-bold text-gray-900">${'{'}s.price{'}'}</p>
                  </div>
                  <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Get started</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
