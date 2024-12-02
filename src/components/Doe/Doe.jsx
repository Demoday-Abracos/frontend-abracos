import '../Styles/Doe.css'
import criancas from '../../../public/assets/images/crianças3.svg'
import cruz from '../../../public/assets/images/cruzred.svg'
import adus from '../../../public/assets/images/adus.svg'
import acnur from '../../../public/assets/images/acnur.svg'
import paz from '../../../public/assets/images/missaopaz.svg'
import africa from '../../../public/assets/images/africacoração.svg'
import blibia from '../../../public/assets/images/Blibiaspa.svg'
import cami from '../../../public/assets/images/cami.svg'
import cemir from '../../../public/assets/images/cemir.svg'
import warmis from '../../../public/assets/images/warmis.svg'
import cibai from '../../../public/assets/images/cibai.svg'
import cam from '../../../public/assets/images/cam.svg'
import mawon from '../../../public/assets/images/mawon.svg'

function Doe() {
    return(
        <section className='sec_doe'>
            <div className='dife'>
                <h1>Seja a diferença!</h1>
            </div>

            <div className='dou'>
                <h3>Sua doação pode salvar uma vida!</h3>
            </div>
                
            <div className='picchildren'>
                <img src={criancas} alt="Crianças se abraçando" />
            </div>

            <div className='content_frase'>
                <h3>Quer salvar uma vida?</h3>
                <p>Ajude imigrantes e refugiados a recomeçar suas vidas. Sua doação pode proporcionar abrigo, alimentação e oportunidades de integração em um novo país. Com sua generosidade, você transforma histórias de luta em histórias de esperança. Doe hoje e faça a diferença na vida de quem mais precisa!</p>
            </div>

            <div className='inicia'>
                <h1>Doe para essas iniciativas:</h1>
            </div>


{/* Primeiras 3 imagens */}

            <div className='images_ladoo'>
                <div className='sames_log'>
                    <img className='img_doe' src={cruz} alt="Cruz Vermelha" />
                    <a href="https://doe.cicv.org.br/salvar-vidas/people/new?utm_source=google&utm_medium=search&utm_campaign=acquisition&utm_content=brand&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSJMRdU_cFxQeucmKoXz09LE_6a-rRB92WZWvpUy8M4Z8xCAmry89oQaAhuKEALw_wcB" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={adus} alt="Instituto Adus" />
                    <a href="https://adus.colabore.org/seja-um-doador/single_step" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img src={acnur} alt="ACNUR" />
                    <a href="https://doar.acnur.org/page/ACNURBR/doe/general?utm_source=google&utm_medium=cpc&utm_campaign=BR_PS_PT_general&gad_source=1&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSLmJj_J3XQNJK9qBnagCdG2FjZi5-rgLnjKnhzZPIjvO5BXVg9XymMaAuXMEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>
            </div>

{/* Segunda 3 imagens */}

            <div className='images_ladoo'>
                <div className='sames_log'>
                    <img className='img_doe' src={paz} alt="Cruz Vermelha" />
                    <a href="https://missaonspaz.org/doar/" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={africa} alt="Instituto Adus" />
                    <a href="https://www.ufrgs.br/gaire/africa-do-coracao/" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={blibia} alt="ACNUR" />
                    <a href="https://bibliaspa.org.br/como-apoiar/" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>
            </div>

{/* Terceira 3 imagens */}

            <div className='images_ladoo'>
                <div className='sames_log'>
                    <img className='img_doe' src={cami} alt="Cruz Vermelha" />
                    <a href="https://www.cami.org.br/doacoes/" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={cemir} alt="Instituto Adus" />
                    <a href="https://www.centrodamulherimigrante.org" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={warmis} alt="ACNUR" />
                    <a href="https://warmis.org" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>
            </div>

{/* Quarta 3 imagens */}

            <div className='images_ladoo'>
                <div className='sames_log'>
                    <img className='img_doe' src={cibai} alt="Cruz Vermelha" />
                    <a href="https://www.paypal.com/donate/?hosted_button_id=8NZXURC2W9NCE" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={cam} alt="Instituto Adus" />
                    <a href="https://scalabrinianas.org/apoie/" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>

                <div className='sames_log'>
                    <img className='img_doe' src={mawon} alt="ACNUR" />
                    <a href="https://www.mawon.org/comoapoiar" target="_blank" rel="noopener noreferrer">
                        <button className='boton_doe'>Doe</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Doe