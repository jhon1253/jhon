import { useState } from 'react'
import './App.css'
import NotificationMessage from './Componets/NotificationMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NotificationMessage/>
      <h6>puede existir mas contenido</h6>
    </>
  );
}

export default App
