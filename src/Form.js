import './App.css'
import { useState } from 'react';

function FormCita(props) {
    const [idContador, setIdContador] = useState(0);

    const agregar = (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        setIdContador(idContador + 1);

        props.setCitas([
            ...props.citas,
            {
                id: idContador,
                mascota: evento.target.mascota.value,
                propietario: evento.target.propietario.value,
                fecha: evento.target.fecha.value,
                hora: evento.target.hora.value,
                sintomas: evento.target.sintomas.value
            }
        ]);

        return false;
    }

    return (
        <form onSubmit={agregar}>
            <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"></input><br></br>
            <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"></input><br></br>
            <label>Fecha</label><input type="date" name="fecha" className="u-full-width"></input><br></br>
            <label>hora</label><input type="time" name="hora" className="u-full-width"></input><br></br>
            <label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea><br></br>
            <button type="submit"className="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
}

export default FormCita;