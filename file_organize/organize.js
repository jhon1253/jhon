function Organizar_Archivos(
  Carpeta_archivos,
  Carpeta_destino,
  Accion = ""
) {
  const fs = require("fs");
  const path = require("path");
  const Crear_Carpeta = (dir) => {
    fs.mkdir(path.join(Carpeta_destino, dir), { recursive: true }, (err) => {
      if (err) {
        console.error(`Error al crear la carpeta: ${err}`);
      }
    });
  };

  fs.readdir(Carpeta_archivos, (err, files) => {
    if (err) {
      console.error("Error al leer el directorio:", err);
      return;
    }

    files.forEach((item) => {
      const file = path.join(Carpeta_archivos, item);
      const ExtName = path.extname(file);
      let destino = "";
      if (ExtName) {
        const nombreCarpeta = ExtName.substring(1);
        Crear_Carpeta(nombreCarpeta);
        destino = path.join(Carpeta_destino, nombreCarpeta, item);
        console.log(destino);
        fs.copyFile(file, destino, (err) => {
          if (err) {
            console.error(`Error al copiar el archivo: ${item}`, err);
            return;
          }
          if (Accion == "mover") {
            fs.unlink(file, (err) => {
              if (err) {
                console.error(
                  `Error al eliminar el archivo original: ${item}`,
                  err
                );
                return;
              }
              console.log(`Archivo ${item} movido exitosamente.`);
            });
          }
        });
      } else {
        console.log("No se puede mover el archivo:", item);
      }
    });
  });
}
const Carpeta_archivos =
  "C:/Users/sebas/OneDrive/Escritorio/jhon.txt/file_organize/input_file";

const Carpeta_destino = "C:/Users/sebas/OneDrive/Escritorio/jhon.txt/file_organize/archivos_organizados";

Organizar_Archivos(Carpeta_archivos, Carpeta_destino, "mover");