
//importar as functions
import Navbar from './Components/statics/Navbar/Navbar'
import Footer from './Components/statics/Footer/Footer'
import Home from './pages/Home/Home';
import Login from './pages/login/Login'
import store from './store/store';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './Components/temas/ListaTemas'
import CadastroTema from './Components/temas/cadastroTema/CadastroTema'
import ListaPostagem from './Components/postagens/ListaPostagens'
import DeletarTema from './Components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './Components/postagens/deletarPostagem/DeletarPostagem';
import CadastroPostagem from './Components/postagens/cadastroPostagem/CadastroPostagem';
//imports necessários
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Logar from './pages/login/Login';


function App() {
   return (
      <>
         <Provider store={store}>
            <ToastContainer/>
            <BrowserRouter>
               <Navbar />
               <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/cadastrousuario' element={<CadastroUsuario />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/temas' element={<ListaTema />} />
                  <Route path='/postagens' element={<ListaPostagem />} />
                  <Route path='/formularioTemas' element={<CadastroTema />} />
                  <Route path='/formularioTemas/:id' element={<CadastroTema />} />
                  <Route path='/formularioPost' element={<CadastroPostagem />} />
                  <Route path='/formularioPost/:id' element={<CadastroPostagem />} />
                  <Route path='/deletarTemas/:id' element={<DeletarTema />} />
                  <Route path='/deletarPostagens/:id' element={<DeletarPostagem />} />
               </Routes>
               <Footer />
            </BrowserRouter>
         </Provider>
      </>
   );
}

export default App
