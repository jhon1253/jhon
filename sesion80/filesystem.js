const fs = require ('fs')
const filePath = 'nombreArchivo.txt'

fs.writeFile(filePath, 
    'Este texto estar guardado en el nuevo. \n', 
    (err) => {
    if(err) throw err
    console.log("El archivo fue creado con exito ")
})

fs.readFile(filePath, 'utf-8', 
    (err, data) => {
    if(err) throw err;
    console.log("El archivo contiene: ", data)
})

fs.readFile('fileNew.txt', 'utf-8', 
    (err, data) => {
    if(err) throw err;
    console.log("El archivo contiene: ", data)
})

fs.appendFile(filePath, 'Este es el contenido adicional. \n', (err)=>{
    if(err) throw err;
    console.log("El contenido de prueba fue agregado correctamente")
})




