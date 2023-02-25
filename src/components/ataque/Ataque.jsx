import './Ataque.css'

const Ataque = () => {
    let count = 0;
    let idAtaque = 0;
    
    const adicionaAtaque = () => {
        const atkLista = document.querySelector("[data-ataques]");
        
        if(count < 10) {
            atkLista.innerHTML += `
                    <li id="ataque-${idAtaque}">
                        <label htmlFor="ataque-nome">Nome:</label>
                        <input type="text" class='geral__input' name="ataque-nome" />

                        
                        <label htmlFor="habilidade">Habilidade:</label>
                        <select name="habilidade" id="ataque-habilidade-${idAtaque}">
                            <option value="str">Str</option>
                            <option value="dex">Dex</option>
                            <option value="con">Con</option>
                            <option value="int">Int</option>
                            <option value="wis">Wis</option>
                            <option value="cha">Cha</option>
                        </select>

                        <label htmlFor="dado-qta">Quantidade de Dados:</label>
                        <input type="number" class='geral__input input__equip' name="dado-qta" id="dado-qta-${idAtaque}"/>

                        <label htmlFor="dado-valor">Dado:</label>
                        <select name="dado-valor" id="ataque-dado--${idAtaque}">
                            <option value="4">D4</option>
                            <option value="6">D6</option>
                            <option value="8">D8</option>
                            <option value="10">D10</option>
                            <option value="12">D12</option>
                        </select>

                        <label htmlFor="ataque-bonus">Bonus Extra:</label>
                        <input type="number" class='geral__input input__equip' name="ataque-bonus" id="bonus-ataque-${idAtaque}"/>

                        <div class="ataque__notas">
                            <label htmlFor="notas-ataque">Notas:</label>
                            <textarea name="notas-ataque" class="geral__input" cols="20" rows="3"></textarea>
                        </div>

                        <button class="texto botao__geral btn__ataque" data-faz-ataque="${idAtaque}">ATACAR!</button>

                        <button class="texto botao__geral btn__ataque botao__geral-remove" data-remove-ataque="${idAtaque}">Remover</button>
                    </li>
                `
            count++;
            idAtaque++;
        }

        const botoes = document.querySelectorAll("[data-remove-ataque]");
        botoes.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                const achaID = evento.target.getAttribute('data-remove-ataque');
                const montaID = "ataque-" + achaID
                const itemRemover = document.getElementById(montaID);
                itemRemover.remove();
                count--;
            })
        })

        const botoesAtk = document.querySelectorAll("[data-faz-ataque]");
        botoesAtk.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                console.log("ainda não implementado")
            })
        })
    }


    
    return (
        <div className="ataque__container">
            <ul data-ataques className='texto ul-ataque'>

            </ul>

            <button onClick={adicionaAtaque} className="texto botao__geral">Adicionar Ataque</button>
        </div>
    );
}

export default Ataque;
