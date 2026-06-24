import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from '../hooks/useCountUp';
import { portfolioData } from '../data/portfolio';
import { FiMapPin, FiMail } from 'react-icons/fi';

function StatCard({ label, value, suffix, inView }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="font-display font-bold text-4xl bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] bg-clip-text text-transparent">
        {inView ? <CountUp end={value} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const { story, stats, location, email } = portfolioData.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-[#0d0d2b]/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#4f8ef7]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00d4ff]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">About</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Who Am I?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative pl-6 border-l-2 border-[#4f8ef7]/60">
              <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">{story}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              {[
                { icon: <FiMapPin size={15} />, text: location },
                { icon: <FiMail size={15} />, text: email, href: `mailto:${email}` },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="text-[#4f8ef7]">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#4f8ef7] transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Code block easter egg */}
            <div className="rounded-xl p-4 bg-[#0d0d2b] dark:bg-black/40 border border-white/5 font-mono text-xs overflow-x-auto">
              <span className="text-gray-500">// My Operating Principle</span>
              <br />
              <span className="text-purple-400">const</span>{' '}
              <span className="text-[#00d4ff]">sibam</span>{' '}
              <span className="text-gray-300">= {'{'}</span>
              <br />
              <span className="text-gray-300 ml-4">mission: </span>
              <span className="text-green-400">"Turn ideas into systems that matter"</span>
              <span className="text-gray-300">,</span>
              <br />
              <span className="text-gray-300 ml-4">mode: </span>
              <span className="text-green-400">"Build first, optimize later"</span>
              <span className="text-gray-300">,</span>
              <br />
              <span className="text-gray-300">{'}'}</span>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <StatCard key={s.label} {...s} inView={inView} />
            ))}

            {/* University badge */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-[#4f8ef7]/10 to-[#00d4ff]/10 border border-[#4f8ef7]/20">
              <div className="font-display font-semibold text-slate-800 dark:text-white text-sm">
                🎓 Sri Sri University
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                BTech AI & ML · 2024–2028 · Cuttack, Odisha
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '50%' } : {}}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff]"
                  />
                </div>
                <span className="text-xs text-[#4f8ef7] font-mono">50%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
