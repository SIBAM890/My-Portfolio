import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FiBriefcase } from 'react-icons/fi';

const companyColors = {
  'Zaalima Development Pvt. Ltd.': 'from-blue-600 to-indigo-600',
  'NRSC, ISRO': 'from-orange-500 to-red-500',
  '3SKILL': 'from-green-500 to-teal-500',
  'CODEXINTERN': 'from-purple-500 to-violet-600',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-28 bg-white dark:bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-[#4f8ef7]/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">Experience</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Where I've Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
          {/* Animated scroll fill */}
          <motion.div
            className="absolute left-8 sm:left-10 top-0 w-px bg-gradient-to-b from-[#4f8ef7] to-[#00d4ff] origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
            style={{ height: '100%' }}
          />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 + 0.2 }}
                className="relative pl-20 sm:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-7 top-5 w-6 h-6 rounded-full bg-white dark:bg-[#0a0a1a] border-2 border-[#4f8ef7] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#4f8ef7]" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-gray-100 dark:border-white/5 shadow-md hover:shadow-xl hover:shadow-[#4f8ef7]/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-3 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${companyColors[exp.company] || 'from-[#4f8ef7] to-[#00d4ff]'}`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-500 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-[#4f8ef7] mt-1 shrink-0">›</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
