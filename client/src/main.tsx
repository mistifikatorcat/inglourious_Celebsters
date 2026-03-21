//import './index.css'
import App from './app/App.tsx'
import "./styles/globals.css";
import "./styles/theme.css";
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)