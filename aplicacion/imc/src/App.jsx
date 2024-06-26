import { useState } from 'react'
import googleLogo from '/googleLogo.svg'
import bingLogo from '/bing1.svg'
import './App.css'

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
      <h1>¡HOLA MUNDO!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
