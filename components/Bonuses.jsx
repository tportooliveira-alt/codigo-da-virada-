const { motion: bonusMotion } = window.Motion;

function BonusCard({ Icon, label, title, description, thumb, index = 0, badge }) {
  return (
    <bonusMotion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -4, boxShadow: "0 24px 50px -20px rgba(255,255,255,0.18)" }}
      className="liquid-glass rounded-[1.25rem] p-5 flex flex-col h-full transition-shadow"
    >
      {/* Thumb */}
      <div className="relative w-full rounded-[1rem] overflow-hidden mb-5" style={{ aspectRatio: "4 / 5", background: "rgba(255,255,255,0.04)" }}>
        {thumb ? (
          <img
            src={thumb}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "saturate(0.9) contrast(1.05)" }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
               style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.6) 70%)" }}>
            <Icon className="h-14 w-14 text-white/70" />
          </div>
        )}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.55) 100%)"
        }} />
        <span className="absolute top-3 left-3 liquid-glass rounded-full px-2.5 py-1 text-[10px] text-white/90 font-body uppercase tracking-wide">
          {label}
        </span>
        {badge && (
          <span
            className="absolute bottom-3 right-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: "linear-gradient(135deg, #f0a830, #d48a1f)",
              color: "#1a1109",
              boxShadow: "0 2px 8px rgba(240,168,48,0.35)",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <div>
        <h4
          className="font-heading italic text-white text-2xl leading-none"
          style={{ letterSpacing: "-1px" }}
        >
          {title}
        </h4>
        <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug">
          {description}
        </p>
      </div>
    </bonusMotion.div>
  );
}

function Bonuses() {
  const items = [
    {
      Icon: ListIcon,
      label: "Bônus 01",
      badge: "+10 BÔNUS 2026",
      title: "60 Ideias de Renda Extra",
      description: "Quiz que recomenda as 5 ideias certas pra você + filtros por capital e tempo. 10 ideias 2026 inclusas: TikTok Shop, Cashback, Prompt engineering, anotação de dados pra IA.",
      thumb: "uploads/CAPA_BONUS_1_RENDA_EXTRA.png",
    },
    {
      Icon: ChatIcon,
      label: "Bônus 02",
      title: "Roteiro de Negociação",
      description: "Calculadora de desconto + scripts com seus dados + carta jurídica baseada em CDC, Súmula 548/STJ, Lei 14.181/2021 e Desenrola 2026. Análise de juros do seu banco (BACEN).",
      thumb: "assets/CAPA_BONUS_2_NEGOCIACAO.jpg",
    },
    {
      Icon: CalendarIcon,
      label: "Bônus 03",
      title: "Plano 7 Dias",
      description: "Jornada destrancável: dia 2 só abre quando você termina o dia 1. Diário exportável no fim com tudo que você fez. Não dá pra abandonar no dia 3.",
      thumb: "uploads/CAPA_BONUS_3_PLANO_7DIAS.jpg",
    },
    {
      Icon: CheckListIcon,
      label: "Bônus 04",
      title: "Checklist Mensal",
      description: "Calcula totais automaticamente + score de saúde financeira 0-25 com diagnóstico colorido (estado de emergência → direção clara). Salva por mês no celular.",
      thumb: "uploads/CAPA_BONUS_4_CHECKLIST.jpg",
    },
  ];

  return (
    <section id="bonus" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <bonusMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="text-sm font-body text-white/70 mb-5">// Bônus do Kit Duplo</div>
            <h2
              className="font-heading italic text-white text-5xl md:text-6xl leading-[0.92]"
              style={{ letterSpacing: "-2.5px" }}
            >
              Quatro ferramentas
              <br />
              interativas
            </h2>
          </div>
          <p className="text-white/75 font-body font-light max-w-sm leading-snug">
            Incluídos sem custo extra quando você leva o Kit Duplo — material prático e <strong>100% interativo</strong> — funciona no celular, salva tudo no seu aparelho.
          </p>
        </bonusMotion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((it, i) => (
            <BonusCard key={it.title} index={i} {...it} />
          ))}
        </div>

        {/* === SUB-SEÇÃO: APPS INTERATIVOS INCLUSOS (PWA) === */}
        <bonusMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 md:mt-24"
        >
          <div className="text-sm font-body text-white/70 mb-5">// Diferencial único</div>
          <h3
            className="font-heading italic text-white text-4xl md:text-5xl leading-[0.95] mb-6"
            style={{ letterSpacing: "-2px" }}
          >
            Não são PDFs.
            <br />
            São <span className="text-white" style={{ background: "linear-gradient(135deg, #f0a830, #d48a1f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>4 apps instaláveis</span> no celular.
          </h3>

          <p className="text-white/80 font-body font-light max-w-2xl leading-snug mb-10">
            Cada bônus é um <strong className="text-white">PWA (Progressive Web App)</strong> — você instala direto pela web, abre como app no celular, funciona offline depois de instalado e <strong className="text-white">todos os dados ficam só no seu aparelho</strong> (sem servidor, sem login, sem rastreamento).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: "📲", title: "Instala no celular", desc: "Ícone na tela inicial, abre sem navegador" },
              { icon: "✈️", title: "Funciona offline", desc: "Depois de instalado, não precisa de internet" },
              { icon: "🔒", title: "Dados só com você", desc: "100% no seu aparelho, sem servidor" },
              { icon: "💾", title: "Exportável", desc: "Backup em .txt ou .json a qualquer momento" },
            ].map((f, i) => (
              <bonusMotion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="liquid-glass rounded-[1rem] p-4 md:p-5"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-body font-medium text-white text-sm mb-1">{f.title}</div>
                <div className="text-xs text-white/65 font-body font-light leading-snug">{f.desc}</div>
              </bonusMotion.div>
            ))}
          </div>

          <div className="mt-8 liquid-glass rounded-[1.25rem] p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="text-3xl shrink-0">🧭</div>
            <div className="flex-1">
              <div className="font-body font-medium text-white text-base mb-1">Hub Biblioteca — tudo organizado em um lugar</div>
              <p className="text-sm text-white/75 font-body font-light leading-snug">
                Acompanha sua jornada com streak diário, banner "continuar de onde parou", export geral (backup de tudo), stats agregadas dos 4 apps. Você abre uma vez e vê todo o seu progresso.
              </p>
            </div>
          </div>
        </bonusMotion.div>
      </div>
    </section>
  );
}

window.Bonuses = Bonuses;
