import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import Box from '@material-ui/core/Box';


function Navbar() {
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" style={{color: "white", fontWeight:"bold"}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title">
                           Home
                        </Typography>
                        <Button className="options" style={{ color: "white", fontWeight: "bold" }}>Postagens</Button>
                        <Button className="options" style={{ color: "white", fontWeight: "bold" }}>Temas</Button>
                        <Button className="options" style={{ color: "white", fontWeight: "bold" }}>Cadastrar Tema</Button>
                        <Box>
                            <Link to ="/login"><Button className="options" style={{ color: "white", fontWeight: "bold" }}>Entrar </Button></Link>
                        </Box>
                        
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;