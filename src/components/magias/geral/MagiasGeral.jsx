import './MagiasGeral.css'

const MagiasGeral = () => {
    let idMagGeral = 0;
    
    const adicionaMagGeral = () => {
        const magGeralLista = document.querySelector("[data-mag-geral]");
        
        magGeralLista.innerHTML += `
                <li class="li__mag-geral" id="magGeral-${idMagGeral}">
                        <label htmlFor="mag-geral-nome" class='texto'>Nome:</label>
                        <input type="text" class='texto geral__input' name="mag-geral-nome" />

                        <label htmlFor="magGeral-lvl" class='texto'>Nivel: </label>
                        <input type="text" class="texto geral__input mag-geral__input" name="magGeral-lvl" />

                        <label htmlFor="magGeral-notas" class='texto'>Notas: </label>
                        <textarea name="magGeral-notas" cols="30" rows="3" class='texto geral__input mag-geral__textarea'></textarea>

                    <button class="texto botao__geral botao__geral-remove" data-remove-magGeral="${idMagGeral}">Remover</button>
                </li>
            `
        idMagGeral++;

        const botoes = document.querySelectorAll("[data-remove-magGeral]");
        botoes.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                const achaID = evento.target.getAttribute('data-remove-magGeral');
                const montaID = "magGeral-" + achaID
                const itemRemover = document.getElementById(montaID);
                itemRemover.remove();
            })
        })
    }


    
    return (
        <div className="mag-geral__container">
            <ul className='texto ul-mag-geral' data-mag-geral>

            </ul>

            <button onClick={adicionaMagGeral} className="texto botao__geral">Adicionar Magia</button>
        </div>
    );
}

export default MagiasGeral;
