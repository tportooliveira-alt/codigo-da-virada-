// ============================================================
// KitInclusos — 7 PDFs + 4 PWAs + Ebook web + Hub
// ============================================================

function KitInclusos() {
  const pdfs = [
    { n: '01', title: 'Mapa de Juros do Cartão', pages: 14 },
    { n: '02', title: 'Anatomia da Anuidade', pages: 11 },
    { n: '03', title: 'Portabilidade Salário', pages: 9 },
    { n: '04', title: 'Quitação por Negociação', pages: 16 },
    { n: '05', title: 'O Método das 3 Contas', pages: 12 },
    { n: '06', title: 'Investir com R$ 200', pages: 18 },
    { n: '07', title: 'Plano 12 Meses', pages: 22 },
  ];

  const pwas = [
    { name: '60 Ideias de Renda Extra', sub: 'Quiz + filtros por capital', cover: 'assets/CAPA_BONUS_1_RENDA_EXTRA.jpg' },
    { name: 'Roteiro de Negociação', sub: 'Scripts + carta jurídica CDC', cover: 'assets/CAPA_BONUS_2_NEGOCIACAO.jpg' },
    { name: 'Plano de 7 Dias', sub: 'Jornada destrancável', cover: 'assets/CAPA_BONUS_3_PLANO_7DIAS.jpg' },
    { name: 'Checklist Mensal', sub: 'Score saúde financeira 0-25', cover: 'assets/CAPA_BONUS_4_CHECKLIST.jpg' },
  ];

  return (
    <section className="relative py-24 md:py-36">
      <div className="wrap">
        <SectionLabel
          align="left"
          kicker="// Tudo o que vem no Kit Completo (R$ 67)"
          title={
            <>
              13 entregáveis.<br />
              <span className="font-serif-i text-gold">Um único pagamento</span>.
            </>
          }
          sub="Sem upgrade, sem mensalidade, sem 'plano avançado'. Tudo o que cabe num kit completo cabe num kit completo."
          className="mb-16"
        />

        {/* PDFs */}
        <Reveal>
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-serif-i text-3xl text-white">7 PDFs aprofundados</h3>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">→ 102 páginas no total</div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {pdfs.map((p, i) => (
            <Reveal delay={Math.min((i % 5) + 1, 5)} key={i}>
              <PDFCard {...p} />
            </Reveal>
          ))}
        </div>

        {/* PWAs */}
        <Reveal>
          <div className="mt-24 flex items-baseline justify-between mb-6">
            <h3 className="font-serif-i text-3xl text-white">4 PWAs offline</h3>
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">→ Instala no celular sem app store</div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pwas.map((p, i) => (
            <Reveal delay={Math.min(i + 1, 4)} key={i}>
              <PWACard name={p.name} sub={p.sub} cover={p.cover} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Hub */}
        <Reveal delay={2}>
          <div className="mt-12 liquid-glass border border-white/[0.06] p-6 md:p-9 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="badge mb-3">// Hub do método</div>
              <div className="font-serif-i text-3xl md:text-4xl text-white leading-tight">
                Um endereço único onde tudo se conecta.
              </div>
              <p className="mt-3 text-white/65 max-w-2xl font-light leading-relaxed">
                Hub web logado: ebook, PDFs, PWAs e Virada App (se você tiver) num só lugar. Sem precisar lembrar onde guardou. Sem reenvio de email.
              </p>
            </div>
            <div className="relative w-full md:w-64 h-40 rounded-2xl border border-white/[0.06] overflow-hidden bg-white/[0.02]">
              <div className="absolute inset-x-3 top-3 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/15" />
                <div className="w-2 h-2 rounded-full bg-white/15" />
                <div className="w-2 h-2 rounded-full bg-white/15" />
                <div className="ml-2 text-[10px] font-mono text-white/35">codigodavirada.net.br</div>
              </div>
              <div className="absolute inset-x-3 top-10 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-md" style={{
                    background: i === 4 ? 'linear-gradient(135deg, #f0a830, #d48a1f)' : 'rgba(255,255,255,0.05)',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PDFCard({ n, title, pages }) {
  return (
    <div className="liquid-glass card-hover border border-white/[0.06] p-4 h-44 flex flex-col justify-between relative overflow-hidden">
      <div
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(240,168,48,0.25), transparent 70%)' }}
      />
      <div className="relative">
        <div className="w-9 h-12 rounded-sm flex items-center justify-center text-[9px] font-mono text-white/80"
          style={{
            background: 'linear-gradient(160deg, #1c1610, #0e0a07)',
            border: '1px solid rgba(240,168,48,0.3)',
          }}
        >
          <div className="font-serif-i text-gold text-lg leading-none">{n}</div>
        </div>
      </div>
      <div className="relative">
        <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">PDF · {pages} pp</div>
        <div className="mt-1 text-[13.5px] text-white leading-tight font-medium">{title}</div>
      </div>
    </div>
  );
}

function PWACard({ name, sub, index, cover }) {
  return (
    <div className="liquid-glass card-hover border border-white/[0.06] relative overflow-hidden h-72 flex flex-col">
      {/* Capa real do bônus */}
      <div className="relative w-full" style={{ height: '60%' }}>
        {cover && (
          <img
            src={cover}
            alt={`Capa ${name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,10,12,0.85) 100%)' }}
        />
        <div className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest text-white/80 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
          PWA · 0{index + 1}
        </div>
      </div>
      {/* Texto */}
      <div className="relative p-4 flex flex-col justify-between flex-1">
        <div>
          <div className="font-serif-i text-xl text-white leading-tight">{name}</div>
          <div className="text-[12.5px] text-white/55 mt-1 leading-snug">{sub}</div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
            Instala no celular
          </div>
          <Icon.Phone className="w-3.5 h-3.5 text-white/40" />
        </div>
      </div>
    </div>
  );
}

window.KitInclusos = KitInclusos;
