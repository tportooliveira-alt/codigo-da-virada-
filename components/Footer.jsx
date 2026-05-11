const { motion: footerMotion } = window.Motion;

function Footer() {
  const linkHover = {
    whileHover: { x: 3, color: "rgb(255,255,255)" },
    transition: { duration: 0.18, ease: "easeOut" },
  };

  return (
    <footer className="relative w-full bg-black pt-16 pb-10 overflow-hidden border-t border-white/10">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <footerMotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8"
        >
          {/* Brand */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <div className="liquid-glass rounded-full" style={{ width: 44, height: 44 }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading italic text-white text-xl leading-none">cv</span>
                </div>
              </div>
              <span className="font-heading italic text-white text-2xl" style={{ letterSpacing: "-0.5px" }}>
                Código da Virada
              </span>
            </div>
            <p className="mt-5 text-sm text-white/70 font-body font-light leading-snug max-w-md">
              Método brasileiro de organização financeira. Linguagem direta,
              passo a passo prático, sem promessa de milagre.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <footerMotion.a
                href="https://pay.cakto.com.br/880634"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
                transition={{ duration: 0.2 }}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-white font-body inline-flex items-center gap-1"
              >
                Popular R$ 9,90 <ArrowUpRight className="h-3.5 w-3.5" />
              </footerMotion.a>
              <footerMotion.a
                href="https://pay.cakto.com.br/880647"
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
                transition={{ duration: 0.2 }}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-white font-body inline-flex items-center gap-1"
              >
                Kit Duplo R$ 18,90 <ArrowUpRight className="h-3.5 w-3.5" />
              </footerMotion.a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <div className="text-xs text-white/55 font-body uppercase tracking-[0.18em] mb-4">
              Navegação
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { l: "Início", h: "#topo" },
                { l: "Produtos", h: "#produtos" },
                { l: "Bônus", h: "#bonus" },
                { l: "Autor", h: "#autor" },
                { l: "FAQ", h: "#faq" },
              ].map((it) => (
                <li key={it.l}>
                  <footerMotion.a
                    href={it.h}
                    {...linkHover}
                    className="text-sm text-white/85 font-body inline-block"
                  >
                    {it.l}
                  </footerMotion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-xs text-white/55 font-body uppercase tracking-[0.18em] mb-4">
              Contato
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <footerMotion.a
                  href="https://codigodavirada.net.br"
                  target="_blank"
                  rel="noopener"
                  {...linkHover}
                  className="text-sm text-white/85 font-body inline-flex items-center gap-1"
                >
                  codigodavirada.net.br <ArrowUpRight className="h-3 w-3" />
                </footerMotion.a>
              </li>
              <li>
                <footerMotion.a
                  href="mailto:tportooliveira@gmail.com"
                  {...linkHover}
                  className="text-sm text-white/85 font-body inline-block"
                >
                  tportooliveira@gmail.com
                </footerMotion.a>
              </li>
            </ul>
          </div>
        </footerMotion.div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="text-xs text-white/55 font-body">
            © 2026 Thiago Porto Oliveira — Código da Virada. Todos os direitos reservados.
          </span>
          <span className="text-xs text-white/45 font-body max-w-xl md:text-right">
            Conteúdo educacional. Não constitui aconselhamento financeiro individual,
            consultoria de investimentos ou garantia de resultado.
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
