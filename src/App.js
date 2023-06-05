import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormCita from './Form.js';
import Listado from './Listado.js';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        
        <div style={{display:"flex", flexDirection: "row"}}>
          <div style={{width: "50%"}}>
            <h2>Crear cita</h2>
            <FormCita citas={citas} setCitas={setCitas}></FormCita>
          </div>
          <div style={{width: "50%"}}>
            <h2>Administra citas</h2>
            <Listado citas={citas} setCitas={setCitas}></Listado>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
