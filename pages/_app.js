import dynamic from "next/dynamic";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import '../styles/globals.css'

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
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
      </ThirdwebProvider>
    </ThemeProvider>
  )
}

export default MyApp;
