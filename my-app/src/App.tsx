import React from 'react';
import '../src/styles/main.scss';
import HeaderNav from "../src/Components/HeaderNav";
import HeaderBanner from "../src/Components/HeaderBanner";
import MainServicos from "../src/Components/MainServicos";
import ModelCarousel from "../src/Components/Modelos";
import AgendeSeuHorario from "../src/Components/AgendeSeuHorario";
import FooterBarber from "../src/Components/footer";

function App() {
  return (
    <div className="App">
        <header>
          <div className='backgroundbannerdivbox'>
            <HeaderNav />
            <HeaderBanner />
          </div>
        </header>
        <main>
          <div className='backgroundimageclass'>
            <MainServicos />
            <ModelCarousel />
          </div>
          <AgendeSeuHorario />
        </main>
        <footer>
          <FooterBarber />
        </footer>
    </div>
  );
}

export default App;
