import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-lg bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 ring-1 ring-white/20 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition" />
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Your Name</p>
            <p className="text-xs text-blue-200/70">UI/UX • Web • Software</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Hire me</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-xl">
          <div className="px-6 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-blue-100/90 py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 text-center">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}
