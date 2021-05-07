import React from "react"

export default function Contador({ nome, PedidosUsuario, setPedidosUsuario}) {
    //indexPedido (undefined), deveria ser trocado no elemento pai na função selecionaItem, 
    //bug: ao selecionar o contador continua 0, so atualiza no segundo click.
    const [IndexPedido, setIndexPedido] = React.useState(undefined)
    const [contador, setContador] = React.useState(1)
    const array = [...PedidosUsuario]
    function buscaIndice(stIncexPedido,n) {
        let index;
        PedidosUsuario.forEach((e, i) => (e.nome === n) ? index=i : "" )
        stIncexPedido(index)
    }
    function adicionaItem() {
        if (IndexPedido !== undefined && array[IndexPedido]) {
            array[IndexPedido].qtd+=1;
            setPedidosUsuario(array)
            setContador(contador+1)
        }
    }
    function removeItem() {
        if (IndexPedido !== undefined && array[IndexPedido]) {
            if(array[IndexPedido].qtd>1){
                array[IndexPedido].qtd-=1;
            setPedidosUsuario(array)
            } else if (array[IndexPedido].qtd === 1){
                array.splice(IndexPedido);
                setPedidosUsuario(array)
                if (contador >0) {
                    setContador(contador-1)
                }
            }
        }
    }
    console.log(PedidosUsuario)
    return (
        <span className={(PedidosUsuario.some((e) => e.nome === nome)) ? "Contador" : "Contador oculto"}>
            <span onClick={()=>{buscaIndice(setIndexPedido,nome);adicionaItem()}} className="add">
                +
            </span>
            <span>{contador}</span> 
            <span onClick={()=>removeItem()} className="rmv">
                -
            </span>
        </span> 
    );
}
//PedidosUsuario[IndexPedido] ? PedidosUsuario[IndexPedido].qtd : "0"