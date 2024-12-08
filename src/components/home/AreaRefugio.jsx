import '../Styles/Testemunhas.css'
import { Link } from 'react-router-dom'
function AreaRefugio() {
    return (
        <>
            <section className='baixo-depoimentos'>
                <div className='baix2'>
                    <h1>Refugiados no Brasil</h1>
                    <div className='emprego'>
                        <Link className='button-primary' to='/Empregar'><button className='button-primary'>EMPREGO</button></Link>
                        <Link className='button-secondary' to='/Empresas'><button className='button-secondary'>CONTRATAR</button></Link>
                    </div>
                    <div className='preparadoo-ok'>
                        <h1>Preparado para começar?</h1>
                        <p>
                            <Link to="/login">Clique aqui</Link>
                        </p>
                    </div>
                </div>


            </section>
        </>
    )
}
export default AreaRefugio