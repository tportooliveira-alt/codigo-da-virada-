const { useState: useFaqState } = React;
const { motion: faqMotion, AnimatePresence: FaqAnimatePresence } = window.Motion;

function FAQItem({ question, answer, open, onToggle, index = 0 }) {
  return (
    <faqMotion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="liquid-glass rounded-[1.25rem] overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
      >
        <span className="font-heading italic text-white text-xl md:text-2xl leading-tight" style={{ letterSpacing: "-0.5px" }}>
          {question}
        </span>
        <span
          className="text-white/80 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>
      <FaqAnimatePresence initial={false}>
        {open && (
          <faqMotion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-5 text-sm md:text-base text-white/80 font-body font-light leading-snug max-w-2xl">
              {answer}
            </div>
          </faqMotion.div>
        )}
      </FaqAnimatePresence>
    </faqMotion.div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useFaqState(0);

  const items = [
    {
      q: "Funciona pra quem ganha pouco?",
      a: "Sim — o método foi pensado exatamente pra quem está apertado. Os capítulos partem de zero, sem assumir que você tem reserva, investimentos ou sobra no fim do mês. A proposta é organizar o que você já tem antes de pensar em ganhar mais.",
    },
    {
      q: "Como recebo o e-book?",
      a: "Logo após a confirmação do pagamento, o link de download chega no seu e-mail. É um PDF que abre no celular, computador ou tablet. Sem cadastro em plataforma, sem aula em vídeo — leitura direta.",
    },
    {
      q: "Tem suporte?",
      a: "Sim. Em caso de dúvida sobre o produto ou problema com o download, você pode escrever pra tportooliveira@gmail.com que respondemos. Não é mentoria individual, é suporte ao produto.",
    },
    {
      q: "Funciona pra autônomo, CLT ou MEI?",
      a: "Os três perfis foram considerados na hora de escrever. A diferença prática aparece no capítulo de receita variável e no script de negociação — o passo a passo é o mesmo, o que muda é o que entra na conta de cada um.",
    },
    {
      q: "E se eu não gostar?",
      a: "Garantia incondicional de 7 dias. Se nos primeiros 7 dias depois da compra você achar que não é pra você, basta enviar um e-mail pedindo o reembolso. Sem pergunta, sem burocracia.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      {/* Subtle video backdrop */}
      <CinematicBg
        src="uploads/_full_frame_28s-cb1fd7b4.jpg"
        videoSrc={window.CV_VIDEO_B}
        overlay="linear-gradient(180deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.98) 100%)"
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {/* Guarantee banner */}
        <faqMotion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="liquid-glass-strong rounded-[1.5rem] p-6 md:p-8 mb-14 flex flex-col md:flex-row items-start md:items-center gap-5"
        >
          <faqMotion.div
            animate={{
              boxShadow: [
                "inset 0 0 0 1px rgba(255,255,255,0.05)",
                "inset 0 0 0 1px rgba(255,255,255,0.25)",
                "inset 0 0 0 1px rgba(255,255,255,0.05)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-glass flex items-center justify-center shrink-0"
            style={{ width: 56, height: 56, borderRadius: "1rem" }}
          >
            <ShieldIcon className="h-7 w-7 text-white" />
          </faqMotion.div>
          <div className="flex-1">
            <h3 className="font-heading italic text-white text-3xl md:text-4xl leading-none" style={{ letterSpacing: "-1px" }}>
              Garantia incondicional de 7 dias
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/80 font-body font-light leading-snug max-w-2xl">
              Comprou, abriu, leu — e se não fizer sentido pra você, devolvemos cada centavo.
              Sem questionário, sem letra miúda.
            </p>
          </div>
        </faqMotion.div>

        <faqMotion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="text-sm font-body text-white/70 mb-5">// Dúvidas frequentes</div>
          <h2
            className="font-heading italic text-white text-5xl md:text-6xl leading-[0.92]"
            style={{ letterSpacing: "-2.5px" }}
          >
            Perguntas que
            <br />
            chegam sempre
          </h2>
        </faqMotion.div>

        <div className="flex flex-col gap-3">
          {items.map((it, i) => (
            <FAQItem
              key={it.q}
              index={i}
              question={it.q}
              answer={it.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
