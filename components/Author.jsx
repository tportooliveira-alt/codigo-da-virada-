const { motion: authorMotion } = window.Motion;

function Author() {
  return (
    <section id="autor" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      {/* Subtle video backdrop */}
      <CinematicBg
        src="uploads/_full_frame_28s.jpg"
        videoSrc={window.CV_VIDEO_A}
        overlay="linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.90) 50%, rgba(0,0,0,0.97) 100%)"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">

          {/* === BLOCO 1: PROVAS DE CONTEÚDO (em vez de depoimentos vazios) === */}
          <authorMotion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 md:mb-24"
          >
            <div className="text-sm font-body text-white/70 mb-5">// O que vem no Kit Completo</div>
            <h2
              className="font-heading italic text-white text-5xl md:text-6xl leading-[0.95] mb-8"
              style={{ letterSpacing: "-2.5px" }}
            >
              Números do produto.
              <br />
              Sem promessa, só conteúdo.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                { n: "7", lbl: "PDFs originais" },
                { n: "60", lbl: "Ideias de renda extra" },
                { n: "50", lbl: "Capítulos de novela" },
                { n: "4", lbl: "Apps PWA inclusos" },
                { n: "10", lbl: "Bancos analisados (BACEN)" },
                { n: "30", lbl: "Dias de garantia" },
              ].map((s, i) => (
                <authorMotion.div
                  key={s.lbl}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="liquid-glass rounded-[1rem] p-4 md:p-5 text-center"
                >
                  <div
                    className="font-heading italic text-white text-4xl md:text-5xl leading-none mb-2"
                    style={{ letterSpacing: "-1.5px" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[11px] md:text-xs text-white/65 font-body uppercase tracking-wide">
                    {s.lbl}
                  </div>
                </authorMotion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="liquid-glass rounded-[1.25rem] p-5">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="font-body font-medium text-white text-base mb-1">Base legal robusta</div>
                <p className="text-sm text-white/75 font-body font-light leading-snug">
                  Carta jurídica fundamentada em CDC art. 43, Súmula 548/STJ, Lei 14.181/2021 (Superendividamento), MP do Desenrola 2026 e LGPD. Cita dados BACEN reais do banco do cliente.
                </p>
              </div>
              <div className="liquid-glass rounded-[1.25rem] p-5">
                <div className="text-2xl mb-2">🔬</div>
                <div className="font-body font-medium text-white text-base mb-1">Conteúdo embasado</div>
                <p className="text-sm text-white/75 font-body font-light leading-snug">
                  Citações de Harvard Business Review, Stanford, McKinsey, SPC Brasil e Universidade de Michigan. Dados macroeconômicos verificados, não chutes.
                </p>
              </div>
            </div>
          </authorMotion.div>

          {/* === BLOCO 2: AUDIOBOOK EM DESENVOLVIMENTO === */}
          <authorMotion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 md:mb-24"
          >
            <div
              className="rounded-[1.5rem] p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(240,168,48,0.1) 0%, rgba(0,0,0,0.6) 100%)",
                border: "1px solid rgba(240,168,48,0.4)",
              }}
            >
              <span
                className="absolute top-5 right-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #f0a830, #d48a1f)",
                  color: "#1a1109",
                }}
              >
                Em desenvolvimento
              </span>
              <div className="text-3xl mb-3">🎧</div>
              <h3
                className="font-heading italic text-white text-3xl md:text-4xl leading-tight mb-3"
                style={{ letterSpacing: "-1.5px" }}
              >
                Audiobook Imersivo
              </h3>
              <p className="text-white/85 font-body font-light leading-snug max-w-2xl">
                A versão sonora do Livro Premium Novela (50 capítulos) está em produção: <strong className="text-white">voz humana narrando + trilha + efeitos imersivos</strong> (porta rangendo, ambiente, sons das cenas). Você ouve a história da Maria como se estivesse no quarto com ela.
              </p>
              <div className="mt-4 text-sm font-body text-white/65">
                Lançamento previsto: <strong className="text-white/85">2º semestre de 2026</strong> · Quem compra o Kit Completo hoje entra na lista <strong className="text-white/85">early-bird com 50% off</strong>.
              </div>
            </div>
          </authorMotion.div>

          {/* === BLOCO 3: BIO DO AUTOR === */}
          <authorMotion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="text-sm font-body text-white/70 mb-5">// Sobre o autor</div>
            <h2
              className="font-heading italic text-white text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
              style={{ letterSpacing: "-2px" }}
            >
              Thiago Porto Oliveira
            </h2>

            <p className="mt-6 text-white/85 font-body font-light leading-snug text-base md:text-lg max-w-2xl mx-auto">
              Empreendedor brasileiro, fundador do Código da Virada. Pesquisou e
              organizou o método depois de observar que pessoas inteligentes e
              trabalhadoras não conseguiam sair do aperto financeiro por falta
              de método, não por falta de esforço.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {[
                "Fundador — Código da Virada",
                "Autor do método Virada Financeira",
                "pt-BR — linguagem direta",
              ].map((t, i) => (
                <authorMotion.span
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/85 font-body"
                >
                  {t}
                </authorMotion.span>
              ))}
            </div>
          </authorMotion.div>
      </div>
    </section>
  );
}

window.Author = Author;
