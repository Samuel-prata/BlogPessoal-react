import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import {Grid, Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox,Paper, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import Box from '@mui/material/Box/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import UserLogin from '../../models/UserLogin';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">

            Desenvolvido por: Samuel Silverio,
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://img.wallpapic-br.com/i7287-445-229/medium/carros-super-carro-lamborghini-laranja-imagem-de-fundo.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');


    const classes = useStyles();

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        email: '',
        password: '',
        photo: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{

        if(token != ''){
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login ('/usuarios/logar', userLogin, setToken) //rota do backend usando userLogin
            
            alert('Usuario Logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário incorretos. Erro ao logar')
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Entrar
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={userLogin.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={userLogin.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Me lembre"
                        />
                        <Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}

                            >
                                Entre
                            </Button>

                        </Box>
                        <Grid container>
                            <Grid item xs>
                                Esqueceu a senha?
                            </Grid>
                            <Grid item>
                                <Link to="/cadastrousuario">
                                    {"Não tem uma conta? Cadastre-se"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>

                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

