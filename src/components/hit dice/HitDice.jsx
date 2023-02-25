import './HitDice.css'
import { useState } from 'react'

const HitDice = ({dado}) => {
    const [hitDice, setNovoHitdie] = useState(0)

    const fazHitdice = () => {
        const save = Math.ceil(Math.random() * dado);
        
        setNovoHitdie(save);
    }
    
    return (
        <div className="hit-d__container">
                <p className="texto">D{dado}</p>
                <label htmlFor="hit-d" className='texto' >Total: </label>
                <input type="number" name="hit-d" className='texto hit-d__input geral__input' />
                <label htmlFor="hit-d" className='texto' >Usado: </label>
                <input type="number" name="hit-d" className='texto hit-d__input geral__input' />
                <button onClick={fazHitdice} className="texto botao__geral">Rolar Hit Die</button>
                <p className="texto">Resultado: {hitDice}</p>
        </div>
    );
}

export default HitDice;
