const fs = require("fs");
const filePath = "input.txt";;

fs.writeFile(
  filePath,
  "simular la realización de varias operaciones asincrónicas utilizando async/await. Las operaciones son \n",
  (err) => {
    if (err) throw err;
    console.log("El archivo fue creado con exito ");
  }
);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //retorna un apromesa
}

async function leerArchivo() {
  await delay(5000);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
    } else {
      console.log("Se leyeron los datos los cuales son:", data);
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //retorna un apromesa
}

async function agregarTexto (){
  await delay(4000);
fs.appendFile(filePath, "Este es el contenido adicional. \n", (err) => {
  if (err) throw err;
  console.log("El contenido de prueba fue agregado correctamente");
});
}
// Llamar a la función para leer datos con espera
leerArchivo();

agregarTexto();






