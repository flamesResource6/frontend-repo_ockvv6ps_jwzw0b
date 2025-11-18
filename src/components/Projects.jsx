import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Dashboard',
    desc: 'A modular analytics platform with custom theming and real-time charts.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'Fintech Mobile UI',
    desc: 'Design system + cross-platform components for a payments app.',
    tags: ['Figma', 'iOS', 'Android'],
    link: '#',
  },
  {
    title: '3D Product Site',
    desc: 'High-converting product page with 3D interactions and scroll scenes.',
    tags: ['Spline', 'Framer Motion'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Projects</h2>
          <a href="#contact" className="text-blue-200/80 hover:text-white transition">Request case study →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              href={p.link}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10" />
              <div className="relative">
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-5" />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-blue-200/80 mt-1">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-blue-100/90 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
