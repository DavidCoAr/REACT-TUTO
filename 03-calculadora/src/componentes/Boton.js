import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton (props) {
    //Discernir si es operador o no para asignarle una clase operador para el estilo
    const esOperador = valorBoton => {
        //Si se cumple que NO es un numero, ni ., ni =
            //Es UN OPERADOR, retornaría un TRUE la F(x)
            //Si es True le pasamos la clase operador al div acompañando a boton-contenedor
            //Si es False pasa un "" (ninguna clase) al div
        return isNaN(valorBoton) && (valorBoton !== ".") && (valorBoton !== "=");
    }; //; por ser F(x) flecha

    //FORMA SIN TERNARIO
    /*
    if (esOperador(props.children) ){//Si es TRUE que sea operador
        return (
            <div 
                className="boton-contenedor operador"
                //Event listener al hacer click: Declaramos una F(X) que se ejecuta con el click, NO la llamamos pues se activaría con props.children como argumento en el momento en que se renderiza el componente
                onClick={() => props.propManejarClick(props.children)}>
                {props.children}
            </div>
        );
    } else { //Si es FALSE que sea operador
        return (
            <div 
                className="boton-contenedor"
                onClick={() => props.propManejarClick(props.children)}>
                {props.children}
            </div>
        );
    }
    */

    //FORMA CON TERNARIO PARA ELEGIR CLASE OPERADOR
    return (//.trimEnd() elimina espacios en blanco de una plantilla literal
        <div 
            className={`boton-contenedor  ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
            //Event listener al hacer click: Declaramos una F(X) que se ejecuta con el click, NO la llamamos pues se activaría con props.children como argumento en el momento en que se renderiza el componente
            onClick={() => props.propManejarClick(props.children)}>
        
            {/* Para pasar LO QUE SEA del componente padre al hijo 
                si es 1, pasaría 1
                si es +, pasaría +*/}
            {props.children}
        </div>
    );
}

export default Boton;