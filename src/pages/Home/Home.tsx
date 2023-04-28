import React, { useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core"
import Box from '@mui/material/Box/Box';
import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import TabPostagem from '../../Components/tabPostagem/TabPostagem';
import ModalPostagem from "../../Components/postagens/modalPostageem/ModalPostagem";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { addToken } from "../../store/tokens/Actions";
import { toast } from "react-toastify";




function Home() {
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            toast.info('Você precisa estar logado', {
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
    }, [token])

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
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens'><Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#eea832", color: "white", fontWeight: "bold" }}>Ver postagens</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src\assets\img\Blog post-bro.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12}>
                    <TabPostagem />
                </Grid>

            </Grid>

        </>
    );
}

export default Home;