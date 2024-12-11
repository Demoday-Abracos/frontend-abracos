import { Link } from "react-router-dom";
import face from "../../../public/assets/images/facebook.png"
import insta from "../../../public/assets/images/insta.png"
import link from "../../../public/assets/images/linkedin.png"
import whats from "../../../public/assets/images/whats.png"
import logo from "../../../public/assets/images/Logo2x.png"
import foo from "../../../public/assets/images/desenho-footer.png"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="logo-central" src={logo} alt="Logo" />
                    <div className="logos">
                        <img src={face} alt="Facebook logo" />
                        <img src={insta} alt="Instagram logo" />
                        <img src={link} alt="LinkedIn logo" />
                        <img src={whats} alt="WhatsApp logo" />
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
                <img className="footer-image" src={foo} alt="desenho de pessoas imigrantes" />
            </div>

            <div className="footer-bottom">
                <p>Copyright &copy; 2024 Abraços. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
