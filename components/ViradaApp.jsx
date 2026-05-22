// ============================================================
// ViradaApp — Hero secundário pro app vitalício (R$ 197)
// ============================================================

function ViradaApp() {
  const features = [
    { icon: <Icon.Chart className="w-4 h-4" />, label: 'Rastreio em 10s/dia', sub: 'Lança gasto em 3 toques' },
    { icon: <Icon.Layers className="w-4 h-4" />, label: 'Categorização inteligente', sub: 'Detecta padrão automático' },
    { icon: <Icon.Sparkle className="w-4 h-4" />, label: 'Sobra projetada', sub: 'Quanto vai sobrar até dia 30' },
    { icon: <Icon.Book className="w-4 h-4" />, label: 'Exporta Google Sheets', sub: '9 abas + gráficos prontos' },
    { icon: <Icon.Shield className="w-4 h-4" />, label: 'Dados criptografados', sub: 'Local first, sync opcional' },
    { icon: <Icon.Lock className="w-4 h-4" />, label: 'Acesso vitalício', sub: 'Sem mensalidade. Pra sempre.' },
  ];

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="aurora opacity-40" />
      <div className="wrap relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* LEFT: phone */}
          <Reveal>
            <div className="relative h-[560px] flex items-center justify-center" style={{ perspective: '1400px' }}>
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle at 50% 60%, rgba(240,168,48,0.32), transparent 65%)' }}
              />
              <div className="relative w-[280px] mockup-3d">
                <PhoneMockup />
              </div>

              {/* Float annotations */}
              <FloatingChip
                className="absolute top-10 left-2 md:-left-4"
                icon={<Icon.Sparkle className="w-3.5 h-3.5 text-gold" />}
                label="Projeção"
                value="Sobra R$ 1.240"
                delta="↑ em 18 dias"
                deltaTone="up"
              />
              <FloatingChip
                className="absolute bottom-12 right-2 md:-right-4"
                icon={<Icon.Chart className="w-3.5 h-3.5 text-gold" />}
                label="Exportar"
                value="9 abas · Sheets"
                delta="pronto pra contador"
                deltaTone="neutral"
              />
            </div>
          </Reveal>

          {/* RIGHT: copy */}
          <div>
            <Reveal>
              <Eyebrow>// Virada App · app.progetoprontoia.tech</Eyebrow>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="h-display text-5xl md:text-7xl text-white mt-6">
                Onde o método<br />
                <span className="font-serif-i text-gold">vira hábito</span>.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-lg text-white/70 max-w-xl font-light leading-relaxed">
                O ebook te ensina. O app te lembra. 10 segundos por dia pra rastrear, categorizar e projetar.
                Quem chega no app não volta pra planilha do Excel.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <Reveal delay={Math.min(i % 5 + 1, 5)} key={i}>
                  <div className="liquid-glass border border-white/[0.06] p-4 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-white text-[14.5px] font-medium leading-tight">{f.label}</div>
                      <div className="text-white/55 text-[12.5px] mt-0.5">{f.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('precos')}
                  className="btn-gold rounded-full px-6 py-3.5 text-[15px] inline-flex items-center gap-2"
                >
                  Quero o App por R$ 197
                  <Icon.Arrow className="w-4 h-4" />
                </button>
                <div className="text-[13px] text-white/55">
                  <span className="text-white/85">+R$ 97</span> via upsell se já comprou o Kit
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ViradaApp = ViradaApp;
