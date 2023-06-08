'use client';

import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [token, setToken] = useState('');

    const tokenValue = {
        token,
        setToken,
    };

    return(
        <UserContext.Provider value={tokenValue}>
            { children }
        </UserContext.Provider>
    );
}
