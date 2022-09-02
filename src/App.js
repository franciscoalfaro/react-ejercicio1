import logo from './logo.svg';
import './App.css';

import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {
  let ficha_medica={
    altura:"1.68cm",
    grupo:"Rh+",
    estado:"Sano",
    alergias:"Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holiiii
          </p>

            {/* Mi primer componente*/}

            <EventosComponentes></EventosComponentes>
            <hr/>

            <TercerComponente 
            nombre="Francisco" 
            apellido ="Alfaro"
            ficha={ficha_medica}></TercerComponente>
            <hr/>

            <MiComponente></MiComponente>
            <hr/>
            
            <SegundoComponente></SegundoComponente>

            

      </header>




    </div>
  );
}

export default App;
