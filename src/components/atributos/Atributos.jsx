import './Atributos.css';
import { atributos } from "../../data/atributos";
import { useState } from 'react';

const Atributo = ({stat}) => {
    const atributosPorStatus = atributos[stat];


    const [atrBonus, setNovoAtr] = useState(0)
    const [proficiencia, setNovaProf] = useState(0)
    const [expertise, setNovaExper] = useState(0)

    const [testeNormal, setNovoTeste] = useState(0)
    const [testeProf, setNovoTesteProf] = useState(0)
    const [testeExper, setNovoTesteExper] = useState(0)


    const calculaAtr = () => {
        const atributo = document.getElementById(stat).value;

        const bonusAtributo = Math.floor(atributo/2)-5

        const nivel = document.querySelector("[data-nivel]").value;
        const prof = 1 + Math.ceil(nivel/4);
        const profFinal = bonusAtributo + prof;

        const expertise = bonusAtributo + (prof * 2);

        setNovoAtr(bonusAtributo);
        setNovaProf(profFinal)
        setNovaExper(expertise)
    } 

    const testaSkill = () => {
        const atributo = document.getElementById(stat).value;

        const bonusAtributo = Math.floor(atributo/2)-5

        const nivel = document.querySelector("[data-nivel]").value;
        const prof = 1 + Math.ceil(nivel/4);
        const profFinal = bonusAtributo + prof;

        const expertise = bonusAtributo + (prof * 2);

        let dado = Math.ceil(Math.random() * 20);
        let teste = dado + bonusAtributo;
        if(teste < 1) {
            teste = 1;
        }
        setNovoTeste(teste);
        
        teste = dado + profFinal;
        if(teste < 1) {
            teste = 1;
        }
        setNovoTesteProf(teste)
        
        teste = dado + expertise;
        if(teste < 1) {
            teste = 1;
        }
        setNovoTesteExper(teste)
    } 

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>{stat}</label>
            <input onChange={calculaAtr} type="number" name="valor-atributo" className='texto valor__atributo geral__input' id={stat} data-atributo />
            <p className="texto atributo__bonus" data-bonus>{atrBonus}</p>

            <p className="texto skill__bonus">Profici??ncia: {proficiencia}</p>
            <p className="texto skill__valor">Expertise: {expertise}</p>

            <div className="skill__container">
                <label htmlFor="save" className='texto'>Saving Throw </label>
                <input type="checkbox" name="save" id="save" />
            </div> 

            <div className="skill__container">
                <button onClick={testaSkill} className="texto botao__geral">Fazer Teste</button>
                <p className="texto">Normal: {testeNormal}</p>
                <p className="texto">Profici??ncia: {testeProf}</p>
                <p className="texto">Expertise: {testeExper}</p>
            </div>
            
                
            
            {atributosPorStatus?.map((item) => {
                return (
                    <div key={item.id} className="skill__container">
                        <p className="texto skill__nome">{item.habilidade}</p>

                        <div className="skill__item--container">
                        <label htmlFor="prof" className="texto">Profici??ncia</label>
                        <input type="checkbox" name="prof" id="prof" data-prof />
                        </div>

                        <div className="skill__item--container">
                        <label htmlFor="exper" className="texto">Expertise</label>
                        <input type="checkbox" name="exper" id="exper" data-exper />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Atributo;
