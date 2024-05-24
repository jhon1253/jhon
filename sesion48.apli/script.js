let recetaActual = null;


function LeerLocalstorage() {
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    const listaRecetasDiv = document.getElementById('listaRecetas');
    listaRecetasDiv.innerHTML = '';
    recetas.forEach((receta, index) => {
        const recetaDiv = document.createElement('div');
        recetaDiv.innerHTML = `
            <h3>${receta.nombre}</h3>
            <p>${receta.preparacion}</p>
            <ul>
                ${receta.ingredientes.map(ing => `<li>${ing.nombre} - ${ing.cantidad}</li>`).join('')}
            </ul>
            <button onclick="EliminarReceta(${index})">Eliminar</button>
        `;
        listaRecetasDiv.appendChild(recetaDiv);
    });
}

function AgregarReceta() {
    const nombreReceta = document.getElementById('nombreReceta').value;
    const preparacionReceta = document.getElementById('preparacionReceta').value;
    const nombreIngrediente = document.getElementById('nombreIngrediente').value;
    const cantidadIngrediente = document.getElementById('cantidadIngrediente').value;

    if (!nombreReceta || !preparacionReceta || !nombreIngrediente || !cantidadIngrediente) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevaReceta = {
        nombre: nombreReceta,
        preparacion: preparacionReceta,
        ingredientes: [{
            nombre: nombreIngrediente,
            cantidad: cantidadIngrediente
        }]
    };

    recetaActual = nuevaReceta; // Asignar la nueva receta como la receta actual

    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas.push(nuevaReceta);
    localStorage.setItem('recetas', JSON.stringify(recetas));

    LeerLocalstorage();
    document.getElementById('nombreReceta').value = '';
    document.getElementById('preparacionReceta').value = '';
    document.getElementById('nombreIngrediente').value = '';
    document.getElementById('cantidadIngrediente').value = '';
}


function AgregarIngrediente() {
    if (!recetaActual) {
        alert('No hay receta actual para agregar ingredientes. Por favor, agregue una nueva receta primero.');
        return;
    }

    // Obtenemos el valor de los campos de ingrediente
    const nombreIngrediente = document.getElementById('nombreIngrediente').value.trim();
    const cantidadIngrediente = document.getElementById('cantidadIngrediente').value.trim();

    // Verificamos si se ha proporcionado al menos un nombre o una cantidad de ingrediente
    if (!nombreIngrediente && !cantidadIngrediente) {
        alert('Por favor, ingrese al menos un nombre o una cantidad de ingrediente.');
        return;
    }

    // Creamos el nuevo ingrediente
    const nuevoIngrediente = {
        nombre: nombreIngrediente,
        cantidad: cantidadIngrediente
    };

    // Agregamos el nuevo ingrediente a la receta actual
    recetaActual.ingredientes.push(nuevoIngrediente);

    // Actualizamos la lista de recetas en el almacenamiento local
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    const indiceRecetaActual = recetas.findIndex(receta => receta.nombre === recetaActual.nombre);
    recetas[indiceRecetaActual] = recetaActual;
    localStorage.setItem('recetas', JSON.stringify(recetas));

    // Limpiamos los campos de ingrediente después de agregar
    document.getElementById('nombreIngrediente').value = '';
    document.getElementById('cantidadIngrediente').value = '';

    // Actualizamos la visualización de las recetas
    LeerLocalstorage();
}

function EliminarReceta(index) {
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    recetas.splice(index, 1);
    localStorage.setItem('recetas', JSON.stringify(recetas));
    LeerLocalstorage();
}
