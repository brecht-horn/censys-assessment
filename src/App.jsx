import { useState } from 'react'
import censysLogo from '/censys-2022.svg'
import './global.css'
import NavBar from './NavBar'
import { TfiMenuAlt } from "react-icons/tfi";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div style={{display:"flex", borderBottom:"1px solid lightgrey", height:"65px", margin:"0 10% 0 10%", color:"black", alignItems:"end", justifyContent:"left"}}>
      <div style={{display:"flex", borderBottom:"2px solid blue", width:"70px", alignItems:"end"}}>
      <div style={{ display:"flex", margin:"0 0 2px 0",padding:"0 0 2px 0px", fontSize:"13px", color:"blue"}}>
        <TfiMenuAlt style={{display:"flex", alignItems:"end", marginTop:"3px", padding:"0 5px 0 0", width:"13px", color:"blue"}}/>
        <b >Results</b>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
