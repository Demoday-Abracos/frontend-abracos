import React from 'react';
import '../../Styles/CardCarrousel.css';
import Cards2 from './Cards2';
import { useLocation } from 'react-router-dom';

function Pagina1() {
    const location = useLocation();
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState(location.state?.categoriaSelecionada || 'Hospital');
    const [vozSelecionada, setVozSelecionada] = React.useState('feminina');

    const playAudio = (baseFileName) => {
        const audioPath = getAudioPath(baseFileName);
        const audio = new Audio(audioPath);
        audio.play();
    };

    const mudarCondicao = (e) => {
        setCategoriaSelecionada(e.target.getAttribute('name'));
    }

    const categoriaToFolderMap = {
        "Saudações": "saudacoes",
        "Hospital": "hospital",
        "Mercado": "mercado",
        "Transporte": "transporte",
        "Alimentação": "alimentacao",
        "Banco": "banco",
        "Polícia": "policia",
        "Compras": "compras",
        "Escola": "escola",
        "Documentos": "documentos",
    };
    const getAudioPath = (baseFileName) => {
        const folderName = categoriaToFolderMap[categoriaSelecionada] || "default";
        return `assets/audio/${folderName}/${baseFileName}_${vozSelecionada}.mp3`;
    };

    return (
        <>
            <div className="img-fundo">
                <h1 className='fra_efeito'>
                    <span className='conectarr'>
                        <mark>Conecte-se </mark>
                    </span>de forma rápida e <br /> simples em qualquer <span className='idiomaa'><mark className='azull'>idioma.</mark></span>
                </h1>
            </div>
            <div>
                <h2 className='vozes'>Trocar Vozes:</h2>
            </div>
            <div className="seletor-voz">
                <label  className={`voz-label ${vozSelecionada === 'feminina' ? 'selecionado' : ''}`}>
                    <input
                        type="radio"
                        name="voz"
                        value="feminina"
                        checked={vozSelecionada === 'feminina'}
                        onChange={(e) => setVozSelecionada(e.target.value)}
                        className="voz-radio"
                    />
                    <span className="voz-texto">Feminina</span>
                </label>
                <label className={`voz-label ${vozSelecionada === 'masculina' ? 'selecionado' : ''}`}>
                    <input
                        type="radio"
                        name="voz"
                        value="masculina"
                        checked={vozSelecionada === 'masculina'}
                        onChange={(e) => setVozSelecionada(e.target.value)}
                        className="voz-radio"
                    />
                    <span className="voz-texto">Masculina</span>
                </label>
            </div>
            <div className='button'>
                <button onClick={mudarCondicao} name='Saudações' className={categoriaSelecionada === 'Saudações' ? 'selecionado' : ''}>Saudações</button>
                <button onClick={mudarCondicao} name='Hospital' className={categoriaSelecionada === 'Hospital' ? 'selecionado' : ''}>Hospital</button>
                <button onClick={mudarCondicao} name='Mercado' className={categoriaSelecionada === 'Mercado' ? 'selecionado' : ''}>Mercado</button>
                <button onClick={mudarCondicao} name='Transporte' className={categoriaSelecionada === 'Transporte' ? 'selecionado' : ''}>Transporte</button>
                <button onClick={mudarCondicao} name='Alimentação' className={categoriaSelecionada === 'Alimentação' ? 'selecionado' : ''}>Alimentação</button>
                <button onClick={mudarCondicao} name='Banco' className={categoriaSelecionada === 'Banco' ? 'selecionado' : ''}>Banco</button>
                <button onClick={mudarCondicao} name='Polícia' className={categoriaSelecionada === 'Polícia' ? 'selecionado' : ''}>Polícia</button>
                <button onClick={mudarCondicao} name='Compras' className={categoriaSelecionada === 'Compras' ? 'selecionado' : ''}>Compras</button>
                <button onClick={mudarCondicao} name='Escola' className={categoriaSelecionada === 'Escola' ? 'selecionado' : ''}>Escola</button>
                <button onClick={mudarCondicao} name='Documentos' className={categoriaSelecionada === 'Documentos' ? 'selecionado' : ''}>Documentos</button>
            </div>

            {categoriaSelecionada === 'Saudações' && (
                <>
                    <div className='titulo-card'>
                        <h1>Saudações:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Ola')}>
                            <Cards2 icon='assets/images/ola.png' text='Olá' alt='Olá'/>
                        </div>
                        <div onClick={() => playAudio('Bomdia')}>
                            <Cards2 icon='assets/images/ensolarado.png' text='Bom dia' alt='Bom dia' />
                        </div>
                        <div onClick={() => playAudio('Boatarde')}>
                            <Cards2 icon='assets/images/nascer-do-sol.png' text='Boa tarde' alt='Boa tarde' />
                        </div>
                        <div onClick={() => playAudio('Boanoite')}>
                            <Cards2 icon='assets/images/lua-crescente.png' text='Boa noite' alt='Boa noite' />
                        </div>
                    </section>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Entendido')}>
                            <Cards2 icon='assets/images/entender.png' text='Entendido' alt='Entendido' />
                        </div>
                        <div onClick={() => playAudio('Desculpa')}>
                            <Cards2 icon='assets/images/desculpa.png' text='Desculpa' alt='Desculpa' />
                        </div>
                        <div onClick={() => playAudio('Porfavor')}>
                            <Cards2 icon='assets/images/por-favor.png' text='Por Favor' alt='Por favor' />
                        </div>
                        <div onClick={() => playAudio('Obrigado')}>
                            <Cards2 icon='assets/images/feliz.png' text='Obrigado' alt='Obrigado' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Naosei')}>
                            <Cards2 icon='assets/images/confuso.png' text='Não sei' alt='Não sei' />
                        </div>
                        <div onClick={() => playAudio('Denada')}>
                            <Cards2 icon='assets/images/obrigado.png' text='De nada' alt='De nada' />
                        </div>
                        <div onClick={() => playAudio('Naoentendi')}>
                            <Cards2 icon='assets/images/estranho.png' text='Não entendi' alt='Não entendi' />
                        </div>
                        <div onClick={() => playAudio('Comlicenca')}>
                            <Cards2 icon='assets/images/pessoa.png' text='Com licença' alt='Com licença' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Concordo')}>
                            <Cards2 icon='assets/images/concordar.png' text='Concordo' alt='Concordo' />
                        </div>
                        <div onClick={() => playAudio('Discordo')}>
                            <Cards2 icon='assets/images/discordo.png' text='Discordo' alt='Discordo' />
                        </div>
                        <div onClick={() => playAudio('Espere')}>
                            <Cards2 icon='assets/images/esperando.png' text='Espere' alt='Espere' />
                        </div>
                        <div onClick={() => playAudio('Boasorte')}>
                            <Cards2 icon='assets/images/sorte.png' text='Boa sorte' alt='Boa sorte' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Hospital' && (
                <>
                    <div className='titulo-card'>
                        <h1>Hospital:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('Hospital')}>
                            <Cards2 icon='assets/images/localCards.png' text='Onde fica o hospital mais próximo daqui?' alt='Onde fica o hospital mais próximo daqui?' />
                        </div>
                        <div onClick={() => playAudio('ajudamedica')}>
                            <Cards2 icon='assets/images/ambulanciaCards.png' text='Preciso de ajuda médica, pode me levar ao hospital?' alt='Preciso de ajuda médica, pode me levar ao hospital?' />
                        </div >
                        <div onClick={() => playAudio('marcarconsulta')}>
                            <Cards2 icon='assets/images/comunicacaoCards.png' text='Como faço para marcar uma consulta com um médico?' alt='Como faço para marcar uma consulta com um médico?' />
                        </div>
                        <div onClick={() => playAudio('indicarhospita')}>
                            <Cards2 icon='assets/images/injecao.png' text='Podem indicar um hospital especializado?' alt='Podem indicar um hospital especializado?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('checkup')}>
                            <Cards2 icon='assets/images/health-checkup.png' text='Quais exames preciso fazer para um check-up completo?' alt='Quais exames preciso fazer para um check-up completo?' />
                        </div>
                        <div onClick={() => playAudio('funcionatratamento')}>
                            <Cards2 icon='assets/images/tratamento.png' text='Pode me explicar como funciona esse tratamento?' alt='Pode me explicar como funciona esse tratamento?' />
                        </div >
                        <div onClick={() => playAudio('laudomedico')}>
                            <Cards2 icon='assets/images/procedimento.png' text='Qual é o procedimento para solicitar um laudo médico?' alt='Qual é o procedimento para solicitar um laudo médico?' />
                        </div>
                        <div onClick={() => playAudio('sintomas')}>
                            <Cards2 icon='assets/images/dificuldade-ao-respirar.png' text='É normal sentir esses sintomas? O que devo fazer?' alt='É normal sentir esses sintomas? O que devo fazer?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('recuperacao')}>
                            <Cards2 icon='assets/images/esperando.png' text='Qual é o tempo médio de recuperação para essa condição?' alt='Qual é o tempo médio de recuperação para essa condição?' />
                        </div>
                        <div onClick={() => playAudio('cuidados')}>
                            <Cards2 icon='assets/images/pele.png' text='Existe algum cuidado especial que devo tomar após a alta?' alt='Existe algum cuidado especial que devo tomar após a alta?' />
                        </div>
                        <div onClick={() => playAudio('fisioterapia')}>
                            <Cards2 icon='assets/images/fisioterapia.png' text='Pode me orientar sobre os passos para iniciar uma fisioterapia?' alt='Pode me orientar sobre os passos para iniciar uma fisioterapia?' />
                        </div>
                        <div onClick={() => playAudio('adotardiadia')}>
                            <Cards2 icon='assets/images/cuidados-com-a-pele.png' text='Que cuidados devo adotar no dia a dia?' alt='Que cuidados devo adotar no dia a dia?' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Mercado' && (
                <>
                    <div className='titulo-card'>
                        <h1>Mercado:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('encontrarmercado')}>
                            <Cards2 icon='assets/images/carrinhoCards.png' text='Onde posso encontrar um mercado?' alt='Onde posso encontrar um mercado?' />
                        </div>
                        <div onClick={() => playAudio('alimentosfrescos')}>
                            <Cards2 icon='assets/images/frutasCards.png' text='Quais são os melhores mercados para comprar alimentos frescos?' alt='Quais são os melhores mercados para comprar alimentos frescos?' />
                        </div>
                        <div onClick={() => playAudio('internacionais')}>
                            <Cards2 icon='assets/images/cartaoCards.png' text='Este mercado aceita cartões internacionais?' alt='Este mercado aceita cartões internacionais?' />
                        </div>
                        <div onClick={() => playAudio('produtostipicos')}>
                            <Cards2 icon='assets/images/taco.png' text='Como encontrar um mercado com produtos típicos da minha cultura?' alt='Como encontrar um mercado com produtos típicos da minha cultura?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('encontraracougue')}>
                            <Cards2 icon='assets/images/acougueiro.png' text='Onde posso encontrar um açougue por aqui?' alt='Onde posso encontrar um açougue por aqui?' />
                        </div>
                        <div onClick={() => playAudio('secaocongelados')}>
                            <Cards2 icon='assets/images/carne.png' text='Qual mercado tem a melhor seção de congelados?' alt='Qual mercado tem a melhor seção de congelados?' />
                        </div>
                        <div onClick={() => playAudio('delivery')}>
                            <Cards2 icon='assets/images/entrega-rapida.png' text='Esse mercado oferece delivery?' alt='Esse mercado oferece delivery?' />
                        </div>
                        <div onClick={() => playAudio('veganos')}>
                            <Cards2 icon='assets/images/vegan.png' text='Como posso saber se o mercado tem produtos veganos?' alt='Como posso saber se o mercado tem produtos veganos?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('frutaeverdura')}>
                            <Cards2 icon='assets/images/picking.png' text='Onde posso comprar frutas e verduras recém-colhidas?' alt='Onde posso comprar frutas e verduras recém-colhidas?' />

                        </div>
                        <div onClick={() => playAudio('produtosartesanais')}>
                            <Cards2 icon='assets/images/produtos-artesanais.png' text='Esse mercado tem uma área de produtos artesanais?' alt='Esse mercado tem uma área de produtos artesanais?' />
                        </div>

                        <div onClick={() => playAudio('precosacessiveis')}>
                            <Cards2 icon='assets/images/preco-baixo.png' text='Como posso encontrar mercados com preços mais acessíveis?' alt='Como posso encontrar mercados com preços mais acessíveis?' />
                        </div>
                        <div onClick={() => playAudio('temperos')}>
                            <Cards2 icon='assets/images/tempero.png' text='Qual mercado tem maior variedade de temperos e especiarias?' alt='Qual mercado tem maior variedade de temperos e especiarias?' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Transporte' && (
                <>
                    <div className='titulo-card'>
                        <h1>Transporte:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('caminho')}>
                            <Cards2 icon='assets/images/localizacaoCards.png' text='Qual o caminho mais rápido ao centro com transporte público?' alt='Qual o caminho mais rápido ao centro com transporte público?' />
                        </div>
                        <div onClick={() => playAudio('comprarbilhete')}>
                            <Cards2 icon='assets/images/bilheteCards.png' text='Como faço para comprar um bilhete de metrô?' alt='Como faço para comprar um bilhete de metrô?' />
                        </div>
                        <div onClick={() => playAudio('demoraonibus')}>
                            <Cards2 icon='assets/images/relogioCards.png' text='Quanto tempo o ônibus demora para passar aqui?' alt='Quanto tempo o ônibus demora para passar aqui?' />
                        </div>
                        <div onClick={() => playAudio('valortransporte')}>
                            <Cards2 icon='assets/images/cifrao.png' text='Qual o valor do transporte público?' alt='Qual o valor do transporte público?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('linhametro')}>
                            <Cards2 icon='assets/images/metro.png' text='Qual linha de metrô vai direto para o centro?' alt='Qual linha de metrô vai direto para o centro?' />
                        </div>
                        <div onClick={() => playAudio('onibusproximo')}>
                            <Cards2 icon='assets/images/ponto-de-onibus.png' text='Onde posso pegar o ônibus mais próximo?' alt='Onde posso pegar o ônibus mais próximo?' />
                        </div>
                        <div onClick={() => playAudio('paradastrem')}>
                            <Cards2 icon='assets/images/passagem-de-nivel.png' text='Esse trem faz paradas em todos os bairros principais?' alt='Esse trem faz paradas em todos os bairros principais?' />
                        </div>
                        <div onClick={() => playAudio('horariostransportes')}>
                            <Cards2 icon='assets/images/checar.png' text='Como posso verificar os horários dos transportes públicos?' alt='Como posso verificar os horários dos transportes públicos?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('trajetosonibus')}>
                            <Cards2 icon='assets/images/aplicativo-movel.png' text='Existe algum aplicativo para planejar trajetos de ônibus?' alt='Existe algum aplicativo para planejar trajetos de ônibus?' />
                        </div>
                        <div onClick={() => playAudio('evitartransito')}>
                            <Cards2 icon='assets/images/sinal-de-transito.png' text='Qual a melhor forma de evitar trânsito no transporte público?' alt='Qual a melhor forma de evitar trânsito no transporte público?' />
                        </div>
                        <div onClick={() => playAudio('estacaoacessivel')}>
                            <Cards2 icon='assets/images/estacao-ferroviaria.png' text='Há alguma estação de metrô acessível por aqui?' alt='Há alguma estação de metrô acessível por aqui?' />
                        </div>
                        <div onClick={() => playAudio('recarregarcartao')}>
                            <Cards2 icon='assets/images/bilhete-de-trem.png' text='Como recarregar o cartão de transporte na minha cidade?' alt='Como recarregar o cartão de transporte na minha cidade?' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Alimentação' && (
                <>
                    <div className='titulo-card'>
                        <h1>Alimentação:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('comidahalal')}>
                            <Cards2 icon='assets/images/restauranteCards.png' text='Você pode me indicar um restaurante que sirva comida halal?' alt='Você pode me indicar um restaurante que sirva comida halal?' />
                        </div>
                        <div onClick={() => playAudio('comidatipica')}>
                            <Cards2 icon='assets/images/mundoCards.png' text='Onde posso encontrar comida típica do meu país?' alt='Onde posso encontrar comida típica do meu país?' />
                        </div>
                        <div onClick={() => playAudio('opcoesvegetariana')}>
                            <Cards2 icon='assets/images/legumesCards.png' text='Existe algum lugar aqui que tenha opções vegetarianas?' alt='Existe algum lugar aqui que tenha opções vegetarianas?' />
                        </div>
                        <div onClick={() => playAudio('alimentosfrescos')}>
                            <Cards2 icon='assets/images/barraca-de-comida.png' text='Como posso encontrar alimentos frescos nas proximidades?' alt='Como posso encontrar alimentos frescos nas proximidades?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('pratostradicionais')}>
                            <Cards2 icon='assets/images/prato.png' text='Qual restaurante serve pratos tradicionais daqui?' alt='Qual restaurante serve pratos tradicionais daqui?' />
                        </div>
                        <div onClick={() => playAudio('comerapido')}>
                            <Cards2 icon='assets/images/vegetariano.png' text='Onde posso comer algo rápido e saudável por aqui?' alt='Onde posso comer algo rápido e saudável por aqui?' />
                        </div>
                        <div onClick={() => playAudio('comidavegana')}>
                            <Cards2 icon='assets/images/comida-organica.png' text='Há algum lugar especializado em comida vegana?' alt='Há algum lugar especializado em comida vegana?' />
                        </div>
                        <div onClick={() => playAudio('cafesemlactose')}>
                            <Cards2 icon='assets/images/livre-de-laticinios.png' text='Conhece um café que tenha opções sem lactose?' alt='Conhece um café que tenha opções sem lactose?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('semgluten')}>
                            <Cards2 icon='assets/images/sem-gluten.png' text='Existe algum restaurante com menu sem glúten nesta área?' alt='Existe algum restaurante com menu sem glúten nesta área?' />
                        </div>
                        <div onClick={() => playAudio('culinariainter')}>
                            <Cards2 icon='assets/images/cozinhando.png' text='Onde encontro um bom lugar para experimentar culinária internacional?' alt='Onde encontro um bom lugar para experimentar culinária internacional?' />
                        </div>
                        <div onClick={() => playAudio('cozinhaemcasa')}>
                            <Cards2 icon='assets/images/mercearia.png' text='Tem algum mercado com ingredientes típicos para cozinhar em casa?' alt='Tem algum mercado com ingredientes típicos para cozinhar em casa?' />
                        </div>
                        <div onClick={() => playAudio('organica')}>
                            <Cards2 icon='assets/images/organico.png' text='Pode me recomendar um restaurante com opções orgânicas?' alt='Pode me recomendar um restaurante com opções orgânicas?' />
                        </div>
                    </section>
                </>
            )}

            {categoriaSelecionada === 'Banco' && (
                <>
                    <div className='titulo-card'>
                        <h1>Banco:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('abrirconta')}>
                            <Cards2 icon='assets/images/contabancariaCards.png' text='Como posso abrir uma conta bancária como imigrante?' alt='Como posso abrir uma conta bancária como imigrante?' />
                        </div>
                        <div onClick={() => playAudio('suportebanco')}>
                            <Cards2 icon='assets/images/banco-suporte.svg' text='Nesse banco tem algum suporte?' alt='Nesse banco tem algum suporte?' />
                        </div>
                        <div onClick={() => playAudio('cartoesdefora')}>
                            <Cards2 icon='assets/images/caixaeletrCards.png' text='Este caixa eletrônico aceita cartões de fora do Brasil?' alt='Este caixa eletrônico aceita cartões de fora do Brasil?' />
                        </div>
                        <div onClick={() => playAudio('usarservicos')}>
                            <Cards2 icon='assets/images/cartao-de-identidade.png' text='Quais documentos são necessários para usar os serviços bancários aqui?' alt='Quais documentos são necessários para usar os serviços bancários aqui?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('bancoestrangeiros')}>
                            <Cards2 icon='assets/images/estrangeiro.png' text='Qual banco é mais recomendado para estrangeiros?' alt='Qual banco é mais recomendado para estrangeiros?' />
                        </div>
                        <div onClick={() => playAudio('passaporteconta')}>
                            <Cards2 icon='assets/images/passapor.png' text='Posso usar meu passaporte para abrir uma conta?' alt='Posso usar meu passaporte para abrir uma conta?' />
                        </div>
                        <div onClick={() => playAudio('suporteinglespa')}>
                            <Cards2 icon='assets/images/acesso-a-operacoes-bancarias-via-internet.png' text='Existe algum banco que tenha suporte em inglês ou espanhol?' alt='Existe algum banco que tenha suporte em inglês ou espanhol?' />
                        </div>
                        <div onClick={() => playAudio('limitesaque')}>
                            <Cards2 icon='assets/images/dinheiro.png' text='Há algum limite de saque para estrangeiros neste caixa eletrônico?' alt='Há algum limite de saque para estrangeiros neste caixa eletrônico?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('transferirdinheiro')}>
                            <Cards2 icon='assets/images/troca-de-dinheiro.png' text='Como faço para transferir dinheiro para outro país?' alt='Como faço para transferir dinheiro para outro país?' />
                        </div>
                        <div onClick={() => playAudio('abrircontaonline')}>
                            <Cards2 icon='assets/images/fatura.png' text='Posso abrir uma conta online ou preciso ir até uma agência?' alt='Posso abrir uma conta online ou preciso ir até uma agência?' />
                        </div>
                        <div onClick={() => playAudio('residentestemporarios')}>
                            <Cards2 icon='assets/images/agente.png' text='Este banco oferece contas específicas para residentes temporários?' alt='Este banco oferece contas específicas para residentes temporários?' />
                        </div>
                        <div onClick={() => playAudio('trocarmoeda')}>
                            <Cards2 icon='assets/images/troca-de-dinhe.png' text='Onde encontro um banco que troque moeda estrangeira?' alt='Onde encontro um banco que troque moeda estrangeira?' />
                        </div>
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Polícia' && (
                <>
                    <div className='titulo-card'>
                        <h1>Polícia:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('delegaciaproxima')}>
                            <Cards2 icon='assets/images/sireneCards.png' text='Onde é a delegacia de polícia mais próxima?' alt='Onde é a delegacia de polícia mais próxima?' />
                        </div>
                        <div onClick={() => playAudio('registrar')}>
                            <Cards2 icon='assets/images/ocorrenciaCards.png' text='Como faço para registrar uma ocorrência?' alt='Como faço para registrar uma ocorrência?' />
                        </div>
                        <div onClick={() => playAudio('chamapolicia')}>
                            <Cards2 icon='assets/images/telefoneCards.png' text='Preciso de ajuda, você pode chamar a polícia?' alt='Preciso de ajuda, você pode chamar a polícia?' />
                        </div>
                        <div onClick={() => playAudio('canaldeapoio')}>
                            <Cards2 icon='assets/images/apoio-suporte.png' text='Existe um canal de apoio da polícia para imigrantes na minha situação?' alt='Existe um canal de apoio da polícia para imigrantes na minha situação?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('chamapolicia')}>
                            <Cards2 icon='assets/images/alarme.png' text='Qual o número de emergência para chamar a polícia aqui?' alt='Qual o número de emergência para chamar a polícia aqui?' />
                        </div>
                        <div onClick={() => playAudio('infocorrencia')}>
                            <Cards2 icon='assets/images/informacoes.png' text='Como posso obter informações sobre uma ocorrência registrada?' alt='Como posso obter informações sobre uma ocorrência registrada?' />
                        </div>
                        <div onClick={() => playAudio('violenciadome')}>
                            <Cards2 icon='assets/images/estupro.png' text='Onde fica a delegacia de polícia especializada em casos de violência doméstica?' alt='Onde fica a delegacia de polícia especializada em casos de violência doméstica?' />
                        </div>
                        <div onClick={() => playAudio('assistencia')}>
                            <Cards2 icon='assets/images/vitima.png' text='A polícia oferece algum tipo de assistência a vítimas de crimes?' alt='A polícia oferece algum tipo de assistência a vítimas de crimes?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('copiaboletim')}>
                            <Cards2 icon='assets/images/boletim-de-noticias.png' text='Como posso solicitar uma cópia do boletim de ocorrência?' alt='Como posso solicitar uma cópia do boletim de ocorrência?' />
                        </div>
                        <div onClick={() => playAudio('atendimentoidiomas')}>
                            <Cards2 icon='assets/images/escolha-de-idioma.png' text='A delegacia tem atendimento em outros idiomas para estrangeiros?' alt='A delegacia tem atendimento em outros idiomas para estrangeiros?' />
                        </div>
                        <div onClick={() => playAudio('horariodelega')}>
                            <Cards2 icon='assets/images/atendimento-ao-cliente.png' text='Quais são os horários de atendimento da delegacia mais próxima?' alt='Quais são os horários de atendimento da delegacia mais próxima?' />
                        </div>
                        <div onClick={() => playAudio('imigrantesajudapoli')}>
                            <Cards2 icon='assets/images/servico-de-atendimento-ao-consumidor.png' text='Existe algum centro de apoio legal para imigrantes que precisem de ajuda policial?' alt='Existe algum centro de apoio legal para imigrantes que precisem de ajuda policial?' />
                        </div>
                    </section>
                </>

            )}
            {categoriaSelecionada === 'Compras' && (
                <>
                    <div className='titulo-card'>
                        <h1>Compras:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('lojaacessivel')}>
                            <Cards2 icon='assets/images/camisetaCards.png' text='Onde posso encontrar uma loja de roupas com preços acessíveis?' alt='Onde posso encontrar uma loja de roupas com preços acessíveis?' />
                        </div>
                        <div onClick={() => playAudio('comprarusados')}>
                            <Cards2 icon='assets/images/moveisCards.png' text='Qual o melhor lugar para comprar móveis usados?' alt='Qual o melhor lugar para comprar móveis usados?' />
                        </div>
                        <div onClick={() => playAudio('moedainter')}>
                            <Cards2 icon='assets/images/moedasCards.png' text='Este shopping aceita moedas internacionais?' alt='Este shopping aceita moedas internacionais?' />
                        </div>
                        <div onClick={() => playAudio('shoppingnesta')}>
                            <Cards2 icon='assets/images/localizacao.png' text='Quais são os melhores shoppings ou lojas de rua nesta região?' alt='Quais são os melhores shoppings ou lojas de rua nesta região?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('mercadopulgas')}>
                            <Cards2 icon='assets/images/carrinho-de-carrinho.png' text='Existe algum mercado de pulgas por aqui?' alt='Existe algum mercado de pulgas por aqui?' />
                        </div>
                        <div onClick={() => playAudio('roupasegunda')}>
                            <Cards2 icon='assets/images/roupass.png' text='Onde encontro lojas especializadas em roupas de segunda mão?' alt='Onde encontro lojas especializadas em roupas de segunda mão?' />
                        </div>
                        <div onClick={() => playAudio('entregarapida')}>
                            <Cards2 icon='assets/images/entrega-rapidaaa.png' text='Tem alguma loja de móveis que faça entrega rápida?' alt='Tem alguma loja de móveis que faça entrega rápida?' />
                        </div>
                        <div onClick={() => playAudio('promocoesano')}>
                            <Cards2 icon='assets/images/promocoes.png' text='Quais lojas oferecem promoções nesta época do ano?' alt='Quais lojas oferecem promoções nesta época do ano?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('eletronicosprecos')}>
                            <Cards2 icon='assets/images/eletronico.png' text='Onde posso encontrar eletrônicos com bons preços?' alt='Onde posso encontrar eletrônicos com bons preços?' />
                        </div>
                        <div onClick={() => playAudio('outlet')}>
                            <Cards2 icon='assets/images/mercadooo.png' text='Este shopping tem área de desconto ou outlet?' alt='Este shopping tem área de desconto ou outlet?' />
                        </div>
                        <div onClick={() => playAudio('locaisartesanaiz')}>
                            <Cards2 icon='assets/images/artesanal.png' text='Qual loja daqui vende produtos artesanais ou locais?' alt='Qual loja daqui vende produtos artesanais ou locais?' />
                        </div>
                        <div onClick={() => playAudio('pagamentosdigitais')}>
                            <Cards2 icon='assets/images/pagamento-movel.png' text='Como posso encontrar lojas que aceitem pagamentos digitais?' alt='Como posso encontrar lojas que aceitem pagamentos digitais?' />
                        </div>
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Escola' && (
                <>
                    <div className='titulo-card'>
                        <h1>Escola:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('matriculaimigra')}>
                            <Cards2 icon='assets/images/escolaCards.png' text='Quais escolas públicas aceitam matrículas de crianças imigrantes?' alt='Quais escolas públicas aceitam matrículas de crianças imigrantes?' />
                        </div>
                        <div onClick={() => playAudio('cursoportu')}>
                            <Cards2 icon='assets/images/cursoportuguesCards.png' text='Existe algum curso de português oferecido por essa escola?' alt='Existe algum curso de português oferecido por essa escola?' />
                        </div>
                        <div onClick={() => playAudio('matricularescola')}>
                            <Cards2 icon='assets/images/matriculaCards.png' text='Como faço para matricular meu filho nesta escola?' alt='Como faço para matricular meu filho nesta escola?' />
                        </div>
                        <div onClick={() => playAudio('aulareforco')}>
                            <Cards2 icon='assets/images/aprendizagem-por-reforco.png' text='Como posso inscrever meus filhos em aulas de reforço escolar?' alt='Como posso inscrever meus filhos em aulas de reforço escolar?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('vagasescola')}>
                            <Cards2 icon='assets/images/miudo.png' text='Há vagas disponíveis para crianças estrangeiras nesta escola?' alt='Há vagas disponíveis para crianças estrangeiras nesta escola?' />
                        </div>
                        <div onClick={() => playAudio('apresentardocu')}>
                            <Cards2 icon='assets/images/carteira-de-identidade.png' text='Quais documentos preciso apresentar para a matrícula?' alt='Quais documentos preciso apresentar para a matrícula?' />
                        </div>
                        <div onClick={() => playAudio('apoiopeda')}>
                            <Cards2 icon='assets/images/lingua-estrangeira.png' text='Essa escola oferece apoio pedagógico para crianças que não falam português?' alt='Essa escola oferece apoio pedagógico para crianças que não falam português?' />
                        </div>
                        <div onClick={() => playAudio('atividadesabertas')}>
                            <Cards2 icon='assets/images/extracurricular.png' text='Existem atividades extracurriculares abertas a todos os alunos?' alt='Existem atividades extracurriculares abertas a todos os alunos?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('transferirescola')}>
                            <Cards2 icon='assets/images/transferindo.png' text='Qual o processo para transferir uma criança de outra escola?' alt='Qual o processo para transferir uma criança de outra escola?' />
                        </div>
                        <div onClick={() => playAudio('integracaocult')}>
                            <Cards2 icon='assets/images/diversidade-cultural.png' text='Essa escola tem programas de integração cultural para alunos imigrantes?' alt='Essa escola tem programas de integração cultural para alunos imigrantes?' />
                        </div>
                        <div onClick={() => playAudio('opcoesbilingue')}>
                            <Cards2 icon='assets/images/bilingue.png' text='Há opções de ensino bilíngue ou de idiomas nesta região?' alt='Há opções de ensino bilíngue ou de idiomas nesta região?' />
                        </div>
                        <div onClick={() => playAudio('escolasinclusivas')}>
                            <Cards2 icon='assets/images/inclusividade.png' text='Onde encontro informações sobre escolas inclusivas para crianças estrangeiras?' alt='Onde encontro informações sobre escolas inclusivas para crianças estrangeiras?' />
                        </div>
                    </section>
                </>
            )}
            {categoriaSelecionada === 'Documentos' && (
                <>
                    <div className='titulo-card'>
                        <h1>Documentos:</h1>
                    </div>
                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('tiracpf')}>
                            <Cards2 icon='assets/images/cpfCards.png' text='Onde posso tirar meu CPF?' alt='Onde posso tirar meu CPF?' />
                        </div>
                        <div onClick={() => playAudio('solicitaresidencia')}>
                            <Cards2 icon='assets/images/residenciaCards.png' text='Qual o procedimento para solicitar a residência permanente?' alt='Qual o procedimento para solicitar a residência permanente?' />
                        </div>
                        <div onClick={() => playAudio('legalizardocu')}>
                            <Cards2 icon='assets/images/marteloCards.png' text='Como posso legalizar meus documentos estrangeiros aqui?' alt='Como posso legalizar meus documentos estrangeiros aqui?' />
                        </div>
                        <div onClick={() => playAudio('vistotrabalho')}>
                            <Cards2 icon='assets/images/prazo-final.png' text='Quais são os prazos para solicitar visto de trabalho ou residência?' alt='Quais são os prazos para solicitar visto de trabalho ou residência?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('carteiratrabalho')}>
                            <Cards2 icon='assets/images/homem-de-negocios.png' text='Onde posso solicitar a carteira de trabalho para estrangeiros?' alt='Onde posso solicitar a carteira de trabalho para estrangeiros?' />
                        </div>
                        <div onClick={() => playAudio('renovarvisto')}>
                            <Cards2 icon='assets/images/visto.png' text='Como faço para renovar meu visto temporário?' alt='Como faço para renovar meu visto temporário?' />
                        </div>
                        <div onClick={() => playAudio('orgaosuporte')}>
                            <Cards2 icon='assets/images/pergunta.png' text='Quais órgãos oferecem suporte para regularização de documentos?' alt='Quais órgãos oferecem suporte para regularização de documentos?' />
                        </div>
                        <div onClick={() => playAudio('emissaorg')}>
                            <Cards2 icon='assets/images/RG.png' text='Há um atendimento específico para emissão de RG para estrangeiros?' alt='Há um atendimento específico para emissão de RG para estrangeiros?' />
                        </div>
                    </section>

                    <section className={'Sobre-cards mostrar'}>
                        <div onClick={() => playAudio('entradapais')}>
                            <Cards2 icon='assets/images/paises.png' text='Qual o prazo para registrar minha entrada no país?' alt='Qual o prazo para registrar minha entrada no país?' />
                        </div>
                        <div onClick={() => playAudio('revalidacaodiplo')}>
                            <Cards2 icon='assets/images/diplo.png' text='Onde encontro informações sobre revalidação de diplomas?' alt='Onde encontro informações sobre revalidação de diplomas?' />
                        </div>
                        <div onClick={() => playAudio('consulado')}>
                            <Cards2 icon='assets/images/agendamento-on-line.png' text='Posso agendar online para legalizar meus papéis no consulado?' alt='Posso agendar online para legalizar meus papéis no consulado?' />
                        </div>
                        <div onClick={() => playAudio('naturalizacao')}>
                            <Cards2 icon='assets/images/naturalizacao.png' text='Existe algum programa que facilite a naturalização de estrangeiros?' alt='Existe algum programa que facilite a naturalização de estrangeiros?' />
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Pagina1;
