import './App.css'

function Cita(props) {
    console.log("CITA:", props.cita);

    const eliminar = (IdCita) => {
        let nuevasCitas = [];

        props.citas.forEach(cita => {
            if(cita.id !== IdCita) {
                nuevasCitas.push(cita);
            }
        });

        props.setCitas([...nuevasCitas]);
    }

    return (
    <div className="cita">
        <p>Mascota: <span>{props.cita.mascota}</span></p>
        <p>Dueño: <span>{props.cita.propietario}</span></p>
        <p>Fecha: <span>{props.cita.fecha}</span></p>
        <p>Hora: <span>{props.cita.hora}</span></p>
        <p>Sintomas: <span>{props.cita.sintomas}</span></p><button className="button elimnar u-full-width" onClick={(evento) => {eliminar(props.cita.id)}}>Eliminar ×</button>
        </div>
    )
}

export default Cita;