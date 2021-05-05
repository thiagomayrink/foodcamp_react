export default function Fundo(props) {
    const mensagemStatus = (<span> Selecione os 3 itens<br /> para fechar o pedido </span>)
    return (
        <div className="Fundo">
            <button className="">
                {mensagemStatus}
            </button>
        </div>
    );
}