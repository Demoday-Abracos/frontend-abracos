import HeaderNew from './components/home/HeaderNew';
import Header from './components/home/Header';
import { useAuth } from './AuthContext';

function HeaderWrapper() {
    const {authToken} = useAuth();
    return authToken ? <HeaderNew /> : <Header />;
}

export default HeaderWrapper;
