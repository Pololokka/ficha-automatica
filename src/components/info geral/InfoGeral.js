import './InfoGeral.css'

const Informacoes = ({name}) => {
    return(
    <div className="info__input">
        <label htmlFor="nome-info" className='texto'>{name}</label>
        <input type="text" name="nome-info" className='texto input__info--player' id="nomeInfo" />
    </div>
    )
} 

export default Informacoes;