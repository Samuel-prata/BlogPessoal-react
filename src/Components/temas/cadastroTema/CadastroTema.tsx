import { Container, Typography, TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Temas';
import { atualizar, buscaId, postar } from '../../../services/Services';


export default function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id != undefined) {
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
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()//
        console.log("tema" + JSON.stringify(tema))

        if (id != undefined) {
            console.log(tema)
            atualizar(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso')
        } else {
            postar(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso')
        }
        back()
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
                <Button type='submit' variant='contained' color='primary' >Finalizar</Button>
            </form>
        </Container>
    );
}