import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import descargaG from '/mmmppp.png'
import './App.css'
import Profile from './components/profile'

function getRamdomPerson(customArray){
  const ramdonIndex = Math.floor(Math.random() * customArray.length)

return customArray[ramdonIndex]
}

function App() {
  const [count, setCount] = useState(0)
  const [persona, setPersona] = useState({})

  
  const sebastian = {
    name: 'sebastian',
    lastName: 'Quinayas',
    age: '21'
  }

  const students = [
    {
      name: "Sebastian",
      img: "https://es.web.img3.acsta.net/medias/nmedia/18/92/08/82/20179869.jpg",
      telephone: " 3228205557",
      address: " vereda el salvador",
      age: " 21",
    },
    {
      name: "Nicol",
      img: "https://i.pinimg.com/736x/b2/32/82/b23282acb844dcd170f8732f20cd6325.jpg",
      telephone: " 3225465557",
      address: " bello",
      age: " 17",
    },
    {
      name: "Yineth",
      img: "https://img.wattpad.com/70d889593c941be1a6637205d6c6e1215dbf02cf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f30474249306c4b71564244304a773d3d2d313334363734323132392e313736326265613164363837376335363433323338323733323832392e6a7067?s=fit&w=720&h=720",
      telephone: " 3118205557",
      address: " recuerdo",
      age: " 21",
    },
    {
      name: "Maria",
      img: "https://i.imgur.com/1bX5QH6.jpg",
      telephone: " 3228204576",
      address: " red bull",
      age: " 21",
    },
    {
      name: "Andres",
      img: "https://resizer.glanacion.com/resizer/v2/dolph-lundgren-revelo-su-larga-lucha-contra-el-ARPW4GLSYBCNPCHHYKIRTSXZJA.jpg?auth=f8176135cf9adf40ec5586c66a1fd5cddd9678fbfa4aa6295fa8ad1bcf1b80f3&width=880&height=586&quality=70&smart=true",
      telephone: " 3223456676",
      address: " timbio",
      age: " 17",
    },
    {
      name: "Cristian",
      img: "https://img.freepik.com/vector-premium/esqueleto-flaco-lindo-divertido-ilustracion-vector-blanco-negro_646737-3236.jpg",
      telephone: " 3234567765",
      address: " cajibio",
      age: " 23",
    },
  ];

  return (
    <>
       {<div className='studentss'>
      {
        students.map((student) => <Profile name={student.name} img={student.img} telephone={student.telephone} age={student.age} address={student.address} />)
      }
      <h1>Nombre: {sebastian.name}</h1>
      <p>Apellido: {sebastian.lastName}</p>
      <p>Edad: {sebastian.age}</p>


    </div>
    } 
    

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://es.dragon-ball-official.com/">
          <img
            src={descargaG}
            target="_blank"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>

      <h1>Manejo de eventos</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          INCREMENTAR
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          DECREMENTAR
        </button>
        <button onClick={() => setCount(0)}>
          REINICIAR
        </button>
        <p>
          El valor del contador: {count}
          </p>
      </div>

      <button onClick={() => setPersona(getRamdomPerson(students))}>
        CAMBIAR INVITADO
      </button>

      <p>La persona invitada es: {persona.name}</p>
      <Profile name={persona.name} img={persona.img} telephone={persona.telephone} address={persona.address} age={persona.age}/>
    </>
  );
}

export default App
