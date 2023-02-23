import './Atributos.css'
import { useState } from 'react'

const AtributoConstituicao = () => {
    const [atrBonus, setNovoAtr] = useState(0)
    const [proficiencia, setNovaProf] = useState(0)

    const calculaAtr = () => {
        const atributo = document.querySelector("[data-atributo]").value;
        const bonusAtributo = Math.ceil(atributo/2)-5

        const nivel = document.querySelector("[data-nivel]").value;
        const prof = 1 + Math.ceil(nivel/4);
        const profFinal = bonusAtributo + prof;

        setNovoAtr(bonusAtributo);
        setNovaProf(profFinal)
    }

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>Constituição</label>
            <input onChange={calculaAtr} type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">{atrBonus}</p>

            <p className="texto skill__bonus">Proficiência: {proficiencia}</p>

            <div className="skill__container">
                <label htmlFor="save" className='texto'>Saving Throw </label>
                <input type="checkbox" name="save" id="save" />
            </div> 
        </div>
    )
}

export default AtributoConstituicao;
