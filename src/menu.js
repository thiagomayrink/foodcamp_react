import Topo from "./topo"
import Pedidos from "./pedidos"
import Fundo from "./fundo"

export default function Menu(props) {
    return (
        <div className="Menu">
            <Topo titulo="Foodcamp" subtitulo="Sua comida em 6 minutos"/>
            <Pedidos />
            <Fundo />
        </div>
    );
}