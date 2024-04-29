let inventario = [{
    nombre: 'Tenis',
    precio: 3000,
    cantidad: 2
},{
    nombre: 'Camisas',
    precio: 2000,
    cantidad: 5
}
];


function mostrarInventario() {
console.log("Inventario Actual:")
inventario.forEach((item) =>
    console.log(`${item.nombre} - Precio: $${item.precio} - Cantidad: ${item.cantidad}`))
}

function agregarInventario() {
let nombreA = prompt("Ingrese el nombre del producto: ")
let precioA = parseFloat(prompt("Ingrese el precio: "))
let cantidadA = parseInt(prompt("Ingrese la cantidad: "))
let Tenis = inventario.find((item) => item.nombre === nombreA)
if (Tenis != undefined) {
    productoA.cantidad += cantidadA
    if (Tenis.precio != precioA) {
        Tenis.precio = precioA
    }
} else {
    inventario.push({nombre: nombreA, precio: precioA, cantidad: cantidadA})
}
}
function venderInventario() {
console.log("Vender producto: ")

let nombreA = prompt("¿Que producto deseas comprar? ")
let cantidadA = prompt("¿Que cantidad deseas comprar? ")
let Tenis = inventario.find((item) => item.nombre === nombreA)
if (Tenis != undefined) {
    if (Tenis.cantidad >= cantidadA){
        Tenis.cantidad -= cantidadA
    }else {
        console.log(`producto: ${Tenis.nombre} - Precio: ${productoA.precio} cantidad insuficiente, Cantidad disponible: ${Tenis.cantidad}`)
    }
} else {
     console.log(`producto: ${nombreA} No disponible `)
}
}
let continuar = true
while (continuar) {
let operacion = prompt("Ingrese operación (ver, agregar, Comprar, salir): ")
switch (operacion) {
    case "ver":
        mostrarInventario()
        break;
    case "agregar":
        agregarInventario()
        break
    case "Comprar":
        venderInventario()
        break;
    case "salir":
        continuar = false
        console.log("Fin de operación.")
        break
    default:
        console.log("Operación inválida.")
}
}