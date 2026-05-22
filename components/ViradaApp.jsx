const { motion: viradaAppMotion } = window.Motion;

function ViradaAppMockup() {
  return (
    <div className="relative mx-auto" style={{ width: "280px", height: "560px" }}>
      {/* Glow dourado por trás */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(240,168,48,0.28) 0%, rgba(0,0,0,0) 60%)",
          filter: "blur(28px)",
          transform: "scale(1.3)",
        }}
      />

      {/* Frame do celular */}
      <div
        className="relative w-full h-full rounded-[44px] p-3"
        style={{
          background: "linear-gradient(155deg, #1a1a1c 0%, #0a0a0c 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full"
          style={{
            width: "100px",
            height: "22px",
            background: "#000",
            zIndex: 10,
          }}
        />

        {/* Tela */}
        <div
          className="relative w-full h-full rounded-[34px] overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0a0a0c 0%, #15110a 100%)",
          }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-body text-white/70">
            <span>9:41</span>
            <span>●●● 100%</span>
          </div>

          {/* Header app */}
          <div className="px-5 pt-6 pb-3">
            <div className="text-[10px] font-body uppercase tracking-wider text-white/50">
              Olá, Thiago
            </div>
            <div
              className="font-heading italic text-white text-2xl leading-none mt-1"
              style={{ letterSpacing: "-1px" }}
            >
              Maio 2026
            </div>
          </div>

          {/* Missão do dia */}
          <div
            className="mx-5 my-3 rounded-2xl p-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,168,48,0.18) 0%, rgba(212,138,31,0.08) 100%)",
              border: "1px solid rgba(240,168,48,0.35)",
            }}
          >
            <div className="text-[9px] font-body uppercase tracking-wider text-amber-200/80 mb-1">
              ✨ Missão do dia
            </div>
            <div className="text-white text-xs font-body font-medium leading-snug">
              Pagar boleto da água antes do vencimento
            </div>
          </div>

          {/* KPIs */}
          <div className="mx-5 grid grid-cols-3 gap-2 mb-3">
            <div
              className="rounded-xl p-2"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-[8px] font-body text-white/50 uppercase">
                Entradas
              </div>
              <div className="text-emerald-400 font-body font-semibold text-[11px] mt-1">
                R$ 3.980
              </div>
            </div>
            <div
              className="rounded-xl p-2"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-[8px] font-body text-white/50 uppercase">
                Gastos
              </div>
              <div className="text-rose-400 font-body font-semibold text-[11px] mt-1">
                R$ 2.652
              </div>
            </div>
            <div
              className="rounded-xl p-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(240,168,48,0.2) 0%, rgba(212,138,31,0.08) 100%)",
                border: "1px solid rgba(240,168,48,0.35)",
              }}
            >
              <div className="text-[8px] font-body text-amber-200/80 uppercase">
                Sobra
              </div>
              <div className="text-amber-300 font-body font-semibold text-[11px] mt-1">
                R$ 1.328
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mx-5 grid grid-cols-2 gap-2 mb-3">
            {[
              { icon: "💸", label: "Gastos" },
              { icon: "💰", label: "Entradas" },
              { icon: "🎯", label: "Metas" },
              { icon: "📊", label: "Planilha" },
            ].map((q) => (
              <div
                key={q.label}
                className="rounded-xl p-2 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-base">{q.icon}</span>
                <span className="text-[10px] font-body text-white/80">
                  {q.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center justify-around"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(10px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {["🏠", "➕", "📚", "📊", "👤"].map((i, idx) => (
              <div
                key={idx}
                className="text-base"
                style={{
                  opacity: idx === 0 ? 1 : 0.45,
                  filter: idx === 0 ? "drop-shadow(0 0 6px #f0a830)" : "none",
                }}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ViradaApp() {
  const features = [
    {
      icon: "📊",
      title: "Dashboard com KPIs reais",
      desc: "Entradas, gastos, sobra e dívidas em tempo real. Toggle Mês atual / Ver tudo.",
    },
    {
      icon: "⚡",
      title: "Lançamento em 10 segundos",
      desc: "Formulário rápido com 12 categorias pré-definidas. Lança gasto sem fricção.",
    },
    {
      icon: "🎯",
      title: "30 missões + sistema de pontos",
      desc: "Gamificação leve pra criar o hábito. Cada missão concluída soma XP.",
    },
    {
      icon: "📈",
      title: "Planilha Google Sheets",
      desc: "Exporta sua vida financeira em 9 abas + 4 gráficos profissionais. 1 clique.",
      highlight: true,
    },
    {
      icon: "🔒",
      title: "Dados 100% no seu aparelho",
      desc: "Login Google só pra exportar. Nada rastreado, nada vendido pra terceiros.",
    },
  ];

  return (
    <section id="virada-app" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(240,168,48,0.06) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <viradaAppMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="text-sm font-body text-white/70 mb-5">// Próximo nível</div>
          <h2
            className="font-heading italic text-white text-5xl md:text-6xl leading-[0.92]"
            style={{ letterSpacing: "-2.5px" }}
          >
            Virada App —
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #f0a830, #d48a1f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              controle financeiro vitalício
            </span>
          </h2>
          <p className="mt-6 text-white/75 font-body font-light text-lg max-w-2xl leading-snug">
            Tudo do método na palma da mão. Lança gasto em 10 segundos, exporta planilha profissional no Google Sheets em 1 clique.
          </p>
        </viradaAppMotion.div>

        {/* Mockup + Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          {/* Mockup */}
          <viradaAppMotion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center"
          >
            <ViradaAppMockup />
          </viradaAppMotion.div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => (
              <viradaAppMotion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="liquid-glass rounded-[1rem] p-4 md:p-5 flex items-start gap-4"
                style={f.highlight ? { border: "1px solid rgba(240,168,48,0.35)" } : {}}
              >
                <div className="text-2xl shrink-0">{f.icon}</div>
                <div>
                  <div className="font-body font-medium text-white text-base mb-1 flex items-center gap-2">
                    {f.title}
                    {f.highlight && (
                      <span
                        className="rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          background: "linear-gradient(135deg, #f0a830, #d48a1f)",
                          color: "#1a1109",
                        }}
                      >
                        Diferencial
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/75 font-body font-light leading-snug">
                    {f.desc}
                  </p>
                </div>
              </viradaAppMotion.div>
            ))}
          </div>
        </div>

        {/* Prova técnica */}
        <viradaAppMotion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="liquid-glass rounded-[1.25rem] p-6 md:p-8 mb-12"
        >
          <div className="text-sm font-body text-white/70 mb-4">// Construído com</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-body font-medium text-white text-sm mb-1">Stack moderno</div>
              <p className="text-xs text-white/70 font-body font-light leading-snug">
                Next.js 14 · TypeScript · Tailwind · React 18. Mesma tecnologia da Vercel, Netflix, TikTok.
              </p>
            </div>
            <div>
              <div className="font-body font-medium text-white text-sm mb-1">6 webhooks nativos</div>
              <p className="text-xs text-white/70 font-body font-light leading-snug">
                Kiwify · Hotmart · Cakto · Eduzz · Monetizze · Perfectpay. Acesso liberado automático.
              </p>
            </div>
            <div>
              <div className="font-body font-medium text-white text-sm mb-1">PWA instalável</div>
              <p className="text-xs text-white/70 font-body font-light leading-snug">
                Ícone na tela inicial Android + iPhone. Funciona como app nativo, sem App Store.
              </p>
            </div>
          </div>
        </viradaAppMotion.div>

        {/* Pricing card destacado */}
        <viradaAppMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="liquid-glass-strong rounded-[1.5rem] p-6 md:p-10 max-w-3xl mx-auto text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(240,168,48,0.12) 0%, rgba(255,255,255,0.04) 60%)",
          }}
        >
          <div
            className="inline-block rounded-full px-3 py-1 text-[10px] font-body uppercase tracking-wider mb-4"
            style={{
              background: "linear-gradient(135deg, #f0a830, #d48a1f)",
              color: "#1a1109",
            }}
          >
            Pré-venda · Lançamento junho/2026
          </div>

          <div
            className="font-heading italic text-white text-5xl md:text-6xl leading-none mb-2"
            style={{ letterSpacing: "-2.5px" }}
          >
            R$ 197
          </div>
          <div className="text-white/75 font-body font-light text-base mb-1">
            vitalício · sem mensalidade
          </div>
          <div className="text-amber-300 font-body text-sm mb-6">
            ou <strong>R$ 97</strong> pra quem tem o Kit Completo (upgrade)
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/70 font-body mb-7">
            <span className="flex items-center gap-1.5">✓ Acesso vitalício</span>
            <span className="flex items-center gap-1.5">✓ Atualizações grátis</span>
            <span className="flex items-center gap-1.5">✓ Garantia 30 dias</span>
          </div>

          <a
            href="https://app.progetoprontoia.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-8 py-4 font-body font-semibold text-base transition-transform hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #f0a830, #d48a1f)",
              color: "#1a1109",
              boxShadow: "0 10px 30px -8px rgba(240,168,48,0.5)",
            }}
          >
            Quero o Virada App por R$ 197
          </a>

          <div className="mt-4 text-xs text-white/55 font-body font-light">
            Lançamento oficial: junho/2026 — pré-venda com 30% off
          </div>
        </viradaAppMotion.div>
      </div>
    </section>
  );
}

window.ViradaApp = ViradaApp;
