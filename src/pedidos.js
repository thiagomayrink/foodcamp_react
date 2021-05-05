import Opcoes from "./opcoes"

export default function Pedidos(props) {
    const cardapio = [
        {titulo:"Primeiro, seu prato", 
        lista: [
            {nome: "Prato1", descricao: "Descricao Prato1", preco: 10.99, img: "#", imgAlt:"alt"},
            {nome: "Prato2", descricao: "Descricao Prato1", preco: 10.99, img: "#", imgAlt:"alt"}
            ]
        },
        {titulo:"Agora, sua bebida", 
        lista: [
            {nome: "Bebida1", descricao: "Descricao Bebida1", preco: 10.99, img: "#", imgAlt:"alt"},
            {nome: "Bebida2", descricao: "Descricao Bebida1", preco: 10.99, img: "#", imgAlt:"alt"}
            ]
        },
        {titulo:"Por fim, sua sobremesa", 
        lista: [
            {nome: "Sobremesa1", descricao: "Descricao Sobremesa1", preco: 10.99, img: "#", imgAlt:"alt"},
            {nome: "Sobremesa2", descricao: "Descricao Sobremesa1", preco: 10.99, img: "#", imgAlt:"alt"}
            ]
        }
    ]
    return (
        <div className="Pedidos">
            <>
                {cardapio.map((c) => (
                    <Opcoes titulo={c.titulo} cardapio={c.lista}/>
                ))}
            </>
        </div>
    );
}