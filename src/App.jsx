import { useState } from 'react'
import Header from "./Components/Header"
import './App.css'
import Data from './Components/Data'
import SideBar from './Components/SideBar'
import GetData from './Components/GetData'

function App() {
  const [state, setState] = useState(false)

  

  return (
   <div>
    <Header  />
    <SideBar />
    <Data />
   </div>
  )
}

export default App
