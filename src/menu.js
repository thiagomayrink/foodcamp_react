import Topo from "./topo"
import Pedidos from "./pedidos"
import Fundo from "./fundo"
import React from "react"

export default function Menu(props) {
    const [PedidosUsuario, setPedidosUsuario] = React.useState([]);
    const [verificador, setVerificador] = React.useState(false);
    function verificaPedido() {
        if (
            (PedidosUsuario.some((e) => e.tipo === "Prato")) && 
            (PedidosUsuario.some((e) => e.tipo === "Bebida")) && 
            (PedidosUsuario.some((e) => e.tipo === "Sobremesa"))
            ) {
            setVerificador(true)
        } else {
            setVerificador(false)
        }
    }
    function preparaPedido() {
        let valorTotal=0;
        PedidosUsuario.forEach((e) => valorTotal+=(e.preco*e.qtd))
        let mensagem = `Ola, gostaria de fazer o pedido:\n`;
        PedidosUsuario.forEach((item) => {
          const totalItem = item.qtd > 1 ? ` (${item.qtd}x)` : "";
          mensagem += ` - ${item.tipo}(s): ${item.nome}${totalItem}\n`;
        });
        mensagem += `Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
        const msgFinal = encodeURIComponent(mensagem);
        const UrlMsg = "https://wa.me/5500000000000?text=" + msgFinal;
        window.open(UrlMsg);
      }
    
    return (
        <div className="Menu">
            <Topo titulo="Foodcamp" subtitulo="Sua comida em 6 minutos"/>
            <Pedidos verificaPedido={verificaPedido} PedidosUsuario={PedidosUsuario} setPedidosUsuario={setPedidosUsuario} />
            <Fundo verificador={verificador} PedidosUsuario={PedidosUsuario} preparaPedido={preparaPedido} />
        </div>
    );
}