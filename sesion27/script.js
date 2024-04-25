let numero = parseFloat(prompt("ingresar numero para ver su tabla: "));



for (let i = 1; i <= 10; i++) {
    let numeros = numero * i
    console.log(numero + " x " + i + " = " + numeros);
} 

let numeros = [1,2,3,4,5,6,7,8,9]
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("la suma de los elementos del array es: " + suma);




let libreria = [
    { titulo: "Cien años de soledad", Autor: "Gabriel García Márquez", Año: 1967 },
    { titulo: "1984", Autor: "George Orwell", Año: 1949 },
    { titulo: "Don Quijote de la Mancha", Autor: "Miguel de Cervantes", Año: 1605 },
    { titulo: "La Odisea. ", Autor: "Homero", Año: -800 }  // 
];
let opcion = prompt("Si deseas buscar un libro por autor ingresa 1, si lo deceas por año ingresa 2 o si deseas ver todas las propiedades de los libros ,marca 3: ");
if (opcion === "1") {
let autor = prompt("Nombre de autor: ");
for (let i = 0; i < libreria.length; i++) {
    if (autor === libreria[i].Autor) {
    console.log("libro disponible: " + libreria[i].titulo + "Autor: " + libreria[i].Autor + "Año: " + libreria[i].Año)
} 
} 
} else if (opcion === "2") {
    let año = parseInt(prompt("Nombre el año que deseas buscar: "));
for (let i = 0; i < libreria.length; i++) {
    if (año === libreria[i].Año) {
    console.log("libro disponible: " + libreria[i].titulo + "Autor: " + libreria[i].Autor + "Año: " + libreria[i].Año)
} 
}
    
} else if (opcion === "3") {
    
for (let i = 0; i < libreria.length; i++) {
    
    console.log("libro disponible: " + libreria[i].titulo + " Autor: " + libreria[i].Autor + " Año: " + libreria[i].Año)
}
}