import { useState } from 'react'
import Header from "./Components/Header"
import './App.css'
import Data from './Components/Data'
import SideBar from './Components/SideBar'
import GetData from './Components/GetData'
import store from "./store";
import { Link, Outlet } from "react-router-dom";



function App() {
  const [state, setState] = useState(false)

  

  return (
   <div>
    <Header  />
    <main>
    <Outlet />
    
    </main>
   </div>
  )
}

export default App
