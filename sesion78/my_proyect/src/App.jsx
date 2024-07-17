import { useState } from "react";
import "./App.css";
import Profile from "./components/profile";
import Product from "./components/Product.jsx";

const studentsArray = [];

export default function App() {
  const [persona, setPersona] = useState({});
  const [students, setStudents] = useState(studentsArray);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersona({ ...persona, [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setStudents([...students, { ...persona }]);
  };

  return (
    <>
      <h1>MANEJO DE EVENTOS</h1>
      {/* <Hola name{persona.name}/> */}
      <Product />
      <form action="">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          type="text"
          name="telephone"
          placeholder="Telefono"
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="Edad"
        />
        <input
          onChange={handleChange}
          type="text"
          name="img"
          placeholder="Imagen"
        />
        <input
          onChange={handleChange}
          type="text"
          name="direccion"
          placeholder="Direccion"
        />
        <div>
          <button onClick={handleClick}>Agregar</button>
        </div>
      </form>
      <listPeople>
        {students.map((student, index) => (
          <Profile
            key={index}
            name={student.name}
            img={student.img}
            telephone={student.telephone}
            age={student.age}
            address={student.address}
          />
        ))}
      </listPeople>
    </>
  );
}
