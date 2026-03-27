import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const TECH_ICONS = [
  { label: 'Python', color: '#3776ab', symbol: 'Py' },
  { label: 'PyTorch', color: '#ee4c2c', symbol: 'PT' },
  { label: 'FastAPI', color: '#009688', symbol: 'FA' },
  { label: 'React', color: '#61dafb', symbol: 'Re' },
  { label: 'Docker', color: '#2496ed', symbol: '🐳' },
  { label: 'HuggingFace', color: '#ffcc00', symbol: '🤗' },
  { label: 'Vertex AI', color: '#4285f4', symbol: 'AI' },
  { label: 'Kafka', color: '#231f20', symbol: 'KF' },
];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const N = 80;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79,142,247,0.6)';
        ctx.fill();
      });
      // Draw constellation lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,142,247,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span className="text-[#4f8ef7]">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1.1em] bg-[#4f8ef7] ml-1 align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const { name, title, github, linkedin, email } = portfolioData.about;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-[#0a0a1a]/70 dark:via-[#0a0a1a]/80 dark:to-[#0a0a1a]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4f8ef7]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Orbiting tech icons */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        {TECH_ICONS.map((icon, i) => {
          const angle = (i / TECH_ICONS.length) * 2 * Math.PI;
          const rx = 340, ry = 220;
          const x = 50 + (rx / 8) * Math.cos(angle);
          const y = 50 + (ry / 5) * Math.sin(angle);
          const delay = i * 0.3;
          return (
            <motion.div
              key={icon.label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold font-mono text-white shadow-lg"
                style={{ background: `${icon.color}33`, border: `1px solid ${icon.color}55`, backdropFilter: 'blur(8px)' }}
              >
                {icon.symbol}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-green-500/10 dark:bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 mb-6"
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-green-500 inline-block"
          />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] bg-clip-text text-transparent">
            {name.split(' ')[0]}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-display text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-gray-200 mb-6 min-h-[2.5rem]"
        >
          <Typewriter texts={title} />
        </motion.div>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          BTech AI & ML @ Sri Sri University · ISRO Trainee · GDG Chapter Founder · Hackathon Veteran
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-display font-semibold text-white bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] shadow-xl shadow-[#4f8ef7]/30 hover:shadow-[#4f8ef7]/50 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="/Sibam_Prasad_Sahoo_CV.pdf"
            download
            className="px-7 py-3 rounded-full font-display font-semibold text-[#4f8ef7] border-2 border-[#4f8ef7]/40 hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/10 transition-all duration-300 flex items-center gap-2"
          >
            <FiDownload size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-5"
        >
          {[
            { href: github, icon: <FiGithub size={20} />, label: 'GitHub' },
            { href: linkedin, icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
            { href: `mailto:${email}`, icon: <FiMail size={20} />, label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              whileHover={{ y: -3, scale: 1.1 }}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-white/10 hover:text-[#4f8ef7] hover:border-[#4f8ef7]/50 transition-all"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-400 hover:text-[#4f8ef7] transition-colors z-10"
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
