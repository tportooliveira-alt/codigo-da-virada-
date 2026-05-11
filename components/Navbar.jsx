function Navbar() {
  const links = [
    { label: "Início", href: "#topo" },
    { label: "Produtos", href: "#produtos" },
    { label: "Bônus", href: "#bonus" },
    { label: "Autor", href: "#autor" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#topo" className="liquid-glass rounded-full block" style={{ width: 48, height: 48 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading italic text-white text-2xl leading-none" style={{ transform: "translateY(-1px)" }}>
              cv
            </span>
          </div>
        </a>

        {/* Center pill (desktop) */}
        <div className="hidden md:flex liquid-glass rounded-full items-center px-1.5 py-1.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#produtos"
            className="ml-1.5 inline-flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
          >
            Quero o Kit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#produtos"
          className="md:hidden inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-2 text-xs font-medium whitespace-nowrap"
        >
          Quero o Kit
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

window.Navbar = Navbar;
