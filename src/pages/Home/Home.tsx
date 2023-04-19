import React from "react";
import { Grid, Typography, Button } from "@material-ui/core"
import Box from '@mui/material/Box/Box';
import './Home.css';
import { Height } from "@material-ui/icons";
import { Link } from "react-router-dom";
import User from '../../models/User';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }} >
                <Grid item alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja Bem Vindo(a)!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Aqui você é livre para criar!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                     <Link to='/postagens'><Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#eea832", color: "white", fontWeight: "bold" }}>Ver postagens</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src\assets\img\Blog post-bro.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;