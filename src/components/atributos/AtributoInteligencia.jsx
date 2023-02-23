import './Atributos.css'
import { useState } from 'react';

const AtributoInteligencia = () => {
    const [atrBonus, setNovoAtr] = useState(0)
    const [proficiencia, setNovaProf] = useState(0)
    const [expertise, setNovaExper] = useState(0)


    const inteligencia = [
        {
            id : 4,
            habilidade : "Arcanismo"
        },
        {
            id : 5,
            habilidade : "História"
        },
        {
            id : 6,
            habilidade : "Investigação"
        },
        {
            id : 7,
            habilidade : "Natureza"
        },
        {
            id : 8,
            habilidade : "Religião"
        }
    ]

    const calculaAtr = () => {
        const atributo = document.querySelector("[data-atributo]").value;
        const bonusAtributo = Math.ceil(atributo/2)-5

        const nivel = document.querySelector("[data-nivel]").value;
        const prof = 1 + Math.ceil(nivel/4);
        const profFinal = bonusAtributo + prof;

        const expertise = bonusAtributo + (prof * 2);

        setNovoAtr(bonusAtributo);
        setNovaProf(profFinal)
        setNovaExper(expertise)
    }

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>Inteligência</label>
            <input onChange={calculaAtr} type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">{atrBonus}</p>

            <p className="texto skill__bonus">Proficiência: {proficiencia}</p>
            <p className="texto skill__valor">Expertise: {expertise}</p> 

            <div className="skill__container">
                <label htmlFor="save" className='texto'>Saving Throw </label>
                <input type="checkbox" name="save" id="save" />
            </div> 
                
            
                {inteligencia.map(item => {
                    return(
                        <div key={item.id} className="skill__container">
                            <p className="texto skill__nome">{item.habilidade}</p>

                            <div className="skill__item--container">
                                <label htmlFor="prof" className='texto'>Proficiência</label>
                                <input type="checkbox" name="prof" id="prof" data-prof/>
                            </div>

                            <div className="skill__item--container">
                                <label htmlFor="exper" className='texto'>Expertise</label>
                                <input type="checkbox" name="exper" id="exper" data-exper/>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default AtributoInteligencia;
