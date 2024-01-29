import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const signUp = async (userData) => {
    try {
      const PORT = 9000 || 3001;

      const response = await fetch(`http://localhost:${PORT}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const { user, token } = await response.json();
      login({ ...user, token });
    } catch (err) {
      throw new Error(`Error signing up: ${err.message}`);
    }
  }

  const authValues = {
    user,
    login,
    logout,
    signUp,
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
