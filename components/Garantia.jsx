// ============================================================
// Garantia — Selo grande, texto direto
// ============================================================

function Garantia() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="wrap">
        <div className="liquid-glass border border-white/[0.06] p-8 md:p-14 grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center relative overflow-hidden">
          <div
            className="absolute -left-20 -top-20 w-72 h-72 rounded-full blur-3xl opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(240,168,48,0.4), transparent 65%)' }}
          />

          {/* Seal */}
          <Reveal className="relative shrink-0 mx-auto md:mx-0">
            <GuaranteeSeal />
          </Reveal>

          {/* Text */}
          <div className="relative">
            <Reveal>
              <div className="badge badge-gold">// Garantia incondicional</div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif-i text-4xl md:text-6xl text-white mt-5 leading-[1.02]">
                30 dias pra testar tudo.<br />
                Sem questionário. Sem fricção.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-white/65 text-lg max-w-2xl font-light leading-relaxed">
                Se em 30 dias o método não fizer sentido pra você, devolvo 100% do dinheiro
                — sem perguntar por quê. Você pode até manter os arquivos baixados. Eu confio no método.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/60">
                <span className="inline-flex items-center gap-2"><Icon.Check className="w-4 h-4 text-gold"/>Reembolso em até 7 dias úteis</span>
                <span className="inline-flex items-center gap-2"><Icon.Check className="w-4 h-4 text-gold"/>Pelo próprio botão na Kiwify</span>
                <span className="inline-flex items-center gap-2"><Icon.Check className="w-4 h-4 text-gold"/>Vale pra todos os planos</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSeal() {
  return (
    <div className="relative w-44 h-44 md:w-56 md:h-56">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #f0a830, #d48a1f, #f0a830)',
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle at 50% 30%, rgba(240,168,48,0.25), transparent 70%)' }}
          />
          {/* curved text via SVG */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <defs>
              <path id="top-arc" d="M 30 100 A 70 70 0 0 1 170 100" fill="none" />
              <path id="bottom-arc" d="M 170 100 A 70 70 0 0 1 30 100" fill="none" />
            </defs>
            <text fill="rgba(240,168,48,0.7)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
              <textPath href="#top-arc" startOffset="50%" textAnchor="middle">GARANTIA · 30 DIAS · INCONDICIONAL</textPath>
            </text>
            <text fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="3">
              <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">SEM QUESTIONÁRIO</textPath>
            </text>
          </svg>

          <div className="relative text-center">
            <div className="font-serif-i text-gold text-6xl leading-none">30</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/55 mt-1">dias</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Garantia = Garantia;
