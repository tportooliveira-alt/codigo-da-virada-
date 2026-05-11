const { motion: bonusMotion } = window.Motion;

function BonusCard({ Icon, label, title, description, thumb, index = 0 }) {
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
      title: "50 Ideias de Renda Extra",
      description: "Lista organizada por perfil: presencial, online, fim de semana e habilidades específicas. Pra abrir caminho sem depender só do salário.",
      thumb: "uploads/CAPA_BONUS_1_RENDA_EXTRA.png",
    },
    {
      Icon: ChatIcon,
      label: "Bônus 02",
      title: "Roteiro de Negociação",
      description: "Scripts prontos pra falar com cartão, banco, loja e empréstimo. Frase por frase, com o que pedir e como insistir sem perder a calma.",
      thumb: "assets/CAPA_BONUS_2_NEGOCIACAO.jpg",
    },
    {
      Icon: CalendarIcon,
      label: "Bônus 03",
      title: "Plano 7 Dias",
      description: "Uma ação curta por dia durante uma semana. No final, você sai do modo apagar incêndio e entra no modo organizar a casa.",
      thumb: "uploads/CAPA_BONUS_3_PLANO_7DIAS.jpg",
    },
    {
      Icon: CheckListIcon,
      label: "Bônus 04",
      title: "Checklist Mensal",
      description: "Lista de revisão pra rodar todo mês: gastos, dívidas, metas e ajustes. Pra o método não virar gaveta depois da primeira semana.",
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
              Quatro ferramentas pra
              <br />
              não ficar parado
            </h2>
          </div>
          <p className="text-white/75 font-body font-light max-w-sm leading-snug">
            Incluídos sem custo extra quando você leva o Kit Duplo — material prático
            pra aplicar na mesma semana.
          </p>
        </bonusMotion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((it, i) => (
            <BonusCard key={it.title} index={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Bonuses = Bonuses;
