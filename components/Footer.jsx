// ============================================================
// CTA final + Footer + Sticky CTA mobile
// ============================================================

function CtaFinal() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div className="aurora opacity-60" />
        <div className="absolute inset-0 grid-lines opacity-50" />
      </div>
      <div className="wrap relative text-center">
        <Reveal>
          <Eyebrow className="mx-auto">// Última parada</Eyebrow>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="h-display text-[clamp(2.5rem,7vw,6rem)] text-white mt-7 max-w-5xl mx-auto">
            Você pode fechar essa página<br />
            e continuar pagando os{' '}
            <span className="font-serif-i text-gold">R$ 3.200</span>.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 text-lg text-white/65 max-w-2xl mx-auto font-light leading-relaxed">
            Ou pode pagar R$ 67 uma vez, ler em uma noite, aplicar amanhã,
            e ter de volta o equivalente em até 30 dias.
            <br className="hidden md:block" /> É só isso. Não tem outro lance.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo('precos')}
              className="btn-gold rounded-full px-8 py-4 text-base inline-flex items-center gap-2"
            >
              Quero o Kit Completo por R$ 67
              <Icon.Arrow className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('precos')}
              className="rounded-full px-6 py-4 text-white/85 hover:text-white transition-colors text-base"
            >
              ou começar com R$ 17 →
            </button>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-8 inline-flex items-center gap-2 text-[13px] text-white/45">
            <Icon.Shield className="w-4 h-4 text-gold" />
            <span>Garantia 30 dias incondicional · sem questionário</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-32 md:pb-16">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-white/55 text-sm max-w-xs leading-relaxed">
              Método acadêmico de educação financeira para brasileiros que ganham bem
              e terminam o mês no zero.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[11px] text-white/40">
              <span className="badge">SSL ativo</span>
              <span className="badge">LGPD</span>
            </div>
          </div>
          <FooterCol title="Produto" links={['Método', 'Preços', 'Virada App', 'Audiobook']} />
          <FooterCol title="Sobre" links={['Autor', 'FAQ', 'Suporte', 'Contato']} />
          <FooterCol title="Legal" links={['Termos', 'Privacidade', 'Reembolso', 'LGPD']} />
        </div>

        <div className="mt-14 pt-7 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/40">
          <div>© 2026 Código da Virada · codigodavirada.net.br · CNPJ XX.XXX.XXX/0001-XX</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Icon.Lock className="w-3.5 h-3.5"/>Pagamentos protegidos · Kiwify</span>
          </div>
        </div>

        <div className="mt-10 text-[11px] font-mono text-white/30 leading-relaxed max-w-3xl">
          * Fontes citadas: BACEN (Banco Central do Brasil) Estatísticas SCR · outubro 2025;
          Harvard Business Review Behavioral Finance 2024; CNC/SPC Brasil PEIC 2025;
          STJ Súmula 297/2004. Este produto é informacional e não substitui consultoria financeira individualizada.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <a href="#" className="text-white/70 hover:text-gold transition-colors text-[14px]">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Sticky CTA mobile ----------
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const heroBottom = 600;
      const pricing = document.getElementById('precos');
      const inPricing = pricing
        ? (() => {
            const r = pricing.getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
          })()
        : false;
      setShow(window.scrollY > heroBottom && !inPricing);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-30 sticky-shadow transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="px-4 pb-4 pt-3" style={{ background: 'linear-gradient(to top, #0a0a0c 70%, rgba(10,10,12,0))' }}>
        <button
          onClick={() => scrollTo('precos')}
          className="btn-gold w-full rounded-full py-3.5 text-[15px] inline-flex items-center justify-center gap-2"
        >
          Quero o Kit por R$ 67
          <Icon.Arrow className="w-4 h-4" />
        </button>
        <div className="mt-2 text-center text-[11px] text-white/50">
          <Icon.Shield className="w-3 h-3 inline mr-1 text-gold" />
          Garantia 30 dias · sem questionário
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CtaFinal, Footer, StickyCTA });
