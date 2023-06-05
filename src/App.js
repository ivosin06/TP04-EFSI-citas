import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormCita from './Form.js';
import Listado from './Listado.js';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <div className="App">
          <div className='one-half column'>
            <h2>Crear cita</h2>
            <FormCita citas={citas} setCitas={setCitas}></FormCita>
          </div>
          <div className='one-half column'>
            <h2>Administra citas</h2>
            <Listado citas={citas} setCitas={setCitas}></Listado>
          </div>
      
      </header>
    </div>
  );
}

export default App;
