// EJERCICIO 1
function calcularPromedioNotas(nota1,nota2 ,nota3 ,nota4 ,nota5){
    let resultado
    resultado =  parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)
    resultado = resultado/5
    return resultado
  }
  let nota1 = parseInt(prompt("Ingresa tu nota N.1: "));
  let nota2 = parseInt(prompt("Ingresa tu nota N.2: "));
  let nota3 = parseInt(prompt("Ingresa tu nota N.3: "));
  let nota4 = parseInt(prompt("Ingresa tu nota N.4: "));
  let nota5 = parseInt(prompt("Ingresa tu nota N.5: "));
  
  let promedio =  calcularPromedioNotas(nota1,nota2 ,nota3 ,nota4 ,nota5)
  console.log(promedio)

// EJERCICIO 2

function calcularAreaPerimetro(base, altura){
    
    let area = base * altura;
   let perimetro = 2 * (base + altura);
   return {
       area: area,
       perimetro: perimetro
   };
}
let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));


let resultado = calcularAreaPerimetro(base,altura);
console.log("Área del rectángulo:", resultado.area);
   console.log("Perímetro del rectángulo:", resultado.perimetro);



//    EJERCICIO 3
   function calcularVolumenEsfera(radio) {
    let volumen = (4/3) * 3.1416 * (radio * radio * radio);
    return volumen;
  }
  
  let radioDeLaEsfera = parseInt(prompt("Ingresar un valor para el radio: "));
  
  let resultado = calcularVolumenEsfera(radioDeLaEsfera);
  console.log(`El volumen de la esfera es: ${resultado}`)



// EJERCICIO 4 
// TALLER DE PRACTICA
// 1-rea una función que acepte dos números y una cadena que represente una operación 
// ("suma", "resta", "multiplicacion", "division"). 
// La función debe realizar la operación correspondiente y devolver el resultado.


let num1 = parseInt(prompt("Ingresar el primer valor: "));
  let num2 = parseInt(prompt("Ingresar el segundo valor: "));
  
 function calcularOperacion() {
    let continuar = true
 while (continuar) {
     let continuar = true
     
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
          resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no válida";
    }
 
    return resultado;
  }
 }
 
  let operacion = prompt("Ingresar el nombre de la operacion que desea realizar, (suma / resta / multiplicacion / division): ");
 
 let resultadoFinal = calcularOperacion()
  console.log("El resultado es: " + resultadoFinal)


// EJERCICIO 5

// 2- Escribe una función que convierta una temperatura de Celsius a Fahrenheit o viceversa.
// La función debe aceptar la temperatura y una cadena que indique la escala de temperatura 
// ("C" para Celsius, "F" para Fahrenheit) y devolver la temperatura convertida.


function convertirTemperatura() {
    let temperaturaConvertida;

    switch (conversion) {
      case "F":
        temperaturaConvertida = (temperatura * 9/5)+32;
        break;
      case "C":
        temperaturaConvertida = (temperatura -32)*5/9;
        break;
      default:
        temperaturaConvertida = "Operación no válida";
    }
    return temperaturaConvertida;;
  }
 
  let temperatura = parseInt(prompt("Ingresar la temperatura: "));
  let grados = prompt("Ingresar en que grados está la temperatura (C,F): ");
  let conversion = prompt("A cual temperarura deseas convertir? (C,F): ");

  let resultado = convertirTemperatura();
 
  console.log("temperatura es igual a: " + resultado + "°");



//EJERCICIO 6

//5- Crea una función que acepte la fecha de nacimiento de una persona y calcule su edad en años y días.

//La función debe devolver un objeto con dos propiedades: "años" y "días".

