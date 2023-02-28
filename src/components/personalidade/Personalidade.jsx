import './Personalidade.css'

const Personalidade = () => {
    return (
        <div className="personalidade__container">
            <div className='carac-geral__container'>
                <label htmlFor="traco-per" className='texto'>Traço de Personalidade: </label>
                <textarea name="traco-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="ideal-per" className='texto'>Ideal: </label>
                <textarea name="ideal-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="ligacao-per" className='texto'>Ligação: </label>
                <textarea name="ligacao-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="falha-per" className='texto'>Falha: </label>
                <textarea name="falha-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="hab-per" className='texto'>Habilidade: </label>
                <textarea name="hab-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="notas-per" className='texto'>Notas: </label>
                <textarea name="notas-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>

            <div className='carac-geral__container'>
                <label htmlFor="bg-per" className='texto'>História do Personagem: </label>
                <textarea name="bg-per" cols="90" rows="3" className='texto geral__input carac__textarea' ></textarea>
            </div>
        </div>
    )
}

export default Personalidade;
