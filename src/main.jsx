import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { //Contextt, 
  ContexttProvider } from './context/Contextt'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexttProvider>
      <App />
    </ContexttProvider>
  </React.StrictMode>,
)
