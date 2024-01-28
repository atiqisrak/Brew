import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (newToken) => setToken(newToken);
    const logout = () => setToken(null);

    const authValues = {
        token,
        login,
        logout,
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
