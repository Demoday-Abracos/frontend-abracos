import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// Provider para envolver o App e fornecer o token
export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const navigate = useNavigate();

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
        
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar o AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
