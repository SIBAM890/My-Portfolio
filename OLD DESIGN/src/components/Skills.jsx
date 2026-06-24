import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

// Each category: colors for light + dark mode
const categoryStyles = {
  'Languages': {
    dot: '#8b5cf6',
    light: { bg: '#f5f3ff', text: '#6d28d9', border: '#ddd6fe' },
    dark:  { bg: 'rgba(139,92,246,0.15)', text: '#c4b5fd', border: 'rgba(139,92,246,0.35)' },
    hover: '#7c3aed',
  },
  'AI/ML': {
    dot: '#3b82f6',
    light: { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
    dark:  { bg: 'rgba(59,130,246,0.15)', text: '#93c5fd', border: 'rgba(59,130,246,0.35)' },
    hover: '#2563eb',
  },
  'NLP': {
    dot: '#06b6d4',
    light: { bg: '#ecfeff', text: '#0e7490', border: '#a5f3fc' },
    dark:  { bg: 'rgba(6,182,212,0.15)', text: '#67e8f9', border: 'rgba(6,182,212,0.35)' },
    hover: '#0891b2',
  },
  'Backend': {
    dot: '#10b981',
    light: { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' },
    dark:  { bg: 'rgba(16,185,129,0.15)', text: '#6ee7b7', border: 'rgba(16,185,129,0.35)' },
    hover: '#059669',
  },
  'Frontend': {
    dot: '#ec4899',
    light: { bg: '#fdf2f8', text: '#9d174d', border: '#fbcfe8' },
    dark:  { bg: 'rgba(236,72,153,0.15)', text: '#f9a8d4', border: 'rgba(236,72,153,0.35)' },
    hover: '#db2777',
  },
  'DevOps': {
    dot: '#f97316',
    light: { bg: '#fff7ed', text: '#9a3412', border: '#fed7aa' },
    dark:  { bg: 'rgba(249,115,22,0.15)', text: '#fdba74', border: 'rgba(249,115,22,0.35)' },
    hover: '#ea580c',
  },
  'Databases': {
    dot: '#6366f1',
    light: { bg: '#eef2ff', text: '#3730a3', border: '#c7d2fe' },
    dark:  { bg: 'rgba(99,102,241,0.15)', text: '#a5b4fc', border: 'rgba(99,102,241,0.35)' },
    hover: '#4f46e5',
  },
  'AI Tools': {
    dot: '#0ea5e9',
    light: { bg: '#f0f9ff', text: '#0369a1', border: '#bae6fd' },
    dark:  { bg: 'rgba(14,165,233,0.15)', text: '#7dd3fc', border: 'rgba(14,165,233,0.35)' },
    hover: '#0284c7',
  },
  'Other': {
    dot: '#64748b',
    light: { bg: '#f8fafc', text: '#475569', border: '#e2e8f0' },
    dark:  { bg: 'rgba(100,116,139,0.15)', text: '#94a3b8', border: 'rgba(100,116,139,0.35)' },
    hover: '#475569',
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const pill = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show:   { opacity: 1, scale: 1,   y: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
};

function SkillPill({ skill, style }) {
  return (
    <motion.span
      variants={pill}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group relative px-3.5 py-1.5 rounded-full text-sm font-semibold border cursor-default transition-all duration-200 shadow-sm hover:shadow-lg hover:text-white"
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderColor: style.border,
        '--hover-bg': style.hover,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = style.hover;
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.borderColor = style.hover;
        e.currentTarget.style.boxShadow = `0 0 16px ${style.hover}66`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = style.bg;
        e.currentTarget.style.color = style.text;
        e.currentTarget.style.borderColor = style.border;
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { skills } = portfolioData;

  // Reactively track dark mode
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-white dark:bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">Skills</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Tech Arsenal
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            Hover any skill to see it light up. Always learning more.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], ci) => {
            const styles = categoryStyles[category] || categoryStyles['Other'];
            const modeStyle = isDark ? styles.dark : styles.light;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.07 }}
              >
                {/* Label row */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: styles.dot }}
                  />
                  <span className="font-display font-semibold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
                  <span className="text-[11px] font-mono text-gray-400 dark:text-slate-600">
                    {items.length} skills
                  </span>
                </div>

                {/* Pills */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="flex flex-wrap gap-2.5"
                >
                  {items.map(skill => (
                    <SkillPill
                      key={skill}
                      skill={skill}
                      style={{ ...modeStyle, hover: styles.hover }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
