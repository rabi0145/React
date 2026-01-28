import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home, { Second } from './assets/component/Home.jsx'
import Navbar from './navbar.jsx'
import First from './propsExample/first.jsx'
import Greet from './assets/component/Greet.jsx'
import Profile from './assets/component/stateExample/Profile.jsx'
import User from './assets/component/User.jsx'
import ThemeUpdate from './Day6/ThemeUpdate.jsx'
import ConditionalReindering from './Day6/ConditionalRendering.jsx'

let myObj = {
  address: "Kathmandu",
  age: 40,
  fullName: "Shyam Prasad"
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* String can be given without curly braces but integer must be inside a curly braces */}
    <First address={"Delhi"} age= {56} fullName = "Ram Prasad" />
    <First {...myObj} />
    <App />
    <Home />
    <Second />
    <Greet />
    <Profile />
    <User {...myObj} />
    <ThemeUpdate />
    <ConditionalReindering />
  </StrictMode>,
)
