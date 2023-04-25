import Tema from "./Temas";

interface Postagem{
    id: number;
    titulo: String;
    texto: String;
    data: String;
    Tema?: Tema|null 
}
export default Postagem;