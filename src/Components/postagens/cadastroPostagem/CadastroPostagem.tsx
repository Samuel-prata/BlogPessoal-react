import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, busca, buscaId, postar } from '../../../services/Services';
import './CadastroPostagem.css'
import Postagem from '../../../models/Postagens';
import Tema from '../../../models/Temas';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

export default function CadastroPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
       )
    const [temas, setTemas] = useState<Tema[]>([])

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
            navigate('/postagens')
        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        }
    )

    const [post, setPost] = useState<Postagem>(
        {
            id: 0,
            titulo: '',
            texto: '',
            data: '',
            tema: null
        }
    )
    useEffect(() => {
        setPost({
            ...post,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        if (id != undefined) {
            findByIdPost(id);
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }
    async function findByIdPost(id: string) {
        await buscaId(`/postagens/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPost(e: ChangeEvent<HTMLInputElement>) {

        setPost({
            ...post,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()//
        console.log("Postagem" + JSON.stringify(post))

        if (id != undefined) {
            console.log(post)
            atualizar(`/postagens`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
                position: "top-center",
                autoClose: 2000,// 2000 milisegundos = 2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        } else {
            postar(`/postagens`, post, setPost, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
                position: "top-center",
                autoClose: 2000,// 2000 milisegundos = 2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        }
        back()
    }

    function back() {
        navigate('/postagens')
    }

    return (

        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>Formulário cadastro de postagens</Typography>
                <TextField value={post.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)} id="titulo"
                    label="Titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={post.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPost(e)} id="texto"
                    label="Texto" variant="outlined" name="texto" margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type='submit' variant='contained' color='primary' >Finalizar</Button>
                </FormControl>
            </form>
        </Container>
    );
}