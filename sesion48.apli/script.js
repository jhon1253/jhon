let recetas = [];

window.onload = function () {
    if (localStorage.getItem("recetas")) {
        recetas = JSON.parse(localStorage.getItem("recetas"));
        mostrarRecetas();
    }
}

function AgregarReceta() {
    let receta = {
        id: recetas.length + 1,
        nombre: document.getElementById("nombreReceta").value,
        preparacion: document.getElementById("preparacionReceta").value,
        ingredientes: [
            {
                nombre: document.getElementById("nombreIngrediente").value,
                cantidad: document.getElementById("cantidadIngrediente").value
            }
        ]
    };

    recetas.push(receta);

    localStorage.setItem("recetas", JSON.stringify(recetas));

    limpiarFormulario();

    // No es necesario manipular 'receta' aquí
    // mostrarRecetas();
}

function EliminarReceta(id) {
    recetas = recetas.filter(receta => receta.id !== id);
    localStorage.setItem("recetas", JSON.stringify(recetas));
    mostrarRecetas();
}

function mostrarRecetas() {
    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.innerHTML = "";

    recetas.forEach(receta => {
        let itemReceta = document.createElement("li");
        itemReceta.textContent = receta.nombre;
        let listaIngredientes = document.createElement("ul"); // Crear lista de ingredientes
        // Iterar sobre los ingredientes y agregarlos a la lista
        receta.ingredientes.forEach(ingrediente => {
            let itemIngrediente = document.createElement("li");
            itemIngrediente.textContent = `${ingrediente.nombre}: ${ingrediente.cantidad}`;
            listaIngredientes.appendChild(itemIngrediente);
        });

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function () {
            EliminarReceta(receta.id);
        };

        itemReceta.appendChild(listaIngredientes); // Agregar la lista de ingredientes al elemento de la receta
        itemReceta.appendChild(botonEliminar);
        listaRecetas.appendChild(itemReceta);
    });
}

function limpiarFormulario() {
    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";
}


receta.nombre = document.getElementById("nombreReceta").value;
receta.preparacion = document.getElementById("preparacionReceta").value;
receta.ingredientes.nombre = document.getElementById("nombreIngrediente").value;
receta.ingredientes.cantidad = document.getElementById("cantidadIngrediente").value;
//en estos casos es donde comienzo a llamar cada ad de mi html con los nombres que necesito


let listaRecetas = document.getElementById("listaRecetas");
let datosReceta = document.createElement("li");
datosReceta.innerHTML = receta.nombre;
datosReceta.innerHTML += "\n";

listaRecetas.appendChild(datosReceta)

let listaPreparacion = document.getElementById("listaPreparacion");
let datosPreparacion = document.createElement("ol");
datosPreparacion.innerHTML += receta.preparacion;
datosReceta.innerHTML += "\n";

listaPreparacion.appendChild(datosPreparacion)

let listaIngredientes = document.getElementById("listaIngredientes");
let datosIngrediente = document.createElement("ol");
datosIngrediente.innerHTML += receta.ingredientes.nombre;
datosIngrediente.innerHTML += receta.ingredientes.cantidad;
datosReceta.innerHTML += "\n";

listaIngredientes.appendChild(datosIngrediente)

let listaCantidad = document.getElementById("listaCantidad");
let datosCantidad = document.createElement("ol");
datosCantidad.innerHTML += receta.ingredientes.cantidad;
datosReceta.innerHTML += "\n";

listaCantidad.appendChild(datosCantidad)


document.getElementById("nombreReceta").value = "";
document.getElementById("preparacionReceta").value = "";
document.getElementById("nombreIngrediente").value = "";
document.getElementById("cantidadIngrediente").value = "";



function EliminarReceta() {
    recetas.pop()

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild)
}