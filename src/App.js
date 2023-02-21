import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PrintaImagem from './components/image/Image';
import Informacoes from './components/info geral/InfoGeral';

function App() {
  return (
    <div className="App">
      <Header />
      <PrintaImagem />
      <Informacoes />
      <Footer />
    </div>
  );
}

export default App;
