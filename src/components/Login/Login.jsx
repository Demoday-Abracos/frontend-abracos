import React from 'react';
import '../Styles/Login.css';
import { Link } from 'react-router-dom'
import voltar from '../../../public/assets/images/voltar_cad.png';

function Login() {
    
    return (
        <>
            <section className='colory'>
                <section className='login__section'>
                    <div className='bot'>
                        <button className='login__botaoVoltar' title='Voltar pra Home' alt='Home'>
                            <Link to='/'>
                                <img className='login__voltarImagem' src={voltar} alt="Voltar" />
                            </Link>
                        </button>
                    </div>
                        <div className="login__container">
                            <div className="login__left">
                                <h1>Bem-vindo!</h1>
                                <p>Sua jornada começa aqui: <br />Entrar é o primeiro passo para explorar.</p>
                            </div>
                            <div className="login__right">
                                <h2>Login</h2>
                                <form>
                                    <div className="login__inputGroup">
                                        <input type="text" id="username" placeholder="Usuário" />
                                        <img
                                            src="assets/images/perso.svg"
                                            alt="Ícone de usuário"
                                            className="login__inputIcon"
                                        />
                                    </div>
                                    <div className="login__inputGroup">
                                        <input type="password" id="password" placeholder="Senha" />
                                        <img
                                            src="assets/images/cadeado.svg"
                                            alt="Ícone de senha"
                                            className="login__inputIcon"
                                        />
                                    </div>
                                    <div className="login__createAccount">
                                    <Link to="/Cad">
                                        Não tem uma conta? <span>Crie uma conta</span>
                                    </Link>
                                    </div>
                                    <Link to='/EditarPerfil'><button type="submit" className="login__btnAccess">Acessar</button></Link>
                                </form>
                                <div className="login__footer">
                                    <a href="#">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </div>
                </section>
            </section>
        </>
    );
}

export default Login;
