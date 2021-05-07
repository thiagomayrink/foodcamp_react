import Contador from "./contador"
import React from "react"

export default function Opcoes({titulo, cardapio, key, PedidosUsuario, setPedidosUsuario}) {
    function selecionaItem(n, pr) {
        let indexPedido = undefined;
        PedidosUsuario.forEach((e, i) => (e.nome === n) ? indexPedido = i : indexPedido = undefined)
        if (indexPedido === undefined) {
            const array = [...PedidosUsuario];
            array.push({nome: n, preco: pr, qtd: 1});
            setPedidosUsuario(array)
        }
    }
    return(
        <div key={key} className="Opcoes">
            <span>{titulo}</span>
            <ul className="itens">
                {cardapio.map(({nome, descricao, preco, img, imgAlt},i)=>(
                    <li key={i}>
                        <div className={(PedidosUsuario.some((e) => e.nome === nome)) ? "container_item ativo" : "container_item"} onClick={() => selecionaItem(nome, preco)}>
                            <img src={img} alt={imgAlt}/>
                            <p>{nome}</p>
                            <p>{descricao}</p>
                            <p>R$ {preco}<Contador nome={nome} PedidosUsuario={PedidosUsuario} setPedidosUsuario={setPedidosUsuario}/></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}