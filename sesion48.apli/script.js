let recetas = [];//aqui comenzamos a declrar la variables


window.onload = function() {
    if (localStorage.getItem("recetas")) {
        recetas = JSON.parse(localStorage.getItem("recetas"));
        mostrarRecetas();
    }
}

function AgregarReceta() {
    let receta = {
        nombre: "",//aqui comienzo hacer una funcion para hacer un array tipo jhon
        preparacion: "",
        ingredientes: {
            nombre: "",
            cantidad: ""
        }
    }

    receta.nombre = document.getElementById("nombreReceta").value;
    receta.preparacion = document.getElementById("preparacionReceta").value;
    receta.ingredientes.nombre = document.getElementById("nombreIngrediente").value;
    receta.ingredientes.cantidad = document.getElementById("cantidadIngrediente").value;
//en estos casos es donde comienzo a llamar cada ad de mi html con los nombres que necesito
    recetas.push(receta);//para que me agregue

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
    
} 

function EliminarReceta() {
    recetas.pop()

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild)
}