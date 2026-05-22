// ============================================================
// Mockup — Preview do ebook (capítulos clicáveis + capa girando)
// ============================================================

function MethodMockup() {
  const chapters = [
    { n: '01', title: 'A taxa que você paga sem saber', read: '6 min', preview: 'O brasileiro médio paga R$ 268/mês em juros sobre saldo do cartão sem perceber. A primeira virada não é cortar gastos — é tornar a taxa visível.' },
    { n: '02', title: 'O custo escondido da anuidade', read: '7 min', preview: 'A "anuidade isenta" do cartão premium é compensada por spread. Em média, R$ 1.040/ano por cartão. Cite BACEN Circular 4.553.' },
    { n: '03', title: 'A matemática do rotativo', read: '8 min', preview: 'A fórmula de juros compostos do rotativo: M = C × (1 + 0.1438)^n. Em 12 meses, um saldo de R$ 4.300 vira R$ 23.080.' },
    { n: '04', title: 'A lógica da parcela', read: '6 min', preview: 'Parcelar com cartão é tomar empréstimo da loja em CDC, não do banco. STJ Súmula 297/2004 explica por quê.' },
    { n: '05', title: 'Reorganização em 7 dias', read: '8 min', preview: 'O plano mínimo viável: 7 ações em 7 dias. Dia 1: portabilidade. Dia 2: rotativo → parcelado. Dia 3: anuidade.' },
    { n: '06', title: 'O método das 3 contas', read: '6 min', preview: 'Uma conta-fluxo, uma conta-reserva, uma conta-investimento. Por que separar bancos importa mais do que separar valores.' },
    { n: '07', title: 'Como manter a virada', read: '7 min', preview: 'Hábito > motivação. Três regras de revisão: semanal (10 min), mensal (30 min), trimestral (90 min).' },
  ];

  const [active, setActive] = useState(2);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="aurora opacity-30" />
      <div className="wrap relative">
        <SectionLabel
          align="left"
          kicker="// Preview · 7 capítulos do ebook"
          title={
            <>
              Não é teoria.<br />
              É <span className="font-serif-i text-gold">7 capítulos</span> aplicáveis.
            </>
          }
          sub="Clique num capítulo pra ler o resumo. O ebook completo abre direto no navegador — sem app, sem download, sem cadastro intermediário."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: chapter list */}
          <Reveal>
            <div className="liquid-glass border border-white/[0.06] p-2 md:p-3">
              {chapters.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 md:px-6 py-4 md:py-5 rounded-2xl transition-all duration-300 grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-center ${
                    active === i
                      ? 'bg-white/[0.04]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div
                    className={`font-serif-i text-3xl md:text-4xl leading-none ${
                      active === i ? 'text-gold' : 'text-white/35'
                    } transition-colors`}
                  >
                    {c.n}
                  </div>
                  <div>
                    <div
                      className={`font-serif-i text-lg md:text-2xl leading-tight ${
                        active === i ? 'text-white' : 'text-white/75'
                      } transition-colors`}
                    >
                      {c.title}
                    </div>
                    {active === i && (
                      <div className="mt-2 text-[14px] text-white/65 leading-relaxed font-light">
                        {c.preview}
                      </div>
                    )}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-white/35">
                    {c.read}
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Right: book + meta */}
          <Reveal delay={2} className="lg:sticky lg:top-32">
            <div className="relative" style={{ perspective: '1400px' }}>
              <div
                className="absolute -inset-10 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(240,168,48,0.18), transparent 60%)' }}
              />
              <div className="relative max-w-[280px] mx-auto book-spin">
                <BookCover />
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <BookStat n="21" label="Páginas" />
                <BookStat n="07" label="Capítulos" />
                <BookStat n="∞" label="Releituras" />
              </div>

              <div className="mt-8 text-center text-[11px] font-mono uppercase tracking-widest text-white/40">
                Acesso · Web + PDF · Vitalício
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BookStat({ n, label }) {
  return (
    <div className="text-center liquid-glass border border-white/[0.06] py-4 px-2">
      <div className="font-serif-i text-3xl md:text-4xl text-gold leading-none">{n}</div>
      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40">{label}</div>
    </div>
  );
}

window.MethodMockup = MethodMockup;
