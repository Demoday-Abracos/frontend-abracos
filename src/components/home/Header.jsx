import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/logo.png';
import '../../../src/components/Styles/Header.css';

function Header() {
    const [active, setMode] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    };

    const handleLinkClick = () => {
        setMode(false);
        setShowSubmenu(false);
    };

    return (
        <>
            <header>
                <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                    <div className='hamburguer hamburgerIcon'></div>
                </div>
                <div className="logo">
                    <Link to='/'><img src={img} alt="Logo" /></Link>
                </div>
                <nav className={active ? 'menu menuOpen' : 'menu menuClose'}>
                    <div className='List'>
                        <ul>
                            <li className='nav-link'><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                            <li className='nav-link'><Link to='Psicologos' onClick={handleLinkClick}>Psicólogos</Link></li>
                            <li className='nav-link'><Link to='Cursos' onClick={handleLinkClick}>Cursos</Link></li>
                            <li className='nav-link'><Link to='cards' onClick={handleLinkClick}>Cards</Link></li>
                            <li className='nav-link'><Link to='Documentacao' onClick={handleLinkClick}>Documentação</Link></li>
                            <li className='nav-link'><Link to='SobreNos' onClick={handleLinkClick}>Sobre</Link></li>
                            <li
                                className="item-principal ajuda"
                                onMouseEnter={() => setShowSubmenu(true)}
                                onMouseLeave={() => setShowSubmenu(false)}
                            >
                                <span className="texto-item">Apoio</span>
                                {showSubmenu && (
                                    <ul className="lista-secundaria">
                                        <li>
                                            <Link to="Doe" onClick={handleLinkClick} className="link-secundario">
                                                Doe
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="Acolhimento" onClick={handleLinkClick} className="link-secundario">
                                                Acolhimento
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="List area_cadastro_menu">
                        <div className='login'><Link to='login'>Entrar</Link></div>
                        <div className='cadastro'><Link to='cad'>Cadastre-se</Link></div>
                    </div>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'><Link to='login'>Entrar</Link></div>
                    <div className='cadastro'><Link to='cad'>Cadastre-se</Link></div>
                </div>
            </header>
        </>
    );
}

export default Header;
