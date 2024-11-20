import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Psicologos.css';
import Beneficios from './Beneficios';
import Modal from './Modal';
import Trabalhadores from './Trabalhadores';

function Psicologos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPsicologo, setSelectedPsicologo] = useState(null);

    const psicologos = [
        {
            foto: 'assets/images/drca.svg',
            titulo: 'Dra. Camilla Loures',
            paragrafo: 'Psicologia do Trauma e Resiliência Emocional',
        },
        {
            foto: 'assets/images/DrRichard.svg',
            titulo: 'Dr. Richard Gomes',
            paragrafo: 'Psicologia da Inclusão e apoio ',
        },
        {
            foto: 'assets/images/DrRaquel.svg',
            titulo: 'Dra. Raquel Sanches',
            paragrafo: 'Psicologia do Estresse e Bem-Estar Mental',
        }
    ];

    const openModal = (psicologo) => {
        setSelectedPsicologo(psicologo);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedPsicologo(null);
    };

    return (
        <>
            <section className='psicoo'>
                <div className="fundo_psicologos">
                    <p>Cuidar da mente é o primeiro passo para recomeçar uma nova<span className='passo'> vida.</span></p>
                </div>
            </section>

            <section className='we'>
                <h1>Nossos melhores Profissionais:</h1>
            </section>

            <section className='bordaa'>
                {psicologos.map((psicologo, index) => (
                    <div className='div-princiii' key={index} onClick={() => openModal(psicologo)}>
                        <Trabalhadores foto={psicologo.foto} titulo={psicologo.titulo} paragrafo={psicologo.paragrafo} />
                    </div>
                ))}
            </section>

            <section className='Laranja'>
                <div className='textinho'>
                    <h1>Benefícios</h1>
                    <p>Acompanhe os privilégios de nossos serviços</p>
                </div>
                <div className='imagens'>
                    <Beneficios foto='assets/images/beneficios1.svg' texto='Consultas sem custo' />
                    <Beneficios foto='assets/images/beneficios2.svg' texto='Atendimentos online' />
                    <Beneficios foto='assets/images/beneficios3.svg' texto='Tratamento acompanhado' />
                </div>
            </section>

            <section className='Formulario'>
                <div className='juncao'>
                    <img src="assets/images/fomsal.svg" alt="Formulário" />
                    <div className='envolta'>
                        <div className='ladoaperto'>
                            <h1>Seja a Mudança!</h1>
                            <p>Torne-se um Psicólogo
                            Voluntário!</p>
                        </div>
                        <div className='preparadolaranja'>
                            <p className='preparado'>Preparado para começar?</p>
                            <Link to="/form" className='preparadoazul'>Preparado</Link>
                        </div>
                    </div>
                </div>
            </section>

            {modalOpen && selectedPsicologo && (
                <Modal onClose={closeModal} psicologo={selectedPsicologo} />
            )}
        </>
    );
}

export default Psicologos;
