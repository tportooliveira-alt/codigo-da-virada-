// ============================================================
// Solution — 3 frentes: Método (ebook), Ferramentas (PWAs), App
// ============================================================

function Solution() {
  const frentes = [
    {
      tag: '01 · Método',
      title: 'O ebook que se lê em uma noite.',
      sub: 'Sete capítulos acadêmicos. Linguagem clara. Sem promessa de enriquecer.',
      bullets: [
        '21 páginas, capítulos de 6–8 min',
        '7 técnicas testadas (BACEN, FGV, Stanford)',
        'Plano de 7 dias pra reorganizar a vida',
      ],
      icon: <Icon.Book className="w-5 h-5 text-gold" />,
      visual: 'book',
    },
    {
      tag: '02 · Ferramentas',
      title: '4 mini-apps que rodam no celular.',
      sub: 'Sem cadastro. Sem login. Instala como app e funciona offline.',
      bullets: [
        'Calculadora de juros do rotativo',
        'Mapeador de gastos invisíveis',
        'Simulador de quitação de dívida',
        'Plano 30 dias com lembretes',
      ],
      icon: <Icon.Layers className="w-5 h-5 text-gold" />,
      visual: 'pwa',
    },
    {
      tag: '03 · App vitalício',
      title: 'O Virada App.',
      sub: 'Onde tudo vira hábito. Exporta planilha Google Sheets com 9 abas.',
      bullets: [
        'Rastreio em 10 segundos por dia',
        'Categorização automática',
        'Atualizações vitalícias',
      ],
      icon: <Icon.Phone className="w-5 h-5 text-gold" />,
      visual: 'phone',
    },
  ];

  return (
    <section id="metodo" className="relative py-24 md:py-36">
      <div className="wrap">
        <SectionLabel
          align="left"
          kicker="// A solução · 3 frentes complementares"
          title={
            <>
              Não é um curso.<br />
              É um <span className="font-serif-i text-gold">ecossistema</span>.
            </>
          }
          sub="Um problema em três camadas exige três respostas. Você escolhe por onde começa — e migra entre elas no seu tempo."
          className="mb-20"
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {frentes.map((f, i) => (
            <Reveal delay={Math.min(i + 1, 5)} key={i}>
              <FrenteCard {...f} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FrenteCard({ tag, title, sub, bullets, icon, visual, index }) {
  return (
    <article
      className="liquid-glass card-hover border border-white/[0.06] p-7 md:p-8 flex flex-col h-full"
      style={{ minHeight: 540 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="badge badge-gold">{tag}</div>
        <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Visual */}
      <div className="mt-7 h-44 rounded-xl overflow-hidden relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
        <VisualForFrente kind={visual} />
      </div>

      {/* Copy */}
      <h3 className="font-serif-i text-2xl md:text-[28px] text-white mt-7 leading-tight">{title}</h3>
      <p className="mt-2 text-white/65 text-[15px] leading-relaxed font-light">{sub}</p>

      <ul className="mt-5 space-y-2.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/75">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7 text-[11px] font-mono text-white/35 uppercase tracking-widest">
        Inclui no Kit Completo (R$ 67)
      </div>
    </article>
  );
}

// ---------- mini-visuals per frente ----------
function VisualForFrente({ kind }) {
  if (kind === 'book') {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="aurora opacity-30" />
        {/* Editorial type stack */}
        <div className="relative font-serif-i text-center leading-[0.9]">
          <div className="text-white/15 text-[68px] absolute -top-2 left-1/2 -translate-x-1/2 select-none">cap.</div>
          <div className="text-white text-5xl">01</div>
          <div className="text-gold text-2xl mt-1 italic">→ 07</div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/30">
          <span>21 pp · pdf + web</span>
          <span>v 2.0</span>
        </div>
      </div>
    );
  }
  if (kind === 'pwa') {
    const apps = ['Juros', 'Gastos', 'Dívida', 'Plano'];
    return (
      <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
        {apps.map((a, i) => (
          <div
            key={i}
            className="rounded-lg flex flex-col items-center justify-center text-center"
            style={{
              background: i === 0
                ? 'linear-gradient(135deg, rgba(240,168,48,0.16), rgba(212,138,31,0.05))'
                : 'rgba(255,255,255,0.03)',
              border: i === 0 ? '1px solid rgba(240,168,48,0.35)' : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className={`w-6 h-6 rounded-md ${i === 0 ? 'bg-gold' : 'bg-white/15'}`} />
            <div className={`text-[10px] font-mono uppercase tracking-wider mt-1.5 ${i === 0 ? 'text-gold' : 'text-white/55'}`}>{a}</div>
          </div>
        ))}
      </div>
    );
  }
  // phone
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="aurora opacity-25" />
      <div className="relative w-24 h-44 rounded-2xl border border-white/15 p-1.5" style={{background:'linear-gradient(145deg, #1c1c20, #0c0c0e)'}}>
        <div className="w-full h-full rounded-xl bg-[#0a0a0c] overflow-hidden p-2 flex flex-col">
          <div className="text-[8px] font-mono text-white/40">VIRADA</div>
          <div className="text-gold font-serif-i text-lg leading-none mt-1">R$ 847</div>
          <div className="text-[8px] text-success">↑ sobra</div>
          <div className="mt-2 flex items-end gap-0.5 h-6">
            {[30,50,38,60,52,80].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`, background: i>3 ? '#f0a830' : 'rgba(255,255,255,0.18)'}}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.Solution = Solution;
