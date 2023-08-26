import React from "react";
import "../hojas-de-estilo.css/Contador.css"

//FORMA CON PROPS para pasar las propiedades a la F(X)
/*
function Contador (props) {
    return (
        <div className="contador">
            {props.numeroClicks}
        </div>
    );
}
*/

//FORMA CON SINTAXIS DE DESESTRUCTURACIÓN para pasar las propiedades  a la F(X)
function Contador ({numeroClicks}) {
    return (
        <div className="contador">
            {numeroClicks}
        </div>
    );
}


export default Contador;