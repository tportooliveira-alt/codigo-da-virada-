// ============================================================
// Autor — Credibilidade do Thiago
// ============================================================

function Autor() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Portrait placeholder + meta */}
          <Reveal>
            <div className="liquid-glass border border-white/[0.06] p-3 relative overflow-hidden">
              <div
                className="aspect-[4/5] w-full rounded-2xl relative overflow-hidden noise"
                style={{
                  background:
                    'linear-gradient(160deg, #1a1310 0%, #0a0a0c 60%, #1a1310 100%)',
                }}
              >
                <div className="absolute inset-0 grid-lines opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full mb-4 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(240,168,48,0.2), rgba(212,138,31,0.05))',
                      border: '1px solid rgba(240,168,48,0.35)',
                    }}
                  >
                    <span className="font-serif-i text-gold text-6xl leading-none">T</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                    [ retrato · Thiago Cardoso ]
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/50">
                  <span>São Paulo · BR</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal>
              <Eyebrow>// Quem escreveu</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-display text-5xl md:text-7xl text-white mt-6 leading-[0.96]">
                Thiago Cardoso.<br />
                <span className="font-serif-i text-gold">11 anos</span> no Brasil financeiro.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-7 space-y-5 text-white/70 text-lg leading-relaxed max-w-2xl font-light">
                <p>
                  Engenheiro de software, 38 anos, ex-CLT que pagou R$ 18.700 em juros de cartão antes de
                  entender como o sistema realmente funcionava. Hoje desenvolve produtos financeiros pra
                  brasileiro que ganha bem e termina o mês no zero.
                </p>
                <p>
                  Não vendo enriquecimento. Vendo método. E garanto pelo único motivo que importa:
                  o método foi escrito depois que funcionou pra mim — não antes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 grid grid-cols-3 gap-3 max-w-xl">
                <BioStat n="1.842" label="Compradores" />
                <BioStat n="R$ 18,7k" label="Juros pagos antes do método" />
                <BioStat n="4,9★" label="Avaliação Kiwify" />
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-9 inline-flex items-center gap-3 text-[14px] text-white/75">
                <Icon.MessageDots className="w-5 h-5 text-gold" />
                <span>WhatsApp direto comigo nos primeiros 30 dias</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BioStat({ n, label }) {
  return (
    <div className="liquid-glass border border-white/[0.06] py-4 px-3 text-center">
      <div className="font-serif-i text-2xl md:text-3xl text-gold leading-none">{n}</div>
      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40 leading-tight">{label}</div>
    </div>
  );
}

window.Autor = Autor;
