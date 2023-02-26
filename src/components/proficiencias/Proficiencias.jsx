import './Proficiencias.css'

const Proficiencias = ({tipoProf}) => {
    
    return (
        <div className="proficiencias__container">
            <label htmlFor="proficiencia" className='texto'>{tipoProf}</label>
            <textarea name="proficiencia" className='texto geral__input' cols="90" rows="3"></textarea>
        </div>
    );
}

export default Proficiencias;
