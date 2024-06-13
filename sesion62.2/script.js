document.getElementById("parrafo").textContent = "Lista de cosas";


const titulo = document.querySelector(".titulo").textContent= 'Nuevo 2Título';
const parrafo1 = document.querySelector(".parrafo1").textContent= 'Nuevo 3Título';




    const tareas = document.getElementById('tareas');  //formulario
    const tareaUsuario = document.getElementById('tareaUsuario');  //input
    const tareasPendientes = document.getElementById('tareasPendientes');  //la lista

    tareas.addEventListener('submit', function(evento) {  //cuando se active sub de boton
        evento.preventDefault();  //no se recargue auto y elimine la tarea
        if (tareaUsuario.value !== '') {  // si no esta vacio me traiga el valor del imput
            const nuevaTarea = document.createElement('li'); // se crea y la guardamos en nuenvaTarea
            nuevaTarea.textContent = tareaUsuario.value; // lo traemos del input y lo asigna a nueva tarea
            const botonEliminar = document.createElement('button'); //crear elemento boton y lo asignams a la variable
            botonEliminar.textContent = 'Eliminar'; //lo asignamos como nombre al boton
            botonEliminar.addEventListener('click', function() { //al darle clic al boto eliminar la nueva tarea se elimina
                nuevaTarea.remove();
            });

            nuevaTarea.appendChild(botonEliminar); //le pone boton eliminar a cada tarea
            tareasPendientes.appendChild(nuevaTarea); //nos pone la tarea en la pantalla
            tareaUsuario.value = ''; //hace que nos limpie el campo
        }
    });








let maspequeña = document.getElementById("maspequeña");
maspequeña.addEventListener('click', function(){
    maspequeña = document.getElementById("goku")
    maspequeña.width = 50
})

let masgrande = document.getElementById("masgrande");
masgrande.addEventListener('click', function(){
    masgrande = document.getElementById("goku")
    masgrande.width = 250
})