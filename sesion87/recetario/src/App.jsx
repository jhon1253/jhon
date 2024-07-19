import { useState } from 'react'
import RecipeCreator from './components/RecipeCreator'
import './App.css'

const recipes = [
  {
    title: "Arroz pollo",
    descripcion: "Tomar 500ml agua y  10 gr de sal",
    ingredientes: [
      { name: "chiken", quanty: 300, unit: "gr" },
      { name: "salt", quanty: 50, unit: "gr" },
    ],
  },
]
const loading = true;
const ading = false;

function App() {
  

  return (
    <>
      {" "}
      <header></header>
      <main className="main-container">
        <div className='container'>
          <h1>Mi Recetario</h1>
          <section className="flex-1">
            <h2>Creador de recetas</h2>
            <RecipeCreator />
          </section>
        </div>

        <section className="flex-1">
          <h2>Listado de recetas</h2>
          {recipes.length <= 0 && "No hay recetas"}

          {recipes.map}
        </section>
      </main>
      <footer></footer>
    </>
  );
}





export default App
