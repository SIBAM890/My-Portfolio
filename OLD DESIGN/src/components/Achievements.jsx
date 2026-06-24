import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const achievementIcons = [
  '🚀', '🏆', '⚡', '🎯', '🌟', '🌐'
];

const achievementGradients = [
  'from-blue-500/10 to-indigo-500/10 border-blue-500/20',
  'from-purple-500/10 to-violet-500/10 border-purple-500/20',
  'from-cyan-500/10 to-teal-500/10 border-cyan-500/20',
  'from-orange-500/10 to-amber-500/10 border-orange-500/20',
  'from-green-500/10 to-emerald-500/10 border-green-500/20',
  'from-pink-500/10 to-rose-500/10 border-pink-500/20',
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-28 bg-gray-50 dark:bg-[#0d0d2b]/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] -translate-x-1/2 bg-gradient-to-b from-[#4f8ef7]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">Achievements</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Milestones & Recognition
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            From founding Google Developer Groups to standing at ISRO.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${achievementGradients[i % achievementGradients.length]} border backdrop-blur-sm transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{achievementIcons[i % achievementIcons.length]}</div>

              {/* Content */}
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                {ach.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {ach.description}
              </p>

              {/* Decorative corner element */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-current opacity-10" />
            </motion.div>
          ))}
        </div>

        {/* Highlight stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#4f8ef7]/10 via-[#00d4ff]/5 to-[#4f8ef7]/10 border border-[#4f8ef7]/20 text-center"
        >
          <p className="font-display font-semibold text-slate-800 dark:text-white text-lg">
            🎓 CGPA:{' '}
            <span className="bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] bg-clip-text text-transparent">9.1 / 10</span>
            {' '}· BTech AI & ML · Sri Sri University
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Maintaining academic excellence while building production systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}
