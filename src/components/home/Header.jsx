import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/Logo.png';
import '../styles/Header.css';

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
                                className='nav-link apoio' 
                                onMouseEnter={() => setShowSubmenu(true)} 
                                onMouseLeave={() => setShowSubmenu(false)}
                            >
                                Apoio
                                {showSubmenu && (
                                    <ul className='submenu'>
                                        <li><Link to='Doe' onClick={handleLinkClick}>Doe</Link></li>
                                        <li><Link to='Acolhimento' onClick={handleLinkClick}>Acolhimento</Link></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'><Link to='login'>Entrar</Link></div>
                    <div className='cadastro'><Link to='Cadastro'>Cadastre-se</Link></div>
                </div>
            </header>
        </>
    );
}

export default Header;