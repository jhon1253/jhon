const fs = require ('fs')
const segundo = 'segundoArchivo.txt';

fs.readFile(segundo, 'utf-8', 
    (err, data) => {
    if(err) throw err;
    console.log("El archivo contiene: ", data)
})

fs.appendFile(segundo, 'Este es el contenido adicional. \n', (err)=>{
    if(err) throw err;
    console.log("Se agrego el segundo contenido", data)
})

fs.readFile(segundo, 'utf-8', 
    (err, data) => {
    if(err) throw err;
    console.log("El segundo archivo contiene: ", data)
})