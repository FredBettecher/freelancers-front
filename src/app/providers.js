'use client';

import UserContextProvider from './contexts/userContext';
import StyledComponentsRegistry from './lib/registry';

export default function Providers({ children }) {
    return(
        <StyledComponentsRegistry>
            <UserContextProvider>{children}</UserContextProvider>
        </StyledComponentsRegistry>
    );
}
