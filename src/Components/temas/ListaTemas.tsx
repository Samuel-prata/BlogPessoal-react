import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Temas from '../../models/Temas';
import { busca } from '../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function ListaTema() {
    const [temas, setTemas] = useState<Temas[]>([])//inicializando um array vazio
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )//ter acesso ao token armazenado
    let navigate = useNavigate();//redirecionamento caso não esteja logado

    useEffect(() => {
        if (token === '') {
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

    async function getTema() {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }//headers para passar o token de autenticação
        })
    }//fazer a requisição no banco de dados 

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioTemas/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTemas/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }

        </>
    );
}
export default ListaTema;