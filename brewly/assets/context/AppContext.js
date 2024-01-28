import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [order, setOrder] = useState(null);

    const values = {
        order,
        setOrder,
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
