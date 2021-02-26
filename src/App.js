import React from 'react';
import Header from './components/Header';
import ExibirTabela from './components/ExibirTabela';
import BotaoUsuarios from './components/BotaoUsuarios';
import BotaoUnidades from './components/BotaoUnidades';
import BotaoAtivos from './components/BotaoAtivos';
import BotaoEmpresas from './components/BotaoEmpresas';
import BuscaRapida from './components/Tabs';
import Footer from './components/Footer';
// import RenderizaGrafico from './components/RenderizaGrafico';
const App = () => {
  return (
    <>
      <Header />

      <div id="nav">
        <BotaoUsuarios />
        <BotaoUnidades />
        <BotaoAtivos />
        <BotaoEmpresas />
      </div>
      <ExibirTabela />
      <BuscaRapida />
      <Footer />
    </>
  );
};
export default App;
