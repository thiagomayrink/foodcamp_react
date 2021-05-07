import Opcoes from "./opcoes"
import React from "react"
import siri from "./imgs/hamburguer-siri.jpg"
import krusty from "./imgs/krusty_burguer.jpg"
import lamen from "./imgs/lamen-naruto.jpg"
import duff from "./imgs/duff-beer.jpg"
import Nuka from "./imgs/nuka-cola.jpg"
import butter from "./imgs/Butterbeer.jpg"
import caramelo from "./imgs/bala-caramelo.png"
import sapo from "./imgs/Sapo_de_Chocolate.gif"
import tamarindo from "./imgs/bala-tamarindo.png"

export default function Pedidos({PedidosUsuario, setPedidosUsuario, verificaPedido}) {
    const cardapio = [
        {titulo:"Primeiro, seu prato", 
        itens: [
            {tipo: "Prato", nome: "Hambúrguer de Siri", descricao: "Diretamente da fenda do bikini", preco: 11.42, img: siri, imgAlt:"Hambúrguer de Siri"},
            {tipo: "Prato", nome: "Krusty Burguer", descricao: "Diretamente de Springfield", preco: 13.41, img: krusty, imgAlt:"Krusty Burguer"},
            {tipo: "Prato", nome: "Ramen do Naruto", descricao: "Receita da aldeia da folha!", preco: 15.43, img: lamen, imgAlt:"Ramen do Naruto"}
            ]
        },
        {titulo:"Agora, sua bebida", 
        itens: [
            {tipo: "Bebida", nome: "Cerveja Duff", descricao: "Sim, ela existe! Mais uma maravilha de Springfield", preco: 10.15, img: duff, imgAlt:"Cerveja Duff"},
            {tipo: "Bebida", nome: "Nuka-Cola Gelada", descricao: "Pré venda - Lançamento no ano de 2042", preco: 11.99, img: Nuka, imgAlt:"Nuka-Cola Gelada"},
            {tipo: "Bebida", nome: "Cerveja Amanteigada", descricao: "Contém mais bruxaria do que o javascript", preco: 13.97, img: butter, imgAlt:"Cerveja Amanteigada"}
            ]
        },
        {titulo:"Por fim, sua sobremesa", 
        itens: [
            {tipo: "Sobremesa", nome: "Bala de Caramelo", descricao: "Aquela bala que tira a obturação", preco: 1.63, img: caramelo, imgAlt:"Bala de Caramelo"},
            {tipo: "Sobremesa", nome: "Sapo de Chocolate", descricao: "Cuidado que ele pula!", preco: 5.75, img: sapo, imgAlt:"Sapo de Chocolate"},
            {tipo: "Sobremesa", nome: "Bala de Tamarindo", descricao: "Aquela bala que quebra os dentes", preco: 1.89, img: tamarindo, imgAlt:"Bala de Tamarindo"}
            ]
        }
    ]
    
    return (
        <div className="Pedidos">
            <>
                {cardapio.map(({titulo, itens}, i) => (
                    <Opcoes 
                    key={i} titulo={titulo}
                    cardapio={itens} 
                    setPedidosUsuario={setPedidosUsuario} 
                    PedidosUsuario={PedidosUsuario}
                    verificaPedido={verificaPedido}
                    />
                ))}
            </>
        </div>
    );
}