import axios from "axios";
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';

export const api = axios.create({
    baseURL: "https://blog-pessoal-0359.onrender.com/"
})

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados); //vai passar para o método post a url e os dados
    setDado(resposta.data.token); // todas as respostas da api
}

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados); //vai passar para o método post a url e os dados
    setDado(resposta.data); // todas as respostas da api
}