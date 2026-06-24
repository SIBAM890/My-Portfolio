import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { github, linkedin, email, location } = portfolioData.about;
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  return (
    <section id="contact" className="py-28 bg-white dark:bg-[#0a0a1a] relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] dark:opacity-[0.06]"
          style={{ background: 'conic-gradient(from 0deg, #4f8ef7, #00d4ff, #4f8ef7)', borderRadius: '40%' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4f8ef7] font-mono text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2">
            Let's Build Something
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project idea, collaboration, or just want to say hello? I'm all ears!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {[
                { icon: <FiMail />, label: 'Email', text: email, href: `mailto:${email}` },
                { icon: <FiMapPin />, label: 'Location', text: location },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#4f8ef7]/10 flex items-center justify-center text-[#4f8ef7] shrink-0 group-hover:bg-[#4f8ef7] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-[#4f8ef7] transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-white/5">
              <p className="text-sm text-gray-400 mb-4 font-medium">Find me online</p>
              <div className="flex gap-3">
                {[
                  { href: github, icon: <FiGithub size={18} />, label: 'GitHub' },
                  { href: linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                  { href: `mailto:${email}`, icon: <FiMail size={18} />, label: 'Email' },
                ].map(s => (
                  <motion.a
                    key={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:text-white hover:bg-[#4f8ef7] hover:border-[#4f8ef7] transition-all"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-7 rounded-2xl bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-white/5 shadow-xl"
            >
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0a0a1a]/60 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-[#4f8ef7] focus:ring-1 focus:ring-[#4f8ef7]/50 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0a0a1a]/60 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:border-[#4f8ef7] focus:ring-1 focus:ring-[#4f8ef7]/50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-[#4f8ef7] to-[#00d4ff] shadow-lg shadow-[#4f8ef7]/20 hover:shadow-[#4f8ef7]/40 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              >
                {status === 'idle' && <><FiSend size={15} /> Send Message</>}
                {status === 'sending' && <>Sending...</>}
                {status === 'sent' && <><FiCheck size={15} /> Sent! I'll reply soon 🚀</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
