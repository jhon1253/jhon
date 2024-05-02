// 1- Crear una función en JavaScript que reciba una fecha y un número de días.
// Luego calcule qué día de la semana será después de esos días, puede utilizar la clase Date de JavaScript. 
// La función calculará la nueva fecha añadiendo los días especificados a la fecha inicial,
//  y luego determinará el día de la semana correspondiente.

function calcularNuevaFechaYDiaSemana() {
 
    let fechaInicial = prompt('Ingresa la fecha: ');
    let diasAAnadir = parseInt(prompt('Ingresa el número de días a añadir: '));
    let nuevaFecha = new Date(fechaInicial);
    
    nuevaFecha.setDate(nuevaFecha.getDate() + diasAAnadir);
    
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let diaSemana = diasSemana[nuevaFecha.getDay()];
    
    console.log('La nueva fecha es: ' + nuevaFecha.toISOString().split('T')[0]);
    console.log('El día de la semana correspondiente es: ' + diaSemana);
  }
  calcularNuevaFechaYDiaSemana();

  
// 2-crear una versión de la calculadora donde cada operación matemática (+, -, *, /) 
//   se realice mediante una función dedicada.
// Función para procesar la entrada del usuario y calcular el resultado, de acuerdo a la operación deseada.
// La calculadora deberá continuar realizando operaciones, 
// hasta que en la entrada del operador se escriba la palabra “salir”.


function ingresarNumero(index){
    return parseInt(prompt("Ingresar numero " + index + ": "));
   }
   function ingresarOperacion(){
    return prompt("Ingresar el signo (+,-,*,/) de la operacion que desea realizar: ");
   }
   function sumar(num1, num2) {
       return num1 + num2;
   }
   function restar(num1, num2) {
       return num1 - num2;
   }
   function multiplicar(num1, num2) {
       return num1 * num2;
   }
   function dividir(num1, num2) {
       return num1 / num2;
   }
   function calcularResultado(num1, num2, operacion) {
       let resultado;
   
       switch (operacion) {
         case "+":
           resultado = sumar(num1, num2);
           break;
         case "-":
           resultado = restar(num1, num2);
           break;
         case "*":
           resultado = multiplicar(num1, num2);
           break;
         case "/":
             resultado = dividir(num1, num2);
           break;
         default:
           resultado = "Operación no válida";
       }
       return resultado;
   }
   function salida(){
       return prompt("Desea salir? (si,no): ");
   }
   
    let operacion;
    let salir;
    
    console.log(`¡Hola!`);
    while(salir != "si"){
       num1 = ingresarNumero(1);
       num2 = ingresarNumero(2);
       operacion = ingresarOperacion();
       resultado = calcularResultado(num1, num2, operacion);
       console.log(`El resultado de la operación es: ${resultado}`);
       salir = salida();
   }
   console.log(`¡Adios!`);
   

