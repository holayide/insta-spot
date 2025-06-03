import Cards from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Hero />
        <hr class="hero-divider" />

        <Cards />

        <hr class="hero-divider" />
      </main>

      <Footer />
    </>
  );
}

export default App;
