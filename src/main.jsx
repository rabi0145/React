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
import ListReindering from './Day-7/ListReindering.jsx'
import FoodMenu from './Pages/FoodMenu.jsx'
import FoodSubMenu from './Pages/FoodSubMenu.jsx'
import UnControlledFrom from './Day-8/UnControlledForm.jsx'
import UseEffectHook from './Day-9/UseEffectHook.jsx'
import UseEffectWithCleanup from './Day-9/UseEffectWithCleanup.jsx'
import Clock from './Day-9/HandsOn/First.jsx'
import UserProfile from './Day-9/HandsOn/Second.jsx'
import LoginForm from './Day-8/HandsOn/First.jsx'
import RegisterForm from './Day-8/HandsOn/Second.jsx'
import ToDoList from './Day-7/HandsOn/First.jsx'
import UseMemoEaxmple from './day-10/useMemoExample.jsx'
import UsecallbackEaxmple from './day-10/UseCallbackExample.jsx'
import CounterApp from './Day6/Hands-on/CounterApp.jsx'
import AdvanceCounter from './Day-9/HandsOn/AdvanceCounter.jsx'

let myObj = {
  address: "Kathmandu",
  age: 40,
  fullName: "Shyam Prasad"
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    {/* String can be given without curly braces but integer must be inside a curly braces */}
    {/* <First address={"Delhi"} age= {56} fullName = "Ram Prasad" />
    <First {...myObj} />
    <App />
    <Home />
    <Second />
    <Greet />
    <Profile />
    <User {...myObj} />
    <ThemeUpdate />
    <ConditionalReindering /> */}
    {/* <ListReindering/> */}
    {/* <FoodMenu /> */}
    {/* <FoodSubMenu /> */}
    {/* <UnControlledFrom /> */}
    {/* <UseEffectHook /> */}
    {/* <UseEffectWithCleanup /> */}
    {/* <Clock /> */}
    {/* <UserProfile /> */}
    {/* <LoginForm /> */}
    {/* <RegisterForm /> */}
    {/* <UseMemoEaxmple /> */}
    <ToDoList /> 
    {/* <CounterApp /> */}
    {/* <UsecallbackEaxmple/> */}
    {/* <UseMemoEaxmple /> */}
    <AdvanceCounter />
  </StrictMode>,
)
