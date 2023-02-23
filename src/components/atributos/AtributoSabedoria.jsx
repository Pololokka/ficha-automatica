import './Atributos.css'

const AtributoSabedoria = () => {

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

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>Sabedoria</label>
            <input type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">+5</p>
                
            
                {sabedoria.map(item => {
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
        </div>
    )
}

export default AtributoSabedoria;
