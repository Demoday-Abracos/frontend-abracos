import '../Styles/SobreNos.css'
import { Link } from 'react-router-dom'

function Desenvolvedores ({imagens, texto,titulo ,foto1, foto2 ,texto2, LLink}) {
    return (
        <>
        <div className='Fundoslaranja'>
            <div className='img-laranja'>
                <img src={imagens} alt="desenvolvedor" />
            </div>
            <div className='dentro-laranja'>
                <h1>{titulo}</h1>
                <div>
                    <Link to={LLink} target='_blank'><img src={foto1} alt="" /></Link>
                    <img src={foto2} alt="" />
                </div>

                <p>
                {texto}
                </p>

                <p className='textoazul'>{texto2}</p>
            </div>


        </div>
        </>
    )
}

export default Desenvolvedores