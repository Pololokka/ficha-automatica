import './Equipamento.css'

const Equipamento = () => {
    let count = 0;
    let id = 0;
    
    const adicionaItem = () => {
        const equipLista = document.querySelector("[data-equip]");
        
        if(count < 10) {
            equipLista.innerHTML += `
                    <li id="${id}">
                        <label htmlFor="item">Item:</label>
                        <input type="text" class='geral__input' name="item" />

                        <label htmlFor="qta">Quantidade:</label>
                        <input type="number" class='geral__input input__equip' name="qta" />

                        <label htmlFor="peso">Peso:</label>
                        <input type="text" class='geral__input input__equip' name="peso" />

                        <button class="texto botao__geral" data-remove="${id}">Remover</button>
                    </li>
                `
             count++;
             id++;
        }

        const botoes = document.querySelectorAll("[data-remove]");
        botoes.forEach( elemento => {
            elemento.addEventListener('click', evento => {
                const achaID = evento.target.getAttribute('data-remove');
                const itemRemover = document.getElementById(achaID);
                itemRemover.remove();
                count--;
                console.log(itemRemover);
            })
        })
    }


    
    return (
        <div className="equipamento__container">
            <ul data-equip className='texto ul-equip'>

            </ul>

            <button onClick={adicionaItem} className="texto botao__geral">Adicionar Item</button>
        </div>
    );
}

export default Equipamento;
