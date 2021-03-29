import React from 'react'

function App() {
  return (
      {listaTarjetas.map(function (tarjeta, idx) {
          <div key={idx}>
            </ Tarjeta tarjetaData={tarjeta}>
          </div>
      })

      }
  );
}

export default App;
