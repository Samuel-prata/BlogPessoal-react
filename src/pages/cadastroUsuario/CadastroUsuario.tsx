import React, { ChangeEvent, useEffect, useState } from 'react';
import {Grid, Avatar, Button, CssBaseline,Typography, makeStyles, Checkbox, FormControlLabel, TextField, Paper } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import User from '../../models/User';
import { cadastroUsuario, login } from '../../services/Services';


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

export default function CadastroUsuario() {
    const classes = useStyles();

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        email: '',
        password: '',
        photo: ''

    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }

    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();//para não atualizar a tela
        if (confirmarSenha === user.password) {
            try {
                await cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
                alert("Usuario cadastrado com sucesso!")
            } catch (error) {
                alert('Dados incorretos, tente novamente')
            }

        } else {
            alert("As senhas precisam ser idênticas")
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
                        Cadastre-se
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <TextField
                            value={user.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome"
                            name="name"
                            autoComplete="nome"
                            autoFocus
                        />
                        <TextField
                            value={user.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={user.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmarSenha"
                            label="Confirmar senha"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                        />

                        <Box display='flex' justifyContent='space-around'>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Cadastrar
                            </Button>

                            <Link to="/login">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>

                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid >
    );
}
