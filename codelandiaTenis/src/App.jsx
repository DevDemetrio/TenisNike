import Banner from "./components/Banner";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import bannerBackground from "./assets/Air-jordan.png";

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />

      <Banner
        backgroundImage={bannerBackground}
        title={"A melhor loja de Jordan"}
        text={
          "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
        }
      />
    </>
  );
}

export default App;
