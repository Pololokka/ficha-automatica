import './CabecalhoMagPrep.css';
import { useState } from 'react';

const CabecalhoMagPrep = () => {
    const [bonusMagAtk, setNovoMagAtk] = useState(0)
    const [saveDc, setNovoDC] = useState(0)
 
    const fazContaMagPrep = () => {
        const achaAtrCast = document.querySelector("[data-cabe-mag-prep]").value;
        
        const atrCast = parseInt(document.getElementById(achaAtrCast).value);
        const bonusAtrCast = Math.floor(atrCast/2)-5;

        const nivel = document.querySelector("[data-nivel]").value;
        const prof = 1 + Math.ceil(nivel/4);

        let contaMagPrep = 8 + bonusAtrCast + prof;
        if(contaMagPrep < 0){
            contaMagPrep = 0;
        }
        setNovoDC(contaMagPrep);

        contaMagPrep = bonusAtrCast + prof;
        if(contaMagPrep < 0){
            contaMagPrep = 0;
        }
        setNovoMagAtk(contaMagPrep);
    } 

    return (
        <div className="cabe-mag-prep__container">
            <div className="cabe-mag-prep__inputs">
                <label className='texto' htmlFor="cabe-mag-prep">Atributo: </label>
                <select className='texto geral__input cabe-mag-prep__atr' name="cabe-mag-prep" id="cabe-mag-prep" data-cabe-mag-prep>
                    <option value="str">STR</option>
                    <option value="dex">DEX</option>
                    <option value="con">CON</option>
                    <option value="int">INT</option>
                    <option value="wis">WIS</option>
                    <option value="cha">CHA</option>
                </select>

                <label className='texto' htmlFor="cant-number">Cantrips: </label>
                <input type="number" name="cant-number" className='texto geral__input spell-number__input'/>

                <label className='texto' htmlFor="spell-known-number">Magias Conhecidas: </label>
                <input type="number" name="spell-known-number" className='texto geral__input spell-number__input'/>

                <label className='texto' htmlFor="spell-number">Magias Preparadas: </label>
                <input type="number" name="spell-number" className='texto geral__input  spell-number__input'/>
            </div>

            <div className="mag-prep__conta--container">
                <p className="texto">Save DC: {saveDc}</p>
                <p className="texto">Bônus de Ataque: {bonusMagAtk}</p>

                <button onClick={fazContaMagPrep} className="texto botao__geral">Calcular</button>
            </div>
            
        </div>
    )
}

export default CabecalhoMagPrep;
