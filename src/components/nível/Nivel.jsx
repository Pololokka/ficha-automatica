import './Nivel.css'
import { useState } from 'react';

const Bonus = () => {
    const [prof, setNovaProf] = useState(2)

    const mudaBonus = () => {
        const nivel = document.querySelector("[data-nivel]").value;
        const profFinal = 1 + Math.ceil(nivel/4);
        
        setNovaProf(profFinal);
    }
    
    return (
        <div className="nivel__container">
            <div className="nivel__input">
                <label htmlFor="exp" className='texto' >Experiência</label>
                <input type="number" name="exp" id="exp" className='texto nivel__input--player geral__input' />
            </div>
            
            <div className="nivel__input">
                <label htmlFor="lvl" className='texto' >Nível</label>
                <input onChange={mudaBonus} type="number" name="lvl" id="lvl" min="1" className='texto nivel__input--player geral__input' data-nivel />
            </div>
            
            <p className='texto' data-bonus={prof}>Bônus de Proficiência: +{prof}</p>
        </div>
    );
}

export default Bonus;
