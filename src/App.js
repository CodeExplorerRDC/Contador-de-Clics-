import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from '../src/imagenes/logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo}
        alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics= {numClics}/>

        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}
// Ya sabes trabajar con tu primer Hook, Event Listeners y Estados
export default App;
