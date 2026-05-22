// ============================================================
// FAQ — 8 perguntas que matam objeção
// ============================================================

function FAQ() {
  const qs = [
    {
      q: 'Quanto tempo até eu ver resultado?',
      a: 'O capítulo 1 reduz juros do cartão já no próximo extrato. O plano de 7 dias reorganiza o orçamento na primeira semana. Resultado financeiro mensurável: 30 a 60 dias, dependendo do seu ponto de partida.',
    },
    {
      q: 'Funciona pra MEI / CLT / aposentado / autônomo?',
      a: 'Sim. O método é universal — a única diferença é a fonte do dinheiro (salário, pró-labore, benefício, faturamento). A matemática dos juros, das taxas e das três contas funciona igual em qualquer regime.',
    },
    {
      q: 'E se eu não tiver tempo de ler?',
      a: 'Cada capítulo tem entre 6 e 8 minutos de leitura. O ebook inteiro lê em uma noite (1h30). O app rastreia em 10 segundos por dia. Quem alega não ter tempo geralmente já assistiu duas séries esta semana.',
    },
    {
      q: 'Preciso de planilha do Excel ou conhecimento técnico?',
      a: 'Não. O Virada App exporta uma planilha pronta no Google Sheets com 9 abas e gráficos. Você só usa se quiser. Sem ele, basta um caderno e o método das 3 contas.',
    },
    {
      q: 'Tem suporte direto?',
      a: 'Sim. WhatsApp direto comigo (Thiago) nos primeiros 30 dias após a compra. Resposta em até 24h úteis. Depois desse período, dúvidas são respondidas via email.',
    },
    {
      q: 'O app é vitalício mesmo? Tem pegadinha?',
      a: 'Sim, vitalício. Paga uma vez (R$ 197), usa pra sempre, inclui todas as atualizações futuras. Sem mensalidade, sem assinatura, sem upsell escondido. Esse é o motivo do preço inicial não ser R$ 9,90/mês.',
    },
    {
      q: 'E o audiobook? Já está disponível?',
      a: 'Ainda não. Lançamento previsto para o 2º semestre de 2026, com 5 volumes e 50 capítulos. Quem compra o Kit pode entrar na lista early-bird por +R$ 27 (50% off do preço final de R$ 57) marcando o order bump no checkout.',
    },
    {
      q: 'Como recebo depois de comprar?',
      a: 'Email automático em até 5 minutos com o link do material. Plano Essencial e Kit Completo: acesso ao Hub web + downloads. Virada App: criação de conta automática em app.progetoprontoia.tech.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="wrap">
        <SectionLabel
          align="left"
          kicker="// Perguntas frequentes"
          title={
            <>
              O que você ainda<br />
              está se <span className="font-serif-i text-gold">perguntando</span>.
            </>
          }
          sub="Oito respostas diretas, sem floreio comercial. Se sua dúvida não está aqui, chama no chat ali do canto."
          className="mb-14"
        />

        <div className="max-w-3xl mx-auto space-y-2">
          {qs.map((q, i) => (
            <Reveal delay={Math.min((i % 5) + 1, 5)} key={i}>
              <FAQItem {...q} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div
      className={`liquid-glass border transition-colors ${
        open ? 'border-gold/30' : 'border-white/[0.06]'
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 md:px-6 py-5 flex items-center gap-5 justify-between"
      >
        <span className={`font-serif-i text-xl md:text-2xl leading-tight ${open ? 'text-white' : 'text-white/85'}`}>
          {q}
        </span>
        <span
          className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${
            open ? 'border-gold/40 bg-gold/10 text-gold' : 'border-white/15 text-white/55'
          }`}
        >
          {open ? <Icon.Minus className="w-4 h-4" /> : <Icon.Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 text-white/65 leading-relaxed font-light text-[15px] max-w-prose">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

window.FAQ = FAQ;
