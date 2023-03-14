import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import './index.css'

const customTheme = extendTheme({
  fonts: {
    heading: 'RobotoMonoBold, sans-serif',
    body: 'system-ui, sans-serif',
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
)
