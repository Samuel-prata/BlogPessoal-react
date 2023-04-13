import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/statics/Navbar/Navbar'
import Footer from './Components/statics/Footer/Footer'
import './paginas/Home/Home.css'
import Home from './pages/Home/Home';
import { Grid } from '@material-ui/core';


function App() {
   return (
      <>
         <Navbar />
         <Home />
         <Footer />

      </>
   );
}

export default App
