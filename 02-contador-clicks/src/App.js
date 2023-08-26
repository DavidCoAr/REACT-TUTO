
import './App.css';
//Forma alternativa de traer una imagen SIN REQUIRE
import logoSquareEnix from "./imagenes/logo-squareenix.png"
//Importación de los componentes Boton y Contador
import Boton from "./componentes/Boton"
import Contador from './componentes/Contador';
import { useState } from 'react';

//Componente principal APP
function App() {
  //Estado llamado numeroClicks
    //F(X) que actualizará numeroClicks (setNumeroClicks)
    //useState retorna el valor de 0
    //numeroClicks empezaría con ese valor
  const [numeroClicks,setNumeroClicks] = useState (0);

  //F(X) de +1 al contador que paremos como valor del prop al boton
  const  funcionMas1 =  () => {
    console.log("Click");
    setNumeroClicks(numeroClicks + 1) //La F(x)
  };
  //F(X) de reiniciar al contador que paremos como valor del prop al boton
  const  reiniciarContador =  () => {
    console.log("Reiniciar");
    setNumeroClicks(0)
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
        <div className="contenedor-contador-botones">
          <Contador numeroClicks={numeroClicks} /*numeroClicks="5"*/ />
          <Boton
            textoBoton="+ 1"
            esBotonDeMas1={true}
            //A la prop funcionManejarClick le asignamos la F(X) de +1 al contador
            funcionManejarClick= {funcionMas1}/>
          <Boton
            textoBoton="Reiniciar"
            esBotonDeMas1={false}
            //A la prop funcionManejarClick le asignamos la F(X) de reiniciar contador
            funcionManejarClick= {reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
