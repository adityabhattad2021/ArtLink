import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "../context";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <StateContextProvider>
          <Component {...pageProps} />
        </StateContextProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;