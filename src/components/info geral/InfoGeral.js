import './InfoGeral.css'

const Informacoes = () => {
    return (
        <div className='info'>
            <h2 className='subtitulo'>Informações Gerais</h2>

            <div className='info__container'>
                <div className="info__input">
                    <label htmlFor="nome-info" className='texto'>Nome do Personagem</label>
                    <input type="text" name="nome-info" className='texto input__info--player' id="nomeInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="back-info" className='texto'>Background</label>
                    <input type="text" name="back-info" className='texto input__info--player' id="backInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="alin-info" className='texto'>Alinhamento</label>
                    <input type="text" name="alin-info" className='texto input__info--player' id="alinInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="deus-info" className='texto'>Deidade</label>
                    <input type="text" name="deus-info" className='texto input__info--player' id="deusInfo" />
                </div>
            </div>

            <div className='info__container'>
                <div className="info__input">
                    <label htmlFor="raca-info" className='texto'>Raça</label>
                    <input type="text" name="raca-info" className='texto input__info--player' id="racaInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="subRaca-info" className='texto'>Sub-raça</label>
                    <input type="text" name="subRaca-info" className='texto input__info--player' id="subRacaInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="classe-info" className='texto'>Classe</label>
                    <input type="text" name="classe-info" className='texto input__info--player' id="classeInfo" />
                </div>

                <div className="info__input">
                    <label htmlFor="subClasse-info" className='texto'>Arquétipo</label>
                    <input type="text" name="subClasse-info" className='texto input__info--player' id="subClasseInfo" />
                </div>
            </div>
        </div>
    );
}

export default Informacoes;