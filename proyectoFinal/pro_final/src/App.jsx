import { useState } from 'react'
import './App.css'
import obtenerProductos from './script.jsx';

async function main() {
    try {
        const productos = await obtenerProductos();
        console.log("Productos obtenidos:", productos);
        // Aquí puedes hacer lo que necesites con los productos obtenidos
    } catch (error) {
        console.error("Error en la aplicación:", error);
    }
}

main();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
