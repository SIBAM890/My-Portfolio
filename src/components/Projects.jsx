import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const categoryTagColors = {
  'Open Source': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  'Hackathon': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Local LLM': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Production': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'University Tool': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  'Fintech': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Community Tool': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  'AI': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'Cloud': 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'Cultural Tech': 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  'SaaS': 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  'LegalTech': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
};

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:shadow-[#4f8ef7]/10 dark:hover:shadow-[#4f8ef7]/10 transition-all duration-400 overflow-hidden cursor-default flex flex-col gap-4"
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl border border-[#4f8ef7]/0 group-hover:border-[#4f8ef7]/40 transition-all duration-300 pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.06) 0%, rgba(0,212,255,0.04) 100%)' }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-[#4f8ef7] transition-colors">
              {project.name}
            </h3>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] text-white uppercase tracking-wider shadow">
                ⭐ Featured
              </span>
            )}
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl text-gray-400 hover:text-[#4f8ef7] hover:bg-[#4f8ef7]/10 transition-all shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <FiGithub size={18} />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>

      {/* Category badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.categoryTags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${categoryTagColors[tag] || 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 border-transparent'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-white/5">
        <FiClock size={11} />
        <span>Built in {project.buildTime}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-28 bg-gray-50 dark:bg-[#0d0d2b]/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4f8ef7]/3 rounded-full blur-3xl" />
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
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">Projects</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Things I've Built
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            From hackathon MVPs to production-grade systems — all built with obsession.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
