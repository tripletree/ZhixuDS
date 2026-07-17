import React from 'react';
/* Count-up number on scroll into view (cubic ease-out) — from CountUp.vue */
export function CountUp({ to, duration = 1.6 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let started = false;
    const run = () => {
      if (reduced) { setVal(to); return; }      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        setVal(Math.round((1 - Math.pow(1 - t, 3)) * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) { started = true; run(); }
    }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    // Hidden iframes (thumbnail captures) never fire IO — fall back to the final value.
    const t = setTimeout(() => { if (!started) { started = true; setVal(to); } }, 600);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, [to, duration]);
  return <span ref={ref}>{val}</span>;
}

/* Scroll-triggered reveal: fade + upward float, calm ease — from Reveal.vue */
export function Reveal({ y = 26, x = 0, delay = 0, duration = 0.75, children, style }) {
  const [shown, setShown] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setShown(true); return; }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    // Hidden iframes (thumbnail captures) never fire IO — reveal after a grace period.
    const t = setTimeout(() => setShown(true), 600);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translate(${x}px, ${y}px)`,
      transition: `opacity ${duration}s var(--ease-calm) ${delay}s, transform ${duration}s var(--ease-calm) ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}
