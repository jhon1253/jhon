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
let library = [
    { title: "Cien años de soledad", author: "Gabriel García Márquez", year: 1967 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", year: 1605 },
    { title: "La Odisea", author: "Homero", year: -800 }  // 
];

let opcion = prompt("Si deseas buscar un libro por autor ingresa 1 y si lo deceas por año ingresa 2, o si deseas ver todas las propiedades de los libros ,marca 3: ");
if (opcion === "1") {
let autor = prompt("Nombre de autor: ");
for (let i = 0; i < library.length; i++) {
    if (autor === library[i].author) {
    console.log("libro disponible: " + library[i].title + "Autor: " + library[i].author + "Año: " + library[i].year)
    
    console.log(library[i])
} 
} 
    
} else if (opcion === "2") {
    let año = parseInt(prompt("Nombre el año: "));
for (let i = 0; i < library.length; i++) {
    if (año === library[i].year) {
    console.log("libro disponible: " + "Titulo" + library[i].title + "Autor: " + library[i].author + "Año: " + library[i].year)
    
    console.log(library[i])
} 
}

} else if (opcion === "3") {
    
for (let i = 0; i < library.length; i++) {
    
    console.log("libro disponible: " + library[i].title + " Autor: " + library[i].author + " Año: " + library[i].year)
}
}