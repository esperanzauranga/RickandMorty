import React from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta'


import listaTarjetas from './rickandmorty.json';

function App() {
  return (
    <React.Fragment> 
      <header className = 'header'>
        <h1> Personajes de Rick and Morty </h1> 
      </header>
        
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

      <footer>
        Desarrolladores: Esperanza Uranga, Francesca Porro Toyos, Segundo Ustariz
      </footer>
    </React.Fragment>
 
  );
}

export default App;
