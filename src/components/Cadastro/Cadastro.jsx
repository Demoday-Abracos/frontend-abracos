import React, { useState } from 'react';
import '../Styles/Cadastro.css';
import { Link } from 'react-router-dom';

import voltar from '../../../public/assets/images/voltar_cad.png';
import bola_lar from '../../../public/assets/images/bola_laranja_cad.png';
import bola_azul from '../../../public/assets/images/bola_azul_cad.png';

function Cadastro() {
    const [nome_imigrante, setNomeCompleto] = useState('');
    const [email_imigrante, setEmail] = useState('');
    const [telefone_imigrante, setTelefone] = useState('');
    const [senha_imigrante, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault(); 

        if (senha_imigrante !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        const dados = {
            nome_imigrante,
            email_imigrante,
            telefone_imigrante,
            senha_imigrante
        };

        try {
            const response = await fetch('https://backend.abracos.tech/imigrantes/inserir', {
                method: 'POST',
                credentials: "include",
                headers: {'Content-Type': 'application/json'},
                
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao realizar cadastro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <>
            <section className='sec_cad'>
                <div className='barra_lateral'>
                    <button className='botao_voltar' title='Voltar pra Home' alt='Home'>
                        <Link to='/'><img className='voltar_cad' src={voltar} /></Link>
                    </button>

                    <img className='bola_lar' src={bola_lar} alt="bolinha_laranja" />
                </div>

                <nav className='h1_cad'>
                    <div className='colocar_displa'>
                        <h2 className='bem_vindo_cad'>Seja bem-vindo!</h2>
                        <p className='p1_cad'>Crie a sua conta para continuar</p>
                    </div>
                    <nav className='nav_cad'>
                        <nav className='div_cad'>
                            <div className='colocar_margin'>
                                <h2 className='h2_cad'>Nome completo:</h2>
                                <input
                                    type="text"
                                    name="nome"
                                    className="input_cad"
                                    alt='nome'
                                    placeholder='Ex: Victor Ramalho'
                                    value={nome_imigrante}
                                    onChange={(e) => setNomeCompleto(e.target.value)}
                                />

                                <h2 className='h2_cad'>Email:</h2>
                                <input
                                    type="email"
                                    name="email"
                                    className="input_cad"
                                    alt='email'
                                    placeholder='Ex: VictorRamalho@hotmail.com'
                                    value={email_imigrante}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <h2 className='h2_cad'>Número de telefone:</h2>
                                <div className='colocar_display_cad'>
                                    <p className='p_cad'>+55</p>
                                    <input
                                        type="number"
                                        name="telefone"
                                        className="telefone_cad"
                                        maxLength={11}
                                        alt='telefone'
                                        placeholder='11959520248'
                                        value={telefone_imigrante}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                </div>

                                <h2 className='h2_cad'>Crie uma senha:</h2>
                                <input
                                    type="password"
                                    name="senha"
                                    className="input_cad"
                                    alt='senha'
                                    placeholder='Sua senha'
                                    value={senha_imigrante}
                                    onChange={(e) => setSenha(e.target.value)}
                                />

                                <h2 className='h2_cad'>Confirme a senha:</h2>
                                <input
                                    type="password"
                                    name="Confirmar_senha"
                                    className="input_cad"
                                    alt='confirmar_senha'
                                    placeholder='Confirme a senha'
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                />
                                <br />

                                <div className='colocar_displayy'>
                                    <button
                                        className='botao_cad'
                                        onClick={handleCadastro}
                                    >
                                        Cadastrar-se
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </nav>
                </nav>
                <img className='bola_azul' src={bola_azul} alt="bolinha_azul" />
            </section>
        </>
    );
}

export default Cadastro;
