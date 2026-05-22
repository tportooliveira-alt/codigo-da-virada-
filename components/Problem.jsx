// ============================================================
// Problem — Escada de dor (3 dores, dados verificáveis)
// ============================================================

function Problem() {
  const dores = [
    {
      n: '01',
      stat: '64%',
      statLabel: 'dos brasileiros',
      title: 'Ganha R$ 5.000 e termina o mês no zero.',
      body:
        'Não é falta de salário. É falta de método. Em 2025, 64% das famílias brasileiras gastaram mais do que receberam pelo menos uma vez no semestre.',
      source: 'CNC/SPC Brasil · PEIC 2025',
      tone: 'muted',
    },
    {
      n: '02',
      stat: '437%',
      statLabel: 'ao ano',
      title: 'O rotativo do cartão cobra 437% a.a.',
      body:
        'O brasileiro médio carrega R$ 4.300 no rotativo. Em 12 meses, esse saldo vira R$ 23.000 sem você comprar mais nada. E você nem percebeu.',
      source: 'BACEN · Estatísticas SCR · Outubro 2025',
      tone: 'danger',
    },
    {
      n: '03',
      stat: '80%',
      statLabel: 'segundo Harvard',
      title: 'Não é R$ 1.000 a mais. É R$ 1.000 a menos em juros.',
      body:
        'Todo curso promete enriquecer rápido. Os dados Harvard mostram o oposto: 80% dos brasileiros não fariam diferença com R$ 1.000 a mais — fariam com R$ 1.000 a menos saindo em juros invisíveis.',
      source: 'Harvard Business Review · Behavioral Finance 2024',
      tone: 'gold',
    },
  ];

  return (
    <section id="problema" className="relative py-24 md:py-36">
      {/* soft top fade */}
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="wrap">
        <SectionLabel
          align="left"
          kicker="// O problema · 3 fatos verificáveis"
          title={
            <>
              Não é você que <span className="font-serif-i text-gold">é ruim</span> com dinheiro.<br />
              É o sistema que foi <span className="font-serif-i">desenhado</span> assim.
            </>
          }
          sub="Antes do método, três fatos que ninguém te conta com fonte. Cada um deles tira da sua mão entre R$ 200 e R$ 800 por mês — silenciosamente."
          className="mb-16 md:mb-24"
        />

        <div className="space-y-3 md:space-y-4">
          {dores.map((d, i) => (
            <Reveal delay={Math.min(i + 1, 5)} key={i}>
              <DorRow {...d} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="mt-20 max-w-3xl">
            <div className="font-serif-i text-3xl md:text-5xl leading-tight text-white">
              <span className="text-white/55">A boa notícia:</span> os três se resolvem com o <span className="text-gold">mesmo método</span>.
            </div>
            <p className="mt-5 text-white/65 text-lg max-w-2xl font-light">
              Sete capítulos curtos. Vinte e uma páginas. Linguagem acadêmica, sem promessa de enriquecimento.
              Você lê em uma noite. Aplica no dia seguinte.
            </p>
            <button
              onClick={() => scrollTo('metodo')}
              className="mt-7 inline-flex items-center gap-2 text-gold hover:text-white transition-colors group"
            >
              <span className="border-b border-gold/40 group-hover:border-white/40 pb-0.5">Ver o método</span>
              <Icon.ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DorRow({ n, stat, statLabel, title, body, source, tone }) {
  const statColor =
    tone === 'danger' ? 'text-danger' : tone === 'gold' ? 'text-gold' : 'text-white';
  return (
    <div className="liquid-glass card-hover border border-white/[0.06] p-6 md:p-9 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start md:items-center">
      {/* Stat */}
      <div className="flex md:block items-baseline gap-3">
        <div className={`font-serif-i ${statColor} text-[68px] md:text-[96px] leading-none tracking-tight`}>
          {stat}
        </div>
        <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 md:mt-1">
          {statLabel}
        </div>
      </div>

      {/* Body */}
      <div className="md:pl-2">
        <div className="text-[11px] font-mono text-white/35 tracking-widest uppercase mb-2">// Dor {n}</div>
        <h3 className="font-serif-i text-2xl md:text-3xl text-white leading-tight">{title}</h3>
        <p className="mt-3 text-white/65 text-[15px] md:text-base leading-relaxed max-w-2xl font-light">
          {body}
        </p>
        <div className="mt-4 text-[10.5px] font-mono uppercase tracking-widest text-white/35">
          Fonte: {source}
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex w-12 h-12 rounded-full items-center justify-center border border-white/10 text-white/40">
        <Icon.Arrow className="w-4 h-4" />
      </div>
    </div>
  );
}

window.Problem = Problem;
