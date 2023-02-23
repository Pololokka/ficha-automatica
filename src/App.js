import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';

import Bonus from './components/nível/Nivel';
import Vida from './components/hp/Vida';

import ContainerGrande from './components/info geral containerG/InfoGeralContainG';
import ContainerPequeno from './components/info geral containerP/InfoGeralContainP';

import Atributo from './components/atributos/Atributos';

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
      <div className='geral__container'>
        <Vida />
      </div>
      
      <div className="geral__container">
        <Atributo stat={"str"} />
        <Atributo stat={"dex"} />
        <Atributo stat={"con"} />
        <Atributo stat={"int"} />
        <Atributo stat={"wis"} />
        <Atributo stat={"cha"} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
