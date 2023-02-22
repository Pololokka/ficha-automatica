import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';
import ContainerGrande from './components/info geral containerG/InfoGeralContainG';
import ContainerPequeno from './components/info geral containerP/InfoGeralContainP';
import Atributo from './components/atributos/Atributos';

const carisma = [
  {
      id : 14,
      habilidade : "Atuação"
  },
  {
      id : 15,
      habilidade : "Enganação"
  },
  {
      id : 16,
      habilidade : "intimidação"
  },
  {
      id : 17,
      habilidade : "Persuasão"
  }
]

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
      <ContainerPequeno>
        <Atributo stat={carisma}/>
        <Atributo />
        <Atributo />
        <Atributo />
        <Atributo />
      </ContainerPequeno>
      <Footer />
    </div>
  );
}

export default App;
