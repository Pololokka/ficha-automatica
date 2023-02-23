import './Atributos.css'

const Atributo = ({stat}) => {
    console.log(stat)

    const forca = [
        {
            id : 0,
            habilidade : "Atletismo"
        }
    ]

    const destreza = [
        {
            id : 1,
            habilidade : "Acrobacia"
        },
        {
            id : 2,
            habilidade : "Furtividade"
        },
        {
            id : 3,
            habilidade : "Prestidigitação"
        }
    ]

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

    const sabedoria = [
        {
            id : 9,
            habilidade : "Adestrar Animais"
        },
        {
            id : 10,
            habilidade : "Intuição"
        },
        {
            id : 11,
            habilidade : "Medicina"
        },
        {
            id : 12,
            habilidade : "Percepção"
        },
        {
            id : 13,
            habilidade : "Sobrevivência"
        }
    ]

    const carisma = [
        {
            id : 14,
            habilidade : "Atuação"
        },
        {
            id : 15,
            habilidade : "Enganação"
        },
        {
            id : 16,
            habilidade : "intimidação"
        },
        {
            id : 17,
            habilidade : "Persuasão"
        }
    ]
    

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>{stat}</label>
            <input type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">+5</p>
                
            
                {stat.map(item => {
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

                            <div className="skill__item--container">
                                <p className="texto skill__bonus">Bônus: </p>
                                <p className="texto skill__valor">+5</p>
                            </div>
                        </div>
                    )
                })}
            
            
            {/* <div className="skill__container">
                <p className="texto skill__nome">Atletismo</p>

                <div className="skill__item--container">
                    <label htmlFor="prof" className='texto'>Proficiência</label>
                    <input type="checkbox" name="prof" id="prof" data-prof/>
                </div>

                <div className="skill__item--container">
                    <label htmlFor="exper" className='texto'>Expertise</label>
                    <input type="checkbox" name="exper" id="exper" data-exper/>
                </div>
                
                <div className="skill__item--container">
                    <p className="texto skill__bonus">Bônus: </p>
                    <p className="texto skill__valor">+5</p>
                </div>
                
            </div>      */}
        </div>
    )
}

export default Atributo;
