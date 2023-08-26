import React, {useState} from "react";
//Importar estilo
import "../hojas-de-estilo/TareaFormulario.css"
//Importamos el generador de IDs uuid
import {v4 as uuidv4} from "uuid";

/*REVISAR TODA ESTA PARTE DE LO INFUMABLE QUE ES REACT CUANDO EMPIEZAS MUÑECA matrioska CON COMPONENTES */ 


function TareaFormulario (props) {
    //Estado para el valor del input, por defecto es un string vacío
    const [valorInput, setValorInput] = useState ("");

    //F(X) para manejar el cambio de texto en el input
    const manejarCambioInput = evento => {
        console.log("Escribiendo en el input...");
        //evento.target.value te permite extraer el texto que se introduce en un input durante un evento
            //setValorInput  actualiza CON EL TEXTO ESTRAIDO el valor del input con
        setValorInput(evento.target.value);
        console.log(evento.target.value);
    }

    //F(X) para manejar envío cuando se haga click sobre el boton (enviar formulario)
    const manejarEnvio = evento => {
        // preventDefault Evita que el navegador realice la acción estándar asociada al evento, lo que en el caso de un evento submit de formulario significa que no se enviarán los datos al servidor y la página no se recargará.
        evento.preventDefault();
        console.log("Enviando formulario")
        
        const tareaNueva = {
            id: uuidv4(), //Cada id tiene que ser único, instalar paquete uuid que genera IDs
            texto: valorInput, //El valor de input es el texto de la tarea que añadimos
            completada: false
        }
        //Mostrar por consola el objeto con las 3 propiedades
        console.log(tareaNueva);
        /*REVISAR TODA ESTA PARTE DE LO INFUMABLE QUE ES REACT CUANDO EMPIEZAS MUÑECA matrioska CON COMPONENTES */ 
        //FALTA PASAR el objeto tareaNueva AL COMPONENTE LISTADETAREAS
        // props.onSubmit(tareaNueva) está llamando a la F(X) onSubmit que se espera que esté definida en el componente padre. Esta F(X) se ejecutará y recibirá tareaNueva como argumento, lo que le permite al componente padre manejar la acción de agregar la nueva tarea a su estado o hacer cualquier otra operación necesaria con esa información. Es una forma de comunicar y coordinar acciones entre componentes hijos y el componente padre en React.
        props.onSubmit(tareaNueva);
    }

    return (
        <form 
            className="tarea-formulario" 
            //EVENT LISTENER onSubmit al enviar el formulario
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Inserte una tarea"
                name="texto"//nombre a un elemento de entrada (input) para que pueda ser identificado y referenciado en el backend cuando se envía el formulario
                //EVENT LISTENER onChange detecta cuando hubo un cambio en el input
                onChange={manejarCambioInput}
            />
            <button className="tarea-boton">add task</button>
        </form>
    );
}
export default TareaFormulario;