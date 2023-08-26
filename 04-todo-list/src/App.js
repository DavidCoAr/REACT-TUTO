import './App.css';
//Importamos imagen para logo
import logoSquareEnix from "./imagenes/logo-squareenix.png"
//Importamoc componente Tarea
//import Tarea from "./componentes/Tarea"
//Importamos componente TareaFormulario
//import TareaFormulario from './componentes/TareaFormulario';

//Importamos el componente ListaDeTareas que contiene el input de tareas y la zona donde se apilarán tareas
import ListaDeTareas from "./componentes/ListaDeTareas"


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="squareenix-logo-contenedor">
        <img 
          src={logoSquareEnix} //Con llaves porque trabajamos con código JS
          className="squareenix-logo" 
          alt="Logo de Square Enix"
        />
      </div>
      <div className="tareas-lista-contenedor-principal">
        <h1>Mis tareas</h1>
        {/*  PLACEHOLDER con componente para input y tarea
        <TareaFormulario/>
        <Tarea texto="Texto placeholder muy largo"/>
        */}
        {/* COMPONENTE LISTADETAREAS:contiene el componente input y el de tarea, generando una pila de ellas */}
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
