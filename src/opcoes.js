import Contador from "./contador"

export default function Opcoes(props) {
    const {titulo, cardapio} = props;
    //const {nome, descricao, preco, img, imgAlt} = cardapio;
    return(
        <div className="Opcoes">
            <span>{titulo}</span>
            <ul className="itens">
                {cardapio.map((i)=>(
                    <li>
                        <div class="container_item" onClick="">
                            <img src={i.img} alt={i.imgAlt}/>
                            <p>{i.nome}</p>
                            <p>{i.descricao}</p>
                            <p>R$ {i.preco}<Contador /></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}