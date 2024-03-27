import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss'
import { ReciboProvider } from './context/ReciboContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReciboProvider>
      <App />
    </ReciboProvider>
  </React.StrictMode>
)
