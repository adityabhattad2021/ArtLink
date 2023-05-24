import { useContext, createContext, ReactNode } from 'react';
import { useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

interface StateContextProps {}

const StateContext = createContext<StateContextProps>({});

export function StateContextProvider({ children }: { children: ReactNode }) {
    const address = useAddress();

    return (
        <StateContext.Provider value={{
            address,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export function useStateContext() {
    return useContext(StateContext);
}