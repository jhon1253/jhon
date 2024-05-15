// Ejercicios en clase - sesión 39
// Sistema de Lista de Tareas
// Desarrollar un sistema para gestionar una lista de tareas. Los usuarios podrán añadir tareas a la lista, 
// marcar tareas como completadas y ver las tareas actuales.Especificaciones:
// Añadir una nueva tarea con un título.
// Permitir al usuario especificar el índice de la tarea a marcar como completada.
// Mostrar todas las tareas y su estado (completada o no).

let tareas = [{
    titulo: 'tarea1',
    descripcionTarea: 'realizar el aseo',
    estadoTarea: false
  }
]

function agregarTarea(tituloF,descripcion) {
    tareas.push({titulo:tituloF,descripcionTarea:descripcion,estadoTarea:false})
    console.log("Tarea agregada")
}
function mostrarTareas() {
    tareas.forEach((item, index) =>
        console.log(`${index + 1} - titulo de la tarea: ${item.titulo}, descripcion: ${item.descripcionTarea}, estado: ${item.estadoTarea ? 'Tarea completa':'Tarea incompleta' }`))
}
function completarTareas(){
    let numTarea = parseInt(prompt("Ingresa el numero de la tarea que va a completar: "))
    numTarea -= 1
    let tareaCompletar = tareas[numTarea]
    if(tareaCompletar == undefined ){
        console.log("Tarea no encontrada.")
    } else{
        if(tareaCompletar.estadoTarea === true){
            console.log("Tarea completa")
        } else{
             tareaCompletar.estadoTarea = true
    console.log("Tarea " + tareaCompletar.titulo + " Completada")  
        }
        }
}
let continuar = true
while(continuar) {
    let operacion = prompt("Ingresaar el numero de la operacion que deseas realizar: (\n1:agregar tarea, \n2:mostrar todas las tareas, \n3:completar tareas, \n4:salir.): ")

    switch (operacion) {
        case "1":
            let tituloTarea = prompt("ingrese el titulo de la tarea: ");
            let descripcionTarea = prompt("ingrese la descripcion de la tarea: ")
            agregarTarea(tituloTarea,descripcionTarea)
            break;
        case "2":
            mostrarTareas()
            break
        case "3":
            completarTareas()
            break;
        case "4":
            break
        default:
            console.log("Operación inválida.")
    }
}

// Ejercicio 2: Generador de Mensajes Personalizados
// Escribir una función que genere un mensaje personalizado basado en la hora del día. 
// La función debe recibir el nombre de una persona y la hora actual y retornar un saludo adecuado 
// (Buenos días, tardes o noches, dependiendo de la hora).

function generarMensaje(nombre, hora){
    if(hora > 23 && hora < 0){
        console.log("Hora invalida")
    }else if(hora < 12){
        console.log(`Buenos días ${nombre}`)
    }else if(hora >= 12 && hora <= 18){
        console.log(`Buenas tardes ${nombre}`)
    }else{
        console.log(`Buenas noches ${nombre}`)
    }
}
let nombreUsuario = prompt("Ingresa tu nombre: \n")
let hora = parseFloat(prompt("Ingresa hora actual en hora militar: \n "))
generarMensaje(nombreUsuario, hora)


// Ejercicio 3: Crear Resumen de Compra
// Desarrollar una función que tome un array de objetos representando artículos de compra 
// (cada uno con un nombre y precio), calcule el total, y retorne un resumen de compra utilizando 
// template literals.

const listaDeCompra = [
    { nombre: 'Camisa', precio: 40000 },
    { nombre: 'Pantalón', precio: 100000 },
    { nombre: 'Zapatos', precio: 200000 },
    { nombre: 'Gorra', precio: 60000 },
  ];
  console.log("Historial de compras:\n")
  function mostrarResumenDeCompra() {
  console.log("Resumen de compras: ")
  listaDeCompra.forEach((item) =>
      console.log(`${item.nombre} - $${item.precio}`))
  }
  function totalCompra(articulos) {
   
    let resumen = "Resumen de compra:\n";
      let precioTotal =0
    for (let n = 0; n < articulos.length; n++) {
      
        precioTotal += articulos[n].precio
      }
      console.log('El precio total de todos los productos es: $'+precioTotal)
  }
  let continuar = true
  while (continuar) {
  let operacion = prompt("Ingrese:\n1- ver sus compras \n2- ver el total de sus compras \n3- salir: ")
  switch (operacion) {
      case "1":
          mostrarResumenDeCompra()
          break;
       case "2":
          totalCompra(listaDeCompra)
          break;
     
      case "3":
          continuar = false
          console.log("Compra Finalizada.")
          break
      default:
          console.log("\nIngresa solo una de las opciones designadas: \n")
  }
  }

// Ejercicio 3:
// Crear un sistema que gestione reservas para eventos. El sistema deberá poder añadir eventos, 
// registrar asistentes a cada evento, y generar un reporte final usando map y template literals.