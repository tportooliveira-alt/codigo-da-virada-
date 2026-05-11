const { motion: quoteMotion } = window.Motion;

function Quote() {
  return (
    <section className="relative w-full bg-black py-28 md:py-40 overflow-hidden">
      {/* Video cinematografico com cenas da capa do livro */}
      <CinematicBg
        videoSrc={window.CV_VIDEO_B}
        overlay="linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs md:text-sm font-body text-white/60 mb-8 tracking-[0.2em] uppercase">
          // Epígrafe
        </div>

        <quoteMotion.blockquote
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-heading italic text-white text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.02]"
          style={{ letterSpacing: "-2px", textWrap: "balance" }}
        >
          <span className="text-white/40">“</span>
          Quem tem dinheiro não é quem ganha muito — é quem entende e poupa o que ganha.
          <span className="text-white/40">”</span>
        </quoteMotion.blockquote>

        <quoteMotion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="block h-px w-12 bg-white/30" />
          <span className="font-body text-white/80 text-sm tracking-wide">
            Thiago Porto Oliveira
          </span>
          <span className="block h-px w-12 bg-white/30" />
        </quoteMotion.div>
      </div>
    </section>
  );
}

window.Quote = Quote;
