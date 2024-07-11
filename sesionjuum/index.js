const path = require ('path');

//ruta de ejemplo windows 
const filePath = "C:Users/sebas/Downloads/imagenes.png";


//obtener nombre del archivo
const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`); //output example.txt

//obtener ruta
const dirName = path.dirname(filePath);
console.log(`Dir Name: ${dirName}`);//output example.txt7 user local


//obtener la extencion del atributo
const extName = path.join('filePath');
console.log(`Ext Name: ${extName}`); //output.txt


//
const joinedPath = path.join("/Users", "/sebas", "/Downloads", "/imagenes.png");
console.log(`Joined Path: ${joinedPath}`);

const resolvedPath = path.resolve('ejemplo.txt');
console.log(`Resolve Path: ${resolvedPath}`);


//ver ruta como objeto
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);

//formatear un objeto de ruta
const formattedPath = path.format(parsedPath);
console.log(`Formatted Path: ${formattedPath}`);

//cambiar la extencion de un archivo
const newFilePath = path.format({
    ...parsedPath,
    base: undefined,//reset base so it doesn't override ext and name
    ext: '.md'
});
console.log(`New File Path: ${newFilePath}`)
