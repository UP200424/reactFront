import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './AppCiudades.jsx'
// import App from './App1.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App color="red"/>
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

