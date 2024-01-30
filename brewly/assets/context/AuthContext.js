import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login a user
  const login = async (username, password) => {
    try {
      const PORT = 9000 || 3001;

      const response = await fetch(`http://localhost:${PORT}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // const { user, token } = await response.json();
      const userData = await response.json();
      // setUser({ ...user, token });
      setUser({ ...userData });
      // return { ...user, token };
      // return token;
      return userData;
    } catch (err) {
      throw new Error(`Error logging in: ${err.message}`);
    }
  };


  const logout = () => setUser(null);

  // Sign up a new user
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

      // const { user, token } = await response.json();
      // login({ ...user, token });
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
