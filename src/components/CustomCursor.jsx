import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      setIsVisible(true);
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      glow.style.transform = `translate(${glowX - 24}px, ${glowY - 24}px)`;
      animId = requestAnimationFrame(animate);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="hidden md:block"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}
    >
      {/* Outer glow */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '48px', height: '48px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          borderRadius: '50%',
          background: '#4f8ef7',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
