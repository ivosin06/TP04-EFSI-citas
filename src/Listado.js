import Cita from './Cita.js';
import './App.css';

function Listado(props) {
    return (props.citas.map(cita => <Cita cita={cita} citas={props.citas} setCitas={props.setCitas}></Cita>));
}

export default Listado;