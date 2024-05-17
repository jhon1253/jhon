// Ejercicio 1: Dibujar un Cuadro de Asteriscos
// Crea una función en JavaScript que reciba un número entero n y dibuje
//  un cuadro de n x n asteriscos. Por ejemplo, si n es 4, debería
// Imprimir:

function dibujarCuadroAsteriscos(numero) {
    
    for (let i = 0; i < numero; i++) {
        let suma = '';
        
        for (let j = 0; j < 10; j++) {
            
            suma += '* ';
                 }
        
        console.log(suma);
    }
}

dibujarCuadroAsteriscos(4)

// Ejercicio 2: Generar Patrones
// Crear un patrón usando bucles anidados. Por ejemplo, 
// generar un triángulo rectángulo con asteriscos.


function generarTrianguloRectangulo(filas) {
    for (let i = 1; i <= filas; i++) {
        let triangulo = '';
        for (let j = 1; j <= i; j++) {
          triangulo += '💀 ';
        }
        console.log(triangulo);
      }
    }
    
    generarTrianguloRectangulo(8);

    // Ejercicio 3: Serie de Fibonacci hasta n, 
    // Escribe una función que genere la serie de Fibonacci hastaun número n dado.
    //  La serie de Fibonacci es una secuencia donde cada número es la suma de los dos números anteriores,
    //   empezando con 0 y 1. Por ejemplo, si n es 10, debería imprimir:

let numero = prompt("ingrese numero: ")
function fib(numeros){
    let fibonacci = [0,1]
    for(let i= 2; i < numeros; i++ ){
        fibonacci[i]=fibonacci[i-1] + fibonacci[i-2]
       
    }
    console.log(fibonacci)
   
}
fib(numero)