import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const lines = [
  '> Initializing Sibam_OS v2.0.26...',
  '> Loading AI engines............[OK]',
  '> Connecting to ISRO satellite data...[OK]',
  '> Starting GDG On Campus SSU......[OK]',
  '> Running hackathon.exe (10+ instances)...[OK]',
  '> Loading portfolio modules.......[OK]',
  '',
  '   ██╗  ██╗███████╗██╗     ██╗      ██████╗ ',
  '   ██║  ██║██╔════╝██║     ██║     ██╔═══██╗',
  '   ███████║█████╗  ██║     ██║     ██║   ██║',
  '   ██╔══██║██╔══╝  ██║     ██║     ██║   ██║',
  '   ██║  ██║███████╗███████╗███████╗╚██████╔╝',
  '   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ',
  '',
  '> Hello, World! 👾',
  '> Easter egg unlocked! You know the Konami Code!',
  '> Access granted to Sibam\'s secret stash of ideas 🚀',
  '> [Press any key to exit]',
];

export default function KonamiCode() {
  const [seq, setSeq] = useState([]);
  const [active, setActive] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      if (active) {
        setActive(false);
        setVisibleLines([]);
        return;
      }
      setSeq(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(',') === KONAMI.join(',')) {
          setActive(true);
          return [];
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines(prev => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { setActive(false); setVisibleLines([]); }}
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        >
          <div className="max-w-3xl w-full p-8 font-mono text-sm text-green-400 space-y-1">
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className={line.includes('Hello') || line.includes('Easter') || line.includes('Access') ? 'text-cyan-400 font-bold' : ''}
              >
                {line || '\u00A0'}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          </div>
          <p className="absolute bottom-8 text-gray-600 text-xs font-mono">Click or press any key to exit</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
