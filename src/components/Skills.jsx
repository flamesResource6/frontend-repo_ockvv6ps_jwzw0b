import { motion } from 'framer-motion'
import { Code, Palette, Boxes, LineChart } from 'lucide-react'

const skills = [
  { icon: Palette, title: 'UI/UX', items: ['Design systems', 'Prototyping', 'Accessibility'] },
  { icon: Code, title: 'Frontend', items: ['React', 'Tailwind', 'Animations'] },
  { icon: Boxes, title: 'Backend', items: ['APIs', 'Databases', 'Best practices'] },
  { icon: LineChart, title: 'Product', items: ['Metrics', 'Strategy', 'Roadmapping'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Expertise</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                <s.icon className="text-white" />
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-blue-200/80 text-sm">
                {s.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
