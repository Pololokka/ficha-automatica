import './Atributos.css'

const AtributoInteligencia = () => {

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

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>Inteligência</label>
            <input type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">+5</p>
                
            
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

export default AtributoInteligencia;
