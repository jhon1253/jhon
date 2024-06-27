const os = require('os')
function obtenerInfDelSistema () {
    return{
        plataforma: os.platform(),
        arquitectura: os.arch(),
        CPUs: os.cpus(),
        memoriaL: os.freemem() /1024 /1024,
        memoriaT: os.totalmem() /1024 /1024

    }
}

function tiempoComputador(){
    return {
        tiempoEnsComputador: os.uptime()
    }
}

function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}
module.exports = {
    suma,
    resta,
    obtenerInfDelSistema,
    tiempoComputador
};