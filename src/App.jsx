import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Acolhimento from './components/Acolhimento/Acolhimento';
import Cadastro from './components/Cadastro/Cadastro';
import Cards from './components/cards/Cards';
import Pagina1 from './components/cards/pag2/Pagina1';
import Cursos from './components/Cursos/Cursos';
import Documentos from './components/Documentos/Documentos';
import Doe from './components/Doe/Doe';
import Empregabilidade from './components/Empregados/Empregabilidade';
import Empresas from './components/Empresas/Empresas';
import GTranslate from './components/Util/GTranslate';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Psicologos from './components/psicologos/Psicologos';
import SobreNos from './components/SobreNos/SobreNos';
import Videoaulas from './components/videoaulas/Videoaulas';
import Voluntarios from './components/voluntarios/Voluntarios';
import ScrollToTop from './components/Util/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget';
import EditarPerfil from './components/EditarPerfil/EditarPerfil';
import MinhaConta from './components/MinhaConta/MinhaConta';
import FaleConosco from './components/FaleConosco/FaleConosco';
import HeaderWrapper from './Verificacao';
import { AuthProvider } from './AuthContext';

function AppContent() {
  const location = useLocation();

  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthToken(localStorage.getItem('authToken'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const isFrequenciaRoute = location.pathname === '/cad' || location.pathname === '/login';


  return (
    <>
      {!isFrequenciaRoute && <HeaderWrapper authToken={authToken} />}
      <GTranslate></GTranslate>
      <ScrollToTop></ScrollToTop>
      <ChatbotWidget />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cards' element={<Cards />} />
        <Route path='Doe' element={<Doe />} />
        <Route path='Psicologos' element={<Psicologos />} />
        <Route path='hospital' element={<Pagina1 />} />
        <Route path='mercado' element={<Pagina1 />} />
        <Route path='Polícia' element={<Pagina1 />} />
        <Route path='Banco' element={<Pagina1 />} />
        <Route path='Compras' element={<Pagina1 />} />
        <Route path='Transporte' element={<Pagina1 />} />
        <Route path='Alimentação' element={<Pagina1 />} />
        <Route path='MainSection' element={<Pagina1 />} />
        <Route path='escola' element={<Pagina1 />} />
        <Route path='Alimentação' element={<Pagina1 />} />
        <Route path='Saudações' element={<Pagina1 />} />
        <Route path='documentos' element={<Pagina1 />} />
        <Route path='SobreNos' element={<SobreNos />} />
        <Route path='Cursos' element={<Cursos />} />
        <Route path='/Empregar' element={<Empregabilidade />} />
        <Route path='Empresas' element={<Empresas />} />
        <Route path='Videoaulas' element={<Videoaulas />} />
        <Route path='Documentacao' element={<Documentos />} />
        <Route path='form' element={<Voluntarios />} />
        <Route path='Acolhimento' element={<Acolhimento />} />
        <Route path='cad' element={<Cadastro />} />
        <Route path='login' element={<Login />} />
        <Route path='FaleConosco' element={<FaleConosco />}></Route>
        <Route path='MinhaConta' element={<MinhaConta />}></Route>
        <Route path='EditarPerfil' element={<EditarPerfil />}></Route>
      </Routes>
      {!isFrequenciaRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router basename="/frontend-abracos">
      <AuthProvider>
        <main className="container-principal">
          <AppContent />
        </main>
      </AuthProvider>
    </Router>
  )
}

export default App;
