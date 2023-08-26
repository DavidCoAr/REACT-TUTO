import React from "react";
import "../hojas-de-estilo/Pantalla.css"
//VARIANTES CON PROPS Y SIN FUNCIÓN FLECHA
/*
const Pantalla = (props) => (
    <div className="input">
        {props.input}
    </div>
);

function Pantalla(props) {
    return (
        <div className="input">
            {props.input}
        </div>
    );
}
*/

//SINTAXIS DE DESESTRUCUTRACIÓN
//Definir componente pero con f(x) flecha en vez de como siempre

const Pantalla = ({input}) => (
    <div className="input">
        {input}
    </div>
);


export default Pantalla;