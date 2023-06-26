'use client';

import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if(storedToken) {
            setToken(storedToken);
        }
    }, []);

    const setPersistentToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const tokenValue = {
        token,
        setToken: setPersistentToken,
    };

    return(
        <UserContext.Provider value={tokenValue}>
            { children }
        </UserContext.Provider>
    );
}
