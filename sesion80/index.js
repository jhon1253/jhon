// archivo primcipal

const {suma, resta, obtenerInfDelSistema, tiempoComputador} = require ('./funciones')

var sumaDeDosNumeros = suma(15, 19)
var restaDeDosNumeros = resta(29, 9)
var infComputador = obtenerInfDelSistema()
var prendidoComputador = tiempoComputador()

console.log("La suma de los dps numero es : ", sumaDeDosNumeros);
console.log("La resta de los dos numeros es : ", restaDeDosNumeros);
console.log("La informacion del sistema : ", infComputador);
console.log("Tiempo del computador encendido : ", prendidoComputador);