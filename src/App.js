import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';
import ContainerGrande from './components/info geral containerG/InfoGeralContainG';
import ContainerPequeno from './components/info geral containerP/InfoGeralContainP';

function App() {
  return (
    <div className="App">
      <Header />
      <PrintaImagem />
      <ContainerGrande>
        <h2 className="subtitulo">Informações Gerais</h2>
        <ContainerPequeno>
          <Informacoes name="Nome do Personagem"/>
          <Informacoes name="Background"/>
          <Informacoes name="Alinhamento"/>
          <Informacoes name="Deidade"/>
        </ContainerPequeno>
        <ContainerPequeno>
          <Informacoes name="Raça"/>
          <Informacoes name="Sub-raça"/>
          <Informacoes name="Classe"/>
          <Informacoes name="Arquétipo"/>
        </ContainerPequeno>
      </ContainerGrande>
      <Footer />
    </div>
  );
}

export default App;
