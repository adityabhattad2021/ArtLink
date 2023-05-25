import { useContext, createContext, ReactNode } from 'react';
import { useAddress, useAuth, useMetamask } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { signIn, signOut, useSession } from "next-auth/react";

interface StateContextProps {
    address: any;
    connect: any;
    loginWithWallet: any;
}

const StateContext = createContext<StateContextProps>({
    address: null,
    connect: () => { },
    loginWithWallet: () => Promise.resolve(),
});

export function StateContextProvider({ children }: { children: ReactNode }) {
    const address = useAddress();
    const auth = useAuth();
    const connect = useMetamask();

    const loginWithWallet = async () => {
        const payload = await auth?.login();
        await signIn("credentials", {
            payload: JSON.stringify(payload),
            redirect: false,
        });
    };


    return (
        <StateContext.Provider value={{
            address,
            connect,
            loginWithWallet
        }}>
            {children}
        </StateContext.Provider>
    )
}

export function useStateContext() {
    return useContext(StateContext);
}