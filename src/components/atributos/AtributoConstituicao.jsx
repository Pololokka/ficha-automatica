import './Atributos.css'

const AtributoConstituicao = () => {

    return (
        <div className="atributo__container">
            <label htmlFor="valor-atributo" className='texto atributo__nome'>Constituição</label>
            <input type="number" name="valor-atributo" className='texto valor__atributo' id="valor-atributo" data-atributo />
            <p className="texto atributo__bonus">+5</p>
        </div>
    )
}

export default AtributoConstituicao;
