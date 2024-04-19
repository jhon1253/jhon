// Definimos algunas variables
let nombre = "Juan";
let edad = 30;

// Almacenamos las variables en el localStorage
localStorage.setItem("nombre", nombre);
localStorage.setItem("edad", edad.toString());

// Recuperamos las variables del localStorage
let nombreRecuperado = localStorage.getItem("nombre");
let edadRecuperada = parseInt(localStorage.getItem("edad"));

// Mostramos las variables recuperadas
console.log("Nombre recuperado:", nombreRecuperado);
console.log("Edad recuperada:", edadRecuperada);