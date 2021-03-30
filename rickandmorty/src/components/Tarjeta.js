import React from 'react'

function Tarjeta(props) {
    return (
        <React.Fragment>
            <h2> Nombre: {props.tarjetaData.name} </h2>
            <p> Estatus de personaje: {props.tarjetaData.status} </p>
            <p> Especie del personaje: {props.tarjetaData.species} </p>
            {/* <p> Origen del personaje: {props.tarjetaData.origin} </p> */}

        </React.Fragment>
    );
}

export default Tarjeta;