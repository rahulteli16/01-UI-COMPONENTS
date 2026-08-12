import { Routes, Route } from "react-router-dom";
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
import Screencheck from './Components/screencheck.jsx'
import Signup from './Components/signup.jsx'


function App() {


  return (
    <> 
    {/* <Reletive/> */}
    {/* <Bell/> */}
    {/* <Login/> */}
    {/* <Screencheck/> */}
    {/* <Transition/> */}
    {/* <Box/> */}
    {/* <Img/> */}
    {/* <Responsive/>*/}      {/*  normal responsive  */}
    {/* <Navbar/>*/}          {/*  navbar with megamenu */}
    {/* <Newnavbar/> */}      {/*  navbar with dropdown */}
    {/* <Pronavbar/> */}      {/*  navbar with dropdown big */}



    {/* <Selfnavbar/> */}     {/*  self created navbar with simple dropdown */}
    {/* <Selfmegamenu/> */}   {/*  self created responsive navbar */}
    {/* <Loginpage/> */}      {/* Responsive signin page  */}
    {/* <Signup/> */}         {/* Responsive signup page */}







    <Routes>
      <Route path="/" element={<h1>home page</h1>}/>

      <Route path="/navbar" element={<Selfmegamenu />} />

      <Route path="/login" element={<Loginpage />} />

      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </>  
)
}

export default App
