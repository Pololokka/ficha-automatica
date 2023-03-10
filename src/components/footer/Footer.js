import './Footer.css'

function Footer() {
    return (
        <footer className="rodape--container">
            <p className="subtitulo rodape__texto">Site desenvolvido por Vitor Bulbovas</p>
            <p className="subtitulo rodape__texto">Me encontre nas redes sociais!</p>
            <a href="https://www.instagram.com/vitorbulbovas/" target="_blank" rel="noreferrer" className="texto rodape--link rodape__texto">Instagram</a>
            <a href="https://github.com/Pololokka" target="_blank" rel="noreferrer" className="texto rodape--link rodape__texto">Git</a>
            <a href="https://www.linkedin.com/in/vitor-bulbovas-852348187/" target="_blank" rel="noreferrer" className="texto rodape--link rodape__texto">Linkedin</a>
        </footer>
    );
}

export default Footer
