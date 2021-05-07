import React from "react"

export default function Contador({nome, PedidosUsuario, setPedidosUsuario}) {
    //indexPedido (undefined), deveria ser trocado no elemento pai na função selecionaItem, 
    //bug: ao selecionar o contador continua 0, so atualiza no segundo click e pula de 0 pra 2.
    const [IndexPedido, setIndexPedido] = React.useState(undefined);
    const [IsActive, setIsActive] = React.useState(false);
    let array = [...PedidosUsuario]
    function buscaIndice(stIncexPedido,n) {
        let index;
        PedidosUsuario.forEach((e, i) => (e.nome === n) ? index=i : "" )
        stIncexPedido(index)
    }
    function adicionaItem(n) {
        if (IndexPedido !== undefined) {
            array[IndexPedido].qtd+=1;
            setPedidosUsuario(array)
            setIsActive(true);
        }
    }
    function removeItem(n) {
        if (IndexPedido !== undefined) {
            if(array[IndexPedido].qtd>1){
                array[IndexPedido].qtd-=1;
            setPedidosUsuario(array)
            } else if (array[IndexPedido].qtd === 1){
                array.splice(IndexPedido);
                setPedidosUsuario(array)
                setIsActive(false)
            }
        }
    }
    return (
        <span className={(PedidosUsuario.some((e) => e.nome === nome)) ? "Contador" : "Contador oculto"}>
            <span onClick={()=>{buscaIndice(setIndexPedido,nome);adicionaItem(nome)}} className="add">
                +
            </span> {/* Quando um item é removido da lista PedidosUsuario. e outro está selecionado isActive permanece true*/}
            <span>{(IsActive) ? PedidosUsuario[IndexPedido].qtd : "0"}</span> {/*Bug quando removo 1 item e outro item continua selecionado*/}
            <span onClick={()=>removeItem(nome)} className="rmv">
                -
            </span>
        </span> 
    );
}