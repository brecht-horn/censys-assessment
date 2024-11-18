import { useState } from 'react'
import censysLogo from '/censys-2022.svg'
import './global.css'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    </>
  )
}

export default App
