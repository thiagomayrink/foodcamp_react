export default function Fundo({verificador, preparaPedido}) {
    console.log(verificador)
    return (
        <div className="Fundo">
            <button className={verificador ? "ativo" : ""} onClick={verificador? ()=>preparaPedido(): null} >
                <span className={verificador ? "" : "oculto"}> Fazer pedido </span>
                <span className={verificador ? "oculto" : ""}> Selecione os 3 itens<br /> para fechar o pedido </span>
            </button>
        </div>
    );
}