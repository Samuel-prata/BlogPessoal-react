import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importar as functions
import Navbar from './Components/statics/Navbar/Navbar'
import Footer from './Components/statics/Footer/Footer'
import Home from './pages/Home/Home';
import Login from './pages/login/Login'
//imports necessários
import { Grid } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <BrowserRouter>

            <Navbar />
            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/login' element={<Login />} />
               <Route path='/home' element={<Home />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App
