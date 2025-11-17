function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#0b0f19]/60 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold text-white text-xl">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-gray-900">B</span>
          BCX
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Leistungen</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Kontakt</a>
          <a href="/test" className="hover:text-white">Status</a>
        </nav>
        <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 transition-colors text-sm">
          Anfragen
        </a>
      </div>
    </header>
  )
}

export default Navbar
