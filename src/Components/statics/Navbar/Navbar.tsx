import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import Box from '@mui/material/Box/Box';


function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()
    function goLogout(){
        setToken('')
        alert('Usuario desconectado')
        navigate('/login')
    }
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" style={{color: "white", fontWeight:"bold"}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title">
                          <Link to='/home' className="homeLink">Home</Link>
                        </Typography>
                        <Link to ="/postagens"><Button className="options">Postagens</Button></Link>
                        <Link to='/temas'><Button className="options">Temas</Button></Link>

                        <Link to='/formularioTemas'><Button className="options" >Cadastrar Tema</Button></Link>
                        <Box>
                         <Button className="options" id="changeHome" onClick={goLogout}>Logout</Button>
                        </Box>
                        
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;