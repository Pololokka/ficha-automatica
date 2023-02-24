import './AC.css';
import { useState } from 'react';

const Ac = ({stat}) => {
    const [AcTotal, setNovaAc] = useState(0)

    const fazAC = () => {
        const acBase = parseInt(document.querySelector("[data-ac-base]").value);
        const acMag = parseInt(document.querySelector("[data-ac-mag]").value);
        const acExt = parseInt(document.querySelector("[data-ac-ext]").value);
        const acEsc = parseInt(document.querySelector("[data-ac-esc]").value);

        const destrezaInicial = parseInt(document.getElementById("dex").value);
        const bonusDex = Math.floor(destrezaInicial/2)-5;

        const sabedoriaInicial = parseInt(document.getElementById("wis").value);
        const bonusSab = Math.floor(sabedoriaInicial/2)-5;
        const constituicaoInicial = parseInt(document.getElementById("con").value);
        const bonusCon = Math.floor(constituicaoInicial/2)-5;
        
        const bonusMedia = 2;

        const armadura = document.querySelector("[data-armadura]").value;

        let acCalculo;

        switch (armadura) {
            case 'monge':
                    acCalculo = acBase + acMag + acExt + acEsc + bonusDex + bonusSab;
                break;
            case 'barbaro':
                    acCalculo = acBase + acMag + acExt + acEsc + bonusDex + bonusCon;
                break;
            case 'leve':
                    acCalculo = acBase + acMag + acExt + acEsc + bonusDex;
                break;
            case 'media':
                    acCalculo = acBase + acMag + acExt + acEsc + bonusMedia;
                break;
            case 'pesada':
                    acCalculo = acBase + acMag + acExt + acEsc;
                break;
            default:
                    acCalculo = acBase + acMag + acExt + acEsc + bonusDex;
                break;
        }

        setNovaAc(acCalculo);
    } 

    return (
        <div className="armadura__container">
            <div className="armadura__inputs">
                <label className='texto' htmlFor="armadura">Armadura: </label>
                <select className='texto armadura__tipo' name="armadura" id="armadura" data-armadura>
                    <option value="nada">Nenhuma(AC Base = 8)</option>
                    <option value="monge">Nenhuma(Monge)</option>
                    <option value="barbaro">Nenhuma(Bárbaro)</option>
                    <option value="leve">Leve</option>
                    <option value="media">Média</option>
                    <option value="pesada">Pesada</option>
                </select>

                <label className='texto' htmlFor="ac-base">AC Base:</label>
                <input type="number" name="ac-base" className='texto armadura__valor--input' id="ac-base" data-ac-base/>

                <label className='texto' htmlFor="stealth-des">Desvantagem em Stealth: </label>
                <input type="checkbox" name="stealth-des" id="stealth-des" />

                <label className='texto' htmlFor="bonus-mag">Bonus Mágico: </label>
                <input type="number" name="bonus-mag" className='texto armadura__valor--input' id="bonus-mag" data-ac-mag/>

                <label className='texto' htmlFor="bonus-ext">Bonus Extra: </label>
                <input type="number" name="bonus-ext" className='texto armadura__valor--input' id="bonus-ext" data-ac-ext/>

                <label className='texto' htmlFor="escudo">Escudo: </label>
                <input type="number" name="escudo" className='texto armadura__valor--input' id="escudo" data-ac-esc/>
            </div>

            <button onClick={fazAC} className="texto botao__geral">Calcular</button>
            <p className="texto">Resultado: {AcTotal}</p>
            
        </div>
    )
}

export default Ac;
