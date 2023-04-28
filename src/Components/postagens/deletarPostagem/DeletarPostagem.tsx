import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscaId, deletar, postar } from "../../../services/Services";
import Postagem from "../../../models/Postagens";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";



export default function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
       )
    const [posts, setPosts] = useState<Postagem>({
        id: 0,
        titulo:'',
        texto:'',
        data:''
    })

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }
    
// FUNÇÃO COM A CONFIRMAÇÃO DA EXCLUSÃO
    function sim() {
        deletar(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        }
        )
        toast.success('Postagem deletado com sucesso', {
            position: "top-center",
            autoClose: 2000,// 2000 milisegundos = 2 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        back()
    }

// FUNCÇÃO NEGANDO A EXCLUSÃO
    function nao() {
       back()
    }

    function back() {
        navigate('/postagens')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem:
                            </Typography>
                            <Typography color="textSecondary">
                                Postagem escolhida
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}