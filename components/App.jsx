// ============================================================
// App — Mount everything in order
// ============================================================

function App() {
  // Reveal-on-load for above-the-fold
  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('in');
      });
    });
  }, []);

  return (
    <div className="relative">
      <CursorHalo />
      <NavBar />
      <main className="relative z-[2]">
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <MethodMockup />
        <Pricing />
        <KitInclusos />
        <ViradaApp />
        <Audiobook />
        <Garantia />
        <Autor />
        <FAQ />
        <CtaFinal />
        <Footer />
      </main>
      <StickyCTA />
      <Chatbot />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
