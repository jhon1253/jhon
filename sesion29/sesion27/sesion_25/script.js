let numero = prompt("Por favor, ingresa un numero: ");
cadena = numero.split("")
alert(cadena)
let primerapos = cadena[1]
let segundapos = cadena[2]
alert("primerapos: " + primerapos)
alert("segundapos: " + segundapos)
let unidades = cadena[cadena.length -1];
let decenas = cadena[cadena.length -2];


alert("unidades: " + unidades + "\nDecenas: " + decenas);
alert("Total numeros de la cadena: " + cadena.length);
