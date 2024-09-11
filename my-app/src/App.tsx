import React from 'react';
import '../src/styles/main.scss';
import HeaderNav from "../src/Components/HeaderNav";
import HeaderBanner from "../src/Components/HeaderBanner";
import MainServicos from "../src/Components/MainServicos";
import ModelCarousel from "../src/Components/Modelos";
import AgendeSeuHorario from "../src/Components/AgendeSeuHorario";
import RedesSociais from "../src/Components/RedesSociais";
import FooterBarber from "../src/Components/footer";

function App() {
  return (
    <div className="App">
        <header>
          <HeaderNav />
          <HeaderBanner />
        </header>
        <main>
          <MainServicos />
          <ModelCarousel />
          <AgendeSeuHorario />
          <RedesSociais />
        </main>
        <footer>
          <FooterBarber />
        </footer>
    </div>
  );
}

export default App;
