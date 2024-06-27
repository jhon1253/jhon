import { useState } from 'react'
import googleLogo from '/googleLogo.svg'
import bingLogo from '/bing1.svg'
import logoopersonal from '/logopersona.svg'
import './App.css'

import datos from './database/datos.json'
console.log(datos)
console.log(datos.empleado)
console.log(datos.empleado.nombre)

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://google.com" target="_blank" onClick={() => setCount((count) => count + 1)} >
          <img src={googleLogo} className="logo" alt="google logo" />
        </a>
        <a href="https://bing.com" target="_blank" onClick={() => setCount((count) => count + 1)}>
          <img src={bingLogo} className="logo react" alt="google logo" />
        </a>
      </div>
      <h1>¡BUSCADOR!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          cantidad de busqueda {count}
        </button>
        <br></br>
        
          <code>Espero encuentres</code> lo que buscas!
          <div>
            <img src={logoopersonal} className='logo personal' alt="logo personal" />
          <p>{datos.empleado.nombre} {datos.empleado.apellido}</p>
        <div/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
