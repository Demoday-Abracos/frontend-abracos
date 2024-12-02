import Desenvolvedores from "./Desenvolvedores"

import Descricao from "./Descricao"
function SobreNos() {
    return (
        <>
            <div className="imgs">
                <Descricao
                    imagem='assets/images/alvo.svg'
                    titulo='Missão'
                    alt = 'Missão'
                    texto='Promover um ambiente acolhedor para imigrantes e refugiados, onde possam reconstruir suas vidas no Brasil por meio do acesso a recursos essenciais, como oportunidades de emprego, educação e apoio social.'
                />
            </div>

            <div className="imgs">
                <Descricao
                    imagem='assets/images/olho.svg'
                    titulo='Visão'
                    alt = 'Visão'
                    texto='Nossa visão é acreditar na empatia que o ser humano é capaz de ter e que ainda e possível haver abraços.'
                />
            </div>

            <div className="imgs">
                <Descricao
                    imagem='assets/images/coracao.svg'
                    titulo='Valores'
                    alt = 'Valores'
                    texto='<strong>Inclusão & Diversidade</strong>: Valorizamos a riqueza cultural e social trazida por diferentes culturas. Acreditamos que todos, independentemente de sua origem, têm o direito de se sentir incluso e parte da sociedade. Crescimento: Valorizar o desenvolvimento pessoal e profissional dos imigrantes, fornecendo os recursos para que alcancem seu potencial. Esperança: Ser um farol de esperança para aqueles que buscam um novo começo, oferecendo ferramentas para o sucesso e a reintegração.'
                    dangerouslySetInnerHTML={{ __html: '<strong>Inclusão & Diversidade</strong>: Valorizamos a riqueza cultural e social trazida por diferentes culturas. Acreditamos que todos, independentemente de sua origem, têm o direito de se sentir incluso e parte da sociedade. Crescimento: Valorizar o desenvolvimento pessoal e profissional dos imigrantes, fornecendo os recursos para que alcancem seu potencial. Esperança: Ser um farol de esperança para aqueles que buscam um novo começo, oferecendo ferramentas para o sucesso e a reintegração.' }}
                />
            </div>

            <div className="titulodev">
                <h1>Desenvolvedores:</h1>
            </div>
            <section className="sectchones">
                <div className="devs">
                    <div>
                        <Desenvolvedores
                            imagens='assets/images/iarley.svg'
                            titulo='Iarley Souza'
                            texto='"Acredito que histórias merecem ser ouvidas e que devemos abrir nossos corações para aqueles que mais precisam.".'
                            texto2='Product Owner, Full-Stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/IarleySouza'

                        /></div>
                    <div>
                        <Desenvolvedores
                            imagens='assets/images/hugo.svg'
                            titulo='Hugo Ribeiro'
                            texto='“Juntos, estamos transformando vidas e espalhando esperança”.'
                            texto2='Scrum Master, Full-stack'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/hugoribeirodev'
                        />

                    </div>

                </div>

                <div className="devs">

                    <div>
                        <Desenvolvedores
                            imagens='assets/images/vitorH.svg'
                            titulo='Vitor Hugo'
                            texto='“Fico muito feliz em usar o que aprendi  para tornar o mundo um pouco melhor.”.'
                            texto2='UI/UX & Front end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/vitorStNo'

                        /></div>


                    <div>
                        <Desenvolvedores
                            imagens='assets/images/hillary.svg'
                            titulo='Hillary Silva'
                            texto='“É gratificante fazer parte de um projeto tão significativo!”'
                            texto2='UI/UX & Front end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/hiasilvacode'
                        />

                    </div>

                </div>

                <div className="devs">

                    <div>
                        <Desenvolvedores
                            imagens='assets/images/victorR.svg'
                            titulo='Victor Ramalho'
                            texto='“Realmente, uma jornada cheia de desafios e aprendizados. Animado para aplicar tudo o que aprendi em futuros trabalhos.”'
                            texto2='Cloud Back-end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/VictorDias2'

                        /></div>


                    <div>
                        <Desenvolvedores
                            imagens='assets/images/jona.svg'
                            titulo='Jonathan Silva'
                            texto='“Estou entusiasmado para aplicar todo esse conhecimento em futuros projetos e oportunidades”.'
                            texto2='Back-end'
                            foto1='assets/images/githublogo.svg'
                            foto2='assets/images/LinkedynLogo.svg'
                            LLink='https://github.com/Oliveiraa17'
                        />

                    </div>

                </div>

                <div className="ryan">
                    <Desenvolvedores
                        imagens='assets/images/ryan.svg'
                        titulo='Ryan Honorato'
                        texto=' “Construindo pontes e usando o conhecimento que nos aproximam e abrem caminhos para um futuro mais humano!"'
                        texto2='Financeiro & Front-end'
                        foto1='assets/images/githublogo.svg'
                        foto2='assets/images/LinkedynLogo.svg'
                        LLink='https://github.com/Dragaod'
                    />
                </div>
            </section>
        </>
    )
}

export default SobreNos