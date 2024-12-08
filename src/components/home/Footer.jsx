import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="logo-central" src="assets/images/Logo2x.png" alt="Logo" />
                    <div className="logos">
                        <img src="assets/images/facebook.png" alt="Facebook logo" />
                        <img src="assets/images/insta.png" alt="Instagram logo" />
                        <img src="assets/images/linkedin.png" alt="LinkedIn logo" />
                        <img src="assets/images/whats.png" alt="WhatsApp logo" />
                    </div>
                </div>

                <div className="footer-links">
                    <h3>ABRAÇOS</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Documentacao">Documentação</Link></li>
                        <li><Link to="/Psicologos">Psicólogos</Link></li>
                        <li><Link to="/Cursos">Cursos</Link></li>
                        <li><Link to="/Empregar">Empregabilidade</Link></li>
                    </ul>
                </div>

                <div className="footer-contacts">
                    <h3>CONTATOS</h3>
                    <ul>
                        <li><Link to="FaleConosco">Fale conosco</Link></li>
                        <li>FAQ</li>
                    </ul>
                    
                </div>
                <img className="footer-image" src="assets/images/desenho-footer.png" alt="desenho de pessoas imigrantes" />
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2024 Abraços. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
