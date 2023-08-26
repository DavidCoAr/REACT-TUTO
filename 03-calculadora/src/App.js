import './App.css';

//Forma alternativa de traer una imagen SIN REQUIRE
import logoSquareEnix from "./imagenes/logo-squareenix.png"
//Importar componente Boton

import Boton from "./componentes/Boton"
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

//Importamos useState para trabajar con estados
import { useState } from 'react';

//Importamos  EVALUATE() para calcular lo que pone la pantalla calculadora()
import { evaluate} from "mathjs"; //Descargar librería mathjs



function App() {
  //Creamos el estado input que se actualiza con la F(X) setInput
  const [input, setInput] = useState("");

  //Agregar el valor(+,-,...1,2,...) del cada botón NO CLEAR al input
  const agregarInput = valor => {
    setInput(input + valor); //Concatenar Strings (NO SUMARLOS)
  };

  //Calcular el resultado  CON EVALUATE al darle al botón =
  const calcularResultado = () => {
    if (input) { //input es TRUE si NO ES UN STRING VACÍO (si le das a = con string vacío en pantalla => undefined)
      setInput(evaluate(input)); //Evaluate convierte los string a numeros para operaciones matemáticas
    } else {
      alert ("Por favor, inserte aunque sea 1 copia distribuida de FF16");
    }
    
  };

  return (
    <div className="App">
      <div className="squareenix-logo-contenedor">
          <img
          className="logo-squareenix"
          // Ponemos directamente el nombre de importación de la imagen
          src={logoSquareEnix}
          alt="logo de SquareEnix"
          />
        </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          {/* Componente con etiqueta apertura/cierre para pasar PROPS.CHILDREN (children sería 1: lo que hay entre etiquetas) */}
          <Boton propManejarClick={agregarInput}>1</Boton> 
          <Boton propManejarClick={agregarInput}>2</Boton> 
          <Boton propManejarClick={agregarInput}>3</Boton> 
          <Boton propManejarClick={agregarInput}>+</Boton> 
        </div>
        <div className="fila">
          <Boton propManejarClick={agregarInput}>4</Boton> 
          <Boton propManejarClick={agregarInput}>5</Boton> 
          <Boton propManejarClick={agregarInput}>6</Boton> 
          <Boton propManejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton propManejarClick={agregarInput}>7</Boton> 
          <Boton propManejarClick={agregarInput}>8</Boton> 
          <Boton propManejarClick={agregarInput}>9</Boton> 
          <Boton propManejarClick={agregarInput}>x</Boton>
        </div>
        <div className="fila">
          {/* El = evalua la concatenación de strings, pasándolos a numeros  */}
          <Boton propManejarClick={calcularResultado}>=</Boton> 
          <Boton propManejarClick={agregarInput}>0</Boton> 
          <Boton propManejarClick={agregarInput}>.</Boton> 
          <Boton propManejarClick={agregarInput}>/</Boton>
        </div>
          
        <div className="fila">
          {/* Le pasamos la F(X) flecha directamente en vez de declararla 1º como agregarInput o calcularResultado */}
          <BotonClear propManejarClear={() => setInput("")} >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
