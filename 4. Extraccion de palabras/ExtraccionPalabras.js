// EXTRACCIÓN DE PALABRAS

// DEFINICIÓN DE VARIABLE
let oracion = "las flores son azules";

// FUNCIÓN DE EXTRACCIÓN DE PALABRA
function extraccionPalabra(texto, posicionLetraInicio, posicionLetraFin) {
  let palabraExtraida = "";
  for (let i = posicionLetraInicio - 1; i < posicionLetraFin; i++) {
    palabraExtraida = palabraExtraida + texto[i];
  }
  console.log(palabraExtraida);
}

// EXTRACCIÓN DE PALABRA DE UNA ORACIÓN
extraccionPalabra(oracion, 5, 10);
