import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home, { Second } from './assets/component/Home.jsx'
import Navbar from './navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Home />
    <Second />
  </StrictMode>,
)
