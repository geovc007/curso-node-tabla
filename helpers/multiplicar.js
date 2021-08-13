const fs = require("fs");
const { resolve } = require("path/posix");

const crearArchivo = async (base, listar = false) => {
  try {
    console.log("Tabla del: ", base);
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      salida += `${base * i}\n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
