//Importo el CSS de App
import './App.css';

//Importo el componente Testimonio (necesario que sea exportado) del archivo Testimonio.js
import Testimonio from "./componentes/Testimonio.js";
//Importación si hacemos una exportación nombrada
/*import {Testimonio} from "./componentes/Testimonio.js"
*/

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen los Guerreros de la Luz sobre FF16</h1>
        {/* Testimonio Mago Rojo con sus props */}
        <Testimonio
          nombre="Mago Rojo"
          pais="España"
          imagen="red-mage"
          cargo="De todo un poco"
          empresa="Square Enix"
          testimonio="Aprendí mucho trabajando con gente que viste peor que yo que se dedica a comprar nabos sin razón aparente."
        />
         {/* Testimonio Mago Negro con sus props */}
        <Testimonio
          nombre="Mago Negro"
          pais="Alemania"
          imagen="black-mage"
          cargo="BackEnd"
          empresa="Square Enix"
          testimonio="Solo los que trabajamos en BackEnd podemos sacar los proyectos adelante. Es un hecho y había que decirlo."
        />
         {/* Testimonio Rogue con sus props */}
        <Testimonio
          nombre="Rogue"
          pais="Italia"
          imagen="rogue"
          cargo="FrontEnd"
          empresa="Square Enix"
          testimonio="Yo solo quería hacer plantillas web pero no se sabe cómo acabé aprendiendo React y por tanto mi vida es más triste."
        />
      </div>
    </div>
  );
}

export default App;
