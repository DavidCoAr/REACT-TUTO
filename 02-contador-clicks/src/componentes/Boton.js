import React from "react";
//Importo el estilo para los botones
import "../hojas-de-estilo.css/Boton.css"

//Forma 1 mediante PROPS de pasar el texto del botón
/*
function Boton (props) {
    return (
        <button>
            {props.textoBoton}
        </button>
    );
}
*/

//Forma 2 mediante SINTAXIS DE DESESTRUCTURACIÓN de pasar el texto del botón
    //Se trabaja más con esta forma
    //Recibe 3 propiedades:
        //textoBoton pues cambia según si es para hacer click para el +1 o reiniciar
        //esBotonDeMas1 pues cambia el estilo por lo de antes
        //funcionManejarClick para manejar qué ocurre al clickear sobre el boton
function Boton ({textoBoton, esBotonDeMas1, funcionManejarClick}) {
    return (
        /*FORMA DINÁMICA DE ELEGIR CLASE SEGÚN TIPO DE BOTÓN*/
            //Si la Propiedad esBotonDeMas1 es TRUE => aplica clase boton-de-mas-1
            //Si es False se aplica boton-reiniciar
        <button 
            className={esBotonDeMas1 ? "boton-de-mas-1" : "boton-reiniciar"}
            // Event Listener al hacer click: llama a la F(X ) funcionManejarClick
            onClick={funcionManejarClick}>
            {textoBoton}
        </button>
    );
}

export default Boton;