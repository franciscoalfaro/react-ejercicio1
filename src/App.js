import logo from './logo.svg';
import './App.css';

import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holiiii
          </p>

            {/* Mi primer componente*/}
           
            <MiComponente></MiComponente>
            
            <SegundoComponente></SegundoComponente>

      </header>




    </div>
  );
}

export default App;
