import './Poderes.css'

const Poderes = () => {
    let idPoder = 0;
    
    const adicionaPoder = () => {
        const poderLista = document.querySelector("[data-poder]");
        
        poderLista.innerHTML += `
                <li class="li__poder" id="poder-${idPoder}">
                    <div class="poderes__input-geral">
                        <label htmlFor="poder-nome" class='texto'>Nome:</label>
                        <input type="text" class='texto geral__input' name="poder-nome" />

                        <label htmlFor="poder-lvl" class='texto'>Usos: </label>
                        <input type="number" class="texto geral__input poder__input--numero" name="poder-lvl" />

                        <label htmlFor="poder-lvl" class='texto'>Ação: </label>
                        <select name="acao-poder" class="geral__input">
                            <option value="acao">Ação</option>
                            <option value="acao-bonus">Ação Bonus</option>
                            <option value="reacao">Reação</option>
                        </select>

                        <label htmlFor="poder-lvl" class='texto'>Como Recuperar: </label>
                        <input type="text" class="texto geral__input poder__input--texto" name="poder-lvl" />
                    </div>

                    <div class="poderes__textarea">
                        <label htmlFor="poder-notas" class='texto'>Notas: </label>
                        <textarea name="poder-notas" cols="30" rows="3" class='texto geral__input poder__textarea'></textarea>
                    </div>

                    <button class="texto botao__geral botao__geral-remove poder__remove" data-remove-poder="${idPoder}">Remover</button>
                </li>
            `
        idPoder++;

        const botoes = document.querySelectorAll("[data-remove-poder]");
        botoes.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                const achaID = evento.target.getAttribute('data-remove-poder');
                const montaID = "poder-" + achaID
                const itemRemover = document.getElementById(montaID);
                itemRemover.remove();
            })
        })
    }


    
    return (
        <div className="poder__container">
            <ul className='texto ul-poder' data-poder>

            </ul>

            <button onClick={adicionaPoder} className="texto botao__geral">Adicionar Poder ou Habilidade</button>
        </div>
    );
}

export default Poderes;
