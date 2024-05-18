document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('formaReceta');
    const recipeList = document.getElementById('recipe-list');

    // Cargar recetas al cargar la página
    loadRecipes();

    recipeForm.addEventListener('submit', e => {
        e.preventDefault();
        addRecipe();
    });
    
    // Agregar nuevo input de ingrediente
    document.getElementById('add-ingredient').addEventListener('click', () => {
        const ingredientList = document.querySelector('.listaIngredientes');
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('ingredient');
        ingredientDiv.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingrediente" required>
        <input type="text" class="ingredient-quantity" placeholder="Cantidad" required>
        <button type="button" class="remove-ingredient">Eliminar</button>
    `;
        ingredientList.appendChild(ingredientDiv);
    });

    // Eliminar ingrediente
    recipeForm.addEventListener('click', e => {
        if (e.target.classList.contains('remove-ingredient')) {
            e.target.parentElement.remove();
        }
    });

    function addRecipe() {
        const recipeName = document.getElementById('nombreReceta').value;
        const recipeInstruction = document.getElementById('recipe-instruction').value;
        const ingredients = [];
        document.querySelectorAll('.ingredient').forEach(ingredient => {
            const name = ingredient.querySelector('.ingredient-name').value;
            const quantity = ingredient.querySelector('.ingredient-quantity').value;
            if (name && quantity) {
                ingredients.push({ name, quantity });
            }
        });
        if (recipeName && recipeInstruction && ingredients.length > 0) {
            const recipe = { name: recipeName, instruction: recipeInstruction, ingredients };
            saveRecipe(recipe);
            displayRecipes();
            recipeForm.reset();
        } else {
            alert('Por favor, complete todos los campos de la receta y al menos un ingrediente.');
        }
    }

    function saveRecipe(recipe) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function loadRecipes() {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.forEach(recipe => {
            displayRecipe(recipe);
        });
    }

    function displayRecipe(recipe) {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Preparación:</strong> ${recipe.instruction}</p>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient.name}: ${ingredient.quantity}</li>`).join('')}
        </ul>
        <button class="remove-recipe">Eliminar Receta</button>
        <hr>
    `;
        recipeList.appendChild(recipeDiv);
    }

    function displayRecipes() {
        recipeList.innerHTML = '';
        loadRecipes();
    }

    // Eliminar receta
    recipeList.addEventListener('click', e => {
        if (e.target.classList.contains('remove-recipe')) {
            e.target.parentElement.remove();
            const recipeName = e.target.parentElement.querySelector('h3').textContent;
            removeRecipe(recipeName);
        }
    });

    function removeRecipe(name) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes = recipes.filter(recipe => recipe.name !== name);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
});

