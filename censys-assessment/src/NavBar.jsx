import { useState } from 'react'
import censysLogo from '/censys-2022.svg'
import './global.css'

function NavBar() {
  
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="navBar">
     <a href="https://search.censys.io" target="_blank">
          <img src={censysLogo} className="logo" alt="Censys logo" />
        </a>
        <div style={{display:"flex", alignItems:"center"}}>
          <input className="searchInput" placeholder="Search"/>
          <button className="button"><b>Search</b></button>
        </div>
     </div>
    </>
  )
}

export default NavBar
