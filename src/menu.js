import Topo from "./topo"
import Pedidos from "./pedidos"
import Fundo from "./fundo"
import React from "react"

export default function Menu(props) {
    const [PedidosUsuario, setPedidosUsuario] = React.useState([]);
    // const [classe1, setClasse1] = React.useState(false)
    // const [classe2, setClasse2] = React.useState(false)
    // const [classe3, setClasse3] = React.useState(false)
    // const lista1 = ["Hambúrguer de Siri", "Krusty Burguer", "Ramen do Naruto"]
    // const lista2 = ["Cerveja Duff", "Nuka-Cola Gelada", "Cerveja Amanteigada"]
    // const lista3 = ["Bala de Caramelo", "Sapo de Chocolate", "Bala de Tamarindo"]
    // if (){

    // }
    // {(PedidosUsuario.some((e) => e.nome === nome)) ? "container_item ativo" : "container_item"}
    return (
        <div className="Menu">
            <Topo titulo="Foodcamp" subtitulo="Sua comida em 6 minutos"/>
            <Pedidos PedidosUsuario={PedidosUsuario} setPedidosUsuario={setPedidosUsuario} />
            <Fundo>
            {<span> Selecione os 3 itens<br /> para fechar o pedido </span>}
            {<span> Fazer pedido </span>}
            </Fundo>
        </div>
    );
}