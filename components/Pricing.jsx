// ============================================================
// Pricing — 3 cards (R$17 / R$67 / R$197), middle featured
// ============================================================

function Pricing() {
  const plans = [
    {
      key: 'segredo',
      tag: '00 · Chamariz',
      name: 'Segredo da Virada',
      forWho: 'Quero entender o método em 30 min',
      price: '9',
      from: null,
      cta: 'Quero o Segredo por R$ 9',
      ctaTone: 'ghost',
      cover: 'assets/CAPA_LIVRO_POPULAR.jpg',
      includes: [
        'Ebook curto (a essência do método)',
        'Leitura em 30 minutos',
        'Garantia de 30 dias',
      ],
      missing: ['Plano 7 Dias', '7 PDFs avançados', '4 PWAs offline', 'Hub do método', 'Virada App'],
      footnote: 'O custo de um café — para descobrir se o método é pra você',
    },
    {
      key: 'tripwire',
      tag: '01 · Tripwire',
      name: 'Essencial',
      forWho: 'Quero testar antes',
      price: '17',
      from: null,
      cta: 'Começar com R$ 17',
      ctaTone: 'ghost',
      includes: [
        'Ebook web (7 capítulos)',
        'Plano de 7 dias em PDF',
        'Garantia de 30 dias',
      ],
      missing: ['7 PDFs avançados', '4 PWAs offline', 'Hub do método', 'Virada App'],
      footnote: 'Versão mínima para validar o método',
    },
    {
      key: 'main',
      tag: '02 · Kit Completo',
      name: 'Kit Completo',
      forWho: 'Quero o método completo',
      price: '67',
      from: '197',
      cta: 'Quero o Kit Completo',
      ctaTone: 'gold',
      featured: true,
      includes: [
        'Tudo do Essencial',
        '+ 7 PDFs aprofundados',
        '+ 4 PWAs offline (Juros, Gastos, Dívida, Plano)',
        '+ Hub do método (web)',
        '+ Ebook em versão expandida',
      ],
      missing: ['Virada App vitalício'],
      footnote: 'Pague à vista ou em 12× R$ 6,50 no cartão',
    },
    {
      key: 'app',
      tag: '03 · Vitalício',
      name: 'Virada App',
      forWho: 'Quero virar agora e pra sempre',
      price: '197',
      from: null,
      cta: 'Quero o App vitalício',
      ctaTone: 'ghost',
      includes: [
        'Tudo do Kit Completo',
        '+ Virada App (acesso vitalício)',
        '+ Exportação Google Sheets (9 abas)',
        '+ Atualizações eternas',
        '+ Suporte WhatsApp 30 dias',
      ],
      missing: [],
      footnote: 'Sem mensalidade. Sem renovação. Para sempre.',
    },
  ];

  return (
    <section id="precos" className="relative py-24 md:py-36">
      {/* aurora behind */}
      <div className="aurora opacity-30" />

      <div className="wrap relative">
        <SectionLabel
          kicker="// Preço · Escolhe por onde começa"
          title={
            <>
              Quatro portas. <span className="font-serif-i text-gold">Mesmo método</span>.
            </>
          }
          sub="Começa pelo Segredo a R$ 9, sobe pro Essencial quando quiser, e nunca paga duas vezes pela mesma coisa. Migração entre planos sempre desconta o que já pagou."
          className="mb-16 md:mb-20"
        />

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((p, i) => (
            <Reveal delay={Math.min(i + 1, 5)} key={p.key} className="h-full">
              <PriceCard {...p} />
            </Reveal>
          ))}
        </div>

        {/* Order bump teaser */}
        <Reveal delay={3}>
          <div className="mt-10 max-w-3xl mx-auto liquid-glass border border-white/[0.06] p-5 md:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
              <Icon.Headphones className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <div className="font-serif-i text-xl md:text-2xl text-white">Order bump: Audiobook imersivo</div>
                <div className="badge badge-gold">+ R$ 27 · 50% off</div>
              </div>
              <p className="mt-1.5 text-white/65 text-sm font-light">
                No checkout, marca a opção pra entrar na lista early-bird do audiobook (lançamento 2º semestre/2026, 5 volumes, 50 capítulos). Preço normal: R$ 57.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/45">
            <span className="inline-flex items-center gap-2"><Icon.Shield className="w-3.5 h-3.5 text-gold"/>Garantia 30 dias</span>
            <span className="inline-flex items-center gap-2"><Icon.Lock className="w-3.5 h-3.5 text-gold"/>Checkout Kiwify (SSL)</span>
            <span className="inline-flex items-center gap-2"><Icon.Sparkle className="w-3.5 h-3.5 text-gold"/>Acesso vitalício</span>
            <span className="inline-flex items-center gap-2"><Icon.MessageDots className="w-3.5 h-3.5 text-gold"/>Suporte WhatsApp</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PriceCard({ tag, name, forWho, price, from, cta, ctaTone, featured, includes, missing, footnote, cover }) {
  return (
    <article
      className={`relative liquid-glass card-hover border p-7 md:p-8 h-full flex flex-col overflow-hidden ${
        featured ? 'border-gold/40' : 'border-white/[0.06]'
      }`}
      style={
        featured
          ? {
              background:
                'linear-gradient(180deg, rgba(240,168,48,0.06), rgba(255,255,255,0.02) 30%)',
              boxShadow:
                '0 30px 60px -25px rgba(240,168,48,0.4), 0 0 0 1px rgba(240,168,48,0.3)',
            }
          : {}
      }
    >
      {featured && (
        <>
          <div
            className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(240,168,48,0.7), transparent 70%)' }}
          />
          <div className="absolute top-5 right-5 badge badge-gold">⭐ Mais escolhido</div>
        </>
      )}

      <div className="relative flex items-center justify-between">
        <div className="badge">{tag}</div>
        {cover && (
          <img
            src={cover}
            alt={`Capa ${name}`}
            className="w-12 h-16 object-cover rounded-sm shadow-lg"
            style={{ boxShadow: '0 8px 20px -8px rgba(240,168,48,0.4), 0 0 0 1px rgba(240,168,48,0.25)' }}
          />
        )}
      </div>

      <div className="relative mt-6">
        <div className="font-serif-i text-3xl md:text-[40px] text-white leading-none">{name}</div>
        <div className="mt-2 text-[13px] text-white/55">{forWho}</div>
      </div>

      <div className="relative mt-7 pb-7 border-b border-white/[0.08]">
        {from && (
          <div className="text-white/40 text-sm">
            <span className="line-through">de R$ {from}</span>
            <span className="ml-2 text-white/55">por</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-white/55 text-2xl">R$</span>
          <span
            className={`font-serif-i text-[88px] leading-none tracking-tight ${
              featured ? 'text-gold' : 'text-white'
            }`}
          >
            {price}
          </span>
        </div>
        {price === '67' && (
          <div className="mt-2 text-[12.5px] text-white/45">ou 12× R$ 6,50 no cartão</div>
        )}
        {price === '197' && (
          <div className="mt-2 text-[12.5px] text-white/45">ou 12× R$ 19,40 no cartão · vitalício</div>
        )}
        {price === '17' && (
          <div className="mt-2 text-[12.5px] text-white/45">à vista · acesso imediato</div>
        )}
        {price === '9' && (
          <div className="mt-2 text-[12.5px] text-white/45">à vista · entrega imediata por email</div>
        )}
      </div>

      <div className="relative mt-7 flex-1">
        <ul className="space-y-3">
          {includes.map((inc, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-white/85">
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${featured ? 'bg-gold/20' : 'bg-white/[0.06]'}`}>
                <Icon.Check className={`w-3 h-3 ${featured ? 'text-gold' : 'text-white/80'}`} />
              </div>
              <span>{inc}</span>
            </li>
          ))}
          {missing.map((m, i) => (
            <li key={`m${i}`} className="flex items-start gap-3 text-[13px] text-white/30">
              <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/[0.03]">
                <Icon.Minus className="w-3 h-3 text-white/40" />
              </div>
              <span className="line-through">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8">
        <button
          className={`w-full rounded-full py-4 text-[15px] font-medium transition-all inline-flex items-center justify-center gap-2 ${
            ctaTone === 'gold'
              ? 'btn-gold'
              : 'btn-ghost text-white'
          }`}
        >
          {cta}
          <Icon.Arrow className="w-4 h-4" />
        </button>
        <div className="mt-3 text-center text-[11.5px] text-white/40">{footnote}</div>
      </div>
    </article>
  );
}

window.Pricing = Pricing;
