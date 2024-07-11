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


fs.readFile(filePath, 'utf-8', (err,updatedData)=>{
    if(err) throw err;
    console.log("Contenido actualizado del archivo : \n",updatedData)
})