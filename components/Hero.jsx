const { motion: heroMotion, useScroll: heroUseScroll, useTransform: heroUseTransform } = window.Motion;
const { useRef: heroUseRef } = React;

const heroEnter = (delay) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

function StatCard({ Icon, value, suffix = "", label }) {
  return (
    <heroMotion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="liquid-glass p-5 rounded-[1.25rem] flex-1 min-w-[180px] max-w-[240px]"
    >
      <div className="text-white">
        <Icon className="h-7 w-7" />
      </div>
      <div className="mt-6 text-left">
        <div
          className="text-3xl md:text-4xl font-heading italic text-white leading-none"
          style={{ letterSpacing: "-1px" }}
        >
          <CountUp to={value} suffix={suffix} />
        </div>
        <div className="text-xs text-white font-body font-light mt-2">{label}</div>
      </div>
    </heroMotion.div>
  );
}

function Hero() {
  const heroRef = heroUseRef(null);
  const { scrollY } = heroUseScroll();
  // Parallax: background drifts slower than scroll
  const bgY = heroUseTransform(scrollY, [0, 800], [0, 160]);
  const contentY = heroUseTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="topo"
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <heroMotion.div style={{ y: bgY, position: "absolute", inset: 0 }}>
        <CinematicBg
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80"
          videoSrc={window.CV_VIDEO_A}
          overlay="radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.97) 100%)"
        />
      </heroMotion.div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <heroMotion.div
          style={{ y: contentY }}
          className="flex-1 flex flex-col items-center justify-center text-center pt-28 pb-16 px-4"
        >
          {/* Badge with subtle continuous pulse */}
          <heroMotion.div {...heroEnter(0.3)}>
            <heroMotion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.0)",
                  "0 0 24px 2px rgba(255,255,255,0.18)",
                  "0 0 0 0 rgba(255,255,255,0.0)",
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="liquid-glass rounded-full inline-flex items-center gap-2 pl-1 pr-3 py-1"
            >
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
                Edição 2026
              </span>
              <span className="text-sm text-white/90 font-body">
                com Selic 14,50% e Desenrola Brasil
              </span>
            </heroMotion.div>
          </heroMotion.div>

          {/* Headline */}
          <div className="mt-6 max-w-4xl">
            <BlurText
              text="Reorganize suas finanças antes do próximo boleto chegar"
              className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.92]"
              style={{ letterSpacing: "-3px" }}
            />
          </div>

          {/* Subhead */}
          <heroMotion.p
            {...heroEnter(0.9)}
            className="mt-5 text-sm md:text-base text-white/85 max-w-xl font-body font-light leading-snug"
          >
            Método brasileiro com 7 capítulos curtos, plano de 7 dias e scripts práticos de negociação.
            Pra quem está cansado de teoria gringa.
          </heroMotion.p>

          {/* CTAs */}
          <heroMotion.div
            {...heroEnter(1.1)}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-7"
          >
            <heroMotion.a
              href="https://pay.cakto.com.br/880634"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.02, boxShadow: "0 0 32px rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-1.5"
            >
              Começar por R$ 9,90
              <ArrowUpRight className="h-5 w-5" />
            </heroMotion.a>
            <heroMotion.a
              href="#produtos"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Ver Kit Completo
              <ArrowRight className="h-4 w-4" />
            </heroMotion.a>
          </heroMotion.div>

          {/* Stats */}
          <heroMotion.div
            {...heroEnter(1.3)}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 w-full max-w-2xl"
          >
            <StatCard Icon={BookIcon} value={7} label="Capítulos curtos" />
            <StatCard Icon={GiftIcon} value={4} label="Bônus inclusos no Kit" />
            <StatCard Icon={ShieldIcon} value={7} suffix=" dias" label="Garantia incondicional" />
          </heroMotion.div>
        </heroMotion.div>
      </div>
    </section>
  );
}

window.Hero = Hero;
