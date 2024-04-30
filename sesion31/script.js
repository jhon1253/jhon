let inventario = [{
    nombre: 'Camisas',
    precio: 60000,
    cantidad: 76
},{
    nombre: 'Pantalones',
    precio: 90000,
    cantidad: 67
},{
    nombre: 'Zapatillas',
    precio: 200000,
    cantidad: 46
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
    let productoA = inventario.find((item) => item.nombre === nombreA)
    if (productoA != undefined) {
        productoA.cantidad += cantidadA
        if (productoA.precio != precioA) {
            productoA.precio = precioA
        }
    } else {
        inventario.push({nombre: nombreA, precio: precioA, cantidad: cantidadA})
    }
}
function venderInventario() {
    console.log("Vender producto: ")
   
    let nombreA = prompt("¿Que producto deseas comprar? ")
    let cantidadA = prompt("¿Que cantidad deseas comprar? ")
    let productoA = inventario.find((item) => item.nombre === nombreA)
    if (productoA != undefined) {
        if (productoA.cantidad >= cantidadA){
            productoA.cantidad -= cantidadA
        }else {
            console.log(`producto: ${productoA.nombre} - Precio: ${productoA.precio} cantidad insuficiente, Cantidad disponible: ${productoA.cantidad}`)
        }
    } else {
         console.log(`producto: ${nombreA} No disponible `)
    }
}
let continuar = true
while (continuar) {
    let operacion = prompt("Ingrese operación (ver, agregar, vender, salir): ")
    switch (operacion) {
        case "ver":
            mostrarInventario()
            break;
        case "agregar":
            agregarInventario()
            break
        case "vender":
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