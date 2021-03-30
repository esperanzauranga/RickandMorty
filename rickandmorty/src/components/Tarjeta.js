import React from 'react'

function Tarjeta(props) {
    return (
        <React.Fragment>
            <div className="lista">
                {/* img */}
                <h2> Nombre: {props.tarjetaData.name} </h2>
                <p> Estatus: {props.tarjetaData.status} </p>
                <p> Especie: {props.tarjetaData.species} </p>
                {/* <p> Origen: {props.tarjetaData.origin} </p> */}
            </div>
        </React.Fragment>
    );
}

export default Tarjeta;

// falta poner la imagen y el origen pero no me deja pq tiene url y no se como se hace