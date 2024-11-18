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
      <div style={{display:"flex", borderBottom:"2px solid #4285f4", width:"70px", alignItems:"end"}}>
      <div style={{ display:"flex", margin:"0 0 2px 0",padding:"0 0 2px 0px", fontSize:"14px", color:"#4285f4"}}>
        <TfiMenuAlt style={{display:"flex", alignItems:"end", marginTop:"3px", padding:"0 5px 0 0", width:"13px", color:"#4285f4", fontFamily:"Roboto"}}/>
        <b >Results</b>
      </div>
      </div>
    </div>
    <div style={{display:"flex", margin:"20px 10% 0 10%"}}>

    <div style={{display:"flex", flexDirection: "column",height:"100vh", width:"17%", margin:"0 0 0 20px", color:"#000000", fontFamily:"Roboto", borderRight: "1px solid lightgrey"}}>
    <div style={{display:"flex", flexDirection: "column", marginTop:"10px"}}></div>
    <div style={{marginTop:"10px"}}><b>Host Filters</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Labels:</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Autonomous System:</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Location:</b></div>
    <div style={{marginTop:"10px"}}><b>Service Filters</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Service Names:</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Ports:</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Software Vendor:</b></div>
    <div style={{marginTop:"10px", fontSize:"13px"}}><b>Software Product:</b></div>
    </div>

    <div style={{display:"flex", flexDirection:"column", color:"black", padding: "10px 0 0 20px"}}>
      <b>Hosts</b>
      <div style={{color:"grey", fontSize:"11px"}}><b>Results: blahblahblah</b></div>
    </div>
    </div>
    </>
  )
}

export default App
