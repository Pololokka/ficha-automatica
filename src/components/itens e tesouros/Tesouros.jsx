import './Tesouros.css';
import { useState } from 'react';

const Tesouros = () => {
    const [gpTotal, setNovoGp] = useState(0)
 
    const fazContaOuro = () => {
        const cpValor = parseInt(document.querySelector("[data-cp]").value);
        const spValor = parseInt(document.querySelector("[data-sp]").value);
        const epValor = parseInt(document.querySelector("[data-ep]").value);
        const gpValor = parseInt(document.querySelector("[data-gp]").value);
        const ppValor = parseInt(document.querySelector("[data-pp]").value);
        
        const dinheiroConta = (cpValor * 0.01) + (spValor * 0.1) + (epValor * 0.5) + gpValor + (10 * ppValor);
        setNovoGp(dinheiroConta);
    } 

    return (
        <div className="tesouro__container">
            <textarea name="tesouro" className='texto geral__input tesouro__text-area' cols="30" rows="10"></textarea>
            

            <div className="tesouro__conta--container">
                <label htmlFor="cp-qta" className='texto'>CP: </label>
                <input type="number" name="cp-qta" className='texto geral__input dinheiro__input' data-cp/>

                <label htmlFor="sp-qta" className='texto'>SP: </label>
                <input type="number" name="sp-qta" className='texto geral__input dinheiro__input' data-sp/>

                <label htmlFor="ep-qta" className='texto'>EP: </label>
                <input type="number" name="ep-qta" className='texto geral__input dinheiro__input' data-ep/>

                <label htmlFor="gp-qta" className='texto'>GP: </label>
                <input type="number" name="gp-qta" className='texto geral__input dinheiro__input' data-gp/>

                <label htmlFor="pp-qta" className='texto'>PP: </label>
                <input type="number" name="pp-qta" className='texto geral__input dinheiro__input' data-pp/>
            </div>

            <p className="texto texto__tesouro">Valor em GP: {gpTotal}</p>
            <button onClick={fazContaOuro} className="texto botao__geral">Calcular</button>
            
        </div>
    )
}

export default Tesouros;
