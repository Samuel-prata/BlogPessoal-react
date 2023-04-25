
//importar as functions
import Navbar from './Components/statics/Navbar/Navbar'
import Footer from './Components/statics/Footer/Footer'
import Home from './pages/Home/Home';
import Login from './pages/login/Login'
//imports necessários

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './Components/temas/ListaTemas'
import CadastroTema from './Components/temas/cadastroTema/CadastroTema'
import ListaPostagem from './Components/postagens/ListaPostagens'

function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/login' element={<Login />} />
               <Route path='/cadastrousuario' element={<CadastroUsuario />} />
               <Route path='/home' element={<Home />} />
               <Route path='/temas' element={<ListaTema />} />
               <Route path='/postagens' element={<ListaPostagem />} />
               <Route path='/formularioTemas/' element={<CadastroTema />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App
