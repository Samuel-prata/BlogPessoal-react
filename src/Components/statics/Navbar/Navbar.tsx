import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import Box from '@mui/material/Box/Box';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";


function Navbar() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
// FUNÇÃO PARA DESLOGAR
    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuario Deslogado', {
            position: "top-center",
            autoClose: 2000,// 2000 milisegundos = 2 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        navigate('/login')
    }
    // renderização condicional
    var navbarComponent;
    if (token != '') {
        navbarComponent = <div className="root">
            <AppBar position="static" className="appBar">
                <Toolbar>
                    <IconButton edge="start" className="menuButton" aria-label="menu" style={{ color: "white", fontWeight: "bold" }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="title">
                        <Link to='/home' className="homeLink">Home</Link>
                    </Typography>
                    <Link to="/postagens"><Button className="options">Postagens</Button></Link>
                    <Link to='/temas'><Button className="options">Temas</Button></Link>

                    <Link to='/formularioTemas'><Button className="options" >Cadastrar Tema</Button></Link>
                    <Box>
                        <Button className="options" id="changeHome" onClick={goLogout}>Logout</Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;