const fs = require ('fs')
const filePath = 'arc_creado.txt'

fs.writeFile(filePath, 
    'Este texto se va a guardar dentro den arc_creado. \n', 
    (err) => {
    if(err) throw err
    console.log("El archivo fue creado con exito ")
})