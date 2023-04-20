import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Home } from "@material-ui/icons";
import Box from '@mui/material/Box/Box';


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
                          <Link to='/home' className="homeLink">Home</Link>
                        </Typography>
                        <Link to ="/postagens"><Button className="options" style={{ color: "white", fontWeight: "bold" }}>Postagens</Button></Link>
                        <Link to='/temas'><Button className="options" style={{ color: "white", fontWeight: "bold" }}>Temas</Button></Link>

                        <Button className="options" style={{ color: "white", fontWeight: "bold" }}>Cadastrar Tema</Button>
                        <Box>
                            <Link to ="/login"><Button className="options" id="changeHome" style={{ color: "white", fontWeight: "bold" }}>Logout</Button></Link>
                        </Box>
                        
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;