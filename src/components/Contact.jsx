import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit - can be wired to backend email API later
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 700)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let’s build something great</h2>
        <p className="text-blue-200/80 mb-10">Tell me about your project, timeline, and goals. I typically reply within 24 hours.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <input placeholder="Company / Website" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea required rows="5" placeholder="Tell me about your project" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500/50" />
          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-[0_14px_34px_rgba(255,255,255,0.25)] transition">Send message</button>
            <span className="text-blue-200/80 text-sm">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
