//Importar librería React
import React from "react";

import "../hojas-de-estilo/Testimonio.css"

//Creación del componente funcional Testimonio
    //Si hiciéramos una EXPORTACIÓN NOMBRADA, pondríamos "export function Testimonio () {...}"
    //Y eliminamos export default Testimonio;

//F(X) PLACEHOLDER PARA VER COMO QUEDARÍA EL COMPONENTE
// #region
/*
function Testimonio () {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            //Si ponemos ./ buscará carpeta imagenes en la carpeta componentes(en la que está)
            //Si ponemos ../ buscará carpeta imagenes  un nivel por encima (src)
            src={require("../imagenes/testimonio-red-mage.png")}
            alt="Foto de Mago Rojo"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-pais-testimonio">Ocupación: Mago Rojo en España</p>
                <p className="cargo-testimonio">Cargo: De todo un poco</p>
                <p className="texto-testimonio">Aprendí mucho trabajando con gente que viste peor que yo que se dedica a comprar nabos sin razón aparente</p>
            </div>
        </div>
    );
}
*/
// #endregion

//F(x) QUE ADMITE PROPIEDADES (props) PARA PODER REUSAR EL COMPONENTE CON LOS DISTINTOS TESTIMONIOS
    // Tiene que ser distinto lo siguiente:
        // Imagen => {props.imagen}
        // nombre => {props.nombre}
        // país => {props.pais}
        // El cargo => {props.cargo}
        // Empresa => {props.empresa}
        // testimonio => {props.testimonio}
function Testimonio (props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            //Si ponemos ./ buscará carpeta imagenes en la carpeta componentes(en la que está)
            //Si ponemos ../ buscará carpeta imagenes  un nivel por encima (src)
            src={require(`../imagenes/testimonio-${props.imagen}.png`)} //require para traer la imagen
            //Con plantillas literales necesitamos alt= {`...`} para evaluar expresiones de JS ${props.nombre}
            alt={`Foto de ${props.nombre}`}/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-pais-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}

//Exportación del componente Testimonio para poder importarlo
    //Default: se exporta Testimonio por defecto en este archivo
    //Si hacemos     EXPORTACIÓN NOMBRADA, eliminamos el export default Testimonio;
export default Testimonio;