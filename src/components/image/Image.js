import './Image.css'
import { useState } from 'react';

const PrintaImagem = () => {
    const [imagemPlayer, setNovaImagem] = useState("https://cdn.discordapp.com/attachments/621499803884584998/1077674092137812078/TheTemplar.jpg")

    const mudaFoto = () => {
        const foto = document.querySelector("[data-foto]").value;
        setNovaImagem(foto);
    }
    
    return (
        <div className="ficha__container">
            <div className='interacao__container'>
                <label htmlFor="link-foto" className='texto'>Link da sua foto:</label>
                <input type="text" name="link-foto" className='texto foto__input' id="linkFoto" data-foto />
                <button onClick={mudaFoto} className="texto botao__geral">Carregar</button>
            </div>
            <img src={imagemPlayer} alt="Imagem do personagem" className='imagem__container'/>
        </div>
    );
}

export default PrintaImagem
