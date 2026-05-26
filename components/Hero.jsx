// ============================================================
// Hero — magnético, aurora animada, cursor-follow gradient
// ============================================================

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="wrap">
        <nav
          className={`flex items-center justify-between rounded-full transition-all duration-300 ${
            scrolled
              ? 'liquid-glass px-3.5 py-2.5'
              : 'px-1 py-1'
          }`}
        >
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/65">
            <a className="hover:text-white transition-colors" href="#problema">O problema</a>
            <a className="hover:text-white transition-colors" href="#metodo">Método</a>
            <a className="hover:text-white transition-colors" href="#precos">Preços</a>
            <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
          </div>
          <button
            onClick={() => scrollTo('precos')}
            className="btn-gold rounded-full text-sm px-4 py-2 md:px-5 md:py-2.5"
          >
            <span className="hidden sm:inline">Quero o Kit </span>R$ 67
          </button>
        </nav>
      </div>
    </header>
  );
}

// ---------- Cursor-follow halo ----------
function CursorHalo() {
  const ref = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(240,168,48,0.10), transparent 60%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="aurora" />
        <div className="aurora aurora-slow" />
        <div
          className="absolute inset-x-0 bottom-0 h-40 z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0c)' }}
        />
      </div>

      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>// Método verificado · BACEN · Harvard · Stanford</Eyebrow>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="h-display text-[clamp(2.5rem,7.2vw,5.6rem)] mt-6 text-white">
                Você pagou{' '}
                <span className="font-serif-i text-gold">R$ 3.200</span>
                <br className="hidden sm:block" />
                <span className="font-serif-i"> em juros</span> este ano <br className="hidden sm:block" />
                sem perceber.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-7 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light">
                O Código da Virada mostra exatamente como bancos brasileiros extraem isso de você —
                e o método de <span className="text-white">7 capítulos</span> pra parar até o próximo boleto.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo('precos')}
                  className="btn-gold rounded-full px-7 py-4 text-[15px] inline-flex items-center gap-2.5"
                >
                  Quero o Kit Completo por R$ 67
                  <Icon.Arrow className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('precos')}
                  className="rounded-full px-5 py-4 text-[15px] text-white/85 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <span>Começar com o ebook por R$ 17</span>
                  <Icon.Arrow className="w-4 h-4" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/55">
                <div className="inline-flex items-center gap-2">
                  <Icon.Shield className="w-4 h-4 text-gold" />
                  <span>Garantia 30 dias incondicional</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Icon.Lock className="w-4 h-4 text-gold" />
                  <span>Compra protegida Kiwify</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Icon.Sparkle className="w-4 h-4 text-gold" />
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-gold/40 bg-gold/15 flex items-center justify-center shrink-0">
                  <Icon.Sparkle className="w-4 h-4 text-gold" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">
                    Método com base em 8 instituições de pesquisa
                  </div>
                  <div className="text-white/50 text-xs">BACEN · Harvard · Stanford · McKinsey · Serasa · SPC · Banco Mundial · Universidade de Michigan</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: mockup stack */}
          <Reveal delay={2} className="relative">
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Hero Mockup ----------
function HeroMockup() {
  return (
    <div className="relative h-[520px] md:h-[600px]" style={{ perspective: '1400px' }}>
      {/* glow */}
      <div
        className="absolute inset-10 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(240,168,48,0.28), transparent 65%)' }}
      />

      {/* Book — back layer */}
      <div className="absolute right-2 md:right-4 top-4 w-[230px] md:w-[280px] book-spin" style={{ transformOrigin: 'center' }}>
        <BookCover />
      </div>

      {/* Phone — front, floating */}
      <div className="absolute left-0 md:left-4 bottom-2 w-[230px] md:w-[270px] mockup-3d" style={{ transformOrigin: 'center' }}>
        <PhoneMockup />
      </div>

      {/* Floating chips */}
      <FloatingChip
        className="absolute top-6 left-2 md:left-0"
        icon={<Icon.Chart className="w-3.5 h-3.5 text-gold" />}
        label="Juros economizados"
        value="R$ 3.241"
        delta="↑ neste mês"
        deltaTone="up"
      />
      <FloatingChip
        className="absolute bottom-20 right-2 md:right-0"
        icon={<Icon.Sparkle className="w-3.5 h-3.5 text-gold" />}
        label="Cap. 04 · Cartão"
        value="Concluído"
        delta="6 min de leitura"
        deltaTone="neutral"
      />
    </div>
  );
}

function FloatingChip({ className, icon, label, value, delta, deltaTone }) {
  const tone =
    deltaTone === 'up'
      ? 'text-success'
      : deltaTone === 'down'
      ? 'text-danger'
      : 'text-white/50';
  return (
    <div className={`liquid-glass px-3.5 py-3 min-w-[170px] ${className}`}>
      <div className="flex items-center gap-2 text-[11px] text-white/55 font-mono uppercase tracking-wider">
        {icon} {label}
      </div>
      <div className="mt-1 text-white text-base font-medium tracking-tight">{value}</div>
      <div className={`text-[11px] mt-0.5 ${tone}`}>{delta}</div>
    </div>
  );
}

// ---------- Book Cover (placeholder, editorial) ----------
function BookCover() {
  return (
    <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* spine shadow */}
      <div
        className="absolute -left-1 top-2 bottom-2 w-2 rounded-l-sm"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}
      />
      <div
        className="relative rounded-[6px] overflow-hidden aspect-[2/3]"
        style={{
          boxShadow:
            '0 30px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(240,168,48,0.25), 0 0 40px rgba(240,168,48,0.15)',
        }}
      >
        {/* Capa real do ebook Premium */}
        <img
          src="assets/CAPA_LIVRO_PREMIUM.jpg"
          alt="O Código da Virada Financeira — capa do ebook"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Sutil vinheta inferior */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.28) 100%)' }}
        />
        {/* hairline border premium */}
        <div className="absolute inset-2 border border-white/10 rounded-[3px] pointer-events-none" />
      </div>
    </div>
  );
}

// ---------- Phone Mockup ----------
function PhoneMockup() {
  return (
    <div
      className="relative aspect-[9/19] rounded-[2.6rem] p-2"
      style={{
        background: 'linear-gradient(145deg, #1c1c20, #0c0c0e)',
        boxShadow:
          '0 30px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(240,168,48,0.2)',
      }}
    >
      {/* notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />
      {/* screen */}
      <div className="w-full h-full rounded-[2.1rem] overflow-hidden relative" style={{ background: '#0a0a0c' }}>
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative z-10 px-4 pt-10 pb-4 h-full flex flex-col">
          {/* status bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-white/60 mb-4">
            <span>9:41</span>
            <span>Virada</span>
            <span>●●●</span>
          </div>

          {/* title */}
          <div className="text-white">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">Outubro 2026</div>
            <div className="font-serif-i text-2xl mt-1 leading-tight">Sobra do<br/>mês</div>
          </div>

          {/* big number */}
          <div className="mt-3 text-gold font-serif text-[40px] leading-none tracking-tight">
            R$ 847
          </div>
          <div className="text-[11px] text-success mt-1">↑ 312% vs. setembro</div>

          {/* mini chart */}
          <div className="mt-5 flex items-end gap-1.5 h-16">
            {[20, 32, 24, 40, 28, 52, 48, 60, 56, 72, 64, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i >= 9
                      ? 'linear-gradient(180deg, #f0a830, #d48a1f)'
                      : 'rgba(255,255,255,0.12)',
                }}
              />
            ))}
          </div>

          {/* categories */}
          <div className="mt-5 space-y-2.5 text-[11px]">
            {[
              { l: 'Cartão crédito', v: 'R$ 1.240', tone: 'danger' },
              { l: 'Aluguel', v: 'R$ 1.800', tone: 'muted' },
              { l: 'Sobras → Investir', v: 'R$ 847', tone: 'success' },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-white/65">{r.l}</span>
                <span
                  className={
                    r.tone === 'danger'
                      ? 'text-danger font-medium'
                      : r.tone === 'success'
                      ? 'text-success font-medium'
                      : 'text-white/70'
                  }
                >
                  {r.v}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="rounded-xl px-3 py-2.5 text-center text-[11px] font-medium" style={{background:'linear-gradient(135deg, #f0a830, #d48a1f)', color:'#1a0f00'}}>
              Exportar planilha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NavBar, CursorHalo, Hero });
