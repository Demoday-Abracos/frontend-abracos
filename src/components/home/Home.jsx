import Testemunhas from "./Testemunhas"
import Counter from "./Counter"
import AreaRefugio from "./AreaRefugio"
import Docu from "../../../public/assets/gifs/documento.gif"
import Cards from "../../../public/assets/gifs/cards.gif"
import Books from "../../../public/assets/gifs/books.gif"
import Saude from "../../../public/assets/gifs/saude-mental.gif"
import '../../App.css'

function Home() {
    return (
        <>
            <div className="div-imgfundo">

                <div className="div-segundary-text">
                    <h1>Acolhendo <span style={{ color: '#FF6926' }}>imigrantes</span> e <span style={{ color: '#FF6926' }}>refugiados</span> com abraços de habilidades e <span style={{ color: '#4B92DB' }}>esperança.</span>
                    </h1>
                    <p>Um novo começo, uma nova esperança.</p>
                </div>

            </div>

            {/* <Slide slideData={firstSliderData}></Slide> */}

            <section className='sec-principal'>
                <h1 className="titulo-home-page">Explore nossas categorias: </h1>

                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src={Docu} alt="Gif do documento" />
                        <h2>Regularização</h2>
                    </div>
                    <p>Suporte para regularização de documentos com segurança e tranquilidade.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src={Cards} alt="Gif de cards" />
                        <h2>Cards</h2>
                    </div>
                    <p>Tradução rápida da sua língua nativa para o português brasileiro com os cards.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src={Books} alt="Gif de Livros" />
                        <h2>Estudos</h2>
                    </div>
                    <p>Cursos para melhorar sua comunicação em português e facilitar sua integração.</p>
                </div>
                <div className='gifs-home'>
                    <div className="parte-baixo-cards">
                        <img src={Saude} alt="Gif saúde mental." />
                        <h2>Saúde mental</h2>
                    </div>
                    <p>Oferecemos apoio para sua saúde mental, promovendo bem-estar e equilíbrio.</p>
                </div>
            </section>
            <Testemunhas></Testemunhas>
            <main className="contador-numeros">
                <Counter endValue={67} text="Nacionalidades atendidas" />
                <Counter endValue={100} text="Atendimentos em 2024" />
                <Counter endValue={448} text="Alunos de português" />
            </main>
            <AreaRefugio></AreaRefugio>
        </>
    )
}
export default Home