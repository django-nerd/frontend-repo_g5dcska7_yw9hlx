import Navbar from './components/Navbar'
import IGGLOStyleHero from './components/IGGLOStyleHero'
import ThreeServices from './components/ThreeServices'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Mascot from './components/Mascot'

function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-white relative">
      {/* Liquid glass global background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(236,72,153,0.14),transparent),radial-gradient(700px_400px_at_50%_110%,rgba(56,189,248,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <Navbar />
      <main>
        <IGGLOStyleHero />
        <ThreeServices />
        <CTA />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 mt-10 bg-transparent">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} BCX. All rights reserved.</p>
          <div className="text-sm text-white/60 flex items-center gap-4">
            <a href="#services" className="hover:text-white">Leistungen</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>

      {/* Site-wide companion mascot */}
      <Mascot />
    </div>
  )
}

export default App
