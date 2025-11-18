import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Gradient background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-400/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-cyan-500/10 via-blue-500/10 to-indigo-400/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* Spline 3D scene */}
      <div className="relative z-10 grid md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-10">
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            UI/UX Designer, Web Developer, and Problem Solver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-lg text-blue-100/90 max-w-xl"
          >
            I craft delightful interfaces and robust web experiences with a focus on accessibility, performance, and storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_34px_rgba(255,255,255,0.25)] transition">View work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">Get in touch</a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 flex items-center gap-6 text-blue-200/80"
          >
            <div>
              <p className="text-2xl font-bold text-white">50+ projects</p>
              <p className="text-xs">delivered end-to-end</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">7+ years</p>
              <p className="text-xs">design & development</p>
            </div>
          </motion.div>
        </div>

        {/* 3D canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 relative h-[480px] md:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40"
        >
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* sheen overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
