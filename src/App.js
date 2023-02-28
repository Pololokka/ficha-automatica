import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';

import Bonus from './components/nível/Nivel';
import Vida from './components/hp/Vida';
import HitDice from './components/hit dice/HitDice';
import Ac from './components/ac/AC';

import ContainerGrande from './components/info geral containerG/InfoGeralContainG';
import ContainerPequeno from './components/info geral containerP/InfoGeralContainP';

import Atributo from './components/atributos/Atributos';

import Proficiencias from './components/proficiencias/Proficiencias';

import Ataque from './components/ataque/Ataque';

import Equipamento from './components/equipamento/Equipamento';

import MagiasPreparadas from './components/magias/preparadas/MagiasPreparadas';
import CabecalhoMagPrep from './components/magias/cabecalho magias preparadas/CabecalhoMagPrep';

import Poderes from './components/poderes/Poderes';

import Tesouros from './components/itens e tesouros/Tesouros';

import MagiasGeral from './components/magias/geral/MagiasGeral';

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
      <div className='geral__container-fundo'>
        <h2 className="subtitulo">HP</h2>
        <Vida />
        <p className="subtitulo">Hit Dice</p>
        <div className="geral__container">
          <HitDice dado={6}/>
          <HitDice dado={8}/>
          <HitDice dado={10}/>
          <HitDice dado={12}/>
        </div>
        <p className="subtitulo">AC</p>
        <Ac />
      </div>
      
      <div className="geral__container">
        <Atributo stat={"str"} />
        <Atributo stat={"dex"} />
        <Atributo stat={"con"} />
        <Atributo stat={"int"} />
        <Atributo stat={"wis"} />
        <Atributo stat={"cha"} />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Proficiências</h2>
        <Proficiencias tipoProf={"Escudos e Armaduras"} />
        <Proficiencias tipoProf={"Armas"} />
        <Proficiencias tipoProf={"Ferramentas e Instrumentos"} />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Ataques(máximo de 10)</h2>
        <Ataque />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Itens Principais(máximo de 10)</h2>
        <Equipamento />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Magias Preparadas</h2>
        <CabecalhoMagPrep />
        <MagiasPreparadas />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Personalidade(4)</h2>
        <Equipamento />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Poderes e Habilidades</h2>
        <Poderes />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Itens e Tesouros</h2>
        <Tesouros />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Magias</h2>
        <MagiasGeral />
      </div>

      <div className="geral__container-fundo">
        <h2 className="subtitulo">Notas(5)</h2>
        <Equipamento />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
