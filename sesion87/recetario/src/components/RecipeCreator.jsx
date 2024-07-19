import React from "react"

const ingredients = [{
    name:'sal', quantity:15, unit:'gr'
},]

const RecipeCreator = () => {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="">Titulo</label>
            <input type="text" placeholder="Titulo" />
          </div>
          <div>
            <label htmlFor="">Descripcion</label>
            <input type="text" placeholder="Descripcion" />
          </div>
          <div>
            {ingredients.map((ingredients, índice) => (
              <div key={índice} className="ingredientes">
                {}
              </div>
            ))}
          </div>
        </form>
      </div>
    );
}
export default RecipeCreator;