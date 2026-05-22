// ============================================================
// Audiobook — Teaser do que vem (early-bird via order bump)
// ============================================================

function Audiobook() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="wrap">
        <div className="liquid-glass border border-white/[0.06] p-8 md:p-14 overflow-hidden relative">
          {/* Aurora behind */}
          <div className="absolute inset-0 -z-0 opacity-60">
            <div className="aurora aurora-slow" />
          </div>

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <Eyebrow>// Em produção · Lança 2º semestre 2026</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="h-display text-5xl md:text-[68px] text-white mt-6 leading-[0.96]">
                  O Audiobook<br />
                  <span className="font-serif-i text-gold">A História de Maria</span>.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-white/65 text-lg max-w-xl font-light leading-relaxed">
                  Cinco volumes. Cinquenta capítulos. Uma família CLT brasileira atravessando dez anos
                  de virada financeira — narrado como audionovela, com método embutido na história.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-9 grid grid-cols-3 gap-3 max-w-md">
                  <Stat n="05" label="Volumes" />
                  <Stat n="50" label="Capítulos" />
                  <Stat n="14h" label="Duração estimada" />
                </div>
              </Reveal>

              <Reveal delay={4}>
                <div className="mt-9 inline-flex items-center gap-3 liquid-glass border border-gold/30 px-5 py-3.5">
                  <Icon.Headphones className="w-5 h-5 text-gold" />
                  <div>
                    <div className="text-[15px] text-white">
                      Early-bird: <span className="text-gold font-medium">R$ 27</span> (50% off)
                    </div>
                    <div className="text-[11.5px] text-white/55">
                      Marca como order bump ao comprar o Kit (R$ 67)
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Visual: stack of audio chapters */}
            <Reveal delay={2}>
              <AudiobookStack />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div className="liquid-glass border border-white/[0.06] py-4 px-2 text-center">
      <div className="font-serif-i text-3xl md:text-4xl text-gold leading-none">{n}</div>
      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40">{label}</div>
    </div>
  );
}

function AudiobookStack() {
  const tracks = [
    { vol: 'Vol. 01', t: 'A descoberta do envelope vermelho', d: '02:14' },
    { vol: 'Vol. 02', t: 'Maria escolhe outra prateleira', d: '01:47' },
    { vol: 'Vol. 03', t: 'O dia em que o cartão recusou', d: '02:32' },
    { vol: 'Vol. 04', t: 'O método das três contas', d: '01:58' },
    { vol: 'Vol. 05', t: 'A virada que ninguém vê', d: '03:11' },
  ];
  return (
    <div className="space-y-2.5">
      {tracks.map((tr, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 liquid-glass border ${
            i === 0 ? 'border-gold/30' : 'border-white/[0.06]'
          } p-3.5`}
        >
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              i === 0 ? 'bg-gold text-black' : 'bg-white/[0.06] text-white/70'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><polygon points="6 4 20 12 6 20 6 4"/></svg>
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-[10.5px] font-mono uppercase tracking-widest text-white/40">{tr.vol}</div>
            <div className="text-[14px] text-white truncate font-serif-i italic mt-0.5">{tr.t}</div>
          </div>
          {/* waveform */}
          <div className="hidden sm:flex items-end gap-[2px] h-6">
            {Array.from({ length: 14 }).map((_, j) => (
              <div
                key={j}
                className="w-[2px] rounded-full"
                style={{
                  height: `${20 + Math.abs(Math.sin(j * 1.4 + i)) * 80}%`,
                  background: i === 0 ? 'rgba(240,168,48,0.7)' : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>
          <div className="text-[11px] font-mono text-white/40 ml-1">{tr.d}</div>
        </div>
      ))}
    </div>
  );
}

window.Audiobook = Audiobook;
