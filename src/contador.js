import React from "react"

export default function Contador() {
    const [contador, setContador] = React.useState(1);
    return (
        <span className="Contador">
            <span onClick={() => setContador(contador + 1)} className="add">
                +
            </span>
            <span>{contador}</span>
            <span onClick={() => {if(contador>0){setContador(contador - 1)}}} className="rmv">
                -
            </span>
        </span>
    );
}