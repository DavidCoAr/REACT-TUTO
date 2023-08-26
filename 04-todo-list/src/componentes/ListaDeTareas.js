import React from "react";
import { useState } from "react";

//Importar componente del input
import TareaFormulario from "./TareaFormulario"
//Importar Componente tarea
import Tarea from "./Tarea"
//Importar estilo
import "../hojas-de-estilo/ListaDeTareas.css"


function ListaDeTareas () {
    //Un componente solo permite retonar un DIV
        //Usar fragmento (<> </>) en lugar del DIV
    
    //Creamos un estado para el array de tareas que actualizamos con la F(X) setTareas
        //Pasamos un array vacío ([]) como el valor inicial de tareas
    const [arrayTareas, setArrayTareas] = useState([]);

    //F(X) para agretar tarea al array de tareas
    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim() //quita espacio innecesaros con trim()
            //agregar tarea al principio del arrayTareas
            // operador spread ... las convierte en tareas individuales
                // operador de propagación se utiliza para descomponer (expandir) los elementos de un array (en este caso, arrayTareas) en elementos individuales. Cada elemento del array original se coloca individualmente en el nuevo array.
            const tareasActualizadas = [tarea, ...arrayTareas] //genera un array con las tareas anteriores y la nueva
            //Actualizamos el arrayTareas con el nuevo estado tareasActualizadas
            setArrayTareas(tareasActualizadas);
        }
    }

    //F(X) para eliminar tarea por su id
    const eliminarTarea = id => {
        // Generar una copia de arrayTareas que solo incluye los que son distintos al id  de la tarea eliminado
        const tareasActualizadas = arrayTareas.filter(tarea => tarea.id !== id);
        setArrayTareas(tareasActualizadas);
    }
    

    //F(X) para completar tarea

    const completarTarea = id => {
        const tareasActualizadas = arrayTareas.map(tarea => {
            //Si el id de la tarea es igual que el estamos buscando invierte su estado (completada es false por defecto)
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea
        });
        //Actualizamos el array de tareas con setArrayTareas
        setArrayTareas(tareasActualizadas)
    }

    return (
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tareas-lista-contenedor">
            AQUÍ VA EL ARRAY DE TAREAS (OBJETOS)
            {//map() recorre el arrayTareas, y por cada elemento del array se ejecuta la F(x) flecha
                arrayTareas.map((tarea) => //tarea es un objeto
                    <Tarea //props que le pasamos al componente <Tarea/>
                        //KEY OBLIGATORIA PARA NO DAR ERROR EL MAP: Cuando utilizas un método como map() para generar una serie de componentes dentro de un bucle (como en tu código), es importante proporcionar una prop key única para cada elemento dentro de la iteración.
                        key= {tarea.id} //key no se pasa como prop, y debe ser única
                        id= {tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        //Prop con la F(X) eliminarTarea
                        funcionEliminarTarea={eliminarTarea}
                        //Prop con la F(X) completarTarea
                        funcionCompletarTarea={completarTarea}
                    />
                )
            }
        </div>
        </>
    )

    
    
}

export default ListaDeTareas;