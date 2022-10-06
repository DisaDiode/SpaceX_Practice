import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App";
import './index.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#242424",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
)
