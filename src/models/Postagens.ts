import Tema from "./Temas";

interface Postagem{
    id: number;
    titulo: String;
    texto: String;
    data: String;
    tema?: Tema|null 
}
export default Postagem;