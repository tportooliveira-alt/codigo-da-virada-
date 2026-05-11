const { motion: prodMotion } = window.Motion;

function ProductCard({
  bgSrc,
  bgFallback,
  tags,
  title,
  price,
  description,
  ctaLabel,
  ctaHref,
  disabled = false,
  highlight = false,
  statusBadge,
  ctaVariant = "primary", // primary | outline
  belowCta,
  bullets,
  index = 0,
}) {
  const buttonStyles =
    ctaVariant === "outline"
      ? "rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-1.5 text-white bg-transparent border border-white/40 hover:border-white/70 hover:bg-white/5"
      : highlight
      ? "rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-1.5 bg-white text-black"
      : "rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-1.5 liquid-glass-strong text-white";

  return (
    <prodMotion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -4, boxShadow: "0 30px 60px -20px rgba(255,255,255,0.18)" }}
      className={
        "relative rounded-[1.5rem] overflow-hidden min-h-[520px] flex flex-col transition-shadow " +
        (highlight ? "ring-1 ring-white/40 shadow-[0_0_60px_-20px_rgba(255,255,255,0.35)]" : "")
      }
    >
      {/* Background image with fallback + vignette */}
      <CinematicBg
        src={bgSrc}
        fallbackSrc={bgFallback}
        overlay={
          highlight
            ? "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(10,10,12,0.78) 55%, rgba(0,0,0,0.96) 100%)"
            : "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.97) 100%)"
        }
      />

      <div className="relative z-10 flex-1 flex flex-col p-6 md:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            {highlight && (
              <span className="inline-flex items-center gap-1 bg-white text-black rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide w-fit">
                <SparkleIcon className="h-3.5 w-3.5" /> Recomendado
              </span>
            )}
            {statusBadge && (
              <span className="inline-flex items-center gap-1.5 liquid-glass rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide w-fit text-white/90">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
                {statusBadge}
              </span>
            )}
          </div>
          <prodMotion.div
            className="flex flex-wrap justify-end gap-1.5 max-w-[75%]"
          >
            {tags.map((t) => (
              <prodMotion.span
                key={t}
                whileHover={{ y: -1, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.45)" }}
                transition={{ duration: 0.2 }}
                className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
              >
                {t}
              </prodMotion.span>
            ))}
          </prodMotion.div>
        </div>

        <div className="flex-1" />

        {/* Title + price */}
        <div className="mt-8">
          <h3
            className="font-heading italic text-white text-4xl md:text-5xl leading-none"
            style={{ letterSpacing: "-1.5px" }}
          >
            {title}
          </h3>
          {price && (
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-heading italic text-white text-3xl" style={{ letterSpacing: "-1px" }}>
                {price}
              </span>
              {price.includes("R$") && (
                <span className="text-xs text-white/60 font-body">pagamento único</span>
              )}
            </div>
          )}
          <p className="mt-4 text-sm text-white/85 font-body font-light leading-snug max-w-[36ch]">
            {description}
          </p>

          {bullets && (
            <ul className="mt-4 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/85 font-body font-light">
                  <span className="mt-0.5 text-white/70">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="mt-6">
            {disabled ? (
              <button
                disabled
                className="liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white/60 inline-flex items-center gap-1.5 cursor-not-allowed"
              >
                {ctaLabel}
              </button>
            ) : (
              <prodMotion.a
                href={ctaHref}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={buttonStyles}
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </prodMotion.a>
            )}
            {belowCta && (
              <div className="mt-2 text-xs text-white/55 font-body italic">
                {belowCta}
              </div>
            )}
          </div>
        </div>
      </div>
    </prodMotion.div>
  );
}

function Products() {
  return (
    <section id="produtos" className="relative w-full bg-black overflow-hidden py-24 md:py-32">
      {/* Cinematic backdrop — subtle, deep dark overlay */}
      <CinematicBg
        src="https://images.unsplash.com/photo-1554224155-cfa08c2a758f?auto=format&fit=crop&w=2400&q=80"
        videoSrc={window.CV_VIDEO_B}
        overlay="linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.80) 100%)"
      />

      {/* Top texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at 80% 100%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <prodMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="text-sm font-body text-white/70 mb-5">// Escolha o seu caminho</div>
          <h2
            className="font-heading italic text-white text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.92]"
            style={{ letterSpacing: "-3px" }}
          >
            Três portas
            <br />
            de entrada
          </h2>
          <p className="mt-6 text-white/75 font-body font-light max-w-xl leading-snug">
            Comece pelo essencial, leve o método completo ou veja a prévia do app —
            você decide o tamanho do passo.
          </p>
        </prodMotion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <ProductCard
            index={0}
            bgSrc="assets/CAPA_LIVRO_POPULAR.jpg"
            bgFallback="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80"
            tags={["Entrada", "Leitura de 1h", "7 capítulos"]}
            title="Edição Popular"
            price="R$ 9,90"
            description="O método essencial em 7 capítulos curtos com plano de 7 dias. Pra quem quer testar antes de investir no pacote completo."
            bullets={[
              "7 capítulos curtos e diretos",
              "Plano prático de 7 dias",
              "E-book em PDF — leitura no celular",
            ]}
            ctaLabel="Quero por R$ 9,90"
            ctaHref="https://pay.cakto.com.br/880634"
          />

          <ProductCard
            index={1}
            bgSrc="uploads/CAPA_LIVRO_PREMIUM.png"
            bgFallback="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=80"
            tags={["Mais escolhido", "2 livros + 4 bônus", "Dados 2026"]}
            title="Kit Duplo"
            price="R$ 18,90"
            description="Popular + Edição Estratégica (8 capítulos com Selic, Desenrola e cálculos atualizados) + 4 bônus. Preço promocional de lançamento."
            bullets={[
              "Edição Popular completa",
              "Edição Estratégica (8 capítulos atualizados 2026)",
              "50 Ideias de Renda Extra",
              "Scripts de negociação + Plano 7 dias + Checklist mensal",
            ]}
            ctaLabel="Quero o Kit por R$ 18,90"
            ctaHref="https://pay.cakto.com.br/880647"
            highlight
          />

          <ProductCard
            index={2}
            bgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            tags={["App móvel", "Web app", "Pré-lançamento"]}
            title="Virada App"
            statusBadge="Em construção"
            description="Controle financeiro no celular ou navegador. Em fase final de ajustes — quem comprou o e-book recebe acesso prioritário gratuito no lançamento."
            bullets={[
              "Dashboard de gastos e receitas",
              "Categorização e metas mensais",
              "Funciona no celular e no PC",
            ]}
            ctaLabel="Ver prévia"
            ctaHref="https://app.progetoprontoia.tech"
            ctaVariant="outline"
            belowCta="Visão prévia — ainda em ajustes"
          />
        </div>

        <prodMotion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-xs text-white/55 font-body font-light max-w-2xl"
        >
          * Sem promessas de enriquecimento, sem números mágicos, sem mensalidade.
          O método entrega organização e clareza — o resultado depende da sua aplicação.
        </prodMotion.p>
      </div>
    </section>
  );
}

window.Products = Products;
