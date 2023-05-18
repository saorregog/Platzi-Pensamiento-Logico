// EXTRACCIÓN DE PALABRAS

// DEFINICIÓN DE VARIABLES
let oracion = "las flores son azules";

// FUNCIÓN DE EXTRACCIÓN DE PALABRAS
function extraccionPalabras(texto, posicionInicio, posicionFinal) {
  let extraccion = "";
  for (let i = posicionInicio - 1; i < posicionFinal; i++) {
    extraccion = extraccion + texto[i];
  }
  console.log(extraccion);
}

// EXTRACCIÓN DE PALABRAS DE UNA ORACIÓN
extraccionPalabras(oracion, 5, 10);
