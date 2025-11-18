import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* subtle star field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="text-blue-200/70 text-sm">Available for freelance & full‑time opportunities</div>
        </div>
      </footer>
    </div>
  )
}

export default App
