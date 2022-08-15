import dynamic from "next/dynamic";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      dark:'#0a0b0d',
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      </ThirdwebProvider> */}
      <MoralisProvider serverUrl={'https://124a8yab5jee.usemoralis.com:2053/server'} appId='Seyf64uxlgqgxt5Y75p1M4Hq21CC5osXcvj4T8Yw'>
      <Component {...pageProps} />
      </MoralisProvider>
    </ThemeProvider>
  )
}

export default MyApp;
