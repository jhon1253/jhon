const fs = require ('fs')
const filePath = 'tercerArchivo.txt'

fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log("El contenido original del archivo es : \n", data)
    nuevoContenido = 'este es el nuevo contenido, hay otras formas de modificar el contenido pero eso dependee del programador'
    
    fs.writeFile(filePath, nuevoContenido, (err)=>{
        if(err) throw err;
        console.log("cambiamos el anterior texto por este")
    })
});

fs.readFile(filePath, 'utf-8', (err,updatedData)=>{
    if(err) throw err;
    console.log("Contenido actualizado del archivo : \n",updatedData)
})