import './Vida.css'
import { useState } from 'react'

const Vida = () => {
    const [deathSave, setNovoSave] = useState(0)

    const fazTeste = () => {
        const save = Math.ceil(Math.random() * 20);
        
        setNovoSave(save);
    }
    
    return (
        <div className="vida__container">
            <p className="subtitulo">HP</p>

            <div className="input__container">
                <div className="vida__input">
                    <label htmlFor="hp-total" className='texto' >Vida Total: </label>
                    <input type="number" name="hp-total" id="hp-total" className='texto vida__input--player' />
                </div>

                <div className="vida__input">
                    <label htmlFor="hp-atual" className='texto' >Vida Atual: </label>
                    <input type="number" name="hp-atual" id="hp-atual" className='texto vida__input--player' />
                </div>

                <div className="vida__input">
                    <label htmlFor="hp-temp" className='texto' >Vida Temporaria: </label>
                    <input type="number" name="hp-temp" id="hp-temp" className='texto vida__input--player' />
                </div>

                <div className="death-s__container">
                    <p className="texto">Save de Morte</p>

                    <div className="death-s__input">
                        <label htmlFor="hp" className='texto' >Sucesso: </label>
                        <input type="checkbox" name="" />
                        <input type="checkbox" name="" />
                        <input type="checkbox" name="" />
                    </div>
                    
                    <div className="death-s__input">
                        <label htmlFor="hp" className='texto' >Falha: </label>
                        <input type="checkbox" name="" />
                        <input type="checkbox" name="" />
                        <input type="checkbox" name="" />
                    </div>

                    <button onClick={fazTeste} className="texto botao__teste">Fazer Teste</button>
                    <p className="texto">Valor: {deathSave}</p>            
                </div>
            </div>
            
        </div>
    );
}

export default Vida;
