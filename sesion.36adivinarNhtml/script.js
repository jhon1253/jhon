let numMin = 1;
let numMax = 100;
let aleatorio = parseInt((Math.random() * 100) + 1);
let intentos = 0;
let numero = ''
let resultado = ''

console.log(aleatorio)

// parseInt(prompt("Ingresa un numero entre el " + numMin + " y el " + numMax + ".\n"));

function AdivinaNumero (){
     intentos++;
    numero = document.getElementById('inputGuess').value
    
if(numero < aleatorio){
    resultado = ("Intenta con un numero mas alto");
        }
else if (numero > aleatorio){
    resultado = ("Intenta con un numero mas bajo");
        }
else {
    resultado = ("¡Acertaste! adivinaste el numero en: " + (intentos) + " intentos.");
}
document.getElementById("resultado").innerText = resultado
}



