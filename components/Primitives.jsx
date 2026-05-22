// ============================================================
// Primitives — shared hooks, icons, helpers
// ============================================================

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---------- useReveal: blur->focus on scroll-in ----------
function useReveal(opts = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px 0px -50px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal();
  const delayCls = delay ? `reveal-delay-${delay}` : '';
  return (
    <Tag ref={ref} className={`reveal ${delayCls} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// ---------- CountUp ----------
function CountUp({ to, duration = 1600, prefix = '', suffix = '', decimals = 0, separator = '.' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = useMemo(() => {
    const n = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
    // add thousands separator
    const parts = n.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(',');
  }, [val, decimals, separator]);

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

// ---------- Icons (inline SVG, stroke-based) ----------
const Icon = {
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  ),
  ArrowDown: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
  ),
  Lock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l1.5 5L18 9l-4.5 1L12 15l-1.5-5L6 9l4.5-1z"/><path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/></svg>
  ),
  Book: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 4a2 2 0 0 1 2-2h6v18H4a2 2 0 0 0-2 2V4z"/><path d="M22 4a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V4z"/></svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  ),
  Layers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  Headphones: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z"/></svg>
  ),
  Chart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Minus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  MessageDots: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  ),
  Send: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  Quote: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7.17 6.17C5.42 7.36 4 9.5 4 12.5V18h6v-6H6.5c0-1.83 1.17-3.5 3-4.33L7.17 6.17zm10 0c-1.75 1.19-3.17 3.33-3.17 6.33V18h6v-6h-3.5c0-1.83 1.17-3.5 3-4.33l-2.33-1.5z"/></svg>
  ),
  Spark: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
  ),
  Dot: (p) => (<svg viewBox="0 0 8 8" {...p}><circle cx="4" cy="4" r="3" fill="currentColor"/></svg>),
  PDF: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  ),
};

// ---------- Section header ----------
function Eyebrow({ children, className = '' }) {
  return (
    <div className={`badge ${className}`}>
      <Icon.Dot className="w-2 h-2 text-gold" />
      <span className="font-mono">{children}</span>
    </div>
  );
}

function SectionLabel({ kicker, title, sub, className = '', align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      <Reveal><Eyebrow>{kicker}</Eyebrow></Reveal>
      <Reveal delay={1}>
        <h2 className="h-display text-5xl md:text-7xl mt-6 text-white">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={2}>
          <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed font-light">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

// ---------- Logo wordmark ----------
function Logo({ className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex w-8 h-8 items-center justify-center rounded-lg" style={{background: 'linear-gradient(135deg, #f0a830, #d48a1f)'}}>
        <span className="font-serif-i text-[#1a0f00] text-xl leading-none mt-0.5">v</span>
      </span>
      <span className="text-white tracking-tight">
        <span className="font-serif-i text-[1.15rem] leading-none">Código</span>
        <span className="text-white/55 font-light text-[.95rem]"> da Virada</span>
      </span>
    </a>
  );
}

// ---------- Smooth-scroll link ----------
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 12;
  window.scrollTo({ top, behavior: 'smooth' });
}

// export
Object.assign(window, {
  useReveal, Reveal, CountUp, Icon, Eyebrow, SectionLabel, Logo, scrollTo,
});
