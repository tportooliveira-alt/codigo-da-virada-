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

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          {/* Bio (sem foto) */}
          <authorMotion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
