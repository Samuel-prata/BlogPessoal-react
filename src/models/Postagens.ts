import Tema from "./Temas";
import User from "./User";

interface Postagem{
    id: number;
    titulo: String;
    texto: String;
    data: String;
    tema: Tema;
    usuario: User
}
export default Postagem;