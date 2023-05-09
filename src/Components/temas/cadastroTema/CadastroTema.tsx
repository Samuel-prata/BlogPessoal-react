import { Container, Typography, TextField } from '@material-ui/core';
import { Button, Grid } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Temas';
import { atualizar, buscaId, postar } from '../../../services/Services';
import './CadastroTema.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


export default function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == '') {
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
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    // FUNÇÃO ASSINCRONA PARA CADASTRAR OU ATUALIZAR
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()//
        console.log("tema" + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            atualizar(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
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
            postar(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
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

    }

    function back() {
        navigate('/temas')
    }

    return (

        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' color='textSecondary' component='h1' align='center'>Formulário cadastro de temas</Typography>
                <TextField value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao"
                    label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Grid container>
                    <Button type='submit' variant='contained' color='primary' >Finalizar</Button>
                    <Link to='/temas'>
                        <Button type='submit' variant='contained' color='error'>
                            Cancelar
                        </Button>
                    </Link>
                </Grid>

            </form>
        </Container>
    );
}