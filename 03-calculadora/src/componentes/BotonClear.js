import React from "react";
import "../hojas-de-estilo/BotonClear.css"
//Si siempre lleva clear el componente, PASO DE PROPS y pongo Clear directamente
/*
const BotonClear = () => (
    <div className="boton-clear">
        Clear
    </div>
);
*/

const BotonClear = (props) => (
    //Podríamos haber puesto etiqueta semántica button en vez de un div
    <div 
        className="boton-clear"
        onClick={props.propManejarClear}>
        {props.children}
    </div>
);


export default BotonClear;