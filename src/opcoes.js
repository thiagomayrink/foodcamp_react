import Contador from "./contador"
import React from "react"

export default function Opcoes({titulo, cardapio, PedidosUsuario, setPedidosUsuario, verificaPedido}) {
    function selecionaItem(t, n, p) {
        let indexPedido = undefined;
        PedidosUsuario.forEach((e, i) => (e.nome === n) ? indexPedido = i : indexPedido = undefined)
        if (indexPedido === undefined) {
            const array = [...PedidosUsuario];
            array.push({tipo: t,nome: n, preco: p, qtd: 1});
            setPedidosUsuario(array)
        }
    }
    verificaPedido();
    return(
        <div className="Opcoes">
            <span>{titulo}</span>
            <ul className="itens">
                {cardapio.map(({tipo, nome, descricao, preco, img, imgAlt},i)=>(
                    <li key={i.toString()}>
                        <div className={(PedidosUsuario.some((e) => e.nome === nome)) ? "container_item ativo" : "container_item"} onClick={() => selecionaItem(tipo,nome,preco)}>
                            <img src={img} alt={imgAlt}/>
                            <p>{nome}</p>
                            <p>{descricao}</p>
                            <p>R$ {preco}
                                <Contador
                                    nome={nome} 
                                    PedidosUsuario={PedidosUsuario} 
                                    setPedidosUsuario={setPedidosUsuario}
                                    verificaPedido={verificaPedido}
                                />
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}