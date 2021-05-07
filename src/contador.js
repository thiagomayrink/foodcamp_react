import React from "react"

export default function Contador({nome, PedidosUsuario, setPedidosUsuario, verificaPedido}) {
    const [contador, setContador] = React.useState(1)
    function adicionaItem() {
        const indice = PedidosUsuario.findIndex(p => p.nome === nome);
        PedidosUsuario[indice].qtd = contador + 1;
        setPedidosUsuario([...PedidosUsuario]);
        setContador(contador+1);
        verificaPedido();
    }
    function removeItem() {
        const indice = PedidosUsuario.findIndex(p => p.nome === nome);
        if(PedidosUsuario[indice].qtd === 1){
            const array = [...PedidosUsuario];
            array.splice(indice);
            setPedidosUsuario(array);
            verificaPedido();
        }else {
            PedidosUsuario[indice].qtd = contador - 1;
            setContador(contador-1);
            verificaPedido();
        }
    }
    console.log(PedidosUsuario)
    return (
        <span className={(PedidosUsuario.some((e) => e.nome === nome)) ? "Contador" : "Contador oculto"}>
            <span onClick={()=>{adicionaItem()}} className="add">
                +
            </span>
            <span>{contador}</span> 
            <span onClick={()=>removeItem()} className="rmv">
                -
            </span>
        </span> 
    );
}