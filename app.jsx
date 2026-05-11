function App() {
  return (
    <main>
      <Hero />
      <Quote />
      <Products />
      <Bonuses />
      <Author />
      <FAQ />
      <Footer />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
