const fs = require("fs");

// Función para crear un archivo de diario
function crearArchivoDiario() {
  fs.writeFile("diario.txt", "Mi primera entrada en el diario\n", (err) => {
    if (err) throw err;
    console.log("Archivo diario creado con éxito.");
  });
}

// Función para leer y mostrar el contenido del diario
function leerDiario() {
  fs.readFile("diario.txt", "utf8", (err, contenido) => {
    if (err) throw err;
    console.log(contenido);
  });
}

// Función para agregar una nueva entrada al diario
function agregarEntrada(nuevaEntrada) {
  fs.appendFile("diario.txt", `${nuevaEntrada}\n`, (err) => {
    if (err) throw err;
    console.log("Entrada agregada con éxito.");
  });
}

// Función para editar una entrada específica del diario
function editarEntrada(entradaVieja, entradaNueva) {
  fs.readFile("diario.txt", "utf8", (err, contenido) => {
    if (err) throw err;
    const nuevoContenido = contenido.replace(entradaVieja, entradaNueva);
    fs.writeFile("diario.txt", nuevoContenido, (err) => {
      if (err) throw err;
      console.log("Entrada editada con éxito.");
    });
  });
}

module.exports = {
  crearArchivoDiario,
  leerDiario,
  agregarEntrada,
  editarEntrada,
};
