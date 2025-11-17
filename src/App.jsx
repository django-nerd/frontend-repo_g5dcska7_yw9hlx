import Navbar from './components/Navbar'
import IGGLOStyleHero from './components/IGGLOStyleHero'
import ThreeServices from './components/ThreeServices'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <main>
        <IGGLOStyleHero />
        <ThreeServices />
        <CTA />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 mt-10 bg-[#0b0f19]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} BCX. All rights reserved.</p>
          <div className="text-sm text-white/60 flex items-center gap-4">
            <a href="#services" className="hover:text-white">Leistungen</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
