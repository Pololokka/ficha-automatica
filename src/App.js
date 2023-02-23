import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';

import Bonus from './components/nível/Nivel';

import ContainerGrande from './components/info geral containerG/InfoGeralContainG';
import ContainerPequeno from './components/info geral containerP/InfoGeralContainP';

import AtributoForça from './components/atributos/AtributosForca';
import AtributoDestreza from './components/atributos/AtributoDestreza';
import AtributoConstituicao from './components/atributos/AtributoConstituicao';
import AtributoInteligencia from './components/atributos/AtributoInteligencia';
import AtributoSabedoria from './components/atributos/AtributoSabedoria';
import AtributoCarisma from './components/atributos/AtributoCarisma';

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

      <Bonus />
      
      <div className="atrbiutos__container">
        <AtributoForça />
        <AtributoDestreza />
        <AtributoConstituicao />
        <AtributoInteligencia />
        <AtributoSabedoria />
        <AtributoCarisma />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
