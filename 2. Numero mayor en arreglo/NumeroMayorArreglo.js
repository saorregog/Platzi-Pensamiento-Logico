// NÚMERO MAYOR EN UN ARREGLO

// DEFINICIÓN DE VARIABLES
let enunciado = [3, -56, 0, 89, 12];
let respuesta = Number.NEGATIVE_INFINITY;

// FUNCIÓN DE BÚSQUEDA DE NÚMERO MAYOR EN UN ARREGLO
function numeroMayor(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > respuesta) {
      respuesta = arreglo[i];
    }
  }
  console.log(respuesta);
}

// BÚSQUEDA DE NÚMERO MAYOR EN EL ARREGLO DEL ENUNCIADO
numeroMayor(enunciado);
