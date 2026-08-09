import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar.jsx'
import Reletive from './Components/reletive.jsx'
import Bell from './Components/bell.jsx'
import Login from './Components/login.jsx'  
import Img from './Components/img.jsx'
import Newnavbar from './Components/newnavbar.jsx'
import Box from './Components/box.jsx'
import Pronavbar from './Components/pronavbar.jsx'
import Transition from './Components/transition.jsx'
import Selfnavbar from './Components/selfnavbar.jsx'
import Megamenu from './megamenu.jsx'
import Responsive from './responsive.jsx'
import Selfmegamenu from './selfmegamenu.jsx'
import Loginpage from './Components/loginpage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Navbar/>     */}
    {/* <Reletive/> */}
    {/* <Bell/> */}
    {/* <Login/> */}
    {/* <Img/> */}
    {/* <Newnavbar/> */}
    {/* <Box/> */}
    {/* <Transition/> */}
    {/* <Pronavbar/> */}
    {/* <Selfnavbar/> */}
    {/* <Megamenu/>/ */}
    {/* <Responsive/>*/}
    {/* <Selfmegamenu/> */}
    <Loginpage/>
    </>
  )
}

export default App
