// ============================================================
// TrustBar — institutional citations (BACEN, Harvard, etc.)
// ============================================================

function TrustBar() {
  const items = [
    { name: 'BACEN', sub: 'Banco Central do Brasil' },
    { name: 'Harvard', sub: 'Business Review' },
    { name: 'Stanford', sub: 'Behavioral Lab' },
    { name: 'McKinsey', sub: 'Quarterly · 2025' },
    { name: 'SPC Brasil', sub: 'Indicadores' },
    { name: 'STJ', sub: 'Súm. 297/2004' },
  ];
  return (
    <section className="relative py-14 md:py-20 border-y border-white/[0.06]">
      <div className="wrap">
        <Reveal>
          <div className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-white/40">
            Método verificado por fontes públicas e acadêmicas
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {items.map((it, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="font-serif-i text-2xl md:text-[28px] text-white/85 group-hover:text-gold transition-colors leading-none">
                  {it.name}
                </div>
                <div className="mt-1.5 text-[10.5px] font-mono uppercase tracking-widest text-white/35">
                  {it.sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.TrustBar = TrustBar;
