import "../Styles/MinhaConta.css";
import video from "../../../assets/images/vid.svg";
import cadastro from "../../../assets/images/cady.svg";
import ajuda from "../../../assets/images/helpy.svg";
import conta from "../../../assets/images/conty.svg";
import card from "../../../assets/images/cardy.svg";
import documento from "../../../assets/images/dock.svg";
import { Link } from "react-router-dom";

function MinhaConta() {
    return (
        <>
            <section className="wobble_tranzit">
                {/* Apenas a imagem de fundo */}
            </section>
            <section className="flizz_blurp">
                <div className="glorp">
                    <h1>Minha conta</h1>
                    <h3 className="blim_blim"><span>início </span> &gt;&gt; Minha conta</h3>
                </div>
                <div className="jibberish_cards">
                    <Link to="/videoaulas" className="froop_card">
                        <img src={video} alt="Vídeo" className="froop-card-image" />
                        <i className="fas fa-play"></i>
                        <p>Meus cursos</p>
                    </Link>
                    <Link to="/cad" className="froop_card">
                        <img src={cadastro} alt="Cadastro" className="froop-card-image" />
                        <i className="fas fa-id-card"></i>
                        <p>Cadastro</p>
                    </Link>
                    <Link to="/ajuda" className="froop_card">
                        <img src={ajuda} alt="Ajuda" className="froop-card-image" />
                        <i className="fas fa-headset"></i>
                        <p>Ajuda</p>
                    </Link>
                </div>
            </section>
            <section className="flizz_blurp">
                <div className="jibberish_cards">
                    <Link to="/EditarPerfil" className="froop_card">
                        <img src={conta} alt="Perfil" className="froop-card-image" />
                        <i className="fas fa-user"></i>
                        <p>Meu perfil</p>
                    </Link>
                    <Link to="/cards" className="froop_card">
                        <img src={card} alt="Cards" className="froop-card-image" />
                        <i className="fas fa-cards"></i>
                        <p>Cards</p>
                    </Link>
                    <Link to="/documentacao" className="froop_card">
                        <img src={documento} alt="Documentação" className="froop-card-image" />
                        <i className="fas fa-file-alt"></i>
                        <p>Documentação</p>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default MinhaConta;
