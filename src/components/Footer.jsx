import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { github, linkedin, name } = portfolioData.about;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0a1a] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <motion.div whileHover={{ scale: 1.05 }} className="text-sm font-display font-semibold bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] bg-clip-text text-transparent">
          SPS.dev
        </motion.div>

        {/* Center */}
        <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
          Built with React &amp; obsession
          <FiHeart className="text-red-400 inline" size={12} />
          · © {year} {name}
        </p>

        {/* Socials */}
        <div className="flex gap-4">
          {[
            { href: github, icon: <FiGithub size={16} />, label: 'GitHub' },
            { href: linkedin, icon: <FiLinkedin size={16} />, label: 'LinkedIn' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gray-400 hover:text-[#4f8ef7] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Konami hint */}
      <p className="text-center text-gray-300 dark:text-gray-800 text-[10px] mt-4 font-mono">
        ↑↑↓↓←→←→BA · try it 👾
      </p>
    </footer>
  );
}
