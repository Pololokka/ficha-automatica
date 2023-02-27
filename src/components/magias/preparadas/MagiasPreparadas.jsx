import './MagiasPreparadas.css'

const MagiasPreparadas = () => {
    let idMagPrep = 0;
    
    const adicionaMagPrep = () => {
        const magPrepLista = document.querySelector("[data-mag-prep]");
        
        magPrepLista.innerHTML += `
                <li id="magPrep-${idMagPrep}">
                    <div class="mag-prep__divisor">
                        <label htmlFor="mag-prep-nome" class='texto'>Nome:</label>
                        <input type="text" class='texto geral__input mag-prep__nome' name="mag-prep-nome" />

                        <label htmlFor="magPrep-ritual class='texto'">Ritual? </label>
                        <input type="checkbox" name="magPrep-ritual" />

                        <label htmlFor="magPrep-concen class='texto'">Concentração? </label>
                        <input type="checkbox" name="magPrep-concen" />

                        <label htmlFor="magPrep-dur" class='texto'>Duração: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-dur" />
                            
                        <label htmlFor="magPrep-tempo" class='texto'>Tempo de Cast: </label>
                        <input type="text" class="texto geral__input mag-prep__input--menor" name="magPrep-tempo" />

                        <label htmlFor="magPrep-tempo" class='texto'>Componentes: </label>
                        <input type="text" class="texto geral__input mag-prep__input--menor" name="magPrep-tempo" />
                    </div>

                    <div class="mag-prep__divisor">
                        <label htmlFor="magPrep-lvl" class='texto'>Nivel: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-lvl" />

                        <label htmlFor="magPrep-range" class='texto'>Range: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-range" />  
                                
                        <label htmlFor="magPrep-area" class='texto'>Area: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-area" />

                        <label htmlFor="magPrep-save" class='texto'>Save: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-save" />

                        <label htmlFor="magPrep-dano" class='texto'>Dano: </label>
                        <input type="text" class="texto geral__input mag-prep__input" name="magPrep-dano" />
                    </div>

                    <div class="mag-prep__notas">
                        <label htmlFor="magPrep-notas" class='texto'>Notas: </label>
                        <textarea name="magPrep-notas" cols="30" rows="3" class='texto geral__input'></textarea>
                    </div>

                    <button class="texto botao__geral btn__mag-prep botao__geral-remove" data-remove-magPrep="${idMagPrep}">Remover</button>
                </li>
            `
        idMagPrep++;

        const botoes = document.querySelectorAll("[data-remove-magPrep]");
        botoes.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                const achaID = evento.target.getAttribute('data-remove-magPrep');
                const montaID = "magPrep-" + achaID
                const itemRemover = document.getElementById(montaID);
                itemRemover.remove();
            })
        })
    }


    
    return (
        <div className="mag-prep__container">
            <ul className='texto ul-mag-prep' data-mag-prep>

            </ul>

            <button onClick={adicionaMagPrep} className="texto botao__geral">Adicionar Magia</button>
        </div>
    );
}

export default MagiasPreparadas;
