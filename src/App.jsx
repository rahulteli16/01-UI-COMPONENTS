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

import Backgraound from "./Components/backgraound.jsx";
import Imggallery from "./Components/imggallery.jsx";
import FAQ from "./Components/FAQ.jsx";
import Contact from "./Components/contact.jsx";

import Heropage from "./Components/heropage.jsx"
import Nikenavbar from "./Components/nikenavbar.jsx";
import Footer from "./Components/footer.jsx";


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
      {/* <Responsive/> */}
      {/* <Navbar/> */}
      {/* <Newnavbar/> */}
      {/* <Pronavbar/> */}

      {/* <Selfnavbar/> */}
      {/* <Selfmegamenu/> */}
      {/* <Loginpage/> */}
      {/* <Signup/> */}
      {/* <Heropage/> */}

      <Routes>
        <Route path="/" element={<Heropage/>}/>
        <Route path="/navbar" element={<Selfmegamenu />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/backgraound" element={<Backgraound />} />
        <Route path="/imggallery" element={<Imggallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactp" element={<Contact />} />

        <Route path="/nikenavbar" element={<Nikenavbar/>}/>
        <Route path="/nikefooter" element={<Footer/>}/>
      </Routes>
    </>
  )
}

export default App