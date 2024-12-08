import '../Styles/FaleConosco.css';
import fale from "../../../assets/images/imagefale.svg"; 

function FaleConosco() {
    return (
        <section className="zona-interativa">
            <div className="panorama-azul">
                <div className="compartimento-imagem">
                    <img src={fale} alt="Imagem de exemplo" className="grafico-visual" />
                </div>
                <div className="compartimento-formulario">
                    <h2>Entre em contato conosco!</h2>
                    <form>
                        <input type="text" placeholder="Digite seu nome..." className="campo-entrada" />
                        <input type="email" placeholder="Digite seu email..." className="campo-entrada" />
                        <textarea placeholder="Mensagem:" className="campo-texto"></textarea>
                        <button type="submit" className="botao-enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FaleConosco;
