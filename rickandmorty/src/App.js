import React from 'react'
import Tarjeta from './components/Tarjeta'


import listaTarjetas from './rickandmorty.json';

function App() {
  return (
    <React.Fragment> 
      <h1> Personajes de Rick and Morty </h1>   
      <ul>
        {listaTarjetas.map(function (tarjeta, idx) {
          return (
            <div key={idx}>
              <Tarjeta tarjetaData={tarjeta}/>
            </div>
          )
        })

      }
      </ul>
    </React.Fragment>
 
  );
}

export default App;
