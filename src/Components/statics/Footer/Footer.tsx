import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="redesSociais">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Samuel-prata" target="_blank">
                                <GitHubIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                            <a href="https://www.instagram.com/samuel_prataa/" target="_blank">
                                <InstagramIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/samuel-silveriom/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "black", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white", fontWeight:"bold" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.google.com/intl/pt-BR/gmail/about/#inbox">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white", fontWeight:"bold", textDecoration:"none" }} align="center">samueldevfull@gmail.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;