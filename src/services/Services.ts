import axios from "axios";


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
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header); //passando os parametros| Header = token
    setDado(resposta.data); // todas as respostas da api
}
export const buscaId = async (url: any, setDado: any, headers: any) => {
    const resposta = await api.get(url, headers);
    setDado(resposta.data)

}
export const postar = async (url: any, dados: any, setDado: any, headers: any) => {
    const resposta = await api.post(url, dados, headers);
    setDado(resposta.data)

}
export const atualizar = async (url: any, dados: any, setDado: any, headers: any) => {
    const resposta = await api.put(url, dados, headers);
    setDado(resposta.data)

}
export const deletar = async (url: any, headers: any) => {
    await api.delete(url, headers);
}