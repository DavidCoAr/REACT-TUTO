import React from "react";
//Importar css tarea-contenedor
import "../hojas-de-estilo/Tarea.css"
//Importar react-icon de eliminar como componente React de de https://react-icons.github.io/react-icons
import { AiFillFormatPainter } from "react-icons/ai";


//Sintaxis de desestructuración para pasar las props
function Tarea ({ id, texto , completada, funcionCompletarTarea,funcionEliminarTarea} ) {
    return (
     
       //Usamos ternario para asignar clase completada cuando es completada la tarea
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor" }>
             <div 
                className="tarea-texto"
                //No podemos CREO (al pasarle un argumento id) llamar directamente a funcionCompletarTarea (event listener), sino a traves de una F(X) flecha
                onClick={( ) => funcionCompletarTarea(id)}
                >
                 {texto}
                 
             </div>
             <div 
                className="tarea-contenedor-icono-eliminar"
                // //No podemos CREO (al pasarle un argumento id) llamar directamente a funcionCompletarTarea (event listener), sino a traves de una F(X) flecha
                onClick={( ) => funcionEliminarTarea(id)}>
                 {/*Asignamos como prop al componente de React-icon una clase */}
                 <AiFillFormatPainter className="tarea-icono-eliminar"/>
             </div>
        </div>
        //Placeholder Sin agregar la clase completado
        /*
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-icono-eliminar">
                <AiFillFormatPainter className="tarea-icono-eliminar"/>//Asignamos como prop al componente de React-icon una clase
            </div>
        </div>
        */
        
    );
}

export default Tarea;