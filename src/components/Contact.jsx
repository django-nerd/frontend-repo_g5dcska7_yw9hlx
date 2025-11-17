import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Danke! Wir melden uns innerhalb von 24 Stunden.' })
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus({ ok: false, msg: data.detail || 'Etwas ist schiefgelaufen.' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0b0f19] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Erzähl uns von deinem Projekt</h2>
          <p className="mt-3 text-white/70 text-center">Schnelles, unverbindliches Angebot.</p>

          <form onSubmit={submit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur">
            <div>
              <label className="block text-sm font-medium text-white/80">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-blue-500 focus:border-blue-500" placeholder="Max Mustermann" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">E-Mail</label>
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-blue-500 focus:border-blue-500" placeholder="max@firma.de" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">Firma</label>
              <input value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-blue-500 focus:border-blue-500" placeholder="BCX GmbH" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">Leistung</label>
              <select value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 text-white focus:ring-blue-500 focus:border-blue-500">
                <option value="">Bitte wählen</option>
                <option value="Landing Pages">Landing Pages</option>
                <option value="Multi-page Websites">Multi-page Websites</option>
                <option value="Shop Pages">Shop Pages</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-white/80">Nachricht</label>
              <textarea required rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:ring-blue-500 focus:border-blue-500" placeholder="Kurzbeschreibung, Ziele, Budget..." />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button disabled={loading} className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 disabled:opacity-60">
                {loading ? 'Senden...' : 'Nachricht senden'}
              </button>
              {status && (
                <p className={`${status.ok ? 'text-emerald-400' : 'text-red-400'} text-sm`}>{status.msg}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
