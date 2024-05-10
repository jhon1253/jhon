let numMin = 1;
let numMax = 100;
let aleatorio = parseInt((Math.random() * 100) + 1);
let intentos = 0;
let numero = ''
let resultado = ''

console.log(aleatorio)



function AdivinaNumero() {
    intentos++;
    numero = document.getElementById('inputGuess').value

    if (numero < numMin) {
        resultado = ("Numero no permitido, intenta con uno MAYOR a 0 ")
    }
    else if (numero < aleatorio) {
        resultado = ("Intenta con un numero mas alto");
    } else if (numero > numMax) {
        resultado = ("Numero excedio el limite");
    }
    else if (numero > aleatorio) {
        resultado = ("Intenta con un numero mas bajo");
    }
    else {
        resultado = ("¡Acertaste! adivinaste el numero en: " + (intentos) + " intentos.");
    }
    document.getElementById("resultado").innerText = resultado

    document.getElementById("subtitulo").innerHTML = `<h3 style="color:red">Adivina El Numero</h3>`
}













